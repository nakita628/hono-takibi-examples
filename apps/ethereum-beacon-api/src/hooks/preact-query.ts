import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getEthKey() {
  return ['eth'] as const
}

export function getEthV1BeaconGenesisQueryKey() {
  return ['eth', '/eth/v1/beacon/genesis'] as const
}

export function getEthV1BeaconGenesisQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.beacon.genesis.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.beacon.genesis.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconGenesisQueryKey>
  >({
    queryKey: getEthV1BeaconGenesisQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.genesis.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconGenesis<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.beacon.genesis.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.beacon.genesis.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconGenesisQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEthV1BeaconGenesisQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconGenesis<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.beacon.genesis.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.beacon.genesis.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconGenesisQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEthV1BeaconGenesisQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEthV1BeaconStatesStateIdRootQueryKey(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['root']['$get']>,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/root', args] as const
}

export function getEthV1BeaconStatesStateIdRootQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['root']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['root']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['root']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdRootQueryKey>
  >({
    queryKey: getEthV1BeaconStatesStateIdRootQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].root.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconStatesStateIdRoot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['root']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['root']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['root']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdRootQueryKey>
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
      ...getEthV1BeaconStatesStateIdRootQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconStatesStateIdRoot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['root']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['root']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['root']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdRootQueryKey>
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
      ...getEthV1BeaconStatesStateIdRootQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEthV1BeaconStatesStateIdForkQueryKey(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['fork']['$get']>,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/fork', args] as const
}

export function getEthV1BeaconStatesStateIdForkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['fork']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['fork']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['fork']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdForkQueryKey>
  >({
    queryKey: getEthV1BeaconStatesStateIdForkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].fork.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconStatesStateIdFork<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['fork']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['fork']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['fork']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdForkQueryKey>
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
      ...getEthV1BeaconStatesStateIdForkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconStatesStateIdFork<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['fork']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['fork']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['fork']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdForkQueryKey>
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
      ...getEthV1BeaconStatesStateIdForkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEthV1BeaconStatesStateIdFinalityCheckpointsQueryKey(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['finality_checkpoints']['$get']
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/finality_checkpoints', args] as const
}

export function getEthV1BeaconStatesStateIdFinalityCheckpointsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.eth.v1.beacon.states)[':state_id']['finality_checkpoints']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['finality_checkpoints']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.eth.v1.beacon.states)[':state_id']['finality_checkpoints']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdFinalityCheckpointsQueryKey>
  >({
    queryKey: getEthV1BeaconStatesStateIdFinalityCheckpointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].finality_checkpoints.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconStatesStateIdFinalityCheckpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.eth.v1.beacon.states)[':state_id']['finality_checkpoints']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['finality_checkpoints']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.eth.v1.beacon.states)[':state_id']['finality_checkpoints']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdFinalityCheckpointsQueryKey>
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
      ...getEthV1BeaconStatesStateIdFinalityCheckpointsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconStatesStateIdFinalityCheckpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.eth.v1.beacon.states)[':state_id']['finality_checkpoints']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['finality_checkpoints']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.eth.v1.beacon.states)[':state_id']['finality_checkpoints']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdFinalityCheckpointsQueryKey>
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
      ...getEthV1BeaconStatesStateIdFinalityCheckpointsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEthV1BeaconStatesStateIdValidatorsQueryKey(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['validators']['$get']>,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/validators', args] as const
}

export function getEthV1BeaconStatesStateIdValidatorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['validators']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['validators']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['validators']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdValidatorsQueryKey>
  >({
    queryKey: getEthV1BeaconStatesStateIdValidatorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].validators.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconStatesStateIdValidators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['validators']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['validators']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['validators']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdValidatorsQueryKey>
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
      ...getEthV1BeaconStatesStateIdValidatorsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconStatesStateIdValidators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['validators']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['validators']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['validators']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdValidatorsQueryKey>
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
      ...getEthV1BeaconStatesStateIdValidatorsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostEthV1BeaconStatesStateIdValidatorsMutationKey() {
  return ['eth', '/eth/v1/beacon/states/:state_id/validators', 'POST'] as const
}

export function getPostEthV1BeaconStatesStateIdValidatorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['validators']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['validators']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEthV1BeaconStatesStateIdValidatorsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.eth.v1.beacon.states)[':state_id']['validators']['$post']
      >,
    ) {
      return parseResponse(client.eth.v1.beacon.states[':state_id'].validators.$post(args, options))
    },
  })
}

export function usePostEthV1BeaconStatesStateIdValidators<
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
                ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['validators']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['validators']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEthV1BeaconStatesStateIdValidatorsMutationOptions<
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

export function getEthV1BeaconStatesStateIdValidatorsValidatorIdQueryKey(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['validators'][':validator_id']['$get']
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/validators/:validator_id', args] as const
}

export function getEthV1BeaconStatesStateIdValidatorsValidatorIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.eth.v1.beacon.states)[':state_id']['validators'][':validator_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['validators'][':validator_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.eth.v1.beacon.states)[':state_id']['validators'][':validator_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdValidatorsValidatorIdQueryKey>
  >({
    queryKey: getEthV1BeaconStatesStateIdValidatorsValidatorIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].validators[':validator_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconStatesStateIdValidatorsValidatorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.eth.v1.beacon.states)[':state_id']['validators'][':validator_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['validators'][':validator_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.eth.v1.beacon.states)[':state_id']['validators'][':validator_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdValidatorsValidatorIdQueryKey>
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
      ...getEthV1BeaconStatesStateIdValidatorsValidatorIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconStatesStateIdValidatorsValidatorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.eth.v1.beacon.states)[':state_id']['validators'][':validator_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['validators'][':validator_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.eth.v1.beacon.states)[':state_id']['validators'][':validator_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdValidatorsValidatorIdQueryKey>
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
      ...getEthV1BeaconStatesStateIdValidatorsValidatorIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEthV1BeaconStatesStateIdValidatorBalancesQueryKey(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['validator_balances']['$get']
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/validator_balances', args] as const
}

export function getEthV1BeaconStatesStateIdValidatorBalancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.eth.v1.beacon.states)[':state_id']['validator_balances']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['validator_balances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.eth.v1.beacon.states)[':state_id']['validator_balances']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdValidatorBalancesQueryKey>
  >({
    queryKey: getEthV1BeaconStatesStateIdValidatorBalancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].validator_balances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconStatesStateIdValidatorBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.eth.v1.beacon.states)[':state_id']['validator_balances']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['validator_balances']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.eth.v1.beacon.states)[':state_id']['validator_balances']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdValidatorBalancesQueryKey>
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
      ...getEthV1BeaconStatesStateIdValidatorBalancesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconStatesStateIdValidatorBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.eth.v1.beacon.states)[':state_id']['validator_balances']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['validator_balances']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.eth.v1.beacon.states)[':state_id']['validator_balances']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdValidatorBalancesQueryKey>
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
      ...getEthV1BeaconStatesStateIdValidatorBalancesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostEthV1BeaconStatesStateIdValidatorBalancesMutationKey() {
  return ['eth', '/eth/v1/beacon/states/:state_id/validator_balances', 'POST'] as const
}

export function getPostEthV1BeaconStatesStateIdValidatorBalancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.eth.v1.beacon.states)[':state_id']['validator_balances']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.eth.v1.beacon.states)[':state_id']['validator_balances']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostEthV1BeaconStatesStateIdValidatorBalancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.eth.v1.beacon.states)[':state_id']['validator_balances']['$post']
      >,
    ) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].validator_balances.$post(args, options),
      )
    },
  })
}

export function usePostEthV1BeaconStatesStateIdValidatorBalances<
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
                  (typeof client.eth.v1.beacon.states)[':state_id']['validator_balances']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.eth.v1.beacon.states)[':state_id']['validator_balances']['$post']
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
  const mutationDefaults = getPostEthV1BeaconStatesStateIdValidatorBalancesMutationOptions<
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

export function getPostEthV1BeaconStatesStateIdValidatorIdentitiesMutationKey() {
  return ['eth', '/eth/v1/beacon/states/:state_id/validator_identities', 'POST'] as const
}

export function getPostEthV1BeaconStatesStateIdValidatorIdentitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.eth.v1.beacon.states)[':state_id']['validator_identities']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.eth.v1.beacon.states)[':state_id']['validator_identities']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostEthV1BeaconStatesStateIdValidatorIdentitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.eth.v1.beacon.states)[':state_id']['validator_identities']['$post']
      >,
    ) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].validator_identities.$post(args, options),
      )
    },
  })
}

export function usePostEthV1BeaconStatesStateIdValidatorIdentities<
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
                  (typeof client.eth.v1.beacon.states)[':state_id']['validator_identities']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.eth.v1.beacon.states)[':state_id']['validator_identities']['$post']
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
  const mutationDefaults = getPostEthV1BeaconStatesStateIdValidatorIdentitiesMutationOptions<
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

export function getPostEthV1BeaconStatesStateIdBuildersMutationKey() {
  return ['eth', '/eth/v1/beacon/states/:state_id/builders', 'POST'] as const
}

export function getPostEthV1BeaconStatesStateIdBuildersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['builders']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['builders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEthV1BeaconStatesStateIdBuildersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.eth.v1.beacon.states)[':state_id']['builders']['$post']
      >,
    ) {
      return parseResponse(client.eth.v1.beacon.states[':state_id'].builders.$post(args, options))
    },
  })
}

export function usePostEthV1BeaconStatesStateIdBuilders<
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
                ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['builders']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['builders']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEthV1BeaconStatesStateIdBuildersMutationOptions<
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

export function getEthV1BeaconStatesStateIdCommitteesQueryKey(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['committees']['$get']>,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/committees', args] as const
}

export function getEthV1BeaconStatesStateIdCommitteesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['committees']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['committees']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['committees']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdCommitteesQueryKey>
  >({
    queryKey: getEthV1BeaconStatesStateIdCommitteesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].committees.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconStatesStateIdCommittees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['committees']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['committees']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['committees']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdCommitteesQueryKey>
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
      ...getEthV1BeaconStatesStateIdCommitteesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconStatesStateIdCommittees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['committees']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['committees']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['committees']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdCommitteesQueryKey>
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
      ...getEthV1BeaconStatesStateIdCommitteesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEthV1BeaconStatesStateIdSyncCommitteesQueryKey(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['sync_committees']['$get']
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/sync_committees', args] as const
}

export function getEthV1BeaconStatesStateIdSyncCommitteesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['sync_committees']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['sync_committees']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['sync_committees']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdSyncCommitteesQueryKey>
  >({
    queryKey: getEthV1BeaconStatesStateIdSyncCommitteesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].sync_committees.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconStatesStateIdSyncCommittees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['sync_committees']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['sync_committees']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.eth.v1.beacon.states)[':state_id']['sync_committees']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdSyncCommitteesQueryKey>
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
      ...getEthV1BeaconStatesStateIdSyncCommitteesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconStatesStateIdSyncCommittees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['sync_committees']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['sync_committees']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.eth.v1.beacon.states)[':state_id']['sync_committees']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdSyncCommitteesQueryKey>
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
      ...getEthV1BeaconStatesStateIdSyncCommitteesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEthV1BeaconStatesStateIdPtcQueryKey(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['ptc']['$get']>,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/ptc', args] as const
}

export function getEthV1BeaconStatesStateIdPtcQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['ptc']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['ptc']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['ptc']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdPtcQueryKey>
  >({
    queryKey: getEthV1BeaconStatesStateIdPtcQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].ptc.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconStatesStateIdPtc<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['ptc']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['ptc']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['ptc']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdPtcQueryKey>
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
      ...getEthV1BeaconStatesStateIdPtcQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconStatesStateIdPtc<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['ptc']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['ptc']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['ptc']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdPtcQueryKey>
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
      ...getEthV1BeaconStatesStateIdPtcQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEthV1BeaconStatesStateIdRandaoQueryKey(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['randao']['$get']>,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/randao', args] as const
}

export function getEthV1BeaconStatesStateIdRandaoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['randao']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['randao']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['randao']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdRandaoQueryKey>
  >({
    queryKey: getEthV1BeaconStatesStateIdRandaoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].randao.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconStatesStateIdRandao<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['randao']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['randao']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['randao']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdRandaoQueryKey>
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
      ...getEthV1BeaconStatesStateIdRandaoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconStatesStateIdRandao<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['randao']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['randao']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['randao']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdRandaoQueryKey>
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
      ...getEthV1BeaconStatesStateIdRandaoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEthV1BeaconStatesStateIdPendingConsolidationsQueryKey(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['pending_consolidations']['$get']
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/pending_consolidations', args] as const
}

export function getEthV1BeaconStatesStateIdPendingConsolidationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.eth.v1.beacon.states)[':state_id']['pending_consolidations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['pending_consolidations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.eth.v1.beacon.states)[':state_id']['pending_consolidations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdPendingConsolidationsQueryKey>
  >({
    queryKey: getEthV1BeaconStatesStateIdPendingConsolidationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].pending_consolidations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconStatesStateIdPendingConsolidations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.eth.v1.beacon.states)[':state_id']['pending_consolidations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['pending_consolidations']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.eth.v1.beacon.states)[':state_id']['pending_consolidations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdPendingConsolidationsQueryKey>
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
      ...getEthV1BeaconStatesStateIdPendingConsolidationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconStatesStateIdPendingConsolidations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.eth.v1.beacon.states)[':state_id']['pending_consolidations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['pending_consolidations']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.eth.v1.beacon.states)[':state_id']['pending_consolidations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdPendingConsolidationsQueryKey>
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
      ...getEthV1BeaconStatesStateIdPendingConsolidationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEthV1BeaconStatesStateIdPendingDepositsQueryKey(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['pending_deposits']['$get']
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/pending_deposits', args] as const
}

export function getEthV1BeaconStatesStateIdPendingDepositsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['pending_deposits']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['pending_deposits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.eth.v1.beacon.states)[':state_id']['pending_deposits']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdPendingDepositsQueryKey>
  >({
    queryKey: getEthV1BeaconStatesStateIdPendingDepositsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].pending_deposits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconStatesStateIdPendingDeposits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['pending_deposits']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['pending_deposits']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.eth.v1.beacon.states)[':state_id']['pending_deposits']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdPendingDepositsQueryKey>
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
      ...getEthV1BeaconStatesStateIdPendingDepositsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconStatesStateIdPendingDeposits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['pending_deposits']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['pending_deposits']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.eth.v1.beacon.states)[':state_id']['pending_deposits']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdPendingDepositsQueryKey>
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
      ...getEthV1BeaconStatesStateIdPendingDepositsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEthV1BeaconStatesStateIdPendingPartialWithdrawalsQueryKey(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['pending_partial_withdrawals']['$get']
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/pending_partial_withdrawals', args] as const
}

export function getEthV1BeaconStatesStateIdPendingPartialWithdrawalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.eth.v1.beacon.states)[':state_id']['pending_partial_withdrawals']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['pending_partial_withdrawals']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.eth.v1.beacon.states)[':state_id']['pending_partial_withdrawals']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdPendingPartialWithdrawalsQueryKey>
  >({
    queryKey: getEthV1BeaconStatesStateIdPendingPartialWithdrawalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].pending_partial_withdrawals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconStatesStateIdPendingPartialWithdrawals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.eth.v1.beacon.states)[':state_id']['pending_partial_withdrawals']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['pending_partial_withdrawals']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.eth.v1.beacon.states)[':state_id']['pending_partial_withdrawals']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdPendingPartialWithdrawalsQueryKey>
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
      ...getEthV1BeaconStatesStateIdPendingPartialWithdrawalsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconStatesStateIdPendingPartialWithdrawals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.eth.v1.beacon.states)[':state_id']['pending_partial_withdrawals']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['pending_partial_withdrawals']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.eth.v1.beacon.states)[':state_id']['pending_partial_withdrawals']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdPendingPartialWithdrawalsQueryKey>
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
      ...getEthV1BeaconStatesStateIdPendingPartialWithdrawalsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEthV1BeaconStatesStateIdProposerLookaheadQueryKey(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['proposer_lookahead']['$get']
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/proposer_lookahead', args] as const
}

export function getEthV1BeaconStatesStateIdProposerLookaheadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.eth.v1.beacon.states)[':state_id']['proposer_lookahead']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['proposer_lookahead']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.eth.v1.beacon.states)[':state_id']['proposer_lookahead']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdProposerLookaheadQueryKey>
  >({
    queryKey: getEthV1BeaconStatesStateIdProposerLookaheadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].proposer_lookahead.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconStatesStateIdProposerLookahead<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.eth.v1.beacon.states)[':state_id']['proposer_lookahead']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['proposer_lookahead']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.eth.v1.beacon.states)[':state_id']['proposer_lookahead']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdProposerLookaheadQueryKey>
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
      ...getEthV1BeaconStatesStateIdProposerLookaheadQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconStatesStateIdProposerLookahead<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.eth.v1.beacon.states)[':state_id']['proposer_lookahead']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['proposer_lookahead']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.eth.v1.beacon.states)[':state_id']['proposer_lookahead']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdProposerLookaheadQueryKey>
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
      ...getEthV1BeaconStatesStateIdProposerLookaheadQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEthV1BeaconStatesStateIdBuilderPendingWithdrawalsQueryKey(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_withdrawals']['$get']
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/builder_pending_withdrawals', args] as const
}

export function getEthV1BeaconStatesStateIdBuilderPendingWithdrawalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_withdrawals']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_withdrawals']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_withdrawals']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdBuilderPendingWithdrawalsQueryKey>
  >({
    queryKey: getEthV1BeaconStatesStateIdBuilderPendingWithdrawalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].builder_pending_withdrawals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconStatesStateIdBuilderPendingWithdrawals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_withdrawals']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_withdrawals']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_withdrawals']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdBuilderPendingWithdrawalsQueryKey>
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
      ...getEthV1BeaconStatesStateIdBuilderPendingWithdrawalsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconStatesStateIdBuilderPendingWithdrawals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_withdrawals']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_withdrawals']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_withdrawals']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdBuilderPendingWithdrawalsQueryKey>
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
      ...getEthV1BeaconStatesStateIdBuilderPendingWithdrawalsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEthV1BeaconStatesStateIdBuilderPendingPaymentsQueryKey(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_payments']['$get']
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/builder_pending_payments', args] as const
}

export function getEthV1BeaconStatesStateIdBuilderPendingPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_payments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_payments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_payments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdBuilderPendingPaymentsQueryKey>
  >({
    queryKey: getEthV1BeaconStatesStateIdBuilderPendingPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].builder_pending_payments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconStatesStateIdBuilderPendingPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_payments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_payments']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_payments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdBuilderPendingPaymentsQueryKey>
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
      ...getEthV1BeaconStatesStateIdBuilderPendingPaymentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconStatesStateIdBuilderPendingPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_payments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_payments']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_payments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconStatesStateIdBuilderPendingPaymentsQueryKey>
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
      ...getEthV1BeaconStatesStateIdBuilderPendingPaymentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEthV1BeaconHeadersQueryKey(
  args: InferRequestType<typeof client.eth.v1.beacon.headers.$get>,
) {
  return ['eth', '/eth/v1/beacon/headers', args] as const
}

export function getEthV1BeaconHeadersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.beacon.headers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v1.beacon.headers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.beacon.headers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconHeadersQueryKey>
  >({
    queryKey: getEthV1BeaconHeadersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.headers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEthV1BeaconHeaders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.beacon.headers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v1.beacon.headers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.beacon.headers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconHeadersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEthV1BeaconHeadersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconHeaders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.beacon.headers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v1.beacon.headers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.beacon.headers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconHeadersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEthV1BeaconHeadersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEthV1BeaconHeadersBlockIdQueryKey(
  args: InferRequestType<(typeof client.eth.v1.beacon.headers)[':block_id']['$get']>,
) {
  return ['eth', '/eth/v1/beacon/headers/:block_id', args] as const
}

export function getEthV1BeaconHeadersBlockIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.headers)[':block_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.headers)[':block_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eth.v1.beacon.headers)[':block_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconHeadersBlockIdQueryKey>
  >({
    queryKey: getEthV1BeaconHeadersBlockIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.headers[':block_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconHeadersBlockId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.headers)[':block_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.headers)[':block_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eth.v1.beacon.headers)[':block_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconHeadersBlockIdQueryKey>
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
      ...getEthV1BeaconHeadersBlockIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconHeadersBlockId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.headers)[':block_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.headers)[':block_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eth.v1.beacon.headers)[':block_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconHeadersBlockIdQueryKey>
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
      ...getEthV1BeaconHeadersBlockIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostEthV2BeaconBlindedBlocksMutationKey() {
  return ['eth', '/eth/v2/beacon/blinded_blocks', 'POST'] as const
}

export function getPostEthV2BeaconBlindedBlocksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.beacon.blinded_blocks.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.eth.v2.beacon.blinded_blocks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEthV2BeaconBlindedBlocksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.eth.v2.beacon.blinded_blocks.$post>) {
      return parseResponse(client.eth.v2.beacon.blinded_blocks.$post(args, options))
    },
  })
}

export function usePostEthV2BeaconBlindedBlocks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v2.beacon.blinded_blocks.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.eth.v2.beacon.blinded_blocks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEthV2BeaconBlindedBlocksMutationOptions<TError, TOnMutateResult>(
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

export function getPostEthV2BeaconBlocksMutationKey() {
  return ['eth', '/eth/v2/beacon/blocks', 'POST'] as const
}

export function getPostEthV2BeaconBlocksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.beacon.blocks.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.eth.v2.beacon.blocks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEthV2BeaconBlocksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.eth.v2.beacon.blocks.$post>) {
      return parseResponse(client.eth.v2.beacon.blocks.$post(args, options))
    },
  })
}

