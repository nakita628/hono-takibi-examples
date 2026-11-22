import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAccessorsKey(args: InferRequestType<typeof client.accessors.$get>) {
  const { header: _, ...keyArgs } = args
  return ['accessors', '/accessors', keyArgs] as const
}

export function useGetAccessors<TError = unknown>(
  args: InferRequestType<typeof client.accessors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accessors.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccessorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accessors.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accessors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccessors<TError = unknown>(
  args: InferRequestType<typeof client.accessors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accessors.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccessorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accessors.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accessors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccessorsKey() {
  return ['accessors', '/accessors', 'POST'] as const
}

export function usePostAccessors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accessors.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.accessors.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccessorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.accessors.$post> }) =>
        parseResponse(client.accessors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdMembersKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['members']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['networks', '/networks/:networkId/members', keyArgs] as const
}

export function useGetNetworksNetworkIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networks[':networkId'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networks[':networkId'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNetworksNetworkIdMembersKey() {
  return ['networks', '/networks/:networkId/members', 'POST'] as const
}

export function usePostNetworksNetworkIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['members']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworksNetworkIdMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.networks)[':networkId']['members']['$post']> },
      ) => parseResponse(client.networks[':networkId'].members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksKey(args: InferRequestType<typeof client.networks.$get>) {
  const { header: _, ...keyArgs } = args
  return ['networks', '/networks', keyArgs] as const
}

export function useGetNetworks<TError = unknown>(
  args: InferRequestType<typeof client.networks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNetworksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.networks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetNetworks<TError = unknown>(
  args: InferRequestType<typeof client.networks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNetworksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.networks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostNetworksKey() {
  return ['networks', '/networks', 'POST'] as const
}

export function usePostNetworks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.networks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.networks.$post> }) =>
        parseResponse(client.networks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdNodesKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['nodes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['networks', '/networks/:networkId/nodes', keyArgs] as const
}

export function useGetNetworksNetworkIdNodes<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['nodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['nodes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['nodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networks[':networkId'].nodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdNodes<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['nodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['nodes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['nodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networks[':networkId'].nodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNetworksNetworkIdNodesKey() {
  return ['networks', '/networks/:networkId/nodes', 'POST'] as const
}

export function usePostNetworksNetworkIdNodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['nodes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['nodes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworksNetworkIdNodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.networks)[':networkId']['nodes']['$post']> },
      ) => parseResponse(client.networks[':networkId'].nodes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdProposalsKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['proposals']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['networks', '/networks/:networkId/proposals', keyArgs] as const
}

export function useGetNetworksNetworkIdProposals<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['proposals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['proposals']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdProposalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['proposals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networks[':networkId'].proposals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdProposals<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['proposals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['proposals']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdProposalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['proposals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networks[':networkId'].proposals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNetworksNetworkIdProposalsKey() {
  return ['networks', '/networks/:networkId/proposals', 'POST'] as const
}

export function usePostNetworksNetworkIdProposals<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['proposals']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['proposals']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworksNetworkIdProposalsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.networks)[':networkId']['proposals']['$post']> },
      ) => parseResponse(client.networks[':networkId'].proposals.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccessorsAccessorIdKey(
  args: InferRequestType<(typeof client.accessors)[':AccessorId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accessors', '/accessors/:AccessorId', keyArgs] as const
}

export function useGetAccessorsAccessorId<TError = unknown>(
  args: InferRequestType<(typeof client.accessors)[':AccessorId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accessors)[':AccessorId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccessorsAccessorIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accessors)[':AccessorId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accessors[':AccessorId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccessorsAccessorId<TError = unknown>(
  args: InferRequestType<(typeof client.accessors)[':AccessorId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accessors)[':AccessorId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccessorsAccessorIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accessors)[':AccessorId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accessors[':AccessorId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAccessorsAccessorIdKey() {
  return ['accessors', '/accessors/:AccessorId', 'DELETE'] as const
}

export function useDeleteAccessorsAccessorId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accessors)[':AccessorId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accessors)[':AccessorId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccessorsAccessorIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.accessors)[':AccessorId']['$delete']> },
      ) => parseResponse(client.accessors[':AccessorId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdMembersMemberIdKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['members'][':memberId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['networks', '/networks/:networkId/members/:memberId', keyArgs] as const
}

export function useGetNetworksNetworkIdMembersMemberId<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['members'][':memberId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['members'][':memberId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdMembersMemberIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['members'][':memberId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].members[':memberId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdMembersMemberId<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['members'][':memberId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['members'][':memberId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdMembersMemberIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['members'][':memberId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].members[':memberId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteNetworksNetworkIdMembersMemberIdKey() {
  return ['networks', '/networks/:networkId/members/:memberId', 'DELETE'] as const
}

export function useDeleteNetworksNetworkIdMembersMemberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['members'][':memberId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNetworksNetworkIdMembersMemberIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.networks)[':networkId']['members'][':memberId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].members[':memberId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchNetworksNetworkIdMembersMemberIdKey() {
  return ['networks', '/networks/:networkId/members/:memberId', 'PATCH'] as const
}

export function usePatchNetworksNetworkIdMembersMemberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['members'][':memberId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchNetworksNetworkIdMembersMemberIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.networks)[':networkId']['members'][':memberId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].members[':memberId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdNodesNodeIdKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['networks', '/networks/:networkId/nodes/:nodeId', keyArgs] as const
}

export function useGetNetworksNetworkIdNodesNodeId<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdNodesNodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].nodes[':nodeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdNodesNodeId<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdNodesNodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networks[':networkId'].nodes[':nodeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteNetworksNetworkIdNodesNodeIdKey() {
  return ['networks', '/networks/:networkId/nodes/:nodeId', 'DELETE'] as const
}

export function useDeleteNetworksNetworkIdNodesNodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNetworksNetworkIdNodesNodeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.networks)[':networkId']['nodes'][':nodeId']['$delete']
          >
        },
      ) =>
        parseResponse(client.networks[':networkId'].nodes[':nodeId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchNetworksNetworkIdNodesNodeIdKey() {
  return ['networks', '/networks/:networkId/nodes/:nodeId', 'PATCH'] as const
}

export function usePatchNetworksNetworkIdNodesNodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchNetworksNetworkIdNodesNodeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.networks)[':networkId']['nodes'][':nodeId']['$patch']
          >
        },
      ) => parseResponse(client.networks[':networkId'].nodes[':nodeId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworksNetworkIdKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['networks', '/networks/:networkId', keyArgs] as const
}

export function useGetNetworksNetworkId<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':networkId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':networkId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networks[':networkId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkId<TError = unknown>(
  args: InferRequestType<(typeof client.networks)[':networkId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':networkId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':networkId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networks[':networkId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdProposalsProposalIdKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['proposals'][':proposalId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['networks', '/networks/:networkId/proposals/:proposalId', keyArgs] as const
}

export function useGetNetworksNetworkIdProposalsProposalId<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['proposals'][':proposalId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['proposals'][':proposalId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdProposalsProposalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['proposals'][':proposalId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.networks[':networkId'].proposals[':proposalId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdProposalsProposalId<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['proposals'][':proposalId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['proposals'][':proposalId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdProposalsProposalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networks)[':networkId']['proposals'][':proposalId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.networks[':networkId'].proposals[':proposalId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetInvitationsKey(args: InferRequestType<typeof client.invitations.$get>) {
  const { header: _, ...keyArgs } = args
  return ['invitations', '/invitations', keyArgs] as const
}

export function useGetInvitations<TError = unknown>(
  args: InferRequestType<typeof client.invitations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInvitationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invitations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvitations<TError = unknown>(
  args: InferRequestType<typeof client.invitations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInvitationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invitations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksNetworkIdProposalsProposalIdVotesKey(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['proposals'][':proposalId']['votes']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['networks', '/networks/:networkId/proposals/:proposalId/votes', keyArgs] as const
}

export function useGetNetworksNetworkIdProposalsProposalIdVotes<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['proposals'][':proposalId']['votes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdProposalsProposalIdVotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.networks[':networkId'].proposals[':proposalId'].votes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworksNetworkIdProposalsProposalIdVotes<TError = unknown>(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['proposals'][':proposalId']['votes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworksNetworkIdProposalsProposalIdVotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.networks[':networkId'].proposals[':proposalId'].votes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostNetworksNetworkIdProposalsProposalIdVotesKey() {
  return ['networks', '/networks/:networkId/proposals/:proposalId/votes', 'POST'] as const
}

export function usePostNetworksNetworkIdProposalsProposalIdVotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.networks)[':networkId']['proposals'][':proposalId']['votes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworksNetworkIdProposalsProposalIdVotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.networks)[':networkId']['proposals'][':proposalId']['votes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.networks[':networkId'].proposals[':proposalId'].votes.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn']['$post']> },
      ) => parseResponse(client.tags[':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteInvitationsInvitationIdKey() {
  return ['invitations', '/invitations/:invitationId', 'DELETE'] as const
}

export function useDeleteInvitationsInvitationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invitations)[':invitationId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invitations)[':invitationId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInvitationsInvitationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.invitations)[':invitationId']['$delete']> },
      ) => parseResponse(client.invitations[':invitationId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':resourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
