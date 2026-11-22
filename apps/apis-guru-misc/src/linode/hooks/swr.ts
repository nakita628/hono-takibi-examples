import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountKey() {
  return ['account'] as const
}

export function getDatabasesKey() {
  return ['databases'] as const
}

export function getDomainsKey() {
  return ['domains'] as const
}

export function getImagesKey() {
  return ['images'] as const
}

export function getLinodeKey() {
  return ['linode'] as const
}

export function getLkeKey() {
  return ['lke'] as const
}

export function getLongviewKey() {
  return ['longview'] as const
}

export function getManagedKey() {
  return ['managed'] as const
}

export function getNetworkingKey() {
  return ['networking'] as const
}

export function getNodebalancersKey() {
  return ['nodebalancers'] as const
}

export function getObjectStorageKey() {
  return ['object-storage'] as const
}

export function getProfileKey() {
  return ['profile'] as const
}

export function getRegionsKey() {
  return ['regions'] as const
}

export function getSupportKey() {
  return ['support'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getVolumesKey() {
  return ['volumes'] as const
}

export function getGetAccountKey() {
  return ['account', '/account'] as const
}

export function useGetAccount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountKey() {
  return ['account', '/account', 'PUT'] as const
}

export function usePutAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.account.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.$put> }) =>
        parseResponse(client.account.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountCancelKey() {
  return ['account', '/account/cancel', 'POST'] as const
}

export function usePostAccountCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.cancel.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.cancel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.cancel.$post> }) =>
        parseResponse(client.account.cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountCreditCardKey() {
  return ['account', '/account/credit-card', 'POST'] as const
}

export function usePostAccountCreditCard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account)['credit-card']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account)['credit-card']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountCreditCardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account)['credit-card']['$post']> },
      ) => parseResponse(client.account['credit-card'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountEntityTransfersKey(
  args: InferRequestType<(typeof client.account)['entity-transfers']['$get']>,
) {
  return ['account', '/account/entity-transfers', args] as const
}

export function useGetAccountEntityTransfers<TError = unknown>(
  args: InferRequestType<(typeof client.account)['entity-transfers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)['entity-transfers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountEntityTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)['entity-transfers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account['entity-transfers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountEntityTransfers<TError = unknown>(
  args: InferRequestType<(typeof client.account)['entity-transfers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)['entity-transfers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountEntityTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)['entity-transfers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account['entity-transfers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountEntityTransfersKey() {
  return ['account', '/account/entity-transfers', 'POST'] as const
}

export function usePostAccountEntityTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)['entity-transfers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account)['entity-transfers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountEntityTransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account)['entity-transfers']['$post']> },
      ) => parseResponse(client.account['entity-transfers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountEntityTransfersTokenKey(
  args: InferRequestType<(typeof client.account)['entity-transfers'][':token']['$get']>,
) {
  return ['account', '/account/entity-transfers/:token', args] as const
}

export function useGetAccountEntityTransfersToken<TError = unknown>(
  args: InferRequestType<(typeof client.account)['entity-transfers'][':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)['entity-transfers'][':token']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountEntityTransfersTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)['entity-transfers'][':token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account['entity-transfers'][':token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountEntityTransfersToken<TError = unknown>(
  args: InferRequestType<(typeof client.account)['entity-transfers'][':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)['entity-transfers'][':token']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountEntityTransfersTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)['entity-transfers'][':token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account['entity-transfers'][':token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAccountEntityTransfersTokenKey() {
  return ['account', '/account/entity-transfers/:token', 'DELETE'] as const
}

export function useDeleteAccountEntityTransfersToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)['entity-transfers'][':token']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account)['entity-transfers'][':token']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountEntityTransfersTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.account)['entity-transfers'][':token']['$delete']>
        },
      ) => parseResponse(client.account['entity-transfers'][':token'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountEntityTransfersTokenAcceptKey() {
  return ['account', '/account/entity-transfers/:token/accept', 'POST'] as const
}

export function usePostAccountEntityTransfersTokenAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account)['entity-transfers'][':token']['accept']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account)['entity-transfers'][':token']['accept']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountEntityTransfersTokenAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account)['entity-transfers'][':token']['accept']['$post']
          >
        },
      ) =>
        parseResponse(
          client.account['entity-transfers'][':token'].accept.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountEventsKey(args: InferRequestType<typeof client.account.events.$get>) {
  return ['account', '/account/events', args] as const
}

export function useGetAccountEvents<TError = unknown>(
  args: InferRequestType<typeof client.account.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.events.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountEvents<TError = unknown>(
  args: InferRequestType<typeof client.account.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.events.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountEventsEventIdKey(
  args: InferRequestType<(typeof client.account.events)[':eventId']['$get']>,
) {
  return ['account', '/account/events/:eventId', args] as const
}

export function useGetAccountEventsEventId<TError = unknown>(
  args: InferRequestType<(typeof client.account.events)[':eventId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.events)[':eventId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountEventsEventIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.events)[':eventId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.events[':eventId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountEventsEventId<TError = unknown>(
  args: InferRequestType<(typeof client.account.events)[':eventId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.events)[':eventId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountEventsEventIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.events)[':eventId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.events[':eventId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountEventsEventIdReadKey() {
  return ['account', '/account/events/:eventId/read', 'POST'] as const
}

export function usePostAccountEventsEventIdRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.events)[':eventId']['read']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.events)[':eventId']['read']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountEventsEventIdReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.account.events)[':eventId']['read']['$post']> },
      ) => parseResponse(client.account.events[':eventId'].read.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountEventsEventIdSeenKey() {
  return ['account', '/account/events/:eventId/seen', 'POST'] as const
}

export function usePostAccountEventsEventIdSeen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.events)[':eventId']['seen']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.events)[':eventId']['seen']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountEventsEventIdSeenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.account.events)[':eventId']['seen']['$post']> },
      ) => parseResponse(client.account.events[':eventId'].seen.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountInvoicesKey(
  args: InferRequestType<typeof client.account.invoices.$get>,
) {
  return ['account', '/account/invoices', args] as const
}

export function useGetAccountInvoices<TError = unknown>(
  args: InferRequestType<typeof client.account.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.invoices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.invoices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountInvoices<TError = unknown>(
  args: InferRequestType<typeof client.account.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.invoices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.invoices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountInvoicesInvoiceIdKey(
  args: InferRequestType<(typeof client.account.invoices)[':invoiceId']['$get']>,
) {
  return ['account', '/account/invoices/:invoiceId', args] as const
}

export function useGetAccountInvoicesInvoiceId<TError = unknown>(
  args: InferRequestType<(typeof client.account.invoices)[':invoiceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.invoices)[':invoiceId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountInvoicesInvoiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.invoices)[':invoiceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.invoices[':invoiceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountInvoicesInvoiceId<TError = unknown>(
  args: InferRequestType<(typeof client.account.invoices)[':invoiceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.invoices)[':invoiceId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountInvoicesInvoiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.invoices)[':invoiceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.invoices[':invoiceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountInvoicesInvoiceIdItemsKey(
  args: InferRequestType<(typeof client.account.invoices)[':invoiceId']['items']['$get']>,
) {
  return ['account', '/account/invoices/:invoiceId/items', args] as const
}

export function useGetAccountInvoicesInvoiceIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.account.invoices)[':invoiceId']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.invoices)[':invoiceId']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountInvoicesInvoiceIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.invoices)[':invoiceId']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.invoices[':invoiceId'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountInvoicesInvoiceIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.account.invoices)[':invoiceId']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.invoices)[':invoiceId']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountInvoicesInvoiceIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.invoices)[':invoiceId']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.invoices[':invoiceId'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountLoginsKey() {
  return ['account', '/account/logins'] as const
}

export function useGetAccountLogins<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.logins.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountLoginsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.logins.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.logins.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountLogins<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.logins.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountLoginsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.logins.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.logins.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountLoginsLoginIdKey(
  args: InferRequestType<(typeof client.account.logins)[':loginId']['$get']>,
) {
  return ['account', '/account/logins/:loginId', args] as const
}

export function useGetAccountLoginsLoginId<TError = unknown>(
  args: InferRequestType<(typeof client.account.logins)[':loginId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.logins)[':loginId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountLoginsLoginIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.logins)[':loginId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.logins[':loginId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountLoginsLoginId<TError = unknown>(
  args: InferRequestType<(typeof client.account.logins)[':loginId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.logins)[':loginId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountLoginsLoginIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.logins)[':loginId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.logins[':loginId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountMaintenanceKey() {
  return ['account', '/account/maintenance'] as const
}

export function useGetAccountMaintenance<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.maintenance.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountMaintenanceKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.maintenance.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.maintenance.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountMaintenance<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.maintenance.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountMaintenanceKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.maintenance.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.maintenance.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountNotificationsKey() {
  return ['account', '/account/notifications'] as const
}

export function useGetAccountNotifications<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.notifications.$get>>>
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
        ? getGetAccountNotificationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.notifications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.notifications.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountNotifications<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.notifications.$get>>>
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
        ? getGetAccountNotificationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.notifications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.notifications.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountOauthClientsKey(
  args: InferRequestType<(typeof client.account)['oauth-clients']['$get']>,
) {
  return ['account', '/account/oauth-clients', args] as const
}

export function useGetAccountOauthClients<TError = unknown>(
  args: InferRequestType<(typeof client.account)['oauth-clients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)['oauth-clients']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountOauthClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)['oauth-clients']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account['oauth-clients'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountOauthClients<TError = unknown>(
  args: InferRequestType<(typeof client.account)['oauth-clients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)['oauth-clients']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountOauthClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)['oauth-clients']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account['oauth-clients'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountOauthClientsKey() {
  return ['account', '/account/oauth-clients', 'POST'] as const
}

export function usePostAccountOauthClients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account)['oauth-clients']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account)['oauth-clients']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountOauthClientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account)['oauth-clients']['$post']> },
      ) => parseResponse(client.account['oauth-clients'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountOauthClientsClientIdKey(
  args: InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['$get']>,
) {
  return ['account', '/account/oauth-clients/:clientId', args] as const
}

export function useGetAccountOauthClientsClientId<TError = unknown>(
  args: InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)['oauth-clients'][':clientId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountOauthClientsClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)['oauth-clients'][':clientId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account['oauth-clients'][':clientId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountOauthClientsClientId<TError = unknown>(
  args: InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)['oauth-clients'][':clientId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountOauthClientsClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)['oauth-clients'][':clientId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account['oauth-clients'][':clientId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountOauthClientsClientIdKey() {
  return ['account', '/account/oauth-clients/:clientId', 'PUT'] as const
}

export function usePutAccountOauthClientsClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)['oauth-clients'][':clientId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountOauthClientsClientIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['$put']> },
      ) => parseResponse(client.account['oauth-clients'][':clientId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountOauthClientsClientIdKey() {
  return ['account', '/account/oauth-clients/:clientId', 'DELETE'] as const
}

export function useDeleteAccountOauthClientsClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)['oauth-clients'][':clientId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountOauthClientsClientIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['$delete']>
        },
      ) => parseResponse(client.account['oauth-clients'][':clientId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountOauthClientsClientIdResetSecretKey() {
  return ['account', '/account/oauth-clients/:clientId/reset-secret', 'POST'] as const
}

export function usePostAccountOauthClientsClientIdResetSecret<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.account)['oauth-clients'][':clientId']['reset-secret']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['reset-secret']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountOauthClientsClientIdResetSecretKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account)['oauth-clients'][':clientId']['reset-secret']['$post']
          >
        },
      ) =>
        parseResponse(
          client.account['oauth-clients'][':clientId']['reset-secret'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountOauthClientsClientIdThumbnailKey(
  args: InferRequestType<
    (typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$get']
  >,
) {
  return ['account', '/account/oauth-clients/:clientId/thumbnail', args] as const
}

export function useGetAccountOauthClientsClientIdThumbnail<TError = unknown>(
  args: InferRequestType<
    (typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountOauthClientsClientIdThumbnailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account['oauth-clients'][':clientId'].thumbnail.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountOauthClientsClientIdThumbnail<TError = unknown>(
  args: InferRequestType<
    (typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountOauthClientsClientIdThumbnailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account['oauth-clients'][':clientId'].thumbnail.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountOauthClientsClientIdThumbnailKey() {
  return ['account', '/account/oauth-clients/:clientId/thumbnail', 'PUT'] as const
}

export function usePutAccountOauthClientsClientIdThumbnail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountOauthClientsClientIdThumbnailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$put']
          >
        },
      ) =>
        parseResponse(
          client.account['oauth-clients'][':clientId'].thumbnail.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountPaymentMethodsKey(
  args: InferRequestType<(typeof client.account)['payment-methods']['$get']>,
) {
  return ['account', '/account/payment-methods', args] as const
}

export function useGetAccountPaymentMethods<TError = unknown>(
  args: InferRequestType<(typeof client.account)['payment-methods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)['payment-methods']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountPaymentMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)['payment-methods']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account['payment-methods'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountPaymentMethods<TError = unknown>(
  args: InferRequestType<(typeof client.account)['payment-methods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)['payment-methods']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountPaymentMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)['payment-methods']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account['payment-methods'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountPaymentMethodsKey() {
  return ['account', '/account/payment-methods', 'POST'] as const
}

export function usePostAccountPaymentMethods<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)['payment-methods']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account)['payment-methods']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountPaymentMethodsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account)['payment-methods']['$post']> },
      ) => parseResponse(client.account['payment-methods'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountPaymentMethodsPaymentMethodIdKey(
  args: InferRequestType<(typeof client.account)['payment-methods'][':paymentMethodId']['$get']>,
) {
  return ['account', '/account/payment-methods/:paymentMethodId', args] as const
}

export function useGetAccountPaymentMethodsPaymentMethodId<TError = unknown>(
  args: InferRequestType<(typeof client.account)['payment-methods'][':paymentMethodId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account)['payment-methods'][':paymentMethodId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountPaymentMethodsPaymentMethodIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account)['payment-methods'][':paymentMethodId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account['payment-methods'][':paymentMethodId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountPaymentMethodsPaymentMethodId<TError = unknown>(
  args: InferRequestType<(typeof client.account)['payment-methods'][':paymentMethodId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account)['payment-methods'][':paymentMethodId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountPaymentMethodsPaymentMethodIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account)['payment-methods'][':paymentMethodId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account['payment-methods'][':paymentMethodId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAccountPaymentMethodsPaymentMethodIdKey() {
  return ['account', '/account/payment-methods/:paymentMethodId', 'DELETE'] as const
}

export function useDeleteAccountPaymentMethodsPaymentMethodId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account)['payment-methods'][':paymentMethodId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account)['payment-methods'][':paymentMethodId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountPaymentMethodsPaymentMethodIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account)['payment-methods'][':paymentMethodId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.account['payment-methods'][':paymentMethodId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountPaymentMethodsPaymentMethodIdMakeDefaultKey() {
  return ['account', '/account/payment-methods/:paymentMethodId/make-default', 'POST'] as const
}

export function usePostAccountPaymentMethodsPaymentMethodIdMakeDefault<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.account)['payment-methods'][':paymentMethodId']['make-default']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.account)['payment-methods'][':paymentMethodId']['make-default']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountPaymentMethodsPaymentMethodIdMakeDefaultKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account)['payment-methods'][':paymentMethodId']['make-default']['$post']
          >
        },
      ) =>
        parseResponse(
          client.account['payment-methods'][':paymentMethodId']['make-default'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountPaymentsKey(
  args: InferRequestType<typeof client.account.payments.$get>,
) {
  return ['account', '/account/payments', args] as const
}

export function useGetAccountPayments<TError = unknown>(
  args: InferRequestType<typeof client.account.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.payments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.payments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountPayments<TError = unknown>(
  args: InferRequestType<typeof client.account.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.payments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.payments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountPaymentsKey() {
  return ['account', '/account/payments', 'POST'] as const
}

export function usePostAccountPayments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.payments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.payments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountPaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.payments.$post> }) =>
        parseResponse(client.account.payments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountPaymentsPaypalKey() {
  return ['account', '/account/payments/paypal', 'POST'] as const
}

export function usePostAccountPaymentsPaypal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.payments.paypal.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.payments.paypal.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountPaymentsPaypalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.account.payments.paypal.$post> },
      ) => parseResponse(client.account.payments.paypal.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountPaymentsPaypalExecuteKey() {
  return ['account', '/account/payments/paypal/execute', 'POST'] as const
}

export function usePostAccountPaymentsPaypalExecute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.account.payments.paypal.execute.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.payments.paypal.execute.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountPaymentsPaypalExecuteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.account.payments.paypal.execute.$post> },
      ) => parseResponse(client.account.payments.paypal.execute.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountPaymentsPaymentIdKey(
  args: InferRequestType<(typeof client.account.payments)[':paymentId']['$get']>,
) {
  return ['account', '/account/payments/:paymentId', args] as const
}

export function useGetAccountPaymentsPaymentId<TError = unknown>(
  args: InferRequestType<(typeof client.account.payments)[':paymentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.payments)[':paymentId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountPaymentsPaymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.payments)[':paymentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.payments[':paymentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountPaymentsPaymentId<TError = unknown>(
  args: InferRequestType<(typeof client.account.payments)[':paymentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.payments)[':paymentId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountPaymentsPaymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.payments)[':paymentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.payments[':paymentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountPromoCodesKey() {
  return ['account', '/account/promo-codes', 'POST'] as const
}

export function usePostAccountPromoCodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account)['promo-codes']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account)['promo-codes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountPromoCodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account)['promo-codes']['$post']> },
      ) => parseResponse(client.account['promo-codes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountServiceTransfersKey(
  args: InferRequestType<(typeof client.account)['service-transfers']['$get']>,
) {
  return ['account', '/account/service-transfers', args] as const
}

export function useGetAccountServiceTransfers<TError = unknown>(
  args: InferRequestType<(typeof client.account)['service-transfers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)['service-transfers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountServiceTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)['service-transfers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account['service-transfers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountServiceTransfers<TError = unknown>(
  args: InferRequestType<(typeof client.account)['service-transfers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)['service-transfers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountServiceTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)['service-transfers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account['service-transfers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountServiceTransfersKey() {
  return ['account', '/account/service-transfers', 'POST'] as const
}

export function usePostAccountServiceTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)['service-transfers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account)['service-transfers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountServiceTransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account)['service-transfers']['$post']> },
      ) => parseResponse(client.account['service-transfers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountServiceTransfersTokenKey(
  args: InferRequestType<(typeof client.account)['service-transfers'][':token']['$get']>,
) {
  return ['account', '/account/service-transfers/:token', args] as const
}

export function useGetAccountServiceTransfersToken<TError = unknown>(
  args: InferRequestType<(typeof client.account)['service-transfers'][':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)['service-transfers'][':token']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountServiceTransfersTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)['service-transfers'][':token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account['service-transfers'][':token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountServiceTransfersToken<TError = unknown>(
  args: InferRequestType<(typeof client.account)['service-transfers'][':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)['service-transfers'][':token']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountServiceTransfersTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)['service-transfers'][':token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account['service-transfers'][':token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAccountServiceTransfersTokenKey() {
  return ['account', '/account/service-transfers/:token', 'DELETE'] as const
}

export function useDeleteAccountServiceTransfersToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)['service-transfers'][':token']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account)['service-transfers'][':token']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountServiceTransfersTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.account)['service-transfers'][':token']['$delete']>
        },
      ) => parseResponse(client.account['service-transfers'][':token'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountServiceTransfersTokenAcceptKey() {
  return ['account', '/account/service-transfers/:token/accept', 'POST'] as const
}

export function usePostAccountServiceTransfersTokenAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account)['service-transfers'][':token']['accept']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account)['service-transfers'][':token']['accept']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountServiceTransfersTokenAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account)['service-transfers'][':token']['accept']['$post']
          >
        },
      ) =>
        parseResponse(
          client.account['service-transfers'][':token'].accept.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountSettingsKey() {
  return ['account', '/account/settings'] as const
}

export function useGetAccountSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountSettingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountSettingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountSettingsKey() {
  return ['account', '/account/settings', 'PUT'] as const
}

export function usePutAccountSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.settings.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.settings.$put> }) =>
        parseResponse(client.account.settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountSettingsManagedEnableKey() {
  return ['account', '/account/settings/managed-enable', 'POST'] as const
}

export function usePostAccountSettingsManagedEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.settings)['managed-enable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountSettingsManagedEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.account.settings['managed-enable'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountTransferKey() {
  return ['account', '/account/transfer'] as const
}

export function useGetAccountTransfer<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.transfer.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountTransferKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.transfer.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.transfer.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountTransfer<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.transfer.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountTransferKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.transfer.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.transfer.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountUsersKey(args: InferRequestType<typeof client.account.users.$get>) {
  return ['account', '/account/users', args] as const
}

export function useGetAccountUsers<TError = unknown>(
  args: InferRequestType<typeof client.account.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountUsers<TError = unknown>(
  args: InferRequestType<typeof client.account.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountUsersKey() {
  return ['account', '/account/users', 'POST'] as const
}

export function usePostAccountUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.users.$post> }) =>
        parseResponse(client.account.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountUsersUsernameKey(
  args: InferRequestType<(typeof client.account.users)[':username']['$get']>,
) {
  return ['account', '/account/users/:username', args] as const
}

export function useGetAccountUsersUsername<TError = unknown>(
  args: InferRequestType<(typeof client.account.users)[':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.users)[':username']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountUsersUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.users)[':username']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.users[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountUsersUsername<TError = unknown>(
  args: InferRequestType<(typeof client.account.users)[':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.users)[':username']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountUsersUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.users)[':username']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.users[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountUsersUsernameKey() {
  return ['account', '/account/users/:username', 'PUT'] as const
}

export function usePutAccountUsersUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.users)[':username']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.users)[':username']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountUsersUsernameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account.users)[':username']['$put']> },
      ) => parseResponse(client.account.users[':username'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountUsersUsernameKey() {
  return ['account', '/account/users/:username', 'DELETE'] as const
}

export function useDeleteAccountUsersUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.users)[':username']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.users)[':username']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountUsersUsernameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account.users)[':username']['$delete']> },
      ) => parseResponse(client.account.users[':username'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountUsersUsernameGrantsKey(
  args: InferRequestType<(typeof client.account.users)[':username']['grants']['$get']>,
) {
  return ['account', '/account/users/:username/grants', args] as const
}

export function useGetAccountUsersUsernameGrants<TError = unknown>(
  args: InferRequestType<(typeof client.account.users)[':username']['grants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.users)[':username']['grants']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountUsersUsernameGrantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.users)[':username']['grants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.users[':username'].grants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountUsersUsernameGrants<TError = unknown>(
  args: InferRequestType<(typeof client.account.users)[':username']['grants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.users)[':username']['grants']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountUsersUsernameGrantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.users)[':username']['grants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.users[':username'].grants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountUsersUsernameGrantsKey() {
  return ['account', '/account/users/:username/grants', 'PUT'] as const
}

export function usePutAccountUsersUsernameGrants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.users)[':username']['grants']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.users)[':username']['grants']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountUsersUsernameGrantsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.account.users)[':username']['grants']['$put']> },
      ) => parseResponse(client.account.users[':username'].grants.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatabasesEnginesKey(
  args: InferRequestType<typeof client.databases.engines.$get>,
) {
  return ['databases', '/databases/engines', args] as const
}

export function useGetDatabasesEngines<TError = unknown>(
  args: InferRequestType<typeof client.databases.engines.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.engines.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesEnginesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.engines.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.databases.engines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesEngines<TError = unknown>(
  args: InferRequestType<typeof client.databases.engines.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.engines.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesEnginesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.engines.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.databases.engines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDatabasesEnginesEngineIdKey(
  args: InferRequestType<(typeof client.databases.engines)[':engineId']['$get']>,
) {
  return ['databases', '/databases/engines/:engineId', args] as const
}

export function useGetDatabasesEnginesEngineId<TError = unknown>(
  args: InferRequestType<(typeof client.databases.engines)[':engineId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.databases.engines)[':engineId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesEnginesEngineIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.databases.engines)[':engineId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.databases.engines[':engineId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesEnginesEngineId<TError = unknown>(
  args: InferRequestType<(typeof client.databases.engines)[':engineId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.databases.engines)[':engineId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesEnginesEngineIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.databases.engines)[':engineId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.databases.engines[':engineId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDatabasesInstancesKey(
  args: InferRequestType<typeof client.databases.instances.$get>,
) {
  return ['databases', '/databases/instances', args] as const
}

export function useGetDatabasesInstances<TError = unknown>(
  args: InferRequestType<typeof client.databases.instances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.databases.instances.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.databases.instances.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.databases.instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesInstances<TError = unknown>(
  args: InferRequestType<typeof client.databases.instances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.databases.instances.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.databases.instances.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.databases.instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDatabasesMongodbInstancesKey(
  args: InferRequestType<typeof client.databases.mongodb.instances.$get>,
) {
  return ['databases', '/databases/mongodb/instances', args] as const
}

export function useGetDatabasesMongodbInstances<TError = unknown>(
  args: InferRequestType<typeof client.databases.mongodb.instances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.databases.mongodb.instances.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesMongodbInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.databases.mongodb.instances.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.databases.mongodb.instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesMongodbInstances<TError = unknown>(
  args: InferRequestType<typeof client.databases.mongodb.instances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.databases.mongodb.instances.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesMongodbInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.databases.mongodb.instances.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.databases.mongodb.instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDatabasesMongodbInstancesInstanceIdKey(
  args: InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['$get']>,
) {
  return ['databases', '/databases/mongodb/instances/:instanceId', args] as const
}

export function useGetDatabasesMongodbInstancesInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesMongodbInstancesInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.databases.mongodb.instances[':instanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesMongodbInstancesInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesMongodbInstancesInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.databases.mongodb.instances[':instanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDatabasesMongodbInstancesInstanceIdKey() {
  return ['databases', '/databases/mongodb/instances/:instanceId', 'PUT'] as const
}

export function usePutDatabasesMongodbInstancesInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDatabasesMongodbInstancesInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['$put']>
        },
      ) =>
        parseResponse(client.databases.mongodb.instances[':instanceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDatabasesMongodbInstancesInstanceIdKey() {
  return ['databases', '/databases/mongodb/instances/:instanceId', 'DELETE'] as const
}

export function useDeleteDatabasesMongodbInstancesInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDatabasesMongodbInstancesInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.databases.mongodb.instances)[':instanceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.databases.mongodb.instances[':instanceId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDatabasesMongodbInstancesInstanceIdBackupsKey(
  args: InferRequestType<
    (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$get']
  >,
) {
  return ['databases', '/databases/mongodb/instances/:instanceId/backups', args] as const
}

export function useGetDatabasesMongodbInstancesInstanceIdBackups<TError = unknown>(
  args: InferRequestType<
    (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesMongodbInstancesInstanceIdBackupsKey(args)
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
                (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.databases.mongodb.instances[':instanceId'].backups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesMongodbInstancesInstanceIdBackups<TError = unknown>(
  args: InferRequestType<
    (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesMongodbInstancesInstanceIdBackupsKey(args)
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
                (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.databases.mongodb.instances[':instanceId'].backups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDatabasesMongodbInstancesInstanceIdBackupsKey() {
  return ['databases', '/databases/mongodb/instances/:instanceId/backups', 'POST'] as const
}

export function usePostDatabasesMongodbInstancesInstanceIdBackups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['backups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatabasesMongodbInstancesInstanceIdBackupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$post']
          >
        },
      ) =>
        parseResponse(
          client.databases.mongodb.instances[':instanceId'].backups.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDatabasesMongodbInstancesInstanceIdBackupsBackupIdKey(
  args: InferRequestType<
    (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$get']
  >,
) {
  return ['databases', '/databases/mongodb/instances/:instanceId/backups/:backupId', args] as const
}

export function useGetDatabasesMongodbInstancesInstanceIdBackupsBackupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesMongodbInstancesInstanceIdBackupsBackupIdKey(args)
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
                (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.databases.mongodb.instances[':instanceId'].backups[':backupId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesMongodbInstancesInstanceIdBackupsBackupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesMongodbInstancesInstanceIdBackupsBackupIdKey(args)
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
                (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.databases.mongodb.instances[':instanceId'].backups[':backupId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteDatabasesMongodbInstancesInstanceIdBackupsBackupIdKey() {
  return [
    'databases',
    '/databases/mongodb/instances/:instanceId/backups/:backupId',
    'DELETE',
  ] as const
}

export function useDeleteDatabasesMongodbInstancesInstanceIdBackupsBackupId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDatabasesMongodbInstancesInstanceIdBackupsBackupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.databases.mongodb.instances[':instanceId'].backups[':backupId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDatabasesMongodbInstancesInstanceIdBackupsBackupIdRestoreKey() {
  return [
    'databases',
    '/databases/mongodb/instances/:instanceId/backups/:backupId/restore',
    'POST',
  ] as const
}

export function usePostDatabasesMongodbInstancesInstanceIdBackupsBackupIdRestore<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatabasesMongodbInstancesInstanceIdBackupsBackupIdRestoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
          >
        },
      ) =>
        parseResponse(
          client.databases.mongodb.instances[':instanceId'].backups[':backupId'].restore.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDatabasesMongodbInstancesInstanceIdCredentialsKey(
  args: InferRequestType<
    (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['$get']
  >,
) {
  return ['databases', '/databases/mongodb/instances/:instanceId/credentials', args] as const
}

export function useGetDatabasesMongodbInstancesInstanceIdCredentials<TError = unknown>(
  args: InferRequestType<
    (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesMongodbInstancesInstanceIdCredentialsKey(args)
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
                (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.databases.mongodb.instances[':instanceId'].credentials.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesMongodbInstancesInstanceIdCredentials<TError = unknown>(
  args: InferRequestType<
    (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesMongodbInstancesInstanceIdCredentialsKey(args)
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
                (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.databases.mongodb.instances[':instanceId'].credentials.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDatabasesMongodbInstancesInstanceIdCredentialsResetKey() {
  return [
    'databases',
    '/databases/mongodb/instances/:instanceId/credentials/reset',
    'POST',
  ] as const
}

export function usePostDatabasesMongodbInstancesInstanceIdCredentialsReset<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['reset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatabasesMongodbInstancesInstanceIdCredentialsResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['reset']['$post']
          >
        },
      ) =>
        parseResponse(
          client.databases.mongodb.instances[':instanceId'].credentials.reset.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDatabasesMongodbInstancesInstanceIdPatchKey() {
  return ['databases', '/databases/mongodb/instances/:instanceId/patch', 'POST'] as const
}

export function usePostDatabasesMongodbInstancesInstanceIdPatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['patch']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['patch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatabasesMongodbInstancesInstanceIdPatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.databases.mongodb.instances)[':instanceId']['patch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.databases.mongodb.instances[':instanceId'].patch.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDatabasesMongodbInstancesInstanceIdSslKey(
  args: InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['ssl']['$get']>,
) {
  return ['databases', '/databases/mongodb/instances/:instanceId/ssl', args] as const
}

export function useGetDatabasesMongodbInstancesInstanceIdSsl<TError = unknown>(
  args: InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['ssl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['ssl']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesMongodbInstancesInstanceIdSslKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['ssl']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.databases.mongodb.instances[':instanceId'].ssl.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesMongodbInstancesInstanceIdSsl<TError = unknown>(
  args: InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['ssl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['ssl']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesMongodbInstancesInstanceIdSslKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['ssl']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.databases.mongodb.instances[':instanceId'].ssl.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDatabasesMysqlInstancesKey(
  args: InferRequestType<typeof client.databases.mysql.instances.$get>,
) {
  return ['databases', '/databases/mysql/instances', args] as const
}

export function useGetDatabasesMysqlInstances<TError = unknown>(
  args: InferRequestType<typeof client.databases.mysql.instances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.databases.mysql.instances.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesMysqlInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.databases.mysql.instances.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.databases.mysql.instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesMysqlInstances<TError = unknown>(
  args: InferRequestType<typeof client.databases.mysql.instances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.databases.mysql.instances.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesMysqlInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.databases.mysql.instances.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.databases.mysql.instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDatabasesMysqlInstancesKey() {
  return ['databases', '/databases/mysql/instances', 'POST'] as const
}

export function usePostDatabasesMysqlInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.databases.mysql.instances.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.databases.mysql.instances.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatabasesMysqlInstancesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.databases.mysql.instances.$post> },
      ) => parseResponse(client.databases.mysql.instances.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatabasesMysqlInstancesInstanceIdKey(
  args: InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['$get']>,
) {
  return ['databases', '/databases/mysql/instances/:instanceId', args] as const
}

export function useGetDatabasesMysqlInstancesInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesMysqlInstancesInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.databases.mysql.instances[':instanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesMysqlInstancesInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesMysqlInstancesInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.databases.mysql.instances[':instanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDatabasesMysqlInstancesInstanceIdKey() {
  return ['databases', '/databases/mysql/instances/:instanceId', 'PUT'] as const
}

export function usePutDatabasesMysqlInstancesInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDatabasesMysqlInstancesInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['$put']>
        },
      ) => parseResponse(client.databases.mysql.instances[':instanceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDatabasesMysqlInstancesInstanceIdKey() {
  return ['databases', '/databases/mysql/instances/:instanceId', 'DELETE'] as const
}

export function useDeleteDatabasesMysqlInstancesInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDatabasesMysqlInstancesInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['$delete']>
        },
      ) =>
        parseResponse(client.databases.mysql.instances[':instanceId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatabasesMysqlInstancesInstanceIdBackupsKey(
  args: InferRequestType<
    (typeof client.databases.mysql.instances)[':instanceId']['backups']['$get']
  >,
) {
  return ['databases', '/databases/mysql/instances/:instanceId/backups', args] as const
}

export function useGetDatabasesMysqlInstancesInstanceIdBackups<TError = unknown>(
  args: InferRequestType<
    (typeof client.databases.mysql.instances)[':instanceId']['backups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases.mysql.instances)[':instanceId']['backups']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesMysqlInstancesInstanceIdBackupsKey(args)
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
                (typeof client.databases.mysql.instances)[':instanceId']['backups']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.databases.mysql.instances[':instanceId'].backups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesMysqlInstancesInstanceIdBackups<TError = unknown>(
  args: InferRequestType<
    (typeof client.databases.mysql.instances)[':instanceId']['backups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases.mysql.instances)[':instanceId']['backups']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesMysqlInstancesInstanceIdBackupsKey(args)
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
                (typeof client.databases.mysql.instances)[':instanceId']['backups']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.databases.mysql.instances[':instanceId'].backups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDatabasesMysqlInstancesInstanceIdBackupsKey() {
  return ['databases', '/databases/mysql/instances/:instanceId/backups', 'POST'] as const
}

export function usePostDatabasesMysqlInstancesInstanceIdBackups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['backups']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['backups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatabasesMysqlInstancesInstanceIdBackupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.databases.mysql.instances)[':instanceId']['backups']['$post']
          >
        },
      ) =>
        parseResponse(
          client.databases.mysql.instances[':instanceId'].backups.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDatabasesMysqlInstancesInstanceIdBackupsBackupIdKey(
  args: InferRequestType<
    (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$get']
  >,
) {
  return ['databases', '/databases/mysql/instances/:instanceId/backups/:backupId', args] as const
}

export function useGetDatabasesMysqlInstancesInstanceIdBackupsBackupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesMysqlInstancesInstanceIdBackupsBackupIdKey(args)
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
                (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.databases.mysql.instances[':instanceId'].backups[':backupId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesMysqlInstancesInstanceIdBackupsBackupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesMysqlInstancesInstanceIdBackupsBackupIdKey(args)
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
                (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.databases.mysql.instances[':instanceId'].backups[':backupId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteDatabasesMysqlInstancesInstanceIdBackupsBackupIdKey() {
  return [
    'databases',
    '/databases/mysql/instances/:instanceId/backups/:backupId',
    'DELETE',
  ] as const
}

export function useDeleteDatabasesMysqlInstancesInstanceIdBackupsBackupId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDatabasesMysqlInstancesInstanceIdBackupsBackupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.databases.mysql.instances[':instanceId'].backups[':backupId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDatabasesMysqlInstancesInstanceIdBackupsBackupIdRestoreKey() {
  return [
    'databases',
    '/databases/mysql/instances/:instanceId/backups/:backupId/restore',
    'POST',
  ] as const
}

export function usePostDatabasesMysqlInstancesInstanceIdBackupsBackupIdRestore<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatabasesMysqlInstancesInstanceIdBackupsBackupIdRestoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
          >
        },
      ) =>
        parseResponse(
          client.databases.mysql.instances[':instanceId'].backups[':backupId'].restore.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDatabasesMysqlInstancesInstanceIdCredentialsKey(
  args: InferRequestType<
    (typeof client.databases.mysql.instances)[':instanceId']['credentials']['$get']
  >,
) {
  return ['databases', '/databases/mysql/instances/:instanceId/credentials', args] as const
}

export function useGetDatabasesMysqlInstancesInstanceIdCredentials<TError = unknown>(
  args: InferRequestType<
    (typeof client.databases.mysql.instances)[':instanceId']['credentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases.mysql.instances)[':instanceId']['credentials']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesMysqlInstancesInstanceIdCredentialsKey(args)
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
                (typeof client.databases.mysql.instances)[':instanceId']['credentials']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.databases.mysql.instances[':instanceId'].credentials.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesMysqlInstancesInstanceIdCredentials<TError = unknown>(
  args: InferRequestType<
    (typeof client.databases.mysql.instances)[':instanceId']['credentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases.mysql.instances)[':instanceId']['credentials']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesMysqlInstancesInstanceIdCredentialsKey(args)
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
                (typeof client.databases.mysql.instances)[':instanceId']['credentials']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.databases.mysql.instances[':instanceId'].credentials.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDatabasesMysqlInstancesInstanceIdCredentialsResetKey() {
  return ['databases', '/databases/mysql/instances/:instanceId/credentials/reset', 'POST'] as const
}

export function usePostDatabasesMysqlInstancesInstanceIdCredentialsReset<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.mysql.instances)[':instanceId']['credentials']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases.mysql.instances)[':instanceId']['credentials']['reset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatabasesMysqlInstancesInstanceIdCredentialsResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.databases.mysql.instances)[':instanceId']['credentials']['reset']['$post']
          >
        },
      ) =>
        parseResponse(
          client.databases.mysql.instances[':instanceId'].credentials.reset.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDatabasesMysqlInstancesInstanceIdPatchKey() {
  return ['databases', '/databases/mysql/instances/:instanceId/patch', 'POST'] as const
}

export function usePostDatabasesMysqlInstancesInstanceIdPatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['patch']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['patch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatabasesMysqlInstancesInstanceIdPatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.databases.mysql.instances)[':instanceId']['patch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.databases.mysql.instances[':instanceId'].patch.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDatabasesMysqlInstancesInstanceIdSslKey(
  args: InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['ssl']['$get']>,
) {
  return ['databases', '/databases/mysql/instances/:instanceId/ssl', args] as const
}

export function useGetDatabasesMysqlInstancesInstanceIdSsl<TError = unknown>(
  args: InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['ssl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['ssl']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesMysqlInstancesInstanceIdSslKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['ssl']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.databases.mysql.instances[':instanceId'].ssl.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesMysqlInstancesInstanceIdSsl<TError = unknown>(
  args: InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['ssl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['ssl']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesMysqlInstancesInstanceIdSslKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['ssl']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.databases.mysql.instances[':instanceId'].ssl.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDatabasesPostgresqlInstancesKey(
  args: InferRequestType<typeof client.databases.postgresql.instances.$get>,
) {
  return ['databases', '/databases/postgresql/instances', args] as const
}

export function useGetDatabasesPostgresqlInstances<TError = unknown>(
  args: InferRequestType<typeof client.databases.postgresql.instances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.databases.postgresql.instances.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesPostgresqlInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.databases.postgresql.instances.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.databases.postgresql.instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesPostgresqlInstances<TError = unknown>(
  args: InferRequestType<typeof client.databases.postgresql.instances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.databases.postgresql.instances.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesPostgresqlInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.databases.postgresql.instances.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.databases.postgresql.instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDatabasesPostgresqlInstancesKey() {
  return ['databases', '/databases/postgresql/instances', 'POST'] as const
}

export function usePostDatabasesPostgresqlInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.databases.postgresql.instances.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.databases.postgresql.instances.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatabasesPostgresqlInstancesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.databases.postgresql.instances.$post> },
      ) => parseResponse(client.databases.postgresql.instances.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatabasesPostgresqlInstancesInstanceIdKey(
  args: InferRequestType<(typeof client.databases.postgresql.instances)[':instanceId']['$get']>,
) {
  return ['databases', '/databases/postgresql/instances/:instanceId', args] as const
}

export function useGetDatabasesPostgresqlInstancesInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client.databases.postgresql.instances)[':instanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.databases.postgresql.instances)[':instanceId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesPostgresqlInstancesInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.databases.postgresql.instances)[':instanceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.databases.postgresql.instances[':instanceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesPostgresqlInstancesInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client.databases.postgresql.instances)[':instanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.databases.postgresql.instances)[':instanceId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesPostgresqlInstancesInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.databases.postgresql.instances)[':instanceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.databases.postgresql.instances[':instanceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDatabasesPostgresqlInstancesInstanceIdKey() {
  return ['databases', '/databases/postgresql/instances/:instanceId', 'PUT'] as const
}

export function usePutDatabasesPostgresqlInstancesInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.databases.postgresql.instances)[':instanceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.databases.postgresql.instances)[':instanceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDatabasesPostgresqlInstancesInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.databases.postgresql.instances)[':instanceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.databases.postgresql.instances[':instanceId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDatabasesPostgresqlInstancesInstanceIdKey() {
  return ['databases', '/databases/postgresql/instances/:instanceId', 'DELETE'] as const
}

export function useDeleteDatabasesPostgresqlInstancesInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.databases.postgresql.instances)[':instanceId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.databases.postgresql.instances)[':instanceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDatabasesPostgresqlInstancesInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.databases.postgresql.instances)[':instanceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.databases.postgresql.instances[':instanceId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDatabasesPostgresqlInstancesInstanceIdBackupsKey(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$get']
  >,
) {
  return ['databases', '/databases/postgresql/instances/:instanceId/backups', args] as const
}

export function useGetDatabasesPostgresqlInstancesInstanceIdBackups<TError = unknown>(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesPostgresqlInstancesInstanceIdBackupsKey(args)
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
                (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.databases.postgresql.instances[':instanceId'].backups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesPostgresqlInstancesInstanceIdBackups<TError = unknown>(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesPostgresqlInstancesInstanceIdBackupsKey(args)
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
                (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.databases.postgresql.instances[':instanceId'].backups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDatabasesPostgresqlInstancesInstanceIdBackupsKey() {
  return ['databases', '/databases/postgresql/instances/:instanceId/backups', 'POST'] as const
}

export function usePostDatabasesPostgresqlInstancesInstanceIdBackups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatabasesPostgresqlInstancesInstanceIdBackupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$post']
          >
        },
      ) =>
        parseResponse(
          client.databases.postgresql.instances[':instanceId'].backups.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdKey(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$get']
  >,
) {
  return [
    'databases',
    '/databases/postgresql/instances/:instanceId/backups/:backupId',
    args,
  ] as const
}

export function useGetDatabasesPostgresqlInstancesInstanceIdBackupsBackupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdKey(args)
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
                (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.databases.postgresql.instances[':instanceId'].backups[':backupId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesPostgresqlInstancesInstanceIdBackupsBackupId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdKey(args)
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
                (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.databases.postgresql.instances[':instanceId'].backups[':backupId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdKey() {
  return [
    'databases',
    '/databases/postgresql/instances/:instanceId/backups/:backupId',
    'DELETE',
  ] as const
}

export function useDeleteDatabasesPostgresqlInstancesInstanceIdBackupsBackupId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.databases.postgresql.instances[':instanceId'].backups[':backupId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRestoreKey() {
  return [
    'databases',
    '/databases/postgresql/instances/:instanceId/backups/:backupId/restore',
    'POST',
  ] as const
}

export function usePostDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRestore<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRestoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
          >
        },
      ) =>
        parseResponse(
          client.databases.postgresql.instances[':instanceId'].backups[':backupId'].restore.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDatabasesPostgresqlInstancesInstanceIdCredentialsKey(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['$get']
  >,
) {
  return ['databases', '/databases/postgresql/instances/:instanceId/credentials', args] as const
}

export function useGetDatabasesPostgresqlInstancesInstanceIdCredentials<TError = unknown>(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesPostgresqlInstancesInstanceIdCredentialsKey(args)
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
                (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.databases.postgresql.instances[':instanceId'].credentials.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesPostgresqlInstancesInstanceIdCredentials<TError = unknown>(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesPostgresqlInstancesInstanceIdCredentialsKey(args)
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
                (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.databases.postgresql.instances[':instanceId'].credentials.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDatabasesPostgresqlInstancesInstanceIdCredentialsResetKey() {
  return [
    'databases',
    '/databases/postgresql/instances/:instanceId/credentials/reset',
    'POST',
  ] as const
}

export function usePostDatabasesPostgresqlInstancesInstanceIdCredentialsReset<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['reset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatabasesPostgresqlInstancesInstanceIdCredentialsResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['reset']['$post']
          >
        },
      ) =>
        parseResponse(
          client.databases.postgresql.instances[':instanceId'].credentials.reset.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDatabasesPostgresqlInstancesInstanceIdPatchKey() {
  return ['databases', '/databases/postgresql/instances/:instanceId/patch', 'POST'] as const
}

export function usePostDatabasesPostgresqlInstancesInstanceIdPatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.postgresql.instances)[':instanceId']['patch']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases.postgresql.instances)[':instanceId']['patch']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatabasesPostgresqlInstancesInstanceIdPatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.databases.postgresql.instances)[':instanceId']['patch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.databases.postgresql.instances[':instanceId'].patch.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDatabasesPostgresqlInstancesInstanceIdSslKey(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['ssl']['$get']
  >,
) {
  return ['databases', '/databases/postgresql/instances/:instanceId/ssl', args] as const
}

export function useGetDatabasesPostgresqlInstancesInstanceIdSsl<TError = unknown>(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['ssl']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases.postgresql.instances)[':instanceId']['ssl']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesPostgresqlInstancesInstanceIdSslKey(args)
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
                (typeof client.databases.postgresql.instances)[':instanceId']['ssl']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.databases.postgresql.instances[':instanceId'].ssl.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesPostgresqlInstancesInstanceIdSsl<TError = unknown>(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['ssl']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases.postgresql.instances)[':instanceId']['ssl']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesPostgresqlInstancesInstanceIdSslKey(args)
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
                (typeof client.databases.postgresql.instances)[':instanceId']['ssl']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.databases.postgresql.instances[':instanceId'].ssl.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDatabasesTypesKey(
  args: InferRequestType<typeof client.databases.types.$get>,
) {
  return ['databases', '/databases/types', args] as const
}

export function useGetDatabasesTypes<TError = unknown>(
  args: InferRequestType<typeof client.databases.types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.types.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDatabasesTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.databases.types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesTypes<TError = unknown>(
  args: InferRequestType<typeof client.databases.types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.types.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDatabasesTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.databases.types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDatabasesTypesTypeIdKey(
  args: InferRequestType<(typeof client.databases.types)[':typeId']['$get']>,
) {
  return ['databases', '/databases/types/:typeId', args] as const
}

export function useGetDatabasesTypesTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.databases.types)[':typeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.databases.types)[':typeId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesTypesTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.databases.types)[':typeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.databases.types[':typeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesTypesTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.databases.types)[':typeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.databases.types)[':typeId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabasesTypesTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.databases.types)[':typeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.databases.types[':typeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDomainsKey(args: InferRequestType<typeof client.domains.$get>) {
  return ['domains', '/domains', args] as const
}

export function useGetDomains<TError = unknown>(
  args: InferRequestType<typeof client.domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDomainsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.domains.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetDomains<TError = unknown>(
  args: InferRequestType<typeof client.domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDomainsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.domains.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostDomainsKey() {
  return ['domains', '/domains', 'POST'] as const
}

export function usePostDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.domains.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.domains.$post> }) =>
        parseResponse(client.domains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDomainsImportKey() {
  return ['domains', '/domains/import', 'POST'] as const
}

export function usePostDomainsImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.import.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.domains.import.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.domains.import.$post> }) =>
        parseResponse(client.domains.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDomainsDomainIdKey(
  args: InferRequestType<(typeof client.domains)[':domainId']['$get']>,
) {
  return ['domains', '/domains/:domainId', args] as const
}

export function useGetDomainsDomainId<TError = unknown>(
  args: InferRequestType<(typeof client.domains)[':domainId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDomainsDomainIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains[':domainId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsDomainId<TError = unknown>(
  args: InferRequestType<(typeof client.domains)[':domainId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDomainsDomainIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains[':domainId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDomainsDomainIdKey() {
  return ['domains', '/domains/:domainId', 'PUT'] as const
}

export function usePutDomainsDomainId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':domainId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDomainsDomainIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.domains)[':domainId']['$put']> },
      ) => parseResponse(client.domains[':domainId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDomainsDomainIdKey() {
  return ['domains', '/domains/:domainId', 'DELETE'] as const
}

export function useDeleteDomainsDomainId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':domainId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDomainsDomainIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.domains)[':domainId']['$delete']> },
      ) => parseResponse(client.domains[':domainId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDomainsDomainIdCloneKey() {
  return ['domains', '/domains/:domainId/clone', 'POST'] as const
}

export function usePostDomainsDomainIdClone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':domainId']['clone']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':domainId']['clone']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsDomainIdCloneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.domains)[':domainId']['clone']['$post']> },
      ) => parseResponse(client.domains[':domainId'].clone.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDomainsDomainIdRecordsKey(
  args: InferRequestType<(typeof client.domains)[':domainId']['records']['$get']>,
) {
  return ['domains', '/domains/:domainId/records', args] as const
}

export function useGetDomainsDomainIdRecords<TError = unknown>(
  args: InferRequestType<(typeof client.domains)[':domainId']['records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':domainId']['records']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDomainsDomainIdRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':domainId']['records']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains[':domainId'].records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsDomainIdRecords<TError = unknown>(
  args: InferRequestType<(typeof client.domains)[':domainId']['records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':domainId']['records']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDomainsDomainIdRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':domainId']['records']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains[':domainId'].records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDomainsDomainIdRecordsKey() {
  return ['domains', '/domains/:domainId/records', 'POST'] as const
}

export function usePostDomainsDomainIdRecords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':domainId']['records']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':domainId']['records']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsDomainIdRecordsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.domains)[':domainId']['records']['$post']> },
      ) => parseResponse(client.domains[':domainId'].records.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDomainsDomainIdRecordsRecordIdKey(
  args: InferRequestType<(typeof client.domains)[':domainId']['records'][':recordId']['$get']>,
) {
  return ['domains', '/domains/:domainId/records/:recordId', args] as const
}

export function useGetDomainsDomainIdRecordsRecordId<TError = unknown>(
  args: InferRequestType<(typeof client.domains)[':domainId']['records'][':recordId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.domains)[':domainId']['records'][':recordId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDomainsDomainIdRecordsRecordIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.domains)[':domainId']['records'][':recordId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.domains[':domainId'].records[':recordId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsDomainIdRecordsRecordId<TError = unknown>(
  args: InferRequestType<(typeof client.domains)[':domainId']['records'][':recordId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.domains)[':domainId']['records'][':recordId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDomainsDomainIdRecordsRecordIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.domains)[':domainId']['records'][':recordId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.domains[':domainId'].records[':recordId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDomainsDomainIdRecordsRecordIdKey() {
  return ['domains', '/domains/:domainId/records/:recordId', 'PUT'] as const
}

export function usePutDomainsDomainIdRecordsRecordId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':domainId']['records'][':recordId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':domainId']['records'][':recordId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDomainsDomainIdRecordsRecordIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.domains)[':domainId']['records'][':recordId']['$put']
          >
        },
      ) => parseResponse(client.domains[':domainId'].records[':recordId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDomainsDomainIdRecordsRecordIdKey() {
  return ['domains', '/domains/:domainId/records/:recordId', 'DELETE'] as const
}

export function useDeleteDomainsDomainIdRecordsRecordId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.domains)[':domainId']['records'][':recordId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':domainId']['records'][':recordId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDomainsDomainIdRecordsRecordIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.domains)[':domainId']['records'][':recordId']['$delete']
          >
        },
      ) =>
        parseResponse(client.domains[':domainId'].records[':recordId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDomainsDomainIdZoneFileKey(
  args: InferRequestType<(typeof client.domains)[':domainId']['zone-file']['$get']>,
) {
  return ['domains', '/domains/:domainId/zone-file', args] as const
}

export function useGetDomainsDomainIdZoneFile<TError = unknown>(
  args: InferRequestType<(typeof client.domains)[':domainId']['zone-file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':domainId']['zone-file']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDomainsDomainIdZoneFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':domainId']['zone-file']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains[':domainId']['zone-file'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsDomainIdZoneFile<TError = unknown>(
  args: InferRequestType<(typeof client.domains)[':domainId']['zone-file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':domainId']['zone-file']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDomainsDomainIdZoneFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':domainId']['zone-file']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains[':domainId']['zone-file'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetImagesKey(args: InferRequestType<typeof client.images.$get>) {
  return ['images', '/images', args] as const
}

export function useGetImages<TError = unknown>(
  args: InferRequestType<typeof client.images.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetImagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.images.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetImages<TError = unknown>(
  args: InferRequestType<typeof client.images.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetImagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.images.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostImagesKey() {
  return ['images', '/images', 'POST'] as const
}

export function usePostImages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.images.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostImagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.images.$post> }) =>
        parseResponse(client.images.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostImagesUploadKey() {
  return ['images', '/images/upload', 'POST'] as const
}

export function usePostImagesUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.upload.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.images.upload.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostImagesUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.images.upload.$post> }) =>
        parseResponse(client.images.upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetImagesImageIdKey(
  args: InferRequestType<(typeof client.images)[':imageId']['$get']>,
) {
  return ['images', '/images/:imageId', args] as const
}

export function useGetImagesImageId<TError = unknown>(
  args: InferRequestType<(typeof client.images)[':imageId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':imageId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetImagesImageIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':imageId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.images[':imageId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetImagesImageId<TError = unknown>(
  args: InferRequestType<(typeof client.images)[':imageId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':imageId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetImagesImageIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':imageId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.images[':imageId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutImagesImageIdKey() {
  return ['images', '/images/:imageId', 'PUT'] as const
}

export function usePutImagesImageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':imageId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.images)[':imageId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutImagesImageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.images)[':imageId']['$put']> },
      ) => parseResponse(client.images[':imageId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteImagesImageIdKey() {
  return ['images', '/images/:imageId', 'DELETE'] as const
}

export function useDeleteImagesImageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':imageId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.images)[':imageId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteImagesImageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.images)[':imageId']['$delete']> },
      ) => parseResponse(client.images[':imageId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLinodeInstancesKey(
  args: InferRequestType<typeof client.linode.instances.$get>,
) {
  return ['linode', '/linode/instances', args] as const
}

export function useGetLinodeInstances<TError = unknown>(
  args: InferRequestType<typeof client.linode.instances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.instances.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.instances.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.linode.instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinodeInstances<TError = unknown>(
  args: InferRequestType<typeof client.linode.instances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.instances.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.instances.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.linode.instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLinodeInstancesKey() {
  return ['linode', '/linode/instances', 'POST'] as const
}

export function usePostLinodeInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.instances.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.linode.instances.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinodeInstancesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.linode.instances.$post> }) =>
        parseResponse(client.linode.instances.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLinodeInstancesLinodeIdKey(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['$get']>,
) {
  return ['linode', '/linode/instances/:linodeId', args] as const
}

export function useGetLinodeInstancesLinodeId<TError = unknown>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.linode.instances[':linodeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinodeInstancesLinodeId<TError = unknown>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.linode.instances[':linodeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutLinodeInstancesLinodeIdKey() {
  return ['linode', '/linode/instances/:linodeId', 'PUT'] as const
}

export function usePutLinodeInstancesLinodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLinodeInstancesLinodeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.linode.instances)[':linodeId']['$put']> },
      ) => parseResponse(client.linode.instances[':linodeId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLinodeInstancesLinodeIdKey() {
  return ['linode', '/linode/instances/:linodeId', 'DELETE'] as const
}

export function useDeleteLinodeInstancesLinodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLinodeInstancesLinodeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.linode.instances)[':linodeId']['$delete']> },
      ) => parseResponse(client.linode.instances[':linodeId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLinodeInstancesLinodeIdBackupsKey(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['backups']['$get']>,
) {
  return ['linode', '/linode/instances/:linodeId/backups', args] as const
}

export function useGetLinodeInstancesLinodeIdBackups<TError = unknown>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['backups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['backups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdBackupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['backups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.linode.instances[':linodeId'].backups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinodeInstancesLinodeIdBackups<TError = unknown>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['backups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['backups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdBackupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['backups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.linode.instances[':linodeId'].backups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLinodeInstancesLinodeIdBackupsKey() {
  return ['linode', '/linode/instances/:linodeId/backups', 'POST'] as const
}

export function usePostLinodeInstancesLinodeIdBackups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['backups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['backups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinodeInstancesLinodeIdBackupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.linode.instances)[':linodeId']['backups']['$post']>
        },
      ) => parseResponse(client.linode.instances[':linodeId'].backups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLinodeInstancesLinodeIdBackupsCancelKey() {
  return ['linode', '/linode/instances/:linodeId/backups/cancel', 'POST'] as const
}

export function usePostLinodeInstancesLinodeIdBackupsCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.linode.instances)[':linodeId']['backups']['cancel']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['backups']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinodeInstancesLinodeIdBackupsCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.linode.instances)[':linodeId']['backups']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.linode.instances[':linodeId'].backups.cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLinodeInstancesLinodeIdBackupsEnableKey() {
  return ['linode', '/linode/instances/:linodeId/backups/enable', 'POST'] as const
}

export function usePostLinodeInstancesLinodeIdBackupsEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.linode.instances)[':linodeId']['backups']['enable']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['backups']['enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinodeInstancesLinodeIdBackupsEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.linode.instances)[':linodeId']['backups']['enable']['$post']
          >
        },
      ) =>
        parseResponse(
          client.linode.instances[':linodeId'].backups.enable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLinodeInstancesLinodeIdBackupsBackupIdKey(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['$get']
  >,
) {
  return ['linode', '/linode/instances/:linodeId/backups/:backupId', args] as const
}

export function useGetLinodeInstancesLinodeIdBackupsBackupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdBackupsBackupIdKey(args)
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
                (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.linode.instances[':linodeId'].backups[':backupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinodeInstancesLinodeIdBackupsBackupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdBackupsBackupIdKey(args)
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
                (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.linode.instances[':linodeId'].backups[':backupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostLinodeInstancesLinodeIdBackupsBackupIdRestoreKey() {
  return ['linode', '/linode/instances/:linodeId/backups/:backupId/restore', 'POST'] as const
}

export function usePostLinodeInstancesLinodeIdBackupsBackupIdRestore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['restore']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinodeInstancesLinodeIdBackupsBackupIdRestoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['restore']['$post']
          >
        },
      ) =>
        parseResponse(
          client.linode.instances[':linodeId'].backups[':backupId'].restore.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLinodeInstancesLinodeIdBootKey() {
  return ['linode', '/linode/instances/:linodeId/boot', 'POST'] as const
}

export function usePostLinodeInstancesLinodeIdBoot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['boot']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['boot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinodeInstancesLinodeIdBootKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.linode.instances)[':linodeId']['boot']['$post']>
        },
      ) => parseResponse(client.linode.instances[':linodeId'].boot.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLinodeInstancesLinodeIdCloneKey() {
  return ['linode', '/linode/instances/:linodeId/clone', 'POST'] as const
}

export function usePostLinodeInstancesLinodeIdClone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['clone']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['clone']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinodeInstancesLinodeIdCloneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.linode.instances)[':linodeId']['clone']['$post']>
        },
      ) => parseResponse(client.linode.instances[':linodeId'].clone.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLinodeInstancesLinodeIdConfigsKey(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['configs']['$get']>,
) {
  return ['linode', '/linode/instances/:linodeId/configs', args] as const
}

export function useGetLinodeInstancesLinodeIdConfigs<TError = unknown>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['configs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['configs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['configs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.linode.instances[':linodeId'].configs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinodeInstancesLinodeIdConfigs<TError = unknown>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['configs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['configs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['configs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.linode.instances[':linodeId'].configs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLinodeInstancesLinodeIdConfigsKey() {
  return ['linode', '/linode/instances/:linodeId/configs', 'POST'] as const
}

export function usePostLinodeInstancesLinodeIdConfigs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['configs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['configs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinodeInstancesLinodeIdConfigsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.linode.instances)[':linodeId']['configs']['$post']>
        },
      ) => parseResponse(client.linode.instances[':linodeId'].configs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLinodeInstancesLinodeIdConfigsConfigIdKey(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$get']
  >,
) {
  return ['linode', '/linode/instances/:linodeId/configs/:configId', args] as const
}

export function useGetLinodeInstancesLinodeIdConfigsConfigId<TError = unknown>(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdConfigsConfigIdKey(args)
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
                (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.linode.instances[':linodeId'].configs[':configId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinodeInstancesLinodeIdConfigsConfigId<TError = unknown>(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdConfigsConfigIdKey(args)
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
                (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.linode.instances[':linodeId'].configs[':configId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutLinodeInstancesLinodeIdConfigsConfigIdKey() {
  return ['linode', '/linode/instances/:linodeId/configs/:configId', 'PUT'] as const
}

export function usePutLinodeInstancesLinodeIdConfigsConfigId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['configs'][':configId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLinodeInstancesLinodeIdConfigsConfigIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.linode.instances[':linodeId'].configs[':configId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteLinodeInstancesLinodeIdConfigsConfigIdKey() {
  return ['linode', '/linode/instances/:linodeId/configs/:configId', 'DELETE'] as const
}

export function useDeleteLinodeInstancesLinodeIdConfigsConfigId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLinodeInstancesLinodeIdConfigsConfigIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.linode.instances[':linodeId'].configs[':configId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLinodeInstancesLinodeIdDisksKey(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['disks']['$get']>,
) {
  return ['linode', '/linode/instances/:linodeId/disks', args] as const
}

export function useGetLinodeInstancesLinodeIdDisks<TError = unknown>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['disks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['disks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdDisksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['disks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.linode.instances[':linodeId'].disks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinodeInstancesLinodeIdDisks<TError = unknown>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['disks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['disks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdDisksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['disks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.linode.instances[':linodeId'].disks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLinodeInstancesLinodeIdDisksKey() {
  return ['linode', '/linode/instances/:linodeId/disks', 'POST'] as const
}

export function usePostLinodeInstancesLinodeIdDisks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['disks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['disks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinodeInstancesLinodeIdDisksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.linode.instances)[':linodeId']['disks']['$post']>
        },
      ) => parseResponse(client.linode.instances[':linodeId'].disks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLinodeInstancesLinodeIdDisksDiskIdKey(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$get']>,
) {
  return ['linode', '/linode/instances/:linodeId/disks/:diskId', args] as const
}

export function useGetLinodeInstancesLinodeIdDisksDiskId<TError = unknown>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdDisksDiskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.linode.instances[':linodeId'].disks[':diskId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinodeInstancesLinodeIdDisksDiskId<TError = unknown>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdDisksDiskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.linode.instances[':linodeId'].disks[':diskId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutLinodeInstancesLinodeIdDisksDiskIdKey() {
  return ['linode', '/linode/instances/:linodeId/disks/:diskId', 'PUT'] as const
}

export function usePutLinodeInstancesLinodeIdDisksDiskId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLinodeInstancesLinodeIdDisksDiskIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.linode.instances[':linodeId'].disks[':diskId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteLinodeInstancesLinodeIdDisksDiskIdKey() {
  return ['linode', '/linode/instances/:linodeId/disks/:diskId', 'DELETE'] as const
}

export function useDeleteLinodeInstancesLinodeIdDisksDiskId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLinodeInstancesLinodeIdDisksDiskIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.linode.instances[':linodeId'].disks[':diskId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLinodeInstancesLinodeIdDisksDiskIdCloneKey() {
  return ['linode', '/linode/instances/:linodeId/disks/:diskId/clone', 'POST'] as const
}

export function usePostLinodeInstancesLinodeIdDisksDiskIdClone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['clone']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['clone']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinodeInstancesLinodeIdDisksDiskIdCloneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['clone']['$post']
          >
        },
      ) =>
        parseResponse(
          client.linode.instances[':linodeId'].disks[':diskId'].clone.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLinodeInstancesLinodeIdDisksDiskIdPasswordKey() {
  return ['linode', '/linode/instances/:linodeId/disks/:diskId/password', 'POST'] as const
}

export function usePostLinodeInstancesLinodeIdDisksDiskIdPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['password']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['password']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinodeInstancesLinodeIdDisksDiskIdPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['password']['$post']
          >
        },
      ) =>
        parseResponse(
          client.linode.instances[':linodeId'].disks[':diskId'].password.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLinodeInstancesLinodeIdDisksDiskIdResizeKey() {
  return ['linode', '/linode/instances/:linodeId/disks/:diskId/resize', 'POST'] as const
}

export function usePostLinodeInstancesLinodeIdDisksDiskIdResize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['resize']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['resize']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinodeInstancesLinodeIdDisksDiskIdResizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['resize']['$post']
          >
        },
      ) =>
        parseResponse(
          client.linode.instances[':linodeId'].disks[':diskId'].resize.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLinodeInstancesLinodeIdFirewallsKey(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['firewalls']['$get']>,
) {
  return ['linode', '/linode/instances/:linodeId/firewalls', args] as const
}

export function useGetLinodeInstancesLinodeIdFirewalls<TError = unknown>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['firewalls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['firewalls']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdFirewallsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['firewalls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.linode.instances[':linodeId'].firewalls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinodeInstancesLinodeIdFirewalls<TError = unknown>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['firewalls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['firewalls']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdFirewallsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['firewalls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.linode.instances[':linodeId'].firewalls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLinodeInstancesLinodeIdIpsKey(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['ips']['$get']>,
) {
  return ['linode', '/linode/instances/:linodeId/ips', args] as const
}

export function useGetLinodeInstancesLinodeIdIps<TError = unknown>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['ips']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['ips']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdIpsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['ips']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.linode.instances[':linodeId'].ips.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinodeInstancesLinodeIdIps<TError = unknown>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['ips']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['ips']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdIpsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['ips']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.linode.instances[':linodeId'].ips.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLinodeInstancesLinodeIdIpsKey() {
  return ['linode', '/linode/instances/:linodeId/ips', 'POST'] as const
}

export function usePostLinodeInstancesLinodeIdIps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['ips']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['ips']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinodeInstancesLinodeIdIpsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.linode.instances)[':linodeId']['ips']['$post']> },
      ) => parseResponse(client.linode.instances[':linodeId'].ips.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLinodeInstancesLinodeIdIpsAddressKey(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$get']>,
) {
  return ['linode', '/linode/instances/:linodeId/ips/:address', args] as const
}

export function useGetLinodeInstancesLinodeIdIpsAddress<TError = unknown>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdIpsAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.linode.instances[':linodeId'].ips[':address'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinodeInstancesLinodeIdIpsAddress<TError = unknown>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdIpsAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.linode.instances[':linodeId'].ips[':address'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutLinodeInstancesLinodeIdIpsAddressKey() {
  return ['linode', '/linode/instances/:linodeId/ips/:address', 'PUT'] as const
}

export function usePutLinodeInstancesLinodeIdIpsAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLinodeInstancesLinodeIdIpsAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.linode.instances)[':linodeId']['ips'][':address']['$put']
          >
        },
      ) =>
        parseResponse(
          client.linode.instances[':linodeId'].ips[':address'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteLinodeInstancesLinodeIdIpsAddressKey() {
  return ['linode', '/linode/instances/:linodeId/ips/:address', 'DELETE'] as const
}

export function useDeleteLinodeInstancesLinodeIdIpsAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLinodeInstancesLinodeIdIpsAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.linode.instances)[':linodeId']['ips'][':address']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.linode.instances[':linodeId'].ips[':address'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLinodeInstancesLinodeIdMigrateKey() {
  return ['linode', '/linode/instances/:linodeId/migrate', 'POST'] as const
}

export function usePostLinodeInstancesLinodeIdMigrate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['migrate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['migrate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinodeInstancesLinodeIdMigrateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.linode.instances)[':linodeId']['migrate']['$post']>
        },
      ) => parseResponse(client.linode.instances[':linodeId'].migrate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLinodeInstancesLinodeIdMutateKey() {
  return ['linode', '/linode/instances/:linodeId/mutate', 'POST'] as const
}

export function usePostLinodeInstancesLinodeIdMutate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['mutate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['mutate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinodeInstancesLinodeIdMutateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.linode.instances)[':linodeId']['mutate']['$post']>
        },
      ) => parseResponse(client.linode.instances[':linodeId'].mutate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLinodeInstancesLinodeIdNodebalancersKey(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['nodebalancers']['$get']>,
) {
  return ['linode', '/linode/instances/:linodeId/nodebalancers', args] as const
}

export function useGetLinodeInstancesLinodeIdNodebalancers<TError = unknown>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['nodebalancers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.linode.instances)[':linodeId']['nodebalancers']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdNodebalancersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.linode.instances)[':linodeId']['nodebalancers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.linode.instances[':linodeId'].nodebalancers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinodeInstancesLinodeIdNodebalancers<TError = unknown>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['nodebalancers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.linode.instances)[':linodeId']['nodebalancers']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdNodebalancersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.linode.instances)[':linodeId']['nodebalancers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.linode.instances[':linodeId'].nodebalancers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLinodeInstancesLinodeIdPasswordKey() {
  return ['linode', '/linode/instances/:linodeId/password', 'POST'] as const
}

export function usePostLinodeInstancesLinodeIdPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['password']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['password']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinodeInstancesLinodeIdPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.linode.instances)[':linodeId']['password']['$post']>
        },
      ) => parseResponse(client.linode.instances[':linodeId'].password.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLinodeInstancesLinodeIdRebootKey() {
  return ['linode', '/linode/instances/:linodeId/reboot', 'POST'] as const
}

export function usePostLinodeInstancesLinodeIdReboot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['reboot']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['reboot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinodeInstancesLinodeIdRebootKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.linode.instances)[':linodeId']['reboot']['$post']>
        },
      ) => parseResponse(client.linode.instances[':linodeId'].reboot.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLinodeInstancesLinodeIdRebuildKey() {
  return ['linode', '/linode/instances/:linodeId/rebuild', 'POST'] as const
}

export function usePostLinodeInstancesLinodeIdRebuild<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['rebuild']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['rebuild']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinodeInstancesLinodeIdRebuildKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.linode.instances)[':linodeId']['rebuild']['$post']>
        },
      ) => parseResponse(client.linode.instances[':linodeId'].rebuild.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLinodeInstancesLinodeIdRescueKey() {
  return ['linode', '/linode/instances/:linodeId/rescue', 'POST'] as const
}

export function usePostLinodeInstancesLinodeIdRescue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['rescue']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['rescue']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinodeInstancesLinodeIdRescueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.linode.instances)[':linodeId']['rescue']['$post']>
        },
      ) => parseResponse(client.linode.instances[':linodeId'].rescue.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLinodeInstancesLinodeIdResizeKey() {
  return ['linode', '/linode/instances/:linodeId/resize', 'POST'] as const
}

export function usePostLinodeInstancesLinodeIdResize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['resize']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['resize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinodeInstancesLinodeIdResizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.linode.instances)[':linodeId']['resize']['$post']>
        },
      ) => parseResponse(client.linode.instances[':linodeId'].resize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLinodeInstancesLinodeIdShutdownKey() {
  return ['linode', '/linode/instances/:linodeId/shutdown', 'POST'] as const
}

export function usePostLinodeInstancesLinodeIdShutdown<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['shutdown']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['shutdown']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinodeInstancesLinodeIdShutdownKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.linode.instances)[':linodeId']['shutdown']['$post']>
        },
      ) => parseResponse(client.linode.instances[':linodeId'].shutdown.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLinodeInstancesLinodeIdStatsKey(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['stats']['$get']>,
) {
  return ['linode', '/linode/instances/:linodeId/stats', args] as const
}

export function useGetLinodeInstancesLinodeIdStats<TError = unknown>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['stats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['stats']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['stats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.linode.instances[':linodeId'].stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinodeInstancesLinodeIdStats<TError = unknown>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['stats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['stats']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['stats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.linode.instances[':linodeId'].stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLinodeInstancesLinodeIdStatsYearMonthKey(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['stats'][':year'][':month']['$get']
  >,
) {
  return ['linode', '/linode/instances/:linodeId/stats/:year/:month', args] as const
}

export function useGetLinodeInstancesLinodeIdStatsYearMonth<TError = unknown>(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['stats'][':year'][':month']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.linode.instances)[':linodeId']['stats'][':year'][':month']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdStatsYearMonthKey(args)
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
                (typeof client.linode.instances)[':linodeId']['stats'][':year'][':month']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.linode.instances[':linodeId'].stats[':year'][':month'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinodeInstancesLinodeIdStatsYearMonth<TError = unknown>(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['stats'][':year'][':month']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.linode.instances)[':linodeId']['stats'][':year'][':month']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdStatsYearMonthKey(args)
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
                (typeof client.linode.instances)[':linodeId']['stats'][':year'][':month']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.linode.instances[':linodeId'].stats[':year'][':month'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLinodeInstancesLinodeIdTransferKey(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['transfer']['$get']>,
) {
  return ['linode', '/linode/instances/:linodeId/transfer', args] as const
}

export function useGetLinodeInstancesLinodeIdTransfer<TError = unknown>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['transfer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['transfer']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdTransferKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['transfer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.linode.instances[':linodeId'].transfer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinodeInstancesLinodeIdTransfer<TError = unknown>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['transfer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['transfer']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdTransferKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['transfer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.linode.instances[':linodeId'].transfer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLinodeInstancesLinodeIdTransferYearMonthKey(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['transfer'][':year'][':month']['$get']
  >,
) {
  return ['linode', '/linode/instances/:linodeId/transfer/:year/:month', args] as const
}

export function useGetLinodeInstancesLinodeIdTransferYearMonth<TError = unknown>(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['transfer'][':year'][':month']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.linode.instances)[':linodeId']['transfer'][':year'][':month']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdTransferYearMonthKey(args)
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
                (typeof client.linode.instances)[':linodeId']['transfer'][':year'][':month']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.linode.instances[':linodeId'].transfer[':year'][':month'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinodeInstancesLinodeIdTransferYearMonth<TError = unknown>(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['transfer'][':year'][':month']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.linode.instances)[':linodeId']['transfer'][':year'][':month']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdTransferYearMonthKey(args)
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
                (typeof client.linode.instances)[':linodeId']['transfer'][':year'][':month']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.linode.instances[':linodeId'].transfer[':year'][':month'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLinodeInstancesLinodeIdVolumesKey(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['volumes']['$get']>,
) {
  return ['linode', '/linode/instances/:linodeId/volumes', args] as const
}

export function useGetLinodeInstancesLinodeIdVolumes<TError = unknown>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['volumes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['volumes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdVolumesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['volumes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.linode.instances[':linodeId'].volumes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinodeInstancesLinodeIdVolumes<TError = unknown>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['volumes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['volumes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeInstancesLinodeIdVolumesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['volumes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.linode.instances[':linodeId'].volumes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLinodeKernelsKey(args: InferRequestType<typeof client.linode.kernels.$get>) {
  return ['linode', '/linode/kernels', args] as const
}

export function useGetLinodeKernels<TError = unknown>(
  args: InferRequestType<typeof client.linode.kernels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.kernels.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLinodeKernelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.kernels.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.linode.kernels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinodeKernels<TError = unknown>(
  args: InferRequestType<typeof client.linode.kernels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.kernels.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLinodeKernelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.kernels.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.linode.kernels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLinodeKernelsKernelIdKey(
  args: InferRequestType<(typeof client.linode.kernels)[':kernelId']['$get']>,
) {
  return ['linode', '/linode/kernels/:kernelId', args] as const
}

export function useGetLinodeKernelsKernelId<TError = unknown>(
  args: InferRequestType<(typeof client.linode.kernels)[':kernelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.kernels)[':kernelId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeKernelsKernelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.kernels)[':kernelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.linode.kernels[':kernelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinodeKernelsKernelId<TError = unknown>(
  args: InferRequestType<(typeof client.linode.kernels)[':kernelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.kernels)[':kernelId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeKernelsKernelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.kernels)[':kernelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.linode.kernels[':kernelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLinodeStackscriptsKey(
  args: InferRequestType<typeof client.linode.stackscripts.$get>,
) {
  return ['linode', '/linode/stackscripts', args] as const
}

export function useGetLinodeStackscripts<TError = unknown>(
  args: InferRequestType<typeof client.linode.stackscripts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.linode.stackscripts.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeStackscriptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.linode.stackscripts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.linode.stackscripts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinodeStackscripts<TError = unknown>(
  args: InferRequestType<typeof client.linode.stackscripts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.linode.stackscripts.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeStackscriptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.linode.stackscripts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.linode.stackscripts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLinodeStackscriptsKey() {
  return ['linode', '/linode/stackscripts', 'POST'] as const
}

export function usePostLinodeStackscripts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.stackscripts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.linode.stackscripts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinodeStackscriptsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.linode.stackscripts.$post> }) =>
        parseResponse(client.linode.stackscripts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLinodeStackscriptsStackscriptIdKey(
  args: InferRequestType<(typeof client.linode.stackscripts)[':stackscriptId']['$get']>,
) {
  return ['linode', '/linode/stackscripts/:stackscriptId', args] as const
}

export function useGetLinodeStackscriptsStackscriptId<TError = unknown>(
  args: InferRequestType<(typeof client.linode.stackscripts)[':stackscriptId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.stackscripts)[':stackscriptId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeStackscriptsStackscriptIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.stackscripts)[':stackscriptId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.linode.stackscripts[':stackscriptId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinodeStackscriptsStackscriptId<TError = unknown>(
  args: InferRequestType<(typeof client.linode.stackscripts)[':stackscriptId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.stackscripts)[':stackscriptId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeStackscriptsStackscriptIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.linode.stackscripts)[':stackscriptId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.linode.stackscripts[':stackscriptId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutLinodeStackscriptsStackscriptIdKey() {
  return ['linode', '/linode/stackscripts/:stackscriptId', 'PUT'] as const
}

export function usePutLinodeStackscriptsStackscriptId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.stackscripts)[':stackscriptId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.linode.stackscripts)[':stackscriptId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLinodeStackscriptsStackscriptIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.linode.stackscripts)[':stackscriptId']['$put']> },
      ) => parseResponse(client.linode.stackscripts[':stackscriptId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLinodeStackscriptsStackscriptIdKey() {
  return ['linode', '/linode/stackscripts/:stackscriptId', 'DELETE'] as const
}

export function useDeleteLinodeStackscriptsStackscriptId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.stackscripts)[':stackscriptId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.linode.stackscripts)[':stackscriptId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLinodeStackscriptsStackscriptIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.linode.stackscripts)[':stackscriptId']['$delete']>
        },
      ) => parseResponse(client.linode.stackscripts[':stackscriptId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLinodeTypesKey() {
  return ['linode', '/linode/types'] as const
}

export function useGetLinodeTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.types.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLinodeTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.linode.types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinodeTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.types.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLinodeTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.linode.types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLinodeTypesTypeIdKey(
  args: InferRequestType<(typeof client.linode.types)[':typeId']['$get']>,
) {
  return ['linode', '/linode/types/:typeId', args] as const
}

export function useGetLinodeTypesTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.linode.types)[':typeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.linode.types)[':typeId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeTypesTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.linode.types)[':typeId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.linode.types[':typeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinodeTypesTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.linode.types)[':typeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.linode.types)[':typeId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinodeTypesTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.linode.types)[':typeId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.linode.types[':typeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLkeClustersKey() {
  return ['lke', '/lke/clusters'] as const
}

export function useGetLkeClusters<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.clusters.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLkeClustersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.clusters.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lke.clusters.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLkeClusters<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.clusters.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLkeClustersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.clusters.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lke.clusters.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLkeClustersKey() {
  return ['lke', '/lke/clusters', 'POST'] as const
}

export function usePostLkeClusters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.clusters.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.lke.clusters.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLkeClustersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.lke.clusters.$post> }) =>
        parseResponse(client.lke.clusters.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLkeClustersClusterIdKey(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['$get']>,
) {
  return ['lke', '/lke/clusters/:clusterId', args] as const
}

export function useGetLkeClustersClusterId<TError = unknown>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLkeClustersClusterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lke.clusters[':clusterId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLkeClustersClusterId<TError = unknown>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLkeClustersClusterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lke.clusters[':clusterId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutLkeClustersClusterIdKey() {
  return ['lke', '/lke/clusters/:clusterId', 'PUT'] as const
}

export function usePutLkeClustersClusterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLkeClustersClusterIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.lke.clusters)[':clusterId']['$put']> },
      ) => parseResponse(client.lke.clusters[':clusterId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLkeClustersClusterIdKey() {
  return ['lke', '/lke/clusters/:clusterId', 'DELETE'] as const
}

export function useDeleteLkeClustersClusterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLkeClustersClusterIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.lke.clusters)[':clusterId']['$delete']> },
      ) => parseResponse(client.lke.clusters[':clusterId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLkeClustersClusterIdApiEndpointsKey(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['api-endpoints']['$get']>,
) {
  return ['lke', '/lke/clusters/:clusterId/api-endpoints', args] as const
}

export function useGetLkeClustersClusterIdApiEndpoints<TError = unknown>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['api-endpoints']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['api-endpoints']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLkeClustersClusterIdApiEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['api-endpoints']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lke.clusters[':clusterId']['api-endpoints'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLkeClustersClusterIdApiEndpoints<TError = unknown>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['api-endpoints']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['api-endpoints']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLkeClustersClusterIdApiEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['api-endpoints']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lke.clusters[':clusterId']['api-endpoints'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLkeClustersClusterIdDashboardKey(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['dashboard']['$get']>,
) {
  return ['lke', '/lke/clusters/:clusterId/dashboard', args] as const
}

export function useGetLkeClustersClusterIdDashboard<TError = unknown>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['dashboard']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['dashboard']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLkeClustersClusterIdDashboardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['dashboard']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lke.clusters[':clusterId'].dashboard.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLkeClustersClusterIdDashboard<TError = unknown>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['dashboard']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['dashboard']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLkeClustersClusterIdDashboardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['dashboard']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lke.clusters[':clusterId'].dashboard.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLkeClustersClusterIdKubeconfigKey(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$get']>,
) {
  return ['lke', '/lke/clusters/:clusterId/kubeconfig', args] as const
}

export function useGetLkeClustersClusterIdKubeconfig<TError = unknown>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLkeClustersClusterIdKubeconfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lke.clusters[':clusterId'].kubeconfig.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLkeClustersClusterIdKubeconfig<TError = unknown>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLkeClustersClusterIdKubeconfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lke.clusters[':clusterId'].kubeconfig.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteLkeClustersClusterIdKubeconfigKey() {
  return ['lke', '/lke/clusters/:clusterId/kubeconfig', 'DELETE'] as const
}

export function useDeleteLkeClustersClusterIdKubeconfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLkeClustersClusterIdKubeconfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$delete']>
        },
      ) => parseResponse(client.lke.clusters[':clusterId'].kubeconfig.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLkeClustersClusterIdNodesNodeIdKey(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$get']>,
) {
  return ['lke', '/lke/clusters/:clusterId/nodes/:nodeId', args] as const
}

export function useGetLkeClustersClusterIdNodesNodeId<TError = unknown>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLkeClustersClusterIdNodesNodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lke.clusters[':clusterId'].nodes[':nodeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLkeClustersClusterIdNodesNodeId<TError = unknown>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLkeClustersClusterIdNodesNodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lke.clusters[':clusterId'].nodes[':nodeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteLkeClustersClusterIdNodesNodeIdKey() {
  return ['lke', '/lke/clusters/:clusterId/nodes/:nodeId', 'DELETE'] as const
}

export function useDeleteLkeClustersClusterIdNodesNodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLkeClustersClusterIdNodesNodeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.lke.clusters[':clusterId'].nodes[':nodeId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLkeClustersClusterIdNodesNodeIdRecycleKey() {
  return ['lke', '/lke/clusters/:clusterId/nodes/:nodeId/recycle', 'POST'] as const
}

export function usePostLkeClustersClusterIdNodesNodeIdRecycle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['recycle']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['recycle']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLkeClustersClusterIdNodesNodeIdRecycleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['recycle']['$post']
          >
        },
      ) =>
        parseResponse(
          client.lke.clusters[':clusterId'].nodes[':nodeId'].recycle.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLkeClustersClusterIdPoolsKey(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools']['$get']>,
) {
  return ['lke', '/lke/clusters/:clusterId/pools', args] as const
}

export function useGetLkeClustersClusterIdPools<TError = unknown>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['pools']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLkeClustersClusterIdPoolsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['pools']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lke.clusters[':clusterId'].pools.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLkeClustersClusterIdPools<TError = unknown>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['pools']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLkeClustersClusterIdPoolsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['pools']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lke.clusters[':clusterId'].pools.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLkeClustersClusterIdPoolsKey() {
  return ['lke', '/lke/clusters/:clusterId/pools', 'POST'] as const
}

export function usePostLkeClustersClusterIdPools<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['pools']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLkeClustersClusterIdPoolsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools']['$post']> },
      ) => parseResponse(client.lke.clusters[':clusterId'].pools.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLkeClustersClusterIdPoolsPoolIdKey(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$get']>,
) {
  return ['lke', '/lke/clusters/:clusterId/pools/:poolId', args] as const
}

export function useGetLkeClustersClusterIdPoolsPoolId<TError = unknown>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLkeClustersClusterIdPoolsPoolIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lke.clusters[':clusterId'].pools[':poolId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLkeClustersClusterIdPoolsPoolId<TError = unknown>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLkeClustersClusterIdPoolsPoolIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lke.clusters[':clusterId'].pools[':poolId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutLkeClustersClusterIdPoolsPoolIdKey() {
  return ['lke', '/lke/clusters/:clusterId/pools/:poolId', 'PUT'] as const
}

export function usePutLkeClustersClusterIdPoolsPoolId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLkeClustersClusterIdPoolsPoolIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$put']
          >
        },
      ) =>
        parseResponse(client.lke.clusters[':clusterId'].pools[':poolId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLkeClustersClusterIdPoolsPoolIdKey() {
  return ['lke', '/lke/clusters/:clusterId/pools/:poolId', 'DELETE'] as const
}

export function useDeleteLkeClustersClusterIdPoolsPoolId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLkeClustersClusterIdPoolsPoolIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.lke.clusters[':clusterId'].pools[':poolId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLkeClustersClusterIdPoolsPoolIdRecycleKey() {
  return ['lke', '/lke/clusters/:clusterId/pools/:poolId/recycle', 'POST'] as const
}

export function usePostLkeClustersClusterIdPoolsPoolIdRecycle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['recycle']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['recycle']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLkeClustersClusterIdPoolsPoolIdRecycleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['recycle']['$post']
          >
        },
      ) =>
        parseResponse(
          client.lke.clusters[':clusterId'].pools[':poolId'].recycle.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLkeClustersClusterIdRecycleKey() {
  return ['lke', '/lke/clusters/:clusterId/recycle', 'POST'] as const
}

export function usePostLkeClustersClusterIdRecycle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['recycle']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['recycle']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLkeClustersClusterIdRecycleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.lke.clusters)[':clusterId']['recycle']['$post']>
        },
      ) => parseResponse(client.lke.clusters[':clusterId'].recycle.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLkeClustersClusterIdRegenerateKey() {
  return ['lke', '/lke/clusters/:clusterId/regenerate', 'POST'] as const
}

export function usePostLkeClustersClusterIdRegenerate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['regenerate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['regenerate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLkeClustersClusterIdRegenerateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.lke.clusters)[':clusterId']['regenerate']['$post']>
        },
      ) => parseResponse(client.lke.clusters[':clusterId'].regenerate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLkeClustersClusterIdServicetokenKey() {
  return ['lke', '/lke/clusters/:clusterId/servicetoken', 'DELETE'] as const
}

export function useDeleteLkeClustersClusterIdServicetoken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['servicetoken']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['servicetoken']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLkeClustersClusterIdServicetokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.lke.clusters)[':clusterId']['servicetoken']['$delete']
          >
        },
      ) =>
        parseResponse(client.lke.clusters[':clusterId'].servicetoken.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLkeVersionsKey() {
  return ['lke', '/lke/versions'] as const
}

export function useGetLkeVersions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.versions.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLkeVersionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.versions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lke.versions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLkeVersions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.versions.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLkeVersionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.versions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lke.versions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLkeVersionsVersionKey(
  args: InferRequestType<(typeof client.lke.versions)[':version']['$get']>,
) {
  return ['lke', '/lke/versions/:version', args] as const
}

export function useGetLkeVersionsVersion<TError = unknown>(
  args: InferRequestType<(typeof client.lke.versions)[':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lke.versions)[':version']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLkeVersionsVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lke.versions)[':version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lke.versions[':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLkeVersionsVersion<TError = unknown>(
  args: InferRequestType<(typeof client.lke.versions)[':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lke.versions)[':version']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLkeVersionsVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lke.versions)[':version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lke.versions[':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLongviewClientsKey(
  args: InferRequestType<typeof client.longview.clients.$get>,
) {
  return ['longview', '/longview/clients', args] as const
}

export function useGetLongviewClients<TError = unknown>(
  args: InferRequestType<typeof client.longview.clients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.clients.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLongviewClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.clients.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.longview.clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLongviewClients<TError = unknown>(
  args: InferRequestType<typeof client.longview.clients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.clients.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLongviewClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.clients.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.longview.clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLongviewClientsKey() {
  return ['longview', '/longview/clients', 'POST'] as const
}

export function usePostLongviewClients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.clients.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.longview.clients.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLongviewClientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.longview.clients.$post> }) =>
        parseResponse(client.longview.clients.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLongviewClientsClientIdKey(
  args: InferRequestType<(typeof client.longview.clients)[':clientId']['$get']>,
) {
  return ['longview', '/longview/clients/:clientId', args] as const
}

export function useGetLongviewClientsClientId<TError = unknown>(
  args: InferRequestType<(typeof client.longview.clients)[':clientId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.longview.clients)[':clientId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLongviewClientsClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.longview.clients)[':clientId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.longview.clients[':clientId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLongviewClientsClientId<TError = unknown>(
  args: InferRequestType<(typeof client.longview.clients)[':clientId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.longview.clients)[':clientId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLongviewClientsClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.longview.clients)[':clientId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.longview.clients[':clientId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutLongviewClientsClientIdKey() {
  return ['longview', '/longview/clients/:clientId', 'PUT'] as const
}

export function usePutLongviewClientsClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.longview.clients)[':clientId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.longview.clients)[':clientId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLongviewClientsClientIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.longview.clients)[':clientId']['$put']> },
      ) => parseResponse(client.longview.clients[':clientId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLongviewClientsClientIdKey() {
  return ['longview', '/longview/clients/:clientId', 'DELETE'] as const
}

export function useDeleteLongviewClientsClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.longview.clients)[':clientId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.longview.clients)[':clientId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLongviewClientsClientIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.longview.clients)[':clientId']['$delete']> },
      ) => parseResponse(client.longview.clients[':clientId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLongviewPlanKey() {
  return ['longview', '/longview/plan'] as const
}

export function useGetLongviewPlan<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.plan.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLongviewPlanKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.plan.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.longview.plan.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLongviewPlan<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.plan.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLongviewPlanKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.plan.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.longview.plan.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutLongviewPlanKey() {
  return ['longview', '/longview/plan', 'PUT'] as const
}

export function usePutLongviewPlan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.plan.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.longview.plan.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLongviewPlanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.longview.plan.$put> }) =>
        parseResponse(client.longview.plan.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLongviewSubscriptionsKey(
  args: InferRequestType<typeof client.longview.subscriptions.$get>,
) {
  return ['longview', '/longview/subscriptions', args] as const
}

export function useGetLongviewSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.longview.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.longview.subscriptions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLongviewSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.longview.subscriptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.longview.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLongviewSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.longview.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.longview.subscriptions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLongviewSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.longview.subscriptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.longview.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLongviewSubscriptionsSubscriptionIdKey(
  args: InferRequestType<(typeof client.longview.subscriptions)[':subscriptionId']['$get']>,
) {
  return ['longview', '/longview/subscriptions/:subscriptionId', args] as const
}

export function useGetLongviewSubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client.longview.subscriptions)[':subscriptionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.longview.subscriptions)[':subscriptionId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLongviewSubscriptionsSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.longview.subscriptions)[':subscriptionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.longview.subscriptions[':subscriptionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLongviewSubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client.longview.subscriptions)[':subscriptionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.longview.subscriptions)[':subscriptionId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLongviewSubscriptionsSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.longview.subscriptions)[':subscriptionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.longview.subscriptions[':subscriptionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetManagedContactsKey(
  args: InferRequestType<typeof client.managed.contacts.$get>,
) {
  return ['managed', '/managed/contacts', args] as const
}

export function useGetManagedContacts<TError = unknown>(
  args: InferRequestType<typeof client.managed.contacts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.contacts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetManagedContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.contacts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.managed.contacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagedContacts<TError = unknown>(
  args: InferRequestType<typeof client.managed.contacts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.contacts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetManagedContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.contacts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.managed.contacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostManagedContactsKey() {
  return ['managed', '/managed/contacts', 'POST'] as const
}

export function usePostManagedContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.contacts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.managed.contacts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostManagedContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.managed.contacts.$post> }) =>
        parseResponse(client.managed.contacts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetManagedContactsContactIdKey(
  args: InferRequestType<(typeof client.managed.contacts)[':contactId']['$get']>,
) {
  return ['managed', '/managed/contacts/:contactId', args] as const
}

export function useGetManagedContactsContactId<TError = unknown>(
  args: InferRequestType<(typeof client.managed.contacts)[':contactId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.managed.contacts)[':contactId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetManagedContactsContactIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.managed.contacts)[':contactId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.managed.contacts[':contactId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagedContactsContactId<TError = unknown>(
  args: InferRequestType<(typeof client.managed.contacts)[':contactId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.managed.contacts)[':contactId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetManagedContactsContactIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.managed.contacts)[':contactId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.managed.contacts[':contactId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutManagedContactsContactIdKey() {
  return ['managed', '/managed/contacts/:contactId', 'PUT'] as const
}

export function usePutManagedContactsContactId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed.contacts)[':contactId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.managed.contacts)[':contactId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutManagedContactsContactIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.managed.contacts)[':contactId']['$put']> },
      ) => parseResponse(client.managed.contacts[':contactId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteManagedContactsContactIdKey() {
  return ['managed', '/managed/contacts/:contactId', 'DELETE'] as const
}

export function useDeleteManagedContactsContactId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed.contacts)[':contactId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.managed.contacts)[':contactId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteManagedContactsContactIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.managed.contacts)[':contactId']['$delete']> },
      ) => parseResponse(client.managed.contacts[':contactId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetManagedCredentialsKey(
  args: InferRequestType<typeof client.managed.credentials.$get>,
) {
  return ['managed', '/managed/credentials', args] as const
}

export function useGetManagedCredentials<TError = unknown>(
  args: InferRequestType<typeof client.managed.credentials.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetManagedCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.managed.credentials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagedCredentials<TError = unknown>(
  args: InferRequestType<typeof client.managed.credentials.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetManagedCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.managed.credentials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostManagedCredentialsKey() {
  return ['managed', '/managed/credentials', 'POST'] as const
}

export function usePostManagedCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.managed.credentials.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostManagedCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.managed.credentials.$post> }) =>
        parseResponse(client.managed.credentials.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetManagedCredentialsSshkeyKey() {
  return ['managed', '/managed/credentials/sshkey'] as const
}

export function useGetManagedCredentialsSshkey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.sshkey.$get>>>
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
        ? getGetManagedCredentialsSshkeyKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.sshkey.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.managed.credentials.sshkey.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagedCredentialsSshkey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.sshkey.$get>>>
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
        ? getGetManagedCredentialsSshkeyKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.sshkey.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.managed.credentials.sshkey.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetManagedCredentialsCredentialIdKey(
  args: InferRequestType<(typeof client.managed.credentials)[':credentialId']['$get']>,
) {
  return ['managed', '/managed/credentials/:credentialId', args] as const
}

export function useGetManagedCredentialsCredentialId<TError = unknown>(
  args: InferRequestType<(typeof client.managed.credentials)[':credentialId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.managed.credentials)[':credentialId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetManagedCredentialsCredentialIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.managed.credentials)[':credentialId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.managed.credentials[':credentialId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagedCredentialsCredentialId<TError = unknown>(
  args: InferRequestType<(typeof client.managed.credentials)[':credentialId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.managed.credentials)[':credentialId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetManagedCredentialsCredentialIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.managed.credentials)[':credentialId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.managed.credentials[':credentialId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutManagedCredentialsCredentialIdKey() {
  return ['managed', '/managed/credentials/:credentialId', 'PUT'] as const
}

export function usePutManagedCredentialsCredentialId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed.credentials)[':credentialId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.managed.credentials)[':credentialId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutManagedCredentialsCredentialIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.managed.credentials)[':credentialId']['$put']> },
      ) => parseResponse(client.managed.credentials[':credentialId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostManagedCredentialsCredentialIdRevokeKey() {
  return ['managed', '/managed/credentials/:credentialId/revoke', 'POST'] as const
}

export function usePostManagedCredentialsCredentialIdRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.managed.credentials)[':credentialId']['revoke']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.managed.credentials)[':credentialId']['revoke']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostManagedCredentialsCredentialIdRevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.managed.credentials)[':credentialId']['revoke']['$post']
          >
        },
      ) =>
        parseResponse(client.managed.credentials[':credentialId'].revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostManagedCredentialsCredentialIdUpdateKey() {
  return ['managed', '/managed/credentials/:credentialId/update', 'POST'] as const
}

export function usePostManagedCredentialsCredentialIdUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.managed.credentials)[':credentialId']['update']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.managed.credentials)[':credentialId']['update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostManagedCredentialsCredentialIdUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.managed.credentials)[':credentialId']['update']['$post']
          >
        },
      ) =>
        parseResponse(client.managed.credentials[':credentialId'].update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetManagedIssuesKey(args: InferRequestType<typeof client.managed.issues.$get>) {
  return ['managed', '/managed/issues', args] as const
}

export function useGetManagedIssues<TError = unknown>(
  args: InferRequestType<typeof client.managed.issues.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.issues.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetManagedIssuesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.issues.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.managed.issues.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagedIssues<TError = unknown>(
  args: InferRequestType<typeof client.managed.issues.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.issues.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetManagedIssuesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.issues.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.managed.issues.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetManagedIssuesIssueIdKey(
  args: InferRequestType<(typeof client.managed.issues)[':issueId']['$get']>,
) {
  return ['managed', '/managed/issues/:issueId', args] as const
}

export function useGetManagedIssuesIssueId<TError = unknown>(
  args: InferRequestType<(typeof client.managed.issues)[':issueId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.managed.issues)[':issueId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetManagedIssuesIssueIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.managed.issues)[':issueId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.managed.issues[':issueId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagedIssuesIssueId<TError = unknown>(
  args: InferRequestType<(typeof client.managed.issues)[':issueId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.managed.issues)[':issueId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetManagedIssuesIssueIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.managed.issues)[':issueId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.managed.issues[':issueId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetManagedLinodeSettingsKey(
  args: InferRequestType<(typeof client.managed)['linode-settings']['$get']>,
) {
  return ['managed', '/managed/linode-settings', args] as const
}

export function useGetManagedLinodeSettings<TError = unknown>(
  args: InferRequestType<(typeof client.managed)['linode-settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.managed)['linode-settings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetManagedLinodeSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.managed)['linode-settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.managed['linode-settings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagedLinodeSettings<TError = unknown>(
  args: InferRequestType<(typeof client.managed)['linode-settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.managed)['linode-settings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetManagedLinodeSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.managed)['linode-settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.managed['linode-settings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetManagedLinodeSettingsLinodeIdKey(
  args: InferRequestType<(typeof client.managed)['linode-settings'][':linodeId']['$get']>,
) {
  return ['managed', '/managed/linode-settings/:linodeId', args] as const
}

export function useGetManagedLinodeSettingsLinodeId<TError = unknown>(
  args: InferRequestType<(typeof client.managed)['linode-settings'][':linodeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.managed)['linode-settings'][':linodeId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetManagedLinodeSettingsLinodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.managed)['linode-settings'][':linodeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.managed['linode-settings'][':linodeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagedLinodeSettingsLinodeId<TError = unknown>(
  args: InferRequestType<(typeof client.managed)['linode-settings'][':linodeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.managed)['linode-settings'][':linodeId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetManagedLinodeSettingsLinodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.managed)['linode-settings'][':linodeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.managed['linode-settings'][':linodeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutManagedLinodeSettingsLinodeIdKey() {
  return ['managed', '/managed/linode-settings/:linodeId', 'PUT'] as const
}

export function usePutManagedLinodeSettingsLinodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed)['linode-settings'][':linodeId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.managed)['linode-settings'][':linodeId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutManagedLinodeSettingsLinodeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.managed)['linode-settings'][':linodeId']['$put']>
        },
      ) => parseResponse(client.managed['linode-settings'][':linodeId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetManagedServicesKey() {
  return ['managed', '/managed/services'] as const
}

export function useGetManagedServices<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.services.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetManagedServicesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.services.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.managed.services.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagedServices<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.services.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetManagedServicesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.services.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.managed.services.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostManagedServicesKey() {
  return ['managed', '/managed/services', 'POST'] as const
}

export function usePostManagedServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.services.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.managed.services.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostManagedServicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.managed.services.$post> }) =>
        parseResponse(client.managed.services.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetManagedServicesServiceIdKey(
  args: InferRequestType<(typeof client.managed.services)[':serviceId']['$get']>,
) {
  return ['managed', '/managed/services/:serviceId', args] as const
}

export function useGetManagedServicesServiceId<TError = unknown>(
  args: InferRequestType<(typeof client.managed.services)[':serviceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetManagedServicesServiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.managed.services[':serviceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagedServicesServiceId<TError = unknown>(
  args: InferRequestType<(typeof client.managed.services)[':serviceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetManagedServicesServiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.managed.services[':serviceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutManagedServicesServiceIdKey() {
  return ['managed', '/managed/services/:serviceId', 'PUT'] as const
}

export function usePutManagedServicesServiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.managed.services)[':serviceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutManagedServicesServiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.managed.services)[':serviceId']['$put']> },
      ) => parseResponse(client.managed.services[':serviceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteManagedServicesServiceIdKey() {
  return ['managed', '/managed/services/:serviceId', 'DELETE'] as const
}

export function useDeleteManagedServicesServiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.managed.services)[':serviceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteManagedServicesServiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.managed.services)[':serviceId']['$delete']> },
      ) => parseResponse(client.managed.services[':serviceId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostManagedServicesServiceIdDisableKey() {
  return ['managed', '/managed/services/:serviceId/disable', 'POST'] as const
}

export function usePostManagedServicesServiceIdDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['disable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.managed.services)[':serviceId']['disable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostManagedServicesServiceIdDisableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.managed.services)[':serviceId']['disable']['$post']>
        },
      ) => parseResponse(client.managed.services[':serviceId'].disable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostManagedServicesServiceIdEnableKey() {
  return ['managed', '/managed/services/:serviceId/enable', 'POST'] as const
}

export function usePostManagedServicesServiceIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['enable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.managed.services)[':serviceId']['enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostManagedServicesServiceIdEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.managed.services)[':serviceId']['enable']['$post']>
        },
      ) => parseResponse(client.managed.services[':serviceId'].enable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetManagedStatsKey() {
  return ['managed', '/managed/stats'] as const
}

export function useGetManagedStats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.stats.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetManagedStatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.stats.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.managed.stats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagedStats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.stats.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetManagedStatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.stats.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.managed.stats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworkingFirewallsKey(
  args: InferRequestType<typeof client.networking.firewalls.$get>,
) {
  return ['networking', '/networking/firewalls', args] as const
}

export function useGetNetworkingFirewalls<TError = unknown>(
  args: InferRequestType<typeof client.networking.firewalls.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.networking.firewalls.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkingFirewallsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.networking.firewalls.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networking.firewalls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkingFirewalls<TError = unknown>(
  args: InferRequestType<typeof client.networking.firewalls.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.networking.firewalls.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkingFirewallsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.networking.firewalls.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networking.firewalls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNetworkingFirewallsKey() {
  return ['networking', '/networking/firewalls', 'POST'] as const
}

export function usePostNetworkingFirewalls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.networking.firewalls.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.networking.firewalls.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworkingFirewallsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.networking.firewalls.$post> },
      ) => parseResponse(client.networking.firewalls.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworkingFirewallsFirewallIdKey(
  args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['$get']>,
) {
  return ['networking', '/networking/firewalls/:firewallId', args] as const
}

export function useGetNetworkingFirewallsFirewallId<TError = unknown>(
  args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkingFirewallsFirewallIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networking.firewalls[':firewallId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkingFirewallsFirewallId<TError = unknown>(
  args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkingFirewallsFirewallIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networking.firewalls[':firewallId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNetworkingFirewallsFirewallIdKey() {
  return ['networking', '/networking/firewalls/:firewallId', 'PUT'] as const
}

export function usePutNetworkingFirewallsFirewallId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networking.firewalls)[':firewallId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworkingFirewallsFirewallIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['$put']> },
      ) => parseResponse(client.networking.firewalls[':firewallId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteNetworkingFirewallsFirewallIdKey() {
  return ['networking', '/networking/firewalls/:firewallId', 'DELETE'] as const
}

export function useDeleteNetworkingFirewallsFirewallId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networking.firewalls)[':firewallId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNetworkingFirewallsFirewallIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['$delete']>
        },
      ) => parseResponse(client.networking.firewalls[':firewallId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworkingFirewallsFirewallIdDevicesKey(
  args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['devices']['$get']>,
) {
  return ['networking', '/networking/firewalls/:firewallId/devices', args] as const
}

export function useGetNetworkingFirewallsFirewallIdDevices<TError = unknown>(
  args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networking.firewalls)[':firewallId']['devices']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkingFirewallsFirewallIdDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networking.firewalls)[':firewallId']['devices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networking.firewalls[':firewallId'].devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkingFirewallsFirewallIdDevices<TError = unknown>(
  args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networking.firewalls)[':firewallId']['devices']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkingFirewallsFirewallIdDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networking.firewalls)[':firewallId']['devices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networking.firewalls[':firewallId'].devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNetworkingFirewallsFirewallIdDevicesKey() {
  return ['networking', '/networking/firewalls/:firewallId/devices', 'POST'] as const
}

export function usePostNetworkingFirewallsFirewallIdDevices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.networking.firewalls)[':firewallId']['devices']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networking.firewalls)[':firewallId']['devices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworkingFirewallsFirewallIdDevicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.networking.firewalls)[':firewallId']['devices']['$post']
          >
        },
      ) =>
        parseResponse(client.networking.firewalls[':firewallId'].devices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworkingFirewallsFirewallIdDevicesDeviceIdKey(
  args: InferRequestType<
    (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$get']
  >,
) {
  return ['networking', '/networking/firewalls/:firewallId/devices/:deviceId', args] as const
}

export function useGetNetworkingFirewallsFirewallIdDevicesDeviceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkingFirewallsFirewallIdDevicesDeviceIdKey(args)
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
                (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.networking.firewalls[':firewallId'].devices[':deviceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkingFirewallsFirewallIdDevicesDeviceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkingFirewallsFirewallIdDevicesDeviceIdKey(args)
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
                (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.networking.firewalls[':firewallId'].devices[':deviceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteNetworkingFirewallsFirewallIdDevicesDeviceIdKey() {
  return ['networking', '/networking/firewalls/:firewallId/devices/:deviceId', 'DELETE'] as const
}

export function useDeleteNetworkingFirewallsFirewallIdDevicesDeviceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNetworkingFirewallsFirewallIdDevicesDeviceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.networking.firewalls[':firewallId'].devices[':deviceId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNetworkingFirewallsFirewallIdRulesKey(
  args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['rules']['$get']>,
) {
  return ['networking', '/networking/firewalls/:firewallId/rules', args] as const
}

export function useGetNetworkingFirewallsFirewallIdRules<TError = unknown>(
  args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networking.firewalls)[':firewallId']['rules']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkingFirewallsFirewallIdRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networking.firewalls)[':firewallId']['rules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networking.firewalls[':firewallId'].rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkingFirewallsFirewallIdRules<TError = unknown>(
  args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networking.firewalls)[':firewallId']['rules']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkingFirewallsFirewallIdRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.networking.firewalls)[':firewallId']['rules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.networking.firewalls[':firewallId'].rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNetworkingFirewallsFirewallIdRulesKey() {
  return ['networking', '/networking/firewalls/:firewallId/rules', 'PUT'] as const
}

export function usePutNetworkingFirewallsFirewallIdRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['rules']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networking.firewalls)[':firewallId']['rules']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworkingFirewallsFirewallIdRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.networking.firewalls)[':firewallId']['rules']['$put']
          >
        },
      ) => parseResponse(client.networking.firewalls[':firewallId'].rules.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworkingIpsKey() {
  return ['networking', '/networking/ips'] as const
}

export function useGetNetworkingIps<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.ips.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNetworkingIpsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.ips.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networking.ips.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkingIps<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.ips.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNetworkingIpsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.ips.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networking.ips.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNetworkingIpsKey() {
  return ['networking', '/networking/ips', 'POST'] as const
}

export function usePostNetworkingIps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.ips.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.networking.ips.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworkingIpsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.networking.ips.$post> }) =>
        parseResponse(client.networking.ips.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNetworkingIpsAssignKey() {
  return ['networking', '/networking/ips/assign', 'POST'] as const
}

export function usePostNetworkingIpsAssign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.networking.ips.assign.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.networking.ips.assign.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworkingIpsAssignKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.networking.ips.assign.$post> },
      ) => parseResponse(client.networking.ips.assign.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNetworkingIpsShareKey() {
  return ['networking', '/networking/ips/share', 'POST'] as const
}

export function usePostNetworkingIpsShare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.networking.ips.share.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.networking.ips.share.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworkingIpsShareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.networking.ips.share.$post> },
      ) => parseResponse(client.networking.ips.share.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworkingIpsAddressKey(
  args: InferRequestType<(typeof client.networking.ips)[':address']['$get']>,
) {
  return ['networking', '/networking/ips/:address', args] as const
}

export function useGetNetworkingIpsAddress<TError = unknown>(
  args: InferRequestType<(typeof client.networking.ips)[':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networking.ips)[':address']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkingIpsAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networking.ips)[':address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networking.ips[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkingIpsAddress<TError = unknown>(
  args: InferRequestType<(typeof client.networking.ips)[':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networking.ips)[':address']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkingIpsAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networking.ips)[':address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networking.ips[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNetworkingIpsAddressKey() {
  return ['networking', '/networking/ips/:address', 'PUT'] as const
}

export function usePutNetworkingIpsAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networking.ips)[':address']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networking.ips)[':address']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworkingIpsAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.networking.ips)[':address']['$put']> },
      ) => parseResponse(client.networking.ips[':address'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNetworkingIpv4AssignKey() {
  return ['networking', '/networking/ipv4/assign', 'POST'] as const
}

export function usePostNetworkingIpv4Assign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv4.assign.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.networking.ipv4.assign.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworkingIpv4AssignKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.networking.ipv4.assign.$post> },
      ) => parseResponse(client.networking.ipv4.assign.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNetworkingIpv4ShareKey() {
  return ['networking', '/networking/ipv4/share', 'POST'] as const
}

export function usePostNetworkingIpv4Share<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv4.share.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.networking.ipv4.share.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworkingIpv4ShareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.networking.ipv4.share.$post> },
      ) => parseResponse(client.networking.ipv4.share.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworkingIpv6PoolsKey(
  args: InferRequestType<typeof client.networking.ipv6.pools.$get>,
) {
  return ['networking', '/networking/ipv6/pools', args] as const
}

export function useGetNetworkingIpv6Pools<TError = unknown>(
  args: InferRequestType<typeof client.networking.ipv6.pools.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.pools.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkingIpv6PoolsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.pools.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networking.ipv6.pools.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkingIpv6Pools<TError = unknown>(
  args: InferRequestType<typeof client.networking.ipv6.pools.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.pools.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkingIpv6PoolsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.pools.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networking.ipv6.pools.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworkingIpv6RangesKey(
  args: InferRequestType<typeof client.networking.ipv6.ranges.$get>,
) {
  return ['networking', '/networking/ipv6/ranges', args] as const
}

export function useGetNetworkingIpv6Ranges<TError = unknown>(
  args: InferRequestType<typeof client.networking.ipv6.ranges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.ranges.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkingIpv6RangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.ranges.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networking.ipv6.ranges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkingIpv6Ranges<TError = unknown>(
  args: InferRequestType<typeof client.networking.ipv6.ranges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.ranges.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkingIpv6RangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.ranges.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networking.ipv6.ranges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNetworkingIpv6RangesKey() {
  return ['networking', '/networking/ipv6/ranges', 'POST'] as const
}

export function usePostNetworkingIpv6Ranges<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.ranges.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.networking.ipv6.ranges.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworkingIpv6RangesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.networking.ipv6.ranges.$post> },
      ) => parseResponse(client.networking.ipv6.ranges.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworkingIpv6RangesRangeKey(
  args: InferRequestType<(typeof client.networking.ipv6.ranges)[':range']['$get']>,
) {
  return ['networking', '/networking/ipv6/ranges/:range', args] as const
}

export function useGetNetworkingIpv6RangesRange<TError = unknown>(
  args: InferRequestType<(typeof client.networking.ipv6.ranges)[':range']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networking.ipv6.ranges)[':range']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkingIpv6RangesRangeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networking.ipv6.ranges)[':range']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networking.ipv6.ranges[':range'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkingIpv6RangesRange<TError = unknown>(
  args: InferRequestType<(typeof client.networking.ipv6.ranges)[':range']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networking.ipv6.ranges)[':range']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkingIpv6RangesRangeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networking.ipv6.ranges)[':range']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networking.ipv6.ranges[':range'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteNetworkingIpv6RangesRangeKey() {
  return ['networking', '/networking/ipv6/ranges/:range', 'DELETE'] as const
}

export function useDeleteNetworkingIpv6RangesRange<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networking.ipv6.ranges)[':range']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networking.ipv6.ranges)[':range']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNetworkingIpv6RangesRangeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.networking.ipv6.ranges)[':range']['$delete']> },
      ) => parseResponse(client.networking.ipv6.ranges[':range'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworkingVlansKey(
  args: InferRequestType<typeof client.networking.vlans.$get>,
) {
  return ['networking', '/networking/vlans', args] as const
}

export function useGetNetworkingVlans<TError = unknown>(
  args: InferRequestType<typeof client.networking.vlans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.vlans.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkingVlansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.vlans.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networking.vlans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkingVlans<TError = unknown>(
  args: InferRequestType<typeof client.networking.vlans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.vlans.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkingVlansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.vlans.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networking.vlans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodebalancersKey(args: InferRequestType<typeof client.nodebalancers.$get>) {
  return ['nodebalancers', '/nodebalancers', args] as const
}

export function useGetNodebalancers<TError = unknown>(
  args: InferRequestType<typeof client.nodebalancers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodebalancers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodebalancersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodebalancers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodebalancers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodebalancers<TError = unknown>(
  args: InferRequestType<typeof client.nodebalancers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodebalancers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodebalancersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodebalancers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodebalancers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNodebalancersKey() {
  return ['nodebalancers', '/nodebalancers', 'POST'] as const
}

export function usePostNodebalancers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodebalancers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.nodebalancers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNodebalancersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.nodebalancers.$post> }) =>
        parseResponse(client.nodebalancers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNodebalancersNodeBalancerIdKey(
  args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['$get']>,
) {
  return ['nodebalancers', '/nodebalancers/:nodeBalancerId', args] as const
}

export function useGetNodebalancersNodeBalancerId<TError = unknown>(
  args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodebalancersNodeBalancerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodebalancers[':nodeBalancerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodebalancersNodeBalancerId<TError = unknown>(
  args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodebalancersNodeBalancerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodebalancers[':nodeBalancerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNodebalancersNodeBalancerIdKey() {
  return ['nodebalancers', '/nodebalancers/:nodeBalancerId', 'PUT'] as const
}

export function usePutNodebalancersNodeBalancerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNodebalancersNodeBalancerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['$put']> },
      ) => parseResponse(client.nodebalancers[':nodeBalancerId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteNodebalancersNodeBalancerIdKey() {
  return ['nodebalancers', '/nodebalancers/:nodeBalancerId', 'DELETE'] as const
}

export function useDeleteNodebalancersNodeBalancerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNodebalancersNodeBalancerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['$delete']> },
      ) => parseResponse(client.nodebalancers[':nodeBalancerId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNodebalancersNodeBalancerIdConfigsKey(
  args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$get']>,
) {
  return ['nodebalancers', '/nodebalancers/:nodeBalancerId/configs', args] as const
}

export function useGetNodebalancersNodeBalancerIdConfigs<TError = unknown>(
  args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodebalancersNodeBalancerIdConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.nodebalancers[':nodeBalancerId'].configs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodebalancersNodeBalancerIdConfigs<TError = unknown>(
  args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodebalancersNodeBalancerIdConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.nodebalancers[':nodeBalancerId'].configs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNodebalancersNodeBalancerIdConfigsKey() {
  return ['nodebalancers', '/nodebalancers/:nodeBalancerId/configs', 'POST'] as const
}

export function usePostNodebalancersNodeBalancerIdConfigs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNodebalancersNodeBalancerIdConfigsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.nodebalancers)[':nodeBalancerId']['configs']['$post']
          >
        },
      ) => parseResponse(client.nodebalancers[':nodeBalancerId'].configs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNodebalancersNodeBalancerIdConfigsConfigIdKey(
  args: InferRequestType<
    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$get']
  >,
) {
  return ['nodebalancers', '/nodebalancers/:nodeBalancerId/configs/:configId', args] as const
}

export function useGetNodebalancersNodeBalancerIdConfigsConfigId<TError = unknown>(
  args: InferRequestType<
    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodebalancersNodeBalancerIdConfigsConfigIdKey(args)
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
                (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.nodebalancers[':nodeBalancerId'].configs[':configId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodebalancersNodeBalancerIdConfigsConfigId<TError = unknown>(
  args: InferRequestType<
    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodebalancersNodeBalancerIdConfigsConfigIdKey(args)
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
                (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.nodebalancers[':nodeBalancerId'].configs[':configId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutNodebalancersNodeBalancerIdConfigsConfigIdKey() {
  return ['nodebalancers', '/nodebalancers/:nodeBalancerId/configs/:configId', 'PUT'] as const
}

export function usePutNodebalancersNodeBalancerIdConfigsConfigId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNodebalancersNodeBalancerIdConfigsConfigIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.nodebalancers[':nodeBalancerId'].configs[':configId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteNodebalancersNodeBalancerIdConfigsConfigIdKey() {
  return ['nodebalancers', '/nodebalancers/:nodeBalancerId/configs/:configId', 'DELETE'] as const
}

export function useDeleteNodebalancersNodeBalancerIdConfigsConfigId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNodebalancersNodeBalancerIdConfigsConfigIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.nodebalancers[':nodeBalancerId'].configs[':configId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNodebalancersNodeBalancerIdConfigsConfigIdNodesKey(
  args: InferRequestType<
    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$get']
  >,
) {
  return ['nodebalancers', '/nodebalancers/:nodeBalancerId/configs/:configId/nodes', args] as const
}

export function useGetNodebalancersNodeBalancerIdConfigsConfigIdNodes<TError = unknown>(
  args: InferRequestType<
    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodebalancersNodeBalancerIdConfigsConfigIdNodesKey(args)
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
                (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.nodebalancers[':nodeBalancerId'].configs[':configId'].nodes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodebalancersNodeBalancerIdConfigsConfigIdNodes<TError = unknown>(
  args: InferRequestType<
    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodebalancersNodeBalancerIdConfigsConfigIdNodesKey(args)
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
                (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.nodebalancers[':nodeBalancerId'].configs[':configId'].nodes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostNodebalancersNodeBalancerIdConfigsConfigIdNodesKey() {
  return [
    'nodebalancers',
    '/nodebalancers/:nodeBalancerId/configs/:configId/nodes',
    'POST',
  ] as const
}

export function usePostNodebalancersNodeBalancerIdConfigsConfigIdNodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNodebalancersNodeBalancerIdConfigsConfigIdNodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.nodebalancers[':nodeBalancerId'].configs[':configId'].nodes.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdKey(
  args: InferRequestType<
    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
  >,
) {
  return [
    'nodebalancers',
    '/nodebalancers/:nodeBalancerId/configs/:configId/nodes/:nodeId',
    args,
  ] as const
}

export function useGetNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdKey(args)
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
                (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.nodebalancers[':nodeBalancerId'].configs[':configId'].nodes[':nodeId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdKey(args)
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
                (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.nodebalancers[':nodeBalancerId'].configs[':configId'].nodes[':nodeId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdKey() {
  return [
    'nodebalancers',
    '/nodebalancers/:nodeBalancerId/configs/:configId/nodes/:nodeId',
    'PUT',
  ] as const
}

export function usePutNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.nodebalancers[':nodeBalancerId'].configs[':configId'].nodes[':nodeId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdKey() {
  return [
    'nodebalancers',
    '/nodebalancers/:nodeBalancerId/configs/:configId/nodes/:nodeId',
    'DELETE',
  ] as const
}

export function useDeleteNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.nodebalancers[':nodeBalancerId'].configs[':configId'].nodes[':nodeId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNodebalancersNodeBalancerIdConfigsConfigIdRebuildKey() {
  return [
    'nodebalancers',
    '/nodebalancers/:nodeBalancerId/configs/:configId/rebuild',
    'POST',
  ] as const
}

export function usePostNodebalancersNodeBalancerIdConfigsConfigIdRebuild<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['rebuild']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['rebuild']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNodebalancersNodeBalancerIdConfigsConfigIdRebuildKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['rebuild']['$post']
          >
        },
      ) =>
        parseResponse(
          client.nodebalancers[':nodeBalancerId'].configs[':configId'].rebuild.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNodebalancersNodeBalancerIdStatsKey(
  args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['stats']['$get']>,
) {
  return ['nodebalancers', '/nodebalancers/:nodeBalancerId/stats', args] as const
}

export function useGetNodebalancersNodeBalancerIdStats<TError = unknown>(
  args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['stats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['stats']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodebalancersNodeBalancerIdStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['stats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.nodebalancers[':nodeBalancerId'].stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodebalancersNodeBalancerIdStats<TError = unknown>(
  args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['stats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['stats']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodebalancersNodeBalancerIdStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['stats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.nodebalancers[':nodeBalancerId'].stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetObjectStorageBucketsKey() {
  return ['object-storage', '/object-storage/buckets'] as const
}

export function useGetObjectStorageBuckets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['object-storage']['buckets']['$get']>>
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
        ? getGetObjectStorageBucketsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['object-storage']['buckets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['object-storage'].buckets.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetObjectStorageBuckets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['object-storage']['buckets']['$get']>>
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
        ? getGetObjectStorageBucketsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['object-storage']['buckets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['object-storage'].buckets.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostObjectStorageBucketsKey() {
  return ['object-storage', '/object-storage/buckets', 'POST'] as const
}

export function usePostObjectStorageBuckets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['object-storage']['buckets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['object-storage']['buckets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostObjectStorageBucketsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['object-storage']['buckets']['$post']> },
      ) => parseResponse(client['object-storage'].buckets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetObjectStorageBucketsClusterIdKey(
  args: InferRequestType<(typeof client)['object-storage']['buckets'][':clusterId']['$get']>,
) {
  return ['object-storage', '/object-storage/buckets/:clusterId', args] as const
}

export function useGetObjectStorageBucketsClusterId<TError = unknown>(
  args: InferRequestType<(typeof client)['object-storage']['buckets'][':clusterId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['object-storage']['buckets'][':clusterId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObjectStorageBucketsClusterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['object-storage']['buckets'][':clusterId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['object-storage'].buckets[':clusterId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetObjectStorageBucketsClusterId<TError = unknown>(
  args: InferRequestType<(typeof client)['object-storage']['buckets'][':clusterId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['object-storage']['buckets'][':clusterId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObjectStorageBucketsClusterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['object-storage']['buckets'][':clusterId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['object-storage'].buckets[':clusterId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetObjectStorageBucketsClusterIdBucketKey(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$get']
  >,
) {
  return ['object-storage', '/object-storage/buckets/:clusterId/:bucket', args] as const
}

export function useGetObjectStorageBucketsClusterIdBucket<TError = unknown>(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObjectStorageBucketsClusterIdBucketKey(args)
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
                (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['object-storage'].buckets[':clusterId'][':bucket'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetObjectStorageBucketsClusterIdBucket<TError = unknown>(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObjectStorageBucketsClusterIdBucketKey(args)
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
                (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['object-storage'].buckets[':clusterId'][':bucket'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteObjectStorageBucketsClusterIdBucketKey() {
  return ['object-storage', '/object-storage/buckets/:clusterId/:bucket', 'DELETE'] as const
}

export function useDeleteObjectStorageBucketsClusterIdBucket<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteObjectStorageBucketsClusterIdBucketKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['object-storage'].buckets[':clusterId'][':bucket'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutObjectStorageBucketsClusterIdBucketAccessKey() {
  return ['object-storage', '/object-storage/buckets/:clusterId/:bucket/access', 'PUT'] as const
}

export function usePutObjectStorageBucketsClusterIdBucketAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['access']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['access']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutObjectStorageBucketsClusterIdBucketAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['access']['$put']
          >
        },
      ) =>
        parseResponse(
          client['object-storage'].buckets[':clusterId'][':bucket'].access.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostObjectStorageBucketsClusterIdBucketAccessKey() {
  return ['object-storage', '/object-storage/buckets/:clusterId/:bucket/access', 'POST'] as const
}

export function usePostObjectStorageBucketsClusterIdBucketAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['access']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['access']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostObjectStorageBucketsClusterIdBucketAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['access']['$post']
          >
        },
      ) =>
        parseResponse(
          client['object-storage'].buckets[':clusterId'][':bucket'].access.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetObjectStorageBucketsClusterIdBucketObjectAclKey(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$get']
  >,
) {
  return ['object-storage', '/object-storage/buckets/:clusterId/:bucket/object-acl', args] as const
}

export function useGetObjectStorageBucketsClusterIdBucketObjectAcl<TError = unknown>(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObjectStorageBucketsClusterIdBucketObjectAclKey(args)
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
                (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['object-storage'].buckets[':clusterId'][':bucket']['object-acl'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetObjectStorageBucketsClusterIdBucketObjectAcl<TError = unknown>(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObjectStorageBucketsClusterIdBucketObjectAclKey(args)
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
                (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['object-storage'].buckets[':clusterId'][':bucket']['object-acl'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutObjectStorageBucketsClusterIdBucketObjectAclKey() {
  return ['object-storage', '/object-storage/buckets/:clusterId/:bucket/object-acl', 'PUT'] as const
}

export function usePutObjectStorageBucketsClusterIdBucketObjectAcl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutObjectStorageBucketsClusterIdBucketObjectAclKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$put']
          >
        },
      ) =>
        parseResponse(
          client['object-storage'].buckets[':clusterId'][':bucket']['object-acl'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetObjectStorageBucketsClusterIdBucketObjectListKey(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-list']['$get']
  >,
) {
  return ['object-storage', '/object-storage/buckets/:clusterId/:bucket/object-list', args] as const
}

export function useGetObjectStorageBucketsClusterIdBucketObjectList<TError = unknown>(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-list']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObjectStorageBucketsClusterIdBucketObjectListKey(args)
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
                (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-list']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['object-storage'].buckets[':clusterId'][':bucket']['object-list'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetObjectStorageBucketsClusterIdBucketObjectList<TError = unknown>(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-list']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObjectStorageBucketsClusterIdBucketObjectListKey(args)
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
                (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-list']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['object-storage'].buckets[':clusterId'][':bucket']['object-list'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostObjectStorageBucketsClusterIdBucketObjectUrlKey() {
  return [
    'object-storage',
    '/object-storage/buckets/:clusterId/:bucket/object-url',
    'POST',
  ] as const
}

export function usePostObjectStorageBucketsClusterIdBucketObjectUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-url']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-url']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostObjectStorageBucketsClusterIdBucketObjectUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-url']['$post']
          >
        },
      ) =>
        parseResponse(
          client['object-storage'].buckets[':clusterId'][':bucket']['object-url'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetObjectStorageBucketsClusterIdBucketSslKey(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$get']
  >,
) {
  return ['object-storage', '/object-storage/buckets/:clusterId/:bucket/ssl', args] as const
}

export function useGetObjectStorageBucketsClusterIdBucketSsl<TError = unknown>(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObjectStorageBucketsClusterIdBucketSslKey(args)
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
                (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['object-storage'].buckets[':clusterId'][':bucket'].ssl.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetObjectStorageBucketsClusterIdBucketSsl<TError = unknown>(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObjectStorageBucketsClusterIdBucketSslKey(args)
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
                (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['object-storage'].buckets[':clusterId'][':bucket'].ssl.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostObjectStorageBucketsClusterIdBucketSslKey() {
  return ['object-storage', '/object-storage/buckets/:clusterId/:bucket/ssl', 'POST'] as const
}

export function usePostObjectStorageBucketsClusterIdBucketSsl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostObjectStorageBucketsClusterIdBucketSslKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$post']
          >
        },
      ) =>
        parseResponse(
          client['object-storage'].buckets[':clusterId'][':bucket'].ssl.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteObjectStorageBucketsClusterIdBucketSslKey() {
  return ['object-storage', '/object-storage/buckets/:clusterId/:bucket/ssl', 'DELETE'] as const
}

export function useDeleteObjectStorageBucketsClusterIdBucketSsl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteObjectStorageBucketsClusterIdBucketSslKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['object-storage'].buckets[':clusterId'][':bucket'].ssl.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostObjectStorageCancelKey() {
  return ['object-storage', '/object-storage/cancel', 'POST'] as const
}

export function usePostObjectStorageCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['object-storage']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostObjectStorageCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['object-storage'].cancel.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetObjectStorageClustersKey() {
  return ['object-storage', '/object-storage/clusters'] as const
}

export function useGetObjectStorageClusters<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['object-storage']['clusters']['$get']>>
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
        ? getGetObjectStorageClustersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['object-storage']['clusters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['object-storage'].clusters.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetObjectStorageClusters<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['object-storage']['clusters']['$get']>>
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
        ? getGetObjectStorageClustersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['object-storage']['clusters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['object-storage'].clusters.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetObjectStorageClustersClusterIdKey(
  args: InferRequestType<(typeof client)['object-storage']['clusters'][':clusterId']['$get']>,
) {
  return ['object-storage', '/object-storage/clusters/:clusterId', args] as const
}

export function useGetObjectStorageClustersClusterId<TError = unknown>(
  args: InferRequestType<(typeof client)['object-storage']['clusters'][':clusterId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['object-storage']['clusters'][':clusterId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObjectStorageClustersClusterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['object-storage']['clusters'][':clusterId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['object-storage'].clusters[':clusterId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetObjectStorageClustersClusterId<TError = unknown>(
  args: InferRequestType<(typeof client)['object-storage']['clusters'][':clusterId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['object-storage']['clusters'][':clusterId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObjectStorageClustersClusterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['object-storage']['clusters'][':clusterId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['object-storage'].clusters[':clusterId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetObjectStorageKeysKey() {
  return ['object-storage', '/object-storage/keys'] as const
}

export function useGetObjectStorageKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['object-storage']['keys']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetObjectStorageKeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['object-storage']['keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['object-storage'].keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetObjectStorageKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['object-storage']['keys']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetObjectStorageKeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['object-storage']['keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['object-storage'].keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostObjectStorageKeysKey() {
  return ['object-storage', '/object-storage/keys', 'POST'] as const
}

export function usePostObjectStorageKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['object-storage']['keys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['object-storage']['keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostObjectStorageKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['object-storage']['keys']['$post']> },
      ) => parseResponse(client['object-storage'].keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetObjectStorageKeysKeyIdKey(
  args: InferRequestType<(typeof client)['object-storage']['keys'][':keyId']['$get']>,
) {
  return ['object-storage', '/object-storage/keys/:keyId', args] as const
}

export function useGetObjectStorageKeysKeyId<TError = unknown>(
  args: InferRequestType<(typeof client)['object-storage']['keys'][':keyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['object-storage']['keys'][':keyId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObjectStorageKeysKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['object-storage']['keys'][':keyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['object-storage'].keys[':keyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetObjectStorageKeysKeyId<TError = unknown>(
  args: InferRequestType<(typeof client)['object-storage']['keys'][':keyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['object-storage']['keys'][':keyId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObjectStorageKeysKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['object-storage']['keys'][':keyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['object-storage'].keys[':keyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutObjectStorageKeysKeyIdKey() {
  return ['object-storage', '/object-storage/keys/:keyId', 'PUT'] as const
}

export function usePutObjectStorageKeysKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['object-storage']['keys'][':keyId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['object-storage']['keys'][':keyId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutObjectStorageKeysKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['object-storage']['keys'][':keyId']['$put']> },
      ) => parseResponse(client['object-storage'].keys[':keyId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteObjectStorageKeysKeyIdKey() {
  return ['object-storage', '/object-storage/keys/:keyId', 'DELETE'] as const
}

export function useDeleteObjectStorageKeysKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['object-storage']['keys'][':keyId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['object-storage']['keys'][':keyId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteObjectStorageKeysKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['object-storage']['keys'][':keyId']['$delete']>
        },
      ) => parseResponse(client['object-storage'].keys[':keyId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetObjectStorageTransferKey() {
  return ['object-storage', '/object-storage/transfer'] as const
}

export function useGetObjectStorageTransfer<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['object-storage']['transfer']['$get']>>
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
        ? getGetObjectStorageTransferKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['object-storage']['transfer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['object-storage'].transfer.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetObjectStorageTransfer<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['object-storage']['transfer']['$get']>>
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
        ? getGetObjectStorageTransferKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['object-storage']['transfer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['object-storage'].transfer.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProfileKey() {
  return ['profile', '/profile'] as const
}

export function useGetProfile<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfileKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProfile<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfileKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutProfileKey() {
  return ['profile', '/profile', 'PUT'] as const
}

export function usePutProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.profile.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.profile.$put> }) =>
        parseResponse(client.profile.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProfileAppsKey(args: InferRequestType<typeof client.profile.apps.$get>) {
  return ['profile', '/profile/apps', args] as const
}

export function useGetProfileApps<TError = unknown>(
  args: InferRequestType<typeof client.profile.apps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.apps.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfileAppsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.apps.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.apps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProfileApps<TError = unknown>(
  args: InferRequestType<typeof client.profile.apps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.apps.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfileAppsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.apps.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.apps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProfileAppsAppIdKey(
  args: InferRequestType<(typeof client.profile.apps)[':appId']['$get']>,
) {
  return ['profile', '/profile/apps/:appId', args] as const
}

export function useGetProfileAppsAppId<TError = unknown>(
  args: InferRequestType<(typeof client.profile.apps)[':appId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.profile.apps)[':appId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProfileAppsAppIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.profile.apps)[':appId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.apps[':appId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProfileAppsAppId<TError = unknown>(
  args: InferRequestType<(typeof client.profile.apps)[':appId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.profile.apps)[':appId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProfileAppsAppIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.profile.apps)[':appId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.apps[':appId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteProfileAppsAppIdKey() {
  return ['profile', '/profile/apps/:appId', 'DELETE'] as const
}

export function useDeleteProfileAppsAppId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.profile.apps)[':appId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.profile.apps)[':appId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProfileAppsAppIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.profile.apps)[':appId']['$delete']> },
      ) => parseResponse(client.profile.apps[':appId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProfileDevicesKey() {
  return ['profile', '/profile/devices'] as const
}

export function useGetProfileDevices<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.devices.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfileDevicesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.devices.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProfileDevices<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.devices.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfileDevicesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.devices.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProfileDevicesDeviceIdKey(
  args: InferRequestType<(typeof client.profile.devices)[':deviceId']['$get']>,
) {
  return ['profile', '/profile/devices/:deviceId', args] as const
}

export function useGetProfileDevicesDeviceId<TError = unknown>(
  args: InferRequestType<(typeof client.profile.devices)[':deviceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.profile.devices)[':deviceId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProfileDevicesDeviceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.profile.devices)[':deviceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.devices[':deviceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProfileDevicesDeviceId<TError = unknown>(
  args: InferRequestType<(typeof client.profile.devices)[':deviceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.profile.devices)[':deviceId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProfileDevicesDeviceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.profile.devices)[':deviceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.devices[':deviceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteProfileDevicesDeviceIdKey() {
  return ['profile', '/profile/devices/:deviceId', 'DELETE'] as const
}

export function useDeleteProfileDevicesDeviceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile.devices)[':deviceId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.profile.devices)[':deviceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProfileDevicesDeviceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.profile.devices)[':deviceId']['$delete']> },
      ) => parseResponse(client.profile.devices[':deviceId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProfileGrantsKey() {
  return ['profile', '/profile/grants'] as const
}

export function useGetProfileGrants<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.grants.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfileGrantsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.grants.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.grants.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProfileGrants<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.grants.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfileGrantsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.grants.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.grants.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProfileLoginsKey() {
  return ['profile', '/profile/logins'] as const
}

export function useGetProfileLogins<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.logins.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfileLoginsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.logins.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.logins.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProfileLogins<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.logins.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfileLoginsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.logins.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.logins.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProfileLoginsLoginIdKey(
  args: InferRequestType<(typeof client.profile.logins)[':loginId']['$get']>,
) {
  return ['profile', '/profile/logins/:loginId', args] as const
}

export function useGetProfileLoginsLoginId<TError = unknown>(
  args: InferRequestType<(typeof client.profile.logins)[':loginId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.profile.logins)[':loginId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProfileLoginsLoginIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.profile.logins)[':loginId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.logins[':loginId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProfileLoginsLoginId<TError = unknown>(
  args: InferRequestType<(typeof client.profile.logins)[':loginId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.profile.logins)[':loginId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProfileLoginsLoginIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.profile.logins)[':loginId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.logins[':loginId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProfilePhoneNumberKey() {
  return ['profile', '/profile/phone-number', 'POST'] as const
}

export function usePostProfilePhoneNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.profile)['phone-number']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.profile)['phone-number']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProfilePhoneNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.profile)['phone-number']['$post']> },
      ) => parseResponse(client.profile['phone-number'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteProfilePhoneNumberKey() {
  return ['profile', '/profile/phone-number', 'DELETE'] as const
}

export function useDeleteProfilePhoneNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile)['phone-number']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProfilePhoneNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.profile['phone-number'].$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProfilePhoneNumberVerifyKey() {
  return ['profile', '/profile/phone-number/verify', 'POST'] as const
}

export function usePostProfilePhoneNumberVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile)['phone-number']['verify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.profile)['phone-number']['verify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProfilePhoneNumberVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.profile)['phone-number']['verify']['$post']> },
      ) => parseResponse(client.profile['phone-number'].verify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProfilePreferencesKey() {
  return ['profile', '/profile/preferences'] as const
}

export function useGetProfilePreferences<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.preferences.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfilePreferencesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.profile.preferences.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.preferences.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProfilePreferences<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.preferences.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfilePreferencesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.profile.preferences.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.preferences.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutProfilePreferencesKey() {
  return ['profile', '/profile/preferences', 'PUT'] as const
}

export function usePutProfilePreferences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.preferences.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.profile.preferences.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProfilePreferencesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.profile.preferences.$put> }) =>
        parseResponse(client.profile.preferences.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProfileSecurityQuestionsKey() {
  return ['profile', '/profile/security-questions'] as const
}

export function useGetProfileSecurityQuestions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile)['security-questions']['$get']>>
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
        ? getGetProfileSecurityQuestionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.profile)['security-questions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.profile['security-questions'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProfileSecurityQuestions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile)['security-questions']['$get']>>
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
        ? getGetProfileSecurityQuestionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.profile)['security-questions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.profile['security-questions'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProfileSecurityQuestionsKey() {
  return ['profile', '/profile/security-questions', 'POST'] as const
}

export function usePostProfileSecurityQuestions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile)['security-questions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.profile)['security-questions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProfileSecurityQuestionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.profile)['security-questions']['$post']> },
      ) => parseResponse(client.profile['security-questions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProfileSshkeysKey(
  args: InferRequestType<typeof client.profile.sshkeys.$get>,
) {
  return ['profile', '/profile/sshkeys', args] as const
}

export function useGetProfileSshkeys<TError = unknown>(
  args: InferRequestType<typeof client.profile.sshkeys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.sshkeys.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfileSshkeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.sshkeys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.sshkeys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProfileSshkeys<TError = unknown>(
  args: InferRequestType<typeof client.profile.sshkeys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.sshkeys.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfileSshkeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.sshkeys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.sshkeys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProfileSshkeysKey() {
  return ['profile', '/profile/sshkeys', 'POST'] as const
}

export function usePostProfileSshkeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.sshkeys.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.profile.sshkeys.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProfileSshkeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.profile.sshkeys.$post> }) =>
        parseResponse(client.profile.sshkeys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProfileSshkeysSshKeyIdKey(
  args: InferRequestType<(typeof client.profile.sshkeys)[':sshKeyId']['$get']>,
) {
  return ['profile', '/profile/sshkeys/:sshKeyId', args] as const
}

export function useGetProfileSshkeysSshKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.profile.sshkeys)[':sshKeyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.profile.sshkeys)[':sshKeyId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProfileSshkeysSshKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.profile.sshkeys)[':sshKeyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.sshkeys[':sshKeyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProfileSshkeysSshKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.profile.sshkeys)[':sshKeyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.profile.sshkeys)[':sshKeyId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProfileSshkeysSshKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.profile.sshkeys)[':sshKeyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.sshkeys[':sshKeyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutProfileSshkeysSshKeyIdKey() {
  return ['profile', '/profile/sshkeys/:sshKeyId', 'PUT'] as const
}

export function usePutProfileSshkeysSshKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile.sshkeys)[':sshKeyId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.profile.sshkeys)[':sshKeyId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProfileSshkeysSshKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.profile.sshkeys)[':sshKeyId']['$put']> },
      ) => parseResponse(client.profile.sshkeys[':sshKeyId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteProfileSshkeysSshKeyIdKey() {
  return ['profile', '/profile/sshkeys/:sshKeyId', 'DELETE'] as const
}

export function useDeleteProfileSshkeysSshKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile.sshkeys)[':sshKeyId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.profile.sshkeys)[':sshKeyId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProfileSshkeysSshKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.profile.sshkeys)[':sshKeyId']['$delete']> },
      ) => parseResponse(client.profile.sshkeys[':sshKeyId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProfileTfaDisableKey() {
  return ['profile', '/profile/tfa-disable', 'POST'] as const
}

export function usePostProfileTfaDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.profile)['tfa-disable']['$post']>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProfileTfaDisableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.profile['tfa-disable'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProfileTfaEnableKey() {
  return ['profile', '/profile/tfa-enable', 'POST'] as const
}

export function usePostProfileTfaEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.profile)['tfa-enable']['$post']>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProfileTfaEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.profile['tfa-enable'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProfileTfaEnableConfirmKey() {
  return ['profile', '/profile/tfa-enable-confirm', 'POST'] as const
}

export function usePostProfileTfaEnableConfirm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile)['tfa-enable-confirm']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.profile)['tfa-enable-confirm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProfileTfaEnableConfirmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.profile)['tfa-enable-confirm']['$post']> },
      ) => parseResponse(client.profile['tfa-enable-confirm'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProfileTokensKey() {
  return ['profile', '/profile/tokens'] as const
}

export function useGetProfileTokens<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.tokens.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfileTokensKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.tokens.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.tokens.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProfileTokens<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.tokens.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfileTokensKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.tokens.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.tokens.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProfileTokensKey() {
  return ['profile', '/profile/tokens', 'POST'] as const
}

export function usePostProfileTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.tokens.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.profile.tokens.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProfileTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.profile.tokens.$post> }) =>
        parseResponse(client.profile.tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProfileTokensTokenIdKey(
  args: InferRequestType<(typeof client.profile.tokens)[':tokenId']['$get']>,
) {
  return ['profile', '/profile/tokens/:tokenId', args] as const
}

export function useGetProfileTokensTokenId<TError = unknown>(
  args: InferRequestType<(typeof client.profile.tokens)[':tokenId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.profile.tokens)[':tokenId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProfileTokensTokenIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.profile.tokens)[':tokenId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.tokens[':tokenId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProfileTokensTokenId<TError = unknown>(
  args: InferRequestType<(typeof client.profile.tokens)[':tokenId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.profile.tokens)[':tokenId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProfileTokensTokenIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.profile.tokens)[':tokenId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.tokens[':tokenId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutProfileTokensTokenIdKey() {
  return ['profile', '/profile/tokens/:tokenId', 'PUT'] as const
}

export function usePutProfileTokensTokenId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile.tokens)[':tokenId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.profile.tokens)[':tokenId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProfileTokensTokenIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.profile.tokens)[':tokenId']['$put']> },
      ) => parseResponse(client.profile.tokens[':tokenId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteProfileTokensTokenIdKey() {
  return ['profile', '/profile/tokens/:tokenId', 'DELETE'] as const
}

export function useDeleteProfileTokensTokenId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile.tokens)[':tokenId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.profile.tokens)[':tokenId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProfileTokensTokenIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.profile.tokens)[':tokenId']['$delete']> },
      ) => parseResponse(client.profile.tokens[':tokenId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRegionsKey() {
  return ['regions', '/regions'] as const
}

export function useGetRegions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRegionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.regions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRegionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.regions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRegionsRegionIdKey(
  args: InferRequestType<(typeof client.regions)[':regionId']['$get']>,
) {
  return ['regions', '/regions/:regionId', args] as const
}

export function useGetRegionsRegionId<TError = unknown>(
  args: InferRequestType<(typeof client.regions)[':regionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':regionId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRegionsRegionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':regionId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.regions[':regionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegionsRegionId<TError = unknown>(
  args: InferRequestType<(typeof client.regions)[':regionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':regionId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRegionsRegionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':regionId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.regions[':regionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSupportTicketsKey(
  args: InferRequestType<typeof client.support.tickets.$get>,
) {
  return ['support', '/support/tickets', args] as const
}

export function useGetSupportTickets<TError = unknown>(
  args: InferRequestType<typeof client.support.tickets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.tickets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSupportTicketsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.tickets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.support.tickets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSupportTickets<TError = unknown>(
  args: InferRequestType<typeof client.support.tickets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.tickets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSupportTicketsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.tickets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.support.tickets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSupportTicketsKey() {
  return ['support', '/support/tickets', 'POST'] as const
}

export function usePostSupportTickets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.tickets.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.support.tickets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSupportTicketsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.support.tickets.$post> }) =>
        parseResponse(client.support.tickets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSupportTicketsTicketIdKey(
  args: InferRequestType<(typeof client.support.tickets)[':ticketId']['$get']>,
) {
  return ['support', '/support/tickets/:ticketId', args] as const
}

export function useGetSupportTicketsTicketId<TError = unknown>(
  args: InferRequestType<(typeof client.support.tickets)[':ticketId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSupportTicketsTicketIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.support.tickets[':ticketId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSupportTicketsTicketId<TError = unknown>(
  args: InferRequestType<(typeof client.support.tickets)[':ticketId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSupportTicketsTicketIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.support.tickets[':ticketId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSupportTicketsTicketIdAttachmentsKey() {
  return ['support', '/support/tickets/:ticketId/attachments', 'POST'] as const
}

export function usePostSupportTicketsTicketIdAttachments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['attachments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.support.tickets)[':ticketId']['attachments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSupportTicketsTicketIdAttachmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.support.tickets)[':ticketId']['attachments']['$post']
          >
        },
      ) => parseResponse(client.support.tickets[':ticketId'].attachments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSupportTicketsTicketIdCloseKey() {
  return ['support', '/support/tickets/:ticketId/close', 'POST'] as const
}

export function usePostSupportTicketsTicketIdClose<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['close']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.support.tickets)[':ticketId']['close']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSupportTicketsTicketIdCloseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.support.tickets)[':ticketId']['close']['$post']>
        },
      ) => parseResponse(client.support.tickets[':ticketId'].close.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSupportTicketsTicketIdRepliesKey(
  args: InferRequestType<(typeof client.support.tickets)[':ticketId']['replies']['$get']>,
) {
  return ['support', '/support/tickets/:ticketId/replies', args] as const
}

export function useGetSupportTicketsTicketIdReplies<TError = unknown>(
  args: InferRequestType<(typeof client.support.tickets)[':ticketId']['replies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['replies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSupportTicketsTicketIdRepliesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['replies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.support.tickets[':ticketId'].replies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSupportTicketsTicketIdReplies<TError = unknown>(
  args: InferRequestType<(typeof client.support.tickets)[':ticketId']['replies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['replies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSupportTicketsTicketIdRepliesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['replies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.support.tickets[':ticketId'].replies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSupportTicketsTicketIdRepliesKey() {
  return ['support', '/support/tickets/:ticketId/replies', 'POST'] as const
}

export function usePostSupportTicketsTicketIdReplies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['replies']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.support.tickets)[':ticketId']['replies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSupportTicketsTicketIdRepliesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.support.tickets)[':ticketId']['replies']['$post']>
        },
      ) => parseResponse(client.support.tickets[':ticketId'].replies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsKey(args: InferRequestType<typeof client.tags.$get>) {
  return ['tags', '/tags', args] as const
}

export function useGetTags<TError = unknown>(
  args: InferRequestType<typeof client.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tags.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTags<TError = unknown>(
  args: InferRequestType<typeof client.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tags.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostTagsKey() {
  return ['tags', '/tags', 'POST'] as const
}

export function usePostTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tags.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tags.$post> }) =>
        parseResponse(client.tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsLabelKey(args: InferRequestType<(typeof client.tags)[':label']['$get']>) {
  return ['tags', '/tags/:label', args] as const
}

export function useGetTagsLabel<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':label']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':label']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsLabelKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':label']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':label'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsLabel<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':label']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':label']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsLabelKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':label']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':label'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTagsLabelKey() {
  return ['tags', '/tags/:label', 'DELETE'] as const
}

export function useDeleteTagsLabel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':label']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':label']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsLabelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':label']['$delete']> },
      ) => parseResponse(client.tags[':label'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVolumesKey(args: InferRequestType<typeof client.volumes.$get>) {
  return ['volumes', '/volumes', args] as const
}

export function useGetVolumes<TError = unknown>(
  args: InferRequestType<typeof client.volumes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVolumesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.volumes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetVolumes<TError = unknown>(
  args: InferRequestType<typeof client.volumes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVolumesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.volumes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostVolumesKey() {
  return ['volumes', '/volumes', 'POST'] as const
}

export function usePostVolumes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.volumes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVolumesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.volumes.$post> }) =>
        parseResponse(client.volumes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVolumesVolumeIdKey(
  args: InferRequestType<(typeof client.volumes)[':volumeId']['$get']>,
) {
  return ['volumes', '/volumes/:volumeId', args] as const
}

export function useGetVolumesVolumeId<TError = unknown>(
  args: InferRequestType<(typeof client.volumes)[':volumeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVolumesVolumeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.volumes[':volumeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVolumesVolumeId<TError = unknown>(
  args: InferRequestType<(typeof client.volumes)[':volumeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVolumesVolumeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.volumes[':volumeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutVolumesVolumeIdKey() {
  return ['volumes', '/volumes/:volumeId', 'PUT'] as const
}

export function usePutVolumesVolumeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.volumes)[':volumeId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVolumesVolumeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.volumes)[':volumeId']['$put']> },
      ) => parseResponse(client.volumes[':volumeId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVolumesVolumeIdKey() {
  return ['volumes', '/volumes/:volumeId', 'DELETE'] as const
}

export function useDeleteVolumesVolumeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.volumes)[':volumeId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVolumesVolumeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.volumes)[':volumeId']['$delete']> },
      ) => parseResponse(client.volumes[':volumeId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVolumesVolumeIdAttachKey() {
  return ['volumes', '/volumes/:volumeId/attach', 'POST'] as const
}

export function usePostVolumesVolumeIdAttach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.volumes)[':volumeId']['attach']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.volumes)[':volumeId']['attach']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVolumesVolumeIdAttachKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.volumes)[':volumeId']['attach']['$post']> },
      ) => parseResponse(client.volumes[':volumeId'].attach.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVolumesVolumeIdCloneKey() {
  return ['volumes', '/volumes/:volumeId/clone', 'POST'] as const
}

export function usePostVolumesVolumeIdClone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.volumes)[':volumeId']['clone']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.volumes)[':volumeId']['clone']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVolumesVolumeIdCloneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.volumes)[':volumeId']['clone']['$post']> },
      ) => parseResponse(client.volumes[':volumeId'].clone.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVolumesVolumeIdDetachKey() {
  return ['volumes', '/volumes/:volumeId/detach', 'POST'] as const
}

export function usePostVolumesVolumeIdDetach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.volumes)[':volumeId']['detach']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.volumes)[':volumeId']['detach']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVolumesVolumeIdDetachKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.volumes)[':volumeId']['detach']['$post']> },
      ) => parseResponse(client.volumes[':volumeId'].detach.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVolumesVolumeIdResizeKey() {
  return ['volumes', '/volumes/:volumeId/resize', 'POST'] as const
}

export function usePostVolumesVolumeIdResize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.volumes)[':volumeId']['resize']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.volumes)[':volumeId']['resize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVolumesVolumeIdResizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.volumes)[':volumeId']['resize']['$post']> },
      ) => parseResponse(client.volumes[':volumeId'].resize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
