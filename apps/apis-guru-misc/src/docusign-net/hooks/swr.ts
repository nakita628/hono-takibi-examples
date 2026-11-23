import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getServiceInformationKey() {
  return ['service_information'] as const
}

export function getV2_1Key() {
  return ['v2.1'] as const
}

export function getGetServiceInformationKey() {
  return ['service_information', '/service_information'] as const
}

export function useGetServiceInformation<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_information.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServiceInformationKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.service_information.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.service_information.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServiceInformation<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service_information.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServiceInformationKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.service_information.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.service_information.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV21Key() {
  return ['v2.1', '/v2.1'] as const
}

export function useGetV21<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['v2.1']['$get']>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetV21Key() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['v2.1']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v2.1'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['v2.1']['$get']>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetV21Key() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['v2.1']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v2.1'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV21AccountsKey() {
  return ['v2.1', '/v2.1/accounts', 'POST'] as const
}

export function usePostV21Accounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['v2.1']['accounts']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['v2.1']['accounts']['$post']> },
      ) => parseResponse(client['v2.1'].accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsProvisioningKey() {
  return ['v2.1', '/v2.1/accounts/provisioning'] as const
}

export function useGetV21AccountsProvisioning<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v2.1']['accounts']['provisioning']['$get']>>
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
        ? getGetV21AccountsProvisioningKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['accounts']['provisioning']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts.provisioning.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsProvisioning<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v2.1']['accounts']['provisioning']['$get']>>
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
        ? getGetV21AccountsProvisioningKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['accounts']['provisioning']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts.provisioning.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdKey(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['$get']>,
) {
  return ['v2.1', '/v2.1/accounts/:accountId', args] as const
}

export function useGetV21AccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v2.1'].accounts[':accountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v2.1'].accounts[':accountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdKey() {
  return ['v2.1', '/v2.1/accounts/:accountId', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['$delete']> },
      ) => parseResponse(client['v2.1'].accounts[':accountId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdBillingChargesKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_charges']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/billing_charges', args] as const
}

export function useGetV21AccountsAccountIdBillingCharges<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_charges']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['billing_charges']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBillingChargesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['billing_charges']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].billing_charges.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdBillingCharges<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_charges']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['billing_charges']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBillingChargesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['billing_charges']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].billing_charges.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdBillingInvoicesKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_invoices']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/billing_invoices', args] as const
}

export function useGetV21AccountsAccountIdBillingInvoices<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_invoices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['billing_invoices']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBillingInvoicesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['billing_invoices']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].billing_invoices.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdBillingInvoices<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_invoices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['billing_invoices']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBillingInvoicesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['billing_invoices']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].billing_invoices.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdBillingInvoicesInvoiceIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_invoices'][':invoiceId']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/billing_invoices/:invoiceId', args] as const
}

export function useGetV21AccountsAccountIdBillingInvoicesInvoiceId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_invoices'][':invoiceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['billing_invoices'][':invoiceId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBillingInvoicesInvoiceIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['billing_invoices'][':invoiceId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].billing_invoices[':invoiceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdBillingInvoicesInvoiceId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_invoices'][':invoiceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['billing_invoices'][':invoiceId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBillingInvoicesInvoiceIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['billing_invoices'][':invoiceId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].billing_invoices[':invoiceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdBillingInvoicesPastDueKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_invoices_past_due']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/billing_invoices_past_due', args] as const
}

export function useGetV21AccountsAccountIdBillingInvoicesPastDue<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_invoices_past_due']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['billing_invoices_past_due']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBillingInvoicesPastDueKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['billing_invoices_past_due']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].billing_invoices_past_due.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdBillingInvoicesPastDue<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_invoices_past_due']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['billing_invoices_past_due']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBillingInvoicesPastDueKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['billing_invoices_past_due']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].billing_invoices_past_due.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdBillingPaymentsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_payments']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/billing_payments', args] as const
}

export function useGetV21AccountsAccountIdBillingPayments<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_payments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['billing_payments']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBillingPaymentsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['billing_payments']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].billing_payments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdBillingPayments<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_payments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['billing_payments']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBillingPaymentsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['billing_payments']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].billing_payments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdBillingPaymentsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/billing_payments', 'POST'] as const
}

export function usePostV21AccountsAccountIdBillingPayments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['billing_payments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['billing_payments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdBillingPaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['billing_payments']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].billing_payments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdBillingPaymentsPaymentIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_payments'][':paymentId']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/billing_payments/:paymentId', args] as const
}

export function useGetV21AccountsAccountIdBillingPaymentsPaymentId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_payments'][':paymentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['billing_payments'][':paymentId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBillingPaymentsPaymentIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['billing_payments'][':paymentId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].billing_payments[':paymentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdBillingPaymentsPaymentId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_payments'][':paymentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['billing_payments'][':paymentId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBillingPaymentsPaymentIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['billing_payments'][':paymentId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].billing_payments[':paymentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdBillingPlanKey(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['$get']>,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/billing_plan', args] as const
}

export function useGetV21AccountsAccountIdBillingPlan<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBillingPlanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts[':accountId'].billing_plan.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdBillingPlan<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBillingPlanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts[':accountId'].billing_plan.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdBillingPlanKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/billing_plan', 'PUT'] as const
}

export function usePutV21AccountsAccountIdBillingPlan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdBillingPlanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['$put']
          >
        },
      ) =>
        parseResponse(client['v2.1'].accounts[':accountId'].billing_plan.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdBillingPlanCreditCardKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['credit_card']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/billing_plan/credit_card', args] as const
}

export function useGetV21AccountsAccountIdBillingPlanCreditCard<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['credit_card']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['credit_card']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBillingPlanCreditCardKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['credit_card']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].billing_plan.credit_card.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdBillingPlanCreditCard<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['credit_card']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['credit_card']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBillingPlanCreditCardKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['credit_card']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].billing_plan.credit_card.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdBillingPlanDowngradeKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['downgrade']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/billing_plan/downgrade', args] as const
}

export function useGetV21AccountsAccountIdBillingPlanDowngrade<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['downgrade']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['downgrade']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBillingPlanDowngradeKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['downgrade']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].billing_plan.downgrade.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdBillingPlanDowngrade<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['downgrade']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['downgrade']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBillingPlanDowngradeKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['downgrade']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].billing_plan.downgrade.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdBillingPlanDowngradeKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/billing_plan/downgrade', 'PUT'] as const
}

export function usePutV21AccountsAccountIdBillingPlanDowngrade<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['downgrade']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['downgrade']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdBillingPlanDowngradeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['downgrade']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].billing_plan.downgrade.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdBillingPlanPurchasedEnvelopesKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/billing_plan/purchased_envelopes', 'PUT'] as const
}

export function usePutV21AccountsAccountIdBillingPlanPurchasedEnvelopes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['purchased_envelopes']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['purchased_envelopes']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdBillingPlanPurchasedEnvelopesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['purchased_envelopes']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].billing_plan.purchased_envelopes.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdBrandsKey(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['brands']['$get']>,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/brands', args] as const
}

export function useGetV21AccountsAccountIdBrands<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['brands']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['brands']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBrandsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['brands']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts[':accountId'].brands.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdBrands<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['brands']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['brands']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBrandsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['brands']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts[':accountId'].brands.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdBrandsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/brands', 'POST'] as const
}

export function usePostV21AccountsAccountIdBrands<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['brands']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['brands']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdBrandsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['brands']['$post']
          >
        },
      ) => parseResponse(client['v2.1'].accounts[':accountId'].brands.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdBrandsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/brands', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdBrands<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['brands']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['brands']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdBrandsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['brands']['$delete']
          >
        },
      ) => parseResponse(client['v2.1'].accounts[':accountId'].brands.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdBrandsBrandIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/brands/:brandId', args] as const
}

export function useGetV21AccountsAccountIdBrandsBrandId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBrandsBrandIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].brands[':brandId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdBrandsBrandId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBrandsBrandIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].brands[':brandId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdBrandsBrandIdKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/brands/:brandId', 'PUT'] as const
}

export function usePutV21AccountsAccountIdBrandsBrandId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdBrandsBrandIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].brands[':brandId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdBrandsBrandIdKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/brands/:brandId', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdBrandsBrandId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdBrandsBrandIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].brands[':brandId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdBrandsBrandIdFileKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['file']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/brands/:brandId/file', args] as const
}

export function useGetV21AccountsAccountIdBrandsBrandIdFile<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['file']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['file']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBrandsBrandIdFileKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['file']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].brands[':brandId'].file.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdBrandsBrandIdFile<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['file']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['file']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBrandsBrandIdFileKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['file']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].brands[':brandId'].file.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdBrandsBrandIdLogosLogoTypeKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['logos'][':logoType']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/brands/:brandId/logos/:logoType', args] as const
}

export function useGetV21AccountsAccountIdBrandsBrandIdLogosLogoType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['logos'][':logoType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['logos'][':logoType']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBrandsBrandIdLogosLogoTypeKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['logos'][':logoType']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].brands[':brandId'].logos[':logoType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdBrandsBrandIdLogosLogoType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['logos'][':logoType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['logos'][':logoType']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBrandsBrandIdLogosLogoTypeKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['logos'][':logoType']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].brands[':brandId'].logos[':logoType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdBrandsBrandIdLogosLogoTypeKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/brands/:brandId/logos/:logoType', 'PUT'] as const
}

export function usePutV21AccountsAccountIdBrandsBrandIdLogosLogoType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['logos'][':logoType']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['logos'][':logoType']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdBrandsBrandIdLogosLogoTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['logos'][':logoType']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].brands[':brandId'].logos[':logoType'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdBrandsBrandIdLogosLogoTypeKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/brands/:brandId/logos/:logoType', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdBrandsBrandIdLogosLogoType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['logos'][':logoType']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['logos'][':logoType']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdBrandsBrandIdLogosLogoTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['logos'][':logoType']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].brands[':brandId'].logos[':logoType'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdBrandsBrandIdResourcesKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['resources']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/brands/:brandId/resources', args] as const
}

export function useGetV21AccountsAccountIdBrandsBrandIdResources<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['resources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['resources']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBrandsBrandIdResourcesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['resources']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].brands[':brandId'].resources.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdBrandsBrandIdResources<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['resources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['resources']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBrandsBrandIdResourcesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['resources']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].brands[':brandId'].resources.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdBrandsBrandIdResourcesResourceContentTypeKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['resources'][':resourceContentType']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/brands/:brandId/resources/:resourceContentType',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdBrandsBrandIdResourcesResourceContentType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['resources'][':resourceContentType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['resources'][':resourceContentType']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBrandsBrandIdResourcesResourceContentTypeKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['resources'][':resourceContentType']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].brands[':brandId'].resources[
            ':resourceContentType'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdBrandsBrandIdResourcesResourceContentType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['resources'][':resourceContentType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['resources'][':resourceContentType']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBrandsBrandIdResourcesResourceContentTypeKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['resources'][':resourceContentType']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].brands[':brandId'].resources[
            ':resourceContentType'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdBrandsBrandIdResourcesResourceContentTypeKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/brands/:brandId/resources/:resourceContentType',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdBrandsBrandIdResourcesResourceContentType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['resources'][':resourceContentType']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['resources'][':resourceContentType']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV21AccountsAccountIdBrandsBrandIdResourcesResourceContentTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['resources'][':resourceContentType']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].brands[':brandId'].resources[
            ':resourceContentType'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdBulkSendBatchKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/bulk_send_batch', args] as const
}

export function useGetV21AccountsAccountIdBulkSendBatch<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBulkSendBatchKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].bulk_send_batch.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdBulkSendBatch<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBulkSendBatchKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].bulk_send_batch.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdBulkSendBatchBulkSendBatchIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch'][':bulkSendBatchId']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/bulk_send_batch/:bulkSendBatchId', args] as const
}

export function useGetV21AccountsAccountIdBulkSendBatchBulkSendBatchId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch'][':bulkSendBatchId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch'][':bulkSendBatchId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBulkSendBatchBulkSendBatchIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch'][':bulkSendBatchId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].bulk_send_batch[':bulkSendBatchId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdBulkSendBatchBulkSendBatchId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch'][':bulkSendBatchId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch'][':bulkSendBatchId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBulkSendBatchBulkSendBatchIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch'][':bulkSendBatchId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].bulk_send_batch[':bulkSendBatchId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdBulkSendBatchBulkSendBatchIdKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/bulk_send_batch/:bulkSendBatchId', 'PUT'] as const
}

export function usePutV21AccountsAccountIdBulkSendBatchBulkSendBatchId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch'][':bulkSendBatchId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch'][':bulkSendBatchId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdBulkSendBatchBulkSendBatchIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch'][':bulkSendBatchId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].bulk_send_batch[':bulkSendBatchId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdBulkSendBatchBulkSendBatchIdEnvelopesKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch'][':bulkSendBatchId']['envelopes']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/bulk_send_batch/:bulkSendBatchId/envelopes',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdBulkSendBatchBulkSendBatchIdEnvelopes<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch'][':bulkSendBatchId']['envelopes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch'][':bulkSendBatchId']['envelopes']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBulkSendBatchBulkSendBatchIdEnvelopesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch'][':bulkSendBatchId']['envelopes']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].bulk_send_batch[':bulkSendBatchId'].envelopes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdBulkSendBatchBulkSendBatchIdEnvelopes<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch'][':bulkSendBatchId']['envelopes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch'][':bulkSendBatchId']['envelopes']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBulkSendBatchBulkSendBatchIdEnvelopesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch'][':bulkSendBatchId']['envelopes']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].bulk_send_batch[':bulkSendBatchId'].envelopes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdBulkSendBatchBulkSendBatchIdBulkActionKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/bulk_send_batch/:bulkSendBatchId/:bulkAction',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdBulkSendBatchBulkSendBatchIdBulkAction<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch'][':bulkSendBatchId'][':bulkAction']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch'][':bulkSendBatchId'][':bulkAction']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdBulkSendBatchBulkSendBatchIdBulkActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch'][':bulkSendBatchId'][':bulkAction']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].bulk_send_batch[':bulkSendBatchId'][
            ':bulkAction'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdBulkSendListsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/bulk_send_lists', args] as const
}

export function useGetV21AccountsAccountIdBulkSendLists<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBulkSendListsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].bulk_send_lists.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdBulkSendLists<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBulkSendListsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].bulk_send_lists.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdBulkSendListsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/bulk_send_lists', 'POST'] as const
}

export function usePostV21AccountsAccountIdBulkSendLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdBulkSendListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].bulk_send_lists.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdBulkSendListsBulkSendListIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists'][':bulkSendListId']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/bulk_send_lists/:bulkSendListId', args] as const
}

export function useGetV21AccountsAccountIdBulkSendListsBulkSendListId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists'][':bulkSendListId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists'][':bulkSendListId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBulkSendListsBulkSendListIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists'][':bulkSendListId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].bulk_send_lists[':bulkSendListId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdBulkSendListsBulkSendListId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists'][':bulkSendListId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists'][':bulkSendListId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdBulkSendListsBulkSendListIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists'][':bulkSendListId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].bulk_send_lists[':bulkSendListId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdBulkSendListsBulkSendListIdKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/bulk_send_lists/:bulkSendListId', 'PUT'] as const
}

export function usePutV21AccountsAccountIdBulkSendListsBulkSendListId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists'][':bulkSendListId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists'][':bulkSendListId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdBulkSendListsBulkSendListIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists'][':bulkSendListId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].bulk_send_lists[':bulkSendListId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdBulkSendListsBulkSendListIdKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/bulk_send_lists/:bulkSendListId', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdBulkSendListsBulkSendListId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists'][':bulkSendListId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists'][':bulkSendListId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdBulkSendListsBulkSendListIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists'][':bulkSendListId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].bulk_send_lists[':bulkSendListId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdBulkSendListsBulkSendListIdSendKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/bulk_send_lists/:bulkSendListId/send', 'POST'] as const
}

