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

export function getAccessorsKey() {
  return ['accessors'] as const
}

export function getInvitationsKey() {
  return ['invitations'] as const
}

export function getNetworksKey() {
  return ['networks'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getAccessorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accessors.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accessors', '/accessors', keyArgs] as const
}

export function getAccessorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accessors.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccessorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accessors.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccessors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accessors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accessors.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accessors.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accessors.$get>>>>
          >,
          ReturnType<typeof getAccessorsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accessors.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccessorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccessorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accessors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccessorsMutationKey() {
  return ['accessors', '/accessors', 'POST'] as const
}

export function getPostAccessorsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accessors.$post>>>>>,
    TError,
    InferRequestType<typeof client.accessors.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccessorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accessors.$post>) {
      return parseResponse(client.accessors.$post(args, options))
    },
  })
}

export function usePostAccessors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accessors.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.accessors.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccessorsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getNetworksNetworkIdMembersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['members']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['networks', '/networks/:networkId/members', keyArgs] as const
}

export function getNetworksNetworkIdMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['members']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['members']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdMembersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNetworksNetworkIdMembersMutationKey() {
  return ['networks', '/networks/:networkId/members', 'POST'] as const
}

export function getPostNetworksNetworkIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['members']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksNetworkIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['members']['$post']>,
    ) {
      return parseResponse(client.networks[':networkId'].members.$post(args, options))
    },
  })
}

export function usePostNetworksNetworkIdMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['members']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['members']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworksNetworkIdMembersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getNetworksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.networks.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['networks', '/networks', keyArgs] as const
}

export function getNetworksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.networks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNetworks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.networks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>
          >,
          ReturnType<typeof getNetworksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNetworksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNetworksMutationKey() {
  return ['networks', '/networks', 'POST'] as const
}

export function getPostNetworksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$post>>>>>,
    TError,
    InferRequestType<typeof client.networks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.networks.$post>) {
      return parseResponse(client.networks.$post(args, options))
    },
  })
}

export function usePostNetworks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.networks.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getNetworksNetworkIdNodesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networks)[':networkId']['nodes']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['networks', '/networks/:networkId/nodes', keyArgs] as const
}

export function getNetworksNetworkIdNodesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networks)[':networkId']['nodes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdNodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].nodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdNodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['nodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networks)[':networkId']['nodes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['nodes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['nodes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdNodesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['nodes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdNodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdNodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].nodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNetworksNetworkIdNodesMutationKey() {
  return ['networks', '/networks/:networkId/nodes', 'POST'] as const
}

export function getPostNetworksNetworkIdNodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['nodes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['nodes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksNetworkIdNodesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['nodes']['$post']>,
    ) {
      return parseResponse(client.networks[':networkId'].nodes.$post(args, options))
    },
  })
}

export function usePostNetworksNetworkIdNodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['nodes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['nodes']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworksNetworkIdNodesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getNetworksNetworkIdProposalsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['proposals']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['networks', '/networks/:networkId/proposals', keyArgs] as const
}

export function getNetworksNetworkIdProposalsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['proposals']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdProposalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].proposals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdProposals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['proposals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['proposals']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['proposals']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['proposals']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdProposalsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['proposals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdProposalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdProposalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].proposals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNetworksNetworkIdProposalsMutationKey() {
  return ['networks', '/networks/:networkId/proposals', 'POST'] as const
}

export function getPostNetworksNetworkIdProposalsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['proposals']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['proposals']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksNetworkIdProposalsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['proposals']['$post']>,
    ) {
      return parseResponse(client.networks[':networkId'].proposals.$post(args, options))
    },
  })
}

export function usePostNetworksNetworkIdProposals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['proposals']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['proposals']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworksNetworkIdProposalsMutationOptions<
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

export function getAccessorsAccessorIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accessors)[':AccessorId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accessors', '/accessors/:AccessorId', keyArgs] as const
}

