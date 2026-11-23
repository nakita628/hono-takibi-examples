import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGovKey() {
  return ['gov'] as const
}

export function getGetGovApiKey(args: InferRequestType<typeof client.gov.api.$get>) {
  return ['gov', '/gov/api', args] as const
}

export function useGetGovApi<TError = unknown>(
  args: InferRequestType<typeof client.gov.api.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.api.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGovApiKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.api.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.gov.api.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetGovApi<TError = unknown>(
  args: InferRequestType<typeof client.gov.api.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.api.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGovApiKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.api.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.gov.api.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetGovCommitKey(args: InferRequestType<typeof client.gov.commit.$get>) {
  return ['gov', '/gov/commit', args] as const
}

export function useGetGovCommit<TError = unknown>(
  args: InferRequestType<typeof client.gov.commit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.commit.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGovCommitKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.commit.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.commit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovCommit<TError = unknown>(
  args: InferRequestType<typeof client.gov.commit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.commit.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGovCommitKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.commit.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.commit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovMembersProposalsKey(
  args: InferRequestType<typeof client.gov.members.proposals.$get>,
) {
  return ['gov', '/gov/members/proposals', args] as const
}

export function useGetGovMembersProposals<TError = unknown>(
  args: InferRequestType<typeof client.gov.members.proposals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gov.members.proposals.$get>>>
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
        ? getGetGovMembersProposalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gov.members.proposals.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.members.proposals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovMembersProposals<TError = unknown>(
  args: InferRequestType<typeof client.gov.members.proposals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gov.members.proposals.$get>>>
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
        ? getGetGovMembersProposalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gov.members.proposals.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.members.proposals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovMembersProposalsProposalIdKey(
  args: InferRequestType<(typeof client.gov.members.proposals)[':proposalId']['$get']>,
) {
  return ['gov', '/gov/members/proposals/:proposalId', args] as const
}

export function useGetGovMembersProposalsProposalId<TError = unknown>(
  args: InferRequestType<(typeof client.gov.members.proposals)[':proposalId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.members.proposals)[':proposalId']['$get']>>
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
        ? getGetGovMembersProposalsProposalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.members.proposals)[':proposalId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gov.members.proposals[':proposalId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovMembersProposalsProposalId<TError = unknown>(
  args: InferRequestType<(typeof client.gov.members.proposals)[':proposalId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.members.proposals)[':proposalId']['$get']>>
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
        ? getGetGovMembersProposalsProposalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.members.proposals)[':proposalId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gov.members.proposals[':proposalId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovMembersProposalsProposalIdActionsKey(
  args: InferRequestType<(typeof client.gov.members.proposals)[':proposalId']['actions']['$get']>,
) {
  return ['gov', '/gov/members/proposals/:proposalId/actions', args] as const
}

export function useGetGovMembersProposalsProposalIdActions<TError = unknown>(
  args: InferRequestType<(typeof client.gov.members.proposals)[':proposalId']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gov.members.proposals)[':proposalId']['actions']['$get']>
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
        ? getGetGovMembersProposalsProposalIdActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gov.members.proposals)[':proposalId']['actions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.gov.members.proposals[':proposalId'].actions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovMembersProposalsProposalIdActions<TError = unknown>(
  args: InferRequestType<(typeof client.gov.members.proposals)[':proposalId']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gov.members.proposals)[':proposalId']['actions']['$get']>
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
        ? getGetGovMembersProposalsProposalIdActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gov.members.proposals)[':proposalId']['actions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.gov.members.proposals[':proposalId'].actions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGovMembersProposalsProposalIdBallotsMemberIdKey(
  args: InferRequestType<
    (typeof client.gov.members.proposals)[':proposalId']['ballots'][':memberId']['$get']
  >,
) {
  return ['gov', '/gov/members/proposals/:proposalId/ballots/:memberId', args] as const
}

export function useGetGovMembersProposalsProposalIdBallotsMemberId<TError = unknown>(
  args: InferRequestType<
    (typeof client.gov.members.proposals)[':proposalId']['ballots'][':memberId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gov.members.proposals)[':proposalId']['ballots'][':memberId']['$get']
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
        ? getGetGovMembersProposalsProposalIdBallotsMemberIdKey(args)
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
                (typeof client.gov.members.proposals)[':proposalId']['ballots'][':memberId']['$get']
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
          client.gov.members.proposals[':proposalId'].ballots[':memberId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovMembersProposalsProposalIdBallotsMemberId<TError = unknown>(
  args: InferRequestType<
    (typeof client.gov.members.proposals)[':proposalId']['ballots'][':memberId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gov.members.proposals)[':proposalId']['ballots'][':memberId']['$get']
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
        ? getGetGovMembersProposalsProposalIdBallotsMemberIdKey(args)
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
                (typeof client.gov.members.proposals)[':proposalId']['ballots'][':memberId']['$get']
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
          client.gov.members.proposals[':proposalId'].ballots[':memberId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGovMembersProposalsProposalIdBallotsMemberIdSubmitKey() {
  return ['gov', '/gov/members/proposals/:proposalId/ballots/:memberId:submit', 'POST'] as const
}

export function usePostGovMembersProposalsProposalIdBallotsMemberIdSubmit<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gov.members.proposals)[':proposalId']['ballots'][':memberId:submit']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.gov.members.proposals)[':proposalId']['ballots'][':memberId:submit']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGovMembersProposalsProposalIdBallotsMemberIdSubmitKey()
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
            (typeof client.gov.members.proposals)[':proposalId']['ballots'][':memberId:submit']['$post']
          >
        },
      ) =>
        parseResponse(
          client.gov.members.proposals[':proposalId'].ballots[':memberId:submit'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGovMembersProposalsProposalIdWithdrawKey() {
  return ['gov', '/gov/members/proposals/:proposalId:withdraw', 'POST'] as const
}

export function usePostGovMembersProposalsProposalIdWithdraw<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gov.members.proposals)[':proposalId:withdraw']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.gov.members.proposals)[':proposalId:withdraw']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGovMembersProposalsProposalIdWithdrawKey()
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
            (typeof client.gov.members.proposals)[':proposalId:withdraw']['$post']
          >
        },
      ) =>
        parseResponse(
          client.gov.members.proposals[':proposalId:withdraw'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGovMembersProposalsCreateKey() {
  return ['gov', '/gov/members/proposals:create', 'POST'] as const
}

export function usePostGovMembersProposalsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gov.members)['proposals:create']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gov.members)['proposals:create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGovMembersProposalsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.gov.members)['proposals:create']['$post']> },
      ) => parseResponse(client.gov.members['proposals:create'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGovMembersStateDigestsMemberIdKey(
  args: InferRequestType<(typeof client.gov.members)['state-digests'][':memberId']['$get']>,
) {
  return ['gov', '/gov/members/state-digests/:memberId', args] as const
}

export function useGetGovMembersStateDigestsMemberId<TError = unknown>(
  args: InferRequestType<(typeof client.gov.members)['state-digests'][':memberId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.members)['state-digests'][':memberId']['$get']>>
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
        ? getGetGovMembersStateDigestsMemberIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.members)['state-digests'][':memberId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gov.members['state-digests'][':memberId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovMembersStateDigestsMemberId<TError = unknown>(
  args: InferRequestType<(typeof client.gov.members)['state-digests'][':memberId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.members)['state-digests'][':memberId']['$get']>>
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
        ? getGetGovMembersStateDigestsMemberIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.members)['state-digests'][':memberId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gov.members['state-digests'][':memberId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGovMembersStateDigestsMemberIdAckKey() {
  return ['gov', '/gov/members/state-digests/:memberId:ack', 'POST'] as const
}

export function usePostGovMembersStateDigestsMemberIdAck<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gov.members)['state-digests'][':memberId:ack']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.gov.members)['state-digests'][':memberId:ack']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGovMembersStateDigestsMemberIdAckKey()
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
            (typeof client.gov.members)['state-digests'][':memberId:ack']['$post']
          >
        },
      ) =>
        parseResponse(
          client.gov.members['state-digests'][':memberId:ack'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGovMembersStateDigestsMemberIdUpdateKey() {
  return ['gov', '/gov/members/state-digests/:memberId:update', 'POST'] as const
}

export function usePostGovMembersStateDigestsMemberIdUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gov.members)['state-digests'][':memberId:update']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gov.members)['state-digests'][':memberId:update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGovMembersStateDigestsMemberIdUpdateKey()
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
            (typeof client.gov.members)['state-digests'][':memberId:update']['$post']
          >
        },
      ) =>
        parseResponse(
          client.gov.members['state-digests'][':memberId:update'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGovReceiptKey(args: InferRequestType<typeof client.gov.receipt.$get>) {
  return ['gov', '/gov/receipt', args] as const
}

export function useGetGovReceipt<TError = unknown>(
  args: InferRequestType<typeof client.gov.receipt.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.receipt.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGovReceiptKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.receipt.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.receipt.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovReceipt<TError = unknown>(
  args: InferRequestType<typeof client.gov.receipt.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.receipt.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGovReceiptKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.receipt.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.receipt.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovReceiptCoseKey(
  args: InferRequestType<typeof client.gov.receipt.cose.$get>,
) {
  return ['gov', '/gov/receipt/cose', args] as const
}

export function useGetGovReceiptCose<TError = unknown>(
  args: InferRequestType<typeof client.gov.receipt.cose.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.receipt.cose.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGovReceiptCoseKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.receipt.cose.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.receipt.cose.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovReceiptCose<TError = unknown>(
  args: InferRequestType<typeof client.gov.receipt.cose.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.receipt.cose.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGovReceiptCoseKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.receipt.cose.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.receipt.cose.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovRecoveryEncryptedSharesMemberIdKey(
  args: InferRequestType<(typeof client.gov.recovery)['encrypted-shares'][':memberId']['$get']>,
) {
  return ['gov', '/gov/recovery/encrypted-shares/:memberId', args] as const
}

export function useGetGovRecoveryEncryptedSharesMemberId<TError = unknown>(
  args: InferRequestType<(typeof client.gov.recovery)['encrypted-shares'][':memberId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gov.recovery)['encrypted-shares'][':memberId']['$get']>
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
        ? getGetGovRecoveryEncryptedSharesMemberIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gov.recovery)['encrypted-shares'][':memberId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.gov.recovery['encrypted-shares'][':memberId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovRecoveryEncryptedSharesMemberId<TError = unknown>(
  args: InferRequestType<(typeof client.gov.recovery)['encrypted-shares'][':memberId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gov.recovery)['encrypted-shares'][':memberId']['$get']>
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
        ? getGetGovRecoveryEncryptedSharesMemberIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gov.recovery)['encrypted-shares'][':memberId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.gov.recovery['encrypted-shares'][':memberId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGovRecoveryMembersMemberIdRecoverKey() {
  return ['gov', '/gov/recovery/members/:memberId:recover', 'POST'] as const
}

export function usePostGovRecoveryMembersMemberIdRecover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gov.recovery.members)[':memberId:recover']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gov.recovery.members)[':memberId:recover']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGovRecoveryMembersMemberIdRecoverKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.gov.recovery.members)[':memberId:recover']['$post']>
        },
      ) =>
        parseResponse(client.gov.recovery.members[':memberId:recover'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGovServiceConstitutionKey(
  args: InferRequestType<typeof client.gov.service.constitution.$get>,
) {
  return ['gov', '/gov/service/constitution', args] as const
}

export function useGetGovServiceConstitution<TError = unknown>(
  args: InferRequestType<typeof client.gov.service.constitution.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.constitution.$get>>>
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
        ? getGetGovServiceConstitutionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.constitution.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.service.constitution.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovServiceConstitution<TError = unknown>(
  args: InferRequestType<typeof client.gov.service.constitution.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.constitution.$get>>>
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
        ? getGetGovServiceConstitutionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.constitution.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.service.constitution.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovServiceInfoKey(
  args: InferRequestType<typeof client.gov.service.info.$get>,
) {
  return ['gov', '/gov/service/info', args] as const
}

export function useGetGovServiceInfo<TError = unknown>(
  args: InferRequestType<typeof client.gov.service.info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.info.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGovServiceInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.service.info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovServiceInfo<TError = unknown>(
  args: InferRequestType<typeof client.gov.service.info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.info.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGovServiceInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.service.info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovServiceJavascriptAppKey(
  args: InferRequestType<(typeof client.gov.service)['javascript-app']['$get']>,
) {
  return ['gov', '/gov/service/javascript-app', args] as const
}

export function useGetGovServiceJavascriptApp<TError = unknown>(
  args: InferRequestType<(typeof client.gov.service)['javascript-app']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.service)['javascript-app']['$get']>>
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
        ? getGetGovServiceJavascriptAppKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.service)['javascript-app']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.service['javascript-app'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovServiceJavascriptApp<TError = unknown>(
  args: InferRequestType<(typeof client.gov.service)['javascript-app']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.service)['javascript-app']['$get']>>
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
        ? getGetGovServiceJavascriptAppKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.service)['javascript-app']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.service['javascript-app'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovServiceJavascriptModulesKey(
  args: InferRequestType<(typeof client.gov.service)['javascript-modules']['$get']>,
) {
  return ['gov', '/gov/service/javascript-modules', args] as const
}

export function useGetGovServiceJavascriptModules<TError = unknown>(
  args: InferRequestType<(typeof client.gov.service)['javascript-modules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.service)['javascript-modules']['$get']>>
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
        ? getGetGovServiceJavascriptModulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.service)['javascript-modules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.service['javascript-modules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovServiceJavascriptModules<TError = unknown>(
  args: InferRequestType<(typeof client.gov.service)['javascript-modules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.service)['javascript-modules']['$get']>>
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
        ? getGetGovServiceJavascriptModulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.service)['javascript-modules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.service['javascript-modules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovServiceJavascriptModulesModuleNameKey(
  args: InferRequestType<(typeof client.gov.service)['javascript-modules'][':moduleName']['$get']>,
) {
  return ['gov', '/gov/service/javascript-modules/:moduleName', args] as const
}

export function useGetGovServiceJavascriptModulesModuleName<TError = unknown>(
  args: InferRequestType<(typeof client.gov.service)['javascript-modules'][':moduleName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gov.service)['javascript-modules'][':moduleName']['$get']>
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
        ? getGetGovServiceJavascriptModulesModuleNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gov.service)['javascript-modules'][':moduleName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.gov.service['javascript-modules'][':moduleName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovServiceJavascriptModulesModuleName<TError = unknown>(
  args: InferRequestType<(typeof client.gov.service)['javascript-modules'][':moduleName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gov.service)['javascript-modules'][':moduleName']['$get']>
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
        ? getGetGovServiceJavascriptModulesModuleNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gov.service)['javascript-modules'][':moduleName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.gov.service['javascript-modules'][':moduleName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGovServiceJoinPolicyKey(
  args: InferRequestType<(typeof client.gov.service)['join-policy']['$get']>,
) {
  return ['gov', '/gov/service/join-policy', args] as const
}

export function useGetGovServiceJoinPolicy<TError = unknown>(
  args: InferRequestType<(typeof client.gov.service)['join-policy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.service)['join-policy']['$get']>>
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
        ? getGetGovServiceJoinPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.service)['join-policy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.service['join-policy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovServiceJoinPolicy<TError = unknown>(
  args: InferRequestType<(typeof client.gov.service)['join-policy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.service)['join-policy']['$get']>>
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
        ? getGetGovServiceJoinPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.service)['join-policy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.service['join-policy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovServiceJwkKey(args: InferRequestType<typeof client.gov.service.jwk.$get>) {
  return ['gov', '/gov/service/jwk', args] as const
}

export function useGetGovServiceJwk<TError = unknown>(
  args: InferRequestType<typeof client.gov.service.jwk.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.jwk.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGovServiceJwkKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.jwk.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.service.jwk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovServiceJwk<TError = unknown>(
  args: InferRequestType<typeof client.gov.service.jwk.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.jwk.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGovServiceJwkKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.jwk.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.service.jwk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovServiceMembersKey(
  args: InferRequestType<typeof client.gov.service.members.$get>,
) {
  return ['gov', '/gov/service/members', args] as const
}

export function useGetGovServiceMembers<TError = unknown>(
  args: InferRequestType<typeof client.gov.service.members.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.members.$get>>>
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
        ? getGetGovServiceMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.members.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.service.members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovServiceMembers<TError = unknown>(
  args: InferRequestType<typeof client.gov.service.members.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.members.$get>>>
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
        ? getGetGovServiceMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.members.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.service.members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovServiceMembersMemberIdKey(
  args: InferRequestType<(typeof client.gov.service.members)[':memberId']['$get']>,
) {
  return ['gov', '/gov/service/members/:memberId', args] as const
}

export function useGetGovServiceMembersMemberId<TError = unknown>(
  args: InferRequestType<(typeof client.gov.service.members)[':memberId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.service.members)[':memberId']['$get']>>
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
        ? getGetGovServiceMembersMemberIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.service.members)[':memberId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.service.members[':memberId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovServiceMembersMemberId<TError = unknown>(
  args: InferRequestType<(typeof client.gov.service.members)[':memberId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.service.members)[':memberId']['$get']>>
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
        ? getGetGovServiceMembersMemberIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.service.members)[':memberId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.service.members[':memberId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovServiceNodesKey(
  args: InferRequestType<typeof client.gov.service.nodes.$get>,
) {
  return ['gov', '/gov/service/nodes', args] as const
}

export function useGetGovServiceNodes<TError = unknown>(
  args: InferRequestType<typeof client.gov.service.nodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.nodes.$get>>>>
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
        ? getGetGovServiceNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.nodes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.service.nodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovServiceNodes<TError = unknown>(
  args: InferRequestType<typeof client.gov.service.nodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.nodes.$get>>>>
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
        ? getGetGovServiceNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.nodes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.service.nodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovServiceNodesNodeIdKey(
  args: InferRequestType<(typeof client.gov.service.nodes)[':nodeId']['$get']>,
) {
  return ['gov', '/gov/service/nodes/:nodeId', args] as const
}

export function useGetGovServiceNodesNodeId<TError = unknown>(
  args: InferRequestType<(typeof client.gov.service.nodes)[':nodeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.service.nodes)[':nodeId']['$get']>>
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
        ? getGetGovServiceNodesNodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.service.nodes)[':nodeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.service.nodes[':nodeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovServiceNodesNodeId<TError = unknown>(
  args: InferRequestType<(typeof client.gov.service.nodes)[':nodeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.service.nodes)[':nodeId']['$get']>>
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
        ? getGetGovServiceNodesNodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.service.nodes)[':nodeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.service.nodes[':nodeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovServiceTransactionsCommitKey(
  args: InferRequestType<typeof client.gov.service.transactions.commit.$get>,
) {
  return ['gov', '/gov/service/transactions/commit', args] as const
}

export function useGetGovServiceTransactionsCommit<TError = unknown>(
  args: InferRequestType<typeof client.gov.service.transactions.commit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.gov.service.transactions.commit.$get>>
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
        ? getGetGovServiceTransactionsCommitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.gov.service.transactions.commit.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.service.transactions.commit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovServiceTransactionsCommit<TError = unknown>(
  args: InferRequestType<typeof client.gov.service.transactions.commit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.gov.service.transactions.commit.$get>>
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
        ? getGetGovServiceTransactionsCommitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.gov.service.transactions.commit.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.service.transactions.commit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovServiceTransactionsTransactionIdKey(
  args: InferRequestType<(typeof client.gov.service.transactions)[':transactionId']['$get']>,
) {
  return ['gov', '/gov/service/transactions/:transactionId', args] as const
}

export function useGetGovServiceTransactionsTransactionId<TError = unknown>(
  args: InferRequestType<(typeof client.gov.service.transactions)[':transactionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.service.transactions)[':transactionId']['$get']>>
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
        ? getGetGovServiceTransactionsTransactionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.service.transactions)[':transactionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gov.service.transactions[':transactionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovServiceTransactionsTransactionId<TError = unknown>(
  args: InferRequestType<(typeof client.gov.service.transactions)[':transactionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.service.transactions)[':transactionId']['$get']>>
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
        ? getGetGovServiceTransactionsTransactionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.service.transactions)[':transactionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gov.service.transactions[':transactionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovServiceUsersKey(
  args: InferRequestType<typeof client.gov.service.users.$get>,
) {
  return ['gov', '/gov/service/users', args] as const
}

export function useGetGovServiceUsers<TError = unknown>(
  args: InferRequestType<typeof client.gov.service.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.users.$get>>>>
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
        ? getGetGovServiceUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.service.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovServiceUsers<TError = unknown>(
  args: InferRequestType<typeof client.gov.service.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.users.$get>>>>
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
        ? getGetGovServiceUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.service.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovServiceUsersUserIdKey(
  args: InferRequestType<(typeof client.gov.service.users)[':userId']['$get']>,
) {
  return ['gov', '/gov/service/users/:userId', args] as const
}

export function useGetGovServiceUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.gov.service.users)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.service.users)[':userId']['$get']>>
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
        ? getGetGovServiceUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.service.users)[':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.service.users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovServiceUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.gov.service.users)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.service.users)[':userId']['$get']>>
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
        ? getGetGovServiceUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gov.service.users)[':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gov.service.users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovTxKey(args: InferRequestType<typeof client.gov.tx.$get>) {
  return ['gov', '/gov/tx', args] as const
}

export function useGetGovTx<TError = unknown>(
  args: InferRequestType<typeof client.gov.tx.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.tx.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGovTxKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.tx.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.gov.tx.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetGovTx<TError = unknown>(
  args: InferRequestType<typeof client.gov.tx.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.tx.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGovTxKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.tx.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.gov.tx.$get(args, clientOptions)), restSwrOptions),
  }
}