export function usePostV21AccountsAccountIdBulkSendListsBulkSendListIdSend<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists'][':bulkSendListId']['send']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists'][':bulkSendListId']['send']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdBulkSendListsBulkSendListIdSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists'][':bulkSendListId']['send']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].bulk_send_lists[':bulkSendListId'].send.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdBulkSendListsBulkSendListIdTestKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/bulk_send_lists/:bulkSendListId/test', 'POST'] as const
}

export function usePostV21AccountsAccountIdBulkSendListsBulkSendListIdTest<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists'][':bulkSendListId']['test']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists'][':bulkSendListId']['test']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdBulkSendListsBulkSendListIdTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists'][':bulkSendListId']['test']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].bulk_send_lists[':bulkSendListId'].test.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdCaptiveRecipientsRecipientPartKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/captive_recipients/:recipientPart', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdCaptiveRecipientsRecipientPart<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['captive_recipients'][':recipientPart']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['captive_recipients'][':recipientPart']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdCaptiveRecipientsRecipientPartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['captive_recipients'][':recipientPart']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].captive_recipients[':recipientPart'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdChunkedUploadsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/chunked_uploads', 'POST'] as const
}

export function usePostV21AccountsAccountIdChunkedUploads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['chunked_uploads']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['chunked_uploads']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdChunkedUploadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['chunked_uploads']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].chunked_uploads.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdChunkedUploadsChunkedUploadIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['chunked_uploads'][':chunkedUploadId']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/chunked_uploads/:chunkedUploadId', args] as const
}

export function useGetV21AccountsAccountIdChunkedUploadsChunkedUploadId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['chunked_uploads'][':chunkedUploadId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['chunked_uploads'][':chunkedUploadId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdChunkedUploadsChunkedUploadIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['chunked_uploads'][':chunkedUploadId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].chunked_uploads[':chunkedUploadId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdChunkedUploadsChunkedUploadId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['chunked_uploads'][':chunkedUploadId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['chunked_uploads'][':chunkedUploadId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdChunkedUploadsChunkedUploadIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['chunked_uploads'][':chunkedUploadId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].chunked_uploads[':chunkedUploadId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdChunkedUploadsChunkedUploadIdKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/chunked_uploads/:chunkedUploadId', 'PUT'] as const
}

export function usePutV21AccountsAccountIdChunkedUploadsChunkedUploadId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['chunked_uploads'][':chunkedUploadId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['chunked_uploads'][':chunkedUploadId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdChunkedUploadsChunkedUploadIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['chunked_uploads'][':chunkedUploadId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].chunked_uploads[':chunkedUploadId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdChunkedUploadsChunkedUploadIdKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/chunked_uploads/:chunkedUploadId', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdChunkedUploadsChunkedUploadId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['chunked_uploads'][':chunkedUploadId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['chunked_uploads'][':chunkedUploadId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdChunkedUploadsChunkedUploadIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['chunked_uploads'][':chunkedUploadId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].chunked_uploads[':chunkedUploadId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdChunkedUploadsChunkedUploadIdChunkedUploadPartSeqKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/chunked_uploads/:chunkedUploadId/:chunkedUploadPartSeq',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdChunkedUploadsChunkedUploadIdChunkedUploadPartSeq<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['chunked_uploads'][':chunkedUploadId'][':chunkedUploadPartSeq']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['chunked_uploads'][':chunkedUploadId'][':chunkedUploadPartSeq']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV21AccountsAccountIdChunkedUploadsChunkedUploadIdChunkedUploadPartSeqKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['chunked_uploads'][':chunkedUploadId'][':chunkedUploadPartSeq']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].chunked_uploads[':chunkedUploadId'][
            ':chunkedUploadPartSeq'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdConnectKey(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['connect']['$get']>,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/connect', args] as const
}

export function useGetV21AccountsAccountIdConnect<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['connect']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['connect']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdConnectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['connect']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts[':accountId'].connect.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdConnect<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['connect']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['connect']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdConnectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['connect']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts[':accountId'].connect.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdConnectKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/connect', 'PUT'] as const
}

export function usePutV21AccountsAccountIdConnect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['connect']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['connect']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdConnectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['connect']['$put']
          >
        },
      ) => parseResponse(client['v2.1'].accounts[':accountId'].connect.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdConnectKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/connect', 'POST'] as const
}

export function usePostV21AccountsAccountIdConnect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['connect']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['connect']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdConnectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['connect']['$post']
          >
        },
      ) => parseResponse(client['v2.1'].accounts[':accountId'].connect.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdConnectEnvelopesPublishHistoricalKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/connect/envelopes/publish/historical', 'POST'] as const
}

export function usePostV21AccountsAccountIdConnectEnvelopesPublishHistorical<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['connect']['envelopes']['publish']['historical']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['connect']['envelopes']['publish']['historical']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdConnectEnvelopesPublishHistoricalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['connect']['envelopes']['publish']['historical']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].connect.envelopes.publish.historical.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdConnectEnvelopesRetryQueueKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/connect/envelopes/retry_queue', 'PUT'] as const
}

export function usePutV21AccountsAccountIdConnectEnvelopesRetryQueue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['connect']['envelopes']['retry_queue']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['connect']['envelopes']['retry_queue']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdConnectEnvelopesRetryQueueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['connect']['envelopes']['retry_queue']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].connect.envelopes.retry_queue.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdConnectEnvelopesEnvelopeIdRetryQueueKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/connect/envelopes/:envelopeId/retry_queue',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdConnectEnvelopesEnvelopeIdRetryQueue<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['connect']['envelopes'][':envelopeId']['retry_queue']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['connect']['envelopes'][':envelopeId']['retry_queue']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdConnectEnvelopesEnvelopeIdRetryQueueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['connect']['envelopes'][':envelopeId']['retry_queue']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].connect.envelopes[':envelopeId'].retry_queue.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdConnectFailuresKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect']['failures']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/connect/failures', args] as const
}

export function useGetV21AccountsAccountIdConnectFailures<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect']['failures']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['connect']['failures']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdConnectFailuresKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['connect']['failures']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].connect.failures.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdConnectFailures<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect']['failures']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['connect']['failures']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdConnectFailuresKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['connect']['failures']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].connect.failures.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdConnectFailuresFailureIdKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/connect/failures/:failureId', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdConnectFailuresFailureId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['connect']['failures'][':failureId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['connect']['failures'][':failureId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdConnectFailuresFailureIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['connect']['failures'][':failureId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].connect.failures[':failureId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdConnectLogsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect']['logs']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/connect/logs', args] as const
}

export function useGetV21AccountsAccountIdConnectLogs<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect']['logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['connect']['logs']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdConnectLogsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['connect']['logs']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts[':accountId'].connect.logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdConnectLogs<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect']['logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['connect']['logs']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdConnectLogsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['connect']['logs']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts[':accountId'].connect.logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdConnectLogsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/connect/logs', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdConnectLogs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['connect']['logs']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['connect']['logs']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdConnectLogsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['connect']['logs']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].connect.logs.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdConnectLogsLogIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect']['logs'][':logId']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/connect/logs/:logId', args] as const
}

export function useGetV21AccountsAccountIdConnectLogsLogId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect']['logs'][':logId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['connect']['logs'][':logId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdConnectLogsLogIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['connect']['logs'][':logId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].connect.logs[':logId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdConnectLogsLogId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect']['logs'][':logId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['connect']['logs'][':logId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdConnectLogsLogIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['connect']['logs'][':logId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].connect.logs[':logId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdConnectLogsLogIdKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/connect/logs/:logId', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdConnectLogsLogId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['connect']['logs'][':logId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['connect']['logs'][':logId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdConnectLogsLogIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['connect']['logs'][':logId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].connect.logs[':logId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdConnectOauthKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect']['oauth']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/connect/oauth', args] as const
}

export function useGetV21AccountsAccountIdConnectOauth<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect']['oauth']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['connect']['oauth']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdConnectOauthKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['connect']['oauth']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].connect.oauth.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdConnectOauth<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect']['oauth']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['connect']['oauth']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdConnectOauthKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['connect']['oauth']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].connect.oauth.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdConnectOauthKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/connect/oauth', 'PUT'] as const
}

export function usePutV21AccountsAccountIdConnectOauth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['connect']['oauth']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['connect']['oauth']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdConnectOauthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['connect']['oauth']['$put']
          >
        },
      ) =>
        parseResponse(client['v2.1'].accounts[':accountId'].connect.oauth.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdConnectOauthKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/connect/oauth', 'POST'] as const
}

export function usePostV21AccountsAccountIdConnectOauth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['connect']['oauth']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['connect']['oauth']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdConnectOauthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['connect']['oauth']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].connect.oauth.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdConnectOauthKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/connect/oauth', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdConnectOauth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['connect']['oauth']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['connect']['oauth']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdConnectOauthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['connect']['oauth']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].connect.oauth.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdConnectConnectIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect'][':connectId']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/connect/:connectId', args] as const
}

export function useGetV21AccountsAccountIdConnectConnectId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect'][':connectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['connect'][':connectId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdConnectConnectIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['connect'][':connectId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].connect[':connectId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdConnectConnectId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect'][':connectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['connect'][':connectId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdConnectConnectIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['connect'][':connectId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].connect[':connectId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdConnectConnectIdKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/connect/:connectId', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdConnectConnectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['connect'][':connectId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['connect'][':connectId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdConnectConnectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['connect'][':connectId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].connect[':connectId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdConnectConnectIdAllUsersKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect'][':connectId']['all']['users']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/connect/:connectId/all/users', args] as const
}

export function useGetV21AccountsAccountIdConnectConnectIdAllUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect'][':connectId']['all']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['connect'][':connectId']['all']['users']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdConnectConnectIdAllUsersKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['connect'][':connectId']['all']['users']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].connect[':connectId'].all.users.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdConnectConnectIdAllUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect'][':connectId']['all']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['connect'][':connectId']['all']['users']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdConnectConnectIdAllUsersKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['connect'][':connectId']['all']['users']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].connect[':connectId'].all.users.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdConnectConnectIdUsersKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect'][':connectId']['users']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/connect/:connectId/users', args] as const
}

export function useGetV21AccountsAccountIdConnectConnectIdUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect'][':connectId']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['connect'][':connectId']['users']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdConnectConnectIdUsersKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['connect'][':connectId']['users']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].connect[':connectId'].users.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdConnectConnectIdUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect'][':connectId']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['connect'][':connectId']['users']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdConnectConnectIdUsersKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['connect'][':connectId']['users']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].connect[':connectId'].users.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdConsumerDisclosureKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['consumer_disclosure']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/consumer_disclosure', args] as const
}

export function useGetV21AccountsAccountIdConsumerDisclosure<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['consumer_disclosure']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['consumer_disclosure']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdConsumerDisclosureKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['consumer_disclosure']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].consumer_disclosure.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdConsumerDisclosure<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['consumer_disclosure']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['consumer_disclosure']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdConsumerDisclosureKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['consumer_disclosure']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].consumer_disclosure.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdConsumerDisclosureLangCodeKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['consumer_disclosure'][':langCode']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/consumer_disclosure/:langCode', args] as const
}

export function useGetV21AccountsAccountIdConsumerDisclosureLangCode<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['consumer_disclosure'][':langCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['consumer_disclosure'][':langCode']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdConsumerDisclosureLangCodeKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['consumer_disclosure'][':langCode']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].consumer_disclosure[':langCode'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdConsumerDisclosureLangCode<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['consumer_disclosure'][':langCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['consumer_disclosure'][':langCode']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdConsumerDisclosureLangCodeKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['consumer_disclosure'][':langCode']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].consumer_disclosure[':langCode'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdConsumerDisclosureLangCodeKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/consumer_disclosure/:langCode', 'PUT'] as const
}

export function usePutV21AccountsAccountIdConsumerDisclosureLangCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['consumer_disclosure'][':langCode']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['consumer_disclosure'][':langCode']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdConsumerDisclosureLangCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['consumer_disclosure'][':langCode']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].consumer_disclosure[':langCode'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdContactsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/contacts', 'PUT'] as const
}

export function usePutV21AccountsAccountIdContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['contacts']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['contacts']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['contacts']['$put']
          >
        },
      ) => parseResponse(client['v2.1'].accounts[':accountId'].contacts.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdContactsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/contacts', 'POST'] as const
}

export function usePostV21AccountsAccountIdContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['contacts']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['contacts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['contacts']['$post']
          >
        },
      ) => parseResponse(client['v2.1'].accounts[':accountId'].contacts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdContactsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/contacts', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['contacts']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['contacts']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['contacts']['$delete']
          >
        },
      ) =>
        parseResponse(client['v2.1'].accounts[':accountId'].contacts.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdContactsContactIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['contacts'][':contactId']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/contacts/:contactId', args] as const
}

export function useGetV21AccountsAccountIdContactsContactId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['contacts'][':contactId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['contacts'][':contactId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdContactsContactIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['contacts'][':contactId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].contacts[':contactId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdContactsContactId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['contacts'][':contactId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['contacts'][':contactId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdContactsContactIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['contacts'][':contactId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].contacts[':contactId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdContactsContactIdKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/contacts/:contactId', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdContactsContactId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['contacts'][':contactId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['contacts'][':contactId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdContactsContactIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['contacts'][':contactId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].contacts[':contactId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdCustomFieldsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['custom_fields']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/custom_fields', args] as const
}

export function useGetV21AccountsAccountIdCustomFields<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['custom_fields']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['custom_fields']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['custom_fields']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].custom_fields.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdCustomFields<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['custom_fields']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['custom_fields']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['custom_fields']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].custom_fields.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdCustomFieldsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/custom_fields', 'POST'] as const
}

export function usePostV21AccountsAccountIdCustomFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['custom_fields']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['custom_fields']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdCustomFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['custom_fields']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].custom_fields.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdCustomFieldsCustomFieldIdKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/custom_fields/:customFieldId', 'PUT'] as const
}

export function usePutV21AccountsAccountIdCustomFieldsCustomFieldId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['custom_fields'][':customFieldId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['custom_fields'][':customFieldId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdCustomFieldsCustomFieldIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['custom_fields'][':customFieldId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].custom_fields[':customFieldId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdCustomFieldsCustomFieldIdKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/custom_fields/:customFieldId', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdCustomFieldsCustomFieldId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['custom_fields'][':customFieldId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['custom_fields'][':customFieldId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdCustomFieldsCustomFieldIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['custom_fields'][':customFieldId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].custom_fields[':customFieldId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesKey(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['envelopes']['$get']>,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes', args] as const
}

export function useGetV21AccountsAccountIdEnvelopes<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['envelopes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['envelopes']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['envelopes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts[':accountId'].envelopes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopes<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['envelopes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['envelopes']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['envelopes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts[':accountId'].envelopes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdEnvelopesKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes', 'POST'] as const
}

export function usePostV21AccountsAccountIdEnvelopes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['envelopes']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['envelopes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdEnvelopesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes']['$post']
          >
        },
      ) => parseResponse(client['v2.1'].accounts[':accountId'].envelopes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdEnvelopesStatusKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/status', 'PUT'] as const
}

export function usePutV21AccountsAccountIdEnvelopesStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdEnvelopesStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes.status.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesTransferRulesKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes']['transfer_rules']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/transfer_rules', args] as const
}

