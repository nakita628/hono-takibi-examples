import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiVersionKey() {
  return ['{apiVersion}'] as const
}

export function getGetApiVersionAccountKey(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/account', args] as const
}

export function useGetApiVersionAccount<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['$get']>>
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
        ? getGetApiVersionAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccount<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['$get']>>
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
        ? getGetApiVersionAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionAccountKey() {
  return [':apiVersion', '/:apiVersion/account', 'PUT'] as const
}

export function usePutApiVersionAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':apiVersion']['account']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['account']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':apiVersion']['account']['$put']> },
      ) => parseResponse(client[':apiVersion'].account.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionAccountAgreementsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['agreements']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/account/agreements', args] as const
}

export function useGetApiVersionAccountAgreements<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['agreements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['agreements']['$get']>>
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
        ? getGetApiVersionAccountAgreementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['agreements']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].account.agreements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountAgreements<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['agreements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['agreements']['$get']>>
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
        ? getGetApiVersionAccountAgreementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['agreements']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].account.agreements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionAccountAgreementsKey() {
  return [':apiVersion', '/:apiVersion/account/agreements', 'POST'] as const
}

export function usePostApiVersionAccountAgreements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['account']['agreements']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['account']['agreements']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionAccountAgreementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':apiVersion']['account']['agreements']['$post']>
        },
      ) => parseResponse(client[':apiVersion'].account.agreements.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionAccountAvailabilityKey(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['availability']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/account/availability', args] as const
}

export function useGetApiVersionAccountAvailability<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['availability']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['availability']['$get']>>
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
        ? getGetApiVersionAccountAvailabilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['availability']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].account.availability.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountAvailability<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['availability']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['availability']['$get']>>
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
        ? getGetApiVersionAccountAvailabilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['availability']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].account.availability.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionAccountAvailabilityRegionIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['availability'][':regionId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/account/availability/:regionId', args] as const
}

