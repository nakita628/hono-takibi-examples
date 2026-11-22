import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getAccountstatusesKey() {
  return ['accountstatuses'] as const
}

export function getAccounttaxKey() {
  return ['accounttax'] as const
}

export function getDatafeedsKey() {
  return ['datafeeds'] as const
}

export function getDatafeedstatusesKey() {
  return ['datafeedstatuses'] as const
}

export function getLiasettingsKey() {
  return ['liasettings'] as const
}

export function getLocalinventoryKey() {
  return ['localinventory'] as const
}

export function getPosKey() {
  return ['pos'] as const
}

export function getProductsKey() {
  return ['products'] as const
}

export function getProductstatusesKey() {
  return ['productstatuses'] as const
}

export function getRegionalinventoryKey() {
  return ['regionalinventory'] as const
}

export function getReturnaddressKey() {
  return ['returnaddress'] as const
}

export function getReturnpolicyKey() {
  return ['returnpolicy'] as const
}

export function getShippingsettingsKey() {
  return ['shippingsettings'] as const
}

export function getCssGroupIdKey() {
  return ['{cssGroupId}'] as const
}

export function getMerchantIdKey() {
  return ['{merchantId}'] as const
}

export function getGetAccountsAuthinfoKey(
  args: InferRequestType<typeof client.accounts.authinfo.$get>,
) {
  return ['accounts', '/accounts/authinfo', args] as const
}

export function useGetAccountsAuthinfo<TError = unknown>(
  args: InferRequestType<typeof client.accounts.authinfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.authinfo.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAuthinfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.authinfo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts.authinfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAuthinfo<TError = unknown>(
  args: InferRequestType<typeof client.accounts.authinfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.authinfo.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAuthinfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.authinfo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts.authinfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsBatchKey() {
  return ['accounts', '/accounts/batch', 'POST'] as const
}

export function usePostAccountsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.batch.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.accounts.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.accounts.batch.$post> }) =>
        parseResponse(client.accounts.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAccountIdCredentialsKey() {
  return ['accounts', '/accounts/:accountId/credentials', 'POST'] as const
}

export function usePostAccountsAccountIdCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['credentials']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['credentials']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.accounts)[':accountId']['credentials']['$post']>
        },
      ) => parseResponse(client.accounts[':accountId'].credentials.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdLabelsKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['labels']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/labels', args] as const
}

export function useGetAccountsAccountIdLabels<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['labels']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdLabels<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['labels']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsAccountIdLabelsKey() {
  return ['accounts', '/accounts/:accountId/labels', 'POST'] as const
}

export function usePostAccountsAccountIdLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['labels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['labels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.accounts)[':accountId']['labels']['$post']> },
      ) => parseResponse(client.accounts[':accountId'].labels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAccountIdLabelsLabelIdKey() {
  return ['accounts', '/accounts/:accountId/labels/:labelId', 'DELETE'] as const
}

export function useDeleteAccountsAccountIdLabelsLabelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':accountId']['labels'][':labelId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['labels'][':labelId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAccountIdLabelsLabelIdKey()
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
            (typeof client.accounts)[':accountId']['labels'][':labelId']['$delete']
          >
        },
      ) =>
        parseResponse(client.accounts[':accountId'].labels[':labelId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAccountsAccountIdLabelsLabelIdKey() {
  return ['accounts', '/accounts/:accountId/labels/:labelId', 'PATCH'] as const
}

export function usePatchAccountsAccountIdLabelsLabelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':accountId']['labels'][':labelId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['labels'][':labelId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountsAccountIdLabelsLabelIdKey()
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
            (typeof client.accounts)[':accountId']['labels'][':labelId']['$patch']
          >
        },
      ) =>
        parseResponse(client.accounts[':accountId'].labels[':labelId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdReturncarrierKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['returncarrier']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/returncarrier', args] as const
}

export function useGetAccountsAccountIdReturncarrier<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['returncarrier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['returncarrier']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdReturncarrierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['returncarrier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':accountId'].returncarrier.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdReturncarrier<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['returncarrier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['returncarrier']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdReturncarrierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['returncarrier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':accountId'].returncarrier.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsAccountIdReturncarrierKey() {
  return ['accounts', '/accounts/:accountId/returncarrier', 'POST'] as const
}

export function usePostAccountsAccountIdReturncarrier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['returncarrier']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['returncarrier']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdReturncarrierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.accounts)[':accountId']['returncarrier']['$post']>
        },
      ) => parseResponse(client.accounts[':accountId'].returncarrier.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAccountIdReturncarrierCarrierAccountIdKey() {
  return ['accounts', '/accounts/:accountId/returncarrier/:carrierAccountId', 'DELETE'] as const
}

export function useDeleteAccountsAccountIdReturncarrierCarrierAccountId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['returncarrier'][':carrierAccountId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':accountId']['returncarrier'][':carrierAccountId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAccountIdReturncarrierCarrierAccountIdKey()
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
            (typeof client.accounts)[':accountId']['returncarrier'][':carrierAccountId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId'].returncarrier[':carrierAccountId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAccountsAccountIdReturncarrierCarrierAccountIdKey() {
  return ['accounts', '/accounts/:accountId/returncarrier/:carrierAccountId', 'PATCH'] as const
}

export function usePatchAccountsAccountIdReturncarrierCarrierAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['returncarrier'][':carrierAccountId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':accountId']['returncarrier'][':carrierAccountId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountsAccountIdReturncarrierCarrierAccountIdKey()
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
            (typeof client.accounts)[':accountId']['returncarrier'][':carrierAccountId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId'].returncarrier[':carrierAccountId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountstatusesBatchKey() {
  return ['accountstatuses', '/accountstatuses/batch', 'POST'] as const
}

export function usePostAccountstatusesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.accountstatuses.batch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.accountstatuses.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountstatusesBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.accountstatuses.batch.$post> },
      ) => parseResponse(client.accountstatuses.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccounttaxBatchKey() {
  return ['accounttax', '/accounttax/batch', 'POST'] as const
}

export function usePostAccounttaxBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounttax.batch.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.accounttax.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccounttaxBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.accounttax.batch.$post> }) =>
        parseResponse(client.accounttax.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDatafeedsBatchKey() {
  return ['datafeeds', '/datafeeds/batch', 'POST'] as const
}

export function usePostDatafeedsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datafeeds.batch.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.datafeeds.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatafeedsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.datafeeds.batch.$post> }) =>
        parseResponse(client.datafeeds.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDatafeedstatusesBatchKey() {
  return ['datafeedstatuses', '/datafeedstatuses/batch', 'POST'] as const
}

export function usePostDatafeedstatusesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.datafeedstatuses.batch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.datafeedstatuses.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatafeedstatusesBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.datafeedstatuses.batch.$post> },
      ) => parseResponse(client.datafeedstatuses.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLiasettingsBatchKey() {
  return ['liasettings', '/liasettings/batch', 'POST'] as const
}

export function usePostLiasettingsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.liasettings.batch.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.liasettings.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLiasettingsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.liasettings.batch.$post> }) =>
        parseResponse(client.liasettings.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLiasettingsPosdataprovidersKey(
  args: InferRequestType<typeof client.liasettings.posdataproviders.$get>,
) {
  return ['liasettings', '/liasettings/posdataproviders', args] as const
}

export function useGetLiasettingsPosdataproviders<TError = unknown>(
  args: InferRequestType<typeof client.liasettings.posdataproviders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.liasettings.posdataproviders.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLiasettingsPosdataprovidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.liasettings.posdataproviders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.liasettings.posdataproviders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiasettingsPosdataproviders<TError = unknown>(
  args: InferRequestType<typeof client.liasettings.posdataproviders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.liasettings.posdataproviders.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLiasettingsPosdataprovidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.liasettings.posdataproviders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.liasettings.posdataproviders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLocalinventoryBatchKey() {
  return ['localinventory', '/localinventory/batch', 'POST'] as const
}

export function usePostLocalinventoryBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.localinventory.batch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.localinventory.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLocalinventoryBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.localinventory.batch.$post> },
      ) => parseResponse(client.localinventory.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPosBatchKey() {
  return ['pos', '/pos/batch', 'POST'] as const
}

export function usePostPosBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.batch.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.pos.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPosBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pos.batch.$post> }) =>
        parseResponse(client.pos.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProductsBatchKey() {
  return ['products', '/products/batch', 'POST'] as const
}

export function usePostProductsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.batch.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.products.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.products.batch.$post> }) =>
        parseResponse(client.products.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProductstatusesBatchKey() {
  return ['productstatuses', '/productstatuses/batch', 'POST'] as const
}

export function usePostProductstatusesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.productstatuses.batch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.productstatuses.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductstatusesBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.productstatuses.batch.$post> },
      ) => parseResponse(client.productstatuses.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRegionalinventoryBatchKey() {
  return ['regionalinventory', '/regionalinventory/batch', 'POST'] as const
}

export function usePostRegionalinventoryBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.regionalinventory.batch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.regionalinventory.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRegionalinventoryBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.regionalinventory.batch.$post> },
      ) => parseResponse(client.regionalinventory.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReturnaddressBatchKey() {
  return ['returnaddress', '/returnaddress/batch', 'POST'] as const
}

export function usePostReturnaddressBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.returnaddress.batch.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.returnaddress.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReturnaddressBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.returnaddress.batch.$post> }) =>
        parseResponse(client.returnaddress.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReturnpolicyBatchKey() {
  return ['returnpolicy', '/returnpolicy/batch', 'POST'] as const
}

export function usePostReturnpolicyBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.returnpolicy.batch.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.returnpolicy.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReturnpolicyBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.returnpolicy.batch.$post> }) =>
        parseResponse(client.returnpolicy.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostShippingsettingsBatchKey() {
  return ['shippingsettings', '/shippingsettings/batch', 'POST'] as const
}

export function usePostShippingsettingsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.shippingsettings.batch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.shippingsettings.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShippingsettingsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.shippingsettings.batch.$post> },
      ) => parseResponse(client.shippingsettings.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCssGroupIdCssesKey(
  args: InferRequestType<(typeof client)[':cssGroupId']['csses']['$get']>,
) {
  return [':cssGroupId', '/:cssGroupId/csses', args] as const
}

export function useGetCssGroupIdCsses<TError = unknown>(
  args: InferRequestType<(typeof client)[':cssGroupId']['csses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':cssGroupId']['csses']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCssGroupIdCssesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':cssGroupId']['csses']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':cssGroupId'].csses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCssGroupIdCsses<TError = unknown>(
  args: InferRequestType<(typeof client)[':cssGroupId']['csses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':cssGroupId']['csses']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCssGroupIdCssesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':cssGroupId']['csses']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':cssGroupId'].csses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCssGroupIdCssesCssDomainIdKey(
  args: InferRequestType<(typeof client)[':cssGroupId']['csses'][':cssDomainId']['$get']>,
) {
  return [':cssGroupId', '/:cssGroupId/csses/:cssDomainId', args] as const
}

export function useGetCssGroupIdCssesCssDomainId<TError = unknown>(
  args: InferRequestType<(typeof client)[':cssGroupId']['csses'][':cssDomainId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':cssGroupId']['csses'][':cssDomainId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCssGroupIdCssesCssDomainIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':cssGroupId']['csses'][':cssDomainId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':cssGroupId'].csses[':cssDomainId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCssGroupIdCssesCssDomainId<TError = unknown>(
  args: InferRequestType<(typeof client)[':cssGroupId']['csses'][':cssDomainId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':cssGroupId']['csses'][':cssDomainId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCssGroupIdCssesCssDomainIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':cssGroupId']['csses'][':cssDomainId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':cssGroupId'].csses[':cssDomainId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCssGroupIdCssesCssDomainIdUpdatelabelsKey() {
  return [':cssGroupId', '/:cssGroupId/csses/:cssDomainId/updatelabels', 'POST'] as const
}

export function usePostCssGroupIdCssesCssDomainIdUpdatelabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':cssGroupId']['csses'][':cssDomainId']['updatelabels']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':cssGroupId']['csses'][':cssDomainId']['updatelabels']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCssGroupIdCssesCssDomainIdUpdatelabelsKey()
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
            (typeof client)[':cssGroupId']['csses'][':cssDomainId']['updatelabels']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':cssGroupId'].csses[':cssDomainId'].updatelabels.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdAccountsKey(
  args: InferRequestType<(typeof client)[':merchantId']['accounts']['$get']>,
) {
  return [':merchantId', '/:merchantId/accounts', args] as const
}

export function useGetMerchantIdAccounts<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['accounts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['accounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdAccounts<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['accounts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['accounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantIdAccountsKey() {
  return [':merchantId', '/:merchantId/accounts', 'POST'] as const
}

export function usePostMerchantIdAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['accounts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['accounts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':merchantId']['accounts']['$post']> },
      ) => parseResponse(client[':merchantId'].accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdAccountsAccountIdKey(
  args: InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$get']>,
) {
  return [':merchantId', '/:merchantId/accounts/:accountId', args] as const
}

export function useGetMerchantIdAccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdAccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':merchantId'].accounts[':accountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdAccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdAccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':merchantId'].accounts[':accountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMerchantIdAccountsAccountIdKey() {
  return [':merchantId', '/:merchantId/accounts/:accountId', 'PUT'] as const
}

export function usePutMerchantIdAccountsAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMerchantIdAccountsAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$put']>
        },
      ) => parseResponse(client[':merchantId'].accounts[':accountId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMerchantIdAccountsAccountIdKey() {
  return [':merchantId', '/:merchantId/accounts/:accountId', 'DELETE'] as const
}

export function useDeleteMerchantIdAccountsAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMerchantIdAccountsAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$delete']>
        },
      ) => parseResponse(client[':merchantId'].accounts[':accountId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdAccountsAccountIdClaimwebsiteKey() {
  return [':merchantId', '/:merchantId/accounts/:accountId/claimwebsite', 'POST'] as const
}

export function usePostMerchantIdAccountsAccountIdClaimwebsite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['accounts'][':accountId']['claimwebsite']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['accounts'][':accountId']['claimwebsite']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdAccountsAccountIdClaimwebsiteKey()
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
            (typeof client)[':merchantId']['accounts'][':accountId']['claimwebsite']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].accounts[':accountId'].claimwebsite.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdAccountsAccountIdLinkKey() {
  return [':merchantId', '/:merchantId/accounts/:accountId/link', 'POST'] as const
}

export function usePostMerchantIdAccountsAccountIdLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['link']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['link']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdAccountsAccountIdLinkKey()
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
            (typeof client)[':merchantId']['accounts'][':accountId']['link']['$post']
          >
        },
      ) =>
        parseResponse(client[':merchantId'].accounts[':accountId'].link.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdAccountsAccountIdListlinksKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['accounts'][':accountId']['listlinks']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/accounts/:accountId/listlinks', args] as const
}

