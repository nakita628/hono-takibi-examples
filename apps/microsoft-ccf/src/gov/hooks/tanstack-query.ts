import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function useGovApi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.api.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gov.api.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.api.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGovApiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGovApiQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGovApi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.api.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gov.api.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.api.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGovApiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGovApiQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useGovCommit<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.commit.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gov.commit.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGovCommitQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGovCommit<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.commit.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gov.commit.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGovCommitQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useGovMembersProposals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.members.proposals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gov.members.proposals.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGovMembersProposalsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGovMembersProposals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.members.proposals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gov.members.proposals.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGovMembersProposalsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.gov.members.proposals)[':proposalId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGovMembersProposalsProposalIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGovMembersProposalsProposalIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGovMembersProposalsProposalId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGovMembersProposalsProposalIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.gov.members.proposals)[':proposalId']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGovMembersProposalsProposalIdActionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGovMembersProposalsProposalIdActions<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGovMembersProposalsProposalIdActionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<
    (typeof client.gov.members.proposals)[':proposalId']['ballots'][':memberId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGovMembersProposalsProposalIdBallotsMemberIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGovMembersProposalsProposalIdBallotsMemberIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGovMembersProposalsProposalIdBallotsMemberId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGovMembersProposalsProposalIdBallotsMemberIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.gov.members)['state-digests'][':memberId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGovMembersStateDigestsMemberIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGovMembersStateDigestsMemberId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGovMembersStateDigestsMemberIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
        InferRequestType<(typeof client.gov.members)['state-digests'][':memberId:update']['$post']>,
        TOnMutateResult
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

export function useGovReceipt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.receipt.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gov.receipt.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGovReceiptQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGovReceipt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.receipt.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gov.receipt.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGovReceiptQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useGovReceiptCose<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.receipt.cose.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gov.receipt.cose.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGovReceiptCoseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGovReceiptCose<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.receipt.cose.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gov.receipt.cose.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGovReceiptCoseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.gov.recovery)['encrypted-shares'][':memberId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGovRecoveryEncryptedSharesMemberIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGovRecoveryEncryptedSharesMemberIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGovRecoveryEncryptedSharesMemberId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGovRecoveryEncryptedSharesMemberIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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

export function useGovServiceConstitution<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.constitution.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gov.service.constitution.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGovServiceConstitutionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGovServiceConstitution<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.constitution.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gov.service.constitution.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGovServiceConstitutionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useGovServiceInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gov.service.info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGovServiceInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGovServiceInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gov.service.info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGovServiceInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.gov.service)['javascript-app']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGovServiceJavascriptAppQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGovServiceJavascriptAppQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGovServiceJavascriptApp<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGovServiceJavascriptAppQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.gov.service)['javascript-modules']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGovServiceJavascriptModulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGovServiceJavascriptModulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGovServiceJavascriptModules<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGovServiceJavascriptModulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.gov.service)['javascript-modules'][':moduleName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGovServiceJavascriptModulesModuleNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGovServiceJavascriptModulesModuleName<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGovServiceJavascriptModulesModuleNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useGovServiceJoinPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.gov.service)['join-policy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gov.service)['join-policy']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGovServiceJoinPolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGovServiceJoinPolicyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGovServiceJoinPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.gov.service)['join-policy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gov.service)['join-policy']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGovServiceJoinPolicyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useGovServiceJwk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.jwk.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gov.service.jwk.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGovServiceJwkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGovServiceJwk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.jwk.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gov.service.jwk.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGovServiceJwkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useGovServiceMembers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.members.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gov.service.members.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGovServiceMembersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGovServiceMembers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.members.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gov.service.members.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGovServiceMembersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.gov.service.members)[':memberId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGovServiceMembersMemberIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGovServiceMembersMemberIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGovServiceMembersMemberId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGovServiceMembersMemberIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useGovServiceNodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gov.service.nodes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGovServiceNodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGovServiceNodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gov.service.nodes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGovServiceNodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.gov.service.nodes)[':nodeId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGovServiceNodesNodeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGovServiceNodesNodeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGovServiceNodesNodeId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGovServiceNodesNodeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useGovServiceTransactionsCommit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.transactions.commit.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gov.service.transactions.commit.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGovServiceTransactionsCommitQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGovServiceTransactionsCommitQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGovServiceTransactionsCommit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.transactions.commit.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gov.service.transactions.commit.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGovServiceTransactionsCommitQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.gov.service.transactions)[':transactionId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGovServiceTransactionsTransactionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGovServiceTransactionsTransactionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGovServiceTransactionsTransactionId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGovServiceTransactionsTransactionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useGovServiceUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gov.service.users.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGovServiceUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGovServiceUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.service.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gov.service.users.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGovServiceUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.gov.service.users)[':userId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGovServiceUsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGovServiceUsersUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGovServiceUsersUserId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGovServiceUsersUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useGovTx<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.tx.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gov.tx.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.tx.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGovTxQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGovTxQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGovTx<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.tx.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gov.tx.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gov.tx.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGovTxQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGovTxQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