export function useGetApiVersionAccountAvailabilityRegionId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['availability'][':regionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['account']['availability'][':regionId']['$get']
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
        ? getGetApiVersionAccountAvailabilityRegionIdKey(args)
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
                (typeof client)[':apiVersion']['account']['availability'][':regionId']['$get']
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
          client[':apiVersion'].account.availability[':regionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountAvailabilityRegionId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['availability'][':regionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['account']['availability'][':regionId']['$get']
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
        ? getGetApiVersionAccountAvailabilityRegionIdKey(args)
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
                (typeof client)[':apiVersion']['account']['availability'][':regionId']['$get']
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
          client[':apiVersion'].account.availability[':regionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionAccountBetasKey(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['betas']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/account/betas', args] as const
}

export function useGetApiVersionAccountBetas<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['betas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['betas']['$get']>>
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
        ? getGetApiVersionAccountBetasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['betas']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].account.betas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountBetas<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['betas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['betas']['$get']>>
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
        ? getGetApiVersionAccountBetasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['betas']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].account.betas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionAccountBetasKey() {
  return [':apiVersion', '/:apiVersion/account/betas', 'POST'] as const
}

export function usePostApiVersionAccountBetas<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['account']['betas']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['account']['betas']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionAccountBetasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':apiVersion']['account']['betas']['$post']> },
      ) => parseResponse(client[':apiVersion'].account.betas.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionAccountBetasBetaIdKey(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['betas'][':betaId']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/account/betas/:betaId', args] as const
}

export function useGetApiVersionAccountBetasBetaId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['betas'][':betaId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['account']['betas'][':betaId']['$get']>
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
        ? getGetApiVersionAccountBetasBetaIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['account']['betas'][':betaId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].account.betas[':betaId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountBetasBetaId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['betas'][':betaId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['account']['betas'][':betaId']['$get']>
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
        ? getGetApiVersionAccountBetasBetaIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['account']['betas'][':betaId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].account.betas[':betaId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionAccountCancelKey() {
  return [':apiVersion', '/:apiVersion/account/cancel', 'POST'] as const
}

export function usePostApiVersionAccountCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['account']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['account']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionAccountCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':apiVersion']['account']['cancel']['$post']> },
      ) => parseResponse(client[':apiVersion'].account.cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionAccountChildAccountsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['child-accounts']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/account/child-accounts', args] as const
}

export function useGetApiVersionAccountChildAccounts<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['child-accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['child-accounts']['$get']>>
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
        ? getGetApiVersionAccountChildAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['child-accounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].account['child-accounts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountChildAccounts<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['child-accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['child-accounts']['$get']>>
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
        ? getGetApiVersionAccountChildAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['child-accounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].account['child-accounts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionAccountChildAccountsEuuIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['child-accounts'][':euuId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/account/child-accounts/:euuId', args] as const
}

export function useGetApiVersionAccountChildAccountsEuuId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['child-accounts'][':euuId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['account']['child-accounts'][':euuId']['$get']
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
        ? getGetApiVersionAccountChildAccountsEuuIdKey(args)
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
                (typeof client)[':apiVersion']['account']['child-accounts'][':euuId']['$get']
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
          client[':apiVersion'].account['child-accounts'][':euuId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountChildAccountsEuuId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['child-accounts'][':euuId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['account']['child-accounts'][':euuId']['$get']
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
        ? getGetApiVersionAccountChildAccountsEuuIdKey(args)
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
                (typeof client)[':apiVersion']['account']['child-accounts'][':euuId']['$get']
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
          client[':apiVersion'].account['child-accounts'][':euuId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionAccountChildAccountsEuuIdTokenKey() {
  return [':apiVersion', '/:apiVersion/account/child-accounts/:euuId/token', 'POST'] as const
}

export function usePostApiVersionAccountChildAccountsEuuIdToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['account']['child-accounts'][':euuId']['token']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['account']['child-accounts'][':euuId']['token']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionAccountChildAccountsEuuIdTokenKey()
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
            (typeof client)[':apiVersion']['account']['child-accounts'][':euuId']['token']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].account['child-accounts'][':euuId'].token.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionAccountCreditCardKey() {
  return [':apiVersion', '/:apiVersion/account/credit-card', 'POST'] as const
}

export function usePostApiVersionAccountCreditCard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['account']['credit-card']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['account']['credit-card']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionAccountCreditCardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':apiVersion']['account']['credit-card']['$post']>
        },
      ) => parseResponse(client[':apiVersion'].account['credit-card'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionAccountEntityTransfersKey(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['entity-transfers']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/account/entity-transfers', args] as const
}

export function useGetApiVersionAccountEntityTransfers<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['entity-transfers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['account']['entity-transfers']['$get']>
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
        ? getGetApiVersionAccountEntityTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['account']['entity-transfers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].account['entity-transfers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountEntityTransfers<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['entity-transfers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['account']['entity-transfers']['$get']>
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
        ? getGetApiVersionAccountEntityTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['account']['entity-transfers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].account['entity-transfers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionAccountEntityTransfersKey() {
  return [':apiVersion', '/:apiVersion/account/entity-transfers', 'POST'] as const
}

export function usePostApiVersionAccountEntityTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['account']['entity-transfers']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['account']['entity-transfers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionAccountEntityTransfersKey()
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
            (typeof client)[':apiVersion']['account']['entity-transfers']['$post']
          >
        },
      ) =>
        parseResponse(client[':apiVersion'].account['entity-transfers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionAccountEntityTransfersTokenKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['entity-transfers'][':token']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/account/entity-transfers/:token', args] as const
}

export function useGetApiVersionAccountEntityTransfersToken<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['entity-transfers'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['account']['entity-transfers'][':token']['$get']
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
        ? getGetApiVersionAccountEntityTransfersTokenKey(args)
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
                (typeof client)[':apiVersion']['account']['entity-transfers'][':token']['$get']
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
          client[':apiVersion'].account['entity-transfers'][':token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountEntityTransfersToken<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['entity-transfers'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['account']['entity-transfers'][':token']['$get']
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
        ? getGetApiVersionAccountEntityTransfersTokenKey(args)
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
                (typeof client)[':apiVersion']['account']['entity-transfers'][':token']['$get']
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
          client[':apiVersion'].account['entity-transfers'][':token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiVersionAccountEntityTransfersTokenKey() {
  return [':apiVersion', '/:apiVersion/account/entity-transfers/:token', 'DELETE'] as const
}

export function useDeleteApiVersionAccountEntityTransfersToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['account']['entity-transfers'][':token']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['account']['entity-transfers'][':token']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionAccountEntityTransfersTokenKey()
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
            (typeof client)[':apiVersion']['account']['entity-transfers'][':token']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].account['entity-transfers'][':token'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionAccountEntityTransfersTokenAcceptKey() {
  return [':apiVersion', '/:apiVersion/account/entity-transfers/:token/accept', 'POST'] as const
}

export function usePostApiVersionAccountEntityTransfersTokenAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['account']['entity-transfers'][':token']['accept']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['account']['entity-transfers'][':token']['accept']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionAccountEntityTransfersTokenAcceptKey()
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
            (typeof client)[':apiVersion']['account']['entity-transfers'][':token']['accept']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].account['entity-transfers'][':token'].accept.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionAccountEventsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['events']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':apiVersion', '/:apiVersion/account/events', keyArgs] as const
}

export function useGetApiVersionAccountEvents<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['events']['$get']>>
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
        ? getGetApiVersionAccountEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].account.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountEvents<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['events']['$get']>>
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
        ? getGetApiVersionAccountEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].account.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionAccountEventsEventIdKey(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['events'][':eventId']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/account/events/:eventId', args] as const
}

export function useGetApiVersionAccountEventsEventId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['events'][':eventId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['account']['events'][':eventId']['$get']>
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
        ? getGetApiVersionAccountEventsEventIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['account']['events'][':eventId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].account.events[':eventId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountEventsEventId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['events'][':eventId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['account']['events'][':eventId']['$get']>
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
        ? getGetApiVersionAccountEventsEventIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['account']['events'][':eventId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].account.events[':eventId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionAccountEventsEventIdSeenKey() {
  return [':apiVersion', '/:apiVersion/account/events/:eventId/seen', 'POST'] as const
}

export function usePostApiVersionAccountEventsEventIdSeen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['account']['events'][':eventId']['seen']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['account']['events'][':eventId']['seen']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionAccountEventsEventIdSeenKey()
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
            (typeof client)[':apiVersion']['account']['events'][':eventId']['seen']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].account.events[':eventId'].seen.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionAccountInvoicesKey(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['invoices']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':apiVersion', '/:apiVersion/account/invoices', keyArgs] as const
}

export function useGetApiVersionAccountInvoices<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['invoices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['invoices']['$get']>>
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
        ? getGetApiVersionAccountInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['invoices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].account.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountInvoices<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['invoices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['invoices']['$get']>>
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
        ? getGetApiVersionAccountInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['invoices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].account.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionAccountInvoicesInvoiceIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['invoices'][':invoiceId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/account/invoices/:invoiceId', args] as const
}

export function useGetApiVersionAccountInvoicesInvoiceId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['invoices'][':invoiceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['account']['invoices'][':invoiceId']['$get']
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
        ? getGetApiVersionAccountInvoicesInvoiceIdKey(args)
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
                (typeof client)[':apiVersion']['account']['invoices'][':invoiceId']['$get']
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
          client[':apiVersion'].account.invoices[':invoiceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountInvoicesInvoiceId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['invoices'][':invoiceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['account']['invoices'][':invoiceId']['$get']
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
        ? getGetApiVersionAccountInvoicesInvoiceIdKey(args)
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
                (typeof client)[':apiVersion']['account']['invoices'][':invoiceId']['$get']
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
          client[':apiVersion'].account.invoices[':invoiceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionAccountInvoicesInvoiceIdItemsKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['invoices'][':invoiceId']['items']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/account/invoices/:invoiceId/items', args] as const
}

export function useGetApiVersionAccountInvoicesInvoiceIdItems<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['invoices'][':invoiceId']['items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['account']['invoices'][':invoiceId']['items']['$get']
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
        ? getGetApiVersionAccountInvoicesInvoiceIdItemsKey(args)
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
                (typeof client)[':apiVersion']['account']['invoices'][':invoiceId']['items']['$get']
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
          client[':apiVersion'].account.invoices[':invoiceId'].items.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountInvoicesInvoiceIdItems<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['invoices'][':invoiceId']['items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['account']['invoices'][':invoiceId']['items']['$get']
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
        ? getGetApiVersionAccountInvoicesInvoiceIdItemsKey(args)
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
                (typeof client)[':apiVersion']['account']['invoices'][':invoiceId']['items']['$get']
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
          client[':apiVersion'].account.invoices[':invoiceId'].items.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionAccountLoginsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['logins']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/account/logins', args] as const
}

export function useGetApiVersionAccountLogins<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['logins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['logins']['$get']>>
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
        ? getGetApiVersionAccountLoginsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['logins']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].account.logins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountLogins<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['logins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['logins']['$get']>>
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
        ? getGetApiVersionAccountLoginsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['logins']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].account.logins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionAccountLoginsLoginIdKey(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['logins'][':loginId']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/account/logins/:loginId', args] as const
}

export function useGetApiVersionAccountLoginsLoginId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['logins'][':loginId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['account']['logins'][':loginId']['$get']>
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
        ? getGetApiVersionAccountLoginsLoginIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['account']['logins'][':loginId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].account.logins[':loginId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountLoginsLoginId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['logins'][':loginId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['account']['logins'][':loginId']['$get']>
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
        ? getGetApiVersionAccountLoginsLoginIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['account']['logins'][':loginId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].account.logins[':loginId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionAccountMaintenanceKey(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['maintenance']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/account/maintenance', args] as const
}

export function useGetApiVersionAccountMaintenance<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['maintenance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['maintenance']['$get']>>
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
        ? getGetApiVersionAccountMaintenanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['maintenance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].account.maintenance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountMaintenance<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['maintenance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['maintenance']['$get']>>
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
        ? getGetApiVersionAccountMaintenanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['maintenance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].account.maintenance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionAccountNotificationsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['notifications']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/account/notifications', args] as const
}

export function useGetApiVersionAccountNotifications<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['notifications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['notifications']['$get']>>
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
        ? getGetApiVersionAccountNotificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['notifications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].account.notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountNotifications<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['notifications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['notifications']['$get']>>
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
        ? getGetApiVersionAccountNotificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['notifications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].account.notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionAccountOauthClientsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['oauth-clients']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/account/oauth-clients', args] as const
}

export function useGetApiVersionAccountOauthClients<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['oauth-clients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['oauth-clients']['$get']>>
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
        ? getGetApiVersionAccountOauthClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['oauth-clients']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].account['oauth-clients'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountOauthClients<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['oauth-clients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['oauth-clients']['$get']>>
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
        ? getGetApiVersionAccountOauthClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['oauth-clients']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].account['oauth-clients'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionAccountOauthClientsKey() {
  return [':apiVersion', '/:apiVersion/account/oauth-clients', 'POST'] as const
}

export function usePostApiVersionAccountOauthClients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['account']['oauth-clients']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['account']['oauth-clients']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionAccountOauthClientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':apiVersion']['account']['oauth-clients']['$post']>
        },
      ) => parseResponse(client[':apiVersion'].account['oauth-clients'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionAccountOauthClientsClientIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/account/oauth-clients/:clientId', args] as const
}

export function useGetApiVersionAccountOauthClientsClientId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['$get']
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
        ? getGetApiVersionAccountOauthClientsClientIdKey(args)
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
                (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['$get']
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
          client[':apiVersion'].account['oauth-clients'][':clientId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountOauthClientsClientId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['$get']
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
        ? getGetApiVersionAccountOauthClientsClientIdKey(args)
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
                (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['$get']
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
          client[':apiVersion'].account['oauth-clients'][':clientId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionAccountOauthClientsClientIdKey() {
  return [':apiVersion', '/:apiVersion/account/oauth-clients/:clientId', 'PUT'] as const
}

export function usePutApiVersionAccountOauthClientsClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionAccountOauthClientsClientIdKey()
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
            (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].account['oauth-clients'][':clientId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionAccountOauthClientsClientIdKey() {
  return [':apiVersion', '/:apiVersion/account/oauth-clients/:clientId', 'DELETE'] as const
}

export function useDeleteApiVersionAccountOauthClientsClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionAccountOauthClientsClientIdKey()
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
            (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].account['oauth-clients'][':clientId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionAccountOauthClientsClientIdResetSecretKey() {
  return [
    ':apiVersion',
    '/:apiVersion/account/oauth-clients/:clientId/reset-secret',
    'POST',
  ] as const
}

export function usePostApiVersionAccountOauthClientsClientIdResetSecret<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['reset-secret']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['reset-secret']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionAccountOauthClientsClientIdResetSecretKey()
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
            (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['reset-secret']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].account['oauth-clients'][':clientId']['reset-secret'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionAccountOauthClientsClientIdThumbnailKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['thumbnail']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/account/oauth-clients/:clientId/thumbnail', args] as const
}

export function useGetApiVersionAccountOauthClientsClientIdThumbnail<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['thumbnail']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['thumbnail']['$get']
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
        ? getGetApiVersionAccountOauthClientsClientIdThumbnailKey(args)
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
                (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['thumbnail']['$get']
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
          client[':apiVersion'].account['oauth-clients'][':clientId'].thumbnail.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountOauthClientsClientIdThumbnail<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['thumbnail']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['thumbnail']['$get']
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
        ? getGetApiVersionAccountOauthClientsClientIdThumbnailKey(args)
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
                (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['thumbnail']['$get']
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
          client[':apiVersion'].account['oauth-clients'][':clientId'].thumbnail.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionAccountOauthClientsClientIdThumbnailKey() {
  return [':apiVersion', '/:apiVersion/account/oauth-clients/:clientId/thumbnail', 'PUT'] as const
}

export function usePutApiVersionAccountOauthClientsClientIdThumbnail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['thumbnail']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['thumbnail']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionAccountOauthClientsClientIdThumbnailKey()
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
            (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['thumbnail']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].account['oauth-clients'][':clientId'].thumbnail.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionAccountPaymentMethodsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['payment-methods']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/account/payment-methods', args] as const
}

export function useGetApiVersionAccountPaymentMethods<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['payment-methods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['account']['payment-methods']['$get']>
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
        ? getGetApiVersionAccountPaymentMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['account']['payment-methods']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].account['payment-methods'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountPaymentMethods<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['payment-methods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['account']['payment-methods']['$get']>
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
        ? getGetApiVersionAccountPaymentMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['account']['payment-methods']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].account['payment-methods'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionAccountPaymentMethodsKey() {
  return [':apiVersion', '/:apiVersion/account/payment-methods', 'POST'] as const
}

export function usePostApiVersionAccountPaymentMethods<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['account']['payment-methods']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['account']['payment-methods']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionAccountPaymentMethodsKey()
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
            (typeof client)[':apiVersion']['account']['payment-methods']['$post']
          >
        },
      ) =>
        parseResponse(client[':apiVersion'].account['payment-methods'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionAccountPaymentMethodsPaymentMethodIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['payment-methods'][':paymentMethodId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/account/payment-methods/:paymentMethodId', args] as const
}

export function useGetApiVersionAccountPaymentMethodsPaymentMethodId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['payment-methods'][':paymentMethodId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['account']['payment-methods'][':paymentMethodId']['$get']
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
        ? getGetApiVersionAccountPaymentMethodsPaymentMethodIdKey(args)
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
                (typeof client)[':apiVersion']['account']['payment-methods'][':paymentMethodId']['$get']
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
          client[':apiVersion'].account['payment-methods'][':paymentMethodId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountPaymentMethodsPaymentMethodId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['payment-methods'][':paymentMethodId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['account']['payment-methods'][':paymentMethodId']['$get']
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
        ? getGetApiVersionAccountPaymentMethodsPaymentMethodIdKey(args)
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
                (typeof client)[':apiVersion']['account']['payment-methods'][':paymentMethodId']['$get']
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
          client[':apiVersion'].account['payment-methods'][':paymentMethodId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiVersionAccountPaymentMethodsPaymentMethodIdKey() {
  return [':apiVersion', '/:apiVersion/account/payment-methods/:paymentMethodId', 'DELETE'] as const
}

export function useDeleteApiVersionAccountPaymentMethodsPaymentMethodId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['account']['payment-methods'][':paymentMethodId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['account']['payment-methods'][':paymentMethodId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionAccountPaymentMethodsPaymentMethodIdKey()
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
            (typeof client)[':apiVersion']['account']['payment-methods'][':paymentMethodId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].account['payment-methods'][':paymentMethodId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionAccountPaymentMethodsPaymentMethodIdMakeDefaultKey() {
  return [
    ':apiVersion',
    '/:apiVersion/account/payment-methods/:paymentMethodId/make-default',
    'POST',
  ] as const
}

export function usePostApiVersionAccountPaymentMethodsPaymentMethodIdMakeDefault<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['account']['payment-methods'][':paymentMethodId']['make-default']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['account']['payment-methods'][':paymentMethodId']['make-default']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionAccountPaymentMethodsPaymentMethodIdMakeDefaultKey()
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
            (typeof client)[':apiVersion']['account']['payment-methods'][':paymentMethodId']['make-default']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].account['payment-methods'][':paymentMethodId'][
            'make-default'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionAccountPaymentsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['payments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':apiVersion', '/:apiVersion/account/payments', keyArgs] as const
}

export function useGetApiVersionAccountPayments<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['payments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['payments']['$get']>>
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
        ? getGetApiVersionAccountPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['payments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].account.payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountPayments<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['payments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['payments']['$get']>>
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
        ? getGetApiVersionAccountPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['payments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].account.payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionAccountPaymentsKey() {
  return [':apiVersion', '/:apiVersion/account/payments', 'POST'] as const
}

export function usePostApiVersionAccountPayments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['account']['payments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['account']['payments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionAccountPaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':apiVersion']['account']['payments']['$post']>
        },
      ) => parseResponse(client[':apiVersion'].account.payments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionAccountPaymentsPaypalKey() {
  return [':apiVersion', '/:apiVersion/account/payments/paypal', 'POST'] as const
}

export function usePostApiVersionAccountPaymentsPaypal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['account']['payments']['paypal']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['account']['payments']['paypal']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionAccountPaymentsPaypalKey()
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
            (typeof client)[':apiVersion']['account']['payments']['paypal']['$post']
          >
        },
      ) => parseResponse(client[':apiVersion'].account.payments.paypal.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionAccountPaymentsPaypalExecuteKey() {
  return [':apiVersion', '/:apiVersion/account/payments/paypal/execute', 'POST'] as const
}

export function usePostApiVersionAccountPaymentsPaypalExecute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['account']['payments']['paypal']['execute']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['account']['payments']['paypal']['execute']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionAccountPaymentsPaypalExecuteKey()
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
            (typeof client)[':apiVersion']['account']['payments']['paypal']['execute']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].account.payments.paypal.execute.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionAccountPaymentsPaymentIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['payments'][':paymentId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/account/payments/:paymentId', args] as const
}

export function useGetApiVersionAccountPaymentsPaymentId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['payments'][':paymentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['account']['payments'][':paymentId']['$get']
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
        ? getGetApiVersionAccountPaymentsPaymentIdKey(args)
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
                (typeof client)[':apiVersion']['account']['payments'][':paymentId']['$get']
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
          client[':apiVersion'].account.payments[':paymentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountPaymentsPaymentId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['payments'][':paymentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['account']['payments'][':paymentId']['$get']
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
        ? getGetApiVersionAccountPaymentsPaymentIdKey(args)
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
                (typeof client)[':apiVersion']['account']['payments'][':paymentId']['$get']
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
          client[':apiVersion'].account.payments[':paymentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionAccountPromoCodesKey() {
  return [':apiVersion', '/:apiVersion/account/promo-codes', 'POST'] as const
}

export function usePostApiVersionAccountPromoCodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['account']['promo-codes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['account']['promo-codes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionAccountPromoCodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':apiVersion']['account']['promo-codes']['$post']>
        },
      ) => parseResponse(client[':apiVersion'].account['promo-codes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionAccountServiceTransfersKey(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['service-transfers']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/account/service-transfers', args] as const
}

export function useGetApiVersionAccountServiceTransfers<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['service-transfers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['account']['service-transfers']['$get']>
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
        ? getGetApiVersionAccountServiceTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['account']['service-transfers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].account['service-transfers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountServiceTransfers<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['service-transfers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['account']['service-transfers']['$get']>
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
        ? getGetApiVersionAccountServiceTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['account']['service-transfers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].account['service-transfers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionAccountServiceTransfersKey() {
  return [':apiVersion', '/:apiVersion/account/service-transfers', 'POST'] as const
}

export function usePostApiVersionAccountServiceTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['account']['service-transfers']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['account']['service-transfers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionAccountServiceTransfersKey()
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
            (typeof client)[':apiVersion']['account']['service-transfers']['$post']
          >
        },
      ) =>
        parseResponse(client[':apiVersion'].account['service-transfers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionAccountServiceTransfersTokenKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['service-transfers'][':token']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/account/service-transfers/:token', args] as const
}

export function useGetApiVersionAccountServiceTransfersToken<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['service-transfers'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['account']['service-transfers'][':token']['$get']
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
        ? getGetApiVersionAccountServiceTransfersTokenKey(args)
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
                (typeof client)[':apiVersion']['account']['service-transfers'][':token']['$get']
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
          client[':apiVersion'].account['service-transfers'][':token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountServiceTransfersToken<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['service-transfers'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['account']['service-transfers'][':token']['$get']
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
        ? getGetApiVersionAccountServiceTransfersTokenKey(args)
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
                (typeof client)[':apiVersion']['account']['service-transfers'][':token']['$get']
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
          client[':apiVersion'].account['service-transfers'][':token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiVersionAccountServiceTransfersTokenKey() {
  return [':apiVersion', '/:apiVersion/account/service-transfers/:token', 'DELETE'] as const
}

export function useDeleteApiVersionAccountServiceTransfersToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['account']['service-transfers'][':token']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['account']['service-transfers'][':token']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionAccountServiceTransfersTokenKey()
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
            (typeof client)[':apiVersion']['account']['service-transfers'][':token']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].account['service-transfers'][':token'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionAccountServiceTransfersTokenAcceptKey() {
  return [':apiVersion', '/:apiVersion/account/service-transfers/:token/accept', 'POST'] as const
}

export function usePostApiVersionAccountServiceTransfersTokenAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['account']['service-transfers'][':token']['accept']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['account']['service-transfers'][':token']['accept']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionAccountServiceTransfersTokenAcceptKey()
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
            (typeof client)[':apiVersion']['account']['service-transfers'][':token']['accept']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].account['service-transfers'][':token'].accept.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionAccountSettingsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['settings']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/account/settings', args] as const
}

export function useGetApiVersionAccountSettings<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['settings']['$get']>>
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
        ? getGetApiVersionAccountSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].account.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountSettings<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['settings']['$get']>>
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
        ? getGetApiVersionAccountSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].account.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionAccountSettingsKey() {
  return [':apiVersion', '/:apiVersion/account/settings', 'PUT'] as const
}

export function usePutApiVersionAccountSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['account']['settings']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['account']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionAccountSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':apiVersion']['account']['settings']['$put']> },
      ) => parseResponse(client[':apiVersion'].account.settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionAccountSettingsManagedEnableKey() {
  return [':apiVersion', '/:apiVersion/account/settings/managed-enable', 'POST'] as const
}

export function usePostApiVersionAccountSettingsManagedEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['account']['settings']['managed-enable']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['account']['settings']['managed-enable']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionAccountSettingsManagedEnableKey()
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
            (typeof client)[':apiVersion']['account']['settings']['managed-enable']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].account.settings['managed-enable'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionAccountTransferKey(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['transfer']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/account/transfer', args] as const
}

export function useGetApiVersionAccountTransfer<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['transfer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['transfer']['$get']>>
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
        ? getGetApiVersionAccountTransferKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['transfer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].account.transfer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountTransfer<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['transfer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['transfer']['$get']>>
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
        ? getGetApiVersionAccountTransferKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['transfer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].account.transfer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionAccountUsersKey(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['users']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/account/users', args] as const
}

export function useGetApiVersionAccountUsers<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['users']['$get']>>
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
        ? getGetApiVersionAccountUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].account.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountUsers<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['users']['$get']>>
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
        ? getGetApiVersionAccountUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['account']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].account.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionAccountUsersKey() {
  return [':apiVersion', '/:apiVersion/account/users', 'POST'] as const
}

export function usePostApiVersionAccountUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['account']['users']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['account']['users']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionAccountUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':apiVersion']['account']['users']['$post']> },
      ) => parseResponse(client[':apiVersion'].account.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionAccountUsersUsernameKey(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['users'][':username']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/account/users/:username', args] as const
}

export function useGetApiVersionAccountUsersUsername<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['users'][':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['account']['users'][':username']['$get']>
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
        ? getGetApiVersionAccountUsersUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['account']['users'][':username']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].account.users[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountUsersUsername<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['users'][':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['account']['users'][':username']['$get']>
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
        ? getGetApiVersionAccountUsersUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['account']['users'][':username']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].account.users[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionAccountUsersUsernameKey() {
  return [':apiVersion', '/:apiVersion/account/users/:username', 'PUT'] as const
}

export function usePutApiVersionAccountUsersUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['account']['users'][':username']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['account']['users'][':username']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionAccountUsersUsernameKey()
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
            (typeof client)[':apiVersion']['account']['users'][':username']['$put']
          >
        },
      ) => parseResponse(client[':apiVersion'].account.users[':username'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionAccountUsersUsernameKey() {
  return [':apiVersion', '/:apiVersion/account/users/:username', 'DELETE'] as const
}

export function useDeleteApiVersionAccountUsersUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['account']['users'][':username']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['account']['users'][':username']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionAccountUsersUsernameKey()
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
            (typeof client)[':apiVersion']['account']['users'][':username']['$delete']
          >
        },
      ) =>
        parseResponse(client[':apiVersion'].account.users[':username'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionAccountUsersUsernameGrantsKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['users'][':username']['grants']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/account/users/:username/grants', args] as const
}

export function useGetApiVersionAccountUsersUsernameGrants<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['users'][':username']['grants']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['account']['users'][':username']['grants']['$get']
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
        ? getGetApiVersionAccountUsersUsernameGrantsKey(args)
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
                (typeof client)[':apiVersion']['account']['users'][':username']['grants']['$get']
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
          client[':apiVersion'].account.users[':username'].grants.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionAccountUsersUsernameGrants<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['users'][':username']['grants']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['account']['users'][':username']['grants']['$get']
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
        ? getGetApiVersionAccountUsersUsernameGrantsKey(args)
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
                (typeof client)[':apiVersion']['account']['users'][':username']['grants']['$get']
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
          client[':apiVersion'].account.users[':username'].grants.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionAccountUsersUsernameGrantsKey() {
  return [':apiVersion', '/:apiVersion/account/users/:username/grants', 'PUT'] as const
}

export function usePutApiVersionAccountUsersUsernameGrants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['account']['users'][':username']['grants']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['account']['users'][':username']['grants']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionAccountUsersUsernameGrantsKey()
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
            (typeof client)[':apiVersion']['account']['users'][':username']['grants']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].account.users[':username'].grants.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionBetasKey(
  args: InferRequestType<(typeof client)[':apiVersion']['betas']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/betas', args] as const
}

export function useGetApiVersionBetas<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['betas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':apiVersion']['betas']['$get']>>>
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
        ? getGetApiVersionBetasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':apiVersion']['betas']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].betas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionBetas<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['betas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':apiVersion']['betas']['$get']>>>
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
        ? getGetApiVersionBetasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':apiVersion']['betas']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].betas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionBetasBetaIdKey(
  args: InferRequestType<(typeof client)[':apiVersion']['betas'][':betaId']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/betas/:betaId', args] as const
}

export function useGetApiVersionBetasBetaId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['betas'][':betaId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['betas'][':betaId']['$get']>>
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
        ? getGetApiVersionBetasBetaIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['betas'][':betaId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].betas[':betaId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionBetasBetaId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['betas'][':betaId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['betas'][':betaId']['$get']>>
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
        ? getGetApiVersionBetasBetaIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['betas'][':betaId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].betas[':betaId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionDatabasesEnginesKey(
  args: InferRequestType<(typeof client)[':apiVersion']['databases']['engines']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/databases/engines', args] as const
}

export function useGetApiVersionDatabasesEngines<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['databases']['engines']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['databases']['engines']['$get']>>
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
        ? getGetApiVersionDatabasesEnginesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['databases']['engines']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].databases.engines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionDatabasesEngines<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['databases']['engines']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['databases']['engines']['$get']>>
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
        ? getGetApiVersionDatabasesEnginesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['databases']['engines']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].databases.engines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionDatabasesEnginesEngineIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['engines'][':engineId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/databases/engines/:engineId', args] as const
}

export function useGetApiVersionDatabasesEnginesEngineId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['engines'][':engineId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['databases']['engines'][':engineId']['$get']
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
        ? getGetApiVersionDatabasesEnginesEngineIdKey(args)
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
                (typeof client)[':apiVersion']['databases']['engines'][':engineId']['$get']
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
          client[':apiVersion'].databases.engines[':engineId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionDatabasesEnginesEngineId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['engines'][':engineId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['databases']['engines'][':engineId']['$get']
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
        ? getGetApiVersionDatabasesEnginesEngineIdKey(args)
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
                (typeof client)[':apiVersion']['databases']['engines'][':engineId']['$get']
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
          client[':apiVersion'].databases.engines[':engineId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionDatabasesInstancesKey(
  args: InferRequestType<(typeof client)[':apiVersion']['databases']['instances']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/databases/instances', args] as const
}

export function useGetApiVersionDatabasesInstances<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['databases']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['databases']['instances']['$get']>>
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
        ? getGetApiVersionDatabasesInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['databases']['instances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].databases.instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionDatabasesInstances<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['databases']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['databases']['instances']['$get']>>
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
        ? getGetApiVersionDatabasesInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['databases']['instances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].databases.instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionDatabasesMysqlConfigKey(
  args: InferRequestType<(typeof client)[':apiVersion']['databases']['mysql']['config']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/databases/mysql/config', args] as const
}

export function useGetApiVersionDatabasesMysqlConfig<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['databases']['mysql']['config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['databases']['mysql']['config']['$get']>
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
        ? getGetApiVersionDatabasesMysqlConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['databases']['mysql']['config']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].databases.mysql.config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionDatabasesMysqlConfig<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['databases']['mysql']['config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['databases']['mysql']['config']['$get']>
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
        ? getGetApiVersionDatabasesMysqlConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['databases']['mysql']['config']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].databases.mysql.config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionDatabasesMysqlInstancesKey(
  args: InferRequestType<(typeof client)[':apiVersion']['databases']['mysql']['instances']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/databases/mysql/instances', args] as const
}

export function useGetApiVersionDatabasesMysqlInstances<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['databases']['mysql']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['databases']['mysql']['instances']['$get']>
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
        ? getGetApiVersionDatabasesMysqlInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['databases']['mysql']['instances']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].databases.mysql.instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionDatabasesMysqlInstances<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['databases']['mysql']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['databases']['mysql']['instances']['$get']>
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
        ? getGetApiVersionDatabasesMysqlInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['databases']['mysql']['instances']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].databases.mysql.instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionDatabasesMysqlInstancesKey() {
  return [':apiVersion', '/:apiVersion/databases/mysql/instances', 'POST'] as const
}

export function usePostApiVersionDatabasesMysqlInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['databases']['mysql']['instances']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['databases']['mysql']['instances']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionDatabasesMysqlInstancesKey()
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
            (typeof client)[':apiVersion']['databases']['mysql']['instances']['$post']
          >
        },
      ) => parseResponse(client[':apiVersion'].databases.mysql.instances.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionDatabasesMysqlInstancesInstanceIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/databases/mysql/instances/:instanceId', args] as const
}

export function useGetApiVersionDatabasesMysqlInstancesInstanceId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['$get']
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
        ? getGetApiVersionDatabasesMysqlInstancesInstanceIdKey(args)
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
                (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['$get']
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
          client[':apiVersion'].databases.mysql.instances[':instanceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionDatabasesMysqlInstancesInstanceId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['$get']
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
        ? getGetApiVersionDatabasesMysqlInstancesInstanceIdKey(args)
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
                (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['$get']
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
          client[':apiVersion'].databases.mysql.instances[':instanceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionDatabasesMysqlInstancesInstanceIdKey() {
  return [':apiVersion', '/:apiVersion/databases/mysql/instances/:instanceId', 'PUT'] as const
}

export function usePutApiVersionDatabasesMysqlInstancesInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionDatabasesMysqlInstancesInstanceIdKey()
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
            (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].databases.mysql.instances[':instanceId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionDatabasesMysqlInstancesInstanceIdKey() {
  return [':apiVersion', '/:apiVersion/databases/mysql/instances/:instanceId', 'DELETE'] as const
}

export function useDeleteApiVersionDatabasesMysqlInstancesInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionDatabasesMysqlInstancesInstanceIdKey()
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
            (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].databases.mysql.instances[':instanceId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionDatabasesMysqlInstancesInstanceIdCredentialsKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['credentials']['$get']
  >,
) {
  return [
    ':apiVersion',
    '/:apiVersion/databases/mysql/instances/:instanceId/credentials',
    args,
  ] as const
}

export function useGetApiVersionDatabasesMysqlInstancesInstanceIdCredentials<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['credentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['credentials']['$get']
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
        ? getGetApiVersionDatabasesMysqlInstancesInstanceIdCredentialsKey(args)
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
                (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['credentials']['$get']
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
          client[':apiVersion'].databases.mysql.instances[':instanceId'].credentials.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionDatabasesMysqlInstancesInstanceIdCredentials<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['credentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['credentials']['$get']
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
        ? getGetApiVersionDatabasesMysqlInstancesInstanceIdCredentialsKey(args)
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
                (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['credentials']['$get']
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
          client[':apiVersion'].databases.mysql.instances[':instanceId'].credentials.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionDatabasesMysqlInstancesInstanceIdCredentialsResetKey() {
  return [
    ':apiVersion',
    '/:apiVersion/databases/mysql/instances/:instanceId/credentials/reset',
    'POST',
  ] as const
}

export function usePostApiVersionDatabasesMysqlInstancesInstanceIdCredentialsReset<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['credentials']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['credentials']['reset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiVersionDatabasesMysqlInstancesInstanceIdCredentialsResetKey()
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
            (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['credentials']['reset']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].databases.mysql.instances[':instanceId'].credentials.reset.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionDatabasesMysqlInstancesInstanceIdPatchKey() {
  return [
    ':apiVersion',
    '/:apiVersion/databases/mysql/instances/:instanceId/patch',
    'POST',
  ] as const
}

export function usePostApiVersionDatabasesMysqlInstancesInstanceIdPatch<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['patch']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['patch']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionDatabasesMysqlInstancesInstanceIdPatchKey()
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
            (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['patch']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].databases.mysql.instances[':instanceId'].patch.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionDatabasesMysqlInstancesInstanceIdResumeKey() {
  return [
    ':apiVersion',
    '/:apiVersion/databases/mysql/instances/:instanceId/resume',
    'POST',
  ] as const
}

export function usePostApiVersionDatabasesMysqlInstancesInstanceIdResume<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['resume']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['resume']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionDatabasesMysqlInstancesInstanceIdResumeKey()
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
            (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['resume']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].databases.mysql.instances[':instanceId'].resume.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionDatabasesMysqlInstancesInstanceIdSslKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['ssl']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/databases/mysql/instances/:instanceId/ssl', args] as const
}

export function useGetApiVersionDatabasesMysqlInstancesInstanceIdSsl<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['ssl']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['ssl']['$get']
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
        ? getGetApiVersionDatabasesMysqlInstancesInstanceIdSslKey(args)
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
                (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['ssl']['$get']
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
          client[':apiVersion'].databases.mysql.instances[':instanceId'].ssl.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionDatabasesMysqlInstancesInstanceIdSsl<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['ssl']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['ssl']['$get']
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
        ? getGetApiVersionDatabasesMysqlInstancesInstanceIdSslKey(args)
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
                (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['ssl']['$get']
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
          client[':apiVersion'].databases.mysql.instances[':instanceId'].ssl.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionDatabasesMysqlInstancesInstanceIdSuspendKey() {
  return [
    ':apiVersion',
    '/:apiVersion/databases/mysql/instances/:instanceId/suspend',
    'POST',
  ] as const
}

export function usePostApiVersionDatabasesMysqlInstancesInstanceIdSuspend<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['suspend']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['suspend']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionDatabasesMysqlInstancesInstanceIdSuspendKey()
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
            (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['suspend']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].databases.mysql.instances[':instanceId'].suspend.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionDatabasesPostgresqlConfigKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['postgresql']['config']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/databases/postgresql/config', args] as const
}

export function useGetApiVersionDatabasesPostgresqlConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['postgresql']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['databases']['postgresql']['config']['$get']
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
        ? getGetApiVersionDatabasesPostgresqlConfigKey(args)
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
                (typeof client)[':apiVersion']['databases']['postgresql']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].databases.postgresql.config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionDatabasesPostgresqlConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['postgresql']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['databases']['postgresql']['config']['$get']
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
        ? getGetApiVersionDatabasesPostgresqlConfigKey(args)
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
                (typeof client)[':apiVersion']['databases']['postgresql']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].databases.postgresql.config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionDatabasesPostgresqlInstancesKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['postgresql']['instances']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/databases/postgresql/instances', args] as const
}

export function useGetApiVersionDatabasesPostgresqlInstances<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['postgresql']['instances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['databases']['postgresql']['instances']['$get']
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
        ? getGetApiVersionDatabasesPostgresqlInstancesKey(args)
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
                (typeof client)[':apiVersion']['databases']['postgresql']['instances']['$get']
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
          client[':apiVersion'].databases.postgresql.instances.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionDatabasesPostgresqlInstances<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['postgresql']['instances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['databases']['postgresql']['instances']['$get']
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
        ? getGetApiVersionDatabasesPostgresqlInstancesKey(args)
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
                (typeof client)[':apiVersion']['databases']['postgresql']['instances']['$get']
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
          client[':apiVersion'].databases.postgresql.instances.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionDatabasesPostgresqlInstancesKey() {
  return [':apiVersion', '/:apiVersion/databases/postgresql/instances', 'POST'] as const
}

export function usePostApiVersionDatabasesPostgresqlInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['databases']['postgresql']['instances']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['databases']['postgresql']['instances']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionDatabasesPostgresqlInstancesKey()
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
            (typeof client)[':apiVersion']['databases']['postgresql']['instances']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].databases.postgresql.instances.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionDatabasesPostgresqlInstancesInstanceIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/databases/postgresql/instances/:instanceId', args] as const
}

export function useGetApiVersionDatabasesPostgresqlInstancesInstanceId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['$get']
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
        ? getGetApiVersionDatabasesPostgresqlInstancesInstanceIdKey(args)
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
                (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['$get']
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
          client[':apiVersion'].databases.postgresql.instances[':instanceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionDatabasesPostgresqlInstancesInstanceId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['$get']
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
        ? getGetApiVersionDatabasesPostgresqlInstancesInstanceIdKey(args)
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
                (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['$get']
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
          client[':apiVersion'].databases.postgresql.instances[':instanceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionDatabasesPostgresqlInstancesInstanceIdKey() {
  return [':apiVersion', '/:apiVersion/databases/postgresql/instances/:instanceId', 'PUT'] as const
}

export function usePutApiVersionDatabasesPostgresqlInstancesInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionDatabasesPostgresqlInstancesInstanceIdKey()
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
            (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].databases.postgresql.instances[':instanceId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionDatabasesPostgresqlInstancesInstanceIdKey() {
  return [
    ':apiVersion',
    '/:apiVersion/databases/postgresql/instances/:instanceId',
    'DELETE',
  ] as const
}

export function useDeleteApiVersionDatabasesPostgresqlInstancesInstanceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionDatabasesPostgresqlInstancesInstanceIdKey()
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
            (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].databases.postgresql.instances[':instanceId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionDatabasesPostgresqlInstancesInstanceIdCredentialsKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['credentials']['$get']
  >,
) {
  return [
    ':apiVersion',
    '/:apiVersion/databases/postgresql/instances/:instanceId/credentials',
    args,
  ] as const
}

export function useGetApiVersionDatabasesPostgresqlInstancesInstanceIdCredentials<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['credentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['credentials']['$get']
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
        ? getGetApiVersionDatabasesPostgresqlInstancesInstanceIdCredentialsKey(args)
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
                (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['credentials']['$get']
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
          client[':apiVersion'].databases.postgresql.instances[':instanceId'].credentials.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionDatabasesPostgresqlInstancesInstanceIdCredentials<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['credentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['credentials']['$get']
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
        ? getGetApiVersionDatabasesPostgresqlInstancesInstanceIdCredentialsKey(args)
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
                (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['credentials']['$get']
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
          client[':apiVersion'].databases.postgresql.instances[':instanceId'].credentials.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionDatabasesPostgresqlInstancesInstanceIdCredentialsResetKey() {
  return [
    ':apiVersion',
    '/:apiVersion/databases/postgresql/instances/:instanceId/credentials/reset',
    'POST',
  ] as const
}

export function usePostApiVersionDatabasesPostgresqlInstancesInstanceIdCredentialsReset<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['credentials']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['credentials']['reset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiVersionDatabasesPostgresqlInstancesInstanceIdCredentialsResetKey()
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
            (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['credentials']['reset']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].databases.postgresql.instances[
            ':instanceId'
          ].credentials.reset.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionDatabasesPostgresqlInstancesInstanceIdPatchKey() {
  return [
    ':apiVersion',
    '/:apiVersion/databases/postgresql/instances/:instanceId/patch',
    'POST',
  ] as const
}

export function usePostApiVersionDatabasesPostgresqlInstancesInstanceIdPatch<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['patch']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['patch']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionDatabasesPostgresqlInstancesInstanceIdPatchKey()
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
            (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['patch']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].databases.postgresql.instances[':instanceId'].patch.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionDatabasesPostgresqlInstancesInstanceIdResumeKey() {
  return [
    ':apiVersion',
    '/:apiVersion/databases/postgresql/instances/:instanceId/resume',
    'POST',
  ] as const
}

export function usePostApiVersionDatabasesPostgresqlInstancesInstanceIdResume<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['resume']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['resume']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionDatabasesPostgresqlInstancesInstanceIdResumeKey()
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
            (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['resume']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].databases.postgresql.instances[':instanceId'].resume.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionDatabasesPostgresqlInstancesInstanceIdSslKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['ssl']['$get']
  >,
) {
  return [
    ':apiVersion',
    '/:apiVersion/databases/postgresql/instances/:instanceId/ssl',
    args,
  ] as const
}

export function useGetApiVersionDatabasesPostgresqlInstancesInstanceIdSsl<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['ssl']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['ssl']['$get']
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
        ? getGetApiVersionDatabasesPostgresqlInstancesInstanceIdSslKey(args)
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
                (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['ssl']['$get']
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
          client[':apiVersion'].databases.postgresql.instances[':instanceId'].ssl.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionDatabasesPostgresqlInstancesInstanceIdSsl<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['ssl']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['ssl']['$get']
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
        ? getGetApiVersionDatabasesPostgresqlInstancesInstanceIdSslKey(args)
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
                (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['ssl']['$get']
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
          client[':apiVersion'].databases.postgresql.instances[':instanceId'].ssl.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionDatabasesPostgresqlInstancesInstanceIdSuspendKey() {
  return [
    ':apiVersion',
    '/:apiVersion/databases/postgresql/instances/:instanceId/suspend',
    'POST',
  ] as const
}

export function usePostApiVersionDatabasesPostgresqlInstancesInstanceIdSuspend<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['suspend']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['suspend']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionDatabasesPostgresqlInstancesInstanceIdSuspendKey()
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
            (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['suspend']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].databases.postgresql.instances[':instanceId'].suspend.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionDatabasesTypesKey(
  args: InferRequestType<(typeof client)[':apiVersion']['databases']['types']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/databases/types', args] as const
}

export function useGetApiVersionDatabasesTypes<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['databases']['types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['databases']['types']['$get']>>
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
        ? getGetApiVersionDatabasesTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['databases']['types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].databases.types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionDatabasesTypes<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['databases']['types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['databases']['types']['$get']>>
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
        ? getGetApiVersionDatabasesTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['databases']['types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].databases.types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionDatabasesTypesTypeIdKey(
  args: InferRequestType<(typeof client)[':apiVersion']['databases']['types'][':typeId']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/databases/types/:typeId', args] as const
}

export function useGetApiVersionDatabasesTypesTypeId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['databases']['types'][':typeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['databases']['types'][':typeId']['$get']>
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
        ? getGetApiVersionDatabasesTypesTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['databases']['types'][':typeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].databases.types[':typeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionDatabasesTypesTypeId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['databases']['types'][':typeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['databases']['types'][':typeId']['$get']>
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
        ? getGetApiVersionDatabasesTypesTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['databases']['types'][':typeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].databases.types[':typeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionDomainsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['domains']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/domains', args] as const
}

export function useGetApiVersionDomains<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['domains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['domains']['$get']>>
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
        ? getGetApiVersionDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['domains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionDomains<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['domains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['domains']['$get']>>
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
        ? getGetApiVersionDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['domains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionDomainsKey() {
  return [':apiVersion', '/:apiVersion/domains', 'POST'] as const
}

export function usePostApiVersionDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['domains']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['domains']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionDomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':apiVersion']['domains']['$post']> },
      ) => parseResponse(client[':apiVersion'].domains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionDomainsImportKey() {
  return [':apiVersion', '/:apiVersion/domains/import', 'POST'] as const
}

export function usePostApiVersionDomainsImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['domains']['import']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['domains']['import']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionDomainsImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':apiVersion']['domains']['import']['$post']> },
      ) => parseResponse(client[':apiVersion'].domains.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionDomainsDomainIdKey(
  args: InferRequestType<(typeof client)[':apiVersion']['domains'][':domainId']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/domains/:domainId', args] as const
}

export function useGetApiVersionDomainsDomainId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['domains'][':domainId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['domains'][':domainId']['$get']>>
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
        ? getGetApiVersionDomainsDomainIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['domains'][':domainId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].domains[':domainId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionDomainsDomainId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['domains'][':domainId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['domains'][':domainId']['$get']>>
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
        ? getGetApiVersionDomainsDomainIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['domains'][':domainId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].domains[':domainId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionDomainsDomainIdKey() {
  return [':apiVersion', '/:apiVersion/domains/:domainId', 'PUT'] as const
}

export function usePutApiVersionDomainsDomainId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['domains'][':domainId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['domains'][':domainId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionDomainsDomainIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':apiVersion']['domains'][':domainId']['$put']>
        },
      ) => parseResponse(client[':apiVersion'].domains[':domainId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionDomainsDomainIdKey() {
  return [':apiVersion', '/:apiVersion/domains/:domainId', 'DELETE'] as const
}

export function useDeleteApiVersionDomainsDomainId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['domains'][':domainId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['domains'][':domainId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionDomainsDomainIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':apiVersion']['domains'][':domainId']['$delete']>
        },
      ) => parseResponse(client[':apiVersion'].domains[':domainId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionDomainsDomainIdCloneKey() {
  return [':apiVersion', '/:apiVersion/domains/:domainId/clone', 'POST'] as const
}

export function usePostApiVersionDomainsDomainIdClone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['domains'][':domainId']['clone']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['domains'][':domainId']['clone']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionDomainsDomainIdCloneKey()
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
            (typeof client)[':apiVersion']['domains'][':domainId']['clone']['$post']
          >
        },
      ) =>
        parseResponse(client[':apiVersion'].domains[':domainId'].clone.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionDomainsDomainIdRecordsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['domains'][':domainId']['records']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/domains/:domainId/records', args] as const
}

export function useGetApiVersionDomainsDomainIdRecords<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['domains'][':domainId']['records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['domains'][':domainId']['records']['$get']>
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
        ? getGetApiVersionDomainsDomainIdRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['domains'][':domainId']['records']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].domains[':domainId'].records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionDomainsDomainIdRecords<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['domains'][':domainId']['records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['domains'][':domainId']['records']['$get']>
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
        ? getGetApiVersionDomainsDomainIdRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['domains'][':domainId']['records']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].domains[':domainId'].records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionDomainsDomainIdRecordsKey() {
  return [':apiVersion', '/:apiVersion/domains/:domainId/records', 'POST'] as const
}

export function usePostApiVersionDomainsDomainIdRecords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['domains'][':domainId']['records']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['domains'][':domainId']['records']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionDomainsDomainIdRecordsKey()
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
            (typeof client)[':apiVersion']['domains'][':domainId']['records']['$post']
          >
        },
      ) =>
        parseResponse(client[':apiVersion'].domains[':domainId'].records.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionDomainsDomainIdRecordsRecordIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['domains'][':domainId']['records'][':recordId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/domains/:domainId/records/:recordId', args] as const
}

export function useGetApiVersionDomainsDomainIdRecordsRecordId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['domains'][':domainId']['records'][':recordId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['domains'][':domainId']['records'][':recordId']['$get']
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
        ? getGetApiVersionDomainsDomainIdRecordsRecordIdKey(args)
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
                (typeof client)[':apiVersion']['domains'][':domainId']['records'][':recordId']['$get']
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
          client[':apiVersion'].domains[':domainId'].records[':recordId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionDomainsDomainIdRecordsRecordId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['domains'][':domainId']['records'][':recordId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['domains'][':domainId']['records'][':recordId']['$get']
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
        ? getGetApiVersionDomainsDomainIdRecordsRecordIdKey(args)
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
                (typeof client)[':apiVersion']['domains'][':domainId']['records'][':recordId']['$get']
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
          client[':apiVersion'].domains[':domainId'].records[':recordId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionDomainsDomainIdRecordsRecordIdKey() {
  return [':apiVersion', '/:apiVersion/domains/:domainId/records/:recordId', 'PUT'] as const
}

export function usePutApiVersionDomainsDomainIdRecordsRecordId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['domains'][':domainId']['records'][':recordId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['domains'][':domainId']['records'][':recordId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionDomainsDomainIdRecordsRecordIdKey()
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
            (typeof client)[':apiVersion']['domains'][':domainId']['records'][':recordId']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].domains[':domainId'].records[':recordId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionDomainsDomainIdRecordsRecordIdKey() {
  return [':apiVersion', '/:apiVersion/domains/:domainId/records/:recordId', 'DELETE'] as const
}

export function useDeleteApiVersionDomainsDomainIdRecordsRecordId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['domains'][':domainId']['records'][':recordId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['domains'][':domainId']['records'][':recordId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionDomainsDomainIdRecordsRecordIdKey()
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
            (typeof client)[':apiVersion']['domains'][':domainId']['records'][':recordId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].domains[':domainId'].records[':recordId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionDomainsDomainIdZoneFileKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['domains'][':domainId']['zone-file']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/domains/:domainId/zone-file', args] as const
}

export function useGetApiVersionDomainsDomainIdZoneFile<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['domains'][':domainId']['zone-file']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['domains'][':domainId']['zone-file']['$get']
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
        ? getGetApiVersionDomainsDomainIdZoneFileKey(args)
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
                (typeof client)[':apiVersion']['domains'][':domainId']['zone-file']['$get']
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
          client[':apiVersion'].domains[':domainId']['zone-file'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionDomainsDomainIdZoneFile<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['domains'][':domainId']['zone-file']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['domains'][':domainId']['zone-file']['$get']
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
        ? getGetApiVersionDomainsDomainIdZoneFileKey(args)
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
                (typeof client)[':apiVersion']['domains'][':domainId']['zone-file']['$get']
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
          client[':apiVersion'].domains[':domainId']['zone-file'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionImagesKey(
  args: InferRequestType<(typeof client)[':apiVersion']['images']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/images', args] as const
}

export function useGetApiVersionImages<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['images']['$get']>>
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
        ? getGetApiVersionImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['images']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionImages<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['images']['$get']>>
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
        ? getGetApiVersionImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['images']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionImagesKey() {
  return [':apiVersion', '/:apiVersion/images', 'POST'] as const
}

export function usePostApiVersionImages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':apiVersion']['images']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['images']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionImagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':apiVersion']['images']['$post']> },
      ) => parseResponse(client[':apiVersion'].images.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionImagesSharegroupsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['images']['sharegroups']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/images/sharegroups', args] as const
}

export function useGetApiVersionImagesSharegroups<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['images']['sharegroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['images']['sharegroups']['$get']>>
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
        ? getGetApiVersionImagesSharegroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['images']['sharegroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].images.sharegroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionImagesSharegroups<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['images']['sharegroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['images']['sharegroups']['$get']>>
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
        ? getGetApiVersionImagesSharegroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['images']['sharegroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].images.sharegroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionImagesSharegroupsKey() {
  return [':apiVersion', '/:apiVersion/images/sharegroups', 'POST'] as const
}

export function usePostApiVersionImagesSharegroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['images']['sharegroups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['images']['sharegroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionImagesSharegroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':apiVersion']['images']['sharegroups']['$post']>
        },
      ) => parseResponse(client[':apiVersion'].images.sharegroups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionImagesSharegroupsTokensKey(
  args: InferRequestType<(typeof client)[':apiVersion']['images']['sharegroups']['tokens']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/images/sharegroups/tokens', args] as const
}

export function useGetApiVersionImagesSharegroupsTokens<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['images']['sharegroups']['tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['images']['sharegroups']['tokens']['$get']>
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
        ? getGetApiVersionImagesSharegroupsTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['images']['sharegroups']['tokens']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].images.sharegroups.tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionImagesSharegroupsTokens<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['images']['sharegroups']['tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['images']['sharegroups']['tokens']['$get']>
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
        ? getGetApiVersionImagesSharegroupsTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['images']['sharegroups']['tokens']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].images.sharegroups.tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionImagesSharegroupsTokensKey() {
  return [':apiVersion', '/:apiVersion/images/sharegroups/tokens', 'POST'] as const
}

export function usePostApiVersionImagesSharegroupsTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['images']['sharegroups']['tokens']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['images']['sharegroups']['tokens']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionImagesSharegroupsTokensKey()
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
            (typeof client)[':apiVersion']['images']['sharegroups']['tokens']['$post']
          >
        },
      ) => parseResponse(client[':apiVersion'].images.sharegroups.tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionImagesSharegroupsTokensTokenUuidKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/images/sharegroups/tokens/:tokenUuid', args] as const
}

export function useGetApiVersionImagesSharegroupsTokensTokenUuid<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['$get']
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
        ? getGetApiVersionImagesSharegroupsTokensTokenUuidKey(args)
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
                (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['$get']
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
          client[':apiVersion'].images.sharegroups.tokens[':tokenUuid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionImagesSharegroupsTokensTokenUuid<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['$get']
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
        ? getGetApiVersionImagesSharegroupsTokensTokenUuidKey(args)
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
                (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['$get']
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
          client[':apiVersion'].images.sharegroups.tokens[':tokenUuid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionImagesSharegroupsTokensTokenUuidKey() {
  return [':apiVersion', '/:apiVersion/images/sharegroups/tokens/:tokenUuid', 'PUT'] as const
}

export function usePutApiVersionImagesSharegroupsTokensTokenUuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionImagesSharegroupsTokensTokenUuidKey()
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
            (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].images.sharegroups.tokens[':tokenUuid'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionImagesSharegroupsTokensTokenUuidKey() {
  return [':apiVersion', '/:apiVersion/images/sharegroups/tokens/:tokenUuid', 'DELETE'] as const
}

export function useDeleteApiVersionImagesSharegroupsTokensTokenUuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionImagesSharegroupsTokensTokenUuidKey()
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
            (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].images.sharegroups.tokens[':tokenUuid'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionImagesSharegroupsTokensTokenUuidSharegroupKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['sharegroup']['$get']
  >,
) {
  return [
    ':apiVersion',
    '/:apiVersion/images/sharegroups/tokens/:tokenUuid/sharegroup',
    args,
  ] as const
}

export function useGetApiVersionImagesSharegroupsTokensTokenUuidSharegroup<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['sharegroup']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['sharegroup']['$get']
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
        ? getGetApiVersionImagesSharegroupsTokensTokenUuidSharegroupKey(args)
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
                (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['sharegroup']['$get']
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
          client[':apiVersion'].images.sharegroups.tokens[':tokenUuid'].sharegroup.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionImagesSharegroupsTokensTokenUuidSharegroup<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['sharegroup']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['sharegroup']['$get']
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
        ? getGetApiVersionImagesSharegroupsTokensTokenUuidSharegroupKey(args)
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
                (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['sharegroup']['$get']
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
          client[':apiVersion'].images.sharegroups.tokens[':tokenUuid'].sharegroup.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionImagesSharegroupsTokensTokenUuidSharegroupImagesKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['sharegroup']['images']['$get']
  >,
) {
  return [
    ':apiVersion',
    '/:apiVersion/images/sharegroups/tokens/:tokenUuid/sharegroup/images',
    args,
  ] as const
}

export function useGetApiVersionImagesSharegroupsTokensTokenUuidSharegroupImages<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['sharegroup']['images']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['sharegroup']['images']['$get']
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
        ? getGetApiVersionImagesSharegroupsTokensTokenUuidSharegroupImagesKey(args)
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
                (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['sharegroup']['images']['$get']
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
          client[':apiVersion'].images.sharegroups.tokens[':tokenUuid'].sharegroup.images.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionImagesSharegroupsTokensTokenUuidSharegroupImages<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['sharegroup']['images']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['sharegroup']['images']['$get']
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
        ? getGetApiVersionImagesSharegroupsTokensTokenUuidSharegroupImagesKey(args)
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
                (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['sharegroup']['images']['$get']
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
          client[':apiVersion'].images.sharegroups.tokens[':tokenUuid'].sharegroup.images.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionImagesSharegroupsSharegroupIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/images/sharegroups/:sharegroupId', args] as const
}

export function useGetApiVersionImagesSharegroupsSharegroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['$get']
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
        ? getGetApiVersionImagesSharegroupsSharegroupIdKey(args)
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
                (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['$get']
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
          client[':apiVersion'].images.sharegroups[':sharegroupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionImagesSharegroupsSharegroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['$get']
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
        ? getGetApiVersionImagesSharegroupsSharegroupIdKey(args)
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
                (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['$get']
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
          client[':apiVersion'].images.sharegroups[':sharegroupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionImagesSharegroupsSharegroupIdKey() {
  return [':apiVersion', '/:apiVersion/images/sharegroups/:sharegroupId', 'PUT'] as const
}

export function usePutApiVersionImagesSharegroupsSharegroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionImagesSharegroupsSharegroupIdKey()
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
            (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].images.sharegroups[':sharegroupId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionImagesSharegroupsSharegroupIdKey() {
  return [':apiVersion', '/:apiVersion/images/sharegroups/:sharegroupId', 'DELETE'] as const
}

export function useDeleteApiVersionImagesSharegroupsSharegroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionImagesSharegroupsSharegroupIdKey()
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
            (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].images.sharegroups[':sharegroupId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionImagesSharegroupsSharegroupIdImagesKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['images']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/images/sharegroups/:sharegroupId/images', args] as const
}

export function useGetApiVersionImagesSharegroupsSharegroupIdImages<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['images']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['images']['$get']
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
        ? getGetApiVersionImagesSharegroupsSharegroupIdImagesKey(args)
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
                (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['images']['$get']
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
          client[':apiVersion'].images.sharegroups[':sharegroupId'].images.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionImagesSharegroupsSharegroupIdImages<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['images']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['images']['$get']
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
        ? getGetApiVersionImagesSharegroupsSharegroupIdImagesKey(args)
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
                (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['images']['$get']
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
          client[':apiVersion'].images.sharegroups[':sharegroupId'].images.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionImagesSharegroupsSharegroupIdImagesKey() {
  return [':apiVersion', '/:apiVersion/images/sharegroups/:sharegroupId/images', 'POST'] as const
}

export function usePostApiVersionImagesSharegroupsSharegroupIdImages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['images']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['images']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionImagesSharegroupsSharegroupIdImagesKey()
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
            (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['images']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].images.sharegroups[':sharegroupId'].images.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiVersionImagesSharegroupsSharegroupIdImagesImageIdKey() {
  return [
    ':apiVersion',
    '/:apiVersion/images/sharegroups/:sharegroupId/images/:imageId',
    'PUT',
  ] as const
}

export function usePutApiVersionImagesSharegroupsSharegroupIdImagesImageId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['images'][':imageId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['images'][':imageId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionImagesSharegroupsSharegroupIdImagesImageIdKey()
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
            (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['images'][':imageId']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].images.sharegroups[':sharegroupId'].images[':imageId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionImagesSharegroupsSharegroupIdImagesImageIdKey() {
  return [
    ':apiVersion',
    '/:apiVersion/images/sharegroups/:sharegroupId/images/:imageId',
    'DELETE',
  ] as const
}

export function useDeleteApiVersionImagesSharegroupsSharegroupIdImagesImageId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['images'][':imageId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['images'][':imageId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionImagesSharegroupsSharegroupIdImagesImageIdKey()
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
            (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['images'][':imageId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].images.sharegroups[':sharegroupId'].images[':imageId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionImagesSharegroupsSharegroupIdMembersKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['members']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/images/sharegroups/:sharegroupId/members', args] as const
}

export function useGetApiVersionImagesSharegroupsSharegroupIdMembers<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['members']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['members']['$get']
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
        ? getGetApiVersionImagesSharegroupsSharegroupIdMembersKey(args)
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
                (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['members']['$get']
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
          client[':apiVersion'].images.sharegroups[':sharegroupId'].members.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionImagesSharegroupsSharegroupIdMembers<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['members']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['members']['$get']
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
        ? getGetApiVersionImagesSharegroupsSharegroupIdMembersKey(args)
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
                (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['members']['$get']
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
          client[':apiVersion'].images.sharegroups[':sharegroupId'].members.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionImagesSharegroupsSharegroupIdMembersKey() {
  return [':apiVersion', '/:apiVersion/images/sharegroups/:sharegroupId/members', 'POST'] as const
}

export function usePostApiVersionImagesSharegroupsSharegroupIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['members']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['members']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionImagesSharegroupsSharegroupIdMembersKey()
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
            (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['members']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].images.sharegroups[':sharegroupId'].members.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionImagesSharegroupsSharegroupIdMembersTokenUuidKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['members'][':tokenUuid']['$get']
  >,
) {
  return [
    ':apiVersion',
    '/:apiVersion/images/sharegroups/:sharegroupId/members/:tokenUuid',
    args,
  ] as const
}

export function useGetApiVersionImagesSharegroupsSharegroupIdMembersTokenUuid<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['members'][':tokenUuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['members'][':tokenUuid']['$get']
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
        ? getGetApiVersionImagesSharegroupsSharegroupIdMembersTokenUuidKey(args)
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
                (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['members'][':tokenUuid']['$get']
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
          client[':apiVersion'].images.sharegroups[':sharegroupId'].members[':tokenUuid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionImagesSharegroupsSharegroupIdMembersTokenUuid<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['members'][':tokenUuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['members'][':tokenUuid']['$get']
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
        ? getGetApiVersionImagesSharegroupsSharegroupIdMembersTokenUuidKey(args)
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
                (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['members'][':tokenUuid']['$get']
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
          client[':apiVersion'].images.sharegroups[':sharegroupId'].members[':tokenUuid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionImagesSharegroupsSharegroupIdMembersTokenUuidKey() {
  return [
    ':apiVersion',
    '/:apiVersion/images/sharegroups/:sharegroupId/members/:tokenUuid',
    'PUT',
  ] as const
}

export function usePutApiVersionImagesSharegroupsSharegroupIdMembersTokenUuid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['members'][':tokenUuid']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['members'][':tokenUuid']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionImagesSharegroupsSharegroupIdMembersTokenUuidKey()
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
            (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['members'][':tokenUuid']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].images.sharegroups[':sharegroupId'].members[':tokenUuid'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionImagesSharegroupsSharegroupIdMembersTokenUuidKey() {
  return [
    ':apiVersion',
    '/:apiVersion/images/sharegroups/:sharegroupId/members/:tokenUuid',
    'DELETE',
  ] as const
}

export function useDeleteApiVersionImagesSharegroupsSharegroupIdMembersTokenUuid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['members'][':tokenUuid']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['members'][':tokenUuid']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionImagesSharegroupsSharegroupIdMembersTokenUuidKey()
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
            (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['members'][':tokenUuid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].images.sharegroups[':sharegroupId'].members[':tokenUuid'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionImagesUploadKey() {
  return [':apiVersion', '/:apiVersion/images/upload', 'POST'] as const
}

export function usePostApiVersionImagesUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['images']['upload']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['images']['upload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionImagesUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':apiVersion']['images']['upload']['$post']> },
      ) => parseResponse(client[':apiVersion'].images.upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionImagesImageIdKey(
  args: InferRequestType<(typeof client)[':apiVersion']['images'][':imageId']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/images/:imageId', args] as const
}

export function useGetApiVersionImagesImageId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['images'][':imageId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['images'][':imageId']['$get']>>
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
        ? getGetApiVersionImagesImageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['images'][':imageId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].images[':imageId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionImagesImageId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['images'][':imageId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['images'][':imageId']['$get']>>
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
        ? getGetApiVersionImagesImageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['images'][':imageId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].images[':imageId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionImagesImageIdKey() {
  return [':apiVersion', '/:apiVersion/images/:imageId', 'PUT'] as const
}

export function usePutApiVersionImagesImageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['images'][':imageId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['images'][':imageId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionImagesImageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':apiVersion']['images'][':imageId']['$put']> },
      ) => parseResponse(client[':apiVersion'].images[':imageId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionImagesImageIdKey() {
  return [':apiVersion', '/:apiVersion/images/:imageId', 'DELETE'] as const
}

export function useDeleteApiVersionImagesImageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['images'][':imageId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['images'][':imageId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionImagesImageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':apiVersion']['images'][':imageId']['$delete']>
        },
      ) => parseResponse(client[':apiVersion'].images[':imageId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionImagesImageIdRegionsKey() {
  return [':apiVersion', '/:apiVersion/images/:imageId/regions', 'POST'] as const
}

export function usePostApiVersionImagesImageIdRegions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['images'][':imageId']['regions']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['images'][':imageId']['regions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionImagesImageIdRegionsKey()
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
            (typeof client)[':apiVersion']['images'][':imageId']['regions']['$post']
          >
        },
      ) =>
        parseResponse(client[':apiVersion'].images[':imageId'].regions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionImagesImageIdSharegroupsKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images'][':imageId']['sharegroups']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/images/:imageId/sharegroups', args] as const
}

export function useGetApiVersionImagesImageIdSharegroups<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images'][':imageId']['sharegroups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['images'][':imageId']['sharegroups']['$get']
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
        ? getGetApiVersionImagesImageIdSharegroupsKey(args)
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
                (typeof client)[':apiVersion']['images'][':imageId']['sharegroups']['$get']
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
          client[':apiVersion'].images[':imageId'].sharegroups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionImagesImageIdSharegroups<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images'][':imageId']['sharegroups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['images'][':imageId']['sharegroups']['$get']
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
        ? getGetApiVersionImagesImageIdSharegroupsKey(args)
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
                (typeof client)[':apiVersion']['images'][':imageId']['sharegroups']['$get']
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
          client[':apiVersion'].images[':imageId'].sharegroups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionLinodeInstancesKey(
  args: InferRequestType<(typeof client)[':apiVersion']['linode']['instances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':apiVersion', '/:apiVersion/linode/instances', keyArgs] as const
}

export function useGetApiVersionLinodeInstances<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['linode']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['linode']['instances']['$get']>>
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
        ? getGetApiVersionLinodeInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['linode']['instances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].linode.instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLinodeInstances<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['linode']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['linode']['instances']['$get']>>
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
        ? getGetApiVersionLinodeInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['linode']['instances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].linode.instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionLinodeInstancesKey() {
  return [':apiVersion', '/:apiVersion/linode/instances', 'POST'] as const
}

export function usePostApiVersionLinodeInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['linode']['instances']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['linode']['instances']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLinodeInstancesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':apiVersion']['linode']['instances']['$post']>
        },
      ) => parseResponse(client[':apiVersion'].linode.instances.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionLinodeInstancesLinodeIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId', args] as const
}

export function useGetApiVersionLinodeInstancesLinodeId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['linode']['instances'][':linodeId']['$get']>
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
        ? getGetApiVersionLinodeInstancesLinodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['linode']['instances'][':linodeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLinodeInstancesLinodeId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['linode']['instances'][':linodeId']['$get']>
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
        ? getGetApiVersionLinodeInstancesLinodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['linode']['instances'][':linodeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionLinodeInstancesLinodeIdKey() {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId', 'PUT'] as const
}

export function usePutApiVersionLinodeInstancesLinodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['linode']['instances'][':linodeId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['linode']['instances'][':linodeId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionLinodeInstancesLinodeIdKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['$put']
          >
        },
      ) =>
        parseResponse(client[':apiVersion'].linode.instances[':linodeId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionLinodeInstancesLinodeIdKey() {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId', 'DELETE'] as const
}

export function useDeleteApiVersionLinodeInstancesLinodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['linode']['instances'][':linodeId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionLinodeInstancesLinodeIdKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionLinodeInstancesLinodeIdBackupsKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/backups', args] as const
}

export function useGetApiVersionLinodeInstancesLinodeIdBackups<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdBackupsKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].backups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLinodeInstancesLinodeIdBackups<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdBackupsKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].backups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionLinodeInstancesLinodeIdBackupsKey() {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/backups', 'POST'] as const
}

export function usePostApiVersionLinodeInstancesLinodeIdBackups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLinodeInstancesLinodeIdBackupsKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].backups.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionLinodeInstancesLinodeIdBackupsCancelKey() {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/backups/cancel', 'POST'] as const
}

export function usePostApiVersionLinodeInstancesLinodeIdBackupsCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLinodeInstancesLinodeIdBackupsCancelKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].backups.cancel.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionLinodeInstancesLinodeIdBackupsEnableKey() {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/backups/enable', 'POST'] as const
}

export function usePostApiVersionLinodeInstancesLinodeIdBackupsEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups']['enable']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups']['enable']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLinodeInstancesLinodeIdBackupsEnableKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups']['enable']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].backups.enable.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionLinodeInstancesLinodeIdBackupsBackupIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups'][':backupId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/backups/:backupId', args] as const
}

export function useGetApiVersionLinodeInstancesLinodeIdBackupsBackupId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups'][':backupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups'][':backupId']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdBackupsBackupIdKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups'][':backupId']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].backups[':backupId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLinodeInstancesLinodeIdBackupsBackupId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups'][':backupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups'][':backupId']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdBackupsBackupIdKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups'][':backupId']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].backups[':backupId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionLinodeInstancesLinodeIdBackupsBackupIdRestoreKey() {
  return [
    ':apiVersion',
    '/:apiVersion/linode/instances/:linodeId/backups/:backupId/restore',
    'POST',
  ] as const
}

export function usePostApiVersionLinodeInstancesLinodeIdBackupsBackupIdRestore<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups'][':backupId']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups'][':backupId']['restore']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLinodeInstancesLinodeIdBackupsBackupIdRestoreKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups'][':backupId']['restore']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].backups[':backupId'].restore.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionLinodeInstancesLinodeIdBootKey() {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/boot', 'POST'] as const
}

export function usePostApiVersionLinodeInstancesLinodeIdBoot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['boot']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['boot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLinodeInstancesLinodeIdBootKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['boot']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].boot.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionLinodeInstancesLinodeIdCloneKey() {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/clone', 'POST'] as const
}

export function usePostApiVersionLinodeInstancesLinodeIdClone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['clone']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['clone']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLinodeInstancesLinodeIdCloneKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['clone']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].clone.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionLinodeInstancesLinodeIdConfigsKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/configs', args] as const
}

export function useGetApiVersionLinodeInstancesLinodeIdConfigs<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdConfigsKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].configs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLinodeInstancesLinodeIdConfigs<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdConfigsKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].configs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionLinodeInstancesLinodeIdConfigsKey() {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/configs', 'POST'] as const
}

export function usePostApiVersionLinodeInstancesLinodeIdConfigs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLinodeInstancesLinodeIdConfigsKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].configs.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionLinodeInstancesLinodeIdConfigsConfigIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/configs/:configId', args] as const
}

export function useGetApiVersionLinodeInstancesLinodeIdConfigsConfigId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdConfigsConfigIdKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].configs[':configId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLinodeInstancesLinodeIdConfigsConfigId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdConfigsConfigIdKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].configs[':configId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionLinodeInstancesLinodeIdConfigsConfigIdKey() {
  return [
    ':apiVersion',
    '/:apiVersion/linode/instances/:linodeId/configs/:configId',
    'PUT',
  ] as const
}

export function usePutApiVersionLinodeInstancesLinodeIdConfigsConfigId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionLinodeInstancesLinodeIdConfigsConfigIdKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].configs[':configId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionLinodeInstancesLinodeIdConfigsConfigIdKey() {
  return [
    ':apiVersion',
    '/:apiVersion/linode/instances/:linodeId/configs/:configId',
    'DELETE',
  ] as const
}

export function useDeleteApiVersionLinodeInstancesLinodeIdConfigsConfigId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionLinodeInstancesLinodeIdConfigsConfigIdKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].configs[':configId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces']['$get']
  >,
) {
  return [
    ':apiVersion',
    '/:apiVersion/linode/instances/:linodeId/configs/:configId/interfaces',
    args,
  ] as const
}

export function useGetApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfaces<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].configs[':configId'].interfaces.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfaces<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].configs[':configId'].interfaces.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesKey() {
  return [
    ':apiVersion',
    '/:apiVersion/linode/instances/:linodeId/configs/:configId/interfaces',
    'POST',
  ] as const
}

export function usePostApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfaces<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].configs[':configId'].interfaces.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesOrderKey() {
  return [
    ':apiVersion',
    '/:apiVersion/linode/instances/:linodeId/configs/:configId/interfaces/order',
    'POST',
  ] as const
}

export function usePostApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesOrder<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces']['order']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces']['order']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesOrderKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces']['order']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].configs[
            ':configId'
          ].interfaces.order.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces'][':interfaceId']['$get']
  >,
) {
  return [
    ':apiVersion',
    '/:apiVersion/linode/instances/:linodeId/configs/:configId/interfaces/:interfaceId',
    args,
  ] as const
}

export function useGetApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces'][':interfaceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces'][':interfaceId']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceIdKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces'][':interfaceId']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].configs[':configId'].interfaces[
            ':interfaceId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces'][':interfaceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces'][':interfaceId']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceIdKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces'][':interfaceId']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].configs[':configId'].interfaces[
            ':interfaceId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceIdKey() {
  return [
    ':apiVersion',
    '/:apiVersion/linode/instances/:linodeId/configs/:configId/interfaces/:interfaceId',
    'PUT',
  ] as const
}

export function usePutApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces'][':interfaceId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces'][':interfaceId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceIdKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces'][':interfaceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].configs[':configId'].interfaces[
            ':interfaceId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceIdKey() {
  return [
    ':apiVersion',
    '/:apiVersion/linode/instances/:linodeId/configs/:configId/interfaces/:interfaceId',
    'DELETE',
  ] as const
}

export function useDeleteApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces'][':interfaceId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces'][':interfaceId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceIdKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces'][':interfaceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].configs[':configId'].interfaces[
            ':interfaceId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionLinodeInstancesLinodeIdDisksKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/disks', args] as const
}

export function useGetApiVersionLinodeInstancesLinodeIdDisks<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdDisksKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].disks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLinodeInstancesLinodeIdDisks<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdDisksKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].disks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionLinodeInstancesLinodeIdDisksKey() {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/disks', 'POST'] as const
}

export function usePostApiVersionLinodeInstancesLinodeIdDisks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLinodeInstancesLinodeIdDisksKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].disks.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionLinodeInstancesLinodeIdDisksDiskIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks'][':diskId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/disks/:diskId', args] as const
}

export function useGetApiVersionLinodeInstancesLinodeIdDisksDiskId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks'][':diskId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks'][':diskId']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdDisksDiskIdKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks'][':diskId']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].disks[':diskId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLinodeInstancesLinodeIdDisksDiskId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks'][':diskId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks'][':diskId']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdDisksDiskIdKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks'][':diskId']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].disks[':diskId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionLinodeInstancesLinodeIdDisksDiskIdKey() {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/disks/:diskId', 'PUT'] as const
}

export function usePutApiVersionLinodeInstancesLinodeIdDisksDiskId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks'][':diskId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks'][':diskId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionLinodeInstancesLinodeIdDisksDiskIdKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks'][':diskId']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].disks[':diskId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionLinodeInstancesLinodeIdDisksDiskIdKey() {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/disks/:diskId', 'DELETE'] as const
}

export function useDeleteApiVersionLinodeInstancesLinodeIdDisksDiskId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks'][':diskId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks'][':diskId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionLinodeInstancesLinodeIdDisksDiskIdKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks'][':diskId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].disks[':diskId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionLinodeInstancesLinodeIdDisksDiskIdCloneKey() {
  return [
    ':apiVersion',
    '/:apiVersion/linode/instances/:linodeId/disks/:diskId/clone',
    'POST',
  ] as const
}

export function usePostApiVersionLinodeInstancesLinodeIdDisksDiskIdClone<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks'][':diskId']['clone']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks'][':diskId']['clone']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLinodeInstancesLinodeIdDisksDiskIdCloneKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks'][':diskId']['clone']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].disks[':diskId'].clone.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionLinodeInstancesLinodeIdDisksDiskIdPasswordKey() {
  return [
    ':apiVersion',
    '/:apiVersion/linode/instances/:linodeId/disks/:diskId/password',
    'POST',
  ] as const
}

export function usePostApiVersionLinodeInstancesLinodeIdDisksDiskIdPassword<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks'][':diskId']['password']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks'][':diskId']['password']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLinodeInstancesLinodeIdDisksDiskIdPasswordKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks'][':diskId']['password']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].disks[':diskId'].password.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionLinodeInstancesLinodeIdDisksDiskIdResizeKey() {
  return [
    ':apiVersion',
    '/:apiVersion/linode/instances/:linodeId/disks/:diskId/resize',
    'POST',
  ] as const
}

export function usePostApiVersionLinodeInstancesLinodeIdDisksDiskIdResize<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks'][':diskId']['resize']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks'][':diskId']['resize']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLinodeInstancesLinodeIdDisksDiskIdResizeKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks'][':diskId']['resize']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].disks[':diskId'].resize.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionLinodeInstancesLinodeIdFirewallsKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['firewalls']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/firewalls', args] as const
}

export function useGetApiVersionLinodeInstancesLinodeIdFirewalls<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['firewalls']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['firewalls']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdFirewallsKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['firewalls']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].firewalls.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLinodeInstancesLinodeIdFirewalls<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['firewalls']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['firewalls']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdFirewallsKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['firewalls']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].firewalls.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionLinodeInstancesLinodeIdFirewallsKey() {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/firewalls', 'PUT'] as const
}

export function usePutApiVersionLinodeInstancesLinodeIdFirewalls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['firewalls']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['firewalls']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionLinodeInstancesLinodeIdFirewallsKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['firewalls']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].firewalls.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionLinodeInstancesLinodeIdFirewallsApplyKey() {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/firewalls/apply', 'POST'] as const
}

