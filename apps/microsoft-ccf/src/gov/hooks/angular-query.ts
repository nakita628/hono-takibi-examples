import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGovKey() {
  return ['gov'] as const
}

export function getGovApiQueryKey(args: InferRequestType<typeof client.gov.api.$get>) {
  return ['gov', '/gov/api', args] as const
}

export function getGovApiQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.api.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.gov.api.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.api.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGovApiQueryKey>
  >({
    queryKey: getGovApiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gov.api.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGovApi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.api.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.gov.api.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.api.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGovApiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGovApiQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getGovCommitQueryKey(args: InferRequestType<typeof client.gov.commit.$get>) {
  return ['gov', '/gov/commit', args] as const
}

export function getGovCommitQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.commit.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.gov.commit.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.commit.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGovCommitQueryKey>
  >({
    queryKey: getGovCommitQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gov.commit.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGovCommit<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.commit.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.gov.commit.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.commit.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGovCommitQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGovCommitQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getGovMembersProposalsQueryKey(
  args: InferRequestType<typeof client.gov.members.proposals.$get>,
) {
  return ['gov', '/gov/members/proposals', args] as const
}

export function getGovMembersProposalsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.members.proposals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gov.members.proposals.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gov.members.proposals.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovMembersProposalsQueryKey>
  >({
    queryKey: getGovMembersProposalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gov.members.proposals.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGovMembersProposals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.members.proposals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.gov.members.proposals.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.gov.members.proposals.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGovMembersProposalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGovMembersProposalsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getGovMembersProposalsProposalIdQueryKey(
  args: InferRequestType<(typeof client.gov.members.proposals)[':proposalId']['$get']>,
) {
  return ['gov', '/gov/members/proposals/:proposalId', args] as const
}

export function getGovMembersProposalsProposalIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gov.members.proposals)[':proposalId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gov.members.proposals)[':proposalId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gov.members.proposals)[':proposalId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovMembersProposalsProposalIdQueryKey>
  >({
    queryKey: getGovMembersProposalsProposalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gov.members.proposals[':proposalId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGovMembersProposalsProposalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gov.members.proposals)[':proposalId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.gov.members.proposals)[':proposalId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gov.members.proposals)[':proposalId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGovMembersProposalsProposalIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGovMembersProposalsProposalIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGovMembersProposalsProposalIdActionsQueryKey(
  args: InferRequestType<(typeof client.gov.members.proposals)[':proposalId']['actions']['$get']>,
) {
  return ['gov', '/gov/members/proposals/:proposalId/actions', args] as const
}

export function getGovMembersProposalsProposalIdActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gov.members.proposals)[':proposalId']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gov.members.proposals)[':proposalId']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gov.members.proposals)[':proposalId']['actions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovMembersProposalsProposalIdActionsQueryKey>
  >({
    queryKey: getGovMembersProposalsProposalIdActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gov.members.proposals[':proposalId'].actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGovMembersProposalsProposalIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gov.members.proposals)[':proposalId']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.gov.members.proposals)[':proposalId']['actions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gov.members.proposals)[':proposalId']['actions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGovMembersProposalsProposalIdActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGovMembersProposalsProposalIdActionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGovMembersProposalsProposalIdBallotsMemberIdQueryKey(
  args: InferRequestType<
    (typeof client.gov.members.proposals)[':proposalId']['ballots'][':memberId']['$get']
  >,
) {
  return ['gov', '/gov/members/proposals/:proposalId/ballots/:memberId', args] as const
}

export function getGovMembersProposalsProposalIdBallotsMemberIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gov.members.proposals)[':proposalId']['ballots'][':memberId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getGovMembersProposalsProposalIdBallotsMemberIdQueryKey>
  >({
    queryKey: getGovMembersProposalsProposalIdBallotsMemberIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gov.members.proposals[':proposalId'].ballots[':memberId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGovMembersProposalsProposalIdBallotsMemberId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.gov.members.proposals)[':proposalId']['ballots'][':memberId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getGovMembersProposalsProposalIdBallotsMemberIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGovMembersProposalsProposalIdBallotsMemberIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostGovMembersProposalsProposalIdBallotsMemberIdSubmitMutationKey() {
  return ['gov', '/gov/members/proposals/:proposalId/ballots/:memberId:submit', 'POST'] as const
}

export function getPostGovMembersProposalsProposalIdBallotsMemberIdSubmitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.gov.members.proposals)[':proposalId']['ballots'][':memberId:submit']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGovMembersProposalsProposalIdBallotsMemberIdSubmitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gov.members.proposals)[':proposalId']['ballots'][':memberId:submit']['$post']
      >,
    ) {
      return parseResponse(
        client.gov.members.proposals[':proposalId'].ballots[':memberId:submit'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostGovMembersProposalsProposalIdBallotsMemberIdSubmit<
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
                  (typeof client.gov.members.proposals)[':proposalId']['ballots'][':memberId:submit']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.gov.members.proposals)[':proposalId']['ballots'][':memberId:submit']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostGovMembersProposalsProposalIdBallotsMemberIdSubmitMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGovMembersProposalsProposalIdWithdrawMutationKey() {
  return ['gov', '/gov/members/proposals/:proposalId:withdraw', 'POST'] as const
}

export function getPostGovMembersProposalsProposalIdWithdrawMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.gov.members.proposals)[':proposalId:withdraw']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGovMembersProposalsProposalIdWithdrawMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gov.members.proposals)[':proposalId:withdraw']['$post']
      >,
    ) {
      return parseResponse(
        client.gov.members.proposals[':proposalId:withdraw'].$post(args, options),
      )
    },
  })
}

export function injectPostGovMembersProposalsProposalIdWithdraw<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.gov.members.proposals)[':proposalId:withdraw']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGovMembersProposalsProposalIdWithdrawMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGovMembersProposalsCreateMutationKey() {
  return ['gov', '/gov/members/proposals:create', 'POST'] as const
}

export function getPostGovMembersProposalsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gov.members)['proposals:create']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gov.members)['proposals:create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGovMembersProposalsCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gov.members)['proposals:create']['$post']>,
    ) {
      return parseResponse(client.gov.members['proposals:create'].$post(args, options))
    },
  })
}

export function injectPostGovMembersProposalsCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gov.members)['proposals:create']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gov.members)['proposals:create']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGovMembersProposalsCreateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGovMembersStateDigestsMemberIdQueryKey(
  args: InferRequestType<(typeof client.gov.members)['state-digests'][':memberId']['$get']>,
) {
  return ['gov', '/gov/members/state-digests/:memberId', args] as const
}

export function getGovMembersStateDigestsMemberIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gov.members)['state-digests'][':memberId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gov.members)['state-digests'][':memberId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gov.members)['state-digests'][':memberId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovMembersStateDigestsMemberIdQueryKey>
  >({
    queryKey: getGovMembersStateDigestsMemberIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gov.members['state-digests'][':memberId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGovMembersStateDigestsMemberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gov.members)['state-digests'][':memberId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.gov.members)['state-digests'][':memberId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gov.members)['state-digests'][':memberId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGovMembersStateDigestsMemberIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGovMembersStateDigestsMemberIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostGovMembersStateDigestsMemberIdAckMutationKey() {
  return ['gov', '/gov/members/state-digests/:memberId:ack', 'POST'] as const
}

export function getPostGovMembersStateDigestsMemberIdAckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.gov.members)['state-digests'][':memberId:ack']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGovMembersStateDigestsMemberIdAckMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gov.members)['state-digests'][':memberId:ack']['$post']
      >,
    ) {
      return parseResponse(
        client.gov.members['state-digests'][':memberId:ack'].$post(args, options),
      )
    },
  })
}

export function injectPostGovMembersStateDigestsMemberIdAck<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.gov.members)['state-digests'][':memberId:ack']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGovMembersStateDigestsMemberIdAckMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGovMembersStateDigestsMemberIdUpdateMutationKey() {
  return ['gov', '/gov/members/state-digests/:memberId:update', 'POST'] as const
}

export function getPostGovMembersStateDigestsMemberIdUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.gov.members)['state-digests'][':memberId:update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGovMembersStateDigestsMemberIdUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gov.members)['state-digests'][':memberId:update']['$post']
      >,
    ) {
      return parseResponse(
        client.gov.members['state-digests'][':memberId:update'].$post(args, options),
      )
    },
  })
}