export function usePostEthV2BeaconBlocks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.beacon.blocks.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.eth.v2.beacon.blocks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEthV2BeaconBlocksMutationOptions<TError, TOnMutateResult>(
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

export function getPostEthV1BeaconExecutionPayloadBidsMutationKey() {
  return ['eth', '/eth/v1/beacon/execution_payload_bids', 'POST'] as const
}

export function getPostEthV1BeaconExecutionPayloadBidsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.execution_payload_bids.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.eth.v1.beacon.execution_payload_bids.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEthV1BeaconExecutionPayloadBidsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.eth.v1.beacon.execution_payload_bids.$post>,
    ) {
      return parseResponse(client.eth.v1.beacon.execution_payload_bids.$post(args, options))
    },
  })
}

export function usePostEthV1BeaconExecutionPayloadBids<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.beacon.execution_payload_bids.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.eth.v1.beacon.execution_payload_bids.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEthV1BeaconExecutionPayloadBidsMutationOptions<
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

export function getPostEthV1BeaconExecutionPayloadEnvelopesMutationKey() {
  return ['eth', '/eth/v1/beacon/execution_payload_envelopes', 'POST'] as const
}

export function getPostEthV1BeaconExecutionPayloadEnvelopesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.execution_payload_envelopes.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.eth.v1.beacon.execution_payload_envelopes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEthV1BeaconExecutionPayloadEnvelopesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.eth.v1.beacon.execution_payload_envelopes.$post>,
    ) {
      return parseResponse(client.eth.v1.beacon.execution_payload_envelopes.$post(args, options))
    },
  })
}

export function usePostEthV1BeaconExecutionPayloadEnvelopes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.beacon.execution_payload_envelopes.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.eth.v1.beacon.execution_payload_envelopes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEthV1BeaconExecutionPayloadEnvelopesMutationOptions<
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

export function getEthV1BeaconExecutionPayloadEnvelopesBlockIdQueryKey(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.execution_payload_envelopes)[':block_id']['$get']
  >,
) {
  return ['eth', '/eth/v1/beacon/execution_payload_envelopes/:block_id', args] as const
}

export function getEthV1BeaconExecutionPayloadEnvelopesBlockIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.eth.v1.beacon.execution_payload_envelopes)[':block_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.execution_payload_envelopes)[':block_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.eth.v1.beacon.execution_payload_envelopes)[':block_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconExecutionPayloadEnvelopesBlockIdQueryKey>
  >({
    queryKey: getEthV1BeaconExecutionPayloadEnvelopesBlockIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.execution_payload_envelopes[':block_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconExecutionPayloadEnvelopesBlockId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.eth.v1.beacon.execution_payload_envelopes)[':block_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.execution_payload_envelopes)[':block_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.eth.v1.beacon.execution_payload_envelopes)[':block_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconExecutionPayloadEnvelopesBlockIdQueryKey>
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
      ...getEthV1BeaconExecutionPayloadEnvelopesBlockIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconExecutionPayloadEnvelopesBlockId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.eth.v1.beacon.execution_payload_envelopes)[':block_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.execution_payload_envelopes)[':block_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.eth.v1.beacon.execution_payload_envelopes)[':block_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconExecutionPayloadEnvelopesBlockIdQueryKey>
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
      ...getEthV1BeaconExecutionPayloadEnvelopesBlockIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEthV1BeaconProposerPreferencesQueryKey(
  args: InferRequestType<typeof client.eth.v1.beacon.proposer_preferences.$get>,
) {
  return ['eth', '/eth/v1/beacon/proposer_preferences', args] as const
}

export function getEthV1BeaconProposerPreferencesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.beacon.proposer_preferences.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v1.beacon.proposer_preferences.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.proposer_preferences.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconProposerPreferencesQueryKey>
  >({
    queryKey: getEthV1BeaconProposerPreferencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.proposer_preferences.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconProposerPreferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.beacon.proposer_preferences.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v1.beacon.proposer_preferences.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.beacon.proposer_preferences.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconProposerPreferencesQueryKey>
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
      ...getEthV1BeaconProposerPreferencesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconProposerPreferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.beacon.proposer_preferences.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v1.beacon.proposer_preferences.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.beacon.proposer_preferences.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconProposerPreferencesQueryKey>
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
      ...getEthV1BeaconProposerPreferencesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEthV2BeaconBlocksBlockIdQueryKey(
  args: InferRequestType<(typeof client.eth.v2.beacon.blocks)[':block_id']['$get']>,
) {
  return ['eth', '/eth/v2/beacon/blocks/:block_id', args] as const
}

export function getEthV2BeaconBlocksBlockIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v2.beacon.blocks)[':block_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v2.beacon.blocks)[':block_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eth.v2.beacon.blocks)[':block_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV2BeaconBlocksBlockIdQueryKey>
  >({
    queryKey: getEthV2BeaconBlocksBlockIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v2.beacon.blocks[':block_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV2BeaconBlocksBlockId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v2.beacon.blocks)[':block_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v2.beacon.blocks)[':block_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eth.v2.beacon.blocks)[':block_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV2BeaconBlocksBlockIdQueryKey>
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
      ...getEthV2BeaconBlocksBlockIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV2BeaconBlocksBlockId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v2.beacon.blocks)[':block_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v2.beacon.blocks)[':block_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eth.v2.beacon.blocks)[':block_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV2BeaconBlocksBlockIdQueryKey>
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
      ...getEthV2BeaconBlocksBlockIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEthV1BeaconBlocksBlockIdRootQueryKey(
  args: InferRequestType<(typeof client.eth.v1.beacon.blocks)[':block_id']['root']['$get']>,
) {
  return ['eth', '/eth/v1/beacon/blocks/:block_id/root', args] as const
}

export function getEthV1BeaconBlocksBlockIdRootQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.blocks)[':block_id']['root']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.blocks)[':block_id']['root']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eth.v1.beacon.blocks)[':block_id']['root']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconBlocksBlockIdRootQueryKey>
  >({
    queryKey: getEthV1BeaconBlocksBlockIdRootQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.blocks[':block_id'].root.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconBlocksBlockIdRoot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.blocks)[':block_id']['root']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.blocks)[':block_id']['root']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eth.v1.beacon.blocks)[':block_id']['root']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconBlocksBlockIdRootQueryKey>
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
      ...getEthV1BeaconBlocksBlockIdRootQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconBlocksBlockIdRoot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.blocks)[':block_id']['root']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.blocks)[':block_id']['root']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eth.v1.beacon.blocks)[':block_id']['root']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconBlocksBlockIdRootQueryKey>
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
      ...getEthV1BeaconBlocksBlockIdRootQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEthV2BeaconBlocksBlockIdAttestationsQueryKey(
  args: InferRequestType<(typeof client.eth.v2.beacon.blocks)[':block_id']['attestations']['$get']>,
) {
  return ['eth', '/eth/v2/beacon/blocks/:block_id/attestations', args] as const
}

export function getEthV2BeaconBlocksBlockIdAttestationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.eth.v2.beacon.blocks)[':block_id']['attestations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v2.beacon.blocks)[':block_id']['attestations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.eth.v2.beacon.blocks)[':block_id']['attestations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV2BeaconBlocksBlockIdAttestationsQueryKey>
  >({
    queryKey: getEthV2BeaconBlocksBlockIdAttestationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v2.beacon.blocks[':block_id'].attestations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV2BeaconBlocksBlockIdAttestations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.eth.v2.beacon.blocks)[':block_id']['attestations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v2.beacon.blocks)[':block_id']['attestations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.eth.v2.beacon.blocks)[':block_id']['attestations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV2BeaconBlocksBlockIdAttestationsQueryKey>
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
      ...getEthV2BeaconBlocksBlockIdAttestationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV2BeaconBlocksBlockIdAttestations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.eth.v2.beacon.blocks)[':block_id']['attestations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v2.beacon.blocks)[':block_id']['attestations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.eth.v2.beacon.blocks)[':block_id']['attestations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV2BeaconBlocksBlockIdAttestationsQueryKey>
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
      ...getEthV2BeaconBlocksBlockIdAttestationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEthV1BeaconBlobsBlockIdQueryKey(
  args: InferRequestType<(typeof client.eth.v1.beacon.blobs)[':block_id']['$get']>,
) {
  return ['eth', '/eth/v1/beacon/blobs/:block_id', args] as const
}

export function getEthV1BeaconBlobsBlockIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.blobs)[':block_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.blobs)[':block_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eth.v1.beacon.blobs)[':block_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconBlobsBlockIdQueryKey>
  >({
    queryKey: getEthV1BeaconBlobsBlockIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.blobs[':block_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconBlobsBlockId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.blobs)[':block_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.blobs)[':block_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eth.v1.beacon.blobs)[':block_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconBlobsBlockIdQueryKey>
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
      ...getEthV1BeaconBlobsBlockIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconBlobsBlockId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.blobs)[':block_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.blobs)[':block_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eth.v1.beacon.blobs)[':block_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconBlobsBlockIdQueryKey>
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
      ...getEthV1BeaconBlobsBlockIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEthV1DebugBeaconDataColumnSidecarsBlockIdQueryKey(
  args: InferRequestType<
    (typeof client.eth.v1.debug.beacon.data_column_sidecars)[':block_id']['$get']
  >,
) {
  return ['eth', '/eth/v1/debug/beacon/data_column_sidecars/:block_id', args] as const
}

export function getEthV1DebugBeaconDataColumnSidecarsBlockIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.eth.v1.debug.beacon.data_column_sidecars)[':block_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.debug.beacon.data_column_sidecars)[':block_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.eth.v1.debug.beacon.data_column_sidecars)[':block_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1DebugBeaconDataColumnSidecarsBlockIdQueryKey>
  >({
    queryKey: getEthV1DebugBeaconDataColumnSidecarsBlockIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.debug.beacon.data_column_sidecars[':block_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1DebugBeaconDataColumnSidecarsBlockId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.eth.v1.debug.beacon.data_column_sidecars)[':block_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.debug.beacon.data_column_sidecars)[':block_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.eth.v1.debug.beacon.data_column_sidecars)[':block_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1DebugBeaconDataColumnSidecarsBlockIdQueryKey>
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
      ...getEthV1DebugBeaconDataColumnSidecarsBlockIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1DebugBeaconDataColumnSidecarsBlockId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.eth.v1.debug.beacon.data_column_sidecars)[':block_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.debug.beacon.data_column_sidecars)[':block_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.eth.v1.debug.beacon.data_column_sidecars)[':block_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1DebugBeaconDataColumnSidecarsBlockIdQueryKey>
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
      ...getEthV1DebugBeaconDataColumnSidecarsBlockIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostEthV1BeaconRewardsSyncCommitteeBlockIdMutationKey() {
  return ['eth', '/eth/v1/beacon/rewards/sync_committee/:block_id', 'POST'] as const
}

export function getPostEthV1BeaconRewardsSyncCommitteeBlockIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.eth.v1.beacon.rewards.sync_committee)[':block_id']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.eth.v1.beacon.rewards.sync_committee)[':block_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEthV1BeaconRewardsSyncCommitteeBlockIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.eth.v1.beacon.rewards.sync_committee)[':block_id']['$post']
      >,
    ) {
      return parseResponse(
        client.eth.v1.beacon.rewards.sync_committee[':block_id'].$post(args, options),
      )
    },
  })
}

export function usePostEthV1BeaconRewardsSyncCommitteeBlockId<
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
                  (typeof client.eth.v1.beacon.rewards.sync_committee)[':block_id']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.eth.v1.beacon.rewards.sync_committee)[':block_id']['$post']
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
  const mutationDefaults = getPostEthV1BeaconRewardsSyncCommitteeBlockIdMutationOptions<
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

export function getEthV1BeaconRewardsBlocksBlockIdQueryKey(
  args: InferRequestType<(typeof client.eth.v1.beacon.rewards.blocks)[':block_id']['$get']>,
) {
  return ['eth', '/eth/v1/beacon/rewards/blocks/:block_id', args] as const
}

export function getEthV1BeaconRewardsBlocksBlockIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.rewards.blocks)[':block_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.rewards.blocks)[':block_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eth.v1.beacon.rewards.blocks)[':block_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconRewardsBlocksBlockIdQueryKey>
  >({
    queryKey: getEthV1BeaconRewardsBlocksBlockIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.rewards.blocks[':block_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconRewardsBlocksBlockId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.rewards.blocks)[':block_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.rewards.blocks)[':block_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eth.v1.beacon.rewards.blocks)[':block_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconRewardsBlocksBlockIdQueryKey>
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
      ...getEthV1BeaconRewardsBlocksBlockIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconRewardsBlocksBlockId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.rewards.blocks)[':block_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.rewards.blocks)[':block_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eth.v1.beacon.rewards.blocks)[':block_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconRewardsBlocksBlockIdQueryKey>
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
      ...getEthV1BeaconRewardsBlocksBlockIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostEthV1BeaconRewardsAttestationsEpochMutationKey() {
  return ['eth', '/eth/v1/beacon/rewards/attestations/:epoch', 'POST'] as const
}

export function getPostEthV1BeaconRewardsAttestationsEpochMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eth.v1.beacon.rewards.attestations)[':epoch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.eth.v1.beacon.rewards.attestations)[':epoch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEthV1BeaconRewardsAttestationsEpochMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.eth.v1.beacon.rewards.attestations)[':epoch']['$post']>,
    ) {
      return parseResponse(client.eth.v1.beacon.rewards.attestations[':epoch'].$post(args, options))
    },
  })
}

export function usePostEthV1BeaconRewardsAttestationsEpoch<
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
                ReturnType<(typeof client.eth.v1.beacon.rewards.attestations)[':epoch']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.eth.v1.beacon.rewards.attestations)[':epoch']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEthV1BeaconRewardsAttestationsEpochMutationOptions<
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

export function getEthV1BeaconBlindedBlocksBlockIdQueryKey(
  args: InferRequestType<(typeof client.eth.v1.beacon.blinded_blocks)[':block_id']['$get']>,
) {
  return ['eth', '/eth/v1/beacon/blinded_blocks/:block_id', args] as const
}

export function getEthV1BeaconBlindedBlocksBlockIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.blinded_blocks)[':block_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.blinded_blocks)[':block_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eth.v1.beacon.blinded_blocks)[':block_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconBlindedBlocksBlockIdQueryKey>
  >({
    queryKey: getEthV1BeaconBlindedBlocksBlockIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.blinded_blocks[':block_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconBlindedBlocksBlockId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.blinded_blocks)[':block_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.blinded_blocks)[':block_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eth.v1.beacon.blinded_blocks)[':block_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconBlindedBlocksBlockIdQueryKey>
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
      ...getEthV1BeaconBlindedBlocksBlockIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconBlindedBlocksBlockId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.beacon.blinded_blocks)[':block_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.beacon.blinded_blocks)[':block_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eth.v1.beacon.blinded_blocks)[':block_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconBlindedBlocksBlockIdQueryKey>
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
      ...getEthV1BeaconBlindedBlocksBlockIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEthV1BeaconLightClientBootstrapBlockRootQueryKey(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.light_client.bootstrap)[':block_root']['$get']
  >,
) {
  return ['eth', '/eth/v1/beacon/light_client/bootstrap/:block_root', args] as const
}

export function getEthV1BeaconLightClientBootstrapBlockRootQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.eth.v1.beacon.light_client.bootstrap)[':block_root']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.light_client.bootstrap)[':block_root']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.eth.v1.beacon.light_client.bootstrap)[':block_root']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconLightClientBootstrapBlockRootQueryKey>
  >({
    queryKey: getEthV1BeaconLightClientBootstrapBlockRootQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.light_client.bootstrap[':block_root'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconLightClientBootstrapBlockRoot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.eth.v1.beacon.light_client.bootstrap)[':block_root']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.light_client.bootstrap)[':block_root']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.eth.v1.beacon.light_client.bootstrap)[':block_root']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconLightClientBootstrapBlockRootQueryKey>
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
      ...getEthV1BeaconLightClientBootstrapBlockRootQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconLightClientBootstrapBlockRoot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.eth.v1.beacon.light_client.bootstrap)[':block_root']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.light_client.bootstrap)[':block_root']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.eth.v1.beacon.light_client.bootstrap)[':block_root']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconLightClientBootstrapBlockRootQueryKey>
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
      ...getEthV1BeaconLightClientBootstrapBlockRootQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEthV1BeaconLightClientUpdatesQueryKey(
  args: InferRequestType<typeof client.eth.v1.beacon.light_client.updates.$get>,
) {
  return ['eth', '/eth/v1/beacon/light_client/updates', args] as const
}

