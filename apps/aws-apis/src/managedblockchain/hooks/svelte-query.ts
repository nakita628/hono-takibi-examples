import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function getAccessorsQueryKey(args: InferRequestType<typeof client.accessors.$get>) {
  const { header: _, ...keyArgs } = args
  return ['accessors', '/accessors', keyArgs] as const
}

export function getAccessorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accessors.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.accessors.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accessors.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccessorsQueryKey>
  >({
    queryKey: getAccessorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accessors.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccessors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accessors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.accessors.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accessors.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccessorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccessorsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostAccessors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accessors.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.accessors.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccessorsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNetworksNetworkIdMembersQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['members']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['networks', '/networks/:networkId/members', keyArgs] as const
}

export function getNetworksNetworkIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNetworksNetworkIdMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostNetworksNetworkIdMembers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNetworksNetworkIdMembersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNetworksQueryKey(args: InferRequestType<typeof client.networks.$get>) {
  const { header: _, ...keyArgs } = args
  return ['networks', '/networks', keyArgs] as const
}

export function getNetworksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.networks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNetworksQueryKey>
  >({
    queryKey: getNetworksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNetworks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.networks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNetworksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNetworksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostNetworks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.networks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNetworksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNetworksNetworkIdNodesQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['nodes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['networks', '/networks/:networkId/nodes', keyArgs] as const
}

export function getNetworksNetworkIdNodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['nodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['nodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdNodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].nodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdNodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['nodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['nodes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNetworksNetworkIdNodesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostNetworksNetworkIdNodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNetworksNetworkIdNodesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNetworksNetworkIdProposalsQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['proposals']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['networks', '/networks/:networkId/proposals', keyArgs] as const
}

export function getNetworksNetworkIdProposalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['proposals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['proposals']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdProposalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].proposals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdProposals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['proposals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['proposals']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNetworksNetworkIdProposalsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostNetworksNetworkIdProposals<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNetworksNetworkIdProposalsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccessorsAccessorIdQueryKey(
  args: InferRequestType<(typeof client.accessors)[':AccessorId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accessors', '/accessors/:AccessorId', keyArgs] as const
}

export function getAccessorsAccessorIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accessors)[':AccessorId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accessors)[':AccessorId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accessors)[':AccessorId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccessorsAccessorIdQueryKey>
  >({
    queryKey: getAccessorsAccessorIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accessors[':AccessorId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccessorsAccessorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accessors)[':AccessorId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accessors)[':AccessorId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accessors)[':AccessorId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccessorsAccessorIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccessorsAccessorIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteAccessorsAccessorId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccessorsAccessorIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNetworksNetworkIdMembersMemberIdQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['members'][':memberId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['networks', '/networks/:networkId/members/:memberId', keyArgs] as const
}

export function getNetworksNetworkIdMembersMemberIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['members'][':memberId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['members'][':memberId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdMembersMemberIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].members[':memberId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdMembersMemberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['members'][':memberId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['members'][':memberId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNetworksNetworkIdMembersMemberIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteNetworksNetworkIdMembersMemberId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.networks)[':networkId']['members'][':memberId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteNetworksNetworkIdMembersMemberIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchNetworksNetworkIdMembersMemberId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchNetworksNetworkIdMembersMemberIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNetworksNetworkIdNodesNodeIdQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['networks', '/networks/:networkId/nodes/:nodeId', keyArgs] as const
}

export function getNetworksNetworkIdNodesNodeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdNodesNodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].nodes[':nodeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdNodesNodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getNetworksNetworkIdNodesNodeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNetworksNetworkIdNodesNodeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteNetworksNetworkIdNodesNodeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteNetworksNetworkIdNodesNodeIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchNetworksNetworkIdNodesNodeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchNetworksNetworkIdNodesNodeIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNetworksNetworkIdQueryKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['networks', '/networks/:networkId', keyArgs] as const
}

export function getNetworksNetworkIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':networkId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':networkId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':networkId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksNetworkIdQueryKey>
  >({
    queryKey: getNetworksNetworkIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':networkId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.networks)[':networkId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.networks)[':networkId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworksNetworkIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNetworksNetworkIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNetworksNetworkIdProposalsProposalIdQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['proposals'][':proposalId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['networks', '/networks/:networkId/proposals/:proposalId', keyArgs] as const
}

export function getNetworksNetworkIdProposalsProposalIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['proposals'][':proposalId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdProposalsProposalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].proposals[':proposalId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdProposalsProposalId<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['proposals'][':proposalId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getNetworksNetworkIdProposalsProposalIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNetworksNetworkIdProposalsProposalIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getInvitationsQueryKey(args: InferRequestType<typeof client.invitations.$get>) {
  const { header: _, ...keyArgs } = args
  return ['invitations', '/invitations', keyArgs] as const
}

export function getInvitationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.invitations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInvitationsQueryKey>
  >({
    queryKey: getInvitationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.invitations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInvitations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.invitations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getInvitationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInvitationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNetworksNetworkIdProposalsProposalIdVotesQueryKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['proposals'][':proposalId']['votes']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['networks', '/networks/:networkId/proposals/:proposalId/votes', keyArgs] as const
}

export function getNetworksNetworkIdProposalsProposalIdVotesQueryOptions<
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
  args: InferRequestType<
    (typeof client.networks)[':networkId']['proposals'][':proposalId']['votes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworksNetworkIdProposalsProposalIdVotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':networkId'].proposals[':proposalId'].votes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNetworksNetworkIdProposalsProposalIdVotes<
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
  args: () => InferRequestType<
    (typeof client.networks)[':networkId']['proposals'][':proposalId']['votes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNetworksNetworkIdProposalsProposalIdVotesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostNetworksNetworkIdProposalsProposalIdVotes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNetworksNetworkIdProposalsProposalIdVotesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteInvitationsInvitationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteInvitationsInvitationIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteTagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