export function useGetMerchantIdAccountsAccountIdListlinks<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':merchantId']['accounts'][':accountId']['listlinks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['accounts'][':accountId']['listlinks']['$get']
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
        ? getGetMerchantIdAccountsAccountIdListlinksKey(args)
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
                (typeof client)[':merchantId']['accounts'][':accountId']['listlinks']['$get']
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
          client[':merchantId'].accounts[':accountId'].listlinks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdAccountsAccountIdListlinks<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':merchantId']['accounts'][':accountId']['listlinks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['accounts'][':accountId']['listlinks']['$get']
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
        ? getGetMerchantIdAccountsAccountIdListlinksKey(args)
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
                (typeof client)[':merchantId']['accounts'][':accountId']['listlinks']['$get']
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
          client[':merchantId'].accounts[':accountId'].listlinks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantIdAccountsAccountIdRequestphoneverificationKey() {
  return [
    ':merchantId',
    '/:merchantId/accounts/:accountId/requestphoneverification',
    'POST',
  ] as const
}

export function usePostMerchantIdAccountsAccountIdRequestphoneverification<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['accounts'][':accountId']['requestphoneverification']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['accounts'][':accountId']['requestphoneverification']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdAccountsAccountIdRequestphoneverificationKey()
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
            (typeof client)[':merchantId']['accounts'][':accountId']['requestphoneverification']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].accounts[':accountId'].requestphoneverification.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdAccountsAccountIdUpdatelabelsKey() {
  return [':merchantId', '/:merchantId/accounts/:accountId/updatelabels', 'POST'] as const
}

export function usePostMerchantIdAccountsAccountIdUpdatelabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['accounts'][':accountId']['updatelabels']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['accounts'][':accountId']['updatelabels']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdAccountsAccountIdUpdatelabelsKey()
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
            (typeof client)[':merchantId']['accounts'][':accountId']['updatelabels']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].accounts[':accountId'].updatelabels.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdAccountsAccountIdVerifyphonenumberKey() {
  return [':merchantId', '/:merchantId/accounts/:accountId/verifyphonenumber', 'POST'] as const
}

export function usePostMerchantIdAccountsAccountIdVerifyphonenumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['accounts'][':accountId']['verifyphonenumber']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['accounts'][':accountId']['verifyphonenumber']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdAccountsAccountIdVerifyphonenumberKey()
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
            (typeof client)[':merchantId']['accounts'][':accountId']['verifyphonenumber']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].accounts[':accountId'].verifyphonenumber.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdAccountstatusesKey(
  args: InferRequestType<(typeof client)[':merchantId']['accountstatuses']['$get']>,
) {
  return [':merchantId', '/:merchantId/accountstatuses', args] as const
}

export function useGetMerchantIdAccountstatuses<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['accountstatuses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['accountstatuses']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdAccountstatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['accountstatuses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].accountstatuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdAccountstatuses<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['accountstatuses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['accountstatuses']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdAccountstatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['accountstatuses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].accountstatuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMerchantIdAccountstatusesAccountIdKey(
  args: InferRequestType<(typeof client)[':merchantId']['accountstatuses'][':accountId']['$get']>,
) {
  return [':merchantId', '/:merchantId/accountstatuses/:accountId', args] as const
}