export function getEthV1BeaconLightClientUpdatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.updates.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v1.beacon.light_client.updates.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.updates.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconLightClientUpdatesQueryKey>
  >({
    queryKey: getEthV1BeaconLightClientUpdatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.light_client.updates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconLightClientUpdates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.updates.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v1.beacon.light_client.updates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.updates.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconLightClientUpdatesQueryKey>
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
      ...getEthV1BeaconLightClientUpdatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconLightClientUpdates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.updates.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v1.beacon.light_client.updates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.updates.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconLightClientUpdatesQueryKey>
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
      ...getEthV1BeaconLightClientUpdatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEthV1BeaconLightClientFinalityUpdateQueryKey() {
  return ['eth', '/eth/v1/beacon/light_client/finality_update'] as const
}

export function getEthV1BeaconLightClientFinalityUpdateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.finality_update.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.finality_update.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconLightClientFinalityUpdateQueryKey>
  >({
    queryKey: getEthV1BeaconLightClientFinalityUpdateQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.light_client.finality_update.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconLightClientFinalityUpdate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.finality_update.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.finality_update.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconLightClientFinalityUpdateQueryKey>
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
      ...getEthV1BeaconLightClientFinalityUpdateQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconLightClientFinalityUpdate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.finality_update.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.finality_update.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconLightClientFinalityUpdateQueryKey>
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
      ...getEthV1BeaconLightClientFinalityUpdateQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEthV1BeaconLightClientOptimisticUpdateQueryKey() {
  return ['eth', '/eth/v1/beacon/light_client/optimistic_update'] as const
}

export function getEthV1BeaconLightClientOptimisticUpdateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.optimistic_update.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.optimistic_update.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconLightClientOptimisticUpdateQueryKey>
  >({
    queryKey: getEthV1BeaconLightClientOptimisticUpdateQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.light_client.optimistic_update.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconLightClientOptimisticUpdate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.optimistic_update.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.optimistic_update.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconLightClientOptimisticUpdateQueryKey>
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
      ...getEthV1BeaconLightClientOptimisticUpdateQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconLightClientOptimisticUpdate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.optimistic_update.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.optimistic_update.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconLightClientOptimisticUpdateQueryKey>
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
      ...getEthV1BeaconLightClientOptimisticUpdateQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEthV2BeaconPoolAttestationsQueryKey(
  args: InferRequestType<typeof client.eth.v2.beacon.pool.attestations.$get>,
) {
  return ['eth', '/eth/v2/beacon/pool/attestations', args] as const
}

export function getEthV2BeaconPoolAttestationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attestations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v2.beacon.pool.attestations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attestations.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV2BeaconPoolAttestationsQueryKey>
  >({
    queryKey: getEthV2BeaconPoolAttestationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v2.beacon.pool.attestations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV2BeaconPoolAttestations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attestations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v2.beacon.pool.attestations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attestations.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV2BeaconPoolAttestationsQueryKey>
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
      ...getEthV2BeaconPoolAttestationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV2BeaconPoolAttestations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attestations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v2.beacon.pool.attestations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attestations.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV2BeaconPoolAttestationsQueryKey>
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
      ...getEthV2BeaconPoolAttestationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostEthV2BeaconPoolAttestationsMutationKey() {
  return ['eth', '/eth/v2/beacon/pool/attestations', 'POST'] as const
}

export function getPostEthV2BeaconPoolAttestationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attestations.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.eth.v2.beacon.pool.attestations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEthV2BeaconPoolAttestationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.eth.v2.beacon.pool.attestations.$post>) {
      return parseResponse(client.eth.v2.beacon.pool.attestations.$post(args, options))
    },
  })
}

export function usePostEthV2BeaconPoolAttestations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attestations.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.eth.v2.beacon.pool.attestations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEthV2BeaconPoolAttestationsMutationOptions<
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

export function getEthV1BeaconPoolPayloadAttestationsQueryKey(
  args: InferRequestType<typeof client.eth.v1.beacon.pool.payload_attestations.$get>,
) {
  return ['eth', '/eth/v1/beacon/pool/payload_attestations', args] as const
}

export function getEthV1BeaconPoolPayloadAttestationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.beacon.pool.payload_attestations.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v1.beacon.pool.payload_attestations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.pool.payload_attestations.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconPoolPayloadAttestationsQueryKey>
  >({
    queryKey: getEthV1BeaconPoolPayloadAttestationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.pool.payload_attestations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconPoolPayloadAttestations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.beacon.pool.payload_attestations.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v1.beacon.pool.payload_attestations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.beacon.pool.payload_attestations.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconPoolPayloadAttestationsQueryKey>
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
      ...getEthV1BeaconPoolPayloadAttestationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconPoolPayloadAttestations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.beacon.pool.payload_attestations.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v1.beacon.pool.payload_attestations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.beacon.pool.payload_attestations.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconPoolPayloadAttestationsQueryKey>
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
      ...getEthV1BeaconPoolPayloadAttestationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostEthV1BeaconPoolPayloadAttestationsMutationKey() {
  return ['eth', '/eth/v1/beacon/pool/payload_attestations', 'POST'] as const
}

export function getPostEthV1BeaconPoolPayloadAttestationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.pool.payload_attestations.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.eth.v1.beacon.pool.payload_attestations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEthV1BeaconPoolPayloadAttestationsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.eth.v1.beacon.pool.payload_attestations.$post>,
    ) {
      return parseResponse(client.eth.v1.beacon.pool.payload_attestations.$post(args, options))
    },
  })
}

export function usePostEthV1BeaconPoolPayloadAttestations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.beacon.pool.payload_attestations.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.eth.v1.beacon.pool.payload_attestations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEthV1BeaconPoolPayloadAttestationsMutationOptions<
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

export function getEthV2BeaconPoolAttesterSlashingsQueryKey() {
  return ['eth', '/eth/v2/beacon/pool/attester_slashings'] as const
}

export function getEthV2BeaconPoolAttesterSlashingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attester_slashings.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attester_slashings.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV2BeaconPoolAttesterSlashingsQueryKey>
  >({
    queryKey: getEthV2BeaconPoolAttesterSlashingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v2.beacon.pool.attester_slashings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV2BeaconPoolAttesterSlashings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attester_slashings.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attester_slashings.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV2BeaconPoolAttesterSlashingsQueryKey>
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
      ...getEthV2BeaconPoolAttesterSlashingsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV2BeaconPoolAttesterSlashings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attester_slashings.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attester_slashings.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV2BeaconPoolAttesterSlashingsQueryKey>
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
      ...getEthV2BeaconPoolAttesterSlashingsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostEthV2BeaconPoolAttesterSlashingsMutationKey() {
  return ['eth', '/eth/v2/beacon/pool/attester_slashings', 'POST'] as const
}

export function getPostEthV2BeaconPoolAttesterSlashingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attester_slashings.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.eth.v2.beacon.pool.attester_slashings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEthV2BeaconPoolAttesterSlashingsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.eth.v2.beacon.pool.attester_slashings.$post>,
    ) {
      return parseResponse(client.eth.v2.beacon.pool.attester_slashings.$post(args, options))
    },
  })
}

