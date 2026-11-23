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

export function getEthKey() {
  return ['eth'] as const
}

export function getEthV1BeaconGenesisQueryKey() {
  return ['eth', '/eth/v1/beacon/genesis'] as const
}

export function getEthV1BeaconGenesisQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEthV1BeaconGenesisQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.genesis.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEthV1BeaconGenesis<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.beacon.genesis.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.beacon.genesis.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.beacon.genesis.$get>>>
            >
          >,
          ReturnType<typeof getEthV1BeaconGenesisQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.beacon.genesis.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconGenesisQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEthV1BeaconGenesisQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.genesis.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1BeaconStatesStateIdRootQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['root']['$get']>
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/root', toValue(args)] as const
}

export function getEthV1BeaconStatesStateIdRootQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['root']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1BeaconStatesStateIdRootQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].root.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['root']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['root']['$get']>
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
                  ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['root']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconStatesStateIdRootQueryKey>
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
          Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['root']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdRootQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1BeaconStatesStateIdRootQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.states[':state_id'].root.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1BeaconStatesStateIdForkQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['fork']['$get']>
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/fork', toValue(args)] as const
}

export function getEthV1BeaconStatesStateIdForkQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['fork']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1BeaconStatesStateIdForkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].fork.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['fork']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['fork']['$get']>
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
                  ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['fork']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconStatesStateIdForkQueryKey>
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
          Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['fork']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdForkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1BeaconStatesStateIdForkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.states[':state_id'].fork.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1BeaconStatesStateIdFinalityCheckpointsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.eth.v1.beacon.states)[':state_id']['finality_checkpoints']['$get']
    >
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/finality_checkpoints', toValue(args)] as const
}

export function getEthV1BeaconStatesStateIdFinalityCheckpointsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.eth.v1.beacon.states)[':state_id']['finality_checkpoints']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1BeaconStatesStateIdFinalityCheckpointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].finality_checkpoints.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.eth.v1.beacon.states)[':state_id']['finality_checkpoints']['$get']
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
                    (typeof client.eth.v1.beacon.states)[':state_id']['finality_checkpoints']['$get']
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
                    (typeof client.eth.v1.beacon.states)[':state_id']['finality_checkpoints']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconStatesStateIdFinalityCheckpointsQueryKey>
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
              (typeof client.eth.v1.beacon.states)[':state_id']['finality_checkpoints']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdFinalityCheckpointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1BeaconStatesStateIdFinalityCheckpointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.states[':state_id'].finality_checkpoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1BeaconStatesStateIdValidatorsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['validators']['$get']>
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/validators', toValue(args)] as const
}

export function getEthV1BeaconStatesStateIdValidatorsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['validators']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1BeaconStatesStateIdValidatorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].validators.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['validators']['$get']>
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
                    (typeof client.eth.v1.beacon.states)[':state_id']['validators']['$get']
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
                    (typeof client.eth.v1.beacon.states)[':state_id']['validators']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconStatesStateIdValidatorsQueryKey>
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
            ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['validators']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdValidatorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1BeaconStatesStateIdValidatorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.states[':state_id'].validators.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.eth.v1.beacon.states)[':state_id']['validators']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.eth.v1.beacon.states)[':state_id']['validators']['$post']
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.eth.v1.beacon.states)[':state_id']['validators'][':validator_id']['$get']
    >
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/validators/:validator_id', toValue(args)] as const
}

export function getEthV1BeaconStatesStateIdValidatorsValidatorIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.eth.v1.beacon.states)[':state_id']['validators'][':validator_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1BeaconStatesStateIdValidatorsValidatorIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].validators[':validator_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.eth.v1.beacon.states)[':state_id']['validators'][':validator_id']['$get']
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
                    (typeof client.eth.v1.beacon.states)[':state_id']['validators'][':validator_id']['$get']
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
                    (typeof client.eth.v1.beacon.states)[':state_id']['validators'][':validator_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconStatesStateIdValidatorsValidatorIdQueryKey>
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
              (typeof client.eth.v1.beacon.states)[':state_id']['validators'][':validator_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdValidatorsValidatorIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1BeaconStatesStateIdValidatorsValidatorIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.states[':state_id'].validators[':validator_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1BeaconStatesStateIdValidatorBalancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.eth.v1.beacon.states)[':state_id']['validator_balances']['$get']
    >
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/validator_balances', toValue(args)] as const
}

export function getEthV1BeaconStatesStateIdValidatorBalancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.eth.v1.beacon.states)[':state_id']['validator_balances']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1BeaconStatesStateIdValidatorBalancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].validator_balances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.eth.v1.beacon.states)[':state_id']['validator_balances']['$get']
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
                    (typeof client.eth.v1.beacon.states)[':state_id']['validator_balances']['$get']
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
                    (typeof client.eth.v1.beacon.states)[':state_id']['validator_balances']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconStatesStateIdValidatorBalancesQueryKey>
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
              (typeof client.eth.v1.beacon.states)[':state_id']['validator_balances']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdValidatorBalancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1BeaconStatesStateIdValidatorBalancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.states[':state_id'].validator_balances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['committees']['$get']>
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/committees', toValue(args)] as const
}

export function getEthV1BeaconStatesStateIdCommitteesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['committees']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1BeaconStatesStateIdCommitteesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].committees.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['committees']['$get']>
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
                    (typeof client.eth.v1.beacon.states)[':state_id']['committees']['$get']
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
                    (typeof client.eth.v1.beacon.states)[':state_id']['committees']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconStatesStateIdCommitteesQueryKey>
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
            ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['committees']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdCommitteesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1BeaconStatesStateIdCommitteesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.states[':state_id'].committees.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1BeaconStatesStateIdSyncCommitteesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['sync_committees']['$get']>
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/sync_committees', toValue(args)] as const
}

export function getEthV1BeaconStatesStateIdSyncCommitteesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['sync_committees']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1BeaconStatesStateIdSyncCommitteesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].sync_committees.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['sync_committees']['$get']>
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
                    (typeof client.eth.v1.beacon.states)[':state_id']['sync_committees']['$get']
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
                    (typeof client.eth.v1.beacon.states)[':state_id']['sync_committees']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconStatesStateIdSyncCommitteesQueryKey>
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
            ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['sync_committees']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdSyncCommitteesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1BeaconStatesStateIdSyncCommitteesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.states[':state_id'].sync_committees.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1BeaconStatesStateIdPtcQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['ptc']['$get']>
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/ptc', toValue(args)] as const
}

export function getEthV1BeaconStatesStateIdPtcQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['ptc']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1BeaconStatesStateIdPtcQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].ptc.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['ptc']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['ptc']['$get']>
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
                  ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['ptc']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconStatesStateIdPtcQueryKey>
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
          Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['ptc']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdPtcQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1BeaconStatesStateIdPtcQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.states[':state_id'].ptc.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1BeaconStatesStateIdRandaoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['randao']['$get']>
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/randao', toValue(args)] as const
}

export function getEthV1BeaconStatesStateIdRandaoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['randao']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1BeaconStatesStateIdRandaoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].randao.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['randao']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['randao']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconStatesStateIdRandaoQueryKey>
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
          Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['randao']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdRandaoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1BeaconStatesStateIdRandaoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.states[':state_id'].randao.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1BeaconStatesStateIdPendingConsolidationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.eth.v1.beacon.states)[':state_id']['pending_consolidations']['$get']
    >
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/pending_consolidations', toValue(args)] as const
}

export function getEthV1BeaconStatesStateIdPendingConsolidationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.eth.v1.beacon.states)[':state_id']['pending_consolidations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1BeaconStatesStateIdPendingConsolidationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].pending_consolidations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.eth.v1.beacon.states)[':state_id']['pending_consolidations']['$get']
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
                    (typeof client.eth.v1.beacon.states)[':state_id']['pending_consolidations']['$get']
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
                    (typeof client.eth.v1.beacon.states)[':state_id']['pending_consolidations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconStatesStateIdPendingConsolidationsQueryKey>
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
              (typeof client.eth.v1.beacon.states)[':state_id']['pending_consolidations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdPendingConsolidationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1BeaconStatesStateIdPendingConsolidationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.states[':state_id'].pending_consolidations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1BeaconStatesStateIdPendingDepositsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['pending_deposits']['$get']>
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/pending_deposits', toValue(args)] as const
}

export function getEthV1BeaconStatesStateIdPendingDepositsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['pending_deposits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1BeaconStatesStateIdPendingDepositsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].pending_deposits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['pending_deposits']['$get']>
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
                    (typeof client.eth.v1.beacon.states)[':state_id']['pending_deposits']['$get']
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
                    (typeof client.eth.v1.beacon.states)[':state_id']['pending_deposits']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconStatesStateIdPendingDepositsQueryKey>
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
              (typeof client.eth.v1.beacon.states)[':state_id']['pending_deposits']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdPendingDepositsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1BeaconStatesStateIdPendingDepositsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.states[':state_id'].pending_deposits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1BeaconStatesStateIdPendingPartialWithdrawalsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.eth.v1.beacon.states)[':state_id']['pending_partial_withdrawals']['$get']
    >
  >,
) {
  return [
    'eth',
    '/eth/v1/beacon/states/:state_id/pending_partial_withdrawals',
    toValue(args),
  ] as const
}

export function getEthV1BeaconStatesStateIdPendingPartialWithdrawalsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.eth.v1.beacon.states)[':state_id']['pending_partial_withdrawals']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1BeaconStatesStateIdPendingPartialWithdrawalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].pending_partial_withdrawals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.eth.v1.beacon.states)[':state_id']['pending_partial_withdrawals']['$get']
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
                    (typeof client.eth.v1.beacon.states)[':state_id']['pending_partial_withdrawals']['$get']
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
                    (typeof client.eth.v1.beacon.states)[':state_id']['pending_partial_withdrawals']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconStatesStateIdPendingPartialWithdrawalsQueryKey>
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
              (typeof client.eth.v1.beacon.states)[':state_id']['pending_partial_withdrawals']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdPendingPartialWithdrawalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1BeaconStatesStateIdPendingPartialWithdrawalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.states[':state_id'].pending_partial_withdrawals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1BeaconStatesStateIdProposerLookaheadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.eth.v1.beacon.states)[':state_id']['proposer_lookahead']['$get']
    >
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/proposer_lookahead', toValue(args)] as const
}

