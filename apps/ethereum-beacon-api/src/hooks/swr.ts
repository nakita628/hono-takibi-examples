import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getEthKey() {
  return ['eth'] as const
}

export function getGetEthV1BeaconGenesisKey() {
  return ['eth', '/eth/v1/beacon/genesis'] as const
}

export function useGetEthV1BeaconGenesis<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.beacon.genesis.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEthV1BeaconGenesisKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.beacon.genesis.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v1.beacon.genesis.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconGenesis<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.beacon.genesis.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEthV1BeaconGenesisKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.beacon.genesis.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v1.beacon.genesis.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1BeaconStatesStateIdRootKey(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['root']['$get']>,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/root', args] as const
}

export function useGetEthV1BeaconStatesStateIdRoot<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['root']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['root']['$get']>>
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
        ? getGetEthV1BeaconStatesStateIdRootKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['root']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.beacon.states[':state_id'].root.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconStatesStateIdRoot<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['root']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['root']['$get']>>
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
        ? getGetEthV1BeaconStatesStateIdRootKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['root']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.beacon.states[':state_id'].root.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1BeaconStatesStateIdForkKey(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['fork']['$get']>,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/fork', args] as const
}

export function useGetEthV1BeaconStatesStateIdFork<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['fork']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['fork']['$get']>>
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
        ? getGetEthV1BeaconStatesStateIdForkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['fork']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.beacon.states[':state_id'].fork.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconStatesStateIdFork<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['fork']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['fork']['$get']>>
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
        ? getGetEthV1BeaconStatesStateIdForkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['fork']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.beacon.states[':state_id'].fork.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1BeaconStatesStateIdFinalityCheckpointsKey(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['finality_checkpoints']['$get']
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/finality_checkpoints', args] as const
}

export function useGetEthV1BeaconStatesStateIdFinalityCheckpoints<TError = unknown>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['finality_checkpoints']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEthV1BeaconStatesStateIdFinalityCheckpointsKey(args)
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
                (typeof client.eth.v1.beacon.states)[':state_id']['finality_checkpoints']['$get']
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
          client.eth.v1.beacon.states[':state_id'].finality_checkpoints.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconStatesStateIdFinalityCheckpoints<TError = unknown>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['finality_checkpoints']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEthV1BeaconStatesStateIdFinalityCheckpointsKey(args)
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
                (typeof client.eth.v1.beacon.states)[':state_id']['finality_checkpoints']['$get']
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
          client.eth.v1.beacon.states[':state_id'].finality_checkpoints.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1BeaconStatesStateIdValidatorsKey(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['validators']['$get']>,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/validators', args] as const
}

export function useGetEthV1BeaconStatesStateIdValidators<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['validators']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['validators']['$get']>
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
        ? getGetEthV1BeaconStatesStateIdValidatorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['validators']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.eth.v1.beacon.states[':state_id'].validators.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconStatesStateIdValidators<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['validators']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['validators']['$get']>
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
        ? getGetEthV1BeaconStatesStateIdValidatorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['validators']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.eth.v1.beacon.states[':state_id'].validators.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostEthV1BeaconStatesStateIdValidatorsKey() {
  return ['eth', '/eth/v1/beacon/states/:state_id/validators', 'POST'] as const
}

export function usePostEthV1BeaconStatesStateIdValidators<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['validators']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV1BeaconStatesStateIdValidatorsKey()
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
            (typeof client.eth.v1.beacon.states)[':state_id']['validators']['$post']
          >
        },
      ) =>
        parseResponse(
          client.eth.v1.beacon.states[':state_id'].validators.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEthV1BeaconStatesStateIdValidatorsValidatorIdKey(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['validators'][':validator_id']['$get']
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/validators/:validator_id', args] as const
}

export function useGetEthV1BeaconStatesStateIdValidatorsValidatorId<TError = unknown>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['validators'][':validator_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEthV1BeaconStatesStateIdValidatorsValidatorIdKey(args)
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
                (typeof client.eth.v1.beacon.states)[':state_id']['validators'][':validator_id']['$get']
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
          client.eth.v1.beacon.states[':state_id'].validators[':validator_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconStatesStateIdValidatorsValidatorId<TError = unknown>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['validators'][':validator_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEthV1BeaconStatesStateIdValidatorsValidatorIdKey(args)
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
                (typeof client.eth.v1.beacon.states)[':state_id']['validators'][':validator_id']['$get']
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
          client.eth.v1.beacon.states[':state_id'].validators[':validator_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1BeaconStatesStateIdValidatorBalancesKey(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['validator_balances']['$get']
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/validator_balances', args] as const
}

export function useGetEthV1BeaconStatesStateIdValidatorBalances<TError = unknown>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['validator_balances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEthV1BeaconStatesStateIdValidatorBalancesKey(args)
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
                (typeof client.eth.v1.beacon.states)[':state_id']['validator_balances']['$get']
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
          client.eth.v1.beacon.states[':state_id'].validator_balances.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconStatesStateIdValidatorBalances<TError = unknown>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['validator_balances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEthV1BeaconStatesStateIdValidatorBalancesKey(args)
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
                (typeof client.eth.v1.beacon.states)[':state_id']['validator_balances']['$get']
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
          client.eth.v1.beacon.states[':state_id'].validator_balances.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostEthV1BeaconStatesStateIdValidatorBalancesKey() {
  return ['eth', '/eth/v1/beacon/states/:state_id/validator_balances', 'POST'] as const
}

export function usePostEthV1BeaconStatesStateIdValidatorBalances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.eth.v1.beacon.states)[':state_id']['validator_balances']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV1BeaconStatesStateIdValidatorBalancesKey()
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
            (typeof client.eth.v1.beacon.states)[':state_id']['validator_balances']['$post']
          >
        },
      ) =>
        parseResponse(
          client.eth.v1.beacon.states[':state_id'].validator_balances.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostEthV1BeaconStatesStateIdValidatorIdentitiesKey() {
  return ['eth', '/eth/v1/beacon/states/:state_id/validator_identities', 'POST'] as const
}

export function usePostEthV1BeaconStatesStateIdValidatorIdentities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.eth.v1.beacon.states)[':state_id']['validator_identities']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV1BeaconStatesStateIdValidatorIdentitiesKey()
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
            (typeof client.eth.v1.beacon.states)[':state_id']['validator_identities']['$post']
          >
        },
      ) =>
        parseResponse(
          client.eth.v1.beacon.states[':state_id'].validator_identities.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostEthV1BeaconStatesStateIdBuildersKey() {
  return ['eth', '/eth/v1/beacon/states/:state_id/builders', 'POST'] as const
}

export function usePostEthV1BeaconStatesStateIdBuilders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['builders']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV1BeaconStatesStateIdBuildersKey()
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
            (typeof client.eth.v1.beacon.states)[':state_id']['builders']['$post']
          >
        },
      ) =>
        parseResponse(client.eth.v1.beacon.states[':state_id'].builders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEthV1BeaconStatesStateIdCommitteesKey(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['committees']['$get']>,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/committees', args] as const
}

export function useGetEthV1BeaconStatesStateIdCommittees<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['committees']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['committees']['$get']>
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
        ? getGetEthV1BeaconStatesStateIdCommitteesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['committees']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.eth.v1.beacon.states[':state_id'].committees.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconStatesStateIdCommittees<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['committees']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['committees']['$get']>
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
        ? getGetEthV1BeaconStatesStateIdCommitteesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['committees']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.eth.v1.beacon.states[':state_id'].committees.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1BeaconStatesStateIdSyncCommitteesKey(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['sync_committees']['$get']
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/sync_committees', args] as const
}

export function useGetEthV1BeaconStatesStateIdSyncCommittees<TError = unknown>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['sync_committees']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEthV1BeaconStatesStateIdSyncCommitteesKey(args)
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
                (typeof client.eth.v1.beacon.states)[':state_id']['sync_committees']['$get']
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
          client.eth.v1.beacon.states[':state_id'].sync_committees.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconStatesStateIdSyncCommittees<TError = unknown>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['sync_committees']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEthV1BeaconStatesStateIdSyncCommitteesKey(args)
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
                (typeof client.eth.v1.beacon.states)[':state_id']['sync_committees']['$get']
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
          client.eth.v1.beacon.states[':state_id'].sync_committees.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1BeaconStatesStateIdPtcKey(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['ptc']['$get']>,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/ptc', args] as const
}

export function useGetEthV1BeaconStatesStateIdPtc<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['ptc']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['ptc']['$get']>>
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
        ? getGetEthV1BeaconStatesStateIdPtcKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['ptc']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.beacon.states[':state_id'].ptc.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconStatesStateIdPtc<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['ptc']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['ptc']['$get']>>
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
        ? getGetEthV1BeaconStatesStateIdPtcKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['ptc']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.beacon.states[':state_id'].ptc.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1BeaconStatesStateIdRandaoKey(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['randao']['$get']>,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/randao', args] as const
}

export function useGetEthV1BeaconStatesStateIdRandao<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['randao']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['randao']['$get']>>
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
        ? getGetEthV1BeaconStatesStateIdRandaoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['randao']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.beacon.states[':state_id'].randao.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconStatesStateIdRandao<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['randao']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['randao']['$get']>>
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
        ? getGetEthV1BeaconStatesStateIdRandaoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.states)[':state_id']['randao']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.beacon.states[':state_id'].randao.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1BeaconStatesStateIdPendingConsolidationsKey(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['pending_consolidations']['$get']
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/pending_consolidations', args] as const
}