export function useGetMerchantIdAccountstatusesAccountId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['accountstatuses'][':accountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['accountstatuses'][':accountId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdAccountstatusesAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['accountstatuses'][':accountId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':merchantId'].accountstatuses[':accountId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdAccountstatusesAccountId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['accountstatuses'][':accountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['accountstatuses'][':accountId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdAccountstatusesAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['accountstatuses'][':accountId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':merchantId'].accountstatuses[':accountId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMerchantIdAccounttaxKey(
  args: InferRequestType<(typeof client)[':merchantId']['accounttax']['$get']>,
) {
  return [':merchantId', '/:merchantId/accounttax', args] as const
}

export function useGetMerchantIdAccounttax<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['accounttax']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['accounttax']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdAccounttaxKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['accounttax']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].accounttax.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdAccounttax<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['accounttax']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['accounttax']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdAccounttaxKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['accounttax']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].accounttax.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMerchantIdAccounttaxAccountIdKey(
  args: InferRequestType<(typeof client)[':merchantId']['accounttax'][':accountId']['$get']>,
) {
  return [':merchantId', '/:merchantId/accounttax/:accountId', args] as const
}

export function useGetMerchantIdAccounttaxAccountId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['accounttax'][':accountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['accounttax'][':accountId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdAccounttaxAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['accounttax'][':accountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':merchantId'].accounttax[':accountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdAccounttaxAccountId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['accounttax'][':accountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['accounttax'][':accountId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdAccounttaxAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['accounttax'][':accountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':merchantId'].accounttax[':accountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMerchantIdAccounttaxAccountIdKey() {
  return [':merchantId', '/:merchantId/accounttax/:accountId', 'PUT'] as const
}

export function usePutMerchantIdAccounttaxAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['accounttax'][':accountId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['accounttax'][':accountId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMerchantIdAccounttaxAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':merchantId']['accounttax'][':accountId']['$put']>
        },
      ) => parseResponse(client[':merchantId'].accounttax[':accountId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdBuyongoogleprogramsRegionCodeKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/buyongoogleprograms/:regionCode', args] as const
}

export function useGetMerchantIdBuyongoogleprogramsRegionCode<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['$get']
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
        ? getGetMerchantIdBuyongoogleprogramsRegionCodeKey(args)
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
                (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['$get']
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
          client[':merchantId'].buyongoogleprograms[':regionCode'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdBuyongoogleprogramsRegionCode<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['$get']
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
        ? getGetMerchantIdBuyongoogleprogramsRegionCodeKey(args)
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
                (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['$get']
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
          client[':merchantId'].buyongoogleprograms[':regionCode'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchMerchantIdBuyongoogleprogramsRegionCodeKey() {
  return [':merchantId', '/:merchantId/buyongoogleprograms/:regionCode', 'PATCH'] as const
}

export function usePatchMerchantIdBuyongoogleprogramsRegionCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMerchantIdBuyongoogleprogramsRegionCodeKey()
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
            (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['$patch']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].buyongoogleprograms[':regionCode'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdBuyongoogleprogramsRegionCodeActivateKey() {
  return [':merchantId', '/:merchantId/buyongoogleprograms/:regionCode/activate', 'POST'] as const
}

export function usePostMerchantIdBuyongoogleprogramsRegionCodeActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['activate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['activate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdBuyongoogleprogramsRegionCodeActivateKey()
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
            (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['activate']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].buyongoogleprograms[':regionCode'].activate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdBuyongoogleprogramsRegionCodeOnboardKey() {
  return [':merchantId', '/:merchantId/buyongoogleprograms/:regionCode/onboard', 'POST'] as const
}

export function usePostMerchantIdBuyongoogleprogramsRegionCodeOnboard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['onboard']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['onboard']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdBuyongoogleprogramsRegionCodeOnboardKey()
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
            (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['onboard']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].buyongoogleprograms[':regionCode'].onboard.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdBuyongoogleprogramsRegionCodePauseKey() {
  return [':merchantId', '/:merchantId/buyongoogleprograms/:regionCode/pause', 'POST'] as const
}

export function usePostMerchantIdBuyongoogleprogramsRegionCodePause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['pause']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['pause']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdBuyongoogleprogramsRegionCodePauseKey()
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
            (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['pause']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].buyongoogleprograms[':regionCode'].pause.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdBuyongoogleprogramsRegionCodeRequestreviewKey() {
  return [
    ':merchantId',
    '/:merchantId/buyongoogleprograms/:regionCode/requestreview',
    'POST',
  ] as const
}

export function usePostMerchantIdBuyongoogleprogramsRegionCodeRequestreview<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['requestreview']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['requestreview']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdBuyongoogleprogramsRegionCodeRequestreviewKey()
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
            (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['requestreview']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].buyongoogleprograms[':regionCode'].requestreview.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdCollectionsKey(
  args: InferRequestType<(typeof client)[':merchantId']['collections']['$get']>,
) {
  return [':merchantId', '/:merchantId/collections', args] as const
}

export function useGetMerchantIdCollections<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['collections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['collections']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['collections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdCollections<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['collections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['collections']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['collections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantIdCollectionsKey() {
  return [':merchantId', '/:merchantId/collections', 'POST'] as const
}

export function usePostMerchantIdCollections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['collections']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['collections']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdCollectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':merchantId']['collections']['$post']> },
      ) => parseResponse(client[':merchantId'].collections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdCollectionsCollectionIdKey(
  args: InferRequestType<(typeof client)[':merchantId']['collections'][':collectionId']['$get']>,
) {
  return [':merchantId', '/:merchantId/collections/:collectionId', args] as const
}

export function useGetMerchantIdCollectionsCollectionId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['collections'][':collectionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['collections'][':collectionId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdCollectionsCollectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['collections'][':collectionId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':merchantId'].collections[':collectionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdCollectionsCollectionId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['collections'][':collectionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['collections'][':collectionId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdCollectionsCollectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['collections'][':collectionId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':merchantId'].collections[':collectionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMerchantIdCollectionsCollectionIdKey() {
  return [':merchantId', '/:merchantId/collections/:collectionId', 'DELETE'] as const
}

export function useDeleteMerchantIdCollectionsCollectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['collections'][':collectionId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['collections'][':collectionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMerchantIdCollectionsCollectionIdKey()
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
            (typeof client)[':merchantId']['collections'][':collectionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].collections[':collectionId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdCollectionstatusesKey(
  args: InferRequestType<(typeof client)[':merchantId']['collectionstatuses']['$get']>,
) {
  return [':merchantId', '/:merchantId/collectionstatuses', args] as const
}

export function useGetMerchantIdCollectionstatuses<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['collectionstatuses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['collectionstatuses']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdCollectionstatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['collectionstatuses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].collectionstatuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdCollectionstatuses<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['collectionstatuses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['collectionstatuses']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdCollectionstatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['collectionstatuses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].collectionstatuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMerchantIdCollectionstatusesCollectionIdKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['collectionstatuses'][':collectionId']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/collectionstatuses/:collectionId', args] as const
}

export function useGetMerchantIdCollectionstatusesCollectionId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':merchantId']['collectionstatuses'][':collectionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['collectionstatuses'][':collectionId']['$get']
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
        ? getGetMerchantIdCollectionstatusesCollectionIdKey(args)
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
                (typeof client)[':merchantId']['collectionstatuses'][':collectionId']['$get']
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
          client[':merchantId'].collectionstatuses[':collectionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdCollectionstatusesCollectionId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':merchantId']['collectionstatuses'][':collectionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['collectionstatuses'][':collectionId']['$get']
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
        ? getGetMerchantIdCollectionstatusesCollectionIdKey(args)
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
                (typeof client)[':merchantId']['collectionstatuses'][':collectionId']['$get']
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
          client[':merchantId'].collectionstatuses[':collectionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMerchantIdConversionsourcesKey(
  args: InferRequestType<(typeof client)[':merchantId']['conversionsources']['$get']>,
) {
  return [':merchantId', '/:merchantId/conversionsources', args] as const
}

export function useGetMerchantIdConversionsources<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['conversionsources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['conversionsources']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdConversionsourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['conversionsources']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].conversionsources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdConversionsources<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['conversionsources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['conversionsources']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdConversionsourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['conversionsources']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].conversionsources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantIdConversionsourcesKey() {
  return [':merchantId', '/:merchantId/conversionsources', 'POST'] as const
}

export function usePostMerchantIdConversionsources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['conversionsources']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['conversionsources']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdConversionsourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':merchantId']['conversionsources']['$post']> },
      ) => parseResponse(client[':merchantId'].conversionsources.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdConversionsourcesConversionSourceIdKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/conversionsources/:conversionSourceId', args] as const
}

export function useGetMerchantIdConversionsourcesConversionSourceId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$get']
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
        ? getGetMerchantIdConversionsourcesConversionSourceIdKey(args)
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
                (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$get']
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
          client[':merchantId'].conversionsources[':conversionSourceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdConversionsourcesConversionSourceId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$get']
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
        ? getGetMerchantIdConversionsourcesConversionSourceIdKey(args)
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
                (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$get']
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
          client[':merchantId'].conversionsources[':conversionSourceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteMerchantIdConversionsourcesConversionSourceIdKey() {
  return [':merchantId', '/:merchantId/conversionsources/:conversionSourceId', 'DELETE'] as const
}

export function useDeleteMerchantIdConversionsourcesConversionSourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMerchantIdConversionsourcesConversionSourceIdKey()
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
            (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].conversionsources[':conversionSourceId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchMerchantIdConversionsourcesConversionSourceIdKey() {
  return [':merchantId', '/:merchantId/conversionsources/:conversionSourceId', 'PATCH'] as const
}

export function usePatchMerchantIdConversionsourcesConversionSourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMerchantIdConversionsourcesConversionSourceIdKey()
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
            (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].conversionsources[':conversionSourceId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdConversionsourcesConversionSourceIdUndeleteKey() {
  return [
    ':merchantId',
    '/:merchantId/conversionsources/:conversionSourceId:undelete',
    'POST',
  ] as const
}

export function usePostMerchantIdConversionsourcesConversionSourceIdUndelete<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['conversionsources'][':conversionSourceId:undelete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['conversionsources'][':conversionSourceId:undelete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdConversionsourcesConversionSourceIdUndeleteKey()
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
            (typeof client)[':merchantId']['conversionsources'][':conversionSourceId:undelete']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].conversionsources[':conversionSourceId:undelete'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdDatafeedsKey(
  args: InferRequestType<(typeof client)[':merchantId']['datafeeds']['$get']>,
) {
  return [':merchantId', '/:merchantId/datafeeds', args] as const
}

export function useGetMerchantIdDatafeeds<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['datafeeds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdDatafeedsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].datafeeds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdDatafeeds<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['datafeeds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdDatafeedsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].datafeeds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantIdDatafeedsKey() {
  return [':merchantId', '/:merchantId/datafeeds', 'POST'] as const
}

export function usePostMerchantIdDatafeeds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['datafeeds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdDatafeedsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':merchantId']['datafeeds']['$post']> },
      ) => parseResponse(client[':merchantId'].datafeeds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdDatafeedsDatafeedIdKey(
  args: InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$get']>,
) {
  return [':merchantId', '/:merchantId/datafeeds/:datafeedId', args] as const
}

export function useGetMerchantIdDatafeedsDatafeedId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdDatafeedsDatafeedIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':merchantId'].datafeeds[':datafeedId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdDatafeedsDatafeedId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdDatafeedsDatafeedIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':merchantId'].datafeeds[':datafeedId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMerchantIdDatafeedsDatafeedIdKey() {
  return [':merchantId', '/:merchantId/datafeeds/:datafeedId', 'PUT'] as const
}

export function usePutMerchantIdDatafeedsDatafeedId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMerchantIdDatafeedsDatafeedIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$put']>
        },
      ) => parseResponse(client[':merchantId'].datafeeds[':datafeedId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMerchantIdDatafeedsDatafeedIdKey() {
  return [':merchantId', '/:merchantId/datafeeds/:datafeedId', 'DELETE'] as const
}

export function useDeleteMerchantIdDatafeedsDatafeedId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMerchantIdDatafeedsDatafeedIdKey()
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
            (typeof client)[':merchantId']['datafeeds'][':datafeedId']['$delete']
          >
        },
      ) =>
        parseResponse(client[':merchantId'].datafeeds[':datafeedId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdDatafeedsDatafeedIdFetchNowKey() {
  return [':merchantId', '/:merchantId/datafeeds/:datafeedId/fetchNow', 'POST'] as const
}

export function usePostMerchantIdDatafeedsDatafeedIdFetchNow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['datafeeds'][':datafeedId']['fetchNow']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['datafeeds'][':datafeedId']['fetchNow']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdDatafeedsDatafeedIdFetchNowKey()
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
            (typeof client)[':merchantId']['datafeeds'][':datafeedId']['fetchNow']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].datafeeds[':datafeedId'].fetchNow.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdDatafeedstatusesKey(
  args: InferRequestType<(typeof client)[':merchantId']['datafeedstatuses']['$get']>,
) {
  return [':merchantId', '/:merchantId/datafeedstatuses', args] as const
}

export function useGetMerchantIdDatafeedstatuses<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['datafeedstatuses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['datafeedstatuses']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdDatafeedstatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['datafeedstatuses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].datafeedstatuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdDatafeedstatuses<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['datafeedstatuses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['datafeedstatuses']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdDatafeedstatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['datafeedstatuses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].datafeedstatuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMerchantIdDatafeedstatusesDatafeedIdKey(
  args: InferRequestType<(typeof client)[':merchantId']['datafeedstatuses'][':datafeedId']['$get']>,
) {
  return [':merchantId', '/:merchantId/datafeedstatuses/:datafeedId', args] as const
}

export function useGetMerchantIdDatafeedstatusesDatafeedId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['datafeedstatuses'][':datafeedId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['datafeedstatuses'][':datafeedId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdDatafeedstatusesDatafeedIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['datafeedstatuses'][':datafeedId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':merchantId'].datafeedstatuses[':datafeedId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdDatafeedstatusesDatafeedId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['datafeedstatuses'][':datafeedId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['datafeedstatuses'][':datafeedId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdDatafeedstatusesDatafeedIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['datafeedstatuses'][':datafeedId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':merchantId'].datafeedstatuses[':datafeedId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMerchantIdFreelistingsprogramKey(
  args: InferRequestType<(typeof client)[':merchantId']['freelistingsprogram']['$get']>,
) {
  return [':merchantId', '/:merchantId/freelistingsprogram', args] as const
}

export function useGetMerchantIdFreelistingsprogram<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['freelistingsprogram']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['freelistingsprogram']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdFreelistingsprogramKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['freelistingsprogram']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':merchantId'].freelistingsprogram.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdFreelistingsprogram<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['freelistingsprogram']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['freelistingsprogram']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdFreelistingsprogramKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['freelistingsprogram']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':merchantId'].freelistingsprogram.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantIdFreelistingsprogramRequestreviewKey() {
  return [':merchantId', '/:merchantId/freelistingsprogram/requestreview', 'POST'] as const
}

export function usePostMerchantIdFreelistingsprogramRequestreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['freelistingsprogram']['requestreview']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['freelistingsprogram']['requestreview']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdFreelistingsprogramRequestreviewKey()
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
            (typeof client)[':merchantId']['freelistingsprogram']['requestreview']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].freelistingsprogram.requestreview.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdLiasettingsKey(
  args: InferRequestType<(typeof client)[':merchantId']['liasettings']['$get']>,
) {
  return [':merchantId', '/:merchantId/liasettings', args] as const
}

export function useGetMerchantIdLiasettings<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['liasettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['liasettings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdLiasettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['liasettings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].liasettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdLiasettings<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['liasettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['liasettings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdLiasettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['liasettings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].liasettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMerchantIdLiasettingsAccountIdKey(
  args: InferRequestType<(typeof client)[':merchantId']['liasettings'][':accountId']['$get']>,
) {
  return [':merchantId', '/:merchantId/liasettings/:accountId', args] as const
}

export function useGetMerchantIdLiasettingsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['liasettings'][':accountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['liasettings'][':accountId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdLiasettingsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['liasettings'][':accountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':merchantId'].liasettings[':accountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdLiasettingsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['liasettings'][':accountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['liasettings'][':accountId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdLiasettingsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['liasettings'][':accountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':merchantId'].liasettings[':accountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMerchantIdLiasettingsAccountIdKey() {
  return [':merchantId', '/:merchantId/liasettings/:accountId', 'PUT'] as const
}

export function usePutMerchantIdLiasettingsAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['liasettings'][':accountId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['liasettings'][':accountId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMerchantIdLiasettingsAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':merchantId']['liasettings'][':accountId']['$put']>
        },
      ) => parseResponse(client[':merchantId'].liasettings[':accountId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdLiasettingsAccountIdAccessiblegmbaccountsKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['liasettings'][':accountId']['accessiblegmbaccounts']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/liasettings/:accountId/accessiblegmbaccounts', args] as const
}

export function useGetMerchantIdLiasettingsAccountIdAccessiblegmbaccounts<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':merchantId']['liasettings'][':accountId']['accessiblegmbaccounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['liasettings'][':accountId']['accessiblegmbaccounts']['$get']
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
        ? getGetMerchantIdLiasettingsAccountIdAccessiblegmbaccountsKey(args)
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
                (typeof client)[':merchantId']['liasettings'][':accountId']['accessiblegmbaccounts']['$get']
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
          client[':merchantId'].liasettings[':accountId'].accessiblegmbaccounts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdLiasettingsAccountIdAccessiblegmbaccounts<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['liasettings'][':accountId']['accessiblegmbaccounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['liasettings'][':accountId']['accessiblegmbaccounts']['$get']
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
        ? getGetMerchantIdLiasettingsAccountIdAccessiblegmbaccountsKey(args)
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
                (typeof client)[':merchantId']['liasettings'][':accountId']['accessiblegmbaccounts']['$get']
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
          client[':merchantId'].liasettings[':accountId'].accessiblegmbaccounts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantIdLiasettingsAccountIdRequestgmbaccessKey() {
  return [':merchantId', '/:merchantId/liasettings/:accountId/requestgmbaccess', 'POST'] as const
}

export function usePostMerchantIdLiasettingsAccountIdRequestgmbaccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['liasettings'][':accountId']['requestgmbaccess']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['liasettings'][':accountId']['requestgmbaccess']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdLiasettingsAccountIdRequestgmbaccessKey()
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
            (typeof client)[':merchantId']['liasettings'][':accountId']['requestgmbaccess']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].liasettings[':accountId'].requestgmbaccess.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdLiasettingsAccountIdRequestinventoryverificationCountryKey() {
  return [
    ':merchantId',
    '/:merchantId/liasettings/:accountId/requestinventoryverification/:country',
    'POST',
  ] as const
}

export function usePostMerchantIdLiasettingsAccountIdRequestinventoryverificationCountry<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['liasettings'][':accountId']['requestinventoryverification'][':country']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['liasettings'][':accountId']['requestinventoryverification'][':country']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostMerchantIdLiasettingsAccountIdRequestinventoryverificationCountryKey()
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
            (typeof client)[':merchantId']['liasettings'][':accountId']['requestinventoryverification'][':country']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].liasettings[':accountId'].requestinventoryverification[
            ':country'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdLiasettingsAccountIdSetinventoryverificationcontactKey() {
  return [
    ':merchantId',
    '/:merchantId/liasettings/:accountId/setinventoryverificationcontact',
    'POST',
  ] as const
}

export function usePostMerchantIdLiasettingsAccountIdSetinventoryverificationcontact<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['liasettings'][':accountId']['setinventoryverificationcontact']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['liasettings'][':accountId']['setinventoryverificationcontact']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostMerchantIdLiasettingsAccountIdSetinventoryverificationcontactKey()
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
            (typeof client)[':merchantId']['liasettings'][':accountId']['setinventoryverificationcontact']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].liasettings[':accountId'].setinventoryverificationcontact.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdLiasettingsAccountIdSetposdataproviderKey() {
  return [':merchantId', '/:merchantId/liasettings/:accountId/setposdataprovider', 'POST'] as const
}

export function usePostMerchantIdLiasettingsAccountIdSetposdataprovider<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['liasettings'][':accountId']['setposdataprovider']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['liasettings'][':accountId']['setposdataprovider']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdLiasettingsAccountIdSetposdataproviderKey()
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
            (typeof client)[':merchantId']['liasettings'][':accountId']['setposdataprovider']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].liasettings[':accountId'].setposdataprovider.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdOrderinvoicesOrderIdCreateChargeInvoiceKey() {
  return [':merchantId', '/:merchantId/orderinvoices/:orderId/createChargeInvoice', 'POST'] as const
}

export function usePostMerchantIdOrderinvoicesOrderIdCreateChargeInvoice<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orderinvoices'][':orderId']['createChargeInvoice']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['orderinvoices'][':orderId']['createChargeInvoice']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdOrderinvoicesOrderIdCreateChargeInvoiceKey()
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
            (typeof client)[':merchantId']['orderinvoices'][':orderId']['createChargeInvoice']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].orderinvoices[':orderId'].createChargeInvoice.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdOrderinvoicesOrderIdCreateRefundInvoiceKey() {
  return [':merchantId', '/:merchantId/orderinvoices/:orderId/createRefundInvoice', 'POST'] as const
}

export function usePostMerchantIdOrderinvoicesOrderIdCreateRefundInvoice<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orderinvoices'][':orderId']['createRefundInvoice']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['orderinvoices'][':orderId']['createRefundInvoice']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdOrderinvoicesOrderIdCreateRefundInvoiceKey()
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
            (typeof client)[':merchantId']['orderinvoices'][':orderId']['createRefundInvoice']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].orderinvoices[':orderId'].createRefundInvoice.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdOrderreportsDisbursementsKey(
  args: InferRequestType<(typeof client)[':merchantId']['orderreports']['disbursements']['$get']>,
) {
  return [':merchantId', '/:merchantId/orderreports/disbursements', args] as const
}

export function useGetMerchantIdOrderreportsDisbursements<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['orderreports']['disbursements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['orderreports']['disbursements']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdOrderreportsDisbursementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['orderreports']['disbursements']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':merchantId'].orderreports.disbursements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdOrderreportsDisbursements<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['orderreports']['disbursements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['orderreports']['disbursements']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdOrderreportsDisbursementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['orderreports']['disbursements']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':merchantId'].orderreports.disbursements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['orderreports']['disbursements'][':disbursementId']['transactions']['$get']
  >,
) {
  return [
    ':merchantId',
    '/:merchantId/orderreports/disbursements/:disbursementId/transactions',
    args,
  ] as const
}

export function useGetMerchantIdOrderreportsDisbursementsDisbursementIdTransactions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['orderreports']['disbursements'][':disbursementId']['transactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['orderreports']['disbursements'][':disbursementId']['transactions']['$get']
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
        ? getGetMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsKey(args)
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
                (typeof client)[':merchantId']['orderreports']['disbursements'][':disbursementId']['transactions']['$get']
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
          client[':merchantId'].orderreports.disbursements[':disbursementId'].transactions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdOrderreportsDisbursementsDisbursementIdTransactions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['orderreports']['disbursements'][':disbursementId']['transactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['orderreports']['disbursements'][':disbursementId']['transactions']['$get']
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
        ? getGetMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsKey(args)
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
                (typeof client)[':merchantId']['orderreports']['disbursements'][':disbursementId']['transactions']['$get']
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
          client[':merchantId'].orderreports.disbursements[':disbursementId'].transactions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMerchantIdOrderreturnsKey(
  args: InferRequestType<(typeof client)[':merchantId']['orderreturns']['$get']>,
) {
  return [':merchantId', '/:merchantId/orderreturns', args] as const
}

export function useGetMerchantIdOrderreturns<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['orderreturns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['orderreturns']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdOrderreturnsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['orderreturns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].orderreturns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdOrderreturns<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['orderreturns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['orderreturns']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdOrderreturnsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['orderreturns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].orderreturns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantIdOrderreturnsCreateOrderReturnKey() {
  return [':merchantId', '/:merchantId/orderreturns/createOrderReturn', 'POST'] as const
}

export function usePostMerchantIdOrderreturnsCreateOrderReturn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['orderreturns']['createOrderReturn']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['orderreturns']['createOrderReturn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdOrderreturnsCreateOrderReturnKey()
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
            (typeof client)[':merchantId']['orderreturns']['createOrderReturn']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].orderreturns.createOrderReturn.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdOrderreturnsReturnIdKey(
  args: InferRequestType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>,
) {
  return [':merchantId', '/:merchantId/orderreturns/:returnId', args] as const
}

export function useGetMerchantIdOrderreturnsReturnId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdOrderreturnsReturnIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':merchantId'].orderreturns[':returnId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdOrderreturnsReturnId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdOrderreturnsReturnIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':merchantId'].orderreturns[':returnId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantIdOrderreturnsReturnIdAcknowledgeKey() {
  return [':merchantId', '/:merchantId/orderreturns/:returnId/acknowledge', 'POST'] as const
}

export function usePostMerchantIdOrderreturnsReturnIdAcknowledge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orderreturns'][':returnId']['acknowledge']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['orderreturns'][':returnId']['acknowledge']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdOrderreturnsReturnIdAcknowledgeKey()
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
            (typeof client)[':merchantId']['orderreturns'][':returnId']['acknowledge']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].orderreturns[':returnId'].acknowledge.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdOrderreturnsReturnIdLabelsKey() {
  return [':merchantId', '/:merchantId/orderreturns/:returnId/labels', 'POST'] as const
}

export function usePostMerchantIdOrderreturnsReturnIdLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orderreturns'][':returnId']['labels']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['orderreturns'][':returnId']['labels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdOrderreturnsReturnIdLabelsKey()
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
            (typeof client)[':merchantId']['orderreturns'][':returnId']['labels']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].orderreturns[':returnId'].labels.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdOrderreturnsReturnIdProcessKey() {
  return [':merchantId', '/:merchantId/orderreturns/:returnId/process', 'POST'] as const
}

export function usePostMerchantIdOrderreturnsReturnIdProcess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orderreturns'][':returnId']['process']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['orderreturns'][':returnId']['process']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdOrderreturnsReturnIdProcessKey()
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
            (typeof client)[':merchantId']['orderreturns'][':returnId']['process']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].orderreturns[':returnId'].process.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdOrdersKey(
  args: InferRequestType<(typeof client)[':merchantId']['orders']['$get']>,
) {
  return [':merchantId', '/:merchantId/orders', args] as const
}

export function useGetMerchantIdOrders<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['orders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['orders']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['orders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdOrders<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['orders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['orders']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['orders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMerchantIdOrdersOrderIdKey(
  args: InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['$get']>,
) {
  return [':merchantId', '/:merchantId/orders/:orderId', args] as const
}

export function useGetMerchantIdOrdersOrderId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdOrdersOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].orders[':orderId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdOrdersOrderId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdOrdersOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].orders[':orderId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantIdOrdersOrderIdAcknowledgeKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/acknowledge', 'POST'] as const
}

export function usePostMerchantIdOrdersOrderIdAcknowledge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['acknowledge']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['acknowledge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdOrdersOrderIdAcknowledgeKey()
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
            (typeof client)[':merchantId']['orders'][':orderId']['acknowledge']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].orders[':orderId'].acknowledge.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdOrdersOrderIdCancelKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/cancel', 'POST'] as const
}

export function usePostMerchantIdOrdersOrderIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['cancel']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdOrdersOrderIdCancelKey()
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
            (typeof client)[':merchantId']['orders'][':orderId']['cancel']['$post']
          >
        },
      ) => parseResponse(client[':merchantId'].orders[':orderId'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdOrdersOrderIdCancelLineItemKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/cancelLineItem', 'POST'] as const
}

export function usePostMerchantIdOrdersOrderIdCancelLineItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orders'][':orderId']['cancelLineItem']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['orders'][':orderId']['cancelLineItem']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdOrdersOrderIdCancelLineItemKey()
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
            (typeof client)[':merchantId']['orders'][':orderId']['cancelLineItem']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].orders[':orderId'].cancelLineItem.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdOrdersOrderIdCaptureOrderKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/captureOrder', 'POST'] as const
}

export function usePostMerchantIdOrdersOrderIdCaptureOrder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orders'][':orderId']['captureOrder']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['captureOrder']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdOrdersOrderIdCaptureOrderKey()
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
            (typeof client)[':merchantId']['orders'][':orderId']['captureOrder']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].orders[':orderId'].captureOrder.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdOrdersOrderIdInStoreRefundLineItemKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/inStoreRefundLineItem', 'POST'] as const
}

export function usePostMerchantIdOrdersOrderIdInStoreRefundLineItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orders'][':orderId']['inStoreRefundLineItem']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['orders'][':orderId']['inStoreRefundLineItem']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdOrdersOrderIdInStoreRefundLineItemKey()
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
            (typeof client)[':merchantId']['orders'][':orderId']['inStoreRefundLineItem']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].orders[':orderId'].inStoreRefundLineItem.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdOrdersOrderIdRefunditemKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/refunditem', 'POST'] as const
}

export function usePostMerchantIdOrdersOrderIdRefunditem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['refunditem']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['refunditem']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdOrdersOrderIdRefunditemKey()
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
            (typeof client)[':merchantId']['orders'][':orderId']['refunditem']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].orders[':orderId'].refunditem.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdOrdersOrderIdRefundorderKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/refundorder', 'POST'] as const
}

export function usePostMerchantIdOrdersOrderIdRefundorder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['refundorder']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['refundorder']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdOrdersOrderIdRefundorderKey()
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
            (typeof client)[':merchantId']['orders'][':orderId']['refundorder']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].orders[':orderId'].refundorder.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdOrdersOrderIdRejectReturnLineItemKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/rejectReturnLineItem', 'POST'] as const
}

export function usePostMerchantIdOrdersOrderIdRejectReturnLineItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orders'][':orderId']['rejectReturnLineItem']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['orders'][':orderId']['rejectReturnLineItem']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdOrdersOrderIdRejectReturnLineItemKey()
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
            (typeof client)[':merchantId']['orders'][':orderId']['rejectReturnLineItem']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].orders[':orderId'].rejectReturnLineItem.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdOrdersOrderIdReturnRefundLineItemKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/returnRefundLineItem', 'POST'] as const
}