export function injectPostGovMembersStateDigestsMemberIdUpdate<
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
                  (typeof client.gov.members)['state-digests'][':memberId:update']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gov.members)['state-digests'][':memberId:update']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGovMembersStateDigestsMemberIdUpdateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGovReceiptQueryKey(args: InferRequestType<typeof client.gov.receipt.$get>) {
  return ['gov', '/gov/receipt', args] as const
}

export function getGovReceiptQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.receipt.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.gov.receipt.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.receipt.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGovReceiptQueryKey>
  >({
    queryKey: getGovReceiptQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gov.receipt.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGovReceipt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.receipt.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.gov.receipt.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.receipt.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGovReceiptQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGovReceiptQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getGovReceiptCoseQueryKey(
  args: InferRequestType<typeof client.gov.receipt.cose.$get>,
) {
  return ['gov', '/gov/receipt/cose', args] as const
}

export function getGovReceiptCoseQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.receipt.cose.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.gov.receipt.cose.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.receipt.cose.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGovReceiptCoseQueryKey>
  >({
    queryKey: getGovReceiptCoseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gov.receipt.cose.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGovReceiptCose<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.receipt.cose.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.gov.receipt.cose.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.receipt.cose.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGovReceiptCoseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGovReceiptCoseQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getGovRecoveryEncryptedSharesMemberIdQueryKey(
  args: InferRequestType<(typeof client.gov.recovery)['encrypted-shares'][':memberId']['$get']>,
) {
  return ['gov', '/gov/recovery/encrypted-shares/:memberId', args] as const
}

export function getGovRecoveryEncryptedSharesMemberIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gov.recovery)['encrypted-shares'][':memberId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gov.recovery)['encrypted-shares'][':memberId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gov.recovery)['encrypted-shares'][':memberId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovRecoveryEncryptedSharesMemberIdQueryKey>
  >({
    queryKey: getGovRecoveryEncryptedSharesMemberIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gov.recovery['encrypted-shares'][':memberId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGovRecoveryEncryptedSharesMemberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gov.recovery)['encrypted-shares'][':memberId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.gov.recovery)['encrypted-shares'][':memberId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gov.recovery)['encrypted-shares'][':memberId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGovRecoveryEncryptedSharesMemberIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGovRecoveryEncryptedSharesMemberIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostGovRecoveryMembersMemberIdRecoverMutationKey() {
  return ['gov', '/gov/recovery/members/:memberId:recover', 'POST'] as const
}

export function getPostGovRecoveryMembersMemberIdRecoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gov.recovery.members)[':memberId:recover']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gov.recovery.members)[':memberId:recover']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGovRecoveryMembersMemberIdRecoverMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gov.recovery.members)[':memberId:recover']['$post']>,
    ) {
      return parseResponse(client.gov.recovery.members[':memberId:recover'].$post(args, options))
    },
  })
}

export function injectPostGovRecoveryMembersMemberIdRecover<
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
                ReturnType<(typeof client.gov.recovery.members)[':memberId:recover']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gov.recovery.members)[':memberId:recover']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGovRecoveryMembersMemberIdRecoverMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGovServiceConstitutionQueryKey(
  args: InferRequestType<typeof client.gov.service.constitution.$get>,
) {
  return ['gov', '/gov/service/constitution', args] as const
}

