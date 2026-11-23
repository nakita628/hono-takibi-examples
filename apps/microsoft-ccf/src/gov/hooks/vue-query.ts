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

export function getGovKey() {
  return ['gov'] as const
}

export function getGovApiQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.api.$get>>,
) {
  return ['gov', '/gov/api', toValue(args)] as const
}

export function getGovApiQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.api.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovApiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gov.api.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGovApi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.api.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.api.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.api.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.api.$get>>>>
          >,
          ReturnType<typeof getGovApiQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.api.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGovApiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovApiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gov.api.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovCommitQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.commit.$get>>,
) {
  return ['gov', '/gov/commit', toValue(args)] as const
}

export function getGovCommitQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.commit.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovCommitQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gov.commit.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGovCommit<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.commit.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.commit.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.commit.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.commit.$get>>>>
          >,
          ReturnType<typeof getGovCommitQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.commit.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGovCommitQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovCommitQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gov.commit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovMembersProposalsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.members.proposals.$get>>,
) {
  return ['gov', '/gov/members/proposals', toValue(args)] as const
}

export function getGovMembersProposalsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.members.proposals.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovMembersProposalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gov.members.proposals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovMembersProposals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.members.proposals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.members.proposals.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.gov.members.proposals.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.gov.members.proposals.$get>>>
            >
          >,
          ReturnType<typeof getGovMembersProposalsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.gov.members.proposals.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovMembersProposalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovMembersProposalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gov.members.proposals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovMembersProposalsProposalIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gov.members.proposals)[':proposalId']['$get']>
  >,
) {
  return ['gov', '/gov/members/proposals/:proposalId', toValue(args)] as const
}

export function getGovMembersProposalsProposalIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gov.members.proposals)[':proposalId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovMembersProposalsProposalIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gov.members.proposals[':proposalId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovMembersProposalsProposalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gov.members.proposals)[':proposalId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gov.members.proposals)[':proposalId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gov.members.proposals)[':proposalId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gov.members.proposals)[':proposalId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGovMembersProposalsProposalIdQueryKey>
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
          Awaited<ReturnType<(typeof client.gov.members.proposals)[':proposalId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovMembersProposalsProposalIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovMembersProposalsProposalIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gov.members.proposals[':proposalId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovMembersProposalsProposalIdActionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gov.members.proposals)[':proposalId']['actions']['$get']>
  >,
) {
  return ['gov', '/gov/members/proposals/:proposalId/actions', toValue(args)] as const
}

export function getGovMembersProposalsProposalIdActionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gov.members.proposals)[':proposalId']['actions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovMembersProposalsProposalIdActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gov.members.proposals[':proposalId'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovMembersProposalsProposalIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gov.members.proposals)[':proposalId']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gov.members.proposals)[':proposalId']['actions']['$get']>
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
                    (typeof client.gov.members.proposals)[':proposalId']['actions']['$get']
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
                    (typeof client.gov.members.proposals)[':proposalId']['actions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGovMembersProposalsProposalIdActionsQueryKey>
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
            ReturnType<(typeof client.gov.members.proposals)[':proposalId']['actions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovMembersProposalsProposalIdActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovMembersProposalsProposalIdActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gov.members.proposals[':proposalId'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovMembersProposalsProposalIdBallotsMemberIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gov.members.proposals)[':proposalId']['ballots'][':memberId']['$get']
    >
  >,
) {
  return ['gov', '/gov/members/proposals/:proposalId/ballots/:memberId', toValue(args)] as const
}

export function getGovMembersProposalsProposalIdBallotsMemberIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gov.members.proposals)[':proposalId']['ballots'][':memberId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovMembersProposalsProposalIdBallotsMemberIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gov.members.proposals[':proposalId'].ballots[':memberId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovMembersProposalsProposalIdBallotsMemberId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gov.members.proposals)[':proposalId']['ballots'][':memberId']['$get']
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
                    (typeof client.gov.members.proposals)[':proposalId']['ballots'][':memberId']['$get']
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
                    (typeof client.gov.members.proposals)[':proposalId']['ballots'][':memberId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGovMembersProposalsProposalIdBallotsMemberIdQueryKey>
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
              (typeof client.gov.members.proposals)[':proposalId']['ballots'][':memberId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovMembersProposalsProposalIdBallotsMemberIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovMembersProposalsProposalIdBallotsMemberIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gov.members.proposals[':proposalId'].ballots[':memberId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostGovMembersProposalsProposalIdBallotsMemberIdSubmit<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGovMembersProposalsProposalIdBallotsMemberIdSubmitMutationOptions<
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

export function usePostGovMembersProposalsProposalIdWithdraw<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.gov.members.proposals)[':proposalId:withdraw']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.gov.members.proposals)[':proposalId:withdraw']['$post']>,
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
  const mutationDefaults = getPostGovMembersProposalsProposalIdWithdrawMutationOptions<
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

export function usePostGovMembersProposalsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGovMembersProposalsCreateMutationOptions<TError, TOnMutateResult>(
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

export function getGovMembersStateDigestsMemberIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gov.members)['state-digests'][':memberId']['$get']>
  >,
) {
  return ['gov', '/gov/members/state-digests/:memberId', toValue(args)] as const
}

export function getGovMembersStateDigestsMemberIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gov.members)['state-digests'][':memberId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovMembersStateDigestsMemberIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gov.members['state-digests'][':memberId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovMembersStateDigestsMemberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gov.members)['state-digests'][':memberId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gov.members)['state-digests'][':memberId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.gov.members)['state-digests'][':memberId']['$get']>
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
                  ReturnType<(typeof client.gov.members)['state-digests'][':memberId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGovMembersStateDigestsMemberIdQueryKey>
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
          Awaited<ReturnType<(typeof client.gov.members)['state-digests'][':memberId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovMembersStateDigestsMemberIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovMembersStateDigestsMemberIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gov.members['state-digests'][':memberId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostGovMembersStateDigestsMemberIdAck<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.gov.members)['state-digests'][':memberId:ack']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.gov.members)['state-digests'][':memberId:ack']['$post']>,
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
  const mutationDefaults = getPostGovMembersStateDigestsMemberIdAckMutationOptions<
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

export function usePostGovMembersStateDigestsMemberIdUpdate<
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
                    (typeof client.gov.members)['state-digests'][':memberId:update']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gov.members)['state-digests'][':memberId:update']['$post']
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
  const mutationDefaults = getPostGovMembersStateDigestsMemberIdUpdateMutationOptions<
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

export function getGovReceiptQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.receipt.$get>>,
) {
  return ['gov', '/gov/receipt', toValue(args)] as const
}

export function getGovReceiptQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.receipt.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovReceiptQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gov.receipt.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGovReceipt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.receipt.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.receipt.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.receipt.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.receipt.$get>>>>
          >,
          ReturnType<typeof getGovReceiptQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.receipt.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGovReceiptQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovReceiptQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gov.receipt.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovReceiptCoseQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.receipt.cose.$get>>,
) {
  return ['gov', '/gov/receipt/cose', toValue(args)] as const
}

export function getGovReceiptCoseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.receipt.cose.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovReceiptCoseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gov.receipt.cose.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovReceiptCose<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.receipt.cose.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.receipt.cose.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.gov.receipt.cose.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.gov.receipt.cose.$get>>>
            >
          >,
          ReturnType<typeof getGovReceiptCoseQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.receipt.cose.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGovReceiptCoseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovReceiptCoseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gov.receipt.cose.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovRecoveryEncryptedSharesMemberIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gov.recovery)['encrypted-shares'][':memberId']['$get']>
  >,
) {
  return ['gov', '/gov/recovery/encrypted-shares/:memberId', toValue(args)] as const
}

export function getGovRecoveryEncryptedSharesMemberIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gov.recovery)['encrypted-shares'][':memberId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovRecoveryEncryptedSharesMemberIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gov.recovery['encrypted-shares'][':memberId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovRecoveryEncryptedSharesMemberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gov.recovery)['encrypted-shares'][':memberId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gov.recovery)['encrypted-shares'][':memberId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.gov.recovery)['encrypted-shares'][':memberId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGovRecoveryEncryptedSharesMemberIdQueryKey>
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
          Awaited<ReturnType<(typeof client.gov.recovery)['encrypted-shares'][':memberId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovRecoveryEncryptedSharesMemberIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovRecoveryEncryptedSharesMemberIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gov.recovery['encrypted-shares'][':memberId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostGovRecoveryMembersMemberIdRecover<
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
                  ReturnType<(typeof client.gov.recovery.members)[':memberId:recover']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.gov.recovery.members)[':memberId:recover']['$post']>,
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
  const mutationDefaults = getPostGovRecoveryMembersMemberIdRecoverMutationOptions<
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

export function getGovServiceConstitutionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.service.constitution.$get>>,
) {
  return ['gov', '/gov/service/constitution', toValue(args)] as const
}

