import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDynamicOffersKey() {
  return ['dynamicOffers'] as const
}

export function getGrantAccountsKey() {
  return ['grantAccounts'] as const
}

export function getGrantOffersKey() {
  return ['grantOffers'] as const
}

export function getGrantsKey() {
  return ['grants'] as const
}

export function getGetDynamicOffersKey(args: InferRequestType<typeof client.dynamicOffers.$get>) {
  return ['dynamicOffers', '/dynamicOffers', args] as const
}

export function useGetDynamicOffers<TError = unknown>(
  args: InferRequestType<typeof client.dynamicOffers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dynamicOffers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDynamicOffersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dynamicOffers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dynamicOffers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDynamicOffers<TError = unknown>(
  args: InferRequestType<typeof client.dynamicOffers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dynamicOffers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDynamicOffersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dynamicOffers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dynamicOffers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDynamicOffersIdCalculateKey() {
  return ['dynamicOffers', '/dynamicOffers/:id/calculate', 'POST'] as const
}

export function usePostDynamicOffersIdCalculate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dynamicOffers)[':id']['calculate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dynamicOffers)[':id']['calculate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDynamicOffersIdCalculateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dynamicOffers)[':id']['calculate']['$post']> },
      ) => parseResponse(client.dynamicOffers[':id'].calculate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDynamicOffersIdGrantOfferKey() {
  return ['dynamicOffers', '/dynamicOffers/:id/grantOffer', 'POST'] as const
}

export function usePostDynamicOffersIdGrantOffer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dynamicOffers)[':id']['grantOffer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dynamicOffers)[':id']['grantOffer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDynamicOffersIdGrantOfferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dynamicOffers)[':id']['grantOffer']['$post']> },
      ) => parseResponse(client.dynamicOffers[':id'].grantOffer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGrantAccountsIdKey(
  args: InferRequestType<(typeof client.grantAccounts)[':id']['$get']>,
) {
  return ['grantAccounts', '/grantAccounts/:id', args] as const
}

export function useGetGrantAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.grantAccounts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.grantAccounts)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGrantAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.grantAccounts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.grantAccounts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGrantAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.grantAccounts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.grantAccounts)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGrantAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.grantAccounts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.grantAccounts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGrantOffersKey(args: InferRequestType<typeof client.grantOffers.$get>) {
  return ['grantOffers', '/grantOffers', args] as const
}

export function useGetGrantOffers<TError = unknown>(
  args: InferRequestType<typeof client.grantOffers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grantOffers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGrantOffersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grantOffers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.grantOffers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGrantOffers<TError = unknown>(
  args: InferRequestType<typeof client.grantOffers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grantOffers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGrantOffersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grantOffers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.grantOffers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGrantOffersIdKey(
  args: InferRequestType<(typeof client.grantOffers)[':id']['$get']>,
) {
  return ['grantOffers', '/grantOffers/:id', args] as const
}

export function useGetGrantOffersId<TError = unknown>(
  args: InferRequestType<(typeof client.grantOffers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.grantOffers)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGrantOffersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.grantOffers)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.grantOffers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGrantOffersId<TError = unknown>(
  args: InferRequestType<(typeof client.grantOffers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.grantOffers)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGrantOffersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.grantOffers)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.grantOffers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGrantsKey(args: InferRequestType<typeof client.grants.$get>) {
  return ['grants', '/grants', args] as const
}

export function useGetGrants<TError = unknown>(
  args: InferRequestType<typeof client.grants.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grants.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGrantsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grants.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.grants.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetGrants<TError = unknown>(
  args: InferRequestType<typeof client.grants.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grants.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGrantsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grants.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.grants.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostGrantsKey() {
  return ['grants', '/grants', 'POST'] as const
}

export function usePostGrants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grants.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.grants.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGrantsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.grants.$post> }) =>
        parseResponse(client.grants.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGrantsGrantIdKey(
  args: InferRequestType<(typeof client.grants)[':grantId']['$get']>,
) {
  return ['grants', '/grants/:grantId', args] as const
}

export function useGetGrantsGrantId<TError = unknown>(
  args: InferRequestType<(typeof client.grants)[':grantId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.grants)[':grantId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGrantsGrantIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.grants)[':grantId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.grants[':grantId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGrantsGrantId<TError = unknown>(
  args: InferRequestType<(typeof client.grants)[':grantId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.grants)[':grantId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGrantsGrantIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.grants)[':grantId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.grants[':grantId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGrantsGrantIdDisbursementsKey(
  args: InferRequestType<(typeof client.grants)[':grantId']['disbursements']['$get']>,
) {
  return ['grants', '/grants/:grantId/disbursements', args] as const
}

export function useGetGrantsGrantIdDisbursements<TError = unknown>(
  args: InferRequestType<(typeof client.grants)[':grantId']['disbursements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.grants)[':grantId']['disbursements']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGrantsGrantIdDisbursementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.grants)[':grantId']['disbursements']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.grants[':grantId'].disbursements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGrantsGrantIdDisbursements<TError = unknown>(
  args: InferRequestType<(typeof client.grants)[':grantId']['disbursements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.grants)[':grantId']['disbursements']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGrantsGrantIdDisbursementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.grants)[':grantId']['disbursements']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.grants[':grantId'].disbursements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGrantsGrantIdDisbursementsDisbursementIdKey(
  args: InferRequestType<
    (typeof client.grants)[':grantId']['disbursements'][':disbursementId']['$get']
  >,
) {
  return ['grants', '/grants/:grantId/disbursements/:disbursementId', args] as const
}

export function useGetGrantsGrantIdDisbursementsDisbursementId<TError = unknown>(
  args: InferRequestType<
    (typeof client.grants)[':grantId']['disbursements'][':disbursementId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.grants)[':grantId']['disbursements'][':disbursementId']['$get']
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
        ? getGetGrantsGrantIdDisbursementsDisbursementIdKey(args)
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
                (typeof client.grants)[':grantId']['disbursements'][':disbursementId']['$get']
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
          client.grants[':grantId'].disbursements[':disbursementId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGrantsGrantIdDisbursementsDisbursementId<TError = unknown>(
  args: InferRequestType<
    (typeof client.grants)[':grantId']['disbursements'][':disbursementId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.grants)[':grantId']['disbursements'][':disbursementId']['$get']
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
        ? getGetGrantsGrantIdDisbursementsDisbursementIdKey(args)
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
                (typeof client.grants)[':grantId']['disbursements'][':disbursementId']['$get']
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
          client.grants[':grantId'].disbursements[':disbursementId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchGrantsGrantIdDisbursementsDisbursementIdKey() {
  return ['grants', '/grants/:grantId/disbursements/:disbursementId', 'PATCH'] as const
}

export function usePatchGrantsGrantIdDisbursementsDisbursementId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.grants)[':grantId']['disbursements'][':disbursementId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.grants)[':grantId']['disbursements'][':disbursementId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGrantsGrantIdDisbursementsDisbursementIdKey()
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
            (typeof client.grants)[':grantId']['disbursements'][':disbursementId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.grants[':grantId'].disbursements[':disbursementId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