export function usePostMerchantIdOrdersOrderIdReturnRefundLineItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orders'][':orderId']['returnRefundLineItem']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['orders'][':orderId']['returnRefundLineItem']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdOrdersOrderIdReturnRefundLineItemKey()
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
            (typeof client)[':merchantId']['orders'][':orderId']['returnRefundLineItem']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].orders[':orderId'].returnRefundLineItem.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdOrdersOrderIdSetLineItemMetadataKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/setLineItemMetadata', 'POST'] as const
}

export function usePostMerchantIdOrdersOrderIdSetLineItemMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orders'][':orderId']['setLineItemMetadata']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['orders'][':orderId']['setLineItemMetadata']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdOrdersOrderIdSetLineItemMetadataKey()
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
            (typeof client)[':merchantId']['orders'][':orderId']['setLineItemMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].orders[':orderId'].setLineItemMetadata.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdOrdersOrderIdShipLineItemsKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/shipLineItems', 'POST'] as const
}

export function usePostMerchantIdOrdersOrderIdShipLineItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orders'][':orderId']['shipLineItems']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['shipLineItems']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdOrdersOrderIdShipLineItemsKey()
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
            (typeof client)[':merchantId']['orders'][':orderId']['shipLineItems']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].orders[':orderId'].shipLineItems.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdOrdersOrderIdTestreturnKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/testreturn', 'POST'] as const
}

