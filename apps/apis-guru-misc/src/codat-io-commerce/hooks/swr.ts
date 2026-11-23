import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCompaniesKey() {
  return ['companies'] as const
}

export function getGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceCustomersKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-customers']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-customers',
    args,
  ] as const
}

export function useGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceCustomers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-customers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-customers']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceCustomersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-customers']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data[
            'commerce-customers'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceCustomers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-customers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-customers']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceCustomersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-customers']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data[
            'commerce-customers'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputesKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-disputes']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-disputes',
    args,
  ] as const
}

export function useGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputes<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-disputes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-disputes']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-disputes']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data[
            'commerce-disputes'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputes<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-disputes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-disputes']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-disputes']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data[
            'commerce-disputes'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceInfoKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-info']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-info',
    args,
  ] as const
}

export function useGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceInfo<TError = unknown>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-info']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-info']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-info']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data['commerce-info'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceInfo<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-info']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-info']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-info']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data['commerce-info'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceLocationsKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-locations']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-locations',
    args,
  ] as const
}

export function useGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceLocations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-locations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-locations']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-locations']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data[
            'commerce-locations'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceLocations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-locations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-locations']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-locations']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data[
            'commerce-locations'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceOrdersKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-orders']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-orders',
    args,
  ] as const
}

export function useGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceOrders<TError = unknown>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-orders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-orders']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-orders']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data['commerce-orders'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceOrders<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-orders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-orders']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-orders']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data['commerce-orders'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentMethodsKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-paymentMethods']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-paymentMethods',
    args,
  ] as const
}

export function useGetCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentMethods<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-paymentMethods']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-paymentMethods']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-paymentMethods']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data[
            'commerce-paymentMethods'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentMethods<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-paymentMethods']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-paymentMethods']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-paymentMethods']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data[
            'commerce-paymentMethods'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentsKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-payments']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-payments',
    args,
  ] as const
}

export function useGetCompaniesCompanyIdConnectionsConnectionIdDataCommercePayments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-payments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-payments']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-payments']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data[
            'commerce-payments'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdConnectionsConnectionIdDataCommercePayments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-payments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-payments']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-payments']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data[
            'commerce-payments'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductCategoriesKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-productCategories']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-productCategories',
    args,
  ] as const
}

export function useGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductCategories<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-productCategories']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-productCategories']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-productCategories']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data[
            'commerce-productCategories'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductCategories<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-productCategories']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-productCategories']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-productCategories']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data[
            'commerce-productCategories'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductsKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-products']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-products',
    args,
  ] as const
}

export function useGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceProducts<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-products']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-products']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-products']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data[
            'commerce-products'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceProducts<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-products']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-products']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-products']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data[
            'commerce-products'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponentsKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-taxComponents']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-taxComponents',
    args,
  ] as const
}

export function useGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponents<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-taxComponents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-taxComponents']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-taxComponents']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data[
            'commerce-taxComponents'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponents<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-taxComponents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-taxComponents']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-taxComponents']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data[
            'commerce-taxComponents'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceTransactionsKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-transactions']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-transactions',
    args,
  ] as const
}

export function useGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceTransactions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-transactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-transactions']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-transactions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data[
            'commerce-transactions'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceTransactions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-transactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-transactions']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCompaniesCompanyIdConnectionsConnectionIdDataCommerceTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-transactions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data[
            'commerce-transactions'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