export function usePostEthV2BeaconPoolAttesterSlashings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attester_slashings.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.eth.v2.beacon.pool.attester_slashings.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEthV2BeaconPoolAttesterSlashingsMutationOptions<
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

export function getEthV1BeaconPoolProposerSlashingsQueryKey() {
  return ['eth', '/eth/v1/beacon/pool/proposer_slashings'] as const
}

export function getEthV1BeaconPoolProposerSlashingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.beacon.pool.proposer_slashings.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.pool.proposer_slashings.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconPoolProposerSlashingsQueryKey>
  >({
    queryKey: getEthV1BeaconPoolProposerSlashingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.pool.proposer_slashings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconPoolProposerSlashings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.beacon.pool.proposer_slashings.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.beacon.pool.proposer_slashings.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconPoolProposerSlashingsQueryKey>
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
      ...getEthV1BeaconPoolProposerSlashingsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconPoolProposerSlashings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.beacon.pool.proposer_slashings.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.beacon.pool.proposer_slashings.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconPoolProposerSlashingsQueryKey>
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
      ...getEthV1BeaconPoolProposerSlashingsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostEthV1BeaconPoolProposerSlashingsMutationKey() {
  return ['eth', '/eth/v1/beacon/pool/proposer_slashings', 'POST'] as const
}

export function getPostEthV1BeaconPoolProposerSlashingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.pool.proposer_slashings.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.eth.v1.beacon.pool.proposer_slashings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEthV1BeaconPoolProposerSlashingsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.eth.v1.beacon.pool.proposer_slashings.$post>,
    ) {
      return parseResponse(client.eth.v1.beacon.pool.proposer_slashings.$post(args, options))
    },
  })
}

export function usePostEthV1BeaconPoolProposerSlashings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.beacon.pool.proposer_slashings.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.eth.v1.beacon.pool.proposer_slashings.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEthV1BeaconPoolProposerSlashingsMutationOptions<
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

export function getPostEthV1BeaconPoolSyncCommitteesMutationKey() {
  return ['eth', '/eth/v1/beacon/pool/sync_committees', 'POST'] as const
}

export function getPostEthV1BeaconPoolSyncCommitteesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.pool.sync_committees.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.eth.v1.beacon.pool.sync_committees.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEthV1BeaconPoolSyncCommitteesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.eth.v1.beacon.pool.sync_committees.$post>,
    ) {
      return parseResponse(client.eth.v1.beacon.pool.sync_committees.$post(args, options))
    },
  })
}

export function usePostEthV1BeaconPoolSyncCommittees<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.beacon.pool.sync_committees.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.eth.v1.beacon.pool.sync_committees.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEthV1BeaconPoolSyncCommitteesMutationOptions<
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

export function getEthV1BeaconPoolVoluntaryExitsQueryKey() {
  return ['eth', '/eth/v1/beacon/pool/voluntary_exits'] as const
}

export function getEthV1BeaconPoolVoluntaryExitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.beacon.pool.voluntary_exits.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.pool.voluntary_exits.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconPoolVoluntaryExitsQueryKey>
  >({
    queryKey: getEthV1BeaconPoolVoluntaryExitsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.pool.voluntary_exits.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconPoolVoluntaryExits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.beacon.pool.voluntary_exits.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.beacon.pool.voluntary_exits.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconPoolVoluntaryExitsQueryKey>
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
      ...getEthV1BeaconPoolVoluntaryExitsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconPoolVoluntaryExits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.beacon.pool.voluntary_exits.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.beacon.pool.voluntary_exits.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconPoolVoluntaryExitsQueryKey>
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
      ...getEthV1BeaconPoolVoluntaryExitsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostEthV1BeaconPoolVoluntaryExitsMutationKey() {
  return ['eth', '/eth/v1/beacon/pool/voluntary_exits', 'POST'] as const
}

export function getPostEthV1BeaconPoolVoluntaryExitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.pool.voluntary_exits.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.eth.v1.beacon.pool.voluntary_exits.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEthV1BeaconPoolVoluntaryExitsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.eth.v1.beacon.pool.voluntary_exits.$post>,
    ) {
      return parseResponse(client.eth.v1.beacon.pool.voluntary_exits.$post(args, options))
    },
  })
}

export function usePostEthV1BeaconPoolVoluntaryExits<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.beacon.pool.voluntary_exits.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.eth.v1.beacon.pool.voluntary_exits.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEthV1BeaconPoolVoluntaryExitsMutationOptions<
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

export function getEthV1BeaconPoolBlsToExecutionChangesQueryKey() {
  return ['eth', '/eth/v1/beacon/pool/bls_to_execution_changes'] as const
}

export function getEthV1BeaconPoolBlsToExecutionChangesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.beacon.pool.bls_to_execution_changes.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.pool.bls_to_execution_changes.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconPoolBlsToExecutionChangesQueryKey>
  >({
    queryKey: getEthV1BeaconPoolBlsToExecutionChangesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.beacon.pool.bls_to_execution_changes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1BeaconPoolBlsToExecutionChanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.beacon.pool.bls_to_execution_changes.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.beacon.pool.bls_to_execution_changes.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconPoolBlsToExecutionChangesQueryKey>
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
      ...getEthV1BeaconPoolBlsToExecutionChangesQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1BeaconPoolBlsToExecutionChanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.beacon.pool.bls_to_execution_changes.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.beacon.pool.bls_to_execution_changes.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1BeaconPoolBlsToExecutionChangesQueryKey>
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
      ...getEthV1BeaconPoolBlsToExecutionChangesQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostEthV1BeaconPoolBlsToExecutionChangesMutationKey() {
  return ['eth', '/eth/v1/beacon/pool/bls_to_execution_changes', 'POST'] as const
}

export function getPostEthV1BeaconPoolBlsToExecutionChangesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.pool.bls_to_execution_changes.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.eth.v1.beacon.pool.bls_to_execution_changes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEthV1BeaconPoolBlsToExecutionChangesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.eth.v1.beacon.pool.bls_to_execution_changes.$post>,
    ) {
      return parseResponse(client.eth.v1.beacon.pool.bls_to_execution_changes.$post(args, options))
    },
  })
}

export function usePostEthV1BeaconPoolBlsToExecutionChanges<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.beacon.pool.bls_to_execution_changes.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.eth.v1.beacon.pool.bls_to_execution_changes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEthV1BeaconPoolBlsToExecutionChangesMutationOptions<
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

export function getEthV2DebugBeaconStatesStateIdQueryKey(
  args: InferRequestType<(typeof client.eth.v2.debug.beacon.states)[':state_id']['$get']>,
) {
  return ['eth', '/eth/v2/debug/beacon/states/:state_id', args] as const
}