export function useGetEthV1BeaconStatesStateIdPendingConsolidations<TError = unknown>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['pending_consolidations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEthV1BeaconStatesStateIdPendingConsolidationsKey(args)
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
                (typeof client.eth.v1.beacon.states)[':state_id']['pending_consolidations']['$get']
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
          client.eth.v1.beacon.states[':state_id'].pending_consolidations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconStatesStateIdPendingConsolidations<TError = unknown>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['pending_consolidations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEthV1BeaconStatesStateIdPendingConsolidationsKey(args)
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
                (typeof client.eth.v1.beacon.states)[':state_id']['pending_consolidations']['$get']
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
          client.eth.v1.beacon.states[':state_id'].pending_consolidations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1BeaconStatesStateIdPendingDepositsKey(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['pending_deposits']['$get']
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/pending_deposits', args] as const
}

export function useGetEthV1BeaconStatesStateIdPendingDeposits<TError = unknown>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['pending_deposits']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEthV1BeaconStatesStateIdPendingDepositsKey(args)
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
                (typeof client.eth.v1.beacon.states)[':state_id']['pending_deposits']['$get']
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
          client.eth.v1.beacon.states[':state_id'].pending_deposits.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconStatesStateIdPendingDeposits<TError = unknown>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['pending_deposits']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEthV1BeaconStatesStateIdPendingDepositsKey(args)
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
                (typeof client.eth.v1.beacon.states)[':state_id']['pending_deposits']['$get']
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
          client.eth.v1.beacon.states[':state_id'].pending_deposits.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1BeaconStatesStateIdPendingPartialWithdrawalsKey(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['pending_partial_withdrawals']['$get']
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/pending_partial_withdrawals', args] as const
}

export function useGetEthV1BeaconStatesStateIdPendingPartialWithdrawals<TError = unknown>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['pending_partial_withdrawals']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEthV1BeaconStatesStateIdPendingPartialWithdrawalsKey(args)
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
                (typeof client.eth.v1.beacon.states)[':state_id']['pending_partial_withdrawals']['$get']
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
          client.eth.v1.beacon.states[':state_id'].pending_partial_withdrawals.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconStatesStateIdPendingPartialWithdrawals<TError = unknown>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['pending_partial_withdrawals']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEthV1BeaconStatesStateIdPendingPartialWithdrawalsKey(args)
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
                (typeof client.eth.v1.beacon.states)[':state_id']['pending_partial_withdrawals']['$get']
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
          client.eth.v1.beacon.states[':state_id'].pending_partial_withdrawals.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1BeaconStatesStateIdProposerLookaheadKey(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['proposer_lookahead']['$get']
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/proposer_lookahead', args] as const
}

export function useGetEthV1BeaconStatesStateIdProposerLookahead<TError = unknown>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['proposer_lookahead']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEthV1BeaconStatesStateIdProposerLookaheadKey(args)
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
                (typeof client.eth.v1.beacon.states)[':state_id']['proposer_lookahead']['$get']
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
          client.eth.v1.beacon.states[':state_id'].proposer_lookahead.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconStatesStateIdProposerLookahead<TError = unknown>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['proposer_lookahead']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEthV1BeaconStatesStateIdProposerLookaheadKey(args)
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
                (typeof client.eth.v1.beacon.states)[':state_id']['proposer_lookahead']['$get']
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
          client.eth.v1.beacon.states[':state_id'].proposer_lookahead.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1BeaconStatesStateIdBuilderPendingWithdrawalsKey(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_withdrawals']['$get']
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/builder_pending_withdrawals', args] as const
}

export function useGetEthV1BeaconStatesStateIdBuilderPendingWithdrawals<TError = unknown>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_withdrawals']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEthV1BeaconStatesStateIdBuilderPendingWithdrawalsKey(args)
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
                (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_withdrawals']['$get']
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
          client.eth.v1.beacon.states[':state_id'].builder_pending_withdrawals.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconStatesStateIdBuilderPendingWithdrawals<TError = unknown>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_withdrawals']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEthV1BeaconStatesStateIdBuilderPendingWithdrawalsKey(args)
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
                (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_withdrawals']['$get']
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
          client.eth.v1.beacon.states[':state_id'].builder_pending_withdrawals.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1BeaconStatesStateIdBuilderPendingPaymentsKey(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_payments']['$get']
  >,
) {
  return ['eth', '/eth/v1/beacon/states/:state_id/builder_pending_payments', args] as const
}

export function useGetEthV1BeaconStatesStateIdBuilderPendingPayments<TError = unknown>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_payments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEthV1BeaconStatesStateIdBuilderPendingPaymentsKey(args)
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
                (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_payments']['$get']
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
          client.eth.v1.beacon.states[':state_id'].builder_pending_payments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconStatesStateIdBuilderPendingPayments<TError = unknown>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_payments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEthV1BeaconStatesStateIdBuilderPendingPaymentsKey(args)
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
                (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_payments']['$get']
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
          client.eth.v1.beacon.states[':state_id'].builder_pending_payments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1BeaconHeadersKey(
  args: InferRequestType<typeof client.eth.v1.beacon.headers.$get>,
) {
  return ['eth', '/eth/v1/beacon/headers', args] as const
}

export function useGetEthV1BeaconHeaders<TError = unknown>(
  args: InferRequestType<typeof client.eth.v1.beacon.headers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.beacon.headers.$get>>>
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
        ? getGetEthV1BeaconHeadersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.beacon.headers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v1.beacon.headers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconHeaders<TError = unknown>(
  args: InferRequestType<typeof client.eth.v1.beacon.headers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.beacon.headers.$get>>>
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
        ? getGetEthV1BeaconHeadersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.beacon.headers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v1.beacon.headers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1BeaconHeadersBlockIdKey(
  args: InferRequestType<(typeof client.eth.v1.beacon.headers)[':block_id']['$get']>,
) {
  return ['eth', '/eth/v1/beacon/headers/:block_id', args] as const
}

export function useGetEthV1BeaconHeadersBlockId<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v1.beacon.headers)[':block_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.headers)[':block_id']['$get']>>
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
        ? getGetEthV1BeaconHeadersBlockIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.headers)[':block_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.beacon.headers[':block_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconHeadersBlockId<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v1.beacon.headers)[':block_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.headers)[':block_id']['$get']>>
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
        ? getGetEthV1BeaconHeadersBlockIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.headers)[':block_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.beacon.headers[':block_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEthV2BeaconBlindedBlocksKey() {
  return ['eth', '/eth/v2/beacon/blinded_blocks', 'POST'] as const
}

export function usePostEthV2BeaconBlindedBlocks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.beacon.blinded_blocks.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.eth.v2.beacon.blinded_blocks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV2BeaconBlindedBlocksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.eth.v2.beacon.blinded_blocks.$post> },
      ) => parseResponse(client.eth.v2.beacon.blinded_blocks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEthV2BeaconBlocksKey() {
  return ['eth', '/eth/v2/beacon/blocks', 'POST'] as const
}

export function usePostEthV2BeaconBlocks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.beacon.blocks.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.eth.v2.beacon.blocks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV2BeaconBlocksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.eth.v2.beacon.blocks.$post> },
      ) => parseResponse(client.eth.v2.beacon.blocks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEthV1BeaconExecutionPayloadBidsKey() {
  return ['eth', '/eth/v1/beacon/execution_payload_bids', 'POST'] as const
}

export function usePostEthV1BeaconExecutionPayloadBids<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.execution_payload_bids.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.eth.v1.beacon.execution_payload_bids.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV1BeaconExecutionPayloadBidsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.eth.v1.beacon.execution_payload_bids.$post> },
      ) => parseResponse(client.eth.v1.beacon.execution_payload_bids.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEthV1BeaconExecutionPayloadEnvelopesKey() {
  return ['eth', '/eth/v1/beacon/execution_payload_envelopes', 'POST'] as const
}

export function usePostEthV1BeaconExecutionPayloadEnvelopes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.execution_payload_envelopes.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.eth.v1.beacon.execution_payload_envelopes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV1BeaconExecutionPayloadEnvelopesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.eth.v1.beacon.execution_payload_envelopes.$post> },
      ) =>
        parseResponse(client.eth.v1.beacon.execution_payload_envelopes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEthV1BeaconExecutionPayloadEnvelopesBlockIdKey(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.execution_payload_envelopes)[':block_id']['$get']
  >,
) {
  return ['eth', '/eth/v1/beacon/execution_payload_envelopes/:block_id', args] as const
}

export function useGetEthV1BeaconExecutionPayloadEnvelopesBlockId<TError = unknown>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.execution_payload_envelopes)[':block_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEthV1BeaconExecutionPayloadEnvelopesBlockIdKey(args)
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
                (typeof client.eth.v1.beacon.execution_payload_envelopes)[':block_id']['$get']
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
          client.eth.v1.beacon.execution_payload_envelopes[':block_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconExecutionPayloadEnvelopesBlockId<TError = unknown>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.execution_payload_envelopes)[':block_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEthV1BeaconExecutionPayloadEnvelopesBlockIdKey(args)
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
                (typeof client.eth.v1.beacon.execution_payload_envelopes)[':block_id']['$get']
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
          client.eth.v1.beacon.execution_payload_envelopes[':block_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1BeaconProposerPreferencesKey(
  args: InferRequestType<typeof client.eth.v1.beacon.proposer_preferences.$get>,
) {
  return ['eth', '/eth/v1/beacon/proposer_preferences', args] as const
}

export function useGetEthV1BeaconProposerPreferences<TError = unknown>(
  args: InferRequestType<typeof client.eth.v1.beacon.proposer_preferences.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.beacon.proposer_preferences.$get>>
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
        ? getGetEthV1BeaconProposerPreferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.beacon.proposer_preferences.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.beacon.proposer_preferences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconProposerPreferences<TError = unknown>(
  args: InferRequestType<typeof client.eth.v1.beacon.proposer_preferences.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.beacon.proposer_preferences.$get>>
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
        ? getGetEthV1BeaconProposerPreferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.beacon.proposer_preferences.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.beacon.proposer_preferences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEthV2BeaconBlocksBlockIdKey(
  args: InferRequestType<(typeof client.eth.v2.beacon.blocks)[':block_id']['$get']>,
) {
  return ['eth', '/eth/v2/beacon/blocks/:block_id', args] as const
}

export function useGetEthV2BeaconBlocksBlockId<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v2.beacon.blocks)[':block_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v2.beacon.blocks)[':block_id']['$get']>>
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
        ? getGetEthV2BeaconBlocksBlockIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v2.beacon.blocks)[':block_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v2.beacon.blocks[':block_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV2BeaconBlocksBlockId<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v2.beacon.blocks)[':block_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v2.beacon.blocks)[':block_id']['$get']>>
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
        ? getGetEthV2BeaconBlocksBlockIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v2.beacon.blocks)[':block_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v2.beacon.blocks[':block_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1BeaconBlocksBlockIdRootKey(
  args: InferRequestType<(typeof client.eth.v1.beacon.blocks)[':block_id']['root']['$get']>,
) {
  return ['eth', '/eth/v1/beacon/blocks/:block_id/root', args] as const
}

export function useGetEthV1BeaconBlocksBlockIdRoot<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v1.beacon.blocks)[':block_id']['root']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.blocks)[':block_id']['root']['$get']>>
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
        ? getGetEthV1BeaconBlocksBlockIdRootKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.blocks)[':block_id']['root']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.beacon.blocks[':block_id'].root.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconBlocksBlockIdRoot<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v1.beacon.blocks)[':block_id']['root']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.blocks)[':block_id']['root']['$get']>>
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
        ? getGetEthV1BeaconBlocksBlockIdRootKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.blocks)[':block_id']['root']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.beacon.blocks[':block_id'].root.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEthV2BeaconBlocksBlockIdAttestationsKey(
  args: InferRequestType<(typeof client.eth.v2.beacon.blocks)[':block_id']['attestations']['$get']>,
) {
  return ['eth', '/eth/v2/beacon/blocks/:block_id/attestations', args] as const
}