export function useGetV21AccountsAccountIdEnvelopesTransferRules<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes']['transfer_rules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes']['transfer_rules']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesTransferRulesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes']['transfer_rules']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes.transfer_rules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesTransferRules<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes']['transfer_rules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes']['transfer_rules']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesTransferRulesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes']['transfer_rules']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes.transfer_rules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdEnvelopesTransferRulesKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/transfer_rules', 'PUT'] as const
}

export function usePutV21AccountsAccountIdEnvelopesTransferRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes']['transfer_rules']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes']['transfer_rules']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdEnvelopesTransferRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes']['transfer_rules']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes.transfer_rules.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdEnvelopesTransferRulesKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/transfer_rules', 'POST'] as const
}

export function usePostV21AccountsAccountIdEnvelopesTransferRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes']['transfer_rules']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes']['transfer_rules']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdEnvelopesTransferRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes']['transfer_rules']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes.transfer_rules.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdEnvelopesTransferRulesEnvelopeTransferRuleIdKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/transfer_rules/:envelopeTransferRuleId',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdEnvelopesTransferRulesEnvelopeTransferRuleId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes']['transfer_rules'][':envelopeTransferRuleId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes']['transfer_rules'][':envelopeTransferRuleId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV21AccountsAccountIdEnvelopesTransferRulesEnvelopeTransferRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes']['transfer_rules'][':envelopeTransferRuleId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes.transfer_rules[
            ':envelopeTransferRuleId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdEnvelopesTransferRulesEnvelopeTransferRuleIdKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/transfer_rules/:envelopeTransferRuleId',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdEnvelopesTransferRulesEnvelopeTransferRuleId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes']['transfer_rules'][':envelopeTransferRuleId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes']['transfer_rules'][':envelopeTransferRuleId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV21AccountsAccountIdEnvelopesTransferRulesEnvelopeTransferRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes']['transfer_rules'][':envelopeTransferRuleId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes.transfer_rules[
            ':envelopeTransferRuleId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId', args] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdEnvelopesEnvelopeIdKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId', 'PUT'] as const
}

export function usePutV21AccountsAccountIdEnvelopesEnvelopeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdEnvelopesEnvelopeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['attachments']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/attachments', args] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdAttachments<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['attachments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['attachments']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['attachments']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].attachments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdAttachments<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['attachments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['attachments']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['attachments']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].attachments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/attachments', 'PUT'] as const
}

export function usePutV21AccountsAccountIdEnvelopesEnvelopeIdAttachments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['attachments']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['attachments']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['attachments']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].attachments.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/attachments', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdEnvelopesEnvelopeIdAttachments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['attachments']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['attachments']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['attachments']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].attachments.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsAttachmentIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['attachments'][':attachmentId']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/attachments/:attachmentId',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsAttachmentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['attachments'][':attachmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['attachments'][':attachmentId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsAttachmentIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['attachments'][':attachmentId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].attachments[
            ':attachmentId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsAttachmentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['attachments'][':attachmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['attachments'][':attachmentId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsAttachmentIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['attachments'][':attachmentId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].attachments[
            ':attachmentId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsAttachmentIdKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/attachments/:attachmentId',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsAttachmentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['attachments'][':attachmentId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['attachments'][':attachmentId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsAttachmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['attachments'][':attachmentId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].attachments[
            ':attachmentId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdAuditEventsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['audit_events']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/audit_events', args] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdAuditEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['audit_events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['audit_events']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdAuditEventsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['audit_events']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].audit_events.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdAuditEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['audit_events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['audit_events']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdAuditEventsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['audit_events']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].audit_events.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdCommentsTranscriptKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['comments']['transcript']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/comments/transcript',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdCommentsTranscript<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['comments']['transcript']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['comments']['transcript']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdCommentsTranscriptKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['comments']['transcript']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].comments.transcript.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdCommentsTranscript<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['comments']['transcript']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['comments']['transcript']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdCommentsTranscriptKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['comments']['transcript']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].comments.transcript.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['custom_fields']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/custom_fields', args] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdCustomFields<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['custom_fields']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['custom_fields']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['custom_fields']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].custom_fields.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdCustomFields<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['custom_fields']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['custom_fields']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['custom_fields']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].custom_fields.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/custom_fields', 'PUT'] as const
}

export function usePutV21AccountsAccountIdEnvelopesEnvelopeIdCustomFields<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['custom_fields']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['custom_fields']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['custom_fields']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].custom_fields.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/custom_fields', 'POST'] as const
}

export function usePostV21AccountsAccountIdEnvelopesEnvelopeIdCustomFields<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['custom_fields']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['custom_fields']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['custom_fields']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].custom_fields.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/custom_fields',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdEnvelopesEnvelopeIdCustomFields<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['custom_fields']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['custom_fields']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['custom_fields']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].custom_fields.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents', args] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdDocuments<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdDocuments<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents', 'PUT'] as const
}

export function usePutV21AccountsAccountIdEnvelopesEnvelopeIdDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdEnvelopesEnvelopeIdDocuments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
            ':documentId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
            ':documentId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
            ':documentId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['fields']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId/fields',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFields<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['fields']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['fields']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['fields']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
            ':documentId'
          ].fields.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFields<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['fields']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['fields']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['fields']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
            ':documentId'
          ].fields.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId/fields',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFields<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['fields']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['fields']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['fields']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
            ':documentId'
          ].fields.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId/fields',
    'POST',
  ] as const
}

export function usePostV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFields<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['fields']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['fields']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['fields']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
            ':documentId'
          ].fields.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId/fields',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFields<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['fields']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['fields']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['fields']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
            ':documentId'
          ].fields.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdHtmlDefinitionsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['html_definitions']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId/html_definitions',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdHtmlDefinitions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['html_definitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['html_definitions']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdHtmlDefinitionsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['html_definitions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
            ':documentId'
          ].html_definitions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdHtmlDefinitions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['html_definitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['html_definitions']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdHtmlDefinitionsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['html_definitions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
            ':documentId'
          ].html_definitions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId/pages',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPages<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
            ':documentId'
          ].pages.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPages<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
            ':documentId'
          ].pages.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId/pages/:pageNumber',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumber<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages'][':pageNumber']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages'][':pageNumber']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages'][':pageNumber']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
            ':documentId'
          ].pages[':pageNumber'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberPageImageKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages'][':pageNumber']['page_image']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId/pages/:pageNumber/page_image',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberPageImage<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages'][':pageNumber']['page_image']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages'][':pageNumber']['page_image']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberPageImageKey(
            args,
          )
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages'][':pageNumber']['page_image']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
            ':documentId'
          ].pages[':pageNumber'].page_image.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberPageImage<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages'][':pageNumber']['page_image']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages'][':pageNumber']['page_image']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberPageImageKey(
            args,
          )
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages'][':pageNumber']['page_image']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
            ':documentId'
          ].pages[':pageNumber'].page_image.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberPageImageKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId/pages/:pageNumber/page_image',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberPageImage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages'][':pageNumber']['page_image']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages'][':pageNumber']['page_image']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberPageImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages'][':pageNumber']['page_image']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
            ':documentId'
          ].pages[':pageNumber'].page_image.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberTabsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages'][':pageNumber']['tabs']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId/pages/:pageNumber/tabs',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberTabs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages'][':pageNumber']['tabs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages'][':pageNumber']['tabs']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberTabsKey(
            args,
          )
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages'][':pageNumber']['tabs']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
            ':documentId'
          ].pages[':pageNumber'].tabs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberTabs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages'][':pageNumber']['tabs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages'][':pageNumber']['tabs']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberTabsKey(
            args,
          )
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages'][':pageNumber']['tabs']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
            ':documentId'
          ].pages[':pageNumber'].tabs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdResponsiveHtmlPreviewKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId/responsive_html_preview',
    'POST',
  ] as const
}

export function usePostV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdResponsiveHtmlPreview<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['responsive_html_preview']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['responsive_html_preview']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdResponsiveHtmlPreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['responsive_html_preview']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
            ':documentId'
          ].responsive_html_preview.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['tabs']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId/tabs',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['tabs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['tabs']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['tabs']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
            ':documentId'
          ].tabs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['tabs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['tabs']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['tabs']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
            ':documentId'
          ].tabs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId/tabs',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['tabs']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['tabs']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['tabs']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
            ':documentId'
          ].tabs.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId/tabs',
    'POST',
  ] as const
}

export function usePostV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['tabs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['tabs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['tabs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
            ':documentId'
          ].tabs.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId/tabs',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['tabs']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['tabs']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['tabs']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
            ':documentId'
          ].tabs.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplatesKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['templates']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId/templates',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplates<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['templates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['templates']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplatesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['templates']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
            ':documentId'
          ].templates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplates<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['templates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['templates']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplatesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['templates']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
            ':documentId'
          ].templates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplatesKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId/templates',
    'POST',
  ] as const
}

export function usePostV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplates<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['templates']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['templates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['templates']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
            ':documentId'
          ].templates.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplatesTemplateIdKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId/templates/:templateId',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplatesTemplateId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['templates'][':templateId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['templates'][':templateId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplatesTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['templates'][':templateId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
            ':documentId'
          ].templates[':templateId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['email_settings']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/email_settings', args] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['email_settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['email_settings']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['email_settings']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].email_settings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['email_settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['email_settings']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['email_settings']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].email_settings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/email_settings', 'PUT'] as const
}

export function usePutV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['email_settings']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['email_settings']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['email_settings']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].email_settings.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/email_settings', 'POST'] as const
}

export function usePostV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['email_settings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['email_settings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['email_settings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].email_settings.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/email_settings',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['email_settings']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['email_settings']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['email_settings']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].email_settings.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdFormDataKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['form_data']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/form_data', args] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdFormData<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['form_data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['form_data']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdFormDataKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['form_data']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].form_data.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdFormData<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['form_data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['form_data']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdFormDataKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['form_data']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].form_data.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdHtmlDefinitionsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['html_definitions']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/html_definitions', args] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdHtmlDefinitions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['html_definitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['html_definitions']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdHtmlDefinitionsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['html_definitions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].html_definitions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdHtmlDefinitions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['html_definitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['html_definitions']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdHtmlDefinitionsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['html_definitions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].html_definitions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdLockKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['lock']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/lock', args] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdLock<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['lock']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['lock']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdLockKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['lock']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].lock.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdLock<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['lock']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['lock']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdLockKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['lock']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].lock.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdEnvelopesEnvelopeIdLockKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/lock', 'PUT'] as const
}

export function usePutV21AccountsAccountIdEnvelopesEnvelopeIdLock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['lock']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['lock']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdEnvelopesEnvelopeIdLockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['lock']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].lock.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdEnvelopesEnvelopeIdLockKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/lock', 'POST'] as const
}

export function usePostV21AccountsAccountIdEnvelopesEnvelopeIdLock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['lock']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['lock']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdEnvelopesEnvelopeIdLockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['lock']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].lock.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdLockKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/lock', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdEnvelopesEnvelopeIdLock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['lock']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['lock']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdLockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['lock']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].lock.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdNotificationKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['notification']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/notification', args] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdNotification<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['notification']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['notification']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdNotificationKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['notification']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].notification.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdNotification<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['notification']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['notification']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdNotificationKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['notification']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].notification.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdEnvelopesEnvelopeIdNotificationKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/notification', 'PUT'] as const
}

export function usePutV21AccountsAccountIdEnvelopesEnvelopeIdNotification<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['notification']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['notification']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdEnvelopesEnvelopeIdNotificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['notification']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].notification.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients', args] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipients<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipients<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients', 'PUT'] as const
}

export function usePutV21AccountsAccountIdEnvelopesEnvelopeIdRecipients<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients', 'POST'] as const
}

export function usePostV21AccountsAccountIdEnvelopesEnvelopeIdRecipients<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdEnvelopesEnvelopeIdRecipients<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsDocumentVisibilityKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients/document_visibility',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsDocumentVisibility<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients']['document_visibility']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients']['document_visibility']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsDocumentVisibilityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients']['document_visibility']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[
            ':envelopeId'
          ].recipients.document_visibility.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients/:recipientId',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
            ':recipientId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdConsumerDisclosureKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['consumer_disclosure']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients/:recipientId/consumer_disclosure',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdConsumerDisclosure<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['consumer_disclosure']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['consumer_disclosure']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdConsumerDisclosureKey(
            args,
          )
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['consumer_disclosure']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
            ':recipientId'
          ].consumer_disclosure.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdConsumerDisclosure<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['consumer_disclosure']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['consumer_disclosure']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdConsumerDisclosureKey(
            args,
          )
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['consumer_disclosure']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
            ':recipientId'
          ].consumer_disclosure.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdConsumerDisclosureLangCodeKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['consumer_disclosure'][':langCode']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients/:recipientId/consumer_disclosure/:langCode',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdConsumerDisclosureLangCode<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['consumer_disclosure'][':langCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['consumer_disclosure'][':langCode']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdConsumerDisclosureLangCodeKey(
            args,
          )
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['consumer_disclosure'][':langCode']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
            ':recipientId'
          ].consumer_disclosure[':langCode'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdConsumerDisclosureLangCode<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['consumer_disclosure'][':langCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['consumer_disclosure'][':langCode']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdConsumerDisclosureLangCodeKey(
            args,
          )
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['consumer_disclosure'][':langCode']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
            ':recipientId'
          ].consumer_disclosure[':langCode'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdDocumentVisibilityKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['document_visibility']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients/:recipientId/document_visibility',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdDocumentVisibility<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['document_visibility']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['document_visibility']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdDocumentVisibilityKey(
            args,
          )
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['document_visibility']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
            ':recipientId'
          ].document_visibility.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdDocumentVisibility<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['document_visibility']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['document_visibility']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdDocumentVisibilityKey(
            args,
          )
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['document_visibility']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
            ':recipientId'
          ].document_visibility.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdDocumentVisibilityKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients/:recipientId/document_visibility',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdDocumentVisibility<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['document_visibility']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['document_visibility']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdDocumentVisibilityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['document_visibility']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
            ':recipientId'
          ].document_visibility.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdIdentityProofTokenKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients/:recipientId/identity_proof_token',
    'POST',
  ] as const
}

export function usePostV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdIdentityProofToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['identity_proof_token']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['identity_proof_token']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdIdentityProofTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['identity_proof_token']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
            ':recipientId'
          ].identity_proof_token.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdInitialsImageKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['initials_image']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients/:recipientId/initials_image',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdInitialsImage<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['initials_image']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['initials_image']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdInitialsImageKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['initials_image']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
            ':recipientId'
          ].initials_image.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdInitialsImage<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['initials_image']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['initials_image']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdInitialsImageKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['initials_image']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
            ':recipientId'
          ].initials_image.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdInitialsImageKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients/:recipientId/initials_image',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdInitialsImage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['initials_image']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['initials_image']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdInitialsImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['initials_image']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
            ':recipientId'
          ].initials_image.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['signature']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients/:recipientId/signature',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignature<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['signature']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['signature']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['signature']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
            ':recipientId'
          ].signature.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignature<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['signature']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['signature']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['signature']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
            ':recipientId'
          ].signature.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureImageKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['signature_image']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients/:recipientId/signature_image',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureImage<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['signature_image']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['signature_image']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureImageKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['signature_image']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
            ':recipientId'
          ].signature_image.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureImage<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['signature_image']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['signature_image']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureImageKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['signature_image']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
            ':recipientId'
          ].signature_image.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureImageKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients/:recipientId/signature_image',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureImage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['signature_image']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['signature_image']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['signature_image']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
            ':recipientId'
          ].signature_image.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['tabs']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients/:recipientId/tabs',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['tabs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['tabs']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['tabs']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
            ':recipientId'
          ].tabs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['tabs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['tabs']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['tabs']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
            ':recipientId'
          ].tabs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients/:recipientId/tabs',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['tabs']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['tabs']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['tabs']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
            ':recipientId'
          ].tabs.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients/:recipientId/tabs',
    'POST',
  ] as const
}