export function getEthV2DebugBeaconStatesStateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v2.debug.beacon.states)[':state_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v2.debug.beacon.states)[':state_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eth.v2.debug.beacon.states)[':state_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV2DebugBeaconStatesStateIdQueryKey>
  >({
    queryKey: getEthV2DebugBeaconStatesStateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v2.debug.beacon.states[':state_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV2DebugBeaconStatesStateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v2.debug.beacon.states)[':state_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v2.debug.beacon.states)[':state_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eth.v2.debug.beacon.states)[':state_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV2DebugBeaconStatesStateIdQueryKey>
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
      ...getEthV2DebugBeaconStatesStateIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV2DebugBeaconStatesStateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v2.debug.beacon.states)[':state_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v2.debug.beacon.states)[':state_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eth.v2.debug.beacon.states)[':state_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV2DebugBeaconStatesStateIdQueryKey>
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
      ...getEthV2DebugBeaconStatesStateIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEthV2DebugBeaconHeadsQueryKey() {
  return ['eth', '/eth/v2/debug/beacon/heads'] as const
}

export function getEthV2DebugBeaconHeadsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.debug.beacon.heads.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.debug.beacon.heads.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV2DebugBeaconHeadsQueryKey>
  >({
    queryKey: getEthV2DebugBeaconHeadsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v2.debug.beacon.heads.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV2DebugBeaconHeads<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.debug.beacon.heads.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.debug.beacon.heads.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV2DebugBeaconHeadsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEthV2DebugBeaconHeadsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEthV2DebugBeaconHeads<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.debug.beacon.heads.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.debug.beacon.heads.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV2DebugBeaconHeadsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEthV2DebugBeaconHeadsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEthV1DebugForkChoiceQueryKey() {
  return ['eth', '/eth/v1/debug/fork_choice'] as const
}

export function getEthV1DebugForkChoiceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.debug.fork_choice.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.debug.fork_choice.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1DebugForkChoiceQueryKey>
  >({
    queryKey: getEthV1DebugForkChoiceQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.debug.fork_choice.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1DebugForkChoice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.debug.fork_choice.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.debug.fork_choice.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1DebugForkChoiceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEthV1DebugForkChoiceQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEthV1DebugForkChoice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.debug.fork_choice.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.debug.fork_choice.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1DebugForkChoiceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEthV1DebugForkChoiceQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEthV2DebugForkChoiceQueryKey() {
  return ['eth', '/eth/v2/debug/fork_choice'] as const
}

export function getEthV2DebugForkChoiceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.debug.fork_choice.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.debug.fork_choice.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV2DebugForkChoiceQueryKey>
  >({
    queryKey: getEthV2DebugForkChoiceQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v2.debug.fork_choice.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV2DebugForkChoice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.debug.fork_choice.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.debug.fork_choice.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV2DebugForkChoiceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEthV2DebugForkChoiceQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEthV2DebugForkChoice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.debug.fork_choice.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.debug.fork_choice.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV2DebugForkChoiceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEthV2DebugForkChoiceQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEthV1NodeIdentityQueryKey() {
  return ['eth', '/eth/v1/node/identity'] as const
}

export function getEthV1NodeIdentityQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.identity.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.identity.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1NodeIdentityQueryKey>
  >({
    queryKey: getEthV1NodeIdentityQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.node.identity.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1NodeIdentity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.identity.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.identity.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1NodeIdentityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEthV1NodeIdentityQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEthV1NodeIdentity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.identity.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.identity.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1NodeIdentityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEthV1NodeIdentityQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEthV1NodePeersQueryKey(
  args: InferRequestType<typeof client.eth.v1.node.peers.$get>,
) {
  return ['eth', '/eth/v1/node/peers', args] as const
}

export function getEthV1NodePeersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.peers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.eth.v1.node.peers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.peers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1NodePeersQueryKey>
  >({
    queryKey: getEthV1NodePeersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.node.peers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEthV1NodePeers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.peers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v1.node.peers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.peers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1NodePeersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEthV1NodePeersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEthV1NodePeers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.peers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v1.node.peers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.peers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1NodePeersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEthV1NodePeersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEthV1NodePeersPeerIdQueryKey(
  args: InferRequestType<(typeof client.eth.v1.node.peers)[':peer_id']['$get']>,
) {
  return ['eth', '/eth/v1/node/peers/:peer_id', args] as const
}

export function getEthV1NodePeersPeerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.node.peers)[':peer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.node.peers)[':peer_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eth.v1.node.peers)[':peer_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1NodePeersPeerIdQueryKey>
  >({
    queryKey: getEthV1NodePeersPeerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.node.peers[':peer_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1NodePeersPeerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.node.peers)[':peer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.node.peers)[':peer_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eth.v1.node.peers)[':peer_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1NodePeersPeerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEthV1NodePeersPeerIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEthV1NodePeersPeerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.node.peers)[':peer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.node.peers)[':peer_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eth.v1.node.peers)[':peer_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1NodePeersPeerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEthV1NodePeersPeerIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEthV1NodePeerCountQueryKey() {
  return ['eth', '/eth/v1/node/peer_count'] as const
}

export function getEthV1NodePeerCountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.peer_count.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.peer_count.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1NodePeerCountQueryKey>
  >({
    queryKey: getEthV1NodePeerCountQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.node.peer_count.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1NodePeerCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.peer_count.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.peer_count.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1NodePeerCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEthV1NodePeerCountQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEthV1NodePeerCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.peer_count.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.peer_count.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1NodePeerCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEthV1NodePeerCountQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEthV1NodeVersionQueryKey() {
  return ['eth', '/eth/v1/node/version'] as const
}

export function getEthV1NodeVersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1NodeVersionQueryKey>
  >({
    queryKey: getEthV1NodeVersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.node.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1NodeVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.version.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1NodeVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEthV1NodeVersionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEthV1NodeVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.version.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1NodeVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEthV1NodeVersionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEthV2NodeVersionQueryKey() {
  return ['eth', '/eth/v2/node/version'] as const
}

export function getEthV2NodeVersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.node.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.node.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEthV2NodeVersionQueryKey>
  >({
    queryKey: getEthV2NodeVersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v2.node.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV2NodeVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.node.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.node.version.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV2NodeVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEthV2NodeVersionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEthV2NodeVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.node.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.node.version.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV2NodeVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEthV2NodeVersionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEthV1NodeSyncingQueryKey() {
  return ['eth', '/eth/v1/node/syncing'] as const
}

export function getEthV1NodeSyncingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.syncing.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.syncing.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1NodeSyncingQueryKey>
  >({
    queryKey: getEthV1NodeSyncingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.node.syncing.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1NodeSyncing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.syncing.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.syncing.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1NodeSyncingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEthV1NodeSyncingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEthV1NodeSyncing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.syncing.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.syncing.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1NodeSyncingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEthV1NodeSyncingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEthV1NodeHealthQueryKey(
  args: InferRequestType<typeof client.eth.v1.node.health.$get>,
) {
  return ['eth', '/eth/v1/node/health', args] as const
}

export function getEthV1NodeHealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.health.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.eth.v1.node.health.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1NodeHealthQueryKey>
  >({
    queryKey: getEthV1NodeHealthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.node.health.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEthV1NodeHealth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.health.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v1.node.health.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.health.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1NodeHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEthV1NodeHealthQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEthV1NodeHealth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.health.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v1.node.health.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.health.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1NodeHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEthV1NodeHealthQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEthV1ConfigForkScheduleQueryKey() {
  return ['eth', '/eth/v1/config/fork_schedule'] as const
}

export function getEthV1ConfigForkScheduleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.config.fork_schedule.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.config.fork_schedule.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1ConfigForkScheduleQueryKey>
  >({
    queryKey: getEthV1ConfigForkScheduleQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.config.fork_schedule.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1ConfigForkSchedule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.config.fork_schedule.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.config.fork_schedule.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1ConfigForkScheduleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEthV1ConfigForkScheduleQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEthV1ConfigForkSchedule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.config.fork_schedule.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.config.fork_schedule.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1ConfigForkScheduleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEthV1ConfigForkScheduleQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEthV1ConfigSpecQueryKey() {
  return ['eth', '/eth/v1/config/spec'] as const
}

export function getEthV1ConfigSpecQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.config.spec.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.config.spec.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1ConfigSpecQueryKey>
  >({
    queryKey: getEthV1ConfigSpecQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.config.spec.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1ConfigSpec<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.config.spec.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.config.spec.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1ConfigSpecQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEthV1ConfigSpecQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEthV1ConfigSpec<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.config.spec.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.config.spec.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1ConfigSpecQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEthV1ConfigSpecQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEthV1ConfigDepositContractQueryKey() {
  return ['eth', '/eth/v1/config/deposit_contract'] as const
}

export function getEthV1ConfigDepositContractQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.config.deposit_contract.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.config.deposit_contract.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1ConfigDepositContractQueryKey>
  >({
    queryKey: getEthV1ConfigDepositContractQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.config.deposit_contract.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1ConfigDepositContract<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.config.deposit_contract.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.config.deposit_contract.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1ConfigDepositContractQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEthV1ConfigDepositContractQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEthV1ConfigDepositContract<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.config.deposit_contract.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.config.deposit_contract.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1ConfigDepositContractQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEthV1ConfigDepositContractQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostEthV1ValidatorDutiesAttesterEpochMutationKey() {
  return ['eth', '/eth/v1/validator/duties/attester/:epoch', 'POST'] as const
}

export function getPostEthV1ValidatorDutiesAttesterEpochMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eth.v1.validator.duties.attester)[':epoch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.eth.v1.validator.duties.attester)[':epoch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEthV1ValidatorDutiesAttesterEpochMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.eth.v1.validator.duties.attester)[':epoch']['$post']>,
    ) {
      return parseResponse(client.eth.v1.validator.duties.attester[':epoch'].$post(args, options))
    },
  })
}

export function usePostEthV1ValidatorDutiesAttesterEpoch<
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
                ReturnType<(typeof client.eth.v1.validator.duties.attester)[':epoch']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.eth.v1.validator.duties.attester)[':epoch']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEthV1ValidatorDutiesAttesterEpochMutationOptions<
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

export function getEthV1ValidatorDutiesProposerEpochQueryKey(
  args: InferRequestType<(typeof client.eth.v1.validator.duties.proposer)[':epoch']['$get']>,
) {
  return ['eth', '/eth/v1/validator/duties/proposer/:epoch', args] as const
}

export function getEthV1ValidatorDutiesProposerEpochQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.validator.duties.proposer)[':epoch']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.validator.duties.proposer)[':epoch']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eth.v1.validator.duties.proposer)[':epoch']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1ValidatorDutiesProposerEpochQueryKey>
  >({
    queryKey: getEthV1ValidatorDutiesProposerEpochQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.validator.duties.proposer[':epoch'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1ValidatorDutiesProposerEpoch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.validator.duties.proposer)[':epoch']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.validator.duties.proposer)[':epoch']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.eth.v1.validator.duties.proposer)[':epoch']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1ValidatorDutiesProposerEpochQueryKey>
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
      ...getEthV1ValidatorDutiesProposerEpochQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1ValidatorDutiesProposerEpoch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v1.validator.duties.proposer)[':epoch']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v1.validator.duties.proposer)[':epoch']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.eth.v1.validator.duties.proposer)[':epoch']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1ValidatorDutiesProposerEpochQueryKey>
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
      ...getEthV1ValidatorDutiesProposerEpochQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEthV2ValidatorDutiesProposerEpochQueryKey(
  args: InferRequestType<(typeof client.eth.v2.validator.duties.proposer)[':epoch']['$get']>,
) {
  return ['eth', '/eth/v2/validator/duties/proposer/:epoch', args] as const
}

export function getEthV2ValidatorDutiesProposerEpochQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v2.validator.duties.proposer)[':epoch']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v2.validator.duties.proposer)[':epoch']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eth.v2.validator.duties.proposer)[':epoch']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV2ValidatorDutiesProposerEpochQueryKey>
  >({
    queryKey: getEthV2ValidatorDutiesProposerEpochQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v2.validator.duties.proposer[':epoch'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV2ValidatorDutiesProposerEpoch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v2.validator.duties.proposer)[':epoch']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v2.validator.duties.proposer)[':epoch']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.eth.v2.validator.duties.proposer)[':epoch']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV2ValidatorDutiesProposerEpochQueryKey>
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
      ...getEthV2ValidatorDutiesProposerEpochQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV2ValidatorDutiesProposerEpoch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v2.validator.duties.proposer)[':epoch']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v2.validator.duties.proposer)[':epoch']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.eth.v2.validator.duties.proposer)[':epoch']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV2ValidatorDutiesProposerEpochQueryKey>
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
      ...getEthV2ValidatorDutiesProposerEpochQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostEthV1ValidatorDutiesSyncEpochMutationKey() {
  return ['eth', '/eth/v1/validator/duties/sync/:epoch', 'POST'] as const
}

export function getPostEthV1ValidatorDutiesSyncEpochMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eth.v1.validator.duties.sync)[':epoch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.eth.v1.validator.duties.sync)[':epoch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEthV1ValidatorDutiesSyncEpochMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.eth.v1.validator.duties.sync)[':epoch']['$post']>,
    ) {
      return parseResponse(client.eth.v1.validator.duties.sync[':epoch'].$post(args, options))
    },
  })
}

export function usePostEthV1ValidatorDutiesSyncEpoch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eth.v1.validator.duties.sync)[':epoch']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.eth.v1.validator.duties.sync)[':epoch']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEthV1ValidatorDutiesSyncEpochMutationOptions<
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

export function getPostEthV1ValidatorDutiesPtcEpochMutationKey() {
  return ['eth', '/eth/v1/validator/duties/ptc/:epoch', 'POST'] as const
}

export function getPostEthV1ValidatorDutiesPtcEpochMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eth.v1.validator.duties.ptc)[':epoch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.eth.v1.validator.duties.ptc)[':epoch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEthV1ValidatorDutiesPtcEpochMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.eth.v1.validator.duties.ptc)[':epoch']['$post']>,
    ) {
      return parseResponse(client.eth.v1.validator.duties.ptc[':epoch'].$post(args, options))
    },
  })
}

export function usePostEthV1ValidatorDutiesPtcEpoch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eth.v1.validator.duties.ptc)[':epoch']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.eth.v1.validator.duties.ptc)[':epoch']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEthV1ValidatorDutiesPtcEpochMutationOptions<
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