export function usePostApiVersionLinodeInstancesLinodeIdFirewallsApply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['firewalls']['apply']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['firewalls']['apply']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLinodeInstancesLinodeIdFirewallsApplyKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['firewalls']['apply']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].firewalls.apply.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionLinodeInstancesLinodeIdInterfacesKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/interfaces', args] as const
}

export function useGetApiVersionLinodeInstancesLinodeIdInterfaces<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdInterfacesKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].interfaces.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLinodeInstancesLinodeIdInterfaces<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdInterfacesKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].interfaces.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionLinodeInstancesLinodeIdInterfacesKey() {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/interfaces', 'POST'] as const
}

export function usePostApiVersionLinodeInstancesLinodeIdInterfaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLinodeInstancesLinodeIdInterfacesKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].interfaces.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionLinodeInstancesLinodeIdInterfacesHistoryKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['history']['$get']
  >,
) {
  return [
    ':apiVersion',
    '/:apiVersion/linode/instances/:linodeId/interfaces/history',
    args,
  ] as const
}

export function useGetApiVersionLinodeInstancesLinodeIdInterfacesHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['history']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdInterfacesHistoryKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['history']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].interfaces.history.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLinodeInstancesLinodeIdInterfacesHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['history']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdInterfacesHistoryKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['history']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].interfaces.history.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionLinodeInstancesLinodeIdInterfacesSettingsKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['settings']['$get']
  >,
) {
  return [
    ':apiVersion',
    '/:apiVersion/linode/instances/:linodeId/interfaces/settings',
    args,
  ] as const
}

export function useGetApiVersionLinodeInstancesLinodeIdInterfacesSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['settings']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdInterfacesSettingsKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['settings']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].interfaces.settings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLinodeInstancesLinodeIdInterfacesSettings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['settings']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdInterfacesSettingsKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['settings']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].interfaces.settings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionLinodeInstancesLinodeIdInterfacesSettingsKey() {
  return [
    ':apiVersion',
    '/:apiVersion/linode/instances/:linodeId/interfaces/settings',
    'PUT',
  ] as const
}

export function usePutApiVersionLinodeInstancesLinodeIdInterfacesSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['settings']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['settings']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionLinodeInstancesLinodeIdInterfacesSettingsKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['settings']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].interfaces.settings.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces'][':interfaceId']['$get']
  >,
) {
  return [
    ':apiVersion',
    '/:apiVersion/linode/instances/:linodeId/interfaces/:interfaceId',
    args,
  ] as const
}