export function usePostV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['tabs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['tabs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['tabs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
            ':recipientId'
          ].tabs.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients/:recipientId/tabs',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['tabs']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['tabs']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['tabs']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
            ':recipientId'
          ].tabs.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdViewsIdentityManualReviewKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients/:recipientId/views/identity_manual_review',
    'POST',
  ] as const
}

export function usePostV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdViewsIdentityManualReview<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['views']['identity_manual_review']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['views']['identity_manual_review']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdViewsIdentityManualReviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['views']['identity_manual_review']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
            ':recipientId'
          ].views.identity_manual_review.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdEnvelopesEnvelopeIdResponsiveHtmlPreviewKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/responsive_html_preview',
    'POST',
  ] as const
}

export function usePostV21AccountsAccountIdEnvelopesEnvelopeIdResponsiveHtmlPreview<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['responsive_html_preview']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['responsive_html_preview']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV21AccountsAccountIdEnvelopesEnvelopeIdResponsiveHtmlPreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['responsive_html_preview']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[
            ':envelopeId'
          ].responsive_html_preview.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdTabsBlobKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['tabs_blob']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/tabs_blob', args] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdTabsBlob<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['tabs_blob']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['tabs_blob']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdTabsBlobKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['tabs_blob']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].tabs_blob.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdTabsBlob<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['tabs_blob']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['tabs_blob']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdTabsBlobKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['tabs_blob']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].tabs_blob.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdEnvelopesEnvelopeIdTabsBlobKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/tabs_blob', 'PUT'] as const
}

export function usePutV21AccountsAccountIdEnvelopesEnvelopeIdTabsBlob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['tabs_blob']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['tabs_blob']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdEnvelopesEnvelopeIdTabsBlobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['tabs_blob']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].tabs_blob.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdTemplatesKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['templates']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/templates', args] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdTemplates<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['templates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['templates']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdTemplatesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['templates']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].templates.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdTemplates<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['templates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['templates']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdTemplatesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['templates']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].templates.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdEnvelopesEnvelopeIdTemplatesKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/templates', 'POST'] as const
}

export function usePostV21AccountsAccountIdEnvelopesEnvelopeIdTemplates<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['templates']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['templates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdEnvelopesEnvelopeIdTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['templates']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].templates.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdEnvelopesEnvelopeIdViewsCorrectKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/views/correct', 'POST'] as const
}

export function usePostV21AccountsAccountIdEnvelopesEnvelopeIdViewsCorrect<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['views']['correct']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['views']['correct']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdEnvelopesEnvelopeIdViewsCorrectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['views']['correct']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].views.correct.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdViewsCorrectKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/views/correct',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdEnvelopesEnvelopeIdViewsCorrect<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['views']['correct']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['views']['correct']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdViewsCorrectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['views']['correct']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].views.correct.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdEnvelopesEnvelopeIdViewsEditKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/views/edit', 'POST'] as const
}

export function usePostV21AccountsAccountIdEnvelopesEnvelopeIdViewsEdit<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['views']['edit']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['views']['edit']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdEnvelopesEnvelopeIdViewsEditKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['views']['edit']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].views.edit.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdEnvelopesEnvelopeIdViewsRecipientKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/views/recipient',
    'POST',
  ] as const
}

export function usePostV21AccountsAccountIdEnvelopesEnvelopeIdViewsRecipient<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['views']['recipient']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['views']['recipient']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdEnvelopesEnvelopeIdViewsRecipientKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['views']['recipient']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].views.recipient.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdEnvelopesEnvelopeIdViewsRecipientPreviewKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/views/recipient_preview',
    'POST',
  ] as const
}

export function usePostV21AccountsAccountIdEnvelopesEnvelopeIdViewsRecipientPreview<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['views']['recipient_preview']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['views']['recipient_preview']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV21AccountsAccountIdEnvelopesEnvelopeIdViewsRecipientPreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['views']['recipient_preview']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[
            ':envelopeId'
          ].views.recipient_preview.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdEnvelopesEnvelopeIdViewsSenderKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/views/sender', 'POST'] as const
}

export function usePostV21AccountsAccountIdEnvelopesEnvelopeIdViewsSender<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['views']['sender']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['views']['sender']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdEnvelopesEnvelopeIdViewsSenderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['views']['sender']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].views.sender.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdEnvelopesEnvelopeIdViewsSharedKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/views/shared', 'POST'] as const
}

export function usePostV21AccountsAccountIdEnvelopesEnvelopeIdViewsShared<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['views']['shared']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['views']['shared']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdEnvelopesEnvelopeIdViewsSharedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['views']['shared']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].views.shared.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/workflow', args] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdWorkflow<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].workflow.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdWorkflow<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].workflow.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/workflow', 'PUT'] as const
}

export function usePutV21AccountsAccountIdEnvelopesEnvelopeIdWorkflow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].workflow.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/workflow', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflow<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].workflow.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowScheduledSendingKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['scheduledSending']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/workflow/scheduledSending',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowScheduledSending<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['scheduledSending']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['scheduledSending']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowScheduledSendingKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['scheduledSending']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[
            ':envelopeId'
          ].workflow.scheduledSending.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowScheduledSending<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['scheduledSending']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['scheduledSending']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowScheduledSendingKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['scheduledSending']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[
            ':envelopeId'
          ].workflow.scheduledSending.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowScheduledSendingKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/workflow/scheduledSending',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowScheduledSending<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['scheduledSending']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['scheduledSending']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowScheduledSendingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['scheduledSending']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[
            ':envelopeId'
          ].workflow.scheduledSending.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowScheduledSendingKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/workflow/scheduledSending',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowScheduledSending<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['scheduledSending']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['scheduledSending']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowScheduledSendingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['scheduledSending']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[
            ':envelopeId'
          ].workflow.scheduledSending.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/envelopes/:envelopeId/workflow/steps', 'POST'] as const
}

export function usePostV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowSteps<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].workflow.steps.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/workflow/steps/:workflowStepId',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].workflow.steps[
            ':workflowStepId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].workflow.steps[
            ':workflowStepId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/workflow/steps/:workflowStepId',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].workflow.steps[
            ':workflowStepId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/workflow/steps/:workflowStepId',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].workflow.steps[
            ':workflowStepId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdDelayedRoutingKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/workflow/steps/:workflowStepId/delayedRouting',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdDelayedRouting<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdDelayedRoutingKey(
            args,
          )
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].workflow.steps[
            ':workflowStepId'
          ].delayedRouting.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdDelayedRouting<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdDelayedRoutingKey(
            args,
          )
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
                (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].workflow.steps[
            ':workflowStepId'
          ].delayedRouting.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdDelayedRoutingKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/workflow/steps/:workflowStepId/delayedRouting',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdDelayedRouting<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdDelayedRoutingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].workflow.steps[
            ':workflowStepId'
          ].delayedRouting.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdDelayedRoutingKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/workflow/steps/:workflowStepId/delayedRouting',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdDelayedRouting<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdDelayedRoutingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].workflow.steps[
            ':workflowStepId'
          ].delayedRouting.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdFavoriteTemplatesKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['favorite_templates']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/favorite_templates', args] as const
}

export function useGetV21AccountsAccountIdFavoriteTemplates<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['favorite_templates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['favorite_templates']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdFavoriteTemplatesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['favorite_templates']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].favorite_templates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdFavoriteTemplates<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['favorite_templates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['favorite_templates']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdFavoriteTemplatesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['favorite_templates']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].favorite_templates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdFavoriteTemplatesKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/favorite_templates', 'PUT'] as const
}

export function usePutV21AccountsAccountIdFavoriteTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['favorite_templates']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['favorite_templates']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdFavoriteTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['favorite_templates']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].favorite_templates.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdFavoriteTemplatesKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/favorite_templates', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdFavoriteTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['favorite_templates']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['favorite_templates']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdFavoriteTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['favorite_templates']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].favorite_templates.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdFoldersKey(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['folders']['$get']>,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/folders', args] as const
}

export function useGetV21AccountsAccountIdFolders<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['folders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['folders']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['folders']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts[':accountId'].folders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdFolders<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['folders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['folders']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['folders']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts[':accountId'].folders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdFoldersFolderIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['folders'][':folderId']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/folders/:folderId', args] as const
}

export function useGetV21AccountsAccountIdFoldersFolderId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['folders'][':folderId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['folders'][':folderId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdFoldersFolderIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['folders'][':folderId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].folders[':folderId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdFoldersFolderId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['folders'][':folderId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['folders'][':folderId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdFoldersFolderIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['folders'][':folderId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].folders[':folderId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdFoldersFolderIdKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/folders/:folderId', 'PUT'] as const
}

export function usePutV21AccountsAccountIdFoldersFolderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['folders'][':folderId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['folders'][':folderId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdFoldersFolderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['folders'][':folderId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].folders[':folderId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdGroupsKey(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['groups']['$get']>,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/groups', args] as const
}

export function useGetV21AccountsAccountIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['groups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts[':accountId'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['groups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts[':accountId'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdGroupsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/groups', 'PUT'] as const
}

export function usePutV21AccountsAccountIdGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['groups']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['groups']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['groups']['$put']>
        },
      ) => parseResponse(client['v2.1'].accounts[':accountId'].groups.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdGroupsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/groups', 'POST'] as const
}

export function usePostV21AccountsAccountIdGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['groups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['groups']['$post']
          >
        },
      ) => parseResponse(client['v2.1'].accounts[':accountId'].groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdGroupsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/groups', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['groups']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['groups']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['groups']['$delete']
          >
        },
      ) => parseResponse(client['v2.1'].accounts[':accountId'].groups.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdGroupsGroupIdBrandsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['brands']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/groups/:groupId/brands', args] as const
}

export function useGetV21AccountsAccountIdGroupsGroupIdBrands<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['brands']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['brands']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdGroupsGroupIdBrandsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['brands']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].groups[':groupId'].brands.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdGroupsGroupIdBrands<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['brands']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['brands']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdGroupsGroupIdBrandsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['brands']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].groups[':groupId'].brands.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdGroupsGroupIdBrandsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/groups/:groupId/brands', 'PUT'] as const
}

export function usePutV21AccountsAccountIdGroupsGroupIdBrands<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['brands']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['brands']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdGroupsGroupIdBrandsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['brands']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].groups[':groupId'].brands.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdGroupsGroupIdBrandsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/groups/:groupId/brands', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdGroupsGroupIdBrands<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['brands']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['brands']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdGroupsGroupIdBrandsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['brands']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].groups[':groupId'].brands.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdGroupsGroupIdUsersKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['users']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/groups/:groupId/users', args] as const
}

export function useGetV21AccountsAccountIdGroupsGroupIdUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['users']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdGroupsGroupIdUsersKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['users']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].groups[':groupId'].users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdGroupsGroupIdUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['users']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdGroupsGroupIdUsersKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['users']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].groups[':groupId'].users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdGroupsGroupIdUsersKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/groups/:groupId/users', 'PUT'] as const
}

export function usePutV21AccountsAccountIdGroupsGroupIdUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['users']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['users']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdGroupsGroupIdUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['users']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].groups[':groupId'].users.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdGroupsGroupIdUsersKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/groups/:groupId/users', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdGroupsGroupIdUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['users']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['users']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdGroupsGroupIdUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['users']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].groups[':groupId'].users.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdIdentityVerificationKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['identity_verification']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/identity_verification', args] as const
}

export function useGetV21AccountsAccountIdIdentityVerification<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['identity_verification']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['identity_verification']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdIdentityVerificationKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['identity_verification']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].identity_verification.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdIdentityVerification<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['identity_verification']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['identity_verification']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdIdentityVerificationKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['identity_verification']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].identity_verification.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdPaymentGatewayAccountsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['payment_gateway_accounts']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/payment_gateway_accounts', args] as const
}

export function useGetV21AccountsAccountIdPaymentGatewayAccounts<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['payment_gateway_accounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['payment_gateway_accounts']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdPaymentGatewayAccountsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['payment_gateway_accounts']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].payment_gateway_accounts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdPaymentGatewayAccounts<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['payment_gateway_accounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['payment_gateway_accounts']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdPaymentGatewayAccountsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['payment_gateway_accounts']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].payment_gateway_accounts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdPermissionProfilesKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['permission_profiles']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/permission_profiles', args] as const
}

export function useGetV21AccountsAccountIdPermissionProfiles<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['permission_profiles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['permission_profiles']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdPermissionProfilesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['permission_profiles']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].permission_profiles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdPermissionProfiles<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['permission_profiles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['permission_profiles']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdPermissionProfilesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['permission_profiles']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].permission_profiles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdPermissionProfilesKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/permission_profiles', 'POST'] as const
}

export function usePostV21AccountsAccountIdPermissionProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['permission_profiles']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['permission_profiles']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdPermissionProfilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['permission_profiles']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].permission_profiles.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdPermissionProfilesPermissionProfileIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['permission_profiles'][':permissionProfileId']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/permission_profiles/:permissionProfileId',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdPermissionProfilesPermissionProfileId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['permission_profiles'][':permissionProfileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['permission_profiles'][':permissionProfileId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdPermissionProfilesPermissionProfileIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['permission_profiles'][':permissionProfileId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].permission_profiles[':permissionProfileId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdPermissionProfilesPermissionProfileId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['permission_profiles'][':permissionProfileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['permission_profiles'][':permissionProfileId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdPermissionProfilesPermissionProfileIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['permission_profiles'][':permissionProfileId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].permission_profiles[':permissionProfileId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdPermissionProfilesPermissionProfileIdKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/permission_profiles/:permissionProfileId',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdPermissionProfilesPermissionProfileId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['permission_profiles'][':permissionProfileId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['permission_profiles'][':permissionProfileId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdPermissionProfilesPermissionProfileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['permission_profiles'][':permissionProfileId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].permission_profiles[':permissionProfileId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdPermissionProfilesPermissionProfileIdKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/permission_profiles/:permissionProfileId',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdPermissionProfilesPermissionProfileId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['permission_profiles'][':permissionProfileId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['permission_profiles'][':permissionProfileId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV21AccountsAccountIdPermissionProfilesPermissionProfileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['permission_profiles'][':permissionProfileId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].permission_profiles[':permissionProfileId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdPowerformsKey(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['powerforms']['$get']>,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/powerforms', args] as const
}

export function useGetV21AccountsAccountIdPowerforms<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['powerforms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['powerforms']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdPowerformsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['powerforms']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts[':accountId'].powerforms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdPowerforms<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['powerforms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['powerforms']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdPowerformsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['powerforms']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts[':accountId'].powerforms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdPowerformsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/powerforms', 'POST'] as const
}

export function usePostV21AccountsAccountIdPowerforms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['powerforms']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['powerforms']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdPowerformsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['powerforms']['$post']
          >
        },
      ) =>
        parseResponse(client['v2.1'].accounts[':accountId'].powerforms.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdPowerformsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/powerforms', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdPowerforms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['powerforms']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['powerforms']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdPowerformsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['powerforms']['$delete']
          >
        },
      ) =>
        parseResponse(client['v2.1'].accounts[':accountId'].powerforms.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdPowerformsSendersKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['powerforms']['senders']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/powerforms/senders', args] as const
}