export function getEthV3ValidatorBlocksSlotQueryKey(
  args: InferRequestType<(typeof client.eth.v3.validator.blocks)[':slot']['$get']>,
) {
  return ['eth', '/eth/v3/validator/blocks/:slot', args] as const
}

export function getEthV3ValidatorBlocksSlotQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v3.validator.blocks)[':slot']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v3.validator.blocks)[':slot']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eth.v3.validator.blocks)[':slot']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV3ValidatorBlocksSlotQueryKey>
  >({
    queryKey: getEthV3ValidatorBlocksSlotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v3.validator.blocks[':slot'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV3ValidatorBlocksSlot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v3.validator.blocks)[':slot']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v3.validator.blocks)[':slot']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eth.v3.validator.blocks)[':slot']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV3ValidatorBlocksSlotQueryKey>
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
      ...getEthV3ValidatorBlocksSlotQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV3ValidatorBlocksSlot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eth.v3.validator.blocks)[':slot']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eth.v3.validator.blocks)[':slot']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eth.v3.validator.blocks)[':slot']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV3ValidatorBlocksSlotQueryKey>
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
      ...getEthV3ValidatorBlocksSlotQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostEthV4ValidatorBlocksSlotMutationKey() {
  return ['eth', '/eth/v4/validator/blocks/:slot', 'POST'] as const
}

export function getPostEthV4ValidatorBlocksSlotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eth.v4.validator.blocks)[':slot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.eth.v4.validator.blocks)[':slot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEthV4ValidatorBlocksSlotMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.eth.v4.validator.blocks)[':slot']['$post']>,
    ) {
      return parseResponse(client.eth.v4.validator.blocks[':slot'].$post(args, options))
    },
  })
}

export function usePostEthV4ValidatorBlocksSlot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eth.v4.validator.blocks)[':slot']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.eth.v4.validator.blocks)[':slot']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEthV4ValidatorBlocksSlotMutationOptions<TError, TOnMutateResult>(
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

export function getEthV1ValidatorAttestationDataQueryKey(
  args: InferRequestType<typeof client.eth.v1.validator.attestation_data.$get>,
) {
  return ['eth', '/eth/v1/validator/attestation_data', args] as const
}

export function getEthV1ValidatorAttestationDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.validator.attestation_data.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v1.validator.attestation_data.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.validator.attestation_data.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1ValidatorAttestationDataQueryKey>
  >({
    queryKey: getEthV1ValidatorAttestationDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.validator.attestation_data.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1ValidatorAttestationData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.validator.attestation_data.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v1.validator.attestation_data.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.validator.attestation_data.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1ValidatorAttestationDataQueryKey>
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
      ...getEthV1ValidatorAttestationDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1ValidatorAttestationData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.validator.attestation_data.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v1.validator.attestation_data.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.validator.attestation_data.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1ValidatorAttestationDataQueryKey>
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
      ...getEthV1ValidatorAttestationDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEthV1ValidatorPayloadAttestationDataQueryKey(
  args: InferRequestType<typeof client.eth.v1.validator.payload_attestation_data.$get>,
) {
  return ['eth', '/eth/v1/validator/payload_attestation_data', args] as const
}

export function getEthV1ValidatorPayloadAttestationDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.validator.payload_attestation_data.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v1.validator.payload_attestation_data.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.validator.payload_attestation_data.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1ValidatorPayloadAttestationDataQueryKey>
  >({
    queryKey: getEthV1ValidatorPayloadAttestationDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.validator.payload_attestation_data.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1ValidatorPayloadAttestationData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.validator.payload_attestation_data.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v1.validator.payload_attestation_data.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.validator.payload_attestation_data.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1ValidatorPayloadAttestationDataQueryKey>
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
      ...getEthV1ValidatorPayloadAttestationDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1ValidatorPayloadAttestationData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.validator.payload_attestation_data.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v1.validator.payload_attestation_data.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.validator.payload_attestation_data.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1ValidatorPayloadAttestationDataQueryKey>
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
      ...getEthV1ValidatorPayloadAttestationDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEthV2ValidatorAggregateAttestationQueryKey(
  args: InferRequestType<typeof client.eth.v2.validator.aggregate_attestation.$get>,
) {
  return ['eth', '/eth/v2/validator/aggregate_attestation', args] as const
}

export function getEthV2ValidatorAggregateAttestationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v2.validator.aggregate_attestation.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v2.validator.aggregate_attestation.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v2.validator.aggregate_attestation.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV2ValidatorAggregateAttestationQueryKey>
  >({
    queryKey: getEthV2ValidatorAggregateAttestationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v2.validator.aggregate_attestation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV2ValidatorAggregateAttestation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v2.validator.aggregate_attestation.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v2.validator.aggregate_attestation.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v2.validator.aggregate_attestation.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV2ValidatorAggregateAttestationQueryKey>
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
      ...getEthV2ValidatorAggregateAttestationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV2ValidatorAggregateAttestation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v2.validator.aggregate_attestation.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v2.validator.aggregate_attestation.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v2.validator.aggregate_attestation.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV2ValidatorAggregateAttestationQueryKey>
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
      ...getEthV2ValidatorAggregateAttestationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostEthV2ValidatorAggregateAndProofsMutationKey() {
  return ['eth', '/eth/v2/validator/aggregate_and_proofs', 'POST'] as const
}

export function getPostEthV2ValidatorAggregateAndProofsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v2.validator.aggregate_and_proofs.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.eth.v2.validator.aggregate_and_proofs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEthV2ValidatorAggregateAndProofsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.eth.v2.validator.aggregate_and_proofs.$post>,
    ) {
      return parseResponse(client.eth.v2.validator.aggregate_and_proofs.$post(args, options))
    },
  })
}

export function usePostEthV2ValidatorAggregateAndProofs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v2.validator.aggregate_and_proofs.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.eth.v2.validator.aggregate_and_proofs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEthV2ValidatorAggregateAndProofsMutationOptions<
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

export function getPostEthV1ValidatorBeaconCommitteeSubscriptionsMutationKey() {
  return ['eth', '/eth/v1/validator/beacon_committee_subscriptions', 'POST'] as const
}

export function getPostEthV1ValidatorBeaconCommitteeSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.validator.beacon_committee_subscriptions.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.eth.v1.validator.beacon_committee_subscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEthV1ValidatorBeaconCommitteeSubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.eth.v1.validator.beacon_committee_subscriptions.$post>,
    ) {
      return parseResponse(
        client.eth.v1.validator.beacon_committee_subscriptions.$post(args, options),
      )
    },
  })
}