export function useGetApiVersionLinodeInstancesLinodeIdInterfacesInterfaceId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces'][':interfaceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces'][':interfaceId']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces'][':interfaceId']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].interfaces[':interfaceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLinodeInstancesLinodeIdInterfacesInterfaceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces'][':interfaceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces'][':interfaceId']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces'][':interfaceId']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].interfaces[':interfaceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdKey() {
  return [
    ':apiVersion',
    '/:apiVersion/linode/instances/:linodeId/interfaces/:interfaceId',
    'PUT',
  ] as const
}

export function usePutApiVersionLinodeInstancesLinodeIdInterfacesInterfaceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces'][':interfaceId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces'][':interfaceId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces'][':interfaceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].interfaces[':interfaceId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdKey() {
  return [
    ':apiVersion',
    '/:apiVersion/linode/instances/:linodeId/interfaces/:interfaceId',
    'DELETE',
  ] as const
}

export function useDeleteApiVersionLinodeInstancesLinodeIdInterfacesInterfaceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces'][':interfaceId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces'][':interfaceId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces'][':interfaceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].interfaces[':interfaceId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdFirewallsKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces'][':interfaceId']['firewalls']['$get']
  >,
) {
  return [
    ':apiVersion',
    '/:apiVersion/linode/instances/:linodeId/interfaces/:interfaceId/firewalls',
    args,
  ] as const
}

export function useGetApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdFirewalls<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces'][':interfaceId']['firewalls']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces'][':interfaceId']['firewalls']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdFirewallsKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces'][':interfaceId']['firewalls']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].interfaces[
            ':interfaceId'
          ].firewalls.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdFirewalls<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces'][':interfaceId']['firewalls']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces'][':interfaceId']['firewalls']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdFirewallsKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces'][':interfaceId']['firewalls']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].interfaces[
            ':interfaceId'
          ].firewalls.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionLinodeInstancesLinodeIdIpsKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['ips']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/ips', args] as const
}

export function useGetApiVersionLinodeInstancesLinodeIdIps<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['ips']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['ips']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdIpsKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['ips']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].ips.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLinodeInstancesLinodeIdIps<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['ips']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['ips']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdIpsKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['ips']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].ips.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionLinodeInstancesLinodeIdIpsKey() {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/ips', 'POST'] as const
}

export function usePostApiVersionLinodeInstancesLinodeIdIps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['ips']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['ips']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLinodeInstancesLinodeIdIpsKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['ips']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].ips.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionLinodeInstancesLinodeIdIpsAddressKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['ips'][':address']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/ips/:address', args] as const
}

export function useGetApiVersionLinodeInstancesLinodeIdIpsAddress<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['ips'][':address']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['ips'][':address']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdIpsAddressKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['ips'][':address']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].ips[':address'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLinodeInstancesLinodeIdIpsAddress<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['ips'][':address']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['ips'][':address']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdIpsAddressKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['ips'][':address']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].ips[':address'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionLinodeInstancesLinodeIdIpsAddressKey() {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/ips/:address', 'PUT'] as const
}

export function usePutApiVersionLinodeInstancesLinodeIdIpsAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['ips'][':address']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['ips'][':address']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionLinodeInstancesLinodeIdIpsAddressKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['ips'][':address']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].ips[':address'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionLinodeInstancesLinodeIdIpsAddressKey() {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/ips/:address', 'DELETE'] as const
}

export function useDeleteApiVersionLinodeInstancesLinodeIdIpsAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['ips'][':address']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['ips'][':address']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionLinodeInstancesLinodeIdIpsAddressKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['ips'][':address']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].ips[':address'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionLinodeInstancesLinodeIdMigrateKey() {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/migrate', 'POST'] as const
}

export function usePostApiVersionLinodeInstancesLinodeIdMigrate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['migrate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['migrate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLinodeInstancesLinodeIdMigrateKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['migrate']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].migrate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionLinodeInstancesLinodeIdMutateKey() {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/mutate', 'POST'] as const
}

export function usePostApiVersionLinodeInstancesLinodeIdMutate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['mutate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['mutate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLinodeInstancesLinodeIdMutateKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['mutate']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].mutate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionLinodeInstancesLinodeIdNodebalancersKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['nodebalancers']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/nodebalancers', args] as const
}

export function useGetApiVersionLinodeInstancesLinodeIdNodebalancers<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['nodebalancers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['nodebalancers']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdNodebalancersKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['nodebalancers']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].nodebalancers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLinodeInstancesLinodeIdNodebalancers<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['nodebalancers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['nodebalancers']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdNodebalancersKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['nodebalancers']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].nodebalancers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionLinodeInstancesLinodeIdPasswordKey() {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/password', 'POST'] as const
}

export function usePostApiVersionLinodeInstancesLinodeIdPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['password']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['password']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLinodeInstancesLinodeIdPasswordKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['password']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].password.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionLinodeInstancesLinodeIdRebootKey() {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/reboot', 'POST'] as const
}

export function usePostApiVersionLinodeInstancesLinodeIdReboot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['reboot']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['reboot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLinodeInstancesLinodeIdRebootKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['reboot']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].reboot.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionLinodeInstancesLinodeIdRebuildKey() {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/rebuild', 'POST'] as const
}

export function usePostApiVersionLinodeInstancesLinodeIdRebuild<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['rebuild']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['rebuild']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLinodeInstancesLinodeIdRebuildKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['rebuild']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].rebuild.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionLinodeInstancesLinodeIdRescueKey() {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/rescue', 'POST'] as const
}

export function usePostApiVersionLinodeInstancesLinodeIdRescue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['rescue']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['rescue']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLinodeInstancesLinodeIdRescueKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['rescue']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].rescue.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionLinodeInstancesLinodeIdResizeKey() {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/resize', 'POST'] as const
}

export function usePostApiVersionLinodeInstancesLinodeIdResize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['resize']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['resize']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLinodeInstancesLinodeIdResizeKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['resize']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].resize.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionLinodeInstancesLinodeIdShutdownKey() {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/shutdown', 'POST'] as const
}

export function usePostApiVersionLinodeInstancesLinodeIdShutdown<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['shutdown']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['shutdown']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLinodeInstancesLinodeIdShutdownKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['shutdown']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId'].shutdown.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionLinodeInstancesLinodeIdStatsKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['stats']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/stats', args] as const
}

export function useGetApiVersionLinodeInstancesLinodeIdStats<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['stats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['stats']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdStatsKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['stats']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].stats.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLinodeInstancesLinodeIdStats<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['stats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['stats']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdStatsKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['stats']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].stats.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionLinodeInstancesLinodeIdStatsYearMonthKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['stats'][':year'][':month']['$get']
  >,
) {
  return [
    ':apiVersion',
    '/:apiVersion/linode/instances/:linodeId/stats/:year/:month',
    args,
  ] as const
}

export function useGetApiVersionLinodeInstancesLinodeIdStatsYearMonth<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['stats'][':year'][':month']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['stats'][':year'][':month']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdStatsYearMonthKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['stats'][':year'][':month']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].stats[':year'][':month'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLinodeInstancesLinodeIdStatsYearMonth<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['stats'][':year'][':month']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['stats'][':year'][':month']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdStatsYearMonthKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['stats'][':year'][':month']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].stats[':year'][':month'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionLinodeInstancesLinodeIdTransferKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['transfer']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/transfer', args] as const
}

export function useGetApiVersionLinodeInstancesLinodeIdTransfer<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['transfer']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['transfer']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdTransferKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['transfer']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].transfer.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLinodeInstancesLinodeIdTransfer<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['transfer']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['transfer']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdTransferKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['transfer']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].transfer.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionLinodeInstancesLinodeIdTransferYearMonthKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['transfer'][':year'][':month']['$get']
  >,
) {
  return [
    ':apiVersion',
    '/:apiVersion/linode/instances/:linodeId/transfer/:year/:month',
    args,
  ] as const
}