export function useGetV21AccountsAccountIdPowerformsSenders<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['powerforms']['senders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['powerforms']['senders']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdPowerformsSendersKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['powerforms']['senders']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].powerforms.senders.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdPowerformsSenders<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['powerforms']['senders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['powerforms']['senders']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdPowerformsSendersKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['powerforms']['senders']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].powerforms.senders.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdPowerformsPowerFormIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['powerforms'][':powerFormId']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/powerforms/:powerFormId', args] as const
}

export function useGetV21AccountsAccountIdPowerformsPowerFormId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['powerforms'][':powerFormId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['powerforms'][':powerFormId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdPowerformsPowerFormIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['powerforms'][':powerFormId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].powerforms[':powerFormId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdPowerformsPowerFormId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['powerforms'][':powerFormId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['powerforms'][':powerFormId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdPowerformsPowerFormIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['powerforms'][':powerFormId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].powerforms[':powerFormId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdPowerformsPowerFormIdKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/powerforms/:powerFormId', 'PUT'] as const
}

export function usePutV21AccountsAccountIdPowerformsPowerFormId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['powerforms'][':powerFormId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['powerforms'][':powerFormId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdPowerformsPowerFormIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['powerforms'][':powerFormId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].powerforms[':powerFormId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdPowerformsPowerFormIdKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/powerforms/:powerFormId', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdPowerformsPowerFormId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['powerforms'][':powerFormId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['powerforms'][':powerFormId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdPowerformsPowerFormIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['powerforms'][':powerFormId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].powerforms[':powerFormId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdPowerformsPowerFormIdFormDataKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['powerforms'][':powerFormId']['form_data']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/powerforms/:powerFormId/form_data', args] as const
}

export function useGetV21AccountsAccountIdPowerformsPowerFormIdFormData<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['powerforms'][':powerFormId']['form_data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['powerforms'][':powerFormId']['form_data']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdPowerformsPowerFormIdFormDataKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['powerforms'][':powerFormId']['form_data']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].powerforms[':powerFormId'].form_data.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdPowerformsPowerFormIdFormData<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['powerforms'][':powerFormId']['form_data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['powerforms'][':powerFormId']['form_data']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdPowerformsPowerFormIdFormDataKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['powerforms'][':powerFormId']['form_data']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].powerforms[':powerFormId'].form_data.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdRecipientNamesKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['recipient_names']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/recipient_names', args] as const
}

export function useGetV21AccountsAccountIdRecipientNames<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['recipient_names']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['recipient_names']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdRecipientNamesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['recipient_names']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].recipient_names.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdRecipientNames<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['recipient_names']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['recipient_names']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdRecipientNamesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['recipient_names']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].recipient_names.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdSealsKey(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['seals']['$get']>,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/seals', args] as const
}

export function useGetV21AccountsAccountIdSeals<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['seals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['seals']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSealsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['seals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts[':accountId'].seals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdSeals<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['seals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['seals']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSealsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['seals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts[':accountId'].seals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdSearchFoldersSearchFolderIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['search_folders'][':searchFolderId']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/search_folders/:searchFolderId', args] as const
}

export function useGetV21AccountsAccountIdSearchFoldersSearchFolderId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['search_folders'][':searchFolderId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['search_folders'][':searchFolderId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSearchFoldersSearchFolderIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['search_folders'][':searchFolderId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].search_folders[':searchFolderId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdSearchFoldersSearchFolderId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['search_folders'][':searchFolderId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['search_folders'][':searchFolderId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSearchFoldersSearchFolderIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['search_folders'][':searchFolderId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].search_folders[':searchFolderId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdSettingsKey(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['settings']['$get']>,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/settings', args] as const
}

export function useGetV21AccountsAccountIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['settings']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['settings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts[':accountId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['settings']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['settings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts[':accountId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdSettingsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/settings', 'PUT'] as const
}

export function usePutV21AccountsAccountIdSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['settings']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['settings']['$put']
          >
        },
      ) => parseResponse(client['v2.1'].accounts[':accountId'].settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdSettingsBccEmailArchivesKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['bcc_email_archives']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/settings/bcc_email_archives', args] as const
}

export function useGetV21AccountsAccountIdSettingsBccEmailArchives<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['bcc_email_archives']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['settings']['bcc_email_archives']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSettingsBccEmailArchivesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['settings']['bcc_email_archives']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].settings.bcc_email_archives.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdSettingsBccEmailArchives<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['bcc_email_archives']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['settings']['bcc_email_archives']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSettingsBccEmailArchivesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['settings']['bcc_email_archives']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].settings.bcc_email_archives.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdSettingsBccEmailArchivesKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/settings/bcc_email_archives', 'POST'] as const
}

export function usePostV21AccountsAccountIdSettingsBccEmailArchives<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['settings']['bcc_email_archives']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['settings']['bcc_email_archives']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdSettingsBccEmailArchivesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['settings']['bcc_email_archives']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].settings.bcc_email_archives.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdSettingsBccEmailArchivesBccEmailArchiveIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['bcc_email_archives'][':bccEmailArchiveId']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/settings/bcc_email_archives/:bccEmailArchiveId',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdSettingsBccEmailArchivesBccEmailArchiveId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['bcc_email_archives'][':bccEmailArchiveId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['settings']['bcc_email_archives'][':bccEmailArchiveId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSettingsBccEmailArchivesBccEmailArchiveIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['settings']['bcc_email_archives'][':bccEmailArchiveId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].settings.bcc_email_archives[
            ':bccEmailArchiveId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdSettingsBccEmailArchivesBccEmailArchiveId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['bcc_email_archives'][':bccEmailArchiveId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['settings']['bcc_email_archives'][':bccEmailArchiveId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSettingsBccEmailArchivesBccEmailArchiveIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['settings']['bcc_email_archives'][':bccEmailArchiveId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].settings.bcc_email_archives[
            ':bccEmailArchiveId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdSettingsBccEmailArchivesBccEmailArchiveIdKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/settings/bcc_email_archives/:bccEmailArchiveId',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdSettingsBccEmailArchivesBccEmailArchiveId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['settings']['bcc_email_archives'][':bccEmailArchiveId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['settings']['bcc_email_archives'][':bccEmailArchiveId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV21AccountsAccountIdSettingsBccEmailArchivesBccEmailArchiveIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['settings']['bcc_email_archives'][':bccEmailArchiveId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].settings.bcc_email_archives[
            ':bccEmailArchiveId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdSettingsEnoteConfigurationKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['enote_configuration']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/settings/enote_configuration', args] as const
}

export function useGetV21AccountsAccountIdSettingsEnoteConfiguration<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['enote_configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['settings']['enote_configuration']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSettingsEnoteConfigurationKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['settings']['enote_configuration']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].settings.enote_configuration.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdSettingsEnoteConfiguration<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['enote_configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['settings']['enote_configuration']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSettingsEnoteConfigurationKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['settings']['enote_configuration']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].settings.enote_configuration.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdSettingsEnoteConfigurationKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/settings/enote_configuration', 'PUT'] as const
}

export function usePutV21AccountsAccountIdSettingsEnoteConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['settings']['enote_configuration']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['settings']['enote_configuration']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdSettingsEnoteConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['settings']['enote_configuration']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].settings.enote_configuration.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdSettingsEnoteConfigurationKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/settings/enote_configuration', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdSettingsEnoteConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['settings']['enote_configuration']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['settings']['enote_configuration']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdSettingsEnoteConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['settings']['enote_configuration']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].settings.enote_configuration.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdSettingsEnvelopePurgeConfigurationKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['envelope_purge_configuration']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/settings/envelope_purge_configuration', args] as const
}

export function useGetV21AccountsAccountIdSettingsEnvelopePurgeConfiguration<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['envelope_purge_configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['settings']['envelope_purge_configuration']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSettingsEnvelopePurgeConfigurationKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['settings']['envelope_purge_configuration']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].settings.envelope_purge_configuration.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdSettingsEnvelopePurgeConfiguration<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['envelope_purge_configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['settings']['envelope_purge_configuration']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSettingsEnvelopePurgeConfigurationKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['settings']['envelope_purge_configuration']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].settings.envelope_purge_configuration.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdSettingsEnvelopePurgeConfigurationKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/settings/envelope_purge_configuration', 'PUT'] as const
}

export function usePutV21AccountsAccountIdSettingsEnvelopePurgeConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['settings']['envelope_purge_configuration']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['settings']['envelope_purge_configuration']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdSettingsEnvelopePurgeConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['settings']['envelope_purge_configuration']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].settings.envelope_purge_configuration.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdSettingsNotificationDefaultsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['notification_defaults']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/settings/notification_defaults', args] as const
}

export function useGetV21AccountsAccountIdSettingsNotificationDefaults<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['notification_defaults']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['settings']['notification_defaults']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSettingsNotificationDefaultsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['settings']['notification_defaults']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].settings.notification_defaults.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdSettingsNotificationDefaults<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['notification_defaults']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['settings']['notification_defaults']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSettingsNotificationDefaultsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['settings']['notification_defaults']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].settings.notification_defaults.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdSettingsNotificationDefaultsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/settings/notification_defaults', 'PUT'] as const
}

export function usePutV21AccountsAccountIdSettingsNotificationDefaults<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['settings']['notification_defaults']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['settings']['notification_defaults']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdSettingsNotificationDefaultsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['settings']['notification_defaults']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].settings.notification_defaults.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdSettingsPasswordRulesKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['password_rules']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/settings/password_rules', args] as const
}

export function useGetV21AccountsAccountIdSettingsPasswordRules<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['password_rules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['settings']['password_rules']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSettingsPasswordRulesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['settings']['password_rules']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].settings.password_rules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdSettingsPasswordRules<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['password_rules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['settings']['password_rules']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSettingsPasswordRulesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['settings']['password_rules']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].settings.password_rules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdSettingsPasswordRulesKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/settings/password_rules', 'PUT'] as const
}

export function usePutV21AccountsAccountIdSettingsPasswordRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['settings']['password_rules']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['settings']['password_rules']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdSettingsPasswordRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['settings']['password_rules']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].settings.password_rules.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdSettingsTabsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['tabs']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/settings/tabs', args] as const
}

export function useGetV21AccountsAccountIdSettingsTabs<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['tabs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['settings']['tabs']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSettingsTabsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['settings']['tabs']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].settings.tabs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdSettingsTabs<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['tabs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['settings']['tabs']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSettingsTabsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['settings']['tabs']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].settings.tabs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdSettingsTabsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/settings/tabs', 'PUT'] as const
}

export function usePutV21AccountsAccountIdSettingsTabs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['settings']['tabs']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['settings']['tabs']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdSettingsTabsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['settings']['tabs']['$put']
          >
        },
      ) =>
        parseResponse(client['v2.1'].accounts[':accountId'].settings.tabs.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdSharedAccessKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['shared_access']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/shared_access', args] as const
}

export function useGetV21AccountsAccountIdSharedAccess<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['shared_access']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['shared_access']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSharedAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['shared_access']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].shared_access.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdSharedAccess<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['shared_access']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['shared_access']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSharedAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['shared_access']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].shared_access.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdSharedAccessKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/shared_access', 'PUT'] as const
}

export function usePutV21AccountsAccountIdSharedAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['shared_access']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['shared_access']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdSharedAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['shared_access']['$put']
          >
        },
      ) =>
        parseResponse(client['v2.1'].accounts[':accountId'].shared_access.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdSignatureProvidersKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signatureProviders']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/signatureProviders', args] as const
}

export function useGetV21AccountsAccountIdSignatureProviders<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signatureProviders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['signatureProviders']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSignatureProvidersKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['signatureProviders']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].signatureProviders.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdSignatureProviders<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signatureProviders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['signatureProviders']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSignatureProvidersKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['signatureProviders']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].signatureProviders.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdSignaturesKey(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['signatures']['$get']>,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/signatures', args] as const
}

export function useGetV21AccountsAccountIdSignatures<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['signatures']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['signatures']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSignaturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['signatures']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts[':accountId'].signatures.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdSignatures<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['signatures']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['signatures']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSignaturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['signatures']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts[':accountId'].signatures.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdSignaturesKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/signatures', 'PUT'] as const
}

export function usePutV21AccountsAccountIdSignatures<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['signatures']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['signatures']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdSignaturesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['signatures']['$put']
          >
        },
      ) => parseResponse(client['v2.1'].accounts[':accountId'].signatures.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdSignaturesKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/signatures', 'POST'] as const
}

export function usePostV21AccountsAccountIdSignatures<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['signatures']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['signatures']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdSignaturesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['signatures']['$post']
          >
        },
      ) =>
        parseResponse(client['v2.1'].accounts[':accountId'].signatures.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdSignaturesSignatureIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/signatures/:signatureId', args] as const
}

export function useGetV21AccountsAccountIdSignaturesSignatureId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSignaturesSignatureIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].signatures[':signatureId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdSignaturesSignatureId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSignaturesSignatureIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].signatures[':signatureId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdSignaturesSignatureIdKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/signatures/:signatureId', 'PUT'] as const
}

export function usePutV21AccountsAccountIdSignaturesSignatureId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdSignaturesSignatureIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].signatures[':signatureId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdSignaturesSignatureIdKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/signatures/:signatureId', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdSignaturesSignatureId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdSignaturesSignatureIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].signatures[':signatureId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdSignaturesSignatureIdImageTypeKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId'][':imageType']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/signatures/:signatureId/:imageType', args] as const
}

export function useGetV21AccountsAccountIdSignaturesSignatureIdImageType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId'][':imageType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId'][':imageType']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSignaturesSignatureIdImageTypeKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId'][':imageType']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].signatures[':signatureId'][':imageType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdSignaturesSignatureIdImageType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId'][':imageType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId'][':imageType']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSignaturesSignatureIdImageTypeKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId'][':imageType']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].signatures[':signatureId'][':imageType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdSignaturesSignatureIdImageTypeKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/signatures/:signatureId/:imageType', 'PUT'] as const
}

export function usePutV21AccountsAccountIdSignaturesSignatureIdImageType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId'][':imageType']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId'][':imageType']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdSignaturesSignatureIdImageTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId'][':imageType']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].signatures[':signatureId'][':imageType'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdSignaturesSignatureIdImageTypeKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/signatures/:signatureId/:imageType', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdSignaturesSignatureIdImageType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId'][':imageType']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId'][':imageType']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdSignaturesSignatureIdImageTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId'][':imageType']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].signatures[':signatureId'][':imageType'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdSigningGroupsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signing_groups']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/signing_groups', args] as const
}

export function useGetV21AccountsAccountIdSigningGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signing_groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['signing_groups']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSigningGroupsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['signing_groups']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].signing_groups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdSigningGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signing_groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['signing_groups']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSigningGroupsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['signing_groups']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].signing_groups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdSigningGroupsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/signing_groups', 'PUT'] as const
}

export function usePutV21AccountsAccountIdSigningGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['signing_groups']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['signing_groups']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdSigningGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['signing_groups']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].signing_groups.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdSigningGroupsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/signing_groups', 'POST'] as const
}

export function usePostV21AccountsAccountIdSigningGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['signing_groups']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['signing_groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdSigningGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['signing_groups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].signing_groups.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdSigningGroupsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/signing_groups', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdSigningGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['signing_groups']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['signing_groups']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdSigningGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['signing_groups']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].signing_groups.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdSigningGroupsSigningGroupIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signing_groups'][':signingGroupId']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/signing_groups/:signingGroupId', args] as const
}