export function getGovServiceConstitutionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.service.constitution.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovServiceConstitutionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gov.service.constitution.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovServiceConstitution<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.constitution.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.service.constitution.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.constitution.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.constitution.$get>>>
            >
          >,
          ReturnType<typeof getGovServiceConstitutionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.constitution.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovServiceConstitutionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovServiceConstitutionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gov.service.constitution.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovServiceInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.service.info.$get>>,
) {
  return ['gov', '/gov/service/info', toValue(args)] as const
}

export function getGovServiceInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.service.info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovServiceInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gov.service.info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovServiceInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.service.info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.info.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.info.$get>>>
            >
          >,
          ReturnType<typeof getGovServiceInfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGovServiceInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovServiceInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gov.service.info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovServiceJavascriptAppQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.gov.service)['javascript-app']['$get']>>,
) {
  return ['gov', '/gov/service/javascript-app', toValue(args)] as const
}

export function getGovServiceJavascriptAppQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.gov.service)['javascript-app']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovServiceJavascriptAppQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gov.service['javascript-app'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovServiceJavascriptApp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gov.service)['javascript-app']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.gov.service)['javascript-app']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gov.service)['javascript-app']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gov.service)['javascript-app']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGovServiceJavascriptAppQueryKey>
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
          Awaited<ReturnType<(typeof client.gov.service)['javascript-app']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovServiceJavascriptAppQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovServiceJavascriptAppQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gov.service['javascript-app'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovServiceJavascriptModulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gov.service)['javascript-modules']['$get']>
  >,
) {
  return ['gov', '/gov/service/javascript-modules', toValue(args)] as const
}

export function getGovServiceJavascriptModulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gov.service)['javascript-modules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovServiceJavascriptModulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gov.service['javascript-modules'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovServiceJavascriptModules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gov.service)['javascript-modules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gov.service)['javascript-modules']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gov.service)['javascript-modules']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gov.service)['javascript-modules']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGovServiceJavascriptModulesQueryKey>
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
          Awaited<ReturnType<(typeof client.gov.service)['javascript-modules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovServiceJavascriptModulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovServiceJavascriptModulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gov.service['javascript-modules'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovServiceJavascriptModulesModuleNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gov.service)['javascript-modules'][':moduleName']['$get']>
  >,
) {
  return ['gov', '/gov/service/javascript-modules/:moduleName', toValue(args)] as const
}

export function getGovServiceJavascriptModulesModuleNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gov.service)['javascript-modules'][':moduleName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovServiceJavascriptModulesModuleNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gov.service['javascript-modules'][':moduleName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovServiceJavascriptModulesModuleName<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gov.service)['javascript-modules'][':moduleName']['$get']>
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
                    (typeof client.gov.service)['javascript-modules'][':moduleName']['$get']
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
                    (typeof client.gov.service)['javascript-modules'][':moduleName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGovServiceJavascriptModulesModuleNameQueryKey>
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
            ReturnType<(typeof client.gov.service)['javascript-modules'][':moduleName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovServiceJavascriptModulesModuleNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovServiceJavascriptModulesModuleNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gov.service['javascript-modules'][':moduleName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovServiceJoinPolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.gov.service)['join-policy']['$get']>>,
) {
  return ['gov', '/gov/service/join-policy', toValue(args)] as const
}

export function getGovServiceJoinPolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.gov.service)['join-policy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovServiceJoinPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gov.service['join-policy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovServiceJoinPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.gov.service)['join-policy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.gov.service)['join-policy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gov.service)['join-policy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gov.service)['join-policy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGovServiceJoinPolicyQueryKey>
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
          Awaited<ReturnType<(typeof client.gov.service)['join-policy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovServiceJoinPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovServiceJoinPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gov.service['join-policy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovServiceJwkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.service.jwk.$get>>,
) {
  return ['gov', '/gov/service/jwk', toValue(args)] as const
}

export function getGovServiceJwkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.service.jwk.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovServiceJwkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gov.service.jwk.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovServiceJwk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.jwk.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.service.jwk.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.jwk.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.jwk.$get>>>
            >
          >,
          ReturnType<typeof getGovServiceJwkQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.jwk.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGovServiceJwkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovServiceJwkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gov.service.jwk.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovServiceMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.service.members.$get>>,
) {
  return ['gov', '/gov/service/members', toValue(args)] as const
}

export function getGovServiceMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.service.members.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovServiceMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gov.service.members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovServiceMembers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.members.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.service.members.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.members.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.members.$get>>>
            >
          >,
          ReturnType<typeof getGovServiceMembersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.members.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGovServiceMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovServiceMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gov.service.members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovServiceMembersMemberIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gov.service.members)[':memberId']['$get']>
  >,
) {
  return ['gov', '/gov/service/members/:memberId', toValue(args)] as const
}

export function getGovServiceMembersMemberIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gov.service.members)[':memberId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovServiceMembersMemberIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gov.service.members[':memberId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovServiceMembersMemberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gov.service.members)[':memberId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gov.service.members)[':memberId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gov.service.members)[':memberId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gov.service.members)[':memberId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGovServiceMembersMemberIdQueryKey>
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
          Awaited<ReturnType<(typeof client.gov.service.members)[':memberId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovServiceMembersMemberIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovServiceMembersMemberIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gov.service.members[':memberId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovServiceNodesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.service.nodes.$get>>,
) {
  return ['gov', '/gov/service/nodes', toValue(args)] as const
}

export function getGovServiceNodesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.service.nodes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovServiceNodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gov.service.nodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovServiceNodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.service.nodes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.nodes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.nodes.$get>>>
            >
          >,
          ReturnType<typeof getGovServiceNodesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.nodes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGovServiceNodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovServiceNodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gov.service.nodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovServiceNodesNodeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.gov.service.nodes)[':nodeId']['$get']>>,
) {
  return ['gov', '/gov/service/nodes/:nodeId', toValue(args)] as const
}

export function getGovServiceNodesNodeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.gov.service.nodes)[':nodeId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovServiceNodesNodeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gov.service.nodes[':nodeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovServiceNodesNodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gov.service.nodes)[':nodeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.gov.service.nodes)[':nodeId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gov.service.nodes)[':nodeId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gov.service.nodes)[':nodeId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGovServiceNodesNodeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.gov.service.nodes)[':nodeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovServiceNodesNodeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovServiceNodesNodeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gov.service.nodes[':nodeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovServiceTransactionsCommitQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.service.transactions.commit.$get>>,
) {
  return ['gov', '/gov/service/transactions/commit', toValue(args)] as const
}

export function getGovServiceTransactionsCommitQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.service.transactions.commit.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovServiceTransactionsCommitQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gov.service.transactions.commit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovServiceTransactionsCommit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.transactions.commit.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.service.transactions.commit.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.gov.service.transactions.commit.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.gov.service.transactions.commit.$get>>
              >
            >
          >,
          ReturnType<typeof getGovServiceTransactionsCommitQueryKey>
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
          Awaited<ReturnType<typeof client.gov.service.transactions.commit.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovServiceTransactionsCommitQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovServiceTransactionsCommitQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gov.service.transactions.commit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovServiceTransactionsTransactionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gov.service.transactions)[':transactionId']['$get']>
  >,
) {
  return ['gov', '/gov/service/transactions/:transactionId', toValue(args)] as const
}

export function getGovServiceTransactionsTransactionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gov.service.transactions)[':transactionId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovServiceTransactionsTransactionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gov.service.transactions[':transactionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovServiceTransactionsTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gov.service.transactions)[':transactionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gov.service.transactions)[':transactionId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.gov.service.transactions)[':transactionId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGovServiceTransactionsTransactionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.gov.service.transactions)[':transactionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovServiceTransactionsTransactionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovServiceTransactionsTransactionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gov.service.transactions[':transactionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovServiceUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.service.users.$get>>,
) {
  return ['gov', '/gov/service/users', toValue(args)] as const
}

export function getGovServiceUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.service.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovServiceUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gov.service.users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovServiceUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.service.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.users.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.users.$get>>>
            >
          >,
          ReturnType<typeof getGovServiceUsersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGovServiceUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovServiceUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gov.service.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovServiceUsersUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.gov.service.users)[':userId']['$get']>>,
) {
  return ['gov', '/gov/service/users/:userId', toValue(args)] as const
}

export function getGovServiceUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.gov.service.users)[':userId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovServiceUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gov.service.users[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovServiceUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gov.service.users)[':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.gov.service.users)[':userId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gov.service.users)[':userId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gov.service.users)[':userId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGovServiceUsersUserIdQueryKey>
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
          Awaited<ReturnType<(typeof client.gov.service.users)[':userId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovServiceUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovServiceUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gov.service.users[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovTxQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.tx.$get>>,
) {
  return ['gov', '/gov/tx', toValue(args)] as const
}

export function getGovTxQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.tx.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovTxQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gov.tx.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGovTx<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.tx.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gov.tx.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.tx.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.tx.$get>>>>>,
          ReturnType<typeof getGovTxQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.tx.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGovTxQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovTxQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gov.tx.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