export function usePostMerchantIdOrdersOrderIdTestreturn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['testreturn']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['testreturn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdOrdersOrderIdTestreturnKey()
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
            (typeof client)[':merchantId']['orders'][':orderId']['testreturn']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].orders[':orderId'].testreturn.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdOrdersOrderIdUpdateLineItemShippingDetailsKey() {
  return [
    ':merchantId',
    '/:merchantId/orders/:orderId/updateLineItemShippingDetails',
    'POST',
  ] as const
}

export function usePostMerchantIdOrdersOrderIdUpdateLineItemShippingDetails<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orders'][':orderId']['updateLineItemShippingDetails']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['orders'][':orderId']['updateLineItemShippingDetails']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdOrdersOrderIdUpdateLineItemShippingDetailsKey()
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
            (typeof client)[':merchantId']['orders'][':orderId']['updateLineItemShippingDetails']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].orders[':orderId'].updateLineItemShippingDetails.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdOrdersOrderIdUpdateMerchantOrderIdKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/updateMerchantOrderId', 'POST'] as const
}

export function usePostMerchantIdOrdersOrderIdUpdateMerchantOrderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orders'][':orderId']['updateMerchantOrderId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['orders'][':orderId']['updateMerchantOrderId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdOrdersOrderIdUpdateMerchantOrderIdKey()
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
            (typeof client)[':merchantId']['orders'][':orderId']['updateMerchantOrderId']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].orders[':orderId'].updateMerchantOrderId.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdOrdersOrderIdUpdateShipmentKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/updateShipment', 'POST'] as const
}

export function usePostMerchantIdOrdersOrderIdUpdateShipment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orders'][':orderId']['updateShipment']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['orders'][':orderId']['updateShipment']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdOrdersOrderIdUpdateShipmentKey()
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
            (typeof client)[':merchantId']['orders'][':orderId']['updateShipment']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].orders[':orderId'].updateShipment.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdOrdersbymerchantidMerchantOrderIdKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['ordersbymerchantid'][':merchantOrderId']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/ordersbymerchantid/:merchantOrderId', args] as const
}

export function useGetMerchantIdOrdersbymerchantidMerchantOrderId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':merchantId']['ordersbymerchantid'][':merchantOrderId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['ordersbymerchantid'][':merchantOrderId']['$get']
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
        ? getGetMerchantIdOrdersbymerchantidMerchantOrderIdKey(args)
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
                (typeof client)[':merchantId']['ordersbymerchantid'][':merchantOrderId']['$get']
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
          client[':merchantId'].ordersbymerchantid[':merchantOrderId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdOrdersbymerchantidMerchantOrderId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':merchantId']['ordersbymerchantid'][':merchantOrderId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['ordersbymerchantid'][':merchantOrderId']['$get']
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
        ? getGetMerchantIdOrdersbymerchantidMerchantOrderIdKey(args)
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
                (typeof client)[':merchantId']['ordersbymerchantid'][':merchantOrderId']['$get']
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
          client[':merchantId'].ordersbymerchantid[':merchantOrderId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantIdOrdertrackingsignalsKey() {
  return [':merchantId', '/:merchantId/ordertrackingsignals', 'POST'] as const
}

export function usePostMerchantIdOrdertrackingsignals<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['ordertrackingsignals']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['ordertrackingsignals']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdOrdertrackingsignalsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':merchantId']['ordertrackingsignals']['$post']>
        },
      ) => parseResponse(client[':merchantId'].ordertrackingsignals.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdPosTargetMerchantIdInventoryKey() {
  return [':merchantId', '/:merchantId/pos/:targetMerchantId/inventory', 'POST'] as const
}

export function usePostMerchantIdPosTargetMerchantIdInventory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['pos'][':targetMerchantId']['inventory']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['pos'][':targetMerchantId']['inventory']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdPosTargetMerchantIdInventoryKey()
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
            (typeof client)[':merchantId']['pos'][':targetMerchantId']['inventory']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].pos[':targetMerchantId'].inventory.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdPosTargetMerchantIdSaleKey() {
  return [':merchantId', '/:merchantId/pos/:targetMerchantId/sale', 'POST'] as const
}

export function usePostMerchantIdPosTargetMerchantIdSale<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['pos'][':targetMerchantId']['sale']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['pos'][':targetMerchantId']['sale']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdPosTargetMerchantIdSaleKey()
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
            (typeof client)[':merchantId']['pos'][':targetMerchantId']['sale']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].pos[':targetMerchantId'].sale.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdPosTargetMerchantIdStoreKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/pos/:targetMerchantId/store', args] as const
}