export function useGetV21AccountsAccountIdSigningGroupsSigningGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signing_groups'][':signingGroupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['signing_groups'][':signingGroupId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSigningGroupsSigningGroupIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['signing_groups'][':signingGroupId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].signing_groups[':signingGroupId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdSigningGroupsSigningGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signing_groups'][':signingGroupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['signing_groups'][':signingGroupId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSigningGroupsSigningGroupIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['signing_groups'][':signingGroupId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].signing_groups[':signingGroupId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdSigningGroupsSigningGroupIdKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/signing_groups/:signingGroupId', 'PUT'] as const
}

export function usePutV21AccountsAccountIdSigningGroupsSigningGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['signing_groups'][':signingGroupId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['signing_groups'][':signingGroupId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdSigningGroupsSigningGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['signing_groups'][':signingGroupId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].signing_groups[':signingGroupId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdSigningGroupsSigningGroupIdUsersKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signing_groups'][':signingGroupId']['users']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/signing_groups/:signingGroupId/users', args] as const
}

export function useGetV21AccountsAccountIdSigningGroupsSigningGroupIdUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signing_groups'][':signingGroupId']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['signing_groups'][':signingGroupId']['users']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSigningGroupsSigningGroupIdUsersKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['signing_groups'][':signingGroupId']['users']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].signing_groups[':signingGroupId'].users.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdSigningGroupsSigningGroupIdUsers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signing_groups'][':signingGroupId']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['signing_groups'][':signingGroupId']['users']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSigningGroupsSigningGroupIdUsersKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['signing_groups'][':signingGroupId']['users']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].signing_groups[':signingGroupId'].users.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdSigningGroupsSigningGroupIdUsersKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/signing_groups/:signingGroupId/users', 'PUT'] as const
}

export function usePutV21AccountsAccountIdSigningGroupsSigningGroupIdUsers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['signing_groups'][':signingGroupId']['users']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['signing_groups'][':signingGroupId']['users']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdSigningGroupsSigningGroupIdUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['signing_groups'][':signingGroupId']['users']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].signing_groups[':signingGroupId'].users.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdSigningGroupsSigningGroupIdUsersKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/signing_groups/:signingGroupId/users',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdSigningGroupsSigningGroupIdUsers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['signing_groups'][':signingGroupId']['users']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['signing_groups'][':signingGroupId']['users']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdSigningGroupsSigningGroupIdUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['signing_groups'][':signingGroupId']['users']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].signing_groups[':signingGroupId'].users.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdSupportedLanguagesKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['supported_languages']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/supported_languages', args] as const
}

export function useGetV21AccountsAccountIdSupportedLanguages<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['supported_languages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['supported_languages']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSupportedLanguagesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['supported_languages']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].supported_languages.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdSupportedLanguages<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['supported_languages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['supported_languages']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdSupportedLanguagesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['supported_languages']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].supported_languages.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdTabDefinitionsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['tab_definitions']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/tab_definitions', args] as const
}

export function useGetV21AccountsAccountIdTabDefinitions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['tab_definitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['tab_definitions']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTabDefinitionsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['tab_definitions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].tab_definitions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdTabDefinitions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['tab_definitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['tab_definitions']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTabDefinitionsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['tab_definitions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].tab_definitions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdTabDefinitionsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/tab_definitions', 'POST'] as const
}

export function usePostV21AccountsAccountIdTabDefinitions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['tab_definitions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['tab_definitions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdTabDefinitionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['tab_definitions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].tab_definitions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdTabDefinitionsCustomTabIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['tab_definitions'][':customTabId']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/tab_definitions/:customTabId', args] as const
}

export function useGetV21AccountsAccountIdTabDefinitionsCustomTabId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['tab_definitions'][':customTabId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['tab_definitions'][':customTabId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTabDefinitionsCustomTabIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['tab_definitions'][':customTabId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].tab_definitions[':customTabId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdTabDefinitionsCustomTabId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['tab_definitions'][':customTabId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['tab_definitions'][':customTabId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTabDefinitionsCustomTabIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['tab_definitions'][':customTabId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].tab_definitions[':customTabId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdTabDefinitionsCustomTabIdKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/tab_definitions/:customTabId', 'PUT'] as const
}

export function usePutV21AccountsAccountIdTabDefinitionsCustomTabId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['tab_definitions'][':customTabId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['tab_definitions'][':customTabId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdTabDefinitionsCustomTabIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['tab_definitions'][':customTabId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].tab_definitions[':customTabId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdTabDefinitionsCustomTabIdKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/tab_definitions/:customTabId', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdTabDefinitionsCustomTabId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['tab_definitions'][':customTabId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['tab_definitions'][':customTabId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdTabDefinitionsCustomTabIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['tab_definitions'][':customTabId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].tab_definitions[':customTabId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdTemplatesKey(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['templates']['$get']>,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/templates', args] as const
}

export function useGetV21AccountsAccountIdTemplates<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['templates']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['templates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts[':accountId'].templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdTemplates<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['templates']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['templates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts[':accountId'].templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdTemplatesKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/templates', 'POST'] as const
}

export function usePostV21AccountsAccountIdTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['templates']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['templates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates']['$post']
          >
        },
      ) => parseResponse(client['v2.1'].accounts[':accountId'].templates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdTemplatesTemplateIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/templates/:templateId', args] as const
}

export function useGetV21AccountsAccountIdTemplatesTemplateId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdTemplatesTemplateId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdTemplatesTemplateIdKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/templates/:templateId', 'PUT'] as const
}

export function usePutV21AccountsAccountIdTemplatesTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdTemplatesTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdTemplatesTemplateIdCustomFieldsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['custom_fields']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/templates/:templateId/custom_fields', args] as const
}

export function useGetV21AccountsAccountIdTemplatesTemplateIdCustomFields<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['custom_fields']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['custom_fields']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdCustomFieldsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['custom_fields']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].custom_fields.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdTemplatesTemplateIdCustomFields<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['custom_fields']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['custom_fields']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdCustomFieldsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['custom_fields']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].custom_fields.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdTemplatesTemplateIdCustomFieldsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/templates/:templateId/custom_fields', 'PUT'] as const
}

export function usePutV21AccountsAccountIdTemplatesTemplateIdCustomFields<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['custom_fields']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['custom_fields']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdTemplatesTemplateIdCustomFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['custom_fields']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].custom_fields.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdTemplatesTemplateIdCustomFieldsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/templates/:templateId/custom_fields', 'POST'] as const
}

export function usePostV21AccountsAccountIdTemplatesTemplateIdCustomFields<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['custom_fields']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['custom_fields']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdTemplatesTemplateIdCustomFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['custom_fields']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].custom_fields.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdTemplatesTemplateIdCustomFieldsKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/custom_fields',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdTemplatesTemplateIdCustomFields<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['custom_fields']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['custom_fields']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdTemplatesTemplateIdCustomFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['custom_fields']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].custom_fields.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdTemplatesTemplateIdDocumentsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/templates/:templateId/documents', args] as const
}

export function useGetV21AccountsAccountIdTemplatesTemplateIdDocuments<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdDocumentsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].documents.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdTemplatesTemplateIdDocuments<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdDocumentsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].documents.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdTemplatesTemplateIdDocumentsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/templates/:templateId/documents', 'PUT'] as const
}

export function usePutV21AccountsAccountIdTemplatesTemplateIdDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdTemplatesTemplateIdDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].documents.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdTemplatesTemplateIdDocumentsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/templates/:templateId/documents', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdTemplatesTemplateIdDocuments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdTemplatesTemplateIdDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].documents.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/documents/:documentId',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
            ':documentId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
            ':documentId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/documents/:documentId',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
            ':documentId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['fields']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/documents/:documentId/fields',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFields<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['fields']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['fields']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['fields']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
            ':documentId'
          ].fields.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFields<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['fields']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['fields']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['fields']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
            ':documentId'
          ].fields.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/documents/:documentId/fields',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFields<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['fields']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['fields']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['fields']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
            ':documentId'
          ].fields.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/documents/:documentId/fields',
    'POST',
  ] as const
}

export function usePostV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFields<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['fields']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['fields']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['fields']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
            ':documentId'
          ].fields.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/documents/:documentId/fields',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFields<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['fields']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['fields']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['fields']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
            ':documentId'
          ].fields.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdHtmlDefinitionsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['html_definitions']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/documents/:documentId/html_definitions',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdHtmlDefinitions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['html_definitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['html_definitions']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdHtmlDefinitionsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['html_definitions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
            ':documentId'
          ].html_definitions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdHtmlDefinitions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['html_definitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['html_definitions']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdHtmlDefinitionsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['html_definitions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
            ':documentId'
          ].html_definitions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/documents/:documentId/pages',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPages<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
            ':documentId'
          ].pages.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPages<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
            ':documentId'
          ].pages.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/documents/:documentId/pages/:pageNumber',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumber<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages'][':pageNumber']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages'][':pageNumber']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages'][':pageNumber']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
            ':documentId'
          ].pages[':pageNumber'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberPageImageKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages'][':pageNumber']['page_image']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/documents/:documentId/pages/:pageNumber/page_image',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberPageImage<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages'][':pageNumber']['page_image']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages'][':pageNumber']['page_image']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberPageImageKey(
            args,
          )
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages'][':pageNumber']['page_image']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
            ':documentId'
          ].pages[':pageNumber'].page_image.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberPageImage<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages'][':pageNumber']['page_image']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages'][':pageNumber']['page_image']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberPageImageKey(
            args,
          )
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages'][':pageNumber']['page_image']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
            ':documentId'
          ].pages[':pageNumber'].page_image.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberPageImageKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/documents/:documentId/pages/:pageNumber/page_image',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberPageImage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages'][':pageNumber']['page_image']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages'][':pageNumber']['page_image']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberPageImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages'][':pageNumber']['page_image']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
            ':documentId'
          ].pages[':pageNumber'].page_image.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberTabsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages'][':pageNumber']['tabs']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/documents/:documentId/pages/:pageNumber/tabs',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberTabs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages'][':pageNumber']['tabs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages'][':pageNumber']['tabs']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberTabsKey(
            args,
          )
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages'][':pageNumber']['tabs']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
            ':documentId'
          ].pages[':pageNumber'].tabs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberTabs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages'][':pageNumber']['tabs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages'][':pageNumber']['tabs']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberTabsKey(
            args,
          )
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages'][':pageNumber']['tabs']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
            ':documentId'
          ].pages[':pageNumber'].tabs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdResponsiveHtmlPreviewKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/documents/:documentId/responsive_html_preview',
    'POST',
  ] as const
}

export function usePostV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdResponsiveHtmlPreview<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['responsive_html_preview']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['responsive_html_preview']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdResponsiveHtmlPreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['responsive_html_preview']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
            ':documentId'
          ].responsive_html_preview.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['tabs']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/documents/:documentId/tabs',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['tabs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['tabs']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['tabs']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
            ':documentId'
          ].tabs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['tabs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['tabs']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['tabs']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
            ':documentId'
          ].tabs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/documents/:documentId/tabs',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['tabs']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['tabs']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['tabs']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
            ':documentId'
          ].tabs.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/documents/:documentId/tabs',
    'POST',
  ] as const
}

export function usePostV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['tabs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['tabs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['tabs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
            ':documentId'
          ].tabs.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/documents/:documentId/tabs',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['tabs']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['tabs']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['tabs']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
            ':documentId'
          ].tabs.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdTemplatesTemplateIdHtmlDefinitionsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['html_definitions']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/templates/:templateId/html_definitions', args] as const
}

export function useGetV21AccountsAccountIdTemplatesTemplateIdHtmlDefinitions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['html_definitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['html_definitions']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdHtmlDefinitionsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['html_definitions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].html_definitions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdTemplatesTemplateIdHtmlDefinitions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['html_definitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['html_definitions']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdHtmlDefinitionsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['html_definitions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].html_definitions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdTemplatesTemplateIdLockKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['lock']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/templates/:templateId/lock', args] as const
}

export function useGetV21AccountsAccountIdTemplatesTemplateIdLock<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['lock']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['lock']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdLockKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['lock']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].lock.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdTemplatesTemplateIdLock<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['lock']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['lock']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdLockKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['lock']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].lock.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdTemplatesTemplateIdLockKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/templates/:templateId/lock', 'PUT'] as const
}

export function usePutV21AccountsAccountIdTemplatesTemplateIdLock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['lock']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['lock']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdTemplatesTemplateIdLockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['lock']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].lock.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdTemplatesTemplateIdLockKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/templates/:templateId/lock', 'POST'] as const
}

export function usePostV21AccountsAccountIdTemplatesTemplateIdLock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['lock']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['lock']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdTemplatesTemplateIdLockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['lock']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].lock.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdTemplatesTemplateIdLockKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/templates/:templateId/lock', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdTemplatesTemplateIdLock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['lock']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['lock']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdTemplatesTemplateIdLockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['lock']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].lock.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdTemplatesTemplateIdNotificationKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['notification']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/templates/:templateId/notification', args] as const
}

export function useGetV21AccountsAccountIdTemplatesTemplateIdNotification<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['notification']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['notification']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdNotificationKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['notification']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].notification.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdTemplatesTemplateIdNotification<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['notification']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['notification']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdNotificationKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['notification']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].notification.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdTemplatesTemplateIdNotificationKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/templates/:templateId/notification', 'PUT'] as const
}

export function usePutV21AccountsAccountIdTemplatesTemplateIdNotification<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['notification']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['notification']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdTemplatesTemplateIdNotificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['notification']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].notification.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdTemplatesTemplateIdRecipientsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/templates/:templateId/recipients', args] as const
}

export function useGetV21AccountsAccountIdTemplatesTemplateIdRecipients<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdRecipientsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].recipients.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdTemplatesTemplateIdRecipients<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdRecipientsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].recipients.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdTemplatesTemplateIdRecipientsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/templates/:templateId/recipients', 'PUT'] as const
}

export function usePutV21AccountsAccountIdTemplatesTemplateIdRecipients<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdTemplatesTemplateIdRecipientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].recipients.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdTemplatesTemplateIdRecipientsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/templates/:templateId/recipients', 'POST'] as const
}

export function usePostV21AccountsAccountIdTemplatesTemplateIdRecipients<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdTemplatesTemplateIdRecipientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].recipients.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdTemplatesTemplateIdRecipientsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/templates/:templateId/recipients', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdTemplatesTemplateIdRecipients<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdTemplatesTemplateIdRecipientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].recipients.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdTemplatesTemplateIdRecipientsDocumentVisibilityKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/recipients/document_visibility',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdTemplatesTemplateIdRecipientsDocumentVisibility<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients']['document_visibility']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients']['document_visibility']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV21AccountsAccountIdTemplatesTemplateIdRecipientsDocumentVisibilityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients']['document_visibility']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[
            ':templateId'
          ].recipients.document_visibility.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/recipients/:recipientId',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].recipients[
            ':recipientId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdBulkRecipientsKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/recipients/:recipientId/bulk_recipients',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdBulkRecipients<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['bulk_recipients']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['bulk_recipients']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdBulkRecipientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['bulk_recipients']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].recipients[
            ':recipientId'
          ].bulk_recipients.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdDocumentVisibilityKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['document_visibility']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/recipients/:recipientId/document_visibility',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdDocumentVisibility<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['document_visibility']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['document_visibility']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdDocumentVisibilityKey(
            args,
          )
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['document_visibility']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].recipients[
            ':recipientId'
          ].document_visibility.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdDocumentVisibility<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['document_visibility']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['document_visibility']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdDocumentVisibilityKey(
            args,
          )
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['document_visibility']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].recipients[
            ':recipientId'
          ].document_visibility.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdDocumentVisibilityKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/recipients/:recipientId/document_visibility',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdDocumentVisibility<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['document_visibility']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['document_visibility']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdDocumentVisibilityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['document_visibility']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].recipients[
            ':recipientId'
          ].document_visibility.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['tabs']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/recipients/:recipientId/tabs',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['tabs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['tabs']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['tabs']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].recipients[
            ':recipientId'
          ].tabs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['tabs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['tabs']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['tabs']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].recipients[
            ':recipientId'
          ].tabs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/recipients/:recipientId/tabs',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['tabs']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['tabs']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['tabs']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].recipients[
            ':recipientId'
          ].tabs.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/recipients/:recipientId/tabs',
    'POST',
  ] as const
}