export function getAccessorsAccessorIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accessors)[':AccessorId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccessorsAccessorIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accessors[':AccessorId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccessorsAccessorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accessors)[':AccessorId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accessors)[':AccessorId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accessors)[':AccessorId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accessors)[':AccessorId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccessorsAccessorIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accessors)[':AccessorId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccessorsAccessorIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccessorsAccessorIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accessors[':AccessorId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAccessorsAccessorIdMutationKey() {
  return ['accessors', '/accessors/:AccessorId', 'DELETE'] as const
}

export function getDeleteAccessorsAccessorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accessors)[':AccessorId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accessors)[':AccessorId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccessorsAccessorIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accessors)[':AccessorId']['$delete']>) {
      return parseResponse(client.accessors[':AccessorId'].$delete(args, options))
    },
  })
}

export function useDeleteAccessorsAccessorId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accessors)[':AccessorId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accessors)[':AccessorId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccessorsAccessorIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getNetworksNetworkIdMembersMemberIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['members'][':memberId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['networks', '/networks/:networkId/members/:memberId', keyArgs] as const
}

export function getNetworksNetworkIdMembersMemberIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['members'][':memberId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdMembersMemberIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].members[':memberId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdMembersMemberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['members'][':memberId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['members'][':memberId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['members'][':memberId']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['members'][':memberId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdMembersMemberIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.networks)[':networkId']['members'][':memberId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdMembersMemberIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdMembersMemberIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].members[':memberId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteNetworksNetworkIdMembersMemberIdMutationKey() {
  return ['networks', '/networks/:networkId/members/:memberId', 'DELETE'] as const
}

export function getDeleteNetworksNetworkIdMembersMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.networks)[':networkId']['members'][':memberId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['members'][':memberId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNetworksNetworkIdMembersMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['members'][':memberId']['$delete']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].members[':memberId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteNetworksNetworkIdMembersMemberId<
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
                    (typeof client.networks)[':networkId']['members'][':memberId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['members'][':memberId']['$delete']
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
  const mutationDefaults = getDeleteNetworksNetworkIdMembersMemberIdMutationOptions<
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

export function getPatchNetworksNetworkIdMembersMemberIdMutationKey() {
  return ['networks', '/networks/:networkId/members/:memberId', 'PATCH'] as const
}

export function getPatchNetworksNetworkIdMembersMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.networks)[':networkId']['members'][':memberId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['members'][':memberId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchNetworksNetworkIdMembersMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['members'][':memberId']['$patch']
      >,
    ) {
      return parseResponse(client.networks[':networkId'].members[':memberId'].$patch(args, options))
    },
  })
}

export function usePatchNetworksNetworkIdMembersMemberId<
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
                    (typeof client.networks)[':networkId']['members'][':memberId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['members'][':memberId']['$patch']
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
  const mutationDefaults = getPatchNetworksNetworkIdMembersMemberIdMutationOptions<
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

export function getNetworksNetworkIdNodesNodeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['networks', '/networks/:networkId/nodes/:nodeId', keyArgs] as const
}

export function getNetworksNetworkIdNodesNodeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdNodesNodeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].nodes[':nodeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdNodesNodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$get']>
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
                  ReturnType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdNodesNodeIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdNodesNodeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdNodesNodeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].nodes[':nodeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteNetworksNetworkIdNodesNodeIdMutationKey() {
  return ['networks', '/networks/:networkId/nodes/:nodeId', 'DELETE'] as const
}

export function getDeleteNetworksNetworkIdNodesNodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNetworksNetworkIdNodesNodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$delete']>,
    ) {
      return parseResponse(client.networks[':networkId'].nodes[':nodeId'].$delete(args, options))
    },
  })
}

export function useDeleteNetworksNetworkIdNodesNodeId<
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
                  ReturnType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNetworksNetworkIdNodesNodeIdMutationOptions<
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

export function getPatchNetworksNetworkIdNodesNodeIdMutationKey() {
  return ['networks', '/networks/:networkId/nodes/:nodeId', 'PATCH'] as const
}

export function getPatchNetworksNetworkIdNodesNodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchNetworksNetworkIdNodesNodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$patch']>,
    ) {
      return parseResponse(client.networks[':networkId'].nodes[':nodeId'].$patch(args, options))
    },
  })
}