export function getEthV1BeaconStatesStateIdProposerLookaheadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.eth.v1.beacon.states)[':state_id']['proposer_lookahead']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1BeaconStatesStateIdProposerLookaheadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].proposer_lookahead.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.eth.v1.beacon.states)[':state_id']['proposer_lookahead']['$get']
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
                    (typeof client.eth.v1.beacon.states)[':state_id']['proposer_lookahead']['$get']
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
                    (typeof client.eth.v1.beacon.states)[':state_id']['proposer_lookahead']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconStatesStateIdProposerLookaheadQueryKey>
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
              (typeof client.eth.v1.beacon.states)[':state_id']['proposer_lookahead']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdProposerLookaheadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1BeaconStatesStateIdProposerLookaheadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.states[':state_id'].proposer_lookahead.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1BeaconStatesStateIdBuilderPendingWithdrawalsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_withdrawals']['$get']
    >
  >,
) {
  return [
    'eth',
    '/eth/v1/beacon/states/:state_id/builder_pending_withdrawals',
    toValue(args),
  ] as const
}

export function getEthV1BeaconStatesStateIdBuilderPendingWithdrawalsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_withdrawals']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1BeaconStatesStateIdBuilderPendingWithdrawalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].builder_pending_withdrawals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_withdrawals']['$get']
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
                    (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_withdrawals']['$get']
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
                    (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_withdrawals']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconStatesStateIdBuilderPendingWithdrawalsQueryKey>
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
              (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_withdrawals']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdBuilderPendingWithdrawalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1BeaconStatesStateIdBuilderPendingWithdrawalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.states[':state_id'].builder_pending_withdrawals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1BeaconStatesStateIdBuilderPendingPaymentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_payments']['$get']
    >
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/builder_pending_payments', toValue(args)] as const
}

export function getEthV1BeaconStatesStateIdBuilderPendingPaymentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_payments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1BeaconStatesStateIdBuilderPendingPaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.states[':state_id'].builder_pending_payments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_payments']['$get']
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
                    (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_payments']['$get']
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
                    (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_payments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconStatesStateIdBuilderPendingPaymentsQueryKey>
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
              (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_payments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconStatesStateIdBuilderPendingPaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1BeaconStatesStateIdBuilderPendingPaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.states[':state_id'].builder_pending_payments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1BeaconHeadersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eth.v1.beacon.headers.$get>>,
) {
  return ['eth', '/eth/v1/beacon/headers', toValue(args)] as const
}

export function getEthV1BeaconHeadersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eth.v1.beacon.headers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1BeaconHeadersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.headers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEthV1BeaconHeaders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.beacon.headers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eth.v1.beacon.headers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.beacon.headers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.beacon.headers.$get>>>
            >
          >,
          ReturnType<typeof getEthV1BeaconHeadersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.beacon.headers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconHeadersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1BeaconHeadersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.headers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1BeaconHeadersBlockIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.headers)[':block_id']['$get']>
  >,
) {
  return ['eth', '/eth/v1/beacon/headers/:block_id', toValue(args)] as const
}

export function getEthV1BeaconHeadersBlockIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.headers)[':block_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1BeaconHeadersBlockIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.headers[':block_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.headers)[':block_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eth.v1.beacon.headers)[':block_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconHeadersBlockIdQueryKey>
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
          Awaited<ReturnType<(typeof client.eth.v1.beacon.headers)[':block_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconHeadersBlockIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1BeaconHeadersBlockIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.headers[':block_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.execution_payload_envelopes)[':block_id']['$get']>
  >,
) {
  return ['eth', '/eth/v1/beacon/execution_payload_envelopes/:block_id', toValue(args)] as const
}

export function getEthV1BeaconExecutionPayloadEnvelopesBlockIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.execution_payload_envelopes)[':block_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1BeaconExecutionPayloadEnvelopesBlockIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.execution_payload_envelopes[':block_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.execution_payload_envelopes)[':block_id']['$get']>
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
                    (typeof client.eth.v1.beacon.execution_payload_envelopes)[':block_id']['$get']
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
                    (typeof client.eth.v1.beacon.execution_payload_envelopes)[':block_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconExecutionPayloadEnvelopesBlockIdQueryKey>
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
              (typeof client.eth.v1.beacon.execution_payload_envelopes)[':block_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconExecutionPayloadEnvelopesBlockIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1BeaconExecutionPayloadEnvelopesBlockIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.execution_payload_envelopes[':block_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1BeaconProposerPreferencesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eth.v1.beacon.proposer_preferences.$get>>,
) {
  return ['eth', '/eth/v1/beacon/proposer_preferences', toValue(args)] as const
}

export function getEthV1BeaconProposerPreferencesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eth.v1.beacon.proposer_preferences.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1BeaconProposerPreferencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.proposer_preferences.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.eth.v1.beacon.proposer_preferences.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.eth.v1.beacon.proposer_preferences.$get>>
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconProposerPreferencesQueryKey>
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
          Awaited<ReturnType<typeof client.eth.v1.beacon.proposer_preferences.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconProposerPreferencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1BeaconProposerPreferencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.proposer_preferences.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV2BeaconBlocksBlockIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v2.beacon.blocks)[':block_id']['$get']>
  >,
) {
  return ['eth', '/eth/v2/beacon/blocks/:block_id', toValue(args)] as const
}