export function usePostV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['tabs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['tabs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['tabs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].recipients[
            ':recipientId'
          ].tabs.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/recipients/:recipientId/tabs',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['tabs']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['tabs']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['tabs']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].recipients[
            ':recipientId'
          ].tabs.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdTemplatesTemplateIdResponsiveHtmlPreviewKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/responsive_html_preview',
    'POST',
  ] as const
}

export function usePostV21AccountsAccountIdTemplatesTemplateIdResponsiveHtmlPreview<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['responsive_html_preview']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['responsive_html_preview']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV21AccountsAccountIdTemplatesTemplateIdResponsiveHtmlPreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['responsive_html_preview']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[
            ':templateId'
          ].responsive_html_preview.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdTemplatesTemplateIdViewsEditKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/templates/:templateId/views/edit', 'POST'] as const
}

export function usePostV21AccountsAccountIdTemplatesTemplateIdViewsEdit<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['views']['edit']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['views']['edit']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdTemplatesTemplateIdViewsEditKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['views']['edit']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].views.edit.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdTemplatesTemplateIdViewsRecipientPreviewKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/views/recipient_preview',
    'POST',
  ] as const
}

export function usePostV21AccountsAccountIdTemplatesTemplateIdViewsRecipientPreview<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['views']['recipient_preview']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['views']['recipient_preview']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV21AccountsAccountIdTemplatesTemplateIdViewsRecipientPreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['views']['recipient_preview']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[
            ':templateId'
          ].views.recipient_preview.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdTemplatesTemplateIdWorkflowKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/templates/:templateId/workflow', args] as const
}

export function useGetV21AccountsAccountIdTemplatesTemplateIdWorkflow<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdWorkflowKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].workflow.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdTemplatesTemplateIdWorkflow<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdWorkflowKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].workflow.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdTemplatesTemplateIdWorkflowKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/templates/:templateId/workflow', 'PUT'] as const
}

export function usePutV21AccountsAccountIdTemplatesTemplateIdWorkflow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdTemplatesTemplateIdWorkflowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].workflow.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdTemplatesTemplateIdWorkflowKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/templates/:templateId/workflow', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdTemplatesTemplateIdWorkflow<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdTemplatesTemplateIdWorkflowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].workflow.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdTemplatesTemplateIdWorkflowScheduledSendingKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['scheduledSending']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/workflow/scheduledSending',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdTemplatesTemplateIdWorkflowScheduledSending<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['scheduledSending']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['scheduledSending']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdWorkflowScheduledSendingKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['scheduledSending']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[
            ':templateId'
          ].workflow.scheduledSending.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdTemplatesTemplateIdWorkflowScheduledSending<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['scheduledSending']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['scheduledSending']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdWorkflowScheduledSendingKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['scheduledSending']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[
            ':templateId'
          ].workflow.scheduledSending.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdTemplatesTemplateIdWorkflowScheduledSendingKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/workflow/scheduledSending',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdTemplatesTemplateIdWorkflowScheduledSending<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['scheduledSending']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['scheduledSending']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV21AccountsAccountIdTemplatesTemplateIdWorkflowScheduledSendingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['scheduledSending']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[
            ':templateId'
          ].workflow.scheduledSending.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdTemplatesTemplateIdWorkflowScheduledSendingKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/workflow/scheduledSending',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdTemplatesTemplateIdWorkflowScheduledSending<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['scheduledSending']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['scheduledSending']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV21AccountsAccountIdTemplatesTemplateIdWorkflowScheduledSendingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['scheduledSending']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[
            ':templateId'
          ].workflow.scheduledSending.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/templates/:templateId/workflow/steps', 'POST'] as const
}

export function usePostV21AccountsAccountIdTemplatesTemplateIdWorkflowSteps<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].workflow.steps.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/workflow/steps/:workflowStepId',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].workflow.steps[
            ':workflowStepId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].workflow.steps[
            ':workflowStepId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/workflow/steps/:workflowStepId',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].workflow.steps[
            ':workflowStepId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/workflow/steps/:workflowStepId',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].workflow.steps[
            ':workflowStepId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdDelayedRoutingKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/workflow/steps/:workflowStepId/delayedRouting',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdDelayedRouting<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdDelayedRoutingKey(
            args,
          )
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].workflow.steps[
            ':workflowStepId'
          ].delayedRouting.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdDelayedRouting<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdDelayedRoutingKey(
            args,
          )
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
                (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].workflow.steps[
            ':workflowStepId'
          ].delayedRouting.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdDelayedRoutingKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/workflow/steps/:workflowStepId/delayedRouting',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdDelayedRouting<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdDelayedRoutingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].workflow.steps[
            ':workflowStepId'
          ].delayedRouting.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdDelayedRoutingKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/workflow/steps/:workflowStepId/delayedRouting',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdDelayedRouting<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdDelayedRoutingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'].workflow.steps[
            ':workflowStepId'
          ].delayedRouting.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdTemplatesTemplateIdTemplatePartKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/templates/:templateId/:templatePart', 'PUT'] as const
}

export function usePutV21AccountsAccountIdTemplatesTemplateIdTemplatePart<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId'][':templatePart']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId'][':templatePart']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdTemplatesTemplateIdTemplatePartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId'][':templatePart']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'][':templatePart'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdTemplatesTemplateIdTemplatePartKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/templates/:templateId/:templatePart',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdTemplatesTemplateIdTemplatePart<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId'][':templatePart']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId'][':templatePart']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdTemplatesTemplateIdTemplatePartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId'][':templatePart']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].templates[':templateId'][':templatePart'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdUnsupportedFileTypesKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['unsupported_file_types']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/unsupported_file_types', args] as const
}

export function useGetV21AccountsAccountIdUnsupportedFileTypes<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['unsupported_file_types']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['unsupported_file_types']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdUnsupportedFileTypesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['unsupported_file_types']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].unsupported_file_types.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdUnsupportedFileTypes<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['unsupported_file_types']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['unsupported_file_types']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdUnsupportedFileTypesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['unsupported_file_types']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].unsupported_file_types.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdUsersKey(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['users']['$get']>,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/users', args] as const
}

export function useGetV21AccountsAccountIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts[':accountId'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts[':accountId'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdUsersKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/users', 'PUT'] as const
}

export function usePutV21AccountsAccountIdUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['users']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['users']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['users']['$put']>
        },
      ) => parseResponse(client['v2.1'].accounts[':accountId'].users.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdUsersKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/users', 'POST'] as const
}

export function usePostV21AccountsAccountIdUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['users']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['users']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['users']['$post']>
        },
      ) => parseResponse(client['v2.1'].accounts[':accountId'].users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdUsersKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/users', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['users']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['users']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['users']['$delete']
          >
        },
      ) => parseResponse(client['v2.1'].accounts[':accountId'].users.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdUsersUserIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/users/:userId', args] as const
}

export function useGetV21AccountsAccountIdUsersUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdUsersUserIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdUsersUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdUsersUserIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdUsersUserIdKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/users/:userId', 'PUT'] as const
}

export function usePutV21AccountsAccountIdUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdUsersUserIdCloudStorageKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/users/:userId/cloud_storage', args] as const
}

export function useGetV21AccountsAccountIdUsersUserIdCloudStorage<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdUsersUserIdCloudStorageKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].cloud_storage.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdUsersUserIdCloudStorage<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdUsersUserIdCloudStorageKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].cloud_storage.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdUsersUserIdCloudStorageKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/users/:userId/cloud_storage', 'POST'] as const
}

export function usePostV21AccountsAccountIdUsersUserIdCloudStorage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdUsersUserIdCloudStorageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].cloud_storage.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdUsersUserIdCloudStorageKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/users/:userId/cloud_storage', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdUsersUserIdCloudStorage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdUsersUserIdCloudStorageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].cloud_storage.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdUsersUserIdCloudStorageServiceIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage'][':serviceId']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/users/:userId/cloud_storage/:serviceId', args] as const
}

export function useGetV21AccountsAccountIdUsersUserIdCloudStorageServiceId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage'][':serviceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage'][':serviceId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdUsersUserIdCloudStorageServiceIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage'][':serviceId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].cloud_storage[':serviceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdUsersUserIdCloudStorageServiceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage'][':serviceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage'][':serviceId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdUsersUserIdCloudStorageServiceIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage'][':serviceId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].cloud_storage[':serviceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdUsersUserIdCloudStorageServiceIdKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/users/:userId/cloud_storage/:serviceId',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdUsersUserIdCloudStorageServiceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage'][':serviceId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage'][':serviceId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdUsersUserIdCloudStorageServiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage'][':serviceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].cloud_storage[
            ':serviceId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdUsersUserIdCloudStorageServiceIdFoldersKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage'][':serviceId']['folders']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/users/:userId/cloud_storage/:serviceId/folders',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdUsersUserIdCloudStorageServiceIdFolders<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage'][':serviceId']['folders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage'][':serviceId']['folders']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdUsersUserIdCloudStorageServiceIdFoldersKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage'][':serviceId']['folders']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].cloud_storage[
            ':serviceId'
          ].folders.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdUsersUserIdCloudStorageServiceIdFolders<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage'][':serviceId']['folders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage'][':serviceId']['folders']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdUsersUserIdCloudStorageServiceIdFoldersKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage'][':serviceId']['folders']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].cloud_storage[
            ':serviceId'
          ].folders.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdUsersUserIdCloudStorageServiceIdFoldersFolderIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage'][':serviceId']['folders'][':folderId']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/users/:userId/cloud_storage/:serviceId/folders/:folderId',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdUsersUserIdCloudStorageServiceIdFoldersFolderId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage'][':serviceId']['folders'][':folderId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage'][':serviceId']['folders'][':folderId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdUsersUserIdCloudStorageServiceIdFoldersFolderIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage'][':serviceId']['folders'][':folderId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].cloud_storage[
            ':serviceId'
          ].folders[':folderId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdUsersUserIdCloudStorageServiceIdFoldersFolderId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage'][':serviceId']['folders'][':folderId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage'][':serviceId']['folders'][':folderId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdUsersUserIdCloudStorageServiceIdFoldersFolderIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage'][':serviceId']['folders'][':folderId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].cloud_storage[
            ':serviceId'
          ].folders[':folderId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdUsersUserIdCustomSettingsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['custom_settings']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/users/:userId/custom_settings', args] as const
}

export function useGetV21AccountsAccountIdUsersUserIdCustomSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['custom_settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['custom_settings']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdUsersUserIdCustomSettingsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['custom_settings']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].custom_settings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdUsersUserIdCustomSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['custom_settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['custom_settings']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdUsersUserIdCustomSettingsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['custom_settings']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].custom_settings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdUsersUserIdCustomSettingsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/users/:userId/custom_settings', 'PUT'] as const
}

export function usePutV21AccountsAccountIdUsersUserIdCustomSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['custom_settings']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['custom_settings']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdUsersUserIdCustomSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['custom_settings']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].custom_settings.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdUsersUserIdCustomSettingsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/users/:userId/custom_settings', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdUsersUserIdCustomSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['custom_settings']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['custom_settings']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdUsersUserIdCustomSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['custom_settings']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].custom_settings.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdUsersUserIdProfileKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['profile']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/users/:userId/profile', args] as const
}

export function useGetV21AccountsAccountIdUsersUserIdProfile<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['profile']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['profile']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdUsersUserIdProfileKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['profile']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].profile.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdUsersUserIdProfile<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['profile']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['profile']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdUsersUserIdProfileKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['profile']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].profile.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdUsersUserIdProfileKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/users/:userId/profile', 'PUT'] as const
}

export function usePutV21AccountsAccountIdUsersUserIdProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['profile']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['profile']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdUsersUserIdProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['profile']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].profile.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdUsersUserIdProfileImageKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['profile']['image']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/users/:userId/profile/image', args] as const
}

export function useGetV21AccountsAccountIdUsersUserIdProfileImage<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['profile']['image']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['profile']['image']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdUsersUserIdProfileImageKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['profile']['image']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].profile.image.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdUsersUserIdProfileImage<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['profile']['image']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['profile']['image']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdUsersUserIdProfileImageKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['profile']['image']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].profile.image.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdUsersUserIdProfileImageKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/users/:userId/profile/image', 'PUT'] as const
}

export function usePutV21AccountsAccountIdUsersUserIdProfileImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['profile']['image']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['profile']['image']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdUsersUserIdProfileImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['profile']['image']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].profile.image.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdUsersUserIdProfileImageKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/users/:userId/profile/image', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdUsersUserIdProfileImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['profile']['image']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['profile']['image']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdUsersUserIdProfileImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['profile']['image']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].profile.image.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdUsersUserIdSettingsKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['settings']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/users/:userId/settings', args] as const
}

export function useGetV21AccountsAccountIdUsersUserIdSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['settings']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdUsersUserIdSettingsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['settings']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdUsersUserIdSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['settings']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdUsersUserIdSettingsKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['settings']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdUsersUserIdSettingsKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/users/:userId/settings', 'PUT'] as const
}

export function usePutV21AccountsAccountIdUsersUserIdSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['settings']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['settings']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdUsersUserIdSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['settings']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].settings.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdUsersUserIdSignaturesKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/users/:userId/signatures', args] as const
}

export function useGetV21AccountsAccountIdUsersUserIdSignatures<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdUsersUserIdSignaturesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].signatures.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdUsersUserIdSignatures<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdUsersUserIdSignaturesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].signatures.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdUsersUserIdSignaturesKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/users/:userId/signatures', 'PUT'] as const
}

export function usePutV21AccountsAccountIdUsersUserIdSignatures<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdUsersUserIdSignaturesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].signatures.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdUsersUserIdSignaturesKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/users/:userId/signatures', 'POST'] as const
}

export function usePostV21AccountsAccountIdUsersUserIdSignatures<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdUsersUserIdSignaturesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].signatures.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdUsersUserIdSignaturesSignatureIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/users/:userId/signatures/:signatureId', args] as const
}

export function useGetV21AccountsAccountIdUsersUserIdSignaturesSignatureId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdUsersUserIdSignaturesSignatureIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].signatures[':signatureId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdUsersUserIdSignaturesSignatureId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdUsersUserIdSignaturesSignatureIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].signatures[':signatureId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdUsersUserIdSignaturesSignatureIdKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/users/:userId/signatures/:signatureId', 'PUT'] as const
}

export function usePutV21AccountsAccountIdUsersUserIdSignaturesSignatureId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdUsersUserIdSignaturesSignatureIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].signatures[':signatureId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdUsersUserIdSignaturesSignatureIdKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/users/:userId/signatures/:signatureId',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdUsersUserIdSignaturesSignatureId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdUsersUserIdSignaturesSignatureIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].signatures[':signatureId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageTypeKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId'][':imageType']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/users/:userId/signatures/:signatureId/:imageType',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId'][':imageType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId'][':imageType']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageTypeKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId'][':imageType']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].signatures[':signatureId'][
            ':imageType'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId'][':imageType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId'][':imageType']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageTypeKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId'][':imageType']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].signatures[':signatureId'][
            ':imageType'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageTypeKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/users/:userId/signatures/:signatureId/:imageType',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId'][':imageType']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId'][':imageType']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId'][':imageType']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].signatures[':signatureId'][
            ':imageType'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageTypeKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/users/:userId/signatures/:signatureId/:imageType',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId'][':imageType']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId'][':imageType']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId'][':imageType']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].users[':userId'].signatures[':signatureId'][
            ':imageType'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdViewsConsoleKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/views/console', 'POST'] as const
}