export function usePatchNetworksNetworkIdNodesNodeId<
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
                  ReturnType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchNetworksNetworkIdNodesNodeIdMutationOptions<
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

export function getNetworksNetworkIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networks)[':networkId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['networks', '/networks/:networkId', keyArgs] as const
}

export function getNetworksNetworkIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networks)[':networkId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':networkId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networks)[':networkId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':networkId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':networkId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdProposalsProposalIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['proposals'][':proposalId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['networks', '/networks/:networkId/proposals/:proposalId', keyArgs] as const
}

export function getNetworksNetworkIdProposalsProposalIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['proposals'][':proposalId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdProposalsProposalIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].proposals[':proposalId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdProposalsProposalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.networks)[':networkId']['proposals'][':proposalId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':networkId']['proposals'][':proposalId']['$get']>
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
                    (typeof client.networks)[':networkId']['proposals'][':proposalId']['$get']
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
                    (typeof client.networks)[':networkId']['proposals'][':proposalId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdProposalsProposalIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.networks)[':networkId']['proposals'][':proposalId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdProposalsProposalIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdProposalsProposalIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].proposals[':proposalId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInvitationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.invitations.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['invitations', '/invitations', keyArgs] as const
}

export function getInvitationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.invitations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInvitationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.invitations.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInvitations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.invitations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
          >,
          ReturnType<typeof getInvitationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInvitationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInvitationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.invitations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksNetworkIdProposalsProposalIdVotesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['proposals'][':proposalId']['votes']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['networks', '/networks/:networkId/proposals/:proposalId/votes', keyArgs] as const
}

export function getNetworksNetworkIdProposalsProposalIdVotesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['proposals'][':proposalId']['votes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksNetworkIdProposalsProposalIdVotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':networkId'].proposals[':proposalId'].votes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksNetworkIdProposalsProposalIdVotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networks)[':networkId']['proposals'][':proposalId']['votes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networks)[':networkId']['proposals'][':proposalId']['votes']['$get']
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
                    (typeof client.networks)[':networkId']['proposals'][':proposalId']['votes']['$get']
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
                    (typeof client.networks)[':networkId']['proposals'][':proposalId']['votes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworksNetworkIdProposalsProposalIdVotesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.networks)[':networkId']['proposals'][':proposalId']['votes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdProposalsProposalIdVotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksNetworkIdProposalsProposalIdVotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':networkId'].proposals[':proposalId'].votes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNetworksNetworkIdProposalsProposalIdVotesMutationKey() {
  return ['networks', '/networks/:networkId/proposals/:proposalId/votes', 'POST'] as const
}

export function getPostNetworksNetworkIdProposalsProposalIdVotesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networks)[':networkId']['proposals'][':proposalId']['votes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.networks)[':networkId']['proposals'][':proposalId']['votes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksNetworkIdProposalsProposalIdVotesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':networkId']['proposals'][':proposalId']['votes']['$post']
      >,
    ) {
      return parseResponse(
        client.networks[':networkId'].proposals[':proposalId'].votes.$post(args, options),
      )
    },
  })
}

export function usePostNetworksNetworkIdProposalsProposalIdVotes<
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
                    (typeof client.networks)[':networkId']['proposals'][':proposalId']['votes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':networkId']['proposals'][':proposalId']['votes']['$post']
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
  const mutationDefaults = getPostNetworksNetworkIdProposalsProposalIdVotesMutationOptions<
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

export function getTagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':resourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsResourceArnQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':resourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteInvitationsInvitationIdMutationKey() {
  return ['invitations', '/invitations/:invitationId', 'DELETE'] as const
}

export function getDeleteInvitationsInvitationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invitations)[':invitationId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.invitations)[':invitationId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInvitationsInvitationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.invitations)[':invitationId']['$delete']>,
    ) {
      return parseResponse(client.invitations[':invitationId'].$delete(args, options))
    },
  })
}

export function useDeleteInvitationsInvitationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invitations)[':invitationId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.invitations)[':invitationId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteInvitationsInvitationIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