export function getEthV2BeaconBlocksBlockIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v2.beacon.blocks)[':block_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV2BeaconBlocksBlockIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v2.beacon.blocks[':block_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v2.beacon.blocks)[':block_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eth.v2.beacon.blocks)[':block_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEthV2BeaconBlocksBlockIdQueryKey>
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
          Awaited<ReturnType<(typeof client.eth.v2.beacon.blocks)[':block_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV2BeaconBlocksBlockIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV2BeaconBlocksBlockIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v2.beacon.blocks[':block_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1BeaconBlocksBlockIdRootQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.blocks)[':block_id']['root']['$get']>
  >,
) {
  return ['eth', '/eth/v1/beacon/blocks/:block_id/root', toValue(args)] as const
}

export function getEthV1BeaconBlocksBlockIdRootQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.blocks)[':block_id']['root']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1BeaconBlocksBlockIdRootQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.blocks[':block_id'].root.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.blocks)[':block_id']['root']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.eth.v1.beacon.blocks)[':block_id']['root']['$get']>
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
                  ReturnType<(typeof client.eth.v1.beacon.blocks)[':block_id']['root']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconBlocksBlockIdRootQueryKey>
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
          Awaited<ReturnType<(typeof client.eth.v1.beacon.blocks)[':block_id']['root']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconBlocksBlockIdRootQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1BeaconBlocksBlockIdRootQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.blocks[':block_id'].root.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV2BeaconBlocksBlockIdAttestationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v2.beacon.blocks)[':block_id']['attestations']['$get']>
  >,
) {
  return ['eth', '/eth/v2/beacon/blocks/:block_id/attestations', toValue(args)] as const
}

export function getEthV2BeaconBlocksBlockIdAttestationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v2.beacon.blocks)[':block_id']['attestations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV2BeaconBlocksBlockIdAttestationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v2.beacon.blocks[':block_id'].attestations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v2.beacon.blocks)[':block_id']['attestations']['$get']>
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
                    (typeof client.eth.v2.beacon.blocks)[':block_id']['attestations']['$get']
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
                    (typeof client.eth.v2.beacon.blocks)[':block_id']['attestations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEthV2BeaconBlocksBlockIdAttestationsQueryKey>
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
            ReturnType<(typeof client.eth.v2.beacon.blocks)[':block_id']['attestations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV2BeaconBlocksBlockIdAttestationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV2BeaconBlocksBlockIdAttestationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v2.beacon.blocks[':block_id'].attestations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1BeaconBlobsBlockIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.blobs)[':block_id']['$get']>
  >,
) {
  return ['eth', '/eth/v1/beacon/blobs/:block_id', toValue(args)] as const
}

export function getEthV1BeaconBlobsBlockIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.blobs)[':block_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1BeaconBlobsBlockIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.blobs[':block_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.blobs)[':block_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eth.v1.beacon.blobs)[':block_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconBlobsBlockIdQueryKey>
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
          Awaited<ReturnType<(typeof client.eth.v1.beacon.blobs)[':block_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconBlobsBlockIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1BeaconBlobsBlockIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.blobs[':block_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1DebugBeaconDataColumnSidecarsBlockIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.debug.beacon.data_column_sidecars)[':block_id']['$get']>
  >,
) {
  return ['eth', '/eth/v1/debug/beacon/data_column_sidecars/:block_id', toValue(args)] as const
}

export function getEthV1DebugBeaconDataColumnSidecarsBlockIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.debug.beacon.data_column_sidecars)[':block_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1DebugBeaconDataColumnSidecarsBlockIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.debug.beacon.data_column_sidecars[':block_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.debug.beacon.data_column_sidecars)[':block_id']['$get']>
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
                    (typeof client.eth.v1.debug.beacon.data_column_sidecars)[':block_id']['$get']
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
                    (typeof client.eth.v1.debug.beacon.data_column_sidecars)[':block_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEthV1DebugBeaconDataColumnSidecarsBlockIdQueryKey>
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
              (typeof client.eth.v1.debug.beacon.data_column_sidecars)[':block_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1DebugBeaconDataColumnSidecarsBlockIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1DebugBeaconDataColumnSidecarsBlockIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.debug.beacon.data_column_sidecars[':block_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.rewards.blocks)[':block_id']['$get']>
  >,
) {
  return ['eth', '/eth/v1/beacon/rewards/blocks/:block_id', toValue(args)] as const
}

export function getEthV1BeaconRewardsBlocksBlockIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.rewards.blocks)[':block_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1BeaconRewardsBlocksBlockIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.rewards.blocks[':block_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.rewards.blocks)[':block_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.eth.v1.beacon.rewards.blocks)[':block_id']['$get']>
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
                  ReturnType<(typeof client.eth.v1.beacon.rewards.blocks)[':block_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconRewardsBlocksBlockIdQueryKey>
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
          Awaited<ReturnType<(typeof client.eth.v1.beacon.rewards.blocks)[':block_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconRewardsBlocksBlockIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1BeaconRewardsBlocksBlockIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.rewards.blocks[':block_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.blinded_blocks)[':block_id']['$get']>
  >,
) {
  return ['eth', '/eth/v1/beacon/blinded_blocks/:block_id', toValue(args)] as const
}

export function getEthV1BeaconBlindedBlocksBlockIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.blinded_blocks)[':block_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1BeaconBlindedBlocksBlockIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.blinded_blocks[':block_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.blinded_blocks)[':block_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.eth.v1.beacon.blinded_blocks)[':block_id']['$get']>
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
                  ReturnType<(typeof client.eth.v1.beacon.blinded_blocks)[':block_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconBlindedBlocksBlockIdQueryKey>
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
          Awaited<ReturnType<(typeof client.eth.v1.beacon.blinded_blocks)[':block_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconBlindedBlocksBlockIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1BeaconBlindedBlocksBlockIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.blinded_blocks[':block_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1BeaconLightClientBootstrapBlockRootQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.light_client.bootstrap)[':block_root']['$get']>
  >,
) {
  return ['eth', '/eth/v1/beacon/light_client/bootstrap/:block_root', toValue(args)] as const
}

export function getEthV1BeaconLightClientBootstrapBlockRootQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.light_client.bootstrap)[':block_root']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1BeaconLightClientBootstrapBlockRootQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.light_client.bootstrap[':block_root'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.beacon.light_client.bootstrap)[':block_root']['$get']>
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
                    (typeof client.eth.v1.beacon.light_client.bootstrap)[':block_root']['$get']
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
                    (typeof client.eth.v1.beacon.light_client.bootstrap)[':block_root']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconLightClientBootstrapBlockRootQueryKey>
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
            ReturnType<(typeof client.eth.v1.beacon.light_client.bootstrap)[':block_root']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconLightClientBootstrapBlockRootQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1BeaconLightClientBootstrapBlockRootQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.light_client.bootstrap[':block_root'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1BeaconLightClientUpdatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eth.v1.beacon.light_client.updates.$get>>,
) {
  return ['eth', '/eth/v1/beacon/light_client/updates', toValue(args)] as const
}

export function getEthV1BeaconLightClientUpdatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eth.v1.beacon.light_client.updates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1BeaconLightClientUpdatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.light_client.updates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.eth.v1.beacon.light_client.updates.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.updates.$get>>
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconLightClientUpdatesQueryKey>
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
          Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.updates.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconLightClientUpdatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1BeaconLightClientUpdatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.light_client.updates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1BeaconLightClientFinalityUpdateQueryKey() {
  return ['eth', '/eth/v1/beacon/light_client/finality_update'] as const
}

export function getEthV1BeaconLightClientFinalityUpdateQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getEthV1BeaconLightClientFinalityUpdateQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.light_client.finality_update.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.finality_update.$get>>
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconLightClientFinalityUpdateQueryKey>
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
          Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.finality_update.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconLightClientFinalityUpdateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEthV1BeaconLightClientFinalityUpdateQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.light_client.finality_update.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1BeaconLightClientOptimisticUpdateQueryKey() {
  return ['eth', '/eth/v1/beacon/light_client/optimistic_update'] as const
}

export function getEthV1BeaconLightClientOptimisticUpdateQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getEthV1BeaconLightClientOptimisticUpdateQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.light_client.optimistic_update.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.optimistic_update.$get>>
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconLightClientOptimisticUpdateQueryKey>
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
          Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.optimistic_update.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconLightClientOptimisticUpdateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEthV1BeaconLightClientOptimisticUpdateQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.light_client.optimistic_update.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV2BeaconPoolAttestationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eth.v2.beacon.pool.attestations.$get>>,
) {
  return ['eth', '/eth/v2/beacon/pool/attestations', toValue(args)] as const
}

export function getEthV2BeaconPoolAttestationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eth.v2.beacon.pool.attestations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV2BeaconPoolAttestationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v2.beacon.pool.attestations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEthV2BeaconPoolAttestations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attestations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eth.v2.beacon.pool.attestations.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attestations.$get>>
              >
            >
          >,
          ReturnType<typeof getEthV2BeaconPoolAttestationsQueryKey>
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
          Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attestations.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV2BeaconPoolAttestationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV2BeaconPoolAttestationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v2.beacon.pool.attestations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.eth.v1.beacon.pool.payload_attestations.$get>
  >,
) {
  return ['eth', '/eth/v1/beacon/pool/payload_attestations', toValue(args)] as const
}

export function getEthV1BeaconPoolPayloadAttestationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.eth.v1.beacon.pool.payload_attestations.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1BeaconPoolPayloadAttestationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.pool.payload_attestations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.eth.v1.beacon.pool.payload_attestations.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.eth.v1.beacon.pool.payload_attestations.$get>>
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconPoolPayloadAttestationsQueryKey>
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
          Awaited<ReturnType<typeof client.eth.v1.beacon.pool.payload_attestations.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconPoolPayloadAttestationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1BeaconPoolPayloadAttestationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.pool.payload_attestations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getEthV2BeaconPoolAttesterSlashingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEthV2BeaconPoolAttesterSlashingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v2.beacon.pool.attester_slashings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attester_slashings.$get>>
              >
            >
          >,
          ReturnType<typeof getEthV2BeaconPoolAttesterSlashingsQueryKey>
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
          Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attester_slashings.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV2BeaconPoolAttesterSlashingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEthV2BeaconPoolAttesterSlashingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v2.beacon.pool.attester_slashings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getEthV1BeaconPoolProposerSlashingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEthV1BeaconPoolProposerSlashingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.pool.proposer_slashings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.eth.v1.beacon.pool.proposer_slashings.$get>>
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconPoolProposerSlashingsQueryKey>
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
          Awaited<ReturnType<typeof client.eth.v1.beacon.pool.proposer_slashings.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconPoolProposerSlashingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEthV1BeaconPoolProposerSlashingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.pool.proposer_slashings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getEthV1BeaconPoolVoluntaryExitsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEthV1BeaconPoolVoluntaryExitsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.pool.voluntary_exits.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.eth.v1.beacon.pool.voluntary_exits.$get>>
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconPoolVoluntaryExitsQueryKey>
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
          Awaited<ReturnType<typeof client.eth.v1.beacon.pool.voluntary_exits.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconPoolVoluntaryExitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEthV1BeaconPoolVoluntaryExitsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.pool.voluntary_exits.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getEthV1BeaconPoolBlsToExecutionChangesQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getEthV1BeaconPoolBlsToExecutionChangesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.beacon.pool.bls_to_execution_changes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.eth.v1.beacon.pool.bls_to_execution_changes.$get>>
              >
            >
          >,
          ReturnType<typeof getEthV1BeaconPoolBlsToExecutionChangesQueryKey>
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
          Awaited<ReturnType<typeof client.eth.v1.beacon.pool.bls_to_execution_changes.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1BeaconPoolBlsToExecutionChangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEthV1BeaconPoolBlsToExecutionChangesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.beacon.pool.bls_to_execution_changes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v2.debug.beacon.states)[':state_id']['$get']>
  >,
) {
  return ['eth', '/eth/v2/debug/beacon/states/:state_id', toValue(args)] as const
}

export function getEthV2DebugBeaconStatesStateIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v2.debug.beacon.states)[':state_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV2DebugBeaconStatesStateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v2.debug.beacon.states[':state_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v2.debug.beacon.states)[':state_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eth.v2.debug.beacon.states)[':state_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEthV2DebugBeaconStatesStateIdQueryKey>
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
          Awaited<ReturnType<(typeof client.eth.v2.debug.beacon.states)[':state_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV2DebugBeaconStatesStateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV2DebugBeaconStatesStateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v2.debug.beacon.states[':state_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV2DebugBeaconHeadsQueryKey() {
  return ['eth', '/eth/v2/debug/beacon/heads'] as const
}

export function getEthV2DebugBeaconHeadsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEthV2DebugBeaconHeadsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v2.debug.beacon.heads.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.eth.v2.debug.beacon.heads.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.eth.v2.debug.beacon.heads.$get>>
              >
            >
          >,
          ReturnType<typeof getEthV2DebugBeaconHeadsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.debug.beacon.heads.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV2DebugBeaconHeadsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEthV2DebugBeaconHeadsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v2.debug.beacon.heads.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1DebugForkChoiceQueryKey() {
  return ['eth', '/eth/v1/debug/fork_choice'] as const
}

export function getEthV1DebugForkChoiceQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEthV1DebugForkChoiceQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.debug.fork_choice.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.debug.fork_choice.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.debug.fork_choice.$get>>>
            >
          >,
          ReturnType<typeof getEthV1DebugForkChoiceQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.debug.fork_choice.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1DebugForkChoiceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEthV1DebugForkChoiceQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.debug.fork_choice.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV2DebugForkChoiceQueryKey() {
  return ['eth', '/eth/v2/debug/fork_choice'] as const
}

export function getEthV2DebugForkChoiceQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEthV2DebugForkChoiceQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v2.debug.fork_choice.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.debug.fork_choice.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.debug.fork_choice.$get>>>
            >
          >,
          ReturnType<typeof getEthV2DebugForkChoiceQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.debug.fork_choice.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV2DebugForkChoiceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEthV2DebugForkChoiceQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v2.debug.fork_choice.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1NodeIdentityQueryKey() {
  return ['eth', '/eth/v1/node/identity'] as const
}

export function getEthV1NodeIdentityQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEthV1NodeIdentityQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.node.identity.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEthV1NodeIdentity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.identity.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.identity.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.identity.$get>>>
            >
          >,
          ReturnType<typeof getEthV1NodeIdentityQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.identity.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1NodeIdentityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEthV1NodeIdentityQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.node.identity.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1NodePeersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eth.v1.node.peers.$get>>,
) {
  return ['eth', '/eth/v1/node/peers', toValue(args)] as const
}

export function getEthV1NodePeersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eth.v1.node.peers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1NodePeersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.node.peers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEthV1NodePeers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.peers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eth.v1.node.peers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.peers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.peers.$get>>>
            >
          >,
          ReturnType<typeof getEthV1NodePeersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.peers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1NodePeersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1NodePeersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.node.peers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1NodePeersPeerIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.eth.v1.node.peers)[':peer_id']['$get']>>,
) {
  return ['eth', '/eth/v1/node/peers/:peer_id', toValue(args)] as const
}