export function usePostV21AccountsAccountIdViewsConsole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['views']['console']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['views']['console']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdViewsConsoleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['views']['console']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].views.console.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdWatermarkKey(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['watermark']['$get']>,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/watermark', args] as const
}

export function useGetV21AccountsAccountIdWatermark<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['watermark']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['watermark']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdWatermarkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['watermark']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts[':accountId'].watermark.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdWatermark<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['watermark']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['watermark']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdWatermarkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['watermark']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts[':accountId'].watermark.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdWatermarkKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/watermark', 'PUT'] as const
}

export function usePutV21AccountsAccountIdWatermark<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['watermark']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['watermark']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdWatermarkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['watermark']['$put']
          >
        },
      ) => parseResponse(client['v2.1'].accounts[':accountId'].watermark.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdWatermarkPreviewKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/watermark/preview', 'PUT'] as const
}

export function usePutV21AccountsAccountIdWatermarkPreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['watermark']['preview']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['watermark']['preview']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdWatermarkPreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['watermark']['preview']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].watermark.preview.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdWorkspacesKey(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['workspaces']['$get']>,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/workspaces', args] as const
}

export function useGetV21AccountsAccountIdWorkspaces<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['workspaces']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['workspaces']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdWorkspacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['workspaces']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts[':accountId'].workspaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdWorkspaces<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['workspaces']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['workspaces']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdWorkspacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['workspaces']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].accounts[':accountId'].workspaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdWorkspacesKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/workspaces', 'POST'] as const
}

export function usePostV21AccountsAccountIdWorkspaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v2.1']['accounts'][':accountId']['workspaces']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['workspaces']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21AccountsAccountIdWorkspacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['workspaces']['$post']
          >
        },
      ) =>
        parseResponse(client['v2.1'].accounts[':accountId'].workspaces.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdWorkspacesWorkspaceIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['$get']
  >,
) {
  return ['v2.1', '/v2.1/accounts/:accountId/workspaces/:workspaceId', args] as const
}

export function useGetV21AccountsAccountIdWorkspacesWorkspaceId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdWorkspacesWorkspaceIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].workspaces[':workspaceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdWorkspacesWorkspaceId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdWorkspacesWorkspaceIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].workspaces[':workspaceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdWorkspacesWorkspaceIdKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/workspaces/:workspaceId', 'PUT'] as const
}

export function usePutV21AccountsAccountIdWorkspacesWorkspaceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21AccountsAccountIdWorkspacesWorkspaceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].workspaces[':workspaceId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdWorkspacesWorkspaceIdKey() {
  return ['v2.1', '/v2.1/accounts/:accountId/workspaces/:workspaceId', 'DELETE'] as const
}

export function useDeleteV21AccountsAccountIdWorkspacesWorkspaceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdWorkspacesWorkspaceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].workspaces[':workspaceId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/workspaces/:workspaceId/folders/:folderId',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].workspaces[':workspaceId'].folders[
            ':folderId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].workspaces[':workspaceId'].folders[
            ':folderId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/workspaces/:workspaceId/folders/:folderId',
    'DELETE',
  ] as const
}

export function useDeleteV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].workspaces[':workspaceId'].folders[
            ':folderId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/workspaces/:workspaceId/folders/:folderId/files',
    'POST',
  ] as const
}

export function usePostV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFiles<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['files']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['files']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['files']['$post']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].workspaces[':workspaceId'].folders[
            ':folderId'
          ].files.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['files'][':fileId']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/workspaces/:workspaceId/folders/:folderId/files/:fileId',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['files'][':fileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['files'][':fileId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['files'][':fileId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].workspaces[':workspaceId'].folders[
            ':folderId'
          ].files[':fileId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['files'][':fileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['files'][':fileId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileIdKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['files'][':fileId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].workspaces[':workspaceId'].folders[
            ':folderId'
          ].files[':fileId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileIdKey() {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/workspaces/:workspaceId/folders/:folderId/files/:fileId',
    'PUT',
  ] as const
}

export function usePutV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['files'][':fileId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['files'][':fileId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['files'][':fileId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].workspaces[':workspaceId'].folders[
            ':folderId'
          ].files[':fileId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileIdPagesKey(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['files'][':fileId']['pages']['$get']
  >,
) {
  return [
    'v2.1',
    '/v2.1/accounts/:accountId/workspaces/:workspaceId/folders/:folderId/files/:fileId/pages',
    args,
  ] as const
}

export function useGetV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileIdPages<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['files'][':fileId']['pages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['files'][':fileId']['pages']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileIdPagesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['files'][':fileId']['pages']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].workspaces[':workspaceId'].folders[
            ':folderId'
          ].files[':fileId'].pages.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileIdPages<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['files'][':fileId']['pages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['files'][':fileId']['pages']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileIdPagesKey(args)
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
                (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['files'][':fileId']['pages']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].accounts[':accountId'].workspaces[':workspaceId'].folders[
            ':folderId'
          ].files[':fileId'].pages.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21BillingPlansKey() {
  return ['v2.1', '/v2.1/billing_plans'] as const
}

export function useGetV21BillingPlans<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['v2.1']['billing_plans']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV21BillingPlansKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['billing_plans']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v2.1'].billing_plans.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21BillingPlans<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['v2.1']['billing_plans']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV21BillingPlansKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['billing_plans']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v2.1'].billing_plans.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV21BillingPlansBillingPlanIdKey(
  args: InferRequestType<(typeof client)['v2.1']['billing_plans'][':billingPlanId']['$get']>,
) {
  return ['v2.1', '/v2.1/billing_plans/:billingPlanId', args] as const
}

export function useGetV21BillingPlansBillingPlanId<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['billing_plans'][':billingPlanId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['billing_plans'][':billingPlanId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21BillingPlansBillingPlanIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['billing_plans'][':billingPlanId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].billing_plans[':billingPlanId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21BillingPlansBillingPlanId<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['billing_plans'][':billingPlanId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['billing_plans'][':billingPlanId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21BillingPlansBillingPlanIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['billing_plans'][':billingPlanId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].billing_plans[':billingPlanId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV21CurrentUserNotaryKey(
  args: InferRequestType<(typeof client)['v2.1']['current_user']['notary']['$get']>,
) {
  return ['v2.1', '/v2.1/current_user/notary', args] as const
}

export function useGetV21CurrentUserNotary<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['current_user']['notary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['current_user']['notary']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21CurrentUserNotaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['current_user']['notary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v2.1'].current_user.notary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21CurrentUserNotary<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['current_user']['notary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['current_user']['notary']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21CurrentUserNotaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['current_user']['notary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v2.1'].current_user.notary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV21CurrentUserNotaryKey() {
  return ['v2.1', '/v2.1/current_user/notary', 'PUT'] as const
}

export function usePutV21CurrentUserNotary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v2.1']['current_user']['notary']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['current_user']['notary']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21CurrentUserNotaryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['v2.1']['current_user']['notary']['$put']> },
      ) => parseResponse(client['v2.1'].current_user.notary.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV21CurrentUserNotaryKey() {
  return ['v2.1', '/v2.1/current_user/notary', 'POST'] as const
}

export function usePostV21CurrentUserNotary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v2.1']['current_user']['notary']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['current_user']['notary']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21CurrentUserNotaryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['v2.1']['current_user']['notary']['$post']> },
      ) => parseResponse(client['v2.1'].current_user.notary.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV21CurrentUserNotaryJournalsKey(
  args: InferRequestType<(typeof client)['v2.1']['current_user']['notary']['journals']['$get']>,
) {
  return ['v2.1', '/v2.1/current_user/notary/journals', args] as const
}

export function useGetV21CurrentUserNotaryJournals<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['current_user']['notary']['journals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['current_user']['notary']['journals']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21CurrentUserNotaryJournalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['current_user']['notary']['journals']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].current_user.notary.journals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21CurrentUserNotaryJournals<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['current_user']['notary']['journals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['current_user']['notary']['journals']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21CurrentUserNotaryJournalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['current_user']['notary']['journals']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].current_user.notary.journals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV21CurrentUserNotaryJurisdictionsKey() {
  return ['v2.1', '/v2.1/current_user/notary/jurisdictions'] as const
}

export function useGetV21CurrentUserNotaryJurisdictions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v2.1']['current_user']['notary']['jurisdictions']['$get']>
          >
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
        ? getGetV21CurrentUserNotaryJurisdictionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['current_user']['notary']['jurisdictions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].current_user.notary.jurisdictions.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21CurrentUserNotaryJurisdictions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v2.1']['current_user']['notary']['jurisdictions']['$get']>
          >
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
        ? getGetV21CurrentUserNotaryJurisdictionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v2.1']['current_user']['notary']['jurisdictions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].current_user.notary.jurisdictions.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV21CurrentUserNotaryJurisdictionsKey() {
  return ['v2.1', '/v2.1/current_user/notary/jurisdictions', 'POST'] as const
}

export function usePostV21CurrentUserNotaryJurisdictions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['v2.1']['current_user']['notary']['jurisdictions']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['current_user']['notary']['jurisdictions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21CurrentUserNotaryJurisdictionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['current_user']['notary']['jurisdictions']['$post']
          >
        },
      ) =>
        parseResponse(client['v2.1'].current_user.notary.jurisdictions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV21CurrentUserNotaryJurisdictionsJurisdictionIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['current_user']['notary']['jurisdictions'][':jurisdictionId']['$get']
  >,
) {
  return ['v2.1', '/v2.1/current_user/notary/jurisdictions/:jurisdictionId', args] as const
}

export function useGetV21CurrentUserNotaryJurisdictionsJurisdictionId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['current_user']['notary']['jurisdictions'][':jurisdictionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['current_user']['notary']['jurisdictions'][':jurisdictionId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21CurrentUserNotaryJurisdictionsJurisdictionIdKey(args)
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
                (typeof client)['v2.1']['current_user']['notary']['jurisdictions'][':jurisdictionId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].current_user.notary.jurisdictions[':jurisdictionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21CurrentUserNotaryJurisdictionsJurisdictionId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['current_user']['notary']['jurisdictions'][':jurisdictionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['current_user']['notary']['jurisdictions'][':jurisdictionId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21CurrentUserNotaryJurisdictionsJurisdictionIdKey(args)
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
                (typeof client)['v2.1']['current_user']['notary']['jurisdictions'][':jurisdictionId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].current_user.notary.jurisdictions[':jurisdictionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV21CurrentUserNotaryJurisdictionsJurisdictionIdKey() {
  return ['v2.1', '/v2.1/current_user/notary/jurisdictions/:jurisdictionId', 'PUT'] as const
}

export function usePutV21CurrentUserNotaryJurisdictionsJurisdictionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['current_user']['notary']['jurisdictions'][':jurisdictionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['current_user']['notary']['jurisdictions'][':jurisdictionId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21CurrentUserNotaryJurisdictionsJurisdictionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['current_user']['notary']['jurisdictions'][':jurisdictionId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].current_user.notary.jurisdictions[':jurisdictionId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV21CurrentUserNotaryJurisdictionsJurisdictionIdKey() {
  return ['v2.1', '/v2.1/current_user/notary/jurisdictions/:jurisdictionId', 'DELETE'] as const
}

export function useDeleteV21CurrentUserNotaryJurisdictionsJurisdictionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v2.1']['current_user']['notary']['jurisdictions'][':jurisdictionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v2.1']['current_user']['notary']['jurisdictions'][':jurisdictionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV21CurrentUserNotaryJurisdictionsJurisdictionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['v2.1']['current_user']['notary']['jurisdictions'][':jurisdictionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['v2.1'].current_user.notary.jurisdictions[':jurisdictionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV21CurrentUserPasswordRulesKey() {
  return ['v2.1', '/v2.1/current_user/password_rules'] as const
}

export function useGetV21CurrentUserPasswordRules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v2.1']['current_user']['password_rules']['$get']>>
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
        ? getGetV21CurrentUserPasswordRulesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['current_user']['password_rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].current_user.password_rules.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21CurrentUserPasswordRules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v2.1']['current_user']['password_rules']['$get']>>
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
        ? getGetV21CurrentUserPasswordRulesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['current_user']['password_rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].current_user.password_rules.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV21DiagnosticsRequestLogsKey(
  args: InferRequestType<(typeof client)['v2.1']['diagnostics']['request_logs']['$get']>,
) {
  return ['v2.1', '/v2.1/diagnostics/request_logs', args] as const
}

export function useGetV21DiagnosticsRequestLogs<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['diagnostics']['request_logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['diagnostics']['request_logs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21DiagnosticsRequestLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['diagnostics']['request_logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v2.1'].diagnostics.request_logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21DiagnosticsRequestLogs<TError = unknown>(
  args: InferRequestType<(typeof client)['v2.1']['diagnostics']['request_logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['diagnostics']['request_logs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21DiagnosticsRequestLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['diagnostics']['request_logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v2.1'].diagnostics.request_logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV21DiagnosticsRequestLogsKey() {
  return ['v2.1', '/v2.1/diagnostics/request_logs', 'DELETE'] as const
}

export function useDeleteV21DiagnosticsRequestLogs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v2.1']['diagnostics']['request_logs']['$delete']>>
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
  const swrKey = customKey ?? getDeleteV21DiagnosticsRequestLogsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client['v2.1'].diagnostics.request_logs.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV21DiagnosticsRequestLogsRequestLogIdKey(
  args: InferRequestType<
    (typeof client)['v2.1']['diagnostics']['request_logs'][':requestLogId']['$get']
  >,
) {
  return ['v2.1', '/v2.1/diagnostics/request_logs/:requestLogId', args] as const
}

export function useGetV21DiagnosticsRequestLogsRequestLogId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['diagnostics']['request_logs'][':requestLogId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['diagnostics']['request_logs'][':requestLogId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21DiagnosticsRequestLogsRequestLogIdKey(args)
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
                (typeof client)['v2.1']['diagnostics']['request_logs'][':requestLogId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].diagnostics.request_logs[':requestLogId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21DiagnosticsRequestLogsRequestLogId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v2.1']['diagnostics']['request_logs'][':requestLogId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['v2.1']['diagnostics']['request_logs'][':requestLogId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV21DiagnosticsRequestLogsRequestLogIdKey(args)
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
                (typeof client)['v2.1']['diagnostics']['request_logs'][':requestLogId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v2.1'].diagnostics.request_logs[':requestLogId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV21DiagnosticsSettingsKey() {
  return ['v2.1', '/v2.1/diagnostics/settings'] as const
}

export function useGetV21DiagnosticsSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v2.1']['diagnostics']['settings']['$get']>>
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
        ? getGetV21DiagnosticsSettingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['diagnostics']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v2.1'].diagnostics.settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21DiagnosticsSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v2.1']['diagnostics']['settings']['$get']>>
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
        ? getGetV21DiagnosticsSettingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v2.1']['diagnostics']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v2.1'].diagnostics.settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV21DiagnosticsSettingsKey() {
  return ['v2.1', '/v2.1/diagnostics/settings', 'PUT'] as const
}

export function usePutV21DiagnosticsSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v2.1']['diagnostics']['settings']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2.1']['diagnostics']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV21DiagnosticsSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['v2.1']['diagnostics']['settings']['$put']> },
      ) => parseResponse(client['v2.1'].diagnostics.settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