export function getGovServiceConstitutionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.constitution.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gov.service.constitution.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.constitution.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovServiceConstitutionQueryKey>
  >({
    queryKey: getGovServiceConstitutionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gov.service.constitution.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGovServiceConstitution<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.constitution.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.gov.service.constitution.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.constitution.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGovServiceConstitutionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGovServiceConstitutionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGovServiceInfoQueryKey(
  args: InferRequestType<typeof client.gov.service.info.$get>,
) {
  return ['gov', '/gov/service/info', args] as const
}

export function getGovServiceInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.info.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.gov.service.info.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGovServiceInfoQueryKey>
  >({
    queryKey: getGovServiceInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gov.service.info.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGovServiceInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.gov.service.info.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGovServiceInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGovServiceInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getGovServiceJavascriptAppQueryKey(
  args: InferRequestType<(typeof client.gov.service)['javascript-app']['$get']>,
) {
  return ['gov', '/gov/service/javascript-app', args] as const
}

export function getGovServiceJavascriptAppQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gov.service)['javascript-app']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gov.service)['javascript-app']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gov.service)['javascript-app']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovServiceJavascriptAppQueryKey>
  >({
    queryKey: getGovServiceJavascriptAppQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gov.service['javascript-app'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGovServiceJavascriptApp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gov.service)['javascript-app']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.gov.service)['javascript-app']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gov.service)['javascript-app']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGovServiceJavascriptAppQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGovServiceJavascriptAppQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGovServiceJavascriptModulesQueryKey(
  args: InferRequestType<(typeof client.gov.service)['javascript-modules']['$get']>,
) {
  return ['gov', '/gov/service/javascript-modules', args] as const
}

export function getGovServiceJavascriptModulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gov.service)['javascript-modules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gov.service)['javascript-modules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gov.service)['javascript-modules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovServiceJavascriptModulesQueryKey>
  >({
    queryKey: getGovServiceJavascriptModulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gov.service['javascript-modules'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGovServiceJavascriptModules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gov.service)['javascript-modules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.gov.service)['javascript-modules']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gov.service)['javascript-modules']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGovServiceJavascriptModulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGovServiceJavascriptModulesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGovServiceJavascriptModulesModuleNameQueryKey(
  args: InferRequestType<(typeof client.gov.service)['javascript-modules'][':moduleName']['$get']>,
) {
  return ['gov', '/gov/service/javascript-modules/:moduleName', args] as const
}

export function getGovServiceJavascriptModulesModuleNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gov.service)['javascript-modules'][':moduleName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gov.service)['javascript-modules'][':moduleName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gov.service)['javascript-modules'][':moduleName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovServiceJavascriptModulesModuleNameQueryKey>
  >({
    queryKey: getGovServiceJavascriptModulesModuleNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gov.service['javascript-modules'][':moduleName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGovServiceJavascriptModulesModuleName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gov.service)['javascript-modules'][':moduleName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.gov.service)['javascript-modules'][':moduleName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gov.service)['javascript-modules'][':moduleName']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGovServiceJavascriptModulesModuleNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGovServiceJavascriptModulesModuleNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGovServiceJoinPolicyQueryKey(
  args: InferRequestType<(typeof client.gov.service)['join-policy']['$get']>,
) {
  return ['gov', '/gov/service/join-policy', args] as const
}

export function getGovServiceJoinPolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.gov.service)['join-policy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gov.service)['join-policy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gov.service)['join-policy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovServiceJoinPolicyQueryKey>
  >({
    queryKey: getGovServiceJoinPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gov.service['join-policy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGovServiceJoinPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.gov.service)['join-policy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.gov.service)['join-policy']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gov.service)['join-policy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGovServiceJoinPolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGovServiceJoinPolicyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGovServiceJwkQueryKey(
  args: InferRequestType<typeof client.gov.service.jwk.$get>,
) {
  return ['gov', '/gov/service/jwk', args] as const
}

export function getGovServiceJwkQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.jwk.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.gov.service.jwk.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.jwk.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGovServiceJwkQueryKey>
  >({
    queryKey: getGovServiceJwkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gov.service.jwk.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGovServiceJwk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.jwk.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.gov.service.jwk.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.jwk.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGovServiceJwkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGovServiceJwkQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getGovServiceMembersQueryKey(
  args: InferRequestType<typeof client.gov.service.members.$get>,
) {
  return ['gov', '/gov/service/members', args] as const
}

export function getGovServiceMembersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.members.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.gov.service.members.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.members.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGovServiceMembersQueryKey>
  >({
    queryKey: getGovServiceMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gov.service.members.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGovServiceMembers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.members.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.gov.service.members.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.members.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGovServiceMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGovServiceMembersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getGovServiceMembersMemberIdQueryKey(
  args: InferRequestType<(typeof client.gov.service.members)[':memberId']['$get']>,
) {
  return ['gov', '/gov/service/members/:memberId', args] as const
}

export function getGovServiceMembersMemberIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gov.service.members)[':memberId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gov.service.members)[':memberId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gov.service.members)[':memberId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovServiceMembersMemberIdQueryKey>
  >({
    queryKey: getGovServiceMembersMemberIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gov.service.members[':memberId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGovServiceMembersMemberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gov.service.members)[':memberId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.gov.service.members)[':memberId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gov.service.members)[':memberId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGovServiceMembersMemberIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGovServiceMembersMemberIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGovServiceNodesQueryKey(
  args: InferRequestType<typeof client.gov.service.nodes.$get>,
) {
  return ['gov', '/gov/service/nodes', args] as const
}

export function getGovServiceNodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.nodes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.gov.service.nodes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.nodes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGovServiceNodesQueryKey>
  >({
    queryKey: getGovServiceNodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gov.service.nodes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGovServiceNodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.gov.service.nodes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.nodes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGovServiceNodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGovServiceNodesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getGovServiceNodesNodeIdQueryKey(
  args: InferRequestType<(typeof client.gov.service.nodes)[':nodeId']['$get']>,
) {
  return ['gov', '/gov/service/nodes/:nodeId', args] as const
}

export function getGovServiceNodesNodeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gov.service.nodes)[':nodeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gov.service.nodes)[':nodeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gov.service.nodes)[':nodeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovServiceNodesNodeIdQueryKey>
  >({
    queryKey: getGovServiceNodesNodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gov.service.nodes[':nodeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGovServiceNodesNodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gov.service.nodes)[':nodeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.gov.service.nodes)[':nodeId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gov.service.nodes)[':nodeId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGovServiceNodesNodeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGovServiceNodesNodeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGovServiceTransactionsCommitQueryKey(
  args: InferRequestType<typeof client.gov.service.transactions.commit.$get>,
) {
  return ['gov', '/gov/service/transactions/commit', args] as const
}

export function getGovServiceTransactionsCommitQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.transactions.commit.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gov.service.transactions.commit.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.gov.service.transactions.commit.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovServiceTransactionsCommitQueryKey>
  >({
    queryKey: getGovServiceTransactionsCommitQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gov.service.transactions.commit.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGovServiceTransactionsCommit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.transactions.commit.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.gov.service.transactions.commit.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.gov.service.transactions.commit.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGovServiceTransactionsCommitQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGovServiceTransactionsCommitQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGovServiceTransactionsTransactionIdQueryKey(
  args: InferRequestType<(typeof client.gov.service.transactions)[':transactionId']['$get']>,
) {
  return ['gov', '/gov/service/transactions/:transactionId', args] as const
}

export function getGovServiceTransactionsTransactionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gov.service.transactions)[':transactionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gov.service.transactions)[':transactionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gov.service.transactions)[':transactionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovServiceTransactionsTransactionIdQueryKey>
  >({
    queryKey: getGovServiceTransactionsTransactionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gov.service.transactions[':transactionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGovServiceTransactionsTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gov.service.transactions)[':transactionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.gov.service.transactions)[':transactionId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gov.service.transactions)[':transactionId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGovServiceTransactionsTransactionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGovServiceTransactionsTransactionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGovServiceUsersQueryKey(
  args: InferRequestType<typeof client.gov.service.users.$get>,
) {
  return ['gov', '/gov/service/users', args] as const
}

export function getGovServiceUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.gov.service.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGovServiceUsersQueryKey>
  >({
    queryKey: getGovServiceUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gov.service.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGovServiceUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.gov.service.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.users.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGovServiceUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGovServiceUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getGovServiceUsersUserIdQueryKey(
  args: InferRequestType<(typeof client.gov.service.users)[':userId']['$get']>,
) {
  return ['gov', '/gov/service/users/:userId', args] as const
}

export function getGovServiceUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gov.service.users)[':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gov.service.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gov.service.users)[':userId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovServiceUsersUserIdQueryKey>
  >({
    queryKey: getGovServiceUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gov.service.users[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGovServiceUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gov.service.users)[':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.gov.service.users)[':userId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gov.service.users)[':userId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGovServiceUsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGovServiceUsersUserIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGovTxQueryKey(args: InferRequestType<typeof client.gov.tx.$get>) {
  return ['gov', '/gov/tx', args] as const
}

export function getGovTxQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.tx.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.gov.tx.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.tx.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGovTxQueryKey>
  >({
    queryKey: getGovTxQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gov.tx.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGovTx<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.tx.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.gov.tx.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.tx.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGovTxQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGovTxQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