export function useGetEthV2BeaconBlocksBlockIdAttestations<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v2.beacon.blocks)[':block_id']['attestations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.eth.v2.beacon.blocks)[':block_id']['attestations']['$get']>
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
        ? getGetEthV2BeaconBlocksBlockIdAttestationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.eth.v2.beacon.blocks)[':block_id']['attestations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.eth.v2.beacon.blocks[':block_id'].attestations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV2BeaconBlocksBlockIdAttestations<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v2.beacon.blocks)[':block_id']['attestations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.eth.v2.beacon.blocks)[':block_id']['attestations']['$get']>
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
        ? getGetEthV2BeaconBlocksBlockIdAttestationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.eth.v2.beacon.blocks)[':block_id']['attestations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.eth.v2.beacon.blocks[':block_id'].attestations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1BeaconBlobsBlockIdKey(
  args: InferRequestType<(typeof client.eth.v1.beacon.blobs)[':block_id']['$get']>,
) {
  return ['eth', '/eth/v1/beacon/blobs/:block_id', args] as const
}

export function useGetEthV1BeaconBlobsBlockId<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v1.beacon.blobs)[':block_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.blobs)[':block_id']['$get']>>
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
        ? getGetEthV1BeaconBlobsBlockIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.blobs)[':block_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v1.beacon.blobs[':block_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconBlobsBlockId<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v1.beacon.blobs)[':block_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.blobs)[':block_id']['$get']>>
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
        ? getGetEthV1BeaconBlobsBlockIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.blobs)[':block_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v1.beacon.blobs[':block_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1DebugBeaconDataColumnSidecarsBlockIdKey(
  args: InferRequestType<
    (typeof client.eth.v1.debug.beacon.data_column_sidecars)[':block_id']['$get']
  >,
) {
  return ['eth', '/eth/v1/debug/beacon/data_column_sidecars/:block_id', args] as const
}

export function useGetEthV1DebugBeaconDataColumnSidecarsBlockId<TError = unknown>(
  args: InferRequestType<
    (typeof client.eth.v1.debug.beacon.data_column_sidecars)[':block_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEthV1DebugBeaconDataColumnSidecarsBlockIdKey(args)
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
                (typeof client.eth.v1.debug.beacon.data_column_sidecars)[':block_id']['$get']
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
          client.eth.v1.debug.beacon.data_column_sidecars[':block_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1DebugBeaconDataColumnSidecarsBlockId<TError = unknown>(
  args: InferRequestType<
    (typeof client.eth.v1.debug.beacon.data_column_sidecars)[':block_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEthV1DebugBeaconDataColumnSidecarsBlockIdKey(args)
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
                (typeof client.eth.v1.debug.beacon.data_column_sidecars)[':block_id']['$get']
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
          client.eth.v1.debug.beacon.data_column_sidecars[':block_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostEthV1BeaconRewardsSyncCommitteeBlockIdKey() {
  return ['eth', '/eth/v1/beacon/rewards/sync_committee/:block_id', 'POST'] as const
}

export function usePostEthV1BeaconRewardsSyncCommitteeBlockId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.eth.v1.beacon.rewards.sync_committee)[':block_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV1BeaconRewardsSyncCommitteeBlockIdKey()
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
            (typeof client.eth.v1.beacon.rewards.sync_committee)[':block_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.eth.v1.beacon.rewards.sync_committee[':block_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEthV1BeaconRewardsBlocksBlockIdKey(
  args: InferRequestType<(typeof client.eth.v1.beacon.rewards.blocks)[':block_id']['$get']>,
) {
  return ['eth', '/eth/v1/beacon/rewards/blocks/:block_id', args] as const
}

export function useGetEthV1BeaconRewardsBlocksBlockId<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v1.beacon.rewards.blocks)[':block_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.rewards.blocks)[':block_id']['$get']>>
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
        ? getGetEthV1BeaconRewardsBlocksBlockIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.rewards.blocks)[':block_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.beacon.rewards.blocks[':block_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconRewardsBlocksBlockId<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v1.beacon.rewards.blocks)[':block_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.rewards.blocks)[':block_id']['$get']>>
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
        ? getGetEthV1BeaconRewardsBlocksBlockIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.rewards.blocks)[':block_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.beacon.rewards.blocks[':block_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEthV1BeaconRewardsAttestationsEpochKey() {
  return ['eth', '/eth/v1/beacon/rewards/attestations/:epoch', 'POST'] as const
}

export function usePostEthV1BeaconRewardsAttestationsEpoch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eth.v1.beacon.rewards.attestations)[':epoch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.eth.v1.beacon.rewards.attestations)[':epoch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV1BeaconRewardsAttestationsEpochKey()
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
            (typeof client.eth.v1.beacon.rewards.attestations)[':epoch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.eth.v1.beacon.rewards.attestations[':epoch'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEthV1BeaconBlindedBlocksBlockIdKey(
  args: InferRequestType<(typeof client.eth.v1.beacon.blinded_blocks)[':block_id']['$get']>,
) {
  return ['eth', '/eth/v1/beacon/blinded_blocks/:block_id', args] as const
}

export function useGetEthV1BeaconBlindedBlocksBlockId<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v1.beacon.blinded_blocks)[':block_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.blinded_blocks)[':block_id']['$get']>>
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
        ? getGetEthV1BeaconBlindedBlocksBlockIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.blinded_blocks)[':block_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.beacon.blinded_blocks[':block_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconBlindedBlocksBlockId<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v1.beacon.blinded_blocks)[':block_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.blinded_blocks)[':block_id']['$get']>>
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
        ? getGetEthV1BeaconBlindedBlocksBlockIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.beacon.blinded_blocks)[':block_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.beacon.blinded_blocks[':block_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1BeaconLightClientBootstrapBlockRootKey(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.light_client.bootstrap)[':block_root']['$get']
  >,
) {
  return ['eth', '/eth/v1/beacon/light_client/bootstrap/:block_root', args] as const
}

export function useGetEthV1BeaconLightClientBootstrapBlockRoot<TError = unknown>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.light_client.bootstrap)[':block_root']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEthV1BeaconLightClientBootstrapBlockRootKey(args)
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
                (typeof client.eth.v1.beacon.light_client.bootstrap)[':block_root']['$get']
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
          client.eth.v1.beacon.light_client.bootstrap[':block_root'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconLightClientBootstrapBlockRoot<TError = unknown>(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.light_client.bootstrap)[':block_root']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEthV1BeaconLightClientBootstrapBlockRootKey(args)
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
                (typeof client.eth.v1.beacon.light_client.bootstrap)[':block_root']['$get']
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
          client.eth.v1.beacon.light_client.bootstrap[':block_root'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1BeaconLightClientUpdatesKey(
  args: InferRequestType<typeof client.eth.v1.beacon.light_client.updates.$get>,
) {
  return ['eth', '/eth/v1/beacon/light_client/updates', args] as const
}

export function useGetEthV1BeaconLightClientUpdates<TError = unknown>(
  args: InferRequestType<typeof client.eth.v1.beacon.light_client.updates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.updates.$get>>
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
        ? getGetEthV1BeaconLightClientUpdatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.updates.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.beacon.light_client.updates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconLightClientUpdates<TError = unknown>(
  args: InferRequestType<typeof client.eth.v1.beacon.light_client.updates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.updates.$get>>
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
        ? getGetEthV1BeaconLightClientUpdatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.updates.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.beacon.light_client.updates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1BeaconLightClientFinalityUpdateKey() {
  return ['eth', '/eth/v1/beacon/light_client/finality_update'] as const
}

export function useGetEthV1BeaconLightClientFinalityUpdate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.finality_update.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEthV1BeaconLightClientFinalityUpdateKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.finality_update.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.eth.v1.beacon.light_client.finality_update.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconLightClientFinalityUpdate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.finality_update.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEthV1BeaconLightClientFinalityUpdateKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.finality_update.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.eth.v1.beacon.light_client.finality_update.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1BeaconLightClientOptimisticUpdateKey() {
  return ['eth', '/eth/v1/beacon/light_client/optimistic_update'] as const
}

export function useGetEthV1BeaconLightClientOptimisticUpdate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.optimistic_update.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEthV1BeaconLightClientOptimisticUpdateKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.optimistic_update.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.eth.v1.beacon.light_client.optimistic_update.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconLightClientOptimisticUpdate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.optimistic_update.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEthV1BeaconLightClientOptimisticUpdateKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.beacon.light_client.optimistic_update.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.eth.v1.beacon.light_client.optimistic_update.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEthV2BeaconPoolAttestationsKey(
  args: InferRequestType<typeof client.eth.v2.beacon.pool.attestations.$get>,
) {
  return ['eth', '/eth/v2/beacon/pool/attestations', args] as const
}

export function useGetEthV2BeaconPoolAttestations<TError = unknown>(
  args: InferRequestType<typeof client.eth.v2.beacon.pool.attestations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attestations.$get>>
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
        ? getGetEthV2BeaconPoolAttestationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attestations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v2.beacon.pool.attestations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV2BeaconPoolAttestations<TError = unknown>(
  args: InferRequestType<typeof client.eth.v2.beacon.pool.attestations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attestations.$get>>
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
        ? getGetEthV2BeaconPoolAttestationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attestations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v2.beacon.pool.attestations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEthV2BeaconPoolAttestationsKey() {
  return ['eth', '/eth/v2/beacon/pool/attestations', 'POST'] as const
}

export function usePostEthV2BeaconPoolAttestations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attestations.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.eth.v2.beacon.pool.attestations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV2BeaconPoolAttestationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.eth.v2.beacon.pool.attestations.$post> },
      ) => parseResponse(client.eth.v2.beacon.pool.attestations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEthV1BeaconPoolPayloadAttestationsKey(
  args: InferRequestType<typeof client.eth.v1.beacon.pool.payload_attestations.$get>,
) {
  return ['eth', '/eth/v1/beacon/pool/payload_attestations', args] as const
}

export function useGetEthV1BeaconPoolPayloadAttestations<TError = unknown>(
  args: InferRequestType<typeof client.eth.v1.beacon.pool.payload_attestations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.beacon.pool.payload_attestations.$get>>
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
        ? getGetEthV1BeaconPoolPayloadAttestationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.beacon.pool.payload_attestations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.beacon.pool.payload_attestations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconPoolPayloadAttestations<TError = unknown>(
  args: InferRequestType<typeof client.eth.v1.beacon.pool.payload_attestations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.beacon.pool.payload_attestations.$get>>
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
        ? getGetEthV1BeaconPoolPayloadAttestationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.beacon.pool.payload_attestations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.beacon.pool.payload_attestations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEthV1BeaconPoolPayloadAttestationsKey() {
  return ['eth', '/eth/v1/beacon/pool/payload_attestations', 'POST'] as const
}

export function usePostEthV1BeaconPoolPayloadAttestations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.pool.payload_attestations.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.eth.v1.beacon.pool.payload_attestations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV1BeaconPoolPayloadAttestationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.eth.v1.beacon.pool.payload_attestations.$post> },
      ) => parseResponse(client.eth.v1.beacon.pool.payload_attestations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEthV2BeaconPoolAttesterSlashingsKey() {
  return ['eth', '/eth/v2/beacon/pool/attester_slashings'] as const
}

export function useGetEthV2BeaconPoolAttesterSlashings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attester_slashings.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEthV2BeaconPoolAttesterSlashingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attester_slashings.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v2.beacon.pool.attester_slashings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV2BeaconPoolAttesterSlashings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attester_slashings.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEthV2BeaconPoolAttesterSlashingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attester_slashings.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v2.beacon.pool.attester_slashings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEthV2BeaconPoolAttesterSlashingsKey() {
  return ['eth', '/eth/v2/beacon/pool/attester_slashings', 'POST'] as const
}

export function usePostEthV2BeaconPoolAttesterSlashings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v2.beacon.pool.attester_slashings.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.eth.v2.beacon.pool.attester_slashings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV2BeaconPoolAttesterSlashingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.eth.v2.beacon.pool.attester_slashings.$post> },
      ) => parseResponse(client.eth.v2.beacon.pool.attester_slashings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEthV1BeaconPoolProposerSlashingsKey() {
  return ['eth', '/eth/v1/beacon/pool/proposer_slashings'] as const
}

export function useGetEthV1BeaconPoolProposerSlashings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.pool.proposer_slashings.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEthV1BeaconPoolProposerSlashingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.beacon.pool.proposer_slashings.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.beacon.pool.proposer_slashings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconPoolProposerSlashings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.pool.proposer_slashings.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEthV1BeaconPoolProposerSlashingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.beacon.pool.proposer_slashings.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.beacon.pool.proposer_slashings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEthV1BeaconPoolProposerSlashingsKey() {
  return ['eth', '/eth/v1/beacon/pool/proposer_slashings', 'POST'] as const
}

export function usePostEthV1BeaconPoolProposerSlashings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.pool.proposer_slashings.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.eth.v1.beacon.pool.proposer_slashings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV1BeaconPoolProposerSlashingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.eth.v1.beacon.pool.proposer_slashings.$post> },
      ) => parseResponse(client.eth.v1.beacon.pool.proposer_slashings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEthV1BeaconPoolSyncCommitteesKey() {
  return ['eth', '/eth/v1/beacon/pool/sync_committees', 'POST'] as const
}

export function usePostEthV1BeaconPoolSyncCommittees<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.pool.sync_committees.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.eth.v1.beacon.pool.sync_committees.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV1BeaconPoolSyncCommitteesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.eth.v1.beacon.pool.sync_committees.$post> },
      ) => parseResponse(client.eth.v1.beacon.pool.sync_committees.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEthV1BeaconPoolVoluntaryExitsKey() {
  return ['eth', '/eth/v1/beacon/pool/voluntary_exits'] as const
}

export function useGetEthV1BeaconPoolVoluntaryExits<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.pool.voluntary_exits.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEthV1BeaconPoolVoluntaryExitsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.beacon.pool.voluntary_exits.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.beacon.pool.voluntary_exits.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconPoolVoluntaryExits<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.pool.voluntary_exits.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEthV1BeaconPoolVoluntaryExitsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.beacon.pool.voluntary_exits.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.beacon.pool.voluntary_exits.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEthV1BeaconPoolVoluntaryExitsKey() {
  return ['eth', '/eth/v1/beacon/pool/voluntary_exits', 'POST'] as const
}

export function usePostEthV1BeaconPoolVoluntaryExits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.pool.voluntary_exits.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.eth.v1.beacon.pool.voluntary_exits.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV1BeaconPoolVoluntaryExitsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.eth.v1.beacon.pool.voluntary_exits.$post> },
      ) => parseResponse(client.eth.v1.beacon.pool.voluntary_exits.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEthV1BeaconPoolBlsToExecutionChangesKey() {
  return ['eth', '/eth/v1/beacon/pool/bls_to_execution_changes'] as const
}

export function useGetEthV1BeaconPoolBlsToExecutionChanges<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.pool.bls_to_execution_changes.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEthV1BeaconPoolBlsToExecutionChangesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.beacon.pool.bls_to_execution_changes.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.eth.v1.beacon.pool.bls_to_execution_changes.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1BeaconPoolBlsToExecutionChanges<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.pool.bls_to_execution_changes.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEthV1BeaconPoolBlsToExecutionChangesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.beacon.pool.bls_to_execution_changes.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.eth.v1.beacon.pool.bls_to_execution_changes.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostEthV1BeaconPoolBlsToExecutionChangesKey() {
  return ['eth', '/eth/v1/beacon/pool/bls_to_execution_changes', 'POST'] as const
}

export function usePostEthV1BeaconPoolBlsToExecutionChanges<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.beacon.pool.bls_to_execution_changes.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.eth.v1.beacon.pool.bls_to_execution_changes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV1BeaconPoolBlsToExecutionChangesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.eth.v1.beacon.pool.bls_to_execution_changes.$post>
        },
      ) =>
        parseResponse(client.eth.v1.beacon.pool.bls_to_execution_changes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEthV2DebugBeaconStatesStateIdKey(
  args: InferRequestType<(typeof client.eth.v2.debug.beacon.states)[':state_id']['$get']>,
) {
  return ['eth', '/eth/v2/debug/beacon/states/:state_id', args] as const
}

export function useGetEthV2DebugBeaconStatesStateId<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v2.debug.beacon.states)[':state_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v2.debug.beacon.states)[':state_id']['$get']>>
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
        ? getGetEthV2DebugBeaconStatesStateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v2.debug.beacon.states)[':state_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v2.debug.beacon.states[':state_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV2DebugBeaconStatesStateId<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v2.debug.beacon.states)[':state_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v2.debug.beacon.states)[':state_id']['$get']>>
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
        ? getGetEthV2DebugBeaconStatesStateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v2.debug.beacon.states)[':state_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v2.debug.beacon.states[':state_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEthV2DebugBeaconHeadsKey() {
  return ['eth', '/eth/v2/debug/beacon/heads'] as const
}

export function useGetEthV2DebugBeaconHeads<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.debug.beacon.heads.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEthV2DebugBeaconHeadsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.debug.beacon.heads.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v2.debug.beacon.heads.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV2DebugBeaconHeads<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.debug.beacon.heads.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEthV2DebugBeaconHeadsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.debug.beacon.heads.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v2.debug.beacon.heads.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1DebugForkChoiceKey() {
  return ['eth', '/eth/v1/debug/fork_choice'] as const
}

export function useGetEthV1DebugForkChoice<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.debug.fork_choice.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEthV1DebugForkChoiceKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.debug.fork_choice.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v1.debug.fork_choice.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1DebugForkChoice<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.debug.fork_choice.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEthV1DebugForkChoiceKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.debug.fork_choice.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v1.debug.fork_choice.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEthV2DebugForkChoiceKey() {
  return ['eth', '/eth/v2/debug/fork_choice'] as const
}

export function useGetEthV2DebugForkChoice<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.debug.fork_choice.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEthV2DebugForkChoiceKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.debug.fork_choice.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v2.debug.fork_choice.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV2DebugForkChoice<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.debug.fork_choice.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEthV2DebugForkChoiceKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.debug.fork_choice.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v2.debug.fork_choice.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1NodeIdentityKey() {
  return ['eth', '/eth/v1/node/identity'] as const
}

export function useGetEthV1NodeIdentity<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.identity.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEthV1NodeIdentityKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.identity.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v1.node.identity.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1NodeIdentity<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.identity.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEthV1NodeIdentityKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.identity.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v1.node.identity.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1NodePeersKey(
  args: InferRequestType<typeof client.eth.v1.node.peers.$get>,
) {
  return ['eth', '/eth/v1/node/peers', args] as const
}

export function useGetEthV1NodePeers<TError = unknown>(
  args: InferRequestType<typeof client.eth.v1.node.peers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.peers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEthV1NodePeersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.peers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v1.node.peers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1NodePeers<TError = unknown>(
  args: InferRequestType<typeof client.eth.v1.node.peers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.peers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEthV1NodePeersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.peers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v1.node.peers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1NodePeersPeerIdKey(
  args: InferRequestType<(typeof client.eth.v1.node.peers)[':peer_id']['$get']>,
) {
  return ['eth', '/eth/v1/node/peers/:peer_id', args] as const
}

export function useGetEthV1NodePeersPeerId<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v1.node.peers)[':peer_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.node.peers)[':peer_id']['$get']>>
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
        ? getGetEthV1NodePeersPeerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.node.peers)[':peer_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v1.node.peers[':peer_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1NodePeersPeerId<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v1.node.peers)[':peer_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.node.peers)[':peer_id']['$get']>>
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
        ? getGetEthV1NodePeersPeerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.node.peers)[':peer_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v1.node.peers[':peer_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1NodePeerCountKey() {
  return ['eth', '/eth/v1/node/peer_count'] as const
}

export function useGetEthV1NodePeerCount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.peer_count.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEthV1NodePeerCountKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.peer_count.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v1.node.peer_count.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1NodePeerCount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.peer_count.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEthV1NodePeerCountKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.peer_count.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v1.node.peer_count.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1NodeVersionKey() {
  return ['eth', '/eth/v1/node/version'] as const
}

export function useGetEthV1NodeVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEthV1NodeVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v1.node.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1NodeVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEthV1NodeVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v1.node.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEthV2NodeVersionKey() {
  return ['eth', '/eth/v2/node/version'] as const
}

export function useGetEthV2NodeVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.node.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEthV2NodeVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.node.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v2.node.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV2NodeVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.node.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEthV2NodeVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eth.v2.node.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v2.node.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1NodeSyncingKey() {
  return ['eth', '/eth/v1/node/syncing'] as const
}

export function useGetEthV1NodeSyncing<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.syncing.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEthV1NodeSyncingKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.syncing.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v1.node.syncing.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1NodeSyncing<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.syncing.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEthV1NodeSyncingKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.syncing.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v1.node.syncing.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1NodeHealthKey(
  args: InferRequestType<typeof client.eth.v1.node.health.$get>,
) {
  return ['eth', '/eth/v1/node/health', args] as const
}

export function useGetEthV1NodeHealth<TError = unknown>(
  args: InferRequestType<typeof client.eth.v1.node.health.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.health.$get>>>>
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
        ? getGetEthV1NodeHealthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v1.node.health.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1NodeHealth<TError = unknown>(
  args: InferRequestType<typeof client.eth.v1.node.health.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.health.$get>>>>
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
        ? getGetEthV1NodeHealthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.node.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v1.node.health.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1ConfigForkScheduleKey() {
  return ['eth', '/eth/v1/config/fork_schedule'] as const
}

export function useGetEthV1ConfigForkSchedule<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.config.fork_schedule.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEthV1ConfigForkScheduleKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.config.fork_schedule.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v1.config.fork_schedule.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1ConfigForkSchedule<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.config.fork_schedule.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEthV1ConfigForkScheduleKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.config.fork_schedule.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v1.config.fork_schedule.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1ConfigSpecKey() {
  return ['eth', '/eth/v1/config/spec'] as const
}

export function useGetEthV1ConfigSpec<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.config.spec.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEthV1ConfigSpecKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.config.spec.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v1.config.spec.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1ConfigSpec<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.config.spec.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEthV1ConfigSpecKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.config.spec.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v1.config.spec.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1ConfigDepositContractKey() {
  return ['eth', '/eth/v1/config/deposit_contract'] as const
}

export function useGetEthV1ConfigDepositContract<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.config.deposit_contract.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEthV1ConfigDepositContractKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.config.deposit_contract.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.config.deposit_contract.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1ConfigDepositContract<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.config.deposit_contract.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEthV1ConfigDepositContractKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.config.deposit_contract.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.config.deposit_contract.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEthV1ValidatorDutiesAttesterEpochKey() {
  return ['eth', '/eth/v1/validator/duties/attester/:epoch', 'POST'] as const
}

export function usePostEthV1ValidatorDutiesAttesterEpoch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eth.v1.validator.duties.attester)[':epoch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.eth.v1.validator.duties.attester)[':epoch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV1ValidatorDutiesAttesterEpochKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.eth.v1.validator.duties.attester)[':epoch']['$post']>
        },
      ) =>
        parseResponse(client.eth.v1.validator.duties.attester[':epoch'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEthV1ValidatorDutiesProposerEpochKey(
  args: InferRequestType<(typeof client.eth.v1.validator.duties.proposer)[':epoch']['$get']>,
) {
  return ['eth', '/eth/v1/validator/duties/proposer/:epoch', args] as const
}

export function useGetEthV1ValidatorDutiesProposerEpoch<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v1.validator.duties.proposer)[':epoch']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.validator.duties.proposer)[':epoch']['$get']>>
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
        ? getGetEthV1ValidatorDutiesProposerEpochKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.validator.duties.proposer)[':epoch']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.validator.duties.proposer[':epoch'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1ValidatorDutiesProposerEpoch<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v1.validator.duties.proposer)[':epoch']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.validator.duties.proposer)[':epoch']['$get']>>
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
        ? getGetEthV1ValidatorDutiesProposerEpochKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v1.validator.duties.proposer)[':epoch']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.validator.duties.proposer[':epoch'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEthV2ValidatorDutiesProposerEpochKey(
  args: InferRequestType<(typeof client.eth.v2.validator.duties.proposer)[':epoch']['$get']>,
) {
  return ['eth', '/eth/v2/validator/duties/proposer/:epoch', args] as const
}

export function useGetEthV2ValidatorDutiesProposerEpoch<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v2.validator.duties.proposer)[':epoch']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v2.validator.duties.proposer)[':epoch']['$get']>>
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
        ? getGetEthV2ValidatorDutiesProposerEpochKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v2.validator.duties.proposer)[':epoch']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v2.validator.duties.proposer[':epoch'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV2ValidatorDutiesProposerEpoch<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v2.validator.duties.proposer)[':epoch']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v2.validator.duties.proposer)[':epoch']['$get']>>
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
        ? getGetEthV2ValidatorDutiesProposerEpochKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v2.validator.duties.proposer)[':epoch']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v2.validator.duties.proposer[':epoch'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEthV1ValidatorDutiesSyncEpochKey() {
  return ['eth', '/eth/v1/validator/duties/sync/:epoch', 'POST'] as const
}

export function usePostEthV1ValidatorDutiesSyncEpoch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eth.v1.validator.duties.sync)[':epoch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.eth.v1.validator.duties.sync)[':epoch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV1ValidatorDutiesSyncEpochKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.eth.v1.validator.duties.sync)[':epoch']['$post']>
        },
      ) => parseResponse(client.eth.v1.validator.duties.sync[':epoch'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEthV1ValidatorDutiesPtcEpochKey() {
  return ['eth', '/eth/v1/validator/duties/ptc/:epoch', 'POST'] as const
}

export function usePostEthV1ValidatorDutiesPtcEpoch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eth.v1.validator.duties.ptc)[':epoch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.eth.v1.validator.duties.ptc)[':epoch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV1ValidatorDutiesPtcEpochKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.eth.v1.validator.duties.ptc)[':epoch']['$post']>
        },
      ) => parseResponse(client.eth.v1.validator.duties.ptc[':epoch'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEthV3ValidatorBlocksSlotKey(
  args: InferRequestType<(typeof client.eth.v3.validator.blocks)[':slot']['$get']>,
) {
  return ['eth', '/eth/v3/validator/blocks/:slot', args] as const
}

export function useGetEthV3ValidatorBlocksSlot<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v3.validator.blocks)[':slot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v3.validator.blocks)[':slot']['$get']>>
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
        ? getGetEthV3ValidatorBlocksSlotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v3.validator.blocks)[':slot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v3.validator.blocks[':slot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV3ValidatorBlocksSlot<TError = unknown>(
  args: InferRequestType<(typeof client.eth.v3.validator.blocks)[':slot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v3.validator.blocks)[':slot']['$get']>>
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
        ? getGetEthV3ValidatorBlocksSlotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eth.v3.validator.blocks)[':slot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v3.validator.blocks[':slot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEthV4ValidatorBlocksSlotKey() {
  return ['eth', '/eth/v4/validator/blocks/:slot', 'POST'] as const
}

export function usePostEthV4ValidatorBlocksSlot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eth.v4.validator.blocks)[':slot']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.eth.v4.validator.blocks)[':slot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV4ValidatorBlocksSlotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.eth.v4.validator.blocks)[':slot']['$post']> },
      ) => parseResponse(client.eth.v4.validator.blocks[':slot'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEthV1ValidatorAttestationDataKey(
  args: InferRequestType<typeof client.eth.v1.validator.attestation_data.$get>,
) {
  return ['eth', '/eth/v1/validator/attestation_data', args] as const
}

export function useGetEthV1ValidatorAttestationData<TError = unknown>(
  args: InferRequestType<typeof client.eth.v1.validator.attestation_data.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.validator.attestation_data.$get>>
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
        ? getGetEthV1ValidatorAttestationDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.validator.attestation_data.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v1.validator.attestation_data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1ValidatorAttestationData<TError = unknown>(
  args: InferRequestType<typeof client.eth.v1.validator.attestation_data.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.validator.attestation_data.$get>>
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
        ? getGetEthV1ValidatorAttestationDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.validator.attestation_data.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v1.validator.attestation_data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1ValidatorPayloadAttestationDataKey(
  args: InferRequestType<typeof client.eth.v1.validator.payload_attestation_data.$get>,
) {
  return ['eth', '/eth/v1/validator/payload_attestation_data', args] as const
}

export function useGetEthV1ValidatorPayloadAttestationData<TError = unknown>(
  args: InferRequestType<typeof client.eth.v1.validator.payload_attestation_data.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.validator.payload_attestation_data.$get>>
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
        ? getGetEthV1ValidatorPayloadAttestationDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.validator.payload_attestation_data.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.validator.payload_attestation_data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1ValidatorPayloadAttestationData<TError = unknown>(
  args: InferRequestType<typeof client.eth.v1.validator.payload_attestation_data.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.validator.payload_attestation_data.$get>>
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
        ? getGetEthV1ValidatorPayloadAttestationDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.validator.payload_attestation_data.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v1.validator.payload_attestation_data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEthV2ValidatorAggregateAttestationKey(
  args: InferRequestType<typeof client.eth.v2.validator.aggregate_attestation.$get>,
) {
  return ['eth', '/eth/v2/validator/aggregate_attestation', args] as const
}

export function useGetEthV2ValidatorAggregateAttestation<TError = unknown>(
  args: InferRequestType<typeof client.eth.v2.validator.aggregate_attestation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v2.validator.aggregate_attestation.$get>>
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
        ? getGetEthV2ValidatorAggregateAttestationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v2.validator.aggregate_attestation.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v2.validator.aggregate_attestation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV2ValidatorAggregateAttestation<TError = unknown>(
  args: InferRequestType<typeof client.eth.v2.validator.aggregate_attestation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v2.validator.aggregate_attestation.$get>>
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
        ? getGetEthV2ValidatorAggregateAttestationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v2.validator.aggregate_attestation.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eth.v2.validator.aggregate_attestation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEthV2ValidatorAggregateAndProofsKey() {
  return ['eth', '/eth/v2/validator/aggregate_and_proofs', 'POST'] as const
}

export function usePostEthV2ValidatorAggregateAndProofs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v2.validator.aggregate_and_proofs.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.eth.v2.validator.aggregate_and_proofs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV2ValidatorAggregateAndProofsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.eth.v2.validator.aggregate_and_proofs.$post> },
      ) => parseResponse(client.eth.v2.validator.aggregate_and_proofs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEthV1ValidatorBeaconCommitteeSubscriptionsKey() {
  return ['eth', '/eth/v1/validator/beacon_committee_subscriptions', 'POST'] as const
}

export function usePostEthV1ValidatorBeaconCommitteeSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.validator.beacon_committee_subscriptions.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.eth.v1.validator.beacon_committee_subscriptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV1ValidatorBeaconCommitteeSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.eth.v1.validator.beacon_committee_subscriptions.$post>
        },
      ) =>
        parseResponse(
          client.eth.v1.validator.beacon_committee_subscriptions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostEthV1ValidatorSyncCommitteeSubscriptionsKey() {
  return ['eth', '/eth/v1/validator/sync_committee_subscriptions', 'POST'] as const
}

export function usePostEthV1ValidatorSyncCommitteeSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.validator.sync_committee_subscriptions.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.eth.v1.validator.sync_committee_subscriptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV1ValidatorSyncCommitteeSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.eth.v1.validator.sync_committee_subscriptions.$post>
        },
      ) =>
        parseResponse(
          client.eth.v1.validator.sync_committee_subscriptions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostEthV1ValidatorBeaconCommitteeSelectionsKey() {
  return ['eth', '/eth/v1/validator/beacon_committee_selections', 'POST'] as const
}

export function usePostEthV1ValidatorBeaconCommitteeSelections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.validator.beacon_committee_selections.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.eth.v1.validator.beacon_committee_selections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV1ValidatorBeaconCommitteeSelectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.eth.v1.validator.beacon_committee_selections.$post>
        },
      ) =>
        parseResponse(
          client.eth.v1.validator.beacon_committee_selections.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEthV1ValidatorSyncCommitteeContributionKey(
  args: InferRequestType<typeof client.eth.v1.validator.sync_committee_contribution.$get>,
) {
  return ['eth', '/eth/v1/validator/sync_committee_contribution', args] as const
}

export function useGetEthV1ValidatorSyncCommitteeContribution<TError = unknown>(
  args: InferRequestType<typeof client.eth.v1.validator.sync_committee_contribution.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.validator.sync_committee_contribution.$get>>
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
        ? getGetEthV1ValidatorSyncCommitteeContributionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.validator.sync_committee_contribution.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.eth.v1.validator.sync_committee_contribution.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1ValidatorSyncCommitteeContribution<TError = unknown>(
  args: InferRequestType<typeof client.eth.v1.validator.sync_committee_contribution.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.validator.sync_committee_contribution.$get>>
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
        ? getGetEthV1ValidatorSyncCommitteeContributionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.eth.v1.validator.sync_committee_contribution.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.eth.v1.validator.sync_committee_contribution.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostEthV1ValidatorSyncCommitteeSelectionsKey() {
  return ['eth', '/eth/v1/validator/sync_committee_selections', 'POST'] as const
}

export function usePostEthV1ValidatorSyncCommitteeSelections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.validator.sync_committee_selections.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.eth.v1.validator.sync_committee_selections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV1ValidatorSyncCommitteeSelectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.eth.v1.validator.sync_committee_selections.$post>
        },
      ) =>
        parseResponse(client.eth.v1.validator.sync_committee_selections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEthV1ValidatorContributionAndProofsKey() {
  return ['eth', '/eth/v1/validator/contribution_and_proofs', 'POST'] as const
}

export function usePostEthV1ValidatorContributionAndProofs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.validator.contribution_and_proofs.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.eth.v1.validator.contribution_and_proofs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV1ValidatorContributionAndProofsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.eth.v1.validator.contribution_and_proofs.$post> },
      ) => parseResponse(client.eth.v1.validator.contribution_and_proofs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEthV1ValidatorPrepareBeaconProposerKey() {
  return ['eth', '/eth/v1/validator/prepare_beacon_proposer', 'POST'] as const
}

export function usePostEthV1ValidatorPrepareBeaconProposer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.validator.prepare_beacon_proposer.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.eth.v1.validator.prepare_beacon_proposer.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV1ValidatorPrepareBeaconProposerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.eth.v1.validator.prepare_beacon_proposer.$post> },
      ) => parseResponse(client.eth.v1.validator.prepare_beacon_proposer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEthV1ValidatorRegisterValidatorKey() {
  return ['eth', '/eth/v1/validator/register_validator', 'POST'] as const
}

export function usePostEthV1ValidatorRegisterValidator<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.validator.register_validator.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.eth.v1.validator.register_validator.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV1ValidatorRegisterValidatorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.eth.v1.validator.register_validator.$post> },
      ) => parseResponse(client.eth.v1.validator.register_validator.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEthV1ValidatorProposerPreferencesKey() {
  return ['eth', '/eth/v1/validator/proposer_preferences', 'POST'] as const
}

export function usePostEthV1ValidatorProposerPreferences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.validator.proposer_preferences.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.eth.v1.validator.proposer_preferences.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV1ValidatorProposerPreferencesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.eth.v1.validator.proposer_preferences.$post> },
      ) => parseResponse(client.eth.v1.validator.proposer_preferences.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEthV1ValidatorBuilderPreferencesKey() {
  return ['eth', '/eth/v1/validator/builder_preferences', 'POST'] as const
}

export function usePostEthV1ValidatorBuilderPreferences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eth.v1.validator.builder_preferences.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.eth.v1.validator.builder_preferences.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV1ValidatorBuilderPreferencesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.eth.v1.validator.builder_preferences.$post> },
      ) => parseResponse(client.eth.v1.validator.builder_preferences.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEthV1ValidatorLivenessEpochKey() {
  return ['eth', '/eth/v1/validator/liveness/:epoch', 'POST'] as const
}

export function usePostEthV1ValidatorLivenessEpoch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eth.v1.validator.liveness)[':epoch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.eth.v1.validator.liveness)[':epoch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEthV1ValidatorLivenessEpochKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.eth.v1.validator.liveness)[':epoch']['$post']> },
      ) => parseResponse(client.eth.v1.validator.liveness[':epoch'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRootKey(
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

export function useGetEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRoot<TError = unknown>(
  args: InferRequestType<
    (typeof client.eth.v1.validator.execution_payload_envelopes)[':slot'][':beacon_block_root']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRootKey(args)
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
                (typeof client.eth.v1.validator.execution_payload_envelopes)[':slot'][':beacon_block_root']['$get']
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
          client.eth.v1.validator.execution_payload_envelopes[':slot'][':beacon_block_root'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRoot<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.eth.v1.validator.execution_payload_envelopes)[':slot'][':beacon_block_root']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRootKey(args)
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
                (typeof client.eth.v1.validator.execution_payload_envelopes)[':slot'][':beacon_block_root']['$get']
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
          client.eth.v1.validator.execution_payload_envelopes[':slot'][':beacon_block_root'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEthV1EventsKey(args: InferRequestType<typeof client.eth.v1.events.$get>) {
  return ['eth', '/eth/v1/events', args] as const
}

export function useGetEthV1Events<TError = unknown>(
  args: InferRequestType<typeof client.eth.v1.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.events.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEthV1EventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v1.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEthV1Events<TError = unknown>(
  args: InferRequestType<typeof client.eth.v1.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.events.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEthV1EventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eth.v1.events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eth.v1.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