export function usePostEthV1ValidatorBeaconCommitteeSubscriptions<
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
                ReturnType<typeof client.eth.v1.validator.beacon_committee_subscriptions.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.eth.v1.validator.beacon_committee_subscriptions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEthV1ValidatorBeaconCommitteeSubscriptionsMutationOptions<
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

export function getPostEthV1ValidatorSyncCommitteeSubscriptionsMutationKey() {
  return ['eth', '/eth/v1/validator/sync_committee_subscriptions', 'POST'] as const
}

export function getPostEthV1ValidatorSyncCommitteeSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.validator.sync_committee_subscriptions.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.eth.v1.validator.sync_committee_subscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEthV1ValidatorSyncCommitteeSubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.eth.v1.validator.sync_committee_subscriptions.$post>,
    ) {
      return parseResponse(
        client.eth.v1.validator.sync_committee_subscriptions.$post(args, options),
      )
    },
  })
}

export function usePostEthV1ValidatorSyncCommitteeSubscriptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.validator.sync_committee_subscriptions.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.eth.v1.validator.sync_committee_subscriptions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEthV1ValidatorSyncCommitteeSubscriptionsMutationOptions<
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

export function getPostEthV1ValidatorBeaconCommitteeSelectionsMutationKey() {
  return ['eth', '/eth/v1/validator/beacon_committee_selections', 'POST'] as const
}

export function getPostEthV1ValidatorBeaconCommitteeSelectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.validator.beacon_committee_selections.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.eth.v1.validator.beacon_committee_selections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEthV1ValidatorBeaconCommitteeSelectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.eth.v1.validator.beacon_committee_selections.$post>,
    ) {
      return parseResponse(client.eth.v1.validator.beacon_committee_selections.$post(args, options))
    },
  })
}

export function usePostEthV1ValidatorBeaconCommitteeSelections<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.validator.beacon_committee_selections.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.eth.v1.validator.beacon_committee_selections.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEthV1ValidatorBeaconCommitteeSelectionsMutationOptions<
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

export function getEthV1ValidatorSyncCommitteeContributionQueryKey(
  args: InferRequestType<typeof client.eth.v1.validator.sync_committee_contribution.$get>,
) {
  return ['eth', '/eth/v1/validator/sync_committee_contribution', args] as const
}

export function getEthV1ValidatorSyncCommitteeContributionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.validator.sync_committee_contribution.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v1.validator.sync_committee_contribution.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.validator.sync_committee_contribution.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1ValidatorSyncCommitteeContributionQueryKey>
  >({
    queryKey: getEthV1ValidatorSyncCommitteeContributionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.validator.sync_committee_contribution.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEthV1ValidatorSyncCommitteeContribution<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.validator.sync_committee_contribution.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v1.validator.sync_committee_contribution.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.validator.sync_committee_contribution.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1ValidatorSyncCommitteeContributionQueryKey>
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
      ...getEthV1ValidatorSyncCommitteeContributionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1ValidatorSyncCommitteeContribution<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.eth.v1.validator.sync_committee_contribution.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v1.validator.sync_committee_contribution.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.validator.sync_committee_contribution.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1ValidatorSyncCommitteeContributionQueryKey>
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
      ...getEthV1ValidatorSyncCommitteeContributionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostEthV1ValidatorSyncCommitteeSelectionsMutationKey() {
  return ['eth', '/eth/v1/validator/sync_committee_selections', 'POST'] as const
}

export function getPostEthV1ValidatorSyncCommitteeSelectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.validator.sync_committee_selections.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.eth.v1.validator.sync_committee_selections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEthV1ValidatorSyncCommitteeSelectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.eth.v1.validator.sync_committee_selections.$post>,
    ) {
      return parseResponse(client.eth.v1.validator.sync_committee_selections.$post(args, options))
    },
  })
}

export function usePostEthV1ValidatorSyncCommitteeSelections<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.validator.sync_committee_selections.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.eth.v1.validator.sync_committee_selections.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEthV1ValidatorSyncCommitteeSelectionsMutationOptions<
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

export function getPostEthV1ValidatorContributionAndProofsMutationKey() {
  return ['eth', '/eth/v1/validator/contribution_and_proofs', 'POST'] as const
}

export function getPostEthV1ValidatorContributionAndProofsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.validator.contribution_and_proofs.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.eth.v1.validator.contribution_and_proofs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEthV1ValidatorContributionAndProofsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.eth.v1.validator.contribution_and_proofs.$post>,
    ) {
      return parseResponse(client.eth.v1.validator.contribution_and_proofs.$post(args, options))
    },
  })
}

export function usePostEthV1ValidatorContributionAndProofs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.validator.contribution_and_proofs.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.eth.v1.validator.contribution_and_proofs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEthV1ValidatorContributionAndProofsMutationOptions<
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

export function getPostEthV1ValidatorPrepareBeaconProposerMutationKey() {
  return ['eth', '/eth/v1/validator/prepare_beacon_proposer', 'POST'] as const
}

export function getPostEthV1ValidatorPrepareBeaconProposerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.validator.prepare_beacon_proposer.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.eth.v1.validator.prepare_beacon_proposer.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEthV1ValidatorPrepareBeaconProposerMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.eth.v1.validator.prepare_beacon_proposer.$post>,
    ) {
      return parseResponse(client.eth.v1.validator.prepare_beacon_proposer.$post(args, options))
    },
  })
}

export function usePostEthV1ValidatorPrepareBeaconProposer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.validator.prepare_beacon_proposer.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.eth.v1.validator.prepare_beacon_proposer.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEthV1ValidatorPrepareBeaconProposerMutationOptions<
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

export function getPostEthV1ValidatorRegisterValidatorMutationKey() {
  return ['eth', '/eth/v1/validator/register_validator', 'POST'] as const
}

export function getPostEthV1ValidatorRegisterValidatorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.validator.register_validator.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.eth.v1.validator.register_validator.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEthV1ValidatorRegisterValidatorMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.eth.v1.validator.register_validator.$post>,
    ) {
      return parseResponse(client.eth.v1.validator.register_validator.$post(args, options))
    },
  })
}

export function usePostEthV1ValidatorRegisterValidator<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.validator.register_validator.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.eth.v1.validator.register_validator.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEthV1ValidatorRegisterValidatorMutationOptions<
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

export function getPostEthV1ValidatorProposerPreferencesMutationKey() {
  return ['eth', '/eth/v1/validator/proposer_preferences', 'POST'] as const
}

export function getPostEthV1ValidatorProposerPreferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.validator.proposer_preferences.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.eth.v1.validator.proposer_preferences.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEthV1ValidatorProposerPreferencesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.eth.v1.validator.proposer_preferences.$post>,
    ) {
      return parseResponse(client.eth.v1.validator.proposer_preferences.$post(args, options))
    },
  })
}

export function usePostEthV1ValidatorProposerPreferences<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.validator.proposer_preferences.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.eth.v1.validator.proposer_preferences.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEthV1ValidatorProposerPreferencesMutationOptions<
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

export function getPostEthV1ValidatorBuilderPreferencesMutationKey() {
  return ['eth', '/eth/v1/validator/builder_preferences', 'POST'] as const
}

export function getPostEthV1ValidatorBuilderPreferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.validator.builder_preferences.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.eth.v1.validator.builder_preferences.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEthV1ValidatorBuilderPreferencesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.eth.v1.validator.builder_preferences.$post>,
    ) {
      return parseResponse(client.eth.v1.validator.builder_preferences.$post(args, options))
    },
  })
}

export function usePostEthV1ValidatorBuilderPreferences<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eth.v1.validator.builder_preferences.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.eth.v1.validator.builder_preferences.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEthV1ValidatorBuilderPreferencesMutationOptions<
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

export function getPostEthV1ValidatorLivenessEpochMutationKey() {
  return ['eth', '/eth/v1/validator/liveness/:epoch', 'POST'] as const
}

export function getPostEthV1ValidatorLivenessEpochMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eth.v1.validator.liveness)[':epoch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.eth.v1.validator.liveness)[':epoch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEthV1ValidatorLivenessEpochMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.eth.v1.validator.liveness)[':epoch']['$post']>,
    ) {
      return parseResponse(client.eth.v1.validator.liveness[':epoch'].$post(args, options))
    },
  })
}

export function usePostEthV1ValidatorLivenessEpoch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eth.v1.validator.liveness)[':epoch']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.eth.v1.validator.liveness)[':epoch']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEthV1ValidatorLivenessEpochMutationOptions<
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

export function getEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRootQueryKey(
  args: InferRequestType<
    (typeof client.eth.v1.validator.execution_payload_envelopes)[':slot'][':beacon_block_root']['$get']
  >,
) {
  return [
    'eth',
    '/eth/v1/validator/execution_payload_envelopes/:slot/:beacon_block_root',
    args,
  ] as const
}

export function getEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRootQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.eth.v1.validator.execution_payload_envelopes)[':slot'][':beacon_block_root']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.validator.execution_payload_envelopes)[':slot'][':beacon_block_root']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.eth.v1.validator.execution_payload_envelopes)[':slot'][':beacon_block_root']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRootQueryKey>
  >({
    queryKey: getEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRootQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.validator.execution_payload_envelopes[':slot'][':beacon_block_root'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRoot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.eth.v1.validator.execution_payload_envelopes)[':slot'][':beacon_block_root']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.validator.execution_payload_envelopes)[':slot'][':beacon_block_root']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.eth.v1.validator.execution_payload_envelopes)[':slot'][':beacon_block_root']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRootQueryKey>
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
      ...getEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRootQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRoot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.eth.v1.validator.execution_payload_envelopes)[':slot'][':beacon_block_root']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.eth.v1.validator.execution_payload_envelopes)[':slot'][':beacon_block_root']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.eth.v1.validator.execution_payload_envelopes)[':slot'][':beacon_block_root']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRootQueryKey>
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
      ...getEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRootQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEthV1EventsQueryKey(args: InferRequestType<typeof client.eth.v1.events.$get>) {
  return ['eth', '/eth/v1/events', args] as const
}

export function getEthV1EventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.events.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.eth.v1.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1EventsQueryKey>
  >({
    queryKey: getEthV1EventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eth.v1.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEthV1Events<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v1.events.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.events.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1EventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEthV1EventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEthV1Events<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eth.v1.events.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.events.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEthV1EventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEthV1EventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