export function getEthV1NodePeersPeerIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.eth.v1.node.peers)[':peer_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1NodePeersPeerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.node.peers[':peer_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.eth.v1.node.peers)[':peer_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eth.v1.node.peers)[':peer_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEthV1NodePeersPeerIdQueryKey>
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
          Awaited<ReturnType<(typeof client.eth.v1.node.peers)[':peer_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1NodePeersPeerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1NodePeersPeerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.node.peers[':peer_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1NodePeerCountQueryKey() {
  return ['eth', '/eth/v1/node/peer_count'] as const
}

export function getEthV1NodePeerCountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEthV1NodePeerCountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.node.peer_count.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEthV1NodePeerCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.peer_count.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.peer_count.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.peer_count.$get>>>
            >
          >,
          ReturnType<typeof getEthV1NodePeerCountQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.peer_count.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1NodePeerCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEthV1NodePeerCountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.node.peer_count.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1NodeVersionQueryKey() {
  return ['eth', '/eth/v1/node/version'] as const
}

export function getEthV1NodeVersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEthV1NodeVersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.node.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEthV1NodeVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.version.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.version.$get>>>
            >
          >,
          ReturnType<typeof getEthV1NodeVersionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1NodeVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEthV1NodeVersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.node.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV2NodeVersionQueryKey() {
  return ['eth', '/eth/v2/node/version'] as const
}

export function getEthV2NodeVersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEthV2NodeVersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v2.node.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEthV2NodeVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.node.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.node.version.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.node.version.$get>>>
            >
          >,
          ReturnType<typeof getEthV2NodeVersionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.node.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEthV2NodeVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEthV2NodeVersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v2.node.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1NodeSyncingQueryKey() {
  return ['eth', '/eth/v1/node/syncing'] as const
}

export function getEthV1NodeSyncingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEthV1NodeSyncingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.node.syncing.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEthV1NodeSyncing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.syncing.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.syncing.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.syncing.$get>>>
            >
          >,
          ReturnType<typeof getEthV1NodeSyncingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.syncing.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1NodeSyncingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEthV1NodeSyncingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.node.syncing.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1NodeHealthQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eth.v1.node.health.$get>>,
) {
  return ['eth', '/eth/v1/node/health', toValue(args)] as const
}

export function getEthV1NodeHealthQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eth.v1.node.health.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1NodeHealthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.node.health.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEthV1NodeHealth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.health.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eth.v1.node.health.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.health.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.health.$get>>>
            >
          >,
          ReturnType<typeof getEthV1NodeHealthQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1NodeHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1NodeHealthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.node.health.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1ConfigForkScheduleQueryKey() {
  return ['eth', '/eth/v1/config/fork_schedule'] as const
}

export function getEthV1ConfigForkScheduleQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEthV1ConfigForkScheduleQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.config.fork_schedule.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.eth.v1.config.fork_schedule.$get>>
              >
            >
          >,
          ReturnType<typeof getEthV1ConfigForkScheduleQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.config.fork_schedule.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1ConfigForkScheduleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEthV1ConfigForkScheduleQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.config.fork_schedule.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1ConfigSpecQueryKey() {
  return ['eth', '/eth/v1/config/spec'] as const
}

export function getEthV1ConfigSpecQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEthV1ConfigSpecQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.config.spec.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEthV1ConfigSpec<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.config.spec.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.config.spec.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.config.spec.$get>>>
            >
          >,
          ReturnType<typeof getEthV1ConfigSpecQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.config.spec.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1ConfigSpecQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEthV1ConfigSpecQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.config.spec.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1ConfigDepositContractQueryKey() {
  return ['eth', '/eth/v1/config/deposit_contract'] as const
}

export function getEthV1ConfigDepositContractQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEthV1ConfigDepositContractQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.config.deposit_contract.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.eth.v1.config.deposit_contract.$get>>
              >
            >
          >,
          ReturnType<typeof getEthV1ConfigDepositContractQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.config.deposit_contract.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1ConfigDepositContractQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEthV1ConfigDepositContractQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.config.deposit_contract.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.validator.duties.proposer)[':epoch']['$get']>
  >,
) {
  return ['eth', '/eth/v1/validator/duties/proposer/:epoch', toValue(args)] as const
}

export function getEthV1ValidatorDutiesProposerEpochQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.validator.duties.proposer)[':epoch']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1ValidatorDutiesProposerEpochQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.validator.duties.proposer[':epoch'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v1.validator.duties.proposer)[':epoch']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.eth.v1.validator.duties.proposer)[':epoch']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEthV1ValidatorDutiesProposerEpochQueryKey>
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
          Awaited<ReturnType<(typeof client.eth.v1.validator.duties.proposer)[':epoch']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1ValidatorDutiesProposerEpochQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1ValidatorDutiesProposerEpochQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.validator.duties.proposer[':epoch'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV2ValidatorDutiesProposerEpochQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v2.validator.duties.proposer)[':epoch']['$get']>
  >,
) {
  return ['eth', '/eth/v2/validator/duties/proposer/:epoch', toValue(args)] as const
}

export function getEthV2ValidatorDutiesProposerEpochQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v2.validator.duties.proposer)[':epoch']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV2ValidatorDutiesProposerEpochQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v2.validator.duties.proposer[':epoch'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v2.validator.duties.proposer)[':epoch']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.eth.v2.validator.duties.proposer)[':epoch']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEthV2ValidatorDutiesProposerEpochQueryKey>
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
          Awaited<ReturnType<(typeof client.eth.v2.validator.duties.proposer)[':epoch']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV2ValidatorDutiesProposerEpochQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV2ValidatorDutiesProposerEpochQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v2.validator.duties.proposer[':epoch'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v3.validator.blocks)[':slot']['$get']>
  >,
) {
  return ['eth', '/eth/v3/validator/blocks/:slot', toValue(args)] as const
}

export function getEthV3ValidatorBlocksSlotQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v3.validator.blocks)[':slot']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV3ValidatorBlocksSlotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v3.validator.blocks[':slot'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eth.v3.validator.blocks)[':slot']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eth.v3.validator.blocks)[':slot']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEthV3ValidatorBlocksSlotQueryKey>
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
          Awaited<ReturnType<(typeof client.eth.v3.validator.blocks)[':slot']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV3ValidatorBlocksSlotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV3ValidatorBlocksSlotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v3.validator.blocks[':slot'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.eth.v1.validator.attestation_data.$get>>,
) {
  return ['eth', '/eth/v1/validator/attestation_data', toValue(args)] as const
}

export function getEthV1ValidatorAttestationDataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eth.v1.validator.attestation_data.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1ValidatorAttestationDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.validator.attestation_data.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.eth.v1.validator.attestation_data.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.eth.v1.validator.attestation_data.$get>>
              >
            >
          >,
          ReturnType<typeof getEthV1ValidatorAttestationDataQueryKey>
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
          Awaited<ReturnType<typeof client.eth.v1.validator.attestation_data.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1ValidatorAttestationDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1ValidatorAttestationDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.validator.attestation_data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1ValidatorPayloadAttestationDataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.eth.v1.validator.payload_attestation_data.$get>
  >,
) {
  return ['eth', '/eth/v1/validator/payload_attestation_data', toValue(args)] as const
}

export function getEthV1ValidatorPayloadAttestationDataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.eth.v1.validator.payload_attestation_data.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1ValidatorPayloadAttestationDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.validator.payload_attestation_data.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.eth.v1.validator.payload_attestation_data.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.eth.v1.validator.payload_attestation_data.$get>>
              >
            >
          >,
          ReturnType<typeof getEthV1ValidatorPayloadAttestationDataQueryKey>
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
          Awaited<ReturnType<typeof client.eth.v1.validator.payload_attestation_data.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1ValidatorPayloadAttestationDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1ValidatorPayloadAttestationDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.validator.payload_attestation_data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEthV2ValidatorAggregateAttestationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.eth.v2.validator.aggregate_attestation.$get>
  >,
) {
  return ['eth', '/eth/v2/validator/aggregate_attestation', toValue(args)] as const
}

export function getEthV2ValidatorAggregateAttestationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.eth.v2.validator.aggregate_attestation.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV2ValidatorAggregateAttestationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v2.validator.aggregate_attestation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.eth.v2.validator.aggregate_attestation.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.eth.v2.validator.aggregate_attestation.$get>>
              >
            >
          >,
          ReturnType<typeof getEthV2ValidatorAggregateAttestationQueryKey>
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
          Awaited<ReturnType<typeof client.eth.v2.validator.aggregate_attestation.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV2ValidatorAggregateAttestationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV2ValidatorAggregateAttestationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v2.validator.aggregate_attestation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.eth.v1.validator.sync_committee_subscriptions.$post>
                >
              >
            >
          >,
          TError,
          InferRequestType<typeof client.eth.v1.validator.sync_committee_subscriptions.$post>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.eth.v1.validator.beacon_committee_selections.$post>
                >
              >
            >
          >,
          TError,
          InferRequestType<typeof client.eth.v1.validator.beacon_committee_selections.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.eth.v1.validator.sync_committee_contribution.$get>
  >,
) {
  return ['eth', '/eth/v1/validator/sync_committee_contribution', toValue(args)] as const
}

export function getEthV1ValidatorSyncCommitteeContributionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.eth.v1.validator.sync_committee_contribution.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1ValidatorSyncCommitteeContributionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.validator.sync_committee_contribution.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.eth.v1.validator.sync_committee_contribution.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.eth.v1.validator.sync_committee_contribution.$get>>
              >
            >
          >,
          ReturnType<typeof getEthV1ValidatorSyncCommitteeContributionQueryKey>
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
          Awaited<ReturnType<typeof client.eth.v1.validator.sync_committee_contribution.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1ValidatorSyncCommitteeContributionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1ValidatorSyncCommitteeContributionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.validator.sync_committee_contribution.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.eth.v1.validator.execution_payload_envelopes)[':slot'][':beacon_block_root']['$get']
    >
  >,
) {
  return [
    'eth',
    '/eth/v1/validator/execution_payload_envelopes/:slot/:beacon_block_root',
    toValue(args),
  ] as const
}

export function getEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRootQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.eth.v1.validator.execution_payload_envelopes)[':slot'][':beacon_block_root']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRootQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.validator.execution_payload_envelopes[':slot'][':beacon_block_root'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.eth.v1.validator.execution_payload_envelopes)[':slot'][':beacon_block_root']['$get']
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
                    (typeof client.eth.v1.validator.execution_payload_envelopes)[':slot'][':beacon_block_root']['$get']
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
                    (typeof client.eth.v1.validator.execution_payload_envelopes)[':slot'][':beacon_block_root']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRootQueryKey>
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
              (typeof client.eth.v1.validator.execution_payload_envelopes)[':slot'][':beacon_block_root']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRootQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRootQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.validator.execution_payload_envelopes[':slot'][':beacon_block_root'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getEthV1EventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eth.v1.events.$get>>,
) {
  return ['eth', '/eth/v1/events', toValue(args)] as const
}

export function getEthV1EventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eth.v1.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEthV1EventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eth.v1.events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEthV1Events<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eth.v1.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.events.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.events.$get>>>>
          >,
          ReturnType<typeof getEthV1EventsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEthV1EventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEthV1EventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eth.v1.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