export function useGetApiVersionLinodeInstancesLinodeIdTransferYearMonth<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['transfer'][':year'][':month']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['transfer'][':year'][':month']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdTransferYearMonthKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['transfer'][':year'][':month']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].transfer[':year'][':month'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLinodeInstancesLinodeIdTransferYearMonth<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['transfer'][':year'][':month']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['transfer'][':year'][':month']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdTransferYearMonthKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['transfer'][':year'][':month']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].transfer[':year'][':month'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionLinodeInstancesLinodeIdUpgradeInterfacesKey() {
  return [
    ':apiVersion',
    '/:apiVersion/linode/instances/:linodeId/upgrade-interfaces',
    'POST',
  ] as const
}

export function usePostApiVersionLinodeInstancesLinodeIdUpgradeInterfaces<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['upgrade-interfaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['upgrade-interfaces']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLinodeInstancesLinodeIdUpgradeInterfacesKey()
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
            (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['upgrade-interfaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.instances[':linodeId']['upgrade-interfaces'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionLinodeInstancesLinodeIdVolumesKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['volumes']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/linode/instances/:linodeId/volumes', args] as const
}

export function useGetApiVersionLinodeInstancesLinodeIdVolumes<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['volumes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['volumes']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdVolumesKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['volumes']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].volumes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLinodeInstancesLinodeIdVolumes<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['volumes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['volumes']['$get']
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
        ? getGetApiVersionLinodeInstancesLinodeIdVolumesKey(args)
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
                (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['volumes']['$get']
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
          client[':apiVersion'].linode.instances[':linodeId'].volumes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionLinodeKernelsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['linode']['kernels']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/linode/kernels', args] as const
}

export function useGetApiVersionLinodeKernels<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['linode']['kernels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['linode']['kernels']['$get']>>
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
        ? getGetApiVersionLinodeKernelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['linode']['kernels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].linode.kernels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLinodeKernels<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['linode']['kernels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['linode']['kernels']['$get']>>
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
        ? getGetApiVersionLinodeKernelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['linode']['kernels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].linode.kernels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionLinodeKernelsKernelIdKey(
  args: InferRequestType<(typeof client)[':apiVersion']['linode']['kernels'][':kernelId']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/linode/kernels/:kernelId', args] as const
}

export function useGetApiVersionLinodeKernelsKernelId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['linode']['kernels'][':kernelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['linode']['kernels'][':kernelId']['$get']>
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
        ? getGetApiVersionLinodeKernelsKernelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['linode']['kernels'][':kernelId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].linode.kernels[':kernelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLinodeKernelsKernelId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['linode']['kernels'][':kernelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['linode']['kernels'][':kernelId']['$get']>
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
        ? getGetApiVersionLinodeKernelsKernelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['linode']['kernels'][':kernelId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].linode.kernels[':kernelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionLinodeStackscriptsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['linode']['stackscripts']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/linode/stackscripts', args] as const
}

export function useGetApiVersionLinodeStackscripts<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['linode']['stackscripts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['linode']['stackscripts']['$get']>>
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
        ? getGetApiVersionLinodeStackscriptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['linode']['stackscripts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].linode.stackscripts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLinodeStackscripts<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['linode']['stackscripts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['linode']['stackscripts']['$get']>>
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
        ? getGetApiVersionLinodeStackscriptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['linode']['stackscripts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].linode.stackscripts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionLinodeStackscriptsKey() {
  return [':apiVersion', '/:apiVersion/linode/stackscripts', 'POST'] as const
}

export function usePostApiVersionLinodeStackscripts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['linode']['stackscripts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['linode']['stackscripts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLinodeStackscriptsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':apiVersion']['linode']['stackscripts']['$post']>
        },
      ) => parseResponse(client[':apiVersion'].linode.stackscripts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionLinodeStackscriptsStackscriptIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['stackscripts'][':stackscriptId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/linode/stackscripts/:stackscriptId', args] as const
}

export function useGetApiVersionLinodeStackscriptsStackscriptId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['stackscripts'][':stackscriptId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['stackscripts'][':stackscriptId']['$get']
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
        ? getGetApiVersionLinodeStackscriptsStackscriptIdKey(args)
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
                (typeof client)[':apiVersion']['linode']['stackscripts'][':stackscriptId']['$get']
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
          client[':apiVersion'].linode.stackscripts[':stackscriptId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLinodeStackscriptsStackscriptId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['stackscripts'][':stackscriptId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['linode']['stackscripts'][':stackscriptId']['$get']
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
        ? getGetApiVersionLinodeStackscriptsStackscriptIdKey(args)
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
                (typeof client)[':apiVersion']['linode']['stackscripts'][':stackscriptId']['$get']
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
          client[':apiVersion'].linode.stackscripts[':stackscriptId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionLinodeStackscriptsStackscriptIdKey() {
  return [':apiVersion', '/:apiVersion/linode/stackscripts/:stackscriptId', 'PUT'] as const
}

export function usePutApiVersionLinodeStackscriptsStackscriptId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['stackscripts'][':stackscriptId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['stackscripts'][':stackscriptId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionLinodeStackscriptsStackscriptIdKey()
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
            (typeof client)[':apiVersion']['linode']['stackscripts'][':stackscriptId']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.stackscripts[':stackscriptId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionLinodeStackscriptsStackscriptIdKey() {
  return [':apiVersion', '/:apiVersion/linode/stackscripts/:stackscriptId', 'DELETE'] as const
}

export function useDeleteApiVersionLinodeStackscriptsStackscriptId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['linode']['stackscripts'][':stackscriptId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['linode']['stackscripts'][':stackscriptId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionLinodeStackscriptsStackscriptIdKey()
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
            (typeof client)[':apiVersion']['linode']['stackscripts'][':stackscriptId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].linode.stackscripts[':stackscriptId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionLinodeTypesKey(
  args: InferRequestType<(typeof client)[':apiVersion']['linode']['types']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/linode/types', args] as const
}

export function useGetApiVersionLinodeTypes<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['linode']['types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['linode']['types']['$get']>>
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
        ? getGetApiVersionLinodeTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['linode']['types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].linode.types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLinodeTypes<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['linode']['types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['linode']['types']['$get']>>
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
        ? getGetApiVersionLinodeTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['linode']['types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].linode.types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionLinodeTypesTypeIdKey(
  args: InferRequestType<(typeof client)[':apiVersion']['linode']['types'][':typeId']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/linode/types/:typeId', args] as const
}

export function useGetApiVersionLinodeTypesTypeId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['linode']['types'][':typeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['linode']['types'][':typeId']['$get']>
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
        ? getGetApiVersionLinodeTypesTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['linode']['types'][':typeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].linode.types[':typeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLinodeTypesTypeId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['linode']['types'][':typeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['linode']['types'][':typeId']['$get']>
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
        ? getGetApiVersionLinodeTypesTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['linode']['types'][':typeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].linode.types[':typeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionLkeClustersKey(
  args: InferRequestType<(typeof client)[':apiVersion']['lke']['clusters']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/lke/clusters', args] as const
}

export function useGetApiVersionLkeClusters<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['lke']['clusters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['lke']['clusters']['$get']>>
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
        ? getGetApiVersionLkeClustersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['lke']['clusters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].lke.clusters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLkeClusters<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['lke']['clusters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['lke']['clusters']['$get']>>
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
        ? getGetApiVersionLkeClustersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['lke']['clusters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].lke.clusters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionLkeClustersKey() {
  return [':apiVersion', '/:apiVersion/lke/clusters', 'POST'] as const
}

export function usePostApiVersionLkeClusters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['lke']['clusters']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['lke']['clusters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLkeClustersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':apiVersion']['lke']['clusters']['$post']> },
      ) => parseResponse(client[':apiVersion'].lke.clusters.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionLkeClustersClusterIdKey(
  args: InferRequestType<(typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/lke/clusters/:clusterId', args] as const
}

export function useGetApiVersionLkeClustersClusterId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['$get']>
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
        ? getGetApiVersionLkeClustersClusterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].lke.clusters[':clusterId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLkeClustersClusterId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['$get']>
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
        ? getGetApiVersionLkeClustersClusterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].lke.clusters[':clusterId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionLkeClustersClusterIdKey() {
  return [':apiVersion', '/:apiVersion/lke/clusters/:clusterId', 'PUT'] as const
}

export function usePutApiVersionLkeClustersClusterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionLkeClustersClusterIdKey()
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
            (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['$put']
          >
        },
      ) => parseResponse(client[':apiVersion'].lke.clusters[':clusterId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionLkeClustersClusterIdKey() {
  return [':apiVersion', '/:apiVersion/lke/clusters/:clusterId', 'DELETE'] as const
}

export function useDeleteApiVersionLkeClustersClusterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionLkeClustersClusterIdKey()
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
            (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['$delete']
          >
        },
      ) =>
        parseResponse(client[':apiVersion'].lke.clusters[':clusterId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionLkeClustersClusterIdApiEndpointsKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['api-endpoints']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/lke/clusters/:clusterId/api-endpoints', args] as const
}

export function useGetApiVersionLkeClustersClusterIdApiEndpoints<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['api-endpoints']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['api-endpoints']['$get']
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
        ? getGetApiVersionLkeClustersClusterIdApiEndpointsKey(args)
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
                (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['api-endpoints']['$get']
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
          client[':apiVersion'].lke.clusters[':clusterId']['api-endpoints'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLkeClustersClusterIdApiEndpoints<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['api-endpoints']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['api-endpoints']['$get']
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
        ? getGetApiVersionLkeClustersClusterIdApiEndpointsKey(args)
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
                (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['api-endpoints']['$get']
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
          client[':apiVersion'].lke.clusters[':clusterId']['api-endpoints'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionLkeClustersClusterIdControlPlaneAclKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['control_plane_acl']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/lke/clusters/:clusterId/control_plane_acl', args] as const
}

export function useGetApiVersionLkeClustersClusterIdControlPlaneAcl<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['control_plane_acl']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['control_plane_acl']['$get']
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
        ? getGetApiVersionLkeClustersClusterIdControlPlaneAclKey(args)
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
                (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['control_plane_acl']['$get']
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
          client[':apiVersion'].lke.clusters[':clusterId'].control_plane_acl.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLkeClustersClusterIdControlPlaneAcl<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['control_plane_acl']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['control_plane_acl']['$get']
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
        ? getGetApiVersionLkeClustersClusterIdControlPlaneAclKey(args)
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
                (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['control_plane_acl']['$get']
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
          client[':apiVersion'].lke.clusters[':clusterId'].control_plane_acl.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionLkeClustersClusterIdControlPlaneAclKey() {
  return [':apiVersion', '/:apiVersion/lke/clusters/:clusterId/control_plane_acl', 'PUT'] as const
}

export function usePutApiVersionLkeClustersClusterIdControlPlaneAcl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['control_plane_acl']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['control_plane_acl']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionLkeClustersClusterIdControlPlaneAclKey()
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
            (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['control_plane_acl']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].lke.clusters[':clusterId'].control_plane_acl.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionLkeClustersClusterIdControlPlaneAclKey() {
  return [
    ':apiVersion',
    '/:apiVersion/lke/clusters/:clusterId/control_plane_acl',
    'DELETE',
  ] as const
}

export function useDeleteApiVersionLkeClustersClusterIdControlPlaneAcl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['control_plane_acl']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['control_plane_acl']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionLkeClustersClusterIdControlPlaneAclKey()
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
            (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['control_plane_acl']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].lke.clusters[':clusterId'].control_plane_acl.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionLkeClustersClusterIdDashboardKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['dashboard']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/lke/clusters/:clusterId/dashboard', args] as const
}

export function useGetApiVersionLkeClustersClusterIdDashboard<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['dashboard']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['dashboard']['$get']
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
        ? getGetApiVersionLkeClustersClusterIdDashboardKey(args)
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
                (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['dashboard']['$get']
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
          client[':apiVersion'].lke.clusters[':clusterId'].dashboard.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLkeClustersClusterIdDashboard<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['dashboard']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['dashboard']['$get']
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
        ? getGetApiVersionLkeClustersClusterIdDashboardKey(args)
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
                (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['dashboard']['$get']
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
          client[':apiVersion'].lke.clusters[':clusterId'].dashboard.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionLkeClustersClusterIdKubeconfigKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['kubeconfig']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/lke/clusters/:clusterId/kubeconfig', args] as const
}

export function useGetApiVersionLkeClustersClusterIdKubeconfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['kubeconfig']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['kubeconfig']['$get']
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
        ? getGetApiVersionLkeClustersClusterIdKubeconfigKey(args)
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
                (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['kubeconfig']['$get']
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
          client[':apiVersion'].lke.clusters[':clusterId'].kubeconfig.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLkeClustersClusterIdKubeconfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['kubeconfig']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['kubeconfig']['$get']
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
        ? getGetApiVersionLkeClustersClusterIdKubeconfigKey(args)
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
                (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['kubeconfig']['$get']
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
          client[':apiVersion'].lke.clusters[':clusterId'].kubeconfig.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiVersionLkeClustersClusterIdKubeconfigKey() {
  return [':apiVersion', '/:apiVersion/lke/clusters/:clusterId/kubeconfig', 'DELETE'] as const
}

export function useDeleteApiVersionLkeClustersClusterIdKubeconfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['kubeconfig']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['kubeconfig']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionLkeClustersClusterIdKubeconfigKey()
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
            (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['kubeconfig']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].lke.clusters[':clusterId'].kubeconfig.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionLkeClustersClusterIdNodesNodeIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['nodes'][':nodeId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/lke/clusters/:clusterId/nodes/:nodeId', args] as const
}

export function useGetApiVersionLkeClustersClusterIdNodesNodeId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['nodes'][':nodeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['nodes'][':nodeId']['$get']
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
        ? getGetApiVersionLkeClustersClusterIdNodesNodeIdKey(args)
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
                (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['nodes'][':nodeId']['$get']
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
          client[':apiVersion'].lke.clusters[':clusterId'].nodes[':nodeId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLkeClustersClusterIdNodesNodeId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['nodes'][':nodeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['nodes'][':nodeId']['$get']
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
        ? getGetApiVersionLkeClustersClusterIdNodesNodeIdKey(args)
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
                (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['nodes'][':nodeId']['$get']
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
          client[':apiVersion'].lke.clusters[':clusterId'].nodes[':nodeId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiVersionLkeClustersClusterIdNodesNodeIdKey() {
  return [':apiVersion', '/:apiVersion/lke/clusters/:clusterId/nodes/:nodeId', 'DELETE'] as const
}

export function useDeleteApiVersionLkeClustersClusterIdNodesNodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['nodes'][':nodeId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['nodes'][':nodeId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionLkeClustersClusterIdNodesNodeIdKey()
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
            (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['nodes'][':nodeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].lke.clusters[':clusterId'].nodes[':nodeId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionLkeClustersClusterIdNodesNodeIdRecycleKey() {
  return [
    ':apiVersion',
    '/:apiVersion/lke/clusters/:clusterId/nodes/:nodeId/recycle',
    'POST',
  ] as const
}

export function usePostApiVersionLkeClustersClusterIdNodesNodeIdRecycle<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['nodes'][':nodeId']['recycle']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['nodes'][':nodeId']['recycle']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLkeClustersClusterIdNodesNodeIdRecycleKey()
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
            (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['nodes'][':nodeId']['recycle']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].lke.clusters[':clusterId'].nodes[':nodeId'].recycle.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionLkeClustersClusterIdPoolsKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/lke/clusters/:clusterId/pools', args] as const
}

export function useGetApiVersionLkeClustersClusterIdPools<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools']['$get']
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
        ? getGetApiVersionLkeClustersClusterIdPoolsKey(args)
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
                (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools']['$get']
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
          client[':apiVersion'].lke.clusters[':clusterId'].pools.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLkeClustersClusterIdPools<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools']['$get']
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
        ? getGetApiVersionLkeClustersClusterIdPoolsKey(args)
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
                (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools']['$get']
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
          client[':apiVersion'].lke.clusters[':clusterId'].pools.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionLkeClustersClusterIdPoolsKey() {
  return [':apiVersion', '/:apiVersion/lke/clusters/:clusterId/pools', 'POST'] as const
}

export function usePostApiVersionLkeClustersClusterIdPools<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLkeClustersClusterIdPoolsKey()
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
            (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].lke.clusters[':clusterId'].pools.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionLkeClustersClusterIdPoolsPoolIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools'][':poolId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/lke/clusters/:clusterId/pools/:poolId', args] as const
}

export function useGetApiVersionLkeClustersClusterIdPoolsPoolId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools'][':poolId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools'][':poolId']['$get']
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
        ? getGetApiVersionLkeClustersClusterIdPoolsPoolIdKey(args)
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
                (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools'][':poolId']['$get']
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
          client[':apiVersion'].lke.clusters[':clusterId'].pools[':poolId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLkeClustersClusterIdPoolsPoolId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools'][':poolId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools'][':poolId']['$get']
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
        ? getGetApiVersionLkeClustersClusterIdPoolsPoolIdKey(args)
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
                (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools'][':poolId']['$get']
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
          client[':apiVersion'].lke.clusters[':clusterId'].pools[':poolId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionLkeClustersClusterIdPoolsPoolIdKey() {
  return [':apiVersion', '/:apiVersion/lke/clusters/:clusterId/pools/:poolId', 'PUT'] as const
}

export function usePutApiVersionLkeClustersClusterIdPoolsPoolId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools'][':poolId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools'][':poolId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionLkeClustersClusterIdPoolsPoolIdKey()
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
            (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools'][':poolId']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].lke.clusters[':clusterId'].pools[':poolId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionLkeClustersClusterIdPoolsPoolIdKey() {
  return [':apiVersion', '/:apiVersion/lke/clusters/:clusterId/pools/:poolId', 'DELETE'] as const
}

export function useDeleteApiVersionLkeClustersClusterIdPoolsPoolId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools'][':poolId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools'][':poolId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionLkeClustersClusterIdPoolsPoolIdKey()
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
            (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools'][':poolId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].lke.clusters[':clusterId'].pools[':poolId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionLkeClustersClusterIdPoolsPoolIdRecycleKey() {
  return [
    ':apiVersion',
    '/:apiVersion/lke/clusters/:clusterId/pools/:poolId/recycle',
    'POST',
  ] as const
}

export function usePostApiVersionLkeClustersClusterIdPoolsPoolIdRecycle<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools'][':poolId']['recycle']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools'][':poolId']['recycle']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLkeClustersClusterIdPoolsPoolIdRecycleKey()
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
            (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools'][':poolId']['recycle']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].lke.clusters[':clusterId'].pools[':poolId'].recycle.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionLkeClustersClusterIdRecycleKey() {
  return [':apiVersion', '/:apiVersion/lke/clusters/:clusterId/recycle', 'POST'] as const
}

export function usePostApiVersionLkeClustersClusterIdRecycle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['recycle']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['recycle']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLkeClustersClusterIdRecycleKey()
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
            (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['recycle']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].lke.clusters[':clusterId'].recycle.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionLkeClustersClusterIdRegenerateKey() {
  return [':apiVersion', '/:apiVersion/lke/clusters/:clusterId/regenerate', 'POST'] as const
}

export function usePostApiVersionLkeClustersClusterIdRegenerate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['regenerate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['regenerate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLkeClustersClusterIdRegenerateKey()
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
            (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['regenerate']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].lke.clusters[':clusterId'].regenerate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionLkeClustersClusterIdServicetokenKey() {
  return [':apiVersion', '/:apiVersion/lke/clusters/:clusterId/servicetoken', 'DELETE'] as const
}

export function useDeleteApiVersionLkeClustersClusterIdServicetoken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['servicetoken']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['servicetoken']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionLkeClustersClusterIdServicetokenKey()
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
            (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['servicetoken']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].lke.clusters[':clusterId'].servicetoken.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionLkeTiersTierVersionsKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['tiers'][':tier']['versions']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/lke/tiers/:tier/versions', args] as const
}

export function useGetApiVersionLkeTiersTierVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['tiers'][':tier']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['lke']['tiers'][':tier']['versions']['$get']
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
        ? getGetApiVersionLkeTiersTierVersionsKey(args)
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
                (typeof client)[':apiVersion']['lke']['tiers'][':tier']['versions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].lke.tiers[':tier'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLkeTiersTierVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['tiers'][':tier']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['lke']['tiers'][':tier']['versions']['$get']
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
        ? getGetApiVersionLkeTiersTierVersionsKey(args)
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
                (typeof client)[':apiVersion']['lke']['tiers'][':tier']['versions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].lke.tiers[':tier'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionLkeTiersTierVersionsVersionKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['tiers'][':tier']['versions'][':version']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/lke/tiers/:tier/versions/:version', args] as const
}

export function useGetApiVersionLkeTiersTierVersionsVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['tiers'][':tier']['versions'][':version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['lke']['tiers'][':tier']['versions'][':version']['$get']
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
        ? getGetApiVersionLkeTiersTierVersionsVersionKey(args)
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
                (typeof client)[':apiVersion']['lke']['tiers'][':tier']['versions'][':version']['$get']
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
          client[':apiVersion'].lke.tiers[':tier'].versions[':version'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLkeTiersTierVersionsVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['tiers'][':tier']['versions'][':version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['lke']['tiers'][':tier']['versions'][':version']['$get']
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
        ? getGetApiVersionLkeTiersTierVersionsVersionKey(args)
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
                (typeof client)[':apiVersion']['lke']['tiers'][':tier']['versions'][':version']['$get']
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
          client[':apiVersion'].lke.tiers[':tier'].versions[':version'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionLkeTypesKey(
  args: InferRequestType<(typeof client)[':apiVersion']['lke']['types']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/lke/types', args] as const
}

export function useGetApiVersionLkeTypes<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['lke']['types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['lke']['types']['$get']>>
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
        ? getGetApiVersionLkeTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['lke']['types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].lke.types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLkeTypes<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['lke']['types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['lke']['types']['$get']>>
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
        ? getGetApiVersionLkeTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['lke']['types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].lke.types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionLkeVersionsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['lke']['versions']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/lke/versions', args] as const
}

export function useGetApiVersionLkeVersions<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['lke']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['lke']['versions']['$get']>>
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
        ? getGetApiVersionLkeVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['lke']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].lke.versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLkeVersions<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['lke']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['lke']['versions']['$get']>>
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
        ? getGetApiVersionLkeVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['lke']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].lke.versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionLkeVersionsVersionKey(
  args: InferRequestType<(typeof client)[':apiVersion']['lke']['versions'][':version']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/lke/versions/:version', args] as const
}

export function useGetApiVersionLkeVersionsVersion<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['lke']['versions'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['lke']['versions'][':version']['$get']>
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
        ? getGetApiVersionLkeVersionsVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['lke']['versions'][':version']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].lke.versions[':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLkeVersionsVersion<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['lke']['versions'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['lke']['versions'][':version']['$get']>
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
        ? getGetApiVersionLkeVersionsVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['lke']['versions'][':version']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].lke.versions[':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionLongviewClientsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['longview']['clients']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/longview/clients', args] as const
}

export function useGetApiVersionLongviewClients<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['longview']['clients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['longview']['clients']['$get']>>
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
        ? getGetApiVersionLongviewClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['longview']['clients']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].longview.clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLongviewClients<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['longview']['clients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['longview']['clients']['$get']>>
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
        ? getGetApiVersionLongviewClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['longview']['clients']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].longview.clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionLongviewClientsKey() {
  return [':apiVersion', '/:apiVersion/longview/clients', 'POST'] as const
}

export function usePostApiVersionLongviewClients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['longview']['clients']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['longview']['clients']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionLongviewClientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':apiVersion']['longview']['clients']['$post']>
        },
      ) => parseResponse(client[':apiVersion'].longview.clients.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionLongviewClientsClientIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['longview']['clients'][':clientId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/longview/clients/:clientId', args] as const
}

export function useGetApiVersionLongviewClientsClientId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['longview']['clients'][':clientId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['longview']['clients'][':clientId']['$get']>
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
        ? getGetApiVersionLongviewClientsClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['longview']['clients'][':clientId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':apiVersion'].longview.clients[':clientId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLongviewClientsClientId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['longview']['clients'][':clientId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['longview']['clients'][':clientId']['$get']>
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
        ? getGetApiVersionLongviewClientsClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['longview']['clients'][':clientId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':apiVersion'].longview.clients[':clientId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionLongviewClientsClientIdKey() {
  return [':apiVersion', '/:apiVersion/longview/clients/:clientId', 'PUT'] as const
}

export function usePutApiVersionLongviewClientsClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['longview']['clients'][':clientId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['longview']['clients'][':clientId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionLongviewClientsClientIdKey()
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
            (typeof client)[':apiVersion']['longview']['clients'][':clientId']['$put']
          >
        },
      ) =>
        parseResponse(client[':apiVersion'].longview.clients[':clientId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionLongviewClientsClientIdKey() {
  return [':apiVersion', '/:apiVersion/longview/clients/:clientId', 'DELETE'] as const
}

export function useDeleteApiVersionLongviewClientsClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['longview']['clients'][':clientId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['longview']['clients'][':clientId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionLongviewClientsClientIdKey()
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
            (typeof client)[':apiVersion']['longview']['clients'][':clientId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].longview.clients[':clientId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionLongviewPlanKey(
  args: InferRequestType<(typeof client)[':apiVersion']['longview']['plan']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/longview/plan', args] as const
}

export function useGetApiVersionLongviewPlan<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['longview']['plan']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['longview']['plan']['$get']>>
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
        ? getGetApiVersionLongviewPlanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['longview']['plan']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].longview.plan.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLongviewPlan<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['longview']['plan']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['longview']['plan']['$get']>>
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
        ? getGetApiVersionLongviewPlanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['longview']['plan']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].longview.plan.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionLongviewPlanKey() {
  return [':apiVersion', '/:apiVersion/longview/plan', 'PUT'] as const
}

export function usePutApiVersionLongviewPlan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['longview']['plan']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['longview']['plan']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionLongviewPlanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':apiVersion']['longview']['plan']['$put']> },
      ) => parseResponse(client[':apiVersion'].longview.plan.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionLongviewSubscriptionsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['longview']['subscriptions']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/longview/subscriptions', args] as const
}

export function useGetApiVersionLongviewSubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['longview']['subscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['longview']['subscriptions']['$get']>>
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
        ? getGetApiVersionLongviewSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['longview']['subscriptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].longview.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLongviewSubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['longview']['subscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['longview']['subscriptions']['$get']>>
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
        ? getGetApiVersionLongviewSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['longview']['subscriptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].longview.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionLongviewSubscriptionsSubscriptionIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['longview']['subscriptions'][':subscriptionId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/longview/subscriptions/:subscriptionId', args] as const
}

export function useGetApiVersionLongviewSubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['longview']['subscriptions'][':subscriptionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['longview']['subscriptions'][':subscriptionId']['$get']
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
        ? getGetApiVersionLongviewSubscriptionsSubscriptionIdKey(args)
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
                (typeof client)[':apiVersion']['longview']['subscriptions'][':subscriptionId']['$get']
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
          client[':apiVersion'].longview.subscriptions[':subscriptionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLongviewSubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['longview']['subscriptions'][':subscriptionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['longview']['subscriptions'][':subscriptionId']['$get']
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
        ? getGetApiVersionLongviewSubscriptionsSubscriptionIdKey(args)
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
                (typeof client)[':apiVersion']['longview']['subscriptions'][':subscriptionId']['$get']
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
          client[':apiVersion'].longview.subscriptions[':subscriptionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionLongviewTypesKey(
  args: InferRequestType<(typeof client)[':apiVersion']['longview']['types']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/longview/types', args] as const
}

export function useGetApiVersionLongviewTypes<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['longview']['types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['longview']['types']['$get']>>
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
        ? getGetApiVersionLongviewTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['longview']['types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].longview.types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionLongviewTypes<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['longview']['types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['longview']['types']['$get']>>
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
        ? getGetApiVersionLongviewTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['longview']['types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].longview.types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionMaintenancePoliciesKey(
  args: InferRequestType<(typeof client)[':apiVersion']['maintenance']['policies']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/maintenance/policies', args] as const
}

export function useGetApiVersionMaintenancePolicies<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['maintenance']['policies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['maintenance']['policies']['$get']>>
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
        ? getGetApiVersionMaintenancePoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['maintenance']['policies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].maintenance.policies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionMaintenancePolicies<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['maintenance']['policies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['maintenance']['policies']['$get']>>
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
        ? getGetApiVersionMaintenancePoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['maintenance']['policies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].maintenance.policies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionManagedContactsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['contacts']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/managed/contacts', args] as const
}

export function useGetApiVersionManagedContacts<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['contacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['managed']['contacts']['$get']>>
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
        ? getGetApiVersionManagedContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['managed']['contacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].managed.contacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionManagedContacts<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['contacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['managed']['contacts']['$get']>>
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
        ? getGetApiVersionManagedContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['managed']['contacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].managed.contacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionManagedContactsKey() {
  return [':apiVersion', '/:apiVersion/managed/contacts', 'POST'] as const
}

export function usePostApiVersionManagedContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['managed']['contacts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['managed']['contacts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionManagedContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':apiVersion']['managed']['contacts']['$post']>
        },
      ) => parseResponse(client[':apiVersion'].managed.contacts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionManagedContactsContactIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['managed']['contacts'][':contactId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/managed/contacts/:contactId', args] as const
}

export function useGetApiVersionManagedContactsContactId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['managed']['contacts'][':contactId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['managed']['contacts'][':contactId']['$get']
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
        ? getGetApiVersionManagedContactsContactIdKey(args)
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
                (typeof client)[':apiVersion']['managed']['contacts'][':contactId']['$get']
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
          client[':apiVersion'].managed.contacts[':contactId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionManagedContactsContactId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['managed']['contacts'][':contactId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['managed']['contacts'][':contactId']['$get']
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
        ? getGetApiVersionManagedContactsContactIdKey(args)
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
                (typeof client)[':apiVersion']['managed']['contacts'][':contactId']['$get']
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
          client[':apiVersion'].managed.contacts[':contactId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionManagedContactsContactIdKey() {
  return [':apiVersion', '/:apiVersion/managed/contacts/:contactId', 'PUT'] as const
}

export function usePutApiVersionManagedContactsContactId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['managed']['contacts'][':contactId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['managed']['contacts'][':contactId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionManagedContactsContactIdKey()
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
            (typeof client)[':apiVersion']['managed']['contacts'][':contactId']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].managed.contacts[':contactId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionManagedContactsContactIdKey() {
  return [':apiVersion', '/:apiVersion/managed/contacts/:contactId', 'DELETE'] as const
}

export function useDeleteApiVersionManagedContactsContactId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['managed']['contacts'][':contactId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['managed']['contacts'][':contactId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionManagedContactsContactIdKey()
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
            (typeof client)[':apiVersion']['managed']['contacts'][':contactId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].managed.contacts[':contactId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionManagedCredentialsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['credentials']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/managed/credentials', args] as const
}

export function useGetApiVersionManagedCredentials<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['credentials']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['managed']['credentials']['$get']>>
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
        ? getGetApiVersionManagedCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['managed']['credentials']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].managed.credentials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionManagedCredentials<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['credentials']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['managed']['credentials']['$get']>>
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
        ? getGetApiVersionManagedCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['managed']['credentials']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].managed.credentials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionManagedCredentialsKey() {
  return [':apiVersion', '/:apiVersion/managed/credentials', 'POST'] as const
}

export function usePostApiVersionManagedCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['managed']['credentials']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['managed']['credentials']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionManagedCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':apiVersion']['managed']['credentials']['$post']>
        },
      ) => parseResponse(client[':apiVersion'].managed.credentials.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionManagedCredentialsSshkeyKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['managed']['credentials']['sshkey']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/managed/credentials/sshkey', args] as const
}

export function useGetApiVersionManagedCredentialsSshkey<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['managed']['credentials']['sshkey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['managed']['credentials']['sshkey']['$get']>
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
        ? getGetApiVersionManagedCredentialsSshkeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['managed']['credentials']['sshkey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].managed.credentials.sshkey.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionManagedCredentialsSshkey<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['managed']['credentials']['sshkey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['managed']['credentials']['sshkey']['$get']>
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
        ? getGetApiVersionManagedCredentialsSshkeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['managed']['credentials']['sshkey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].managed.credentials.sshkey.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionManagedCredentialsCredentialIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['managed']['credentials'][':credentialId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/managed/credentials/:credentialId', args] as const
}

export function useGetApiVersionManagedCredentialsCredentialId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['managed']['credentials'][':credentialId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['managed']['credentials'][':credentialId']['$get']
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
        ? getGetApiVersionManagedCredentialsCredentialIdKey(args)
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
                (typeof client)[':apiVersion']['managed']['credentials'][':credentialId']['$get']
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
          client[':apiVersion'].managed.credentials[':credentialId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionManagedCredentialsCredentialId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['managed']['credentials'][':credentialId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['managed']['credentials'][':credentialId']['$get']
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
        ? getGetApiVersionManagedCredentialsCredentialIdKey(args)
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
                (typeof client)[':apiVersion']['managed']['credentials'][':credentialId']['$get']
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
          client[':apiVersion'].managed.credentials[':credentialId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionManagedCredentialsCredentialIdKey() {
  return [':apiVersion', '/:apiVersion/managed/credentials/:credentialId', 'PUT'] as const
}

export function usePutApiVersionManagedCredentialsCredentialId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['managed']['credentials'][':credentialId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['managed']['credentials'][':credentialId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionManagedCredentialsCredentialIdKey()
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
            (typeof client)[':apiVersion']['managed']['credentials'][':credentialId']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].managed.credentials[':credentialId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionManagedCredentialsCredentialIdRevokeKey() {
  return [':apiVersion', '/:apiVersion/managed/credentials/:credentialId/revoke', 'POST'] as const
}

export function usePostApiVersionManagedCredentialsCredentialIdRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['managed']['credentials'][':credentialId']['revoke']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['managed']['credentials'][':credentialId']['revoke']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionManagedCredentialsCredentialIdRevokeKey()
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
            (typeof client)[':apiVersion']['managed']['credentials'][':credentialId']['revoke']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].managed.credentials[':credentialId'].revoke.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionManagedCredentialsCredentialIdUpdateKey() {
  return [':apiVersion', '/:apiVersion/managed/credentials/:credentialId/update', 'POST'] as const
}

export function usePostApiVersionManagedCredentialsCredentialIdUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['managed']['credentials'][':credentialId']['update']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['managed']['credentials'][':credentialId']['update']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionManagedCredentialsCredentialIdUpdateKey()
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
            (typeof client)[':apiVersion']['managed']['credentials'][':credentialId']['update']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].managed.credentials[':credentialId'].update.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionManagedIssuesKey(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['issues']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/managed/issues', args] as const
}

export function useGetApiVersionManagedIssues<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['issues']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['managed']['issues']['$get']>>
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
        ? getGetApiVersionManagedIssuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['managed']['issues']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].managed.issues.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionManagedIssues<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['issues']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['managed']['issues']['$get']>>
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
        ? getGetApiVersionManagedIssuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['managed']['issues']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].managed.issues.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionManagedIssuesIssueIdKey(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['issues'][':issueId']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/managed/issues/:issueId', args] as const
}

export function useGetApiVersionManagedIssuesIssueId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['issues'][':issueId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['managed']['issues'][':issueId']['$get']>
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
        ? getGetApiVersionManagedIssuesIssueIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['managed']['issues'][':issueId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].managed.issues[':issueId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionManagedIssuesIssueId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['issues'][':issueId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['managed']['issues'][':issueId']['$get']>
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
        ? getGetApiVersionManagedIssuesIssueIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['managed']['issues'][':issueId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].managed.issues[':issueId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionManagedLinodeSettingsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['linode-settings']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/managed/linode-settings', args] as const
}

export function useGetApiVersionManagedLinodeSettings<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['linode-settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['managed']['linode-settings']['$get']>
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
        ? getGetApiVersionManagedLinodeSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['managed']['linode-settings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].managed['linode-settings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionManagedLinodeSettings<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['linode-settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['managed']['linode-settings']['$get']>
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
        ? getGetApiVersionManagedLinodeSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['managed']['linode-settings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].managed['linode-settings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionManagedLinodeSettingsLinodeIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['managed']['linode-settings'][':linodeId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/managed/linode-settings/:linodeId', args] as const
}

export function useGetApiVersionManagedLinodeSettingsLinodeId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['managed']['linode-settings'][':linodeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['managed']['linode-settings'][':linodeId']['$get']
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
        ? getGetApiVersionManagedLinodeSettingsLinodeIdKey(args)
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
                (typeof client)[':apiVersion']['managed']['linode-settings'][':linodeId']['$get']
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
          client[':apiVersion'].managed['linode-settings'][':linodeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionManagedLinodeSettingsLinodeId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['managed']['linode-settings'][':linodeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['managed']['linode-settings'][':linodeId']['$get']
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
        ? getGetApiVersionManagedLinodeSettingsLinodeIdKey(args)
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
                (typeof client)[':apiVersion']['managed']['linode-settings'][':linodeId']['$get']
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
          client[':apiVersion'].managed['linode-settings'][':linodeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionManagedLinodeSettingsLinodeIdKey() {
  return [':apiVersion', '/:apiVersion/managed/linode-settings/:linodeId', 'PUT'] as const
}

export function usePutApiVersionManagedLinodeSettingsLinodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['managed']['linode-settings'][':linodeId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['managed']['linode-settings'][':linodeId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionManagedLinodeSettingsLinodeIdKey()
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
            (typeof client)[':apiVersion']['managed']['linode-settings'][':linodeId']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].managed['linode-settings'][':linodeId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionManagedServicesKey(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['services']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/managed/services', args] as const
}

export function useGetApiVersionManagedServices<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['managed']['services']['$get']>>
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
        ? getGetApiVersionManagedServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['managed']['services']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].managed.services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionManagedServices<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['managed']['services']['$get']>>
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
        ? getGetApiVersionManagedServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['managed']['services']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].managed.services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionManagedServicesKey() {
  return [':apiVersion', '/:apiVersion/managed/services', 'POST'] as const
}

export function usePostApiVersionManagedServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['managed']['services']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['managed']['services']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionManagedServicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':apiVersion']['managed']['services']['$post']>
        },
      ) => parseResponse(client[':apiVersion'].managed.services.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionManagedServicesServiceIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['managed']['services'][':serviceId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/managed/services/:serviceId', args] as const
}

export function useGetApiVersionManagedServicesServiceId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['managed']['services'][':serviceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['managed']['services'][':serviceId']['$get']
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
        ? getGetApiVersionManagedServicesServiceIdKey(args)
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
                (typeof client)[':apiVersion']['managed']['services'][':serviceId']['$get']
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
          client[':apiVersion'].managed.services[':serviceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionManagedServicesServiceId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['managed']['services'][':serviceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['managed']['services'][':serviceId']['$get']
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
        ? getGetApiVersionManagedServicesServiceIdKey(args)
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
                (typeof client)[':apiVersion']['managed']['services'][':serviceId']['$get']
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
          client[':apiVersion'].managed.services[':serviceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionManagedServicesServiceIdKey() {
  return [':apiVersion', '/:apiVersion/managed/services/:serviceId', 'PUT'] as const
}

export function usePutApiVersionManagedServicesServiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['managed']['services'][':serviceId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['managed']['services'][':serviceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionManagedServicesServiceIdKey()
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
            (typeof client)[':apiVersion']['managed']['services'][':serviceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].managed.services[':serviceId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionManagedServicesServiceIdKey() {
  return [':apiVersion', '/:apiVersion/managed/services/:serviceId', 'DELETE'] as const
}

export function useDeleteApiVersionManagedServicesServiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['managed']['services'][':serviceId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['managed']['services'][':serviceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionManagedServicesServiceIdKey()
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
            (typeof client)[':apiVersion']['managed']['services'][':serviceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].managed.services[':serviceId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionManagedServicesServiceIdDisableKey() {
  return [':apiVersion', '/:apiVersion/managed/services/:serviceId/disable', 'POST'] as const
}

export function usePostApiVersionManagedServicesServiceIdDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['managed']['services'][':serviceId']['disable']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['managed']['services'][':serviceId']['disable']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionManagedServicesServiceIdDisableKey()
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
            (typeof client)[':apiVersion']['managed']['services'][':serviceId']['disable']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].managed.services[':serviceId'].disable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionManagedServicesServiceIdEnableKey() {
  return [':apiVersion', '/:apiVersion/managed/services/:serviceId/enable', 'POST'] as const
}

export function usePostApiVersionManagedServicesServiceIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['managed']['services'][':serviceId']['enable']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['managed']['services'][':serviceId']['enable']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionManagedServicesServiceIdEnableKey()
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
            (typeof client)[':apiVersion']['managed']['services'][':serviceId']['enable']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].managed.services[':serviceId'].enable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionManagedStatsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['stats']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/managed/stats', args] as const
}

export function useGetApiVersionManagedStats<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['stats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['managed']['stats']['$get']>>
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
        ? getGetApiVersionManagedStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['managed']['stats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].managed.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionManagedStats<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['stats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['managed']['stats']['$get']>>
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
        ? getGetApiVersionManagedStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['managed']['stats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].managed.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionMonitorAlertChannelsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['monitor']['alert-channels']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/monitor/alert-channels', args] as const
}

export function useGetApiVersionMonitorAlertChannels<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['monitor']['alert-channels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['monitor']['alert-channels']['$get']>>
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
        ? getGetApiVersionMonitorAlertChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['monitor']['alert-channels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].monitor['alert-channels'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionMonitorAlertChannels<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['monitor']['alert-channels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['monitor']['alert-channels']['$get']>>
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
        ? getGetApiVersionMonitorAlertChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['monitor']['alert-channels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].monitor['alert-channels'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionMonitorAlertDefinitionsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['monitor']['alert-definitions']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/monitor/alert-definitions', args] as const
}

export function useGetApiVersionMonitorAlertDefinitions<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['monitor']['alert-definitions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['monitor']['alert-definitions']['$get']>
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
        ? getGetApiVersionMonitorAlertDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['monitor']['alert-definitions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].monitor['alert-definitions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionMonitorAlertDefinitions<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['monitor']['alert-definitions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['monitor']['alert-definitions']['$get']>
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
        ? getGetApiVersionMonitorAlertDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['monitor']['alert-definitions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].monitor['alert-definitions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionMonitorDashboardsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['monitor']['dashboards']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/monitor/dashboards', args] as const
}

export function useGetApiVersionMonitorDashboards<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['monitor']['dashboards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['monitor']['dashboards']['$get']>>
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
        ? getGetApiVersionMonitorDashboardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['monitor']['dashboards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].monitor.dashboards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionMonitorDashboards<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['monitor']['dashboards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['monitor']['dashboards']['$get']>>
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
        ? getGetApiVersionMonitorDashboardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['monitor']['dashboards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].monitor.dashboards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionMonitorDashboardsDashboardIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['monitor']['dashboards'][':dashboardId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/monitor/dashboards/:dashboardId', args] as const
}

export function useGetApiVersionMonitorDashboardsDashboardId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['monitor']['dashboards'][':dashboardId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['monitor']['dashboards'][':dashboardId']['$get']
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
        ? getGetApiVersionMonitorDashboardsDashboardIdKey(args)
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
                (typeof client)[':apiVersion']['monitor']['dashboards'][':dashboardId']['$get']
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
          client[':apiVersion'].monitor.dashboards[':dashboardId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionMonitorDashboardsDashboardId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['monitor']['dashboards'][':dashboardId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['monitor']['dashboards'][':dashboardId']['$get']
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
        ? getGetApiVersionMonitorDashboardsDashboardIdKey(args)
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
                (typeof client)[':apiVersion']['monitor']['dashboards'][':dashboardId']['$get']
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
          client[':apiVersion'].monitor.dashboards[':dashboardId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionMonitorServicesKey(
  args: InferRequestType<(typeof client)[':apiVersion']['monitor']['services']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/monitor/services', args] as const
}

export function useGetApiVersionMonitorServices<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['monitor']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['monitor']['services']['$get']>>
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
        ? getGetApiVersionMonitorServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['monitor']['services']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].monitor.services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionMonitorServices<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['monitor']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['monitor']['services']['$get']>>
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
        ? getGetApiVersionMonitorServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['monitor']['services']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].monitor.services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionMonitorServicesServiceTypeKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/monitor/services/:serviceType', args] as const
}

export function useGetApiVersionMonitorServicesServiceType<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['$get']
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
        ? getGetApiVersionMonitorServicesServiceTypeKey(args)
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
                (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['$get']
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
          client[':apiVersion'].monitor.services[':serviceType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionMonitorServicesServiceType<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['$get']
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
        ? getGetApiVersionMonitorServicesServiceTypeKey(args)
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
                (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['$get']
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
          client[':apiVersion'].monitor.services[':serviceType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionMonitorServicesServiceTypeAlertDefinitionsKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['alert-definitions']['$get']
  >,
) {
  return [
    ':apiVersion',
    '/:apiVersion/monitor/services/:serviceType/alert-definitions',
    args,
  ] as const
}

export function useGetApiVersionMonitorServicesServiceTypeAlertDefinitions<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['alert-definitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['alert-definitions']['$get']
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
        ? getGetApiVersionMonitorServicesServiceTypeAlertDefinitionsKey(args)
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
                (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['alert-definitions']['$get']
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
          client[':apiVersion'].monitor.services[':serviceType']['alert-definitions'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionMonitorServicesServiceTypeAlertDefinitions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['alert-definitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['alert-definitions']['$get']
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
        ? getGetApiVersionMonitorServicesServiceTypeAlertDefinitionsKey(args)
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
                (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['alert-definitions']['$get']
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
          client[':apiVersion'].monitor.services[':serviceType']['alert-definitions'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionMonitorServicesServiceTypeAlertDefinitionsKey() {
  return [
    ':apiVersion',
    '/:apiVersion/monitor/services/:serviceType/alert-definitions',
    'POST',
  ] as const
}

export function usePostApiVersionMonitorServicesServiceTypeAlertDefinitions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['alert-definitions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['alert-definitions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionMonitorServicesServiceTypeAlertDefinitionsKey()
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
            (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['alert-definitions']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].monitor.services[':serviceType']['alert-definitions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['alert-definitions'][':alertId']['$get']
  >,
) {
  return [
    ':apiVersion',
    '/:apiVersion/monitor/services/:serviceType/alert-definitions/:alertId',
    args,
  ] as const
}

export function useGetApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['alert-definitions'][':alertId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['alert-definitions'][':alertId']['$get']
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
        ? getGetApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertIdKey(args)
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
                (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['alert-definitions'][':alertId']['$get']
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
          client[':apiVersion'].monitor.services[':serviceType']['alert-definitions'][
            ':alertId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['alert-definitions'][':alertId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['alert-definitions'][':alertId']['$get']
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
        ? getGetApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertIdKey(args)
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
                (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['alert-definitions'][':alertId']['$get']
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
          client[':apiVersion'].monitor.services[':serviceType']['alert-definitions'][
            ':alertId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertIdKey() {
  return [
    ':apiVersion',
    '/:apiVersion/monitor/services/:serviceType/alert-definitions/:alertId',
    'PUT',
  ] as const
}

export function usePutApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['alert-definitions'][':alertId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['alert-definitions'][':alertId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertIdKey()
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
            (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['alert-definitions'][':alertId']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].monitor.services[':serviceType']['alert-definitions'][
            ':alertId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertIdKey() {
  return [
    ':apiVersion',
    '/:apiVersion/monitor/services/:serviceType/alert-definitions/:alertId',
    'DELETE',
  ] as const
}

export function useDeleteApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['alert-definitions'][':alertId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['alert-definitions'][':alertId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertIdKey()
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
            (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['alert-definitions'][':alertId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].monitor.services[':serviceType']['alert-definitions'][
            ':alertId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionMonitorServicesServiceTypeDashboardsKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['dashboards']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/monitor/services/:serviceType/dashboards', args] as const
}

export function useGetApiVersionMonitorServicesServiceTypeDashboards<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['dashboards']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['dashboards']['$get']
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
        ? getGetApiVersionMonitorServicesServiceTypeDashboardsKey(args)
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
                (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['dashboards']['$get']
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
          client[':apiVersion'].monitor.services[':serviceType'].dashboards.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionMonitorServicesServiceTypeDashboards<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['dashboards']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['dashboards']['$get']
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
        ? getGetApiVersionMonitorServicesServiceTypeDashboardsKey(args)
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
                (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['dashboards']['$get']
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
          client[':apiVersion'].monitor.services[':serviceType'].dashboards.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionMonitorServicesServiceTypeMetricDefinitionsKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['metric-definitions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    ':apiVersion',
    '/:apiVersion/monitor/services/:serviceType/metric-definitions',
    keyArgs,
  ] as const
}

export function useGetApiVersionMonitorServicesServiceTypeMetricDefinitions<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['metric-definitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['metric-definitions']['$get']
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
        ? getGetApiVersionMonitorServicesServiceTypeMetricDefinitionsKey(args)
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
                (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['metric-definitions']['$get']
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
          client[':apiVersion'].monitor.services[':serviceType']['metric-definitions'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionMonitorServicesServiceTypeMetricDefinitions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['metric-definitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['metric-definitions']['$get']
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
        ? getGetApiVersionMonitorServicesServiceTypeMetricDefinitionsKey(args)
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
                (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['metric-definitions']['$get']
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
          client[':apiVersion'].monitor.services[':serviceType']['metric-definitions'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionMonitorServicesServiceTypeMetricsKey() {
  return [':apiVersion', '/:apiVersion/monitor/services/:serviceType/metrics', 'POST'] as const
}

export function usePostApiVersionMonitorServicesServiceTypeMetrics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['metrics']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['metrics']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionMonitorServicesServiceTypeMetricsKey()
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
            (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['metrics']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].monitor.services[':serviceType'].metrics.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionMonitorServicesServiceTypeTokenKey() {
  return [':apiVersion', '/:apiVersion/monitor/services/:serviceType/token', 'POST'] as const
}

export function usePostApiVersionMonitorServicesServiceTypeToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['token']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['token']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionMonitorServicesServiceTypeTokenKey()
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
            (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['token']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].monitor.services[':serviceType'].token.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionNetworkTransferPricesKey(
  args: InferRequestType<(typeof client)[':apiVersion']['network-transfer']['prices']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/network-transfer/prices', args] as const
}

export function useGetApiVersionNetworkTransferPrices<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['network-transfer']['prices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['network-transfer']['prices']['$get']>
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
        ? getGetApiVersionNetworkTransferPricesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['network-transfer']['prices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion']['network-transfer'].prices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionNetworkTransferPrices<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['network-transfer']['prices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['network-transfer']['prices']['$get']>
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
        ? getGetApiVersionNetworkTransferPricesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['network-transfer']['prices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion']['network-transfer'].prices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionNetworkingFirewallsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['firewalls']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/networking/firewalls', args] as const
}

export function useGetApiVersionNetworkingFirewalls<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['firewalls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['networking']['firewalls']['$get']>>
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
        ? getGetApiVersionNetworkingFirewallsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['networking']['firewalls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].networking.firewalls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionNetworkingFirewalls<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['firewalls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['networking']['firewalls']['$get']>>
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
        ? getGetApiVersionNetworkingFirewallsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['networking']['firewalls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].networking.firewalls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionNetworkingFirewallsKey() {
  return [':apiVersion', '/:apiVersion/networking/firewalls', 'POST'] as const
}

export function usePostApiVersionNetworkingFirewalls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['networking']['firewalls']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['networking']['firewalls']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionNetworkingFirewallsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':apiVersion']['networking']['firewalls']['$post']>
        },
      ) => parseResponse(client[':apiVersion'].networking.firewalls.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionNetworkingFirewallsSettingsKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls']['settings']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/networking/firewalls/settings', args] as const
}

export function useGetApiVersionNetworkingFirewallsSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['networking']['firewalls']['settings']['$get']
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
        ? getGetApiVersionNetworkingFirewallsSettingsKey(args)
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
                (typeof client)[':apiVersion']['networking']['firewalls']['settings']['$get']
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
          client[':apiVersion'].networking.firewalls.settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionNetworkingFirewallsSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['networking']['firewalls']['settings']['$get']
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
        ? getGetApiVersionNetworkingFirewallsSettingsKey(args)
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
                (typeof client)[':apiVersion']['networking']['firewalls']['settings']['$get']
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
          client[':apiVersion'].networking.firewalls.settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionNetworkingFirewallsSettingsKey() {
  return [':apiVersion', '/:apiVersion/networking/firewalls/settings', 'PUT'] as const
}

export function usePutApiVersionNetworkingFirewallsSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['networking']['firewalls']['settings']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['networking']['firewalls']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionNetworkingFirewallsSettingsKey()
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
            (typeof client)[':apiVersion']['networking']['firewalls']['settings']['$put']
          >
        },
      ) =>
        parseResponse(client[':apiVersion'].networking.firewalls.settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionNetworkingFirewallsTemplatesKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls']['templates']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/networking/firewalls/templates', args] as const
}

export function useGetApiVersionNetworkingFirewallsTemplates<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls']['templates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['networking']['firewalls']['templates']['$get']
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
        ? getGetApiVersionNetworkingFirewallsTemplatesKey(args)
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
                (typeof client)[':apiVersion']['networking']['firewalls']['templates']['$get']
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
          client[':apiVersion'].networking.firewalls.templates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionNetworkingFirewallsTemplates<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls']['templates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['networking']['firewalls']['templates']['$get']
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
        ? getGetApiVersionNetworkingFirewallsTemplatesKey(args)
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
                (typeof client)[':apiVersion']['networking']['firewalls']['templates']['$get']
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
          client[':apiVersion'].networking.firewalls.templates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionNetworkingFirewallsTemplatesSlugKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls']['templates'][':slug']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/networking/firewalls/templates/:slug', args] as const
}

export function useGetApiVersionNetworkingFirewallsTemplatesSlug<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls']['templates'][':slug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['networking']['firewalls']['templates'][':slug']['$get']
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
        ? getGetApiVersionNetworkingFirewallsTemplatesSlugKey(args)
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
                (typeof client)[':apiVersion']['networking']['firewalls']['templates'][':slug']['$get']
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
          client[':apiVersion'].networking.firewalls.templates[':slug'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionNetworkingFirewallsTemplatesSlug<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls']['templates'][':slug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['networking']['firewalls']['templates'][':slug']['$get']
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
        ? getGetApiVersionNetworkingFirewallsTemplatesSlugKey(args)
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
                (typeof client)[':apiVersion']['networking']['firewalls']['templates'][':slug']['$get']
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
          client[':apiVersion'].networking.firewalls.templates[':slug'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionNetworkingFirewallsFirewallIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/networking/firewalls/:firewallId', args] as const
}

export function useGetApiVersionNetworkingFirewallsFirewallId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['$get']
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
        ? getGetApiVersionNetworkingFirewallsFirewallIdKey(args)
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
                (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['$get']
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
          client[':apiVersion'].networking.firewalls[':firewallId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionNetworkingFirewallsFirewallId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['$get']
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
        ? getGetApiVersionNetworkingFirewallsFirewallIdKey(args)
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
                (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['$get']
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
          client[':apiVersion'].networking.firewalls[':firewallId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionNetworkingFirewallsFirewallIdKey() {
  return [':apiVersion', '/:apiVersion/networking/firewalls/:firewallId', 'PUT'] as const
}

export function usePutApiVersionNetworkingFirewallsFirewallId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionNetworkingFirewallsFirewallIdKey()
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
            (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].networking.firewalls[':firewallId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionNetworkingFirewallsFirewallIdKey() {
  return [':apiVersion', '/:apiVersion/networking/firewalls/:firewallId', 'DELETE'] as const
}

export function useDeleteApiVersionNetworkingFirewallsFirewallId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionNetworkingFirewallsFirewallIdKey()
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
            (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].networking.firewalls[':firewallId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionNetworkingFirewallsFirewallIdDevicesKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['devices']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/networking/firewalls/:firewallId/devices', args] as const
}

export function useGetApiVersionNetworkingFirewallsFirewallIdDevices<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['devices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['devices']['$get']
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
        ? getGetApiVersionNetworkingFirewallsFirewallIdDevicesKey(args)
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
                (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['devices']['$get']
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
          client[':apiVersion'].networking.firewalls[':firewallId'].devices.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionNetworkingFirewallsFirewallIdDevices<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['devices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['devices']['$get']
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
        ? getGetApiVersionNetworkingFirewallsFirewallIdDevicesKey(args)
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
                (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['devices']['$get']
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
          client[':apiVersion'].networking.firewalls[':firewallId'].devices.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionNetworkingFirewallsFirewallIdDevicesKey() {
  return [':apiVersion', '/:apiVersion/networking/firewalls/:firewallId/devices', 'POST'] as const
}

export function usePostApiVersionNetworkingFirewallsFirewallIdDevices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['devices']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['devices']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionNetworkingFirewallsFirewallIdDevicesKey()
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
            (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['devices']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].networking.firewalls[':firewallId'].devices.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionNetworkingFirewallsFirewallIdDevicesDeviceIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['devices'][':deviceId']['$get']
  >,
) {
  return [
    ':apiVersion',
    '/:apiVersion/networking/firewalls/:firewallId/devices/:deviceId',
    args,
  ] as const
}

export function useGetApiVersionNetworkingFirewallsFirewallIdDevicesDeviceId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['devices'][':deviceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['devices'][':deviceId']['$get']
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
        ? getGetApiVersionNetworkingFirewallsFirewallIdDevicesDeviceIdKey(args)
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
                (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['devices'][':deviceId']['$get']
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
          client[':apiVersion'].networking.firewalls[':firewallId'].devices[':deviceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionNetworkingFirewallsFirewallIdDevicesDeviceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['devices'][':deviceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['devices'][':deviceId']['$get']
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
        ? getGetApiVersionNetworkingFirewallsFirewallIdDevicesDeviceIdKey(args)
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
                (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['devices'][':deviceId']['$get']
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
          client[':apiVersion'].networking.firewalls[':firewallId'].devices[':deviceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiVersionNetworkingFirewallsFirewallIdDevicesDeviceIdKey() {
  return [
    ':apiVersion',
    '/:apiVersion/networking/firewalls/:firewallId/devices/:deviceId',
    'DELETE',
  ] as const
}

export function useDeleteApiVersionNetworkingFirewallsFirewallIdDevicesDeviceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['devices'][':deviceId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['devices'][':deviceId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionNetworkingFirewallsFirewallIdDevicesDeviceIdKey()
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
            (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['devices'][':deviceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].networking.firewalls[':firewallId'].devices[':deviceId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionNetworkingFirewallsFirewallIdHistoryKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['history']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/networking/firewalls/:firewallId/history', args] as const
}

export function useGetApiVersionNetworkingFirewallsFirewallIdHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['history']['$get']
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
        ? getGetApiVersionNetworkingFirewallsFirewallIdHistoryKey(args)
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
                (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['history']['$get']
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
          client[':apiVersion'].networking.firewalls[':firewallId'].history.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionNetworkingFirewallsFirewallIdHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['history']['$get']
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
        ? getGetApiVersionNetworkingFirewallsFirewallIdHistoryKey(args)
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
                (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['history']['$get']
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
          client[':apiVersion'].networking.firewalls[':firewallId'].history.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionNetworkingFirewallsFirewallIdHistoryRulesVersionKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['history']['rules'][':version']['$get']
  >,
) {
  return [
    ':apiVersion',
    '/:apiVersion/networking/firewalls/:firewallId/history/rules/:version',
    args,
  ] as const
}

export function useGetApiVersionNetworkingFirewallsFirewallIdHistoryRulesVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['history']['rules'][':version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['history']['rules'][':version']['$get']
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
        ? getGetApiVersionNetworkingFirewallsFirewallIdHistoryRulesVersionKey(args)
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
                (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['history']['rules'][':version']['$get']
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
          client[':apiVersion'].networking.firewalls[':firewallId'].history.rules[':version'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionNetworkingFirewallsFirewallIdHistoryRulesVersion<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['history']['rules'][':version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['history']['rules'][':version']['$get']
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
        ? getGetApiVersionNetworkingFirewallsFirewallIdHistoryRulesVersionKey(args)
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
                (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['history']['rules'][':version']['$get']
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
          client[':apiVersion'].networking.firewalls[':firewallId'].history.rules[':version'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionNetworkingFirewallsFirewallIdRulesKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['rules']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/networking/firewalls/:firewallId/rules', args] as const
}

export function useGetApiVersionNetworkingFirewallsFirewallIdRules<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['rules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['rules']['$get']
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
        ? getGetApiVersionNetworkingFirewallsFirewallIdRulesKey(args)
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
                (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['rules']['$get']
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
          client[':apiVersion'].networking.firewalls[':firewallId'].rules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionNetworkingFirewallsFirewallIdRules<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['rules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['rules']['$get']
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
        ? getGetApiVersionNetworkingFirewallsFirewallIdRulesKey(args)
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
                (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['rules']['$get']
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
          client[':apiVersion'].networking.firewalls[':firewallId'].rules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionNetworkingFirewallsFirewallIdRulesKey() {
  return [':apiVersion', '/:apiVersion/networking/firewalls/:firewallId/rules', 'PUT'] as const
}

export function usePutApiVersionNetworkingFirewallsFirewallIdRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['rules']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['rules']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionNetworkingFirewallsFirewallIdRulesKey()
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
            (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['rules']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].networking.firewalls[':firewallId'].rules.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionNetworkingIpsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['ips']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/networking/ips', args] as const
}

export function useGetApiVersionNetworkingIps<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['ips']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['networking']['ips']['$get']>>
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
        ? getGetApiVersionNetworkingIpsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['networking']['ips']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].networking.ips.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionNetworkingIps<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['ips']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['networking']['ips']['$get']>>
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
        ? getGetApiVersionNetworkingIpsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['networking']['ips']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].networking.ips.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionNetworkingIpsKey() {
  return [':apiVersion', '/:apiVersion/networking/ips', 'POST'] as const
}

export function usePostApiVersionNetworkingIps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['networking']['ips']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['networking']['ips']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionNetworkingIpsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':apiVersion']['networking']['ips']['$post']> },
      ) => parseResponse(client[':apiVersion'].networking.ips.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionNetworkingIpsAssignKey() {
  return [':apiVersion', '/:apiVersion/networking/ips/assign', 'POST'] as const
}

export function usePostApiVersionNetworkingIpsAssign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['networking']['ips']['assign']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['networking']['ips']['assign']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionNetworkingIpsAssignKey()
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
            (typeof client)[':apiVersion']['networking']['ips']['assign']['$post']
          >
        },
      ) => parseResponse(client[':apiVersion'].networking.ips.assign.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionNetworkingIpsShareKey() {
  return [':apiVersion', '/:apiVersion/networking/ips/share', 'POST'] as const
}

export function usePostApiVersionNetworkingIpsShare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['networking']['ips']['share']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['networking']['ips']['share']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionNetworkingIpsShareKey()
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
            (typeof client)[':apiVersion']['networking']['ips']['share']['$post']
          >
        },
      ) => parseResponse(client[':apiVersion'].networking.ips.share.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionNetworkingIpsAddressKey(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['ips'][':address']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/networking/ips/:address', args] as const
}

export function useGetApiVersionNetworkingIpsAddress<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['ips'][':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['networking']['ips'][':address']['$get']>
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
        ? getGetApiVersionNetworkingIpsAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['networking']['ips'][':address']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].networking.ips[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionNetworkingIpsAddress<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['ips'][':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['networking']['ips'][':address']['$get']>
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
        ? getGetApiVersionNetworkingIpsAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['networking']['ips'][':address']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].networking.ips[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionNetworkingIpsAddressKey() {
  return [':apiVersion', '/:apiVersion/networking/ips/:address', 'PUT'] as const
}

export function usePutApiVersionNetworkingIpsAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['networking']['ips'][':address']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['networking']['ips'][':address']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionNetworkingIpsAddressKey()
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
            (typeof client)[':apiVersion']['networking']['ips'][':address']['$put']
          >
        },
      ) => parseResponse(client[':apiVersion'].networking.ips[':address'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionNetworkingIpv4AssignKey() {
  return [':apiVersion', '/:apiVersion/networking/ipv4/assign', 'POST'] as const
}

export function usePostApiVersionNetworkingIpv4Assign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['networking']['ipv4']['assign']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['networking']['ipv4']['assign']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionNetworkingIpv4AssignKey()
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
            (typeof client)[':apiVersion']['networking']['ipv4']['assign']['$post']
          >
        },
      ) => parseResponse(client[':apiVersion'].networking.ipv4.assign.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionNetworkingIpv4ShareKey() {
  return [':apiVersion', '/:apiVersion/networking/ipv4/share', 'POST'] as const
}

export function usePostApiVersionNetworkingIpv4Share<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['networking']['ipv4']['share']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['networking']['ipv4']['share']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionNetworkingIpv4ShareKey()
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
            (typeof client)[':apiVersion']['networking']['ipv4']['share']['$post']
          >
        },
      ) => parseResponse(client[':apiVersion'].networking.ipv4.share.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionNetworkingIpv6PoolsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['ipv6']['pools']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/networking/ipv6/pools', args] as const
}

export function useGetApiVersionNetworkingIpv6Pools<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['ipv6']['pools']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['networking']['ipv6']['pools']['$get']>
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
        ? getGetApiVersionNetworkingIpv6PoolsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['networking']['ipv6']['pools']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].networking.ipv6.pools.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionNetworkingIpv6Pools<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['ipv6']['pools']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['networking']['ipv6']['pools']['$get']>
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
        ? getGetApiVersionNetworkingIpv6PoolsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['networking']['ipv6']['pools']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].networking.ipv6.pools.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionNetworkingIpv6RangesKey(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['ipv6']['ranges']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/networking/ipv6/ranges', args] as const
}

export function useGetApiVersionNetworkingIpv6Ranges<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['ipv6']['ranges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['networking']['ipv6']['ranges']['$get']>
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
        ? getGetApiVersionNetworkingIpv6RangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['networking']['ipv6']['ranges']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].networking.ipv6.ranges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionNetworkingIpv6Ranges<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['ipv6']['ranges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['networking']['ipv6']['ranges']['$get']>
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
        ? getGetApiVersionNetworkingIpv6RangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['networking']['ipv6']['ranges']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].networking.ipv6.ranges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionNetworkingIpv6RangesKey() {
  return [':apiVersion', '/:apiVersion/networking/ipv6/ranges', 'POST'] as const
}

export function usePostApiVersionNetworkingIpv6Ranges<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['networking']['ipv6']['ranges']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['networking']['ipv6']['ranges']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionNetworkingIpv6RangesKey()
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
            (typeof client)[':apiVersion']['networking']['ipv6']['ranges']['$post']
          >
        },
      ) => parseResponse(client[':apiVersion'].networking.ipv6.ranges.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionNetworkingIpv6RangesRangeKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['ipv6']['ranges'][':range']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/networking/ipv6/ranges/:range', args] as const
}

export function useGetApiVersionNetworkingIpv6RangesRange<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['ipv6']['ranges'][':range']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['networking']['ipv6']['ranges'][':range']['$get']
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
        ? getGetApiVersionNetworkingIpv6RangesRangeKey(args)
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
                (typeof client)[':apiVersion']['networking']['ipv6']['ranges'][':range']['$get']
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
          client[':apiVersion'].networking.ipv6.ranges[':range'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionNetworkingIpv6RangesRange<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['ipv6']['ranges'][':range']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['networking']['ipv6']['ranges'][':range']['$get']
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
        ? getGetApiVersionNetworkingIpv6RangesRangeKey(args)
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
                (typeof client)[':apiVersion']['networking']['ipv6']['ranges'][':range']['$get']
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
          client[':apiVersion'].networking.ipv6.ranges[':range'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiVersionNetworkingIpv6RangesRangeKey() {
  return [':apiVersion', '/:apiVersion/networking/ipv6/ranges/:range', 'DELETE'] as const
}

export function useDeleteApiVersionNetworkingIpv6RangesRange<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['networking']['ipv6']['ranges'][':range']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['networking']['ipv6']['ranges'][':range']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionNetworkingIpv6RangesRangeKey()
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
            (typeof client)[':apiVersion']['networking']['ipv6']['ranges'][':range']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].networking.ipv6.ranges[':range'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionNetworkingVlansKey(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['vlans']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/networking/vlans', args] as const
}

export function useGetApiVersionNetworkingVlans<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['vlans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['networking']['vlans']['$get']>>
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
        ? getGetApiVersionNetworkingVlansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['networking']['vlans']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].networking.vlans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionNetworkingVlans<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['vlans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['networking']['vlans']['$get']>>
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
        ? getGetApiVersionNetworkingVlansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['networking']['vlans']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].networking.vlans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiVersionNetworkingVlansRegionIdLabelKey() {
  return [':apiVersion', '/:apiVersion/networking/vlans/:regionId/:label', 'DELETE'] as const
}

export function useDeleteApiVersionNetworkingVlansRegionIdLabel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['networking']['vlans'][':regionId'][':label']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['networking']['vlans'][':regionId'][':label']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionNetworkingVlansRegionIdLabelKey()
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
            (typeof client)[':apiVersion']['networking']['vlans'][':regionId'][':label']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].networking.vlans[':regionId'][':label'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionNodebalancersKey(
  args: InferRequestType<(typeof client)[':apiVersion']['nodebalancers']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/nodebalancers', args] as const
}

export function useGetApiVersionNodebalancers<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['nodebalancers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['nodebalancers']['$get']>>
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
        ? getGetApiVersionNodebalancersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['nodebalancers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].nodebalancers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionNodebalancers<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['nodebalancers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['nodebalancers']['$get']>>
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
        ? getGetApiVersionNodebalancersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['nodebalancers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].nodebalancers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionNodebalancersKey() {
  return [':apiVersion', '/:apiVersion/nodebalancers', 'POST'] as const
}

export function usePostApiVersionNodebalancers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['nodebalancers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['nodebalancers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionNodebalancersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':apiVersion']['nodebalancers']['$post']> },
      ) => parseResponse(client[':apiVersion'].nodebalancers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionNodebalancersTypesKey(
  args: InferRequestType<(typeof client)[':apiVersion']['nodebalancers']['types']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/nodebalancers/types', args] as const
}

export function useGetApiVersionNodebalancersTypes<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['nodebalancers']['types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['nodebalancers']['types']['$get']>>
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
        ? getGetApiVersionNodebalancersTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['nodebalancers']['types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].nodebalancers.types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionNodebalancersTypes<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['nodebalancers']['types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['nodebalancers']['types']['$get']>>
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
        ? getGetApiVersionNodebalancersTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['nodebalancers']['types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].nodebalancers.types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionNodebalancersNodeBalancerIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/nodebalancers/:nodeBalancerId', args] as const
}

export function useGetApiVersionNodebalancersNodeBalancerId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['$get']>
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
        ? getGetApiVersionNodebalancersNodeBalancerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':apiVersion'].nodebalancers[':nodeBalancerId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionNodebalancersNodeBalancerId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['$get']>
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
        ? getGetApiVersionNodebalancersNodeBalancerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':apiVersion'].nodebalancers[':nodeBalancerId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionNodebalancersNodeBalancerIdKey() {
  return [':apiVersion', '/:apiVersion/nodebalancers/:nodeBalancerId', 'PUT'] as const
}

export function usePutApiVersionNodebalancersNodeBalancerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionNodebalancersNodeBalancerIdKey()
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
            (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].nodebalancers[':nodeBalancerId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionNodebalancersNodeBalancerIdKey() {
  return [':apiVersion', '/:apiVersion/nodebalancers/:nodeBalancerId', 'DELETE'] as const
}

export function useDeleteApiVersionNodebalancersNodeBalancerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionNodebalancersNodeBalancerIdKey()
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
            (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].nodebalancers[':nodeBalancerId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionNodebalancersNodeBalancerIdConfigsKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/nodebalancers/:nodeBalancerId/configs', args] as const
}

export function useGetApiVersionNodebalancersNodeBalancerIdConfigs<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs']['$get']
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
        ? getGetApiVersionNodebalancersNodeBalancerIdConfigsKey(args)
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
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs']['$get']
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
          client[':apiVersion'].nodebalancers[':nodeBalancerId'].configs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionNodebalancersNodeBalancerIdConfigs<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs']['$get']
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
        ? getGetApiVersionNodebalancersNodeBalancerIdConfigsKey(args)
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
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs']['$get']
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
          client[':apiVersion'].nodebalancers[':nodeBalancerId'].configs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionNodebalancersNodeBalancerIdConfigsKey() {
  return [':apiVersion', '/:apiVersion/nodebalancers/:nodeBalancerId/configs', 'POST'] as const
}

export function usePostApiVersionNodebalancersNodeBalancerIdConfigs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionNodebalancersNodeBalancerIdConfigsKey()
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
            (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].nodebalancers[':nodeBalancerId'].configs.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionNodebalancersNodeBalancerIdConfigsConfigIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['$get']
  >,
) {
  return [
    ':apiVersion',
    '/:apiVersion/nodebalancers/:nodeBalancerId/configs/:configId',
    args,
  ] as const
}

export function useGetApiVersionNodebalancersNodeBalancerIdConfigsConfigId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['$get']
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
        ? getGetApiVersionNodebalancersNodeBalancerIdConfigsConfigIdKey(args)
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
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['$get']
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
          client[':apiVersion'].nodebalancers[':nodeBalancerId'].configs[':configId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionNodebalancersNodeBalancerIdConfigsConfigId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['$get']
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
        ? getGetApiVersionNodebalancersNodeBalancerIdConfigsConfigIdKey(args)
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
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['$get']
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
          client[':apiVersion'].nodebalancers[':nodeBalancerId'].configs[':configId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionNodebalancersNodeBalancerIdConfigsConfigIdKey() {
  return [
    ':apiVersion',
    '/:apiVersion/nodebalancers/:nodeBalancerId/configs/:configId',
    'PUT',
  ] as const
}

export function usePutApiVersionNodebalancersNodeBalancerIdConfigsConfigId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionNodebalancersNodeBalancerIdConfigsConfigIdKey()
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
            (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].nodebalancers[':nodeBalancerId'].configs[':configId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionNodebalancersNodeBalancerIdConfigsConfigIdKey() {
  return [
    ':apiVersion',
    '/:apiVersion/nodebalancers/:nodeBalancerId/configs/:configId',
    'DELETE',
  ] as const
}

export function useDeleteApiVersionNodebalancersNodeBalancerIdConfigsConfigId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionNodebalancersNodeBalancerIdConfigsConfigIdKey()
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
            (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].nodebalancers[':nodeBalancerId'].configs[':configId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['nodes']['$get']
  >,
) {
  return [
    ':apiVersion',
    '/:apiVersion/nodebalancers/:nodeBalancerId/configs/:configId/nodes',
    args,
  ] as const
}

export function useGetApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodes<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['nodes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['nodes']['$get']
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
        ? getGetApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesKey(args)
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
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['nodes']['$get']
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
          client[':apiVersion'].nodebalancers[':nodeBalancerId'].configs[':configId'].nodes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodes<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['nodes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['nodes']['$get']
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
        ? getGetApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesKey(args)
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
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['nodes']['$get']
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
          client[':apiVersion'].nodebalancers[':nodeBalancerId'].configs[':configId'].nodes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesKey() {
  return [
    ':apiVersion',
    '/:apiVersion/nodebalancers/:nodeBalancerId/configs/:configId/nodes',
    'POST',
  ] as const
}

export function usePostApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['nodes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['nodes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesKey()
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
            (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['nodes']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].nodebalancers[':nodeBalancerId'].configs[':configId'].nodes.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
  >,
) {
  return [
    ':apiVersion',
    '/:apiVersion/nodebalancers/:nodeBalancerId/configs/:configId/nodes/:nodeId',
    args,
  ] as const
}

export function useGetApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
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
        ? getGetApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdKey(args)
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
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
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
          client[':apiVersion'].nodebalancers[':nodeBalancerId'].configs[':configId'].nodes[
            ':nodeId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
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
        ? getGetApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdKey(args)
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
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
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
          client[':apiVersion'].nodebalancers[':nodeBalancerId'].configs[':configId'].nodes[
            ':nodeId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdKey() {
  return [
    ':apiVersion',
    '/:apiVersion/nodebalancers/:nodeBalancerId/configs/:configId/nodes/:nodeId',
    'PUT',
  ] as const
}

export function usePutApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdKey()
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
            (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].nodebalancers[':nodeBalancerId'].configs[':configId'].nodes[
            ':nodeId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdKey() {
  return [
    ':apiVersion',
    '/:apiVersion/nodebalancers/:nodeBalancerId/configs/:configId/nodes/:nodeId',
    'DELETE',
  ] as const
}

export function useDeleteApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdKey()
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
            (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].nodebalancers[':nodeBalancerId'].configs[':configId'].nodes[
            ':nodeId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionNodebalancersNodeBalancerIdConfigsConfigIdRebuildKey() {
  return [
    ':apiVersion',
    '/:apiVersion/nodebalancers/:nodeBalancerId/configs/:configId/rebuild',
    'POST',
  ] as const
}

export function usePostApiVersionNodebalancersNodeBalancerIdConfigsConfigIdRebuild<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['rebuild']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['rebuild']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiVersionNodebalancersNodeBalancerIdConfigsConfigIdRebuildKey()
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
            (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['rebuild']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].nodebalancers[':nodeBalancerId'].configs[':configId'].rebuild.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionNodebalancersNodeBalancerIdFirewallsKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['firewalls']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/nodebalancers/:nodeBalancerId/firewalls', args] as const
}

export function useGetApiVersionNodebalancersNodeBalancerIdFirewalls<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['firewalls']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['firewalls']['$get']
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
        ? getGetApiVersionNodebalancersNodeBalancerIdFirewallsKey(args)
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
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['firewalls']['$get']
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
          client[':apiVersion'].nodebalancers[':nodeBalancerId'].firewalls.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionNodebalancersNodeBalancerIdFirewalls<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['firewalls']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['firewalls']['$get']
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
        ? getGetApiVersionNodebalancersNodeBalancerIdFirewallsKey(args)
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
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['firewalls']['$get']
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
          client[':apiVersion'].nodebalancers[':nodeBalancerId'].firewalls.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionNodebalancersNodeBalancerIdFirewallsKey() {
  return [':apiVersion', '/:apiVersion/nodebalancers/:nodeBalancerId/firewalls', 'PUT'] as const
}

export function usePutApiVersionNodebalancersNodeBalancerIdFirewalls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['firewalls']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['firewalls']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionNodebalancersNodeBalancerIdFirewallsKey()
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
            (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['firewalls']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].nodebalancers[':nodeBalancerId'].firewalls.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionNodebalancersNodeBalancerIdStatsKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['stats']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/nodebalancers/:nodeBalancerId/stats', args] as const
}

export function useGetApiVersionNodebalancersNodeBalancerIdStats<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['stats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['stats']['$get']
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
        ? getGetApiVersionNodebalancersNodeBalancerIdStatsKey(args)
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
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['stats']['$get']
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
          client[':apiVersion'].nodebalancers[':nodeBalancerId'].stats.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionNodebalancersNodeBalancerIdStats<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['stats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['stats']['$get']
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
        ? getGetApiVersionNodebalancersNodeBalancerIdStatsKey(args)
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
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['stats']['$get']
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
          client[':apiVersion'].nodebalancers[':nodeBalancerId'].stats.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionNodebalancersNodeBalancerIdVpcsKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['vpcs']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/nodebalancers/:nodeBalancerId/vpcs', args] as const
}

export function useGetApiVersionNodebalancersNodeBalancerIdVpcs<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['vpcs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['vpcs']['$get']
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
        ? getGetApiVersionNodebalancersNodeBalancerIdVpcsKey(args)
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
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['vpcs']['$get']
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
          client[':apiVersion'].nodebalancers[':nodeBalancerId'].vpcs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionNodebalancersNodeBalancerIdVpcs<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['vpcs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['vpcs']['$get']
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
        ? getGetApiVersionNodebalancersNodeBalancerIdVpcsKey(args)
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
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['vpcs']['$get']
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
          client[':apiVersion'].nodebalancers[':nodeBalancerId'].vpcs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionNodebalancersNodeBalancerIdVpcsNodeBalancerVpcConfigIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['vpcs'][':nodeBalancerVpcConfigId']['$get']
  >,
) {
  return [
    ':apiVersion',
    '/:apiVersion/nodebalancers/:nodeBalancerId/vpcs/:nodeBalancerVpcConfigId',
    args,
  ] as const
}

export function useGetApiVersionNodebalancersNodeBalancerIdVpcsNodeBalancerVpcConfigId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['vpcs'][':nodeBalancerVpcConfigId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['vpcs'][':nodeBalancerVpcConfigId']['$get']
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
        ? getGetApiVersionNodebalancersNodeBalancerIdVpcsNodeBalancerVpcConfigIdKey(args)
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
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['vpcs'][':nodeBalancerVpcConfigId']['$get']
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
          client[':apiVersion'].nodebalancers[':nodeBalancerId'].vpcs[
            ':nodeBalancerVpcConfigId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionNodebalancersNodeBalancerIdVpcsNodeBalancerVpcConfigId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['vpcs'][':nodeBalancerVpcConfigId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['vpcs'][':nodeBalancerVpcConfigId']['$get']
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
        ? getGetApiVersionNodebalancersNodeBalancerIdVpcsNodeBalancerVpcConfigIdKey(args)
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
                (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['vpcs'][':nodeBalancerVpcConfigId']['$get']
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
          client[':apiVersion'].nodebalancers[':nodeBalancerId'].vpcs[
            ':nodeBalancerVpcConfigId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionObjectStorageBucketsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['buckets']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/object-storage/buckets', args] as const
}

export function useGetApiVersionObjectStorageBuckets<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['buckets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['object-storage']['buckets']['$get']>>
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
        ? getGetApiVersionObjectStorageBucketsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['object-storage']['buckets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion']['object-storage'].buckets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionObjectStorageBuckets<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['buckets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['object-storage']['buckets']['$get']>>
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
        ? getGetApiVersionObjectStorageBucketsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['object-storage']['buckets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion']['object-storage'].buckets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionObjectStorageBucketsKey() {
  return [':apiVersion', '/:apiVersion/object-storage/buckets', 'POST'] as const
}

export function usePostApiVersionObjectStorageBuckets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['object-storage']['buckets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['object-storage']['buckets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionObjectStorageBucketsKey()
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
            (typeof client)[':apiVersion']['object-storage']['buckets']['$post']
          >
        },
      ) => parseResponse(client[':apiVersion']['object-storage'].buckets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionObjectStorageBucketsRegionIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/object-storage/buckets/:regionId', args] as const
}

export function useGetApiVersionObjectStorageBucketsRegionId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId']['$get']
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
        ? getGetApiVersionObjectStorageBucketsRegionIdKey(args)
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
                (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId']['$get']
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
          client[':apiVersion']['object-storage'].buckets[':regionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionObjectStorageBucketsRegionId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId']['$get']
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
        ? getGetApiVersionObjectStorageBucketsRegionIdKey(args)
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
                (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId']['$get']
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
          client[':apiVersion']['object-storage'].buckets[':regionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionObjectStorageBucketsRegionIdBucketKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/object-storage/buckets/:regionId/:bucket', args] as const
}

export function useGetApiVersionObjectStorageBucketsRegionIdBucket<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['$get']
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
        ? getGetApiVersionObjectStorageBucketsRegionIdBucketKey(args)
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
                (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['$get']
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
          client[':apiVersion']['object-storage'].buckets[':regionId'][':bucket'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionObjectStorageBucketsRegionIdBucket<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['$get']
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
        ? getGetApiVersionObjectStorageBucketsRegionIdBucketKey(args)
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
                (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['$get']
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
          client[':apiVersion']['object-storage'].buckets[':regionId'][':bucket'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiVersionObjectStorageBucketsRegionIdBucketKey() {
  return [':apiVersion', '/:apiVersion/object-storage/buckets/:regionId/:bucket', 'DELETE'] as const
}

export function useDeleteApiVersionObjectStorageBucketsRegionIdBucket<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionObjectStorageBucketsRegionIdBucketKey()
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
            (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion']['object-storage'].buckets[':regionId'][':bucket'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionObjectStorageBucketsRegionIdBucketAccessKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['access']['$get']
  >,
) {
  return [
    ':apiVersion',
    '/:apiVersion/object-storage/buckets/:regionId/:bucket/access',
    args,
  ] as const
}

export function useGetApiVersionObjectStorageBucketsRegionIdBucketAccess<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['access']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['access']['$get']
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
        ? getGetApiVersionObjectStorageBucketsRegionIdBucketAccessKey(args)
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
                (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['access']['$get']
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
          client[':apiVersion']['object-storage'].buckets[':regionId'][':bucket'].access.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionObjectStorageBucketsRegionIdBucketAccess<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['access']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['access']['$get']
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
        ? getGetApiVersionObjectStorageBucketsRegionIdBucketAccessKey(args)
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
                (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['access']['$get']
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
          client[':apiVersion']['object-storage'].buckets[':regionId'][':bucket'].access.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionObjectStorageBucketsRegionIdBucketAccessKey() {
  return [
    ':apiVersion',
    '/:apiVersion/object-storage/buckets/:regionId/:bucket/access',
    'PUT',
  ] as const
}

export function usePutApiVersionObjectStorageBucketsRegionIdBucketAccess<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['access']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['access']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionObjectStorageBucketsRegionIdBucketAccessKey()
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
            (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['access']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion']['object-storage'].buckets[':regionId'][':bucket'].access.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionObjectStorageBucketsRegionIdBucketAccessKey() {
  return [
    ':apiVersion',
    '/:apiVersion/object-storage/buckets/:regionId/:bucket/access',
    'POST',
  ] as const
}

export function usePostApiVersionObjectStorageBucketsRegionIdBucketAccess<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['access']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['access']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionObjectStorageBucketsRegionIdBucketAccessKey()
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
            (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['access']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion']['object-storage'].buckets[':regionId'][':bucket'].access.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionObjectStorageBucketsRegionIdBucketObjectAclKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['object-acl']['$get']
  >,
) {
  return [
    ':apiVersion',
    '/:apiVersion/object-storage/buckets/:regionId/:bucket/object-acl',
    args,
  ] as const
}

export function useGetApiVersionObjectStorageBucketsRegionIdBucketObjectAcl<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['object-acl']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['object-acl']['$get']
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
        ? getGetApiVersionObjectStorageBucketsRegionIdBucketObjectAclKey(args)
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
                (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['object-acl']['$get']
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
          client[':apiVersion']['object-storage'].buckets[':regionId'][':bucket'][
            'object-acl'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionObjectStorageBucketsRegionIdBucketObjectAcl<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['object-acl']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['object-acl']['$get']
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
        ? getGetApiVersionObjectStorageBucketsRegionIdBucketObjectAclKey(args)
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
                (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['object-acl']['$get']
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
          client[':apiVersion']['object-storage'].buckets[':regionId'][':bucket'][
            'object-acl'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionObjectStorageBucketsRegionIdBucketObjectAclKey() {
  return [
    ':apiVersion',
    '/:apiVersion/object-storage/buckets/:regionId/:bucket/object-acl',
    'PUT',
  ] as const
}

export function usePutApiVersionObjectStorageBucketsRegionIdBucketObjectAcl<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['object-acl']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['object-acl']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionObjectStorageBucketsRegionIdBucketObjectAclKey()
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
            (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['object-acl']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion']['object-storage'].buckets[':regionId'][':bucket'][
            'object-acl'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionObjectStorageBucketsRegionIdBucketObjectListKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['object-list']['$get']
  >,
) {
  return [
    ':apiVersion',
    '/:apiVersion/object-storage/buckets/:regionId/:bucket/object-list',
    args,
  ] as const
}

export function useGetApiVersionObjectStorageBucketsRegionIdBucketObjectList<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['object-list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['object-list']['$get']
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
        ? getGetApiVersionObjectStorageBucketsRegionIdBucketObjectListKey(args)
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
                (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['object-list']['$get']
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
          client[':apiVersion']['object-storage'].buckets[':regionId'][':bucket'][
            'object-list'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionObjectStorageBucketsRegionIdBucketObjectList<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['object-list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['object-list']['$get']
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
        ? getGetApiVersionObjectStorageBucketsRegionIdBucketObjectListKey(args)
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
                (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['object-list']['$get']
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
          client[':apiVersion']['object-storage'].buckets[':regionId'][':bucket'][
            'object-list'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionObjectStorageBucketsRegionIdBucketObjectUrlKey() {
  return [
    ':apiVersion',
    '/:apiVersion/object-storage/buckets/:regionId/:bucket/object-url',
    'POST',
  ] as const
}

export function usePostApiVersionObjectStorageBucketsRegionIdBucketObjectUrl<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['object-url']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['object-url']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionObjectStorageBucketsRegionIdBucketObjectUrlKey()
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
            (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['object-url']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion']['object-storage'].buckets[':regionId'][':bucket'][
            'object-url'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionObjectStorageBucketsRegionIdBucketSslKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['ssl']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/object-storage/buckets/:regionId/:bucket/ssl', args] as const
}

export function useGetApiVersionObjectStorageBucketsRegionIdBucketSsl<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['ssl']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['ssl']['$get']
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
        ? getGetApiVersionObjectStorageBucketsRegionIdBucketSslKey(args)
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
                (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['ssl']['$get']
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
          client[':apiVersion']['object-storage'].buckets[':regionId'][':bucket'].ssl.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionObjectStorageBucketsRegionIdBucketSsl<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['ssl']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['ssl']['$get']
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
        ? getGetApiVersionObjectStorageBucketsRegionIdBucketSslKey(args)
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
                (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['ssl']['$get']
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
          client[':apiVersion']['object-storage'].buckets[':regionId'][':bucket'].ssl.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionObjectStorageBucketsRegionIdBucketSslKey() {
  return [
    ':apiVersion',
    '/:apiVersion/object-storage/buckets/:regionId/:bucket/ssl',
    'POST',
  ] as const
}

export function usePostApiVersionObjectStorageBucketsRegionIdBucketSsl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['ssl']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['ssl']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionObjectStorageBucketsRegionIdBucketSslKey()
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
            (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['ssl']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion']['object-storage'].buckets[':regionId'][':bucket'].ssl.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionObjectStorageBucketsRegionIdBucketSslKey() {
  return [
    ':apiVersion',
    '/:apiVersion/object-storage/buckets/:regionId/:bucket/ssl',
    'DELETE',
  ] as const
}

export function useDeleteApiVersionObjectStorageBucketsRegionIdBucketSsl<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['ssl']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['ssl']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionObjectStorageBucketsRegionIdBucketSslKey()
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
            (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['ssl']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion']['object-storage'].buckets[':regionId'][':bucket'].ssl.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionObjectStorageCancelKey() {
  return [':apiVersion', '/:apiVersion/object-storage/cancel', 'POST'] as const
}

export function usePostApiVersionObjectStorageCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['object-storage']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['object-storage']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionObjectStorageCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':apiVersion']['object-storage']['cancel']['$post']>
        },
      ) => parseResponse(client[':apiVersion']['object-storage'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionObjectStorageClustersKey(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['clusters']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/object-storage/clusters', args] as const
}

export function useGetApiVersionObjectStorageClusters<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['clusters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['object-storage']['clusters']['$get']>
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
        ? getGetApiVersionObjectStorageClustersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['object-storage']['clusters']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion']['object-storage'].clusters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionObjectStorageClusters<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['clusters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['object-storage']['clusters']['$get']>
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
        ? getGetApiVersionObjectStorageClustersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['object-storage']['clusters']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion']['object-storage'].clusters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionObjectStorageClustersClusterIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['clusters'][':clusterId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/object-storage/clusters/:clusterId', args] as const
}

export function useGetApiVersionObjectStorageClustersClusterId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['clusters'][':clusterId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['object-storage']['clusters'][':clusterId']['$get']
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
        ? getGetApiVersionObjectStorageClustersClusterIdKey(args)
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
                (typeof client)[':apiVersion']['object-storage']['clusters'][':clusterId']['$get']
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
          client[':apiVersion']['object-storage'].clusters[':clusterId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionObjectStorageClustersClusterId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['clusters'][':clusterId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['object-storage']['clusters'][':clusterId']['$get']
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
        ? getGetApiVersionObjectStorageClustersClusterIdKey(args)
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
                (typeof client)[':apiVersion']['object-storage']['clusters'][':clusterId']['$get']
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
          client[':apiVersion']['object-storage'].clusters[':clusterId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionObjectStorageEndpointsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['endpoints']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/object-storage/endpoints', args] as const
}

export function useGetApiVersionObjectStorageEndpoints<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['endpoints']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['object-storage']['endpoints']['$get']>
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
        ? getGetApiVersionObjectStorageEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['object-storage']['endpoints']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion']['object-storage'].endpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionObjectStorageEndpoints<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['endpoints']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['object-storage']['endpoints']['$get']>
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
        ? getGetApiVersionObjectStorageEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['object-storage']['endpoints']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion']['object-storage'].endpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionObjectStorageKeysKey(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['keys']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/object-storage/keys', args] as const
}

export function useGetApiVersionObjectStorageKeys<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['object-storage']['keys']['$get']>>
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
        ? getGetApiVersionObjectStorageKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['object-storage']['keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion']['object-storage'].keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionObjectStorageKeys<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['object-storage']['keys']['$get']>>
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
        ? getGetApiVersionObjectStorageKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['object-storage']['keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion']['object-storage'].keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionObjectStorageKeysKey() {
  return [':apiVersion', '/:apiVersion/object-storage/keys', 'POST'] as const
}

export function usePostApiVersionObjectStorageKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['object-storage']['keys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['object-storage']['keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionObjectStorageKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':apiVersion']['object-storage']['keys']['$post']>
        },
      ) => parseResponse(client[':apiVersion']['object-storage'].keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionObjectStorageKeysKeyIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['keys'][':keyId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/object-storage/keys/:keyId', args] as const
}

export function useGetApiVersionObjectStorageKeysKeyId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['keys'][':keyId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['object-storage']['keys'][':keyId']['$get']>
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
        ? getGetApiVersionObjectStorageKeysKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['object-storage']['keys'][':keyId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':apiVersion']['object-storage'].keys[':keyId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionObjectStorageKeysKeyId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['keys'][':keyId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['object-storage']['keys'][':keyId']['$get']>
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
        ? getGetApiVersionObjectStorageKeysKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['object-storage']['keys'][':keyId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':apiVersion']['object-storage'].keys[':keyId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionObjectStorageKeysKeyIdKey() {
  return [':apiVersion', '/:apiVersion/object-storage/keys/:keyId', 'PUT'] as const
}

export function usePutApiVersionObjectStorageKeysKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['object-storage']['keys'][':keyId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['object-storage']['keys'][':keyId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionObjectStorageKeysKeyIdKey()
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
            (typeof client)[':apiVersion']['object-storage']['keys'][':keyId']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion']['object-storage'].keys[':keyId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionObjectStorageKeysKeyIdKey() {
  return [':apiVersion', '/:apiVersion/object-storage/keys/:keyId', 'DELETE'] as const
}

export function useDeleteApiVersionObjectStorageKeysKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['object-storage']['keys'][':keyId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['object-storage']['keys'][':keyId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionObjectStorageKeysKeyIdKey()
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
            (typeof client)[':apiVersion']['object-storage']['keys'][':keyId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion']['object-storage'].keys[':keyId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionObjectStorageQuotasKey(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['quotas']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/object-storage/quotas', args] as const
}

export function useGetApiVersionObjectStorageQuotas<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['quotas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['object-storage']['quotas']['$get']>>
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
        ? getGetApiVersionObjectStorageQuotasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['object-storage']['quotas']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion']['object-storage'].quotas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionObjectStorageQuotas<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['quotas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['object-storage']['quotas']['$get']>>
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
        ? getGetApiVersionObjectStorageQuotasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['object-storage']['quotas']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion']['object-storage'].quotas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionObjectStorageQuotasObjQuotaIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['quotas'][':objQuotaId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/object-storage/quotas/:objQuotaId', args] as const
}

export function useGetApiVersionObjectStorageQuotasObjQuotaId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['quotas'][':objQuotaId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['object-storage']['quotas'][':objQuotaId']['$get']
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
        ? getGetApiVersionObjectStorageQuotasObjQuotaIdKey(args)
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
                (typeof client)[':apiVersion']['object-storage']['quotas'][':objQuotaId']['$get']
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
          client[':apiVersion']['object-storage'].quotas[':objQuotaId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionObjectStorageQuotasObjQuotaId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['quotas'][':objQuotaId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['object-storage']['quotas'][':objQuotaId']['$get']
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
        ? getGetApiVersionObjectStorageQuotasObjQuotaIdKey(args)
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
                (typeof client)[':apiVersion']['object-storage']['quotas'][':objQuotaId']['$get']
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
          client[':apiVersion']['object-storage'].quotas[':objQuotaId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionObjectStorageQuotasObjQuotaIdUsageKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['quotas'][':objQuotaId']['usage']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/object-storage/quotas/:objQuotaId/usage', args] as const
}

export function useGetApiVersionObjectStorageQuotasObjQuotaIdUsage<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['quotas'][':objQuotaId']['usage']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['object-storage']['quotas'][':objQuotaId']['usage']['$get']
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
        ? getGetApiVersionObjectStorageQuotasObjQuotaIdUsageKey(args)
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
                (typeof client)[':apiVersion']['object-storage']['quotas'][':objQuotaId']['usage']['$get']
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
          client[':apiVersion']['object-storage'].quotas[':objQuotaId'].usage.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionObjectStorageQuotasObjQuotaIdUsage<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['quotas'][':objQuotaId']['usage']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['object-storage']['quotas'][':objQuotaId']['usage']['$get']
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
        ? getGetApiVersionObjectStorageQuotasObjQuotaIdUsageKey(args)
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
                (typeof client)[':apiVersion']['object-storage']['quotas'][':objQuotaId']['usage']['$get']
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
          client[':apiVersion']['object-storage'].quotas[':objQuotaId'].usage.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionObjectStorageTransferKey(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['transfer']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/object-storage/transfer', args] as const
}

export function useGetApiVersionObjectStorageTransfer<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['transfer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['object-storage']['transfer']['$get']>
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
        ? getGetApiVersionObjectStorageTransferKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['object-storage']['transfer']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion']['object-storage'].transfer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionObjectStorageTransfer<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['transfer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['object-storage']['transfer']['$get']>
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
        ? getGetApiVersionObjectStorageTransferKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['object-storage']['transfer']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion']['object-storage'].transfer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionObjectStorageTypesKey(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['types']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/object-storage/types', args] as const
}

export function useGetApiVersionObjectStorageTypes<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['object-storage']['types']['$get']>>
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
        ? getGetApiVersionObjectStorageTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['object-storage']['types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion']['object-storage'].types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionObjectStorageTypes<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['object-storage']['types']['$get']>>
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
        ? getGetApiVersionObjectStorageTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['object-storage']['types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion']['object-storage'].types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionPlacementGroupsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['placement']['groups']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/placement/groups', args] as const
}

export function useGetApiVersionPlacementGroups<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['placement']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['placement']['groups']['$get']>>
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
        ? getGetApiVersionPlacementGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['placement']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].placement.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionPlacementGroups<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['placement']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['placement']['groups']['$get']>>
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
        ? getGetApiVersionPlacementGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['placement']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].placement.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionPlacementGroupsKey() {
  return [':apiVersion', '/:apiVersion/placement/groups', 'POST'] as const
}

export function usePostApiVersionPlacementGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['placement']['groups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['placement']['groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionPlacementGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':apiVersion']['placement']['groups']['$post']>
        },
      ) => parseResponse(client[':apiVersion'].placement.groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionPlacementGroupsGroupIdKey(
  args: InferRequestType<(typeof client)[':apiVersion']['placement']['groups'][':groupId']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/placement/groups/:groupId', args] as const
}

export function useGetApiVersionPlacementGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['placement']['groups'][':groupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['placement']['groups'][':groupId']['$get']>
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
        ? getGetApiVersionPlacementGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['placement']['groups'][':groupId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].placement.groups[':groupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionPlacementGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['placement']['groups'][':groupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['placement']['groups'][':groupId']['$get']>
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
        ? getGetApiVersionPlacementGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['placement']['groups'][':groupId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].placement.groups[':groupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionPlacementGroupsGroupIdKey() {
  return [':apiVersion', '/:apiVersion/placement/groups/:groupId', 'PUT'] as const
}

export function usePutApiVersionPlacementGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['placement']['groups'][':groupId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['placement']['groups'][':groupId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionPlacementGroupsGroupIdKey()
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
            (typeof client)[':apiVersion']['placement']['groups'][':groupId']['$put']
          >
        },
      ) =>
        parseResponse(client[':apiVersion'].placement.groups[':groupId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionPlacementGroupsGroupIdKey() {
  return [':apiVersion', '/:apiVersion/placement/groups/:groupId', 'DELETE'] as const
}

export function useDeleteApiVersionPlacementGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['placement']['groups'][':groupId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['placement']['groups'][':groupId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionPlacementGroupsGroupIdKey()
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
            (typeof client)[':apiVersion']['placement']['groups'][':groupId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].placement.groups[':groupId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionPlacementGroupsGroupIdAssignKey() {
  return [':apiVersion', '/:apiVersion/placement/groups/:groupId/assign', 'POST'] as const
}

export function usePostApiVersionPlacementGroupsGroupIdAssign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['placement']['groups'][':groupId']['assign']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['placement']['groups'][':groupId']['assign']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionPlacementGroupsGroupIdAssignKey()
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
            (typeof client)[':apiVersion']['placement']['groups'][':groupId']['assign']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].placement.groups[':groupId'].assign.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionPlacementGroupsGroupIdUnassignKey() {
  return [':apiVersion', '/:apiVersion/placement/groups/:groupId/unassign', 'POST'] as const
}

export function usePostApiVersionPlacementGroupsGroupIdUnassign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['placement']['groups'][':groupId']['unassign']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['placement']['groups'][':groupId']['unassign']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionPlacementGroupsGroupIdUnassignKey()
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
            (typeof client)[':apiVersion']['placement']['groups'][':groupId']['unassign']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].placement.groups[':groupId'].unassign.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionProfileKey(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/profile', args] as const
}

export function useGetApiVersionProfile<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['$get']>>
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
        ? getGetApiVersionProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].profile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionProfile<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['$get']>>
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
        ? getGetApiVersionProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].profile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionProfileKey() {
  return [':apiVersion', '/:apiVersion/profile', 'PUT'] as const
}

export function usePutApiVersionProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['profile']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':apiVersion']['profile']['$put']> },
      ) => parseResponse(client[':apiVersion'].profile.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionProfileAppsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['apps']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/profile/apps', args] as const
}

export function useGetApiVersionProfileApps<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['apps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['apps']['$get']>>
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
        ? getGetApiVersionProfileAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['apps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].profile.apps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionProfileApps<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['apps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['apps']['$get']>>
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
        ? getGetApiVersionProfileAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['apps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].profile.apps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionProfileAppsAppIdKey(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['apps'][':appId']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/profile/apps/:appId', args] as const
}

export function useGetApiVersionProfileAppsAppId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['apps'][':appId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['apps'][':appId']['$get']>>
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
        ? getGetApiVersionProfileAppsAppIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['apps'][':appId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].profile.apps[':appId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionProfileAppsAppId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['apps'][':appId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['apps'][':appId']['$get']>>
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
        ? getGetApiVersionProfileAppsAppIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['apps'][':appId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].profile.apps[':appId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiVersionProfileAppsAppIdKey() {
  return [':apiVersion', '/:apiVersion/profile/apps/:appId', 'DELETE'] as const
}

export function useDeleteApiVersionProfileAppsAppId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['profile']['apps'][':appId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['profile']['apps'][':appId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionProfileAppsAppIdKey()
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
            (typeof client)[':apiVersion']['profile']['apps'][':appId']['$delete']
          >
        },
      ) => parseResponse(client[':apiVersion'].profile.apps[':appId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionProfileDevicesKey(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['devices']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/profile/devices', args] as const
}

export function useGetApiVersionProfileDevices<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['devices']['$get']>>
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
        ? getGetApiVersionProfileDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['devices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].profile.devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionProfileDevices<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['devices']['$get']>>
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
        ? getGetApiVersionProfileDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['devices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].profile.devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionProfileDevicesDeviceIdKey(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['devices'][':deviceId']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/profile/devices/:deviceId', args] as const
}

export function useGetApiVersionProfileDevicesDeviceId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['devices'][':deviceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['profile']['devices'][':deviceId']['$get']>
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
        ? getGetApiVersionProfileDevicesDeviceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['profile']['devices'][':deviceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].profile.devices[':deviceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionProfileDevicesDeviceId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['devices'][':deviceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['profile']['devices'][':deviceId']['$get']>
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
        ? getGetApiVersionProfileDevicesDeviceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['profile']['devices'][':deviceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].profile.devices[':deviceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiVersionProfileDevicesDeviceIdKey() {
  return [':apiVersion', '/:apiVersion/profile/devices/:deviceId', 'DELETE'] as const
}

export function useDeleteApiVersionProfileDevicesDeviceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['profile']['devices'][':deviceId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['profile']['devices'][':deviceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionProfileDevicesDeviceIdKey()
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
            (typeof client)[':apiVersion']['profile']['devices'][':deviceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].profile.devices[':deviceId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionProfileGrantsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['grants']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/profile/grants', args] as const
}

export function useGetApiVersionProfileGrants<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['grants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['grants']['$get']>>
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
        ? getGetApiVersionProfileGrantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['grants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].profile.grants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionProfileGrants<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['grants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['grants']['$get']>>
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
        ? getGetApiVersionProfileGrantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['grants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].profile.grants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionProfileLoginsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['logins']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/profile/logins', args] as const
}

export function useGetApiVersionProfileLogins<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['logins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['logins']['$get']>>
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
        ? getGetApiVersionProfileLoginsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['logins']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].profile.logins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionProfileLogins<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['logins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['logins']['$get']>>
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
        ? getGetApiVersionProfileLoginsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['logins']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].profile.logins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionProfileLoginsLoginIdKey(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['logins'][':loginId']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/profile/logins/:loginId', args] as const
}

export function useGetApiVersionProfileLoginsLoginId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['logins'][':loginId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['profile']['logins'][':loginId']['$get']>
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
        ? getGetApiVersionProfileLoginsLoginIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['profile']['logins'][':loginId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].profile.logins[':loginId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionProfileLoginsLoginId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['logins'][':loginId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['profile']['logins'][':loginId']['$get']>
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
        ? getGetApiVersionProfileLoginsLoginIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['profile']['logins'][':loginId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].profile.logins[':loginId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionProfilePhoneNumberKey() {
  return [':apiVersion', '/:apiVersion/profile/phone-number', 'POST'] as const
}

export function usePostApiVersionProfilePhoneNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['phone-number']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['profile']['phone-number']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionProfilePhoneNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':apiVersion']['profile']['phone-number']['$post']>
        },
      ) => parseResponse(client[':apiVersion'].profile['phone-number'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionProfilePhoneNumberKey() {
  return [':apiVersion', '/:apiVersion/profile/phone-number', 'DELETE'] as const
}

export function useDeleteApiVersionProfilePhoneNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['phone-number']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['profile']['phone-number']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionProfilePhoneNumberKey()
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
            (typeof client)[':apiVersion']['profile']['phone-number']['$delete']
          >
        },
      ) => parseResponse(client[':apiVersion'].profile['phone-number'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionProfilePhoneNumberVerifyKey() {
  return [':apiVersion', '/:apiVersion/profile/phone-number/verify', 'POST'] as const
}

export function usePostApiVersionProfilePhoneNumberVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['profile']['phone-number']['verify']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['profile']['phone-number']['verify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionProfilePhoneNumberVerifyKey()
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
            (typeof client)[':apiVersion']['profile']['phone-number']['verify']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].profile['phone-number'].verify.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionProfilePreferencesKey(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['preferences']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/profile/preferences', args] as const
}

export function useGetApiVersionProfilePreferences<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['preferences']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['preferences']['$get']>>
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
        ? getGetApiVersionProfilePreferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['preferences']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].profile.preferences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionProfilePreferences<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['preferences']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['preferences']['$get']>>
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
        ? getGetApiVersionProfilePreferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['preferences']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].profile.preferences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionProfilePreferencesKey() {
  return [':apiVersion', '/:apiVersion/profile/preferences', 'PUT'] as const
}

export function usePutApiVersionProfilePreferences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['preferences']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['profile']['preferences']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionProfilePreferencesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':apiVersion']['profile']['preferences']['$put']>
        },
      ) => parseResponse(client[':apiVersion'].profile.preferences.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionProfileSecurityQuestionsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['security-questions']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/profile/security-questions', args] as const
}

export function useGetApiVersionProfileSecurityQuestions<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['security-questions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['profile']['security-questions']['$get']>
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
        ? getGetApiVersionProfileSecurityQuestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['profile']['security-questions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':apiVersion'].profile['security-questions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionProfileSecurityQuestions<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['security-questions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['profile']['security-questions']['$get']>
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
        ? getGetApiVersionProfileSecurityQuestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['profile']['security-questions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':apiVersion'].profile['security-questions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionProfileSecurityQuestionsKey() {
  return [':apiVersion', '/:apiVersion/profile/security-questions', 'POST'] as const
}

export function usePostApiVersionProfileSecurityQuestions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['profile']['security-questions']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['profile']['security-questions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionProfileSecurityQuestionsKey()
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
            (typeof client)[':apiVersion']['profile']['security-questions']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].profile['security-questions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionProfileSshkeysKey(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['sshkeys']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/profile/sshkeys', args] as const
}

export function useGetApiVersionProfileSshkeys<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['sshkeys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['sshkeys']['$get']>>
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
        ? getGetApiVersionProfileSshkeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['sshkeys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].profile.sshkeys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionProfileSshkeys<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['sshkeys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['sshkeys']['$get']>>
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
        ? getGetApiVersionProfileSshkeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['sshkeys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].profile.sshkeys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionProfileSshkeysKey() {
  return [':apiVersion', '/:apiVersion/profile/sshkeys', 'POST'] as const
}

export function usePostApiVersionProfileSshkeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['sshkeys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['profile']['sshkeys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionProfileSshkeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':apiVersion']['profile']['sshkeys']['$post']> },
      ) => parseResponse(client[':apiVersion'].profile.sshkeys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionProfileSshkeysSshKeyIdKey(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['sshkeys'][':sshKeyId']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/profile/sshkeys/:sshKeyId', args] as const
}

export function useGetApiVersionProfileSshkeysSshKeyId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['sshkeys'][':sshKeyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['profile']['sshkeys'][':sshKeyId']['$get']>
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
        ? getGetApiVersionProfileSshkeysSshKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['profile']['sshkeys'][':sshKeyId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].profile.sshkeys[':sshKeyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionProfileSshkeysSshKeyId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['sshkeys'][':sshKeyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['profile']['sshkeys'][':sshKeyId']['$get']>
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
        ? getGetApiVersionProfileSshkeysSshKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['profile']['sshkeys'][':sshKeyId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].profile.sshkeys[':sshKeyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionProfileSshkeysSshKeyIdKey() {
  return [':apiVersion', '/:apiVersion/profile/sshkeys/:sshKeyId', 'PUT'] as const
}

export function usePutApiVersionProfileSshkeysSshKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['profile']['sshkeys'][':sshKeyId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['profile']['sshkeys'][':sshKeyId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionProfileSshkeysSshKeyIdKey()
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
            (typeof client)[':apiVersion']['profile']['sshkeys'][':sshKeyId']['$put']
          >
        },
      ) =>
        parseResponse(client[':apiVersion'].profile.sshkeys[':sshKeyId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionProfileSshkeysSshKeyIdKey() {
  return [':apiVersion', '/:apiVersion/profile/sshkeys/:sshKeyId', 'DELETE'] as const
}

export function useDeleteApiVersionProfileSshkeysSshKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['profile']['sshkeys'][':sshKeyId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['profile']['sshkeys'][':sshKeyId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionProfileSshkeysSshKeyIdKey()
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
            (typeof client)[':apiVersion']['profile']['sshkeys'][':sshKeyId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].profile.sshkeys[':sshKeyId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionProfileTfaDisableKey() {
  return [':apiVersion', '/:apiVersion/profile/tfa-disable', 'POST'] as const
}

export function usePostApiVersionProfileTfaDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['tfa-disable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['profile']['tfa-disable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionProfileTfaDisableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':apiVersion']['profile']['tfa-disable']['$post']>
        },
      ) => parseResponse(client[':apiVersion'].profile['tfa-disable'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionProfileTfaEnableKey() {
  return [':apiVersion', '/:apiVersion/profile/tfa-enable', 'POST'] as const
}

export function usePostApiVersionProfileTfaEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['tfa-enable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['profile']['tfa-enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionProfileTfaEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':apiVersion']['profile']['tfa-enable']['$post']>
        },
      ) => parseResponse(client[':apiVersion'].profile['tfa-enable'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionProfileTfaEnableConfirmKey() {
  return [':apiVersion', '/:apiVersion/profile/tfa-enable-confirm', 'POST'] as const
}

export function usePostApiVersionProfileTfaEnableConfirm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['profile']['tfa-enable-confirm']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['profile']['tfa-enable-confirm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionProfileTfaEnableConfirmKey()
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
            (typeof client)[':apiVersion']['profile']['tfa-enable-confirm']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].profile['tfa-enable-confirm'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionProfileTokensKey(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['tokens']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/profile/tokens', args] as const
}

export function useGetApiVersionProfileTokens<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['tokens']['$get']>>
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
        ? getGetApiVersionProfileTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['tokens']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].profile.tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionProfileTokens<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['tokens']['$get']>>
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
        ? getGetApiVersionProfileTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['tokens']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].profile.tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionProfileTokensKey() {
  return [':apiVersion', '/:apiVersion/profile/tokens', 'POST'] as const
}

export function usePostApiVersionProfileTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['profile']['tokens']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['profile']['tokens']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionProfileTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':apiVersion']['profile']['tokens']['$post']> },
      ) => parseResponse(client[':apiVersion'].profile.tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionProfileTokensTokenIdKey(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['tokens'][':tokenId']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/profile/tokens/:tokenId', args] as const
}

export function useGetApiVersionProfileTokensTokenId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['tokens'][':tokenId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['profile']['tokens'][':tokenId']['$get']>
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
        ? getGetApiVersionProfileTokensTokenIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['profile']['tokens'][':tokenId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].profile.tokens[':tokenId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionProfileTokensTokenId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['tokens'][':tokenId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['profile']['tokens'][':tokenId']['$get']>
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
        ? getGetApiVersionProfileTokensTokenIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['profile']['tokens'][':tokenId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].profile.tokens[':tokenId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionProfileTokensTokenIdKey() {
  return [':apiVersion', '/:apiVersion/profile/tokens/:tokenId', 'PUT'] as const
}

export function usePutApiVersionProfileTokensTokenId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['profile']['tokens'][':tokenId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['profile']['tokens'][':tokenId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionProfileTokensTokenIdKey()
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
            (typeof client)[':apiVersion']['profile']['tokens'][':tokenId']['$put']
          >
        },
      ) => parseResponse(client[':apiVersion'].profile.tokens[':tokenId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionProfileTokensTokenIdKey() {
  return [':apiVersion', '/:apiVersion/profile/tokens/:tokenId', 'DELETE'] as const
}

export function useDeleteApiVersionProfileTokensTokenId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['profile']['tokens'][':tokenId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['profile']['tokens'][':tokenId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionProfileTokensTokenIdKey()
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
            (typeof client)[':apiVersion']['profile']['tokens'][':tokenId']['$delete']
          >
        },
      ) =>
        parseResponse(client[':apiVersion'].profile.tokens[':tokenId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionRegionsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['regions']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/regions', args] as const
}

export function useGetApiVersionRegions<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['regions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['regions']['$get']>>
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
        ? getGetApiVersionRegionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['regions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].regions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionRegions<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['regions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['regions']['$get']>>
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
        ? getGetApiVersionRegionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['regions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].regions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionRegionsAvailabilityKey(
  args: InferRequestType<(typeof client)[':apiVersion']['regions']['availability']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/regions/availability', args] as const
}

export function useGetApiVersionRegionsAvailability<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['regions']['availability']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['regions']['availability']['$get']>>
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
        ? getGetApiVersionRegionsAvailabilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['regions']['availability']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].regions.availability.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionRegionsAvailability<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['regions']['availability']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['regions']['availability']['$get']>>
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
        ? getGetApiVersionRegionsAvailabilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['regions']['availability']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].regions.availability.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionRegionsRegionIdKey(
  args: InferRequestType<(typeof client)[':apiVersion']['regions'][':regionId']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/regions/:regionId', args] as const
}

export function useGetApiVersionRegionsRegionId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['regions'][':regionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['regions'][':regionId']['$get']>>
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
        ? getGetApiVersionRegionsRegionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['regions'][':regionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].regions[':regionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionRegionsRegionId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['regions'][':regionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['regions'][':regionId']['$get']>>
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
        ? getGetApiVersionRegionsRegionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['regions'][':regionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].regions[':regionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionRegionsRegionIdAvailabilityKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['regions'][':regionId']['availability']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/regions/:regionId/availability', args] as const
}

export function useGetApiVersionRegionsRegionIdAvailability<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['regions'][':regionId']['availability']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['regions'][':regionId']['availability']['$get']
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
        ? getGetApiVersionRegionsRegionIdAvailabilityKey(args)
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
                (typeof client)[':apiVersion']['regions'][':regionId']['availability']['$get']
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
          client[':apiVersion'].regions[':regionId'].availability.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionRegionsRegionIdAvailability<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['regions'][':regionId']['availability']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['regions'][':regionId']['availability']['$get']
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
        ? getGetApiVersionRegionsRegionIdAvailabilityKey(args)
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
                (typeof client)[':apiVersion']['regions'][':regionId']['availability']['$get']
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
          client[':apiVersion'].regions[':regionId'].availability.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionSupportTicketsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['support']['tickets']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/support/tickets', args] as const
}

export function useGetApiVersionSupportTickets<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['support']['tickets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['support']['tickets']['$get']>>
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
        ? getGetApiVersionSupportTicketsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['support']['tickets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].support.tickets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionSupportTickets<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['support']['tickets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['support']['tickets']['$get']>>
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
        ? getGetApiVersionSupportTicketsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['support']['tickets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].support.tickets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionSupportTicketsKey() {
  return [':apiVersion', '/:apiVersion/support/tickets', 'POST'] as const
}

export function usePostApiVersionSupportTickets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['support']['tickets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['support']['tickets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionSupportTicketsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':apiVersion']['support']['tickets']['$post']> },
      ) => parseResponse(client[':apiVersion'].support.tickets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionSupportTicketsTicketIdKey(
  args: InferRequestType<(typeof client)[':apiVersion']['support']['tickets'][':ticketId']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/support/tickets/:ticketId', args] as const
}

export function useGetApiVersionSupportTicketsTicketId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['support']['tickets'][':ticketId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['support']['tickets'][':ticketId']['$get']>
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
        ? getGetApiVersionSupportTicketsTicketIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['support']['tickets'][':ticketId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].support.tickets[':ticketId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionSupportTicketsTicketId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['support']['tickets'][':ticketId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['support']['tickets'][':ticketId']['$get']>
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
        ? getGetApiVersionSupportTicketsTicketIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':apiVersion']['support']['tickets'][':ticketId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].support.tickets[':ticketId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionSupportTicketsTicketIdAttachmentsKey() {
  return [':apiVersion', '/:apiVersion/support/tickets/:ticketId/attachments', 'POST'] as const
}

export function usePostApiVersionSupportTicketsTicketIdAttachments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['support']['tickets'][':ticketId']['attachments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['support']['tickets'][':ticketId']['attachments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionSupportTicketsTicketIdAttachmentsKey()
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
            (typeof client)[':apiVersion']['support']['tickets'][':ticketId']['attachments']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].support.tickets[':ticketId'].attachments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionSupportTicketsTicketIdCloseKey() {
  return [':apiVersion', '/:apiVersion/support/tickets/:ticketId/close', 'POST'] as const
}

export function usePostApiVersionSupportTicketsTicketIdClose<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['support']['tickets'][':ticketId']['close']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['support']['tickets'][':ticketId']['close']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionSupportTicketsTicketIdCloseKey()
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
            (typeof client)[':apiVersion']['support']['tickets'][':ticketId']['close']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].support.tickets[':ticketId'].close.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionSupportTicketsTicketIdRepliesKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['support']['tickets'][':ticketId']['replies']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/support/tickets/:ticketId/replies', args] as const
}

export function useGetApiVersionSupportTicketsTicketIdReplies<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['support']['tickets'][':ticketId']['replies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['support']['tickets'][':ticketId']['replies']['$get']
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
        ? getGetApiVersionSupportTicketsTicketIdRepliesKey(args)
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
                (typeof client)[':apiVersion']['support']['tickets'][':ticketId']['replies']['$get']
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
          client[':apiVersion'].support.tickets[':ticketId'].replies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionSupportTicketsTicketIdReplies<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['support']['tickets'][':ticketId']['replies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['support']['tickets'][':ticketId']['replies']['$get']
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
        ? getGetApiVersionSupportTicketsTicketIdRepliesKey(args)
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
                (typeof client)[':apiVersion']['support']['tickets'][':ticketId']['replies']['$get']
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
          client[':apiVersion'].support.tickets[':ticketId'].replies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionSupportTicketsTicketIdRepliesKey() {
  return [':apiVersion', '/:apiVersion/support/tickets/:ticketId/replies', 'POST'] as const
}

export function usePostApiVersionSupportTicketsTicketIdReplies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['support']['tickets'][':ticketId']['replies']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['support']['tickets'][':ticketId']['replies']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionSupportTicketsTicketIdRepliesKey()
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
            (typeof client)[':apiVersion']['support']['tickets'][':ticketId']['replies']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].support.tickets[':ticketId'].replies.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionTagsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['tags']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/tags', args] as const
}

export function useGetApiVersionTags<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':apiVersion']['tags']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiVersionTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':apiVersion']['tags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionTags<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':apiVersion']['tags']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiVersionTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':apiVersion']['tags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionTagsKey() {
  return [':apiVersion', '/:apiVersion/tags', 'POST'] as const
}

export function usePostApiVersionTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':apiVersion']['tags']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':apiVersion']['tags']['$post']> },
      ) => parseResponse(client[':apiVersion'].tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionTagsTagLabelKey(
  args: InferRequestType<(typeof client)[':apiVersion']['tags'][':tagLabel']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/tags/:tagLabel', args] as const
}

export function useGetApiVersionTagsTagLabel<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['tags'][':tagLabel']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['tags'][':tagLabel']['$get']>>
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
        ? getGetApiVersionTagsTagLabelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['tags'][':tagLabel']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].tags[':tagLabel'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionTagsTagLabel<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['tags'][':tagLabel']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['tags'][':tagLabel']['$get']>>
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
        ? getGetApiVersionTagsTagLabelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['tags'][':tagLabel']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].tags[':tagLabel'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiVersionTagsTagLabelKey() {
  return [':apiVersion', '/:apiVersion/tags/:tagLabel', 'DELETE'] as const
}

export function useDeleteApiVersionTagsTagLabel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['tags'][':tagLabel']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['tags'][':tagLabel']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionTagsTagLabelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':apiVersion']['tags'][':tagLabel']['$delete']>
        },
      ) => parseResponse(client[':apiVersion'].tags[':tagLabel'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionVolumesKey(
  args: InferRequestType<(typeof client)[':apiVersion']['volumes']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/volumes', args] as const
}

export function useGetApiVersionVolumes<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['volumes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['volumes']['$get']>>
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
        ? getGetApiVersionVolumesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['volumes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].volumes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionVolumes<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['volumes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['volumes']['$get']>>
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
        ? getGetApiVersionVolumesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['volumes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].volumes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionVolumesKey() {
  return [':apiVersion', '/:apiVersion/volumes', 'POST'] as const
}

export function usePostApiVersionVolumes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['volumes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['volumes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionVolumesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':apiVersion']['volumes']['$post']> },
      ) => parseResponse(client[':apiVersion'].volumes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionVolumesTypesKey(
  args: InferRequestType<(typeof client)[':apiVersion']['volumes']['types']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/volumes/types', args] as const
}

export function useGetApiVersionVolumesTypes<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['volumes']['types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['volumes']['types']['$get']>>
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
        ? getGetApiVersionVolumesTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['volumes']['types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].volumes.types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionVolumesTypes<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['volumes']['types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['volumes']['types']['$get']>>
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
        ? getGetApiVersionVolumesTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['volumes']['types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].volumes.types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionVolumesVolumeIdKey(
  args: InferRequestType<(typeof client)[':apiVersion']['volumes'][':volumeId']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/volumes/:volumeId', args] as const
}

export function useGetApiVersionVolumesVolumeId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['volumes'][':volumeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['volumes'][':volumeId']['$get']>>
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
        ? getGetApiVersionVolumesVolumeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['volumes'][':volumeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].volumes[':volumeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionVolumesVolumeId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['volumes'][':volumeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['volumes'][':volumeId']['$get']>>
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
        ? getGetApiVersionVolumesVolumeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['volumes'][':volumeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].volumes[':volumeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionVolumesVolumeIdKey() {
  return [':apiVersion', '/:apiVersion/volumes/:volumeId', 'PUT'] as const
}

export function usePutApiVersionVolumesVolumeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['volumes'][':volumeId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['volumes'][':volumeId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionVolumesVolumeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':apiVersion']['volumes'][':volumeId']['$put']>
        },
      ) => parseResponse(client[':apiVersion'].volumes[':volumeId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionVolumesVolumeIdKey() {
  return [':apiVersion', '/:apiVersion/volumes/:volumeId', 'DELETE'] as const
}

export function useDeleteApiVersionVolumesVolumeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['volumes'][':volumeId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['volumes'][':volumeId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionVolumesVolumeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':apiVersion']['volumes'][':volumeId']['$delete']>
        },
      ) => parseResponse(client[':apiVersion'].volumes[':volumeId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionVolumesVolumeIdAttachKey() {
  return [':apiVersion', '/:apiVersion/volumes/:volumeId/attach', 'POST'] as const
}

export function usePostApiVersionVolumesVolumeIdAttach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['volumes'][':volumeId']['attach']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['volumes'][':volumeId']['attach']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionVolumesVolumeIdAttachKey()
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
            (typeof client)[':apiVersion']['volumes'][':volumeId']['attach']['$post']
          >
        },
      ) =>
        parseResponse(client[':apiVersion'].volumes[':volumeId'].attach.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionVolumesVolumeIdCloneKey() {
  return [':apiVersion', '/:apiVersion/volumes/:volumeId/clone', 'POST'] as const
}

export function usePostApiVersionVolumesVolumeIdClone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['volumes'][':volumeId']['clone']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['volumes'][':volumeId']['clone']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionVolumesVolumeIdCloneKey()
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
            (typeof client)[':apiVersion']['volumes'][':volumeId']['clone']['$post']
          >
        },
      ) =>
        parseResponse(client[':apiVersion'].volumes[':volumeId'].clone.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionVolumesVolumeIdDetachKey() {
  return [':apiVersion', '/:apiVersion/volumes/:volumeId/detach', 'POST'] as const
}

export function usePostApiVersionVolumesVolumeIdDetach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['volumes'][':volumeId']['detach']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['volumes'][':volumeId']['detach']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionVolumesVolumeIdDetachKey()
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
            (typeof client)[':apiVersion']['volumes'][':volumeId']['detach']['$post']
          >
        },
      ) =>
        parseResponse(client[':apiVersion'].volumes[':volumeId'].detach.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiVersionVolumesVolumeIdResizeKey() {
  return [':apiVersion', '/:apiVersion/volumes/:volumeId/resize', 'POST'] as const
}

export function usePostApiVersionVolumesVolumeIdResize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':apiVersion']['volumes'][':volumeId']['resize']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['volumes'][':volumeId']['resize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionVolumesVolumeIdResizeKey()
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
            (typeof client)[':apiVersion']['volumes'][':volumeId']['resize']['$post']
          >
        },
      ) =>
        parseResponse(client[':apiVersion'].volumes[':volumeId'].resize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionVpcsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['vpcs']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/vpcs', args] as const
}

export function useGetApiVersionVpcs<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['vpcs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':apiVersion']['vpcs']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiVersionVpcsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':apiVersion']['vpcs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].vpcs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionVpcs<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['vpcs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':apiVersion']['vpcs']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiVersionVpcsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':apiVersion']['vpcs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].vpcs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionVpcsKey() {
  return [':apiVersion', '/:apiVersion/vpcs', 'POST'] as const
}

export function usePostApiVersionVpcs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':apiVersion']['vpcs']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['vpcs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionVpcsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':apiVersion']['vpcs']['$post']> },
      ) => parseResponse(client[':apiVersion'].vpcs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionVpcsIpsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['vpcs']['ips']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/vpcs/ips', args] as const
}

export function useGetApiVersionVpcsIps<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['vpcs']['ips']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['vpcs']['ips']['$get']>>
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
        ? getGetApiVersionVpcsIpsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['vpcs']['ips']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].vpcs.ips.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionVpcsIps<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['vpcs']['ips']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['vpcs']['ips']['$get']>>
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
        ? getGetApiVersionVpcsIpsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['vpcs']['ips']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].vpcs.ips.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionVpcsVpcIdKey(
  args: InferRequestType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/vpcs/:vpcId', args] as const
}

export function useGetApiVersionVpcsVpcId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['$get']>>
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
        ? getGetApiVersionVpcsVpcIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].vpcs[':vpcId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionVpcsVpcId<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['$get']>>
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
        ? getGetApiVersionVpcsVpcIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].vpcs[':vpcId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionVpcsVpcIdKey() {
  return [':apiVersion', '/:apiVersion/vpcs/:vpcId', 'PUT'] as const
}

export function usePutApiVersionVpcsVpcId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionVpcsVpcIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['$put']> },
      ) => parseResponse(client[':apiVersion'].vpcs[':vpcId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionVpcsVpcIdKey() {
  return [':apiVersion', '/:apiVersion/vpcs/:vpcId', 'DELETE'] as const
}

export function useDeleteApiVersionVpcsVpcId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionVpcsVpcIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['$delete']> },
      ) => parseResponse(client[':apiVersion'].vpcs[':vpcId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionVpcsVpcIdIpsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['ips']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/vpcs/:vpcId/ips', args] as const
}

export function useGetApiVersionVpcsVpcIdIps<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['ips']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['ips']['$get']>>
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
        ? getGetApiVersionVpcsVpcIdIpsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['ips']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].vpcs[':vpcId'].ips.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionVpcsVpcIdIps<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['ips']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['ips']['$get']>>
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
        ? getGetApiVersionVpcsVpcIdIpsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['ips']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':apiVersion'].vpcs[':vpcId'].ips.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVersionVpcsVpcIdSubnetsKey(
  args: InferRequestType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['subnets']['$get']>,
) {
  return [':apiVersion', '/:apiVersion/vpcs/:vpcId/subnets', args] as const
}

export function useGetApiVersionVpcsVpcIdSubnets<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['subnets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['subnets']['$get']>>
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
        ? getGetApiVersionVpcsVpcIdSubnetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['subnets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].vpcs[':vpcId'].subnets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionVpcsVpcIdSubnets<TError = unknown>(
  args: InferRequestType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['subnets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['subnets']['$get']>>
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
        ? getGetApiVersionVpcsVpcIdSubnetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['subnets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':apiVersion'].vpcs[':vpcId'].subnets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVersionVpcsVpcIdSubnetsKey() {
  return [':apiVersion', '/:apiVersion/vpcs/:vpcId/subnets', 'POST'] as const
}

export function usePostApiVersionVpcsVpcIdSubnets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['subnets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['subnets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVersionVpcsVpcIdSubnetsKey()
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
            (typeof client)[':apiVersion']['vpcs'][':vpcId']['subnets']['$post']
          >
        },
      ) => parseResponse(client[':apiVersion'].vpcs[':vpcId'].subnets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVersionVpcsVpcIdSubnetsVpcSubnetIdKey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['vpcs'][':vpcId']['subnets'][':vpcSubnetId']['$get']
  >,
) {
  return [':apiVersion', '/:apiVersion/vpcs/:vpcId/subnets/:vpcSubnetId', args] as const
}

export function useGetApiVersionVpcsVpcIdSubnetsVpcSubnetId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['vpcs'][':vpcId']['subnets'][':vpcSubnetId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['vpcs'][':vpcId']['subnets'][':vpcSubnetId']['$get']
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
        ? getGetApiVersionVpcsVpcIdSubnetsVpcSubnetIdKey(args)
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
                (typeof client)[':apiVersion']['vpcs'][':vpcId']['subnets'][':vpcSubnetId']['$get']
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
          client[':apiVersion'].vpcs[':vpcId'].subnets[':vpcSubnetId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVersionVpcsVpcIdSubnetsVpcSubnetId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':apiVersion']['vpcs'][':vpcId']['subnets'][':vpcSubnetId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':apiVersion']['vpcs'][':vpcId']['subnets'][':vpcSubnetId']['$get']
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
        ? getGetApiVersionVpcsVpcIdSubnetsVpcSubnetIdKey(args)
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
                (typeof client)[':apiVersion']['vpcs'][':vpcId']['subnets'][':vpcSubnetId']['$get']
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
          client[':apiVersion'].vpcs[':vpcId'].subnets[':vpcSubnetId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiVersionVpcsVpcIdSubnetsVpcSubnetIdKey() {
  return [':apiVersion', '/:apiVersion/vpcs/:vpcId/subnets/:vpcSubnetId', 'PUT'] as const
}

export function usePutApiVersionVpcsVpcIdSubnetsVpcSubnetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['vpcs'][':vpcId']['subnets'][':vpcSubnetId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['vpcs'][':vpcId']['subnets'][':vpcSubnetId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVersionVpcsVpcIdSubnetsVpcSubnetIdKey()
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
            (typeof client)[':apiVersion']['vpcs'][':vpcId']['subnets'][':vpcSubnetId']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].vpcs[':vpcId'].subnets[':vpcSubnetId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVersionVpcsVpcIdSubnetsVpcSubnetIdKey() {
  return [':apiVersion', '/:apiVersion/vpcs/:vpcId/subnets/:vpcSubnetId', 'DELETE'] as const
}

export function useDeleteApiVersionVpcsVpcIdSubnetsVpcSubnetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':apiVersion']['vpcs'][':vpcId']['subnets'][':vpcSubnetId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':apiVersion']['vpcs'][':vpcId']['subnets'][':vpcSubnetId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVersionVpcsVpcIdSubnetsVpcSubnetIdKey()
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
            (typeof client)[':apiVersion']['vpcs'][':vpcId']['subnets'][':vpcSubnetId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':apiVersion'].vpcs[':vpcId'].subnets[':vpcSubnetId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