export function useGetMerchantIdPosTargetMerchantIdStore<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$get']
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
        ? getGetMerchantIdPosTargetMerchantIdStoreKey(args)
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
                (typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$get']
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
          client[':merchantId'].pos[':targetMerchantId'].store.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdPosTargetMerchantIdStore<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$get']
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
        ? getGetMerchantIdPosTargetMerchantIdStoreKey(args)
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
                (typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$get']
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
          client[':merchantId'].pos[':targetMerchantId'].store.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantIdPosTargetMerchantIdStoreKey() {
  return [':merchantId', '/:merchantId/pos/:targetMerchantId/store', 'POST'] as const
}

export function usePostMerchantIdPosTargetMerchantIdStore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdPosTargetMerchantIdStoreKey()
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
            (typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].pos[':targetMerchantId'].store.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdPosTargetMerchantIdStoreStoreCodeKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/pos/:targetMerchantId/store/:storeCode', args] as const
}

export function useGetMerchantIdPosTargetMerchantIdStoreStoreCode<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$get']
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
        ? getGetMerchantIdPosTargetMerchantIdStoreStoreCodeKey(args)
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
                (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$get']
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
          client[':merchantId'].pos[':targetMerchantId'].store[':storeCode'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdPosTargetMerchantIdStoreStoreCode<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$get']
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
        ? getGetMerchantIdPosTargetMerchantIdStoreStoreCodeKey(args)
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
                (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$get']
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
          client[':merchantId'].pos[':targetMerchantId'].store[':storeCode'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteMerchantIdPosTargetMerchantIdStoreStoreCodeKey() {
  return [':merchantId', '/:merchantId/pos/:targetMerchantId/store/:storeCode', 'DELETE'] as const
}

export function useDeleteMerchantIdPosTargetMerchantIdStoreStoreCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMerchantIdPosTargetMerchantIdStoreStoreCodeKey()
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
            (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].pos[':targetMerchantId'].store[':storeCode'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdProductdeliverytimeKey() {
  return [':merchantId', '/:merchantId/productdeliverytime', 'POST'] as const
}

export function usePostMerchantIdProductdeliverytime<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['productdeliverytime']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['productdeliverytime']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdProductdeliverytimeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':merchantId']['productdeliverytime']['$post']>
        },
      ) => parseResponse(client[':merchantId'].productdeliverytime.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdProductdeliverytimeProductIdKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['productdeliverytime'][':productId']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/productdeliverytime/:productId', args] as const
}

export function useGetMerchantIdProductdeliverytimeProductId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':merchantId']['productdeliverytime'][':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['productdeliverytime'][':productId']['$get']
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
        ? getGetMerchantIdProductdeliverytimeProductIdKey(args)
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
                (typeof client)[':merchantId']['productdeliverytime'][':productId']['$get']
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
          client[':merchantId'].productdeliverytime[':productId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdProductdeliverytimeProductId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':merchantId']['productdeliverytime'][':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['productdeliverytime'][':productId']['$get']
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
        ? getGetMerchantIdProductdeliverytimeProductIdKey(args)
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
                (typeof client)[':merchantId']['productdeliverytime'][':productId']['$get']
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
          client[':merchantId'].productdeliverytime[':productId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteMerchantIdProductdeliverytimeProductIdKey() {
  return [':merchantId', '/:merchantId/productdeliverytime/:productId', 'DELETE'] as const
}

export function useDeleteMerchantIdProductdeliverytimeProductId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['productdeliverytime'][':productId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['productdeliverytime'][':productId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMerchantIdProductdeliverytimeProductIdKey()
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
            (typeof client)[':merchantId']['productdeliverytime'][':productId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].productdeliverytime[':productId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdProductsKey(
  args: InferRequestType<(typeof client)[':merchantId']['products']['$get']>,
) {
  return [':merchantId', '/:merchantId/products', args] as const
}

export function useGetMerchantIdProducts<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['products']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['products']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['products']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdProducts<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['products']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['products']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['products']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantIdProductsKey() {
  return [':merchantId', '/:merchantId/products', 'POST'] as const
}

export function usePostMerchantIdProducts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['products']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['products']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdProductsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':merchantId']['products']['$post']> },
      ) => parseResponse(client[':merchantId'].products.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdProductsProductIdKey(
  args: InferRequestType<(typeof client)[':merchantId']['products'][':productId']['$get']>,
) {
  return [':merchantId', '/:merchantId/products/:productId', args] as const
}

export function useGetMerchantIdProductsProductId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['products'][':productId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['products'][':productId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdProductsProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['products'][':productId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':merchantId'].products[':productId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdProductsProductId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['products'][':productId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['products'][':productId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdProductsProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['products'][':productId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':merchantId'].products[':productId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMerchantIdProductsProductIdKey() {
  return [':merchantId', '/:merchantId/products/:productId', 'DELETE'] as const
}

export function useDeleteMerchantIdProductsProductId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['products'][':productId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['products'][':productId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMerchantIdProductsProductIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':merchantId']['products'][':productId']['$delete']>
        },
      ) => parseResponse(client[':merchantId'].products[':productId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMerchantIdProductsProductIdKey() {
  return [':merchantId', '/:merchantId/products/:productId', 'PATCH'] as const
}

export function usePatchMerchantIdProductsProductId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['products'][':productId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['products'][':productId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMerchantIdProductsProductIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':merchantId']['products'][':productId']['$patch']>
        },
      ) => parseResponse(client[':merchantId'].products[':productId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdProductsProductIdLocalinventoryKey() {
  return [':merchantId', '/:merchantId/products/:productId/localinventory', 'POST'] as const
}

export function usePostMerchantIdProductsProductIdLocalinventory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['products'][':productId']['localinventory']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['products'][':productId']['localinventory']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdProductsProductIdLocalinventoryKey()
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
            (typeof client)[':merchantId']['products'][':productId']['localinventory']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].products[':productId'].localinventory.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdProductsProductIdRegionalinventoryKey() {
  return [':merchantId', '/:merchantId/products/:productId/regionalinventory', 'POST'] as const
}

export function usePostMerchantIdProductsProductIdRegionalinventory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['products'][':productId']['regionalinventory']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['products'][':productId']['regionalinventory']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdProductsProductIdRegionalinventoryKey()
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
            (typeof client)[':merchantId']['products'][':productId']['regionalinventory']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].products[':productId'].regionalinventory.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdProductstatusesKey(
  args: InferRequestType<(typeof client)[':merchantId']['productstatuses']['$get']>,
) {
  return [':merchantId', '/:merchantId/productstatuses', args] as const
}

export function useGetMerchantIdProductstatuses<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['productstatuses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['productstatuses']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdProductstatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['productstatuses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].productstatuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdProductstatuses<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['productstatuses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['productstatuses']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdProductstatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['productstatuses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].productstatuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMerchantIdProductstatusesProductIdKey(
  args: InferRequestType<(typeof client)[':merchantId']['productstatuses'][':productId']['$get']>,
) {
  return [':merchantId', '/:merchantId/productstatuses/:productId', args] as const
}

export function useGetMerchantIdProductstatusesProductId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['productstatuses'][':productId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['productstatuses'][':productId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdProductstatusesProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['productstatuses'][':productId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':merchantId'].productstatuses[':productId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdProductstatusesProductId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['productstatuses'][':productId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['productstatuses'][':productId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdProductstatusesProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['productstatuses'][':productId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':merchantId'].productstatuses[':productId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMerchantIdProductstatusesProductIdRepricingreportsKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['productstatuses'][':productId']['repricingreports']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/productstatuses/:productId/repricingreports', args] as const
}

export function useGetMerchantIdProductstatusesProductIdRepricingreports<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':merchantId']['productstatuses'][':productId']['repricingreports']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['productstatuses'][':productId']['repricingreports']['$get']
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
        ? getGetMerchantIdProductstatusesProductIdRepricingreportsKey(args)
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
                (typeof client)[':merchantId']['productstatuses'][':productId']['repricingreports']['$get']
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
          client[':merchantId'].productstatuses[':productId'].repricingreports.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdProductstatusesProductIdRepricingreports<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':merchantId']['productstatuses'][':productId']['repricingreports']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['productstatuses'][':productId']['repricingreports']['$get']
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
        ? getGetMerchantIdProductstatusesProductIdRepricingreportsKey(args)
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
                (typeof client)[':merchantId']['productstatuses'][':productId']['repricingreports']['$get']
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
          client[':merchantId'].productstatuses[':productId'].repricingreports.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantIdPromotionsKey() {
  return [':merchantId', '/:merchantId/promotions', 'POST'] as const
}

export function usePostMerchantIdPromotions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['promotions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['promotions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdPromotionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':merchantId']['promotions']['$post']> },
      ) => parseResponse(client[':merchantId'].promotions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdPromotionsIdKey(
  args: InferRequestType<(typeof client)[':merchantId']['promotions'][':id']['$get']>,
) {
  return [':merchantId', '/:merchantId/promotions/:id', args] as const
}

export function useGetMerchantIdPromotionsId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['promotions'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['promotions'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdPromotionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['promotions'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].promotions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdPromotionsId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['promotions'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['promotions'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdPromotionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['promotions'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].promotions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMerchantIdPubsubnotificationsettingsKey(
  args: InferRequestType<(typeof client)[':merchantId']['pubsubnotificationsettings']['$get']>,
) {
  return [':merchantId', '/:merchantId/pubsubnotificationsettings', args] as const
}

export function useGetMerchantIdPubsubnotificationsettings<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['pubsubnotificationsettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['pubsubnotificationsettings']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdPubsubnotificationsettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['pubsubnotificationsettings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':merchantId'].pubsubnotificationsettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdPubsubnotificationsettings<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['pubsubnotificationsettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['pubsubnotificationsettings']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdPubsubnotificationsettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['pubsubnotificationsettings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':merchantId'].pubsubnotificationsettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMerchantIdPubsubnotificationsettingsKey() {
  return [':merchantId', '/:merchantId/pubsubnotificationsettings', 'PUT'] as const
}

export function usePutMerchantIdPubsubnotificationsettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['pubsubnotificationsettings']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['pubsubnotificationsettings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMerchantIdPubsubnotificationsettingsKey()
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
            (typeof client)[':merchantId']['pubsubnotificationsettings']['$put']
          >
        },
      ) => parseResponse(client[':merchantId'].pubsubnotificationsettings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdQuotasKey(
  args: InferRequestType<(typeof client)[':merchantId']['quotas']['$get']>,
) {
  return [':merchantId', '/:merchantId/quotas', args] as const
}

export function useGetMerchantIdQuotas<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['quotas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['quotas']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdQuotasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['quotas']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].quotas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdQuotas<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['quotas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['quotas']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdQuotasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['quotas']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].quotas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMerchantIdRecommendationsGenerateKey(
  args: InferRequestType<(typeof client)[':merchantId']['recommendations']['generate']['$get']>,
) {
  return [':merchantId', '/:merchantId/recommendations/generate', args] as const
}

export function useGetMerchantIdRecommendationsGenerate<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['recommendations']['generate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['recommendations']['generate']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdRecommendationsGenerateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['recommendations']['generate']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':merchantId'].recommendations.generate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdRecommendationsGenerate<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['recommendations']['generate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['recommendations']['generate']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdRecommendationsGenerateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['recommendations']['generate']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':merchantId'].recommendations.generate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantIdRecommendationsReportInteractionKey() {
  return [':merchantId', '/:merchantId/recommendations/reportInteraction', 'POST'] as const
}

export function usePostMerchantIdRecommendationsReportInteraction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['recommendations']['reportInteraction']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['recommendations']['reportInteraction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdRecommendationsReportInteractionKey()
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
            (typeof client)[':merchantId']['recommendations']['reportInteraction']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].recommendations.reportInteraction.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdRegionsKey(
  args: InferRequestType<(typeof client)[':merchantId']['regions']['$get']>,
) {
  return [':merchantId', '/:merchantId/regions', args] as const
}

export function useGetMerchantIdRegions<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['regions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['regions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdRegionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['regions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].regions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdRegions<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['regions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['regions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdRegionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['regions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].regions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantIdRegionsKey() {
  return [':merchantId', '/:merchantId/regions', 'POST'] as const
}

export function usePostMerchantIdRegions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['regions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['regions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdRegionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':merchantId']['regions']['$post']> },
      ) => parseResponse(client[':merchantId'].regions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdRegionsRegionIdKey(
  args: InferRequestType<(typeof client)[':merchantId']['regions'][':regionId']['$get']>,
) {
  return [':merchantId', '/:merchantId/regions/:regionId', args] as const
}

export function useGetMerchantIdRegionsRegionId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['regions'][':regionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['regions'][':regionId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdRegionsRegionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['regions'][':regionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':merchantId'].regions[':regionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdRegionsRegionId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['regions'][':regionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['regions'][':regionId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdRegionsRegionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['regions'][':regionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':merchantId'].regions[':regionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMerchantIdRegionsRegionIdKey() {
  return [':merchantId', '/:merchantId/regions/:regionId', 'DELETE'] as const
}

export function useDeleteMerchantIdRegionsRegionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['regions'][':regionId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['regions'][':regionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMerchantIdRegionsRegionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':merchantId']['regions'][':regionId']['$delete']>
        },
      ) => parseResponse(client[':merchantId'].regions[':regionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMerchantIdRegionsRegionIdKey() {
  return [':merchantId', '/:merchantId/regions/:regionId', 'PATCH'] as const
}

export function usePatchMerchantIdRegionsRegionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['regions'][':regionId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['regions'][':regionId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMerchantIdRegionsRegionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':merchantId']['regions'][':regionId']['$patch']>
        },
      ) => parseResponse(client[':merchantId'].regions[':regionId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdReportsSearchKey() {
  return [':merchantId', '/:merchantId/reports/search', 'POST'] as const
}

export function usePostMerchantIdReportsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['reports']['search']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['reports']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdReportsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':merchantId']['reports']['search']['$post']> },
      ) => parseResponse(client[':merchantId'].reports.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdRepricingrulesKey(
  args: InferRequestType<(typeof client)[':merchantId']['repricingrules']['$get']>,
) {
  return [':merchantId', '/:merchantId/repricingrules', args] as const
}

export function useGetMerchantIdRepricingrules<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['repricingrules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['repricingrules']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdRepricingrulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['repricingrules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].repricingrules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdRepricingrules<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['repricingrules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['repricingrules']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdRepricingrulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['repricingrules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].repricingrules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantIdRepricingrulesKey() {
  return [':merchantId', '/:merchantId/repricingrules', 'POST'] as const
}

export function usePostMerchantIdRepricingrules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['repricingrules']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['repricingrules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdRepricingrulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':merchantId']['repricingrules']['$post']> },
      ) => parseResponse(client[':merchantId'].repricingrules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdRepricingrulesRuleIdKey(
  args: InferRequestType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$get']>,
) {
  return [':merchantId', '/:merchantId/repricingrules/:ruleId', args] as const
}

export function useGetMerchantIdRepricingrulesRuleId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdRepricingrulesRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':merchantId'].repricingrules[':ruleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdRepricingrulesRuleId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdRepricingrulesRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':merchantId'].repricingrules[':ruleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMerchantIdRepricingrulesRuleIdKey() {
  return [':merchantId', '/:merchantId/repricingrules/:ruleId', 'DELETE'] as const
}

export function useDeleteMerchantIdRepricingrulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMerchantIdRepricingrulesRuleIdKey()
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
            (typeof client)[':merchantId']['repricingrules'][':ruleId']['$delete']
          >
        },
      ) =>
        parseResponse(client[':merchantId'].repricingrules[':ruleId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMerchantIdRepricingrulesRuleIdKey() {
  return [':merchantId', '/:merchantId/repricingrules/:ruleId', 'PATCH'] as const
}

export function usePatchMerchantIdRepricingrulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMerchantIdRepricingrulesRuleIdKey()
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
            (typeof client)[':merchantId']['repricingrules'][':ruleId']['$patch']
          >
        },
      ) =>
        parseResponse(client[':merchantId'].repricingrules[':ruleId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdRepricingrulesRuleIdRepricingreportsKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['repricingrules'][':ruleId']['repricingreports']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/repricingrules/:ruleId/repricingreports', args] as const
}

export function useGetMerchantIdRepricingrulesRuleIdRepricingreports<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':merchantId']['repricingrules'][':ruleId']['repricingreports']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['repricingrules'][':ruleId']['repricingreports']['$get']
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
        ? getGetMerchantIdRepricingrulesRuleIdRepricingreportsKey(args)
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
                (typeof client)[':merchantId']['repricingrules'][':ruleId']['repricingreports']['$get']
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
          client[':merchantId'].repricingrules[':ruleId'].repricingreports.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdRepricingrulesRuleIdRepricingreports<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':merchantId']['repricingrules'][':ruleId']['repricingreports']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['repricingrules'][':ruleId']['repricingreports']['$get']
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
        ? getGetMerchantIdRepricingrulesRuleIdRepricingreportsKey(args)
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
                (typeof client)[':merchantId']['repricingrules'][':ruleId']['repricingreports']['$get']
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
          client[':merchantId'].repricingrules[':ruleId'].repricingreports.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMerchantIdReturnaddressKey(
  args: InferRequestType<(typeof client)[':merchantId']['returnaddress']['$get']>,
) {
  return [':merchantId', '/:merchantId/returnaddress', args] as const
}

export function useGetMerchantIdReturnaddress<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['returnaddress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['returnaddress']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdReturnaddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['returnaddress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].returnaddress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdReturnaddress<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['returnaddress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['returnaddress']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdReturnaddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['returnaddress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].returnaddress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantIdReturnaddressKey() {
  return [':merchantId', '/:merchantId/returnaddress', 'POST'] as const
}

export function usePostMerchantIdReturnaddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['returnaddress']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['returnaddress']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdReturnaddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':merchantId']['returnaddress']['$post']> },
      ) => parseResponse(client[':merchantId'].returnaddress.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdReturnaddressReturnAddressIdKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['returnaddress'][':returnAddressId']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/returnaddress/:returnAddressId', args] as const
}

export function useGetMerchantIdReturnaddressReturnAddressId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':merchantId']['returnaddress'][':returnAddressId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['returnaddress'][':returnAddressId']['$get']
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
        ? getGetMerchantIdReturnaddressReturnAddressIdKey(args)
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
                (typeof client)[':merchantId']['returnaddress'][':returnAddressId']['$get']
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
          client[':merchantId'].returnaddress[':returnAddressId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdReturnaddressReturnAddressId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':merchantId']['returnaddress'][':returnAddressId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['returnaddress'][':returnAddressId']['$get']
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
        ? getGetMerchantIdReturnaddressReturnAddressIdKey(args)
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
                (typeof client)[':merchantId']['returnaddress'][':returnAddressId']['$get']
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
          client[':merchantId'].returnaddress[':returnAddressId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteMerchantIdReturnaddressReturnAddressIdKey() {
  return [':merchantId', '/:merchantId/returnaddress/:returnAddressId', 'DELETE'] as const
}

export function useDeleteMerchantIdReturnaddressReturnAddressId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['returnaddress'][':returnAddressId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['returnaddress'][':returnAddressId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMerchantIdReturnaddressReturnAddressIdKey()
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
            (typeof client)[':merchantId']['returnaddress'][':returnAddressId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].returnaddress[':returnAddressId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdReturnpolicyKey(
  args: InferRequestType<(typeof client)[':merchantId']['returnpolicy']['$get']>,
) {
  return [':merchantId', '/:merchantId/returnpolicy', args] as const
}

export function useGetMerchantIdReturnpolicy<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['returnpolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['returnpolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdReturnpolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['returnpolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].returnpolicy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdReturnpolicy<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['returnpolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['returnpolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdReturnpolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['returnpolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].returnpolicy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantIdReturnpolicyKey() {
  return [':merchantId', '/:merchantId/returnpolicy', 'POST'] as const
}

export function usePostMerchantIdReturnpolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['returnpolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['returnpolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdReturnpolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':merchantId']['returnpolicy']['$post']> },
      ) => parseResponse(client[':merchantId'].returnpolicy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdReturnpolicyReturnPolicyIdKey(
  args: InferRequestType<(typeof client)[':merchantId']['returnpolicy'][':returnPolicyId']['$get']>,
) {
  return [':merchantId', '/:merchantId/returnpolicy/:returnPolicyId', args] as const
}

export function useGetMerchantIdReturnpolicyReturnPolicyId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['returnpolicy'][':returnPolicyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['returnpolicy'][':returnPolicyId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdReturnpolicyReturnPolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['returnpolicy'][':returnPolicyId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':merchantId'].returnpolicy[':returnPolicyId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdReturnpolicyReturnPolicyId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['returnpolicy'][':returnPolicyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['returnpolicy'][':returnPolicyId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdReturnpolicyReturnPolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['returnpolicy'][':returnPolicyId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':merchantId'].returnpolicy[':returnPolicyId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteMerchantIdReturnpolicyReturnPolicyIdKey() {
  return [':merchantId', '/:merchantId/returnpolicy/:returnPolicyId', 'DELETE'] as const
}

export function useDeleteMerchantIdReturnpolicyReturnPolicyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['returnpolicy'][':returnPolicyId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['returnpolicy'][':returnPolicyId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMerchantIdReturnpolicyReturnPolicyIdKey()
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
            (typeof client)[':merchantId']['returnpolicy'][':returnPolicyId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].returnpolicy[':returnPolicyId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdReturnpolicyonlineKey(
  args: InferRequestType<(typeof client)[':merchantId']['returnpolicyonline']['$get']>,
) {
  return [':merchantId', '/:merchantId/returnpolicyonline', args] as const
}

export function useGetMerchantIdReturnpolicyonline<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['returnpolicyonline']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['returnpolicyonline']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdReturnpolicyonlineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['returnpolicyonline']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].returnpolicyonline.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdReturnpolicyonline<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['returnpolicyonline']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['returnpolicyonline']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdReturnpolicyonlineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['returnpolicyonline']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].returnpolicyonline.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantIdReturnpolicyonlineKey() {
  return [':merchantId', '/:merchantId/returnpolicyonline', 'POST'] as const
}

export function usePostMerchantIdReturnpolicyonline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['returnpolicyonline']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['returnpolicyonline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdReturnpolicyonlineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':merchantId']['returnpolicyonline']['$post']> },
      ) => parseResponse(client[':merchantId'].returnpolicyonline.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdReturnpolicyonlineReturnPolicyIdKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/returnpolicyonline/:returnPolicyId', args] as const
}

export function useGetMerchantIdReturnpolicyonlineReturnPolicyId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$get']
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
        ? getGetMerchantIdReturnpolicyonlineReturnPolicyIdKey(args)
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
                (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$get']
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
          client[':merchantId'].returnpolicyonline[':returnPolicyId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdReturnpolicyonlineReturnPolicyId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$get']
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
        ? getGetMerchantIdReturnpolicyonlineReturnPolicyIdKey(args)
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
                (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$get']
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
          client[':merchantId'].returnpolicyonline[':returnPolicyId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteMerchantIdReturnpolicyonlineReturnPolicyIdKey() {
  return [':merchantId', '/:merchantId/returnpolicyonline/:returnPolicyId', 'DELETE'] as const
}

export function useDeleteMerchantIdReturnpolicyonlineReturnPolicyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMerchantIdReturnpolicyonlineReturnPolicyIdKey()
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
            (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].returnpolicyonline[':returnPolicyId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchMerchantIdReturnpolicyonlineReturnPolicyIdKey() {
  return [':merchantId', '/:merchantId/returnpolicyonline/:returnPolicyId', 'PATCH'] as const
}

export function usePatchMerchantIdReturnpolicyonlineReturnPolicyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMerchantIdReturnpolicyonlineReturnPolicyIdKey()
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
            (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].returnpolicyonline[':returnPolicyId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdSettlementreportsKey(
  args: InferRequestType<(typeof client)[':merchantId']['settlementreports']['$get']>,
) {
  return [':merchantId', '/:merchantId/settlementreports', args] as const
}

export function useGetMerchantIdSettlementreports<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['settlementreports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['settlementreports']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdSettlementreportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['settlementreports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].settlementreports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdSettlementreports<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['settlementreports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['settlementreports']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdSettlementreportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['settlementreports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].settlementreports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMerchantIdSettlementreportsSettlementIdKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['settlementreports'][':settlementId']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/settlementreports/:settlementId', args] as const
}

export function useGetMerchantIdSettlementreportsSettlementId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':merchantId']['settlementreports'][':settlementId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['settlementreports'][':settlementId']['$get']
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
        ? getGetMerchantIdSettlementreportsSettlementIdKey(args)
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
                (typeof client)[':merchantId']['settlementreports'][':settlementId']['$get']
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
          client[':merchantId'].settlementreports[':settlementId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdSettlementreportsSettlementId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':merchantId']['settlementreports'][':settlementId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['settlementreports'][':settlementId']['$get']
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
        ? getGetMerchantIdSettlementreportsSettlementIdKey(args)
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
                (typeof client)[':merchantId']['settlementreports'][':settlementId']['$get']
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
          client[':merchantId'].settlementreports[':settlementId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMerchantIdSettlementreportsSettlementIdTransactionsKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['settlementreports'][':settlementId']['transactions']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/settlementreports/:settlementId/transactions', args] as const
}

export function useGetMerchantIdSettlementreportsSettlementIdTransactions<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':merchantId']['settlementreports'][':settlementId']['transactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['settlementreports'][':settlementId']['transactions']['$get']
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
        ? getGetMerchantIdSettlementreportsSettlementIdTransactionsKey(args)
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
                (typeof client)[':merchantId']['settlementreports'][':settlementId']['transactions']['$get']
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
          client[':merchantId'].settlementreports[':settlementId'].transactions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdSettlementreportsSettlementIdTransactions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['settlementreports'][':settlementId']['transactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['settlementreports'][':settlementId']['transactions']['$get']
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
        ? getGetMerchantIdSettlementreportsSettlementIdTransactionsKey(args)
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
                (typeof client)[':merchantId']['settlementreports'][':settlementId']['transactions']['$get']
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
          client[':merchantId'].settlementreports[':settlementId'].transactions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMerchantIdShippingsettingsKey(
  args: InferRequestType<(typeof client)[':merchantId']['shippingsettings']['$get']>,
) {
  return [':merchantId', '/:merchantId/shippingsettings', args] as const
}

export function useGetMerchantIdShippingsettings<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['shippingsettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['shippingsettings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdShippingsettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['shippingsettings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].shippingsettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdShippingsettings<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['shippingsettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['shippingsettings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdShippingsettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['shippingsettings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].shippingsettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMerchantIdShippingsettingsAccountIdKey(
  args: InferRequestType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$get']>,
) {
  return [':merchantId', '/:merchantId/shippingsettings/:accountId', args] as const
}

export function useGetMerchantIdShippingsettingsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdShippingsettingsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':merchantId'].shippingsettings[':accountId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdShippingsettingsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdShippingsettingsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':merchantId'].shippingsettings[':accountId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMerchantIdShippingsettingsAccountIdKey() {
  return [':merchantId', '/:merchantId/shippingsettings/:accountId', 'PUT'] as const
}

export function usePutMerchantIdShippingsettingsAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMerchantIdShippingsettingsAccountIdKey()
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
            (typeof client)[':merchantId']['shippingsettings'][':accountId']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].shippingsettings[':accountId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdShoppingadsprogramKey(
  args: InferRequestType<(typeof client)[':merchantId']['shoppingadsprogram']['$get']>,
) {
  return [':merchantId', '/:merchantId/shoppingadsprogram', args] as const
}

export function useGetMerchantIdShoppingadsprogram<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['shoppingadsprogram']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['shoppingadsprogram']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdShoppingadsprogramKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['shoppingadsprogram']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].shoppingadsprogram.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdShoppingadsprogram<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['shoppingadsprogram']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['shoppingadsprogram']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdShoppingadsprogramKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['shoppingadsprogram']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].shoppingadsprogram.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantIdShoppingadsprogramRequestreviewKey() {
  return [':merchantId', '/:merchantId/shoppingadsprogram/requestreview', 'POST'] as const
}

export function usePostMerchantIdShoppingadsprogramRequestreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['shoppingadsprogram']['requestreview']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['shoppingadsprogram']['requestreview']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdShoppingadsprogramRequestreviewKey()
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
            (typeof client)[':merchantId']['shoppingadsprogram']['requestreview']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].shoppingadsprogram.requestreview.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdSupportedCarriersKey(
  args: InferRequestType<(typeof client)[':merchantId']['supportedCarriers']['$get']>,
) {
  return [':merchantId', '/:merchantId/supportedCarriers', args] as const
}

export function useGetMerchantIdSupportedCarriers<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['supportedCarriers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['supportedCarriers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdSupportedCarriersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['supportedCarriers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].supportedCarriers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdSupportedCarriers<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['supportedCarriers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['supportedCarriers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdSupportedCarriersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['supportedCarriers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].supportedCarriers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMerchantIdSupportedHolidaysKey(
  args: InferRequestType<(typeof client)[':merchantId']['supportedHolidays']['$get']>,
) {
  return [':merchantId', '/:merchantId/supportedHolidays', args] as const
}

export function useGetMerchantIdSupportedHolidays<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['supportedHolidays']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['supportedHolidays']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdSupportedHolidaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['supportedHolidays']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].supportedHolidays.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdSupportedHolidays<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['supportedHolidays']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['supportedHolidays']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdSupportedHolidaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['supportedHolidays']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':merchantId'].supportedHolidays.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMerchantIdSupportedPickupServicesKey(
  args: InferRequestType<(typeof client)[':merchantId']['supportedPickupServices']['$get']>,
) {
  return [':merchantId', '/:merchantId/supportedPickupServices', args] as const
}

export function useGetMerchantIdSupportedPickupServices<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['supportedPickupServices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['supportedPickupServices']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdSupportedPickupServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['supportedPickupServices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':merchantId'].supportedPickupServices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdSupportedPickupServices<TError = unknown>(
  args: InferRequestType<(typeof client)[':merchantId']['supportedPickupServices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['supportedPickupServices']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMerchantIdSupportedPickupServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':merchantId']['supportedPickupServices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':merchantId'].supportedPickupServices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMerchantIdTestordersKey() {
  return [':merchantId', '/:merchantId/testorders', 'POST'] as const
}

export function usePostMerchantIdTestorders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['testorders']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['testorders']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdTestordersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':merchantId']['testorders']['$post']> },
      ) => parseResponse(client[':merchantId'].testorders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdTestordersOrderIdAdvanceKey() {
  return [':merchantId', '/:merchantId/testorders/:orderId/advance', 'POST'] as const
}

export function usePostMerchantIdTestordersOrderIdAdvance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['testorders'][':orderId']['advance']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':merchantId']['testorders'][':orderId']['advance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdTestordersOrderIdAdvanceKey()
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
            (typeof client)[':merchantId']['testorders'][':orderId']['advance']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].testorders[':orderId'].advance.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMerchantIdTestordersOrderIdCancelByCustomerKey() {
  return [':merchantId', '/:merchantId/testorders/:orderId/cancelByCustomer', 'POST'] as const
}

export function usePostMerchantIdTestordersOrderIdCancelByCustomer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['testorders'][':orderId']['cancelByCustomer']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':merchantId']['testorders'][':orderId']['cancelByCustomer']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMerchantIdTestordersOrderIdCancelByCustomerKey()
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
            (typeof client)[':merchantId']['testorders'][':orderId']['cancelByCustomer']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':merchantId'].testorders[':orderId'].cancelByCustomer.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMerchantIdTestordertemplatesTemplateNameKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['testordertemplates'][':templateName']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/testordertemplates/:templateName', args] as const
}

export function useGetMerchantIdTestordertemplatesTemplateName<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':merchantId']['testordertemplates'][':templateName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['testordertemplates'][':templateName']['$get']
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
        ? getGetMerchantIdTestordertemplatesTemplateNameKey(args)
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
                (typeof client)[':merchantId']['testordertemplates'][':templateName']['$get']
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
          client[':merchantId'].testordertemplates[':templateName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMerchantIdTestordertemplatesTemplateName<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':merchantId']['testordertemplates'][':templateName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':merchantId']['testordertemplates'][':templateName']['$get']
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
        ? getGetMerchantIdTestordertemplatesTemplateNameKey(args)
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
                (typeof client)[':merchantId']['testordertemplates'][':templateName']['$get']
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
          client[':merchantId'].testordertemplates[':templateName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
