import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['V1'] as const
}

export function getDeleteV1AddressesAddressIdKey() {
  return ['V1', '/V1/addresses/:addressId', 'DELETE'] as const
}

export function useDeleteV1AddressesAddressId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.addresses)[':addressId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.addresses)[':addressId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AddressesAddressIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.addresses)[':addressId']['$delete']> },
      ) => parseResponse(client.V1.addresses[':addressId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1AmazonBillingAddressAmazonOrderReferenceIdKey() {
  return ['V1', '/V1/amazon-billing-address/:amazonOrderReferenceId', 'PUT'] as const
}

export function usePutV1AmazonBillingAddressAmazonOrderReferenceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1)['amazon-billing-address'][':amazonOrderReferenceId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1)['amazon-billing-address'][':amazonOrderReferenceId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AmazonBillingAddressAmazonOrderReferenceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['amazon-billing-address'][':amazonOrderReferenceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.V1['amazon-billing-address'][':amazonOrderReferenceId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1AmazonShippingAddressAmazonOrderReferenceIdKey() {
  return ['V1', '/V1/amazon-shipping-address/:amazonOrderReferenceId', 'PUT'] as const
}

export function usePutV1AmazonShippingAddressAmazonOrderReferenceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1)['amazon-shipping-address'][':amazonOrderReferenceId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1)['amazon-shipping-address'][':amazonOrderReferenceId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AmazonShippingAddressAmazonOrderReferenceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['amazon-shipping-address'][':amazonOrderReferenceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.V1['amazon-shipping-address'][':amazonOrderReferenceId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AmazonOrderRefKey() {
  return ['V1', '/V1/amazon/order-ref', 'DELETE'] as const
}

export function useDeleteV1AmazonOrderRef<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.amazon)['order-ref']['$delete']>>>
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
  const swrKey = customKey ?? getDeleteV1AmazonOrderRefKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.V1.amazon['order-ref'].$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AnalyticsLinkKey() {
  return ['V1', '/V1/analytics/link'] as const
}

export function useGetV1AnalyticsLink<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.analytics.link.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AnalyticsLinkKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.analytics.link.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.analytics.link.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AnalyticsLink<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.analytics.link.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AnalyticsLinkKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.analytics.link.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.analytics.link.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AttributeMetadataCustomerKey() {
  return ['V1', '/V1/attributeMetadata/customer'] as const
}

export function useGetV1AttributeMetadataCustomer<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.attributeMetadata.customer.$get>>>
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
        ? getGetV1AttributeMetadataCustomerKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.V1.attributeMetadata.customer.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.attributeMetadata.customer.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AttributeMetadataCustomer<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.attributeMetadata.customer.$get>>>
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
        ? getGetV1AttributeMetadataCustomerKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.V1.attributeMetadata.customer.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.attributeMetadata.customer.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AttributeMetadataCustomerAttributeAttributeCodeKey(
  args: InferRequestType<
    (typeof client.V1.attributeMetadata.customer.attribute)[':attributeCode']['$get']
  >,
) {
  return ['V1', '/V1/attributeMetadata/customer/attribute/:attributeCode', args] as const
}

export function useGetV1AttributeMetadataCustomerAttributeAttributeCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1.attributeMetadata.customer.attribute)[':attributeCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.attributeMetadata.customer.attribute)[':attributeCode']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AttributeMetadataCustomerAttributeAttributeCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.attributeMetadata.customer.attribute)[':attributeCode']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.attributeMetadata.customer.attribute[':attributeCode'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AttributeMetadataCustomerAttributeAttributeCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1.attributeMetadata.customer.attribute)[':attributeCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.attributeMetadata.customer.attribute)[':attributeCode']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AttributeMetadataCustomerAttributeAttributeCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.attributeMetadata.customer.attribute)[':attributeCode']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.attributeMetadata.customer.attribute[':attributeCode'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AttributeMetadataCustomerCustomKey(
  args: InferRequestType<typeof client.V1.attributeMetadata.customer.custom.$get>,
) {
  return ['V1', '/V1/attributeMetadata/customer/custom', args] as const
}

export function useGetV1AttributeMetadataCustomerCustom<TError = unknown>(
  args: InferRequestType<typeof client.V1.attributeMetadata.customer.custom.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.V1.attributeMetadata.customer.custom.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AttributeMetadataCustomerCustomKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.V1.attributeMetadata.customer.custom.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.attributeMetadata.customer.custom.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AttributeMetadataCustomerCustom<TError = unknown>(
  args: InferRequestType<typeof client.V1.attributeMetadata.customer.custom.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.V1.attributeMetadata.customer.custom.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AttributeMetadataCustomerCustomKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.V1.attributeMetadata.customer.custom.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.attributeMetadata.customer.custom.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AttributeMetadataCustomerFormFormCodeKey(
  args: InferRequestType<(typeof client.V1.attributeMetadata.customer.form)[':formCode']['$get']>,
) {
  return ['V1', '/V1/attributeMetadata/customer/form/:formCode', args] as const
}

export function useGetV1AttributeMetadataCustomerFormFormCode<TError = unknown>(
  args: InferRequestType<(typeof client.V1.attributeMetadata.customer.form)[':formCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.attributeMetadata.customer.form)[':formCode']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AttributeMetadataCustomerFormFormCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.attributeMetadata.customer.form)[':formCode']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.attributeMetadata.customer.form[':formCode'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AttributeMetadataCustomerFormFormCode<TError = unknown>(
  args: InferRequestType<(typeof client.V1.attributeMetadata.customer.form)[':formCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.attributeMetadata.customer.form)[':formCode']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AttributeMetadataCustomerFormFormCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.attributeMetadata.customer.form)[':formCode']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.attributeMetadata.customer.form[':formCode'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AttributeMetadataCustomerAddressKey() {
  return ['V1', '/V1/attributeMetadata/customerAddress'] as const
}

export function useGetV1AttributeMetadataCustomerAddress<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.V1.attributeMetadata.customerAddress.$get>>
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
        ? getGetV1AttributeMetadataCustomerAddressKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.V1.attributeMetadata.customerAddress.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.attributeMetadata.customerAddress.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AttributeMetadataCustomerAddress<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.V1.attributeMetadata.customerAddress.$get>>
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
        ? getGetV1AttributeMetadataCustomerAddressKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.V1.attributeMetadata.customerAddress.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.attributeMetadata.customerAddress.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AttributeMetadataCustomerAddressAttributeAttributeCodeKey(
  args: InferRequestType<
    (typeof client.V1.attributeMetadata.customerAddress.attribute)[':attributeCode']['$get']
  >,
) {
  return ['V1', '/V1/attributeMetadata/customerAddress/attribute/:attributeCode', args] as const
}

export function useGetV1AttributeMetadataCustomerAddressAttributeAttributeCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1.attributeMetadata.customerAddress.attribute)[':attributeCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.attributeMetadata.customerAddress.attribute)[':attributeCode']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AttributeMetadataCustomerAddressAttributeAttributeCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.attributeMetadata.customerAddress.attribute)[':attributeCode']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.attributeMetadata.customerAddress.attribute[':attributeCode'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AttributeMetadataCustomerAddressAttributeAttributeCode<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.V1.attributeMetadata.customerAddress.attribute)[':attributeCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.attributeMetadata.customerAddress.attribute)[':attributeCode']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AttributeMetadataCustomerAddressAttributeAttributeCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.attributeMetadata.customerAddress.attribute)[':attributeCode']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.attributeMetadata.customerAddress.attribute[':attributeCode'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AttributeMetadataCustomerAddressCustomKey(
  args: InferRequestType<typeof client.V1.attributeMetadata.customerAddress.custom.$get>,
) {
  return ['V1', '/V1/attributeMetadata/customerAddress/custom', args] as const
}

export function useGetV1AttributeMetadataCustomerAddressCustom<TError = unknown>(
  args: InferRequestType<typeof client.V1.attributeMetadata.customerAddress.custom.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.V1.attributeMetadata.customerAddress.custom.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AttributeMetadataCustomerAddressCustomKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.V1.attributeMetadata.customerAddress.custom.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.attributeMetadata.customerAddress.custom.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AttributeMetadataCustomerAddressCustom<TError = unknown>(
  args: InferRequestType<typeof client.V1.attributeMetadata.customerAddress.custom.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.V1.attributeMetadata.customerAddress.custom.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AttributeMetadataCustomerAddressCustomKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.V1.attributeMetadata.customerAddress.custom.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.attributeMetadata.customerAddress.custom.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AttributeMetadataCustomerAddressFormFormCodeKey(
  args: InferRequestType<
    (typeof client.V1.attributeMetadata.customerAddress.form)[':formCode']['$get']
  >,
) {
  return ['V1', '/V1/attributeMetadata/customerAddress/form/:formCode', args] as const
}

export function useGetV1AttributeMetadataCustomerAddressFormFormCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1.attributeMetadata.customerAddress.form)[':formCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.attributeMetadata.customerAddress.form)[':formCode']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AttributeMetadataCustomerAddressFormFormCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.attributeMetadata.customerAddress.form)[':formCode']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.attributeMetadata.customerAddress.form[':formCode'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AttributeMetadataCustomerAddressFormFormCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1.attributeMetadata.customerAddress.form)[':formCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.attributeMetadata.customerAddress.form)[':formCode']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AttributeMetadataCustomerAddressFormFormCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.attributeMetadata.customerAddress.form)[':formCode']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.attributeMetadata.customerAddress.form[':formCode'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1BulkBulkUuidDetailedStatusKey(
  args: InferRequestType<(typeof client.V1.bulk)[':bulkUuid']['detailed-status']['$get']>,
) {
  return ['V1', '/V1/bulk/:bulkUuid/detailed-status', args] as const
}

export function useGetV1BulkBulkUuidDetailedStatus<TError = unknown>(
  args: InferRequestType<(typeof client.V1.bulk)[':bulkUuid']['detailed-status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.bulk)[':bulkUuid']['detailed-status']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1BulkBulkUuidDetailedStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.bulk)[':bulkUuid']['detailed-status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.bulk[':bulkUuid']['detailed-status'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BulkBulkUuidDetailedStatus<TError = unknown>(
  args: InferRequestType<(typeof client.V1.bulk)[':bulkUuid']['detailed-status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.bulk)[':bulkUuid']['detailed-status']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1BulkBulkUuidDetailedStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.bulk)[':bulkUuid']['detailed-status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.bulk[':bulkUuid']['detailed-status'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BulkBulkUuidOperationStatusStatusKey(
  args: InferRequestType<
    (typeof client.V1.bulk)[':bulkUuid']['operation-status'][':status']['$get']
  >,
) {
  return ['V1', '/V1/bulk/:bulkUuid/operation-status/:status', args] as const
}

export function useGetV1BulkBulkUuidOperationStatusStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1.bulk)[':bulkUuid']['operation-status'][':status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.bulk)[':bulkUuid']['operation-status'][':status']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1BulkBulkUuidOperationStatusStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.bulk)[':bulkUuid']['operation-status'][':status']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.bulk[':bulkUuid']['operation-status'][':status'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BulkBulkUuidOperationStatusStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1.bulk)[':bulkUuid']['operation-status'][':status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.bulk)[':bulkUuid']['operation-status'][':status']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1BulkBulkUuidOperationStatusStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.bulk)[':bulkUuid']['operation-status'][':status']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.bulk[':bulkUuid']['operation-status'][':status'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1BulkBulkUuidStatusKey(
  args: InferRequestType<(typeof client.V1.bulk)[':bulkUuid']['status']['$get']>,
) {
  return ['V1', '/V1/bulk/:bulkUuid/status', args] as const
}

export function useGetV1BulkBulkUuidStatus<TError = unknown>(
  args: InferRequestType<(typeof client.V1.bulk)[':bulkUuid']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.bulk)[':bulkUuid']['status']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1BulkBulkUuidStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.bulk)[':bulkUuid']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.bulk[':bulkUuid'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BulkBulkUuidStatus<TError = unknown>(
  args: InferRequestType<(typeof client.V1.bulk)[':bulkUuid']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.bulk)[':bulkUuid']['status']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1BulkBulkUuidStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.bulk)[':bulkUuid']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.bulk[':bulkUuid'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1BundleProductsOptionsAddKey() {
  return ['V1', '/V1/bundle-products/options/add', 'POST'] as const
}

export function usePostV1BundleProductsOptionsAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['bundle-products']['options']['add']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1)['bundle-products']['options']['add']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BundleProductsOptionsAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1)['bundle-products']['options']['add']['$post']>
        },
      ) => parseResponse(client.V1['bundle-products'].options.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BundleProductsOptionsTypesKey() {
  return ['V1', '/V1/bundle-products/options/types'] as const
}

export function useGetV1BundleProductsOptionsTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['bundle-products']['options']['types']['$get']>>
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
        ? getGetV1BundleProductsOptionsTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1)['bundle-products']['options']['types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1['bundle-products'].options.types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BundleProductsOptionsTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['bundle-products']['options']['types']['$get']>>
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
        ? getGetV1BundleProductsOptionsTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1)['bundle-products']['options']['types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1['bundle-products'].options.types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1BundleProductsOptionsOptionIdKey() {
  return ['V1', '/V1/bundle-products/options/:optionId', 'PUT'] as const
}

export function usePutV1BundleProductsOptionsOptionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['bundle-products']['options'][':optionId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1)['bundle-products']['options'][':optionId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1BundleProductsOptionsOptionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['bundle-products']['options'][':optionId']['$put']
          >
        },
      ) =>
        parseResponse(client.V1['bundle-products'].options[':optionId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BundleProductsProductSkuChildrenKey(
  args: InferRequestType<(typeof client.V1)['bundle-products'][':productSku']['children']['$get']>,
) {
  return ['V1', '/V1/bundle-products/:productSku/children', args] as const
}

export function useGetV1BundleProductsProductSkuChildren<TError = unknown>(
  args: InferRequestType<(typeof client.V1)['bundle-products'][':productSku']['children']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1)['bundle-products'][':productSku']['children']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1BundleProductsProductSkuChildrenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1)['bundle-products'][':productSku']['children']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1['bundle-products'][':productSku'].children.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BundleProductsProductSkuChildren<TError = unknown>(
  args: InferRequestType<(typeof client.V1)['bundle-products'][':productSku']['children']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1)['bundle-products'][':productSku']['children']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1BundleProductsProductSkuChildrenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1)['bundle-products'][':productSku']['children']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1['bundle-products'][':productSku'].children.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1BundleProductsSkuLinksIdKey() {
  return ['V1', '/V1/bundle-products/:sku/links/:id', 'PUT'] as const
}

export function usePutV1BundleProductsSkuLinksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['bundle-products'][':sku']['links'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1)['bundle-products'][':sku']['links'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1BundleProductsSkuLinksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['bundle-products'][':sku']['links'][':id']['$put']
          >
        },
      ) =>
        parseResponse(client.V1['bundle-products'][':sku'].links[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1BundleProductsSkuLinksOptionIdKey() {
  return ['V1', '/V1/bundle-products/:sku/links/:optionId', 'POST'] as const
}

export function usePostV1BundleProductsSkuLinksOptionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1)['bundle-products'][':sku']['links'][':optionId']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1)['bundle-products'][':sku']['links'][':optionId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BundleProductsSkuLinksOptionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['bundle-products'][':sku']['links'][':optionId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1['bundle-products'][':sku'].links[':optionId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1BundleProductsSkuOptionsAllKey(
  args: InferRequestType<(typeof client.V1)['bundle-products'][':sku']['options']['all']['$get']>,
) {
  return ['V1', '/V1/bundle-products/:sku/options/all', args] as const
}

export function useGetV1BundleProductsSkuOptionsAll<TError = unknown>(
  args: InferRequestType<(typeof client.V1)['bundle-products'][':sku']['options']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1)['bundle-products'][':sku']['options']['all']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1BundleProductsSkuOptionsAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1)['bundle-products'][':sku']['options']['all']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1['bundle-products'][':sku'].options.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BundleProductsSkuOptionsAll<TError = unknown>(
  args: InferRequestType<(typeof client.V1)['bundle-products'][':sku']['options']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1)['bundle-products'][':sku']['options']['all']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1BundleProductsSkuOptionsAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1)['bundle-products'][':sku']['options']['all']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1['bundle-products'][':sku'].options.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BundleProductsSkuOptionsOptionIdKey(
  args: InferRequestType<
    (typeof client.V1)['bundle-products'][':sku']['options'][':optionId']['$get']
  >,
) {
  return ['V1', '/V1/bundle-products/:sku/options/:optionId', args] as const
}

export function useGetV1BundleProductsSkuOptionsOptionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1)['bundle-products'][':sku']['options'][':optionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['bundle-products'][':sku']['options'][':optionId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1BundleProductsSkuOptionsOptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['bundle-products'][':sku']['options'][':optionId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1['bundle-products'][':sku'].options[':optionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BundleProductsSkuOptionsOptionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1)['bundle-products'][':sku']['options'][':optionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['bundle-products'][':sku']['options'][':optionId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1BundleProductsSkuOptionsOptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['bundle-products'][':sku']['options'][':optionId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1['bundle-products'][':sku'].options[':optionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1BundleProductsSkuOptionsOptionIdKey() {
  return ['V1', '/V1/bundle-products/:sku/options/:optionId', 'DELETE'] as const
}

export function useDeleteV1BundleProductsSkuOptionsOptionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1)['bundle-products'][':sku']['options'][':optionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1)['bundle-products'][':sku']['options'][':optionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1BundleProductsSkuOptionsOptionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['bundle-products'][':sku']['options'][':optionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.V1['bundle-products'][':sku'].options[':optionId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1BundleProductsSkuOptionsOptionIdChildrenChildSkuKey() {
  return ['V1', '/V1/bundle-products/:sku/options/:optionId/children/:childSku', 'DELETE'] as const
}

export function useDeleteV1BundleProductsSkuOptionsOptionIdChildrenChildSku<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1)['bundle-products'][':sku']['options'][':optionId']['children'][':childSku']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1)['bundle-products'][':sku']['options'][':optionId']['children'][':childSku']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1BundleProductsSkuOptionsOptionIdChildrenChildSkuKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['bundle-products'][':sku']['options'][':optionId']['children'][':childSku']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.V1['bundle-products'][':sku'].options[':optionId'].children[':childSku'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1CartsIndexKey() {
  return ['V1', '/V1/carts/', 'POST'] as const
}

export function usePostV1CartsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.index.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CartsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.V1.carts.index.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CartsGuestCartsCartIdCheckGiftCardGiftCardCodeKey(
  args: InferRequestType<
    (typeof client.V1.carts)['guest-carts'][':cartId']['checkGiftCard'][':giftCardCode']['$get']
  >,
) {
  return ['V1', '/V1/carts/guest-carts/:cartId/checkGiftCard/:giftCardCode', args] as const
}

export function useGetV1CartsGuestCartsCartIdCheckGiftCardGiftCardCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1.carts)['guest-carts'][':cartId']['checkGiftCard'][':giftCardCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.carts)['guest-carts'][':cartId']['checkGiftCard'][':giftCardCode']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CartsGuestCartsCartIdCheckGiftCardGiftCardCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.carts)['guest-carts'][':cartId']['checkGiftCard'][':giftCardCode']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.carts['guest-carts'][':cartId'].checkGiftCard[':giftCardCode'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CartsGuestCartsCartIdCheckGiftCardGiftCardCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1.carts)['guest-carts'][':cartId']['checkGiftCard'][':giftCardCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.carts)['guest-carts'][':cartId']['checkGiftCard'][':giftCardCode']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CartsGuestCartsCartIdCheckGiftCardGiftCardCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.carts)['guest-carts'][':cartId']['checkGiftCard'][':giftCardCode']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.carts['guest-carts'][':cartId'].checkGiftCard[':giftCardCode'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1CartsGuestCartsCartIdGiftCardsKey() {
  return ['V1', '/V1/carts/guest-carts/:cartId/giftCards', 'POST'] as const
}

export function usePostV1CartsGuestCartsCartIdGiftCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.carts)['guest-carts'][':cartId']['giftCards']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts)['guest-carts'][':cartId']['giftCards']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CartsGuestCartsCartIdGiftCardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.carts)['guest-carts'][':cartId']['giftCards']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1.carts['guest-carts'][':cartId'].giftCards.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1CartsGuestCartsCartIdGiftCardsGiftCardCodeKey() {
  return ['V1', '/V1/carts/guest-carts/:cartId/giftCards/:giftCardCode', 'DELETE'] as const
}

export function useDeleteV1CartsGuestCartsCartIdGiftCardsGiftCardCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1.carts)['guest-carts'][':cartId']['giftCards'][':giftCardCode']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1.carts)['guest-carts'][':cartId']['giftCards'][':giftCardCode']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CartsGuestCartsCartIdGiftCardsGiftCardCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.carts)['guest-carts'][':cartId']['giftCards'][':giftCardCode']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.V1.carts['guest-carts'][':cartId'].giftCards[':giftCardCode'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1CartsLicenceKey() {
  return ['V1', '/V1/carts/licence'] as const
}

export function useGetV1CartsLicence<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.licence.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CartsLicenceKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.licence.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.carts.licence.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CartsLicence<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.licence.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CartsLicenceKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.licence.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.carts.licence.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CartsMineKey() {
  return ['V1', '/V1/carts/mine'] as const
}

export function useGetV1CartsMine<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CartsMineKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.carts.mine.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CartsMine<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CartsMineKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.carts.mine.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1CartsMineKey() {
  return ['V1', '/V1/carts/mine', 'PUT'] as const
}

export function usePutV1CartsMine<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.carts.mine.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CartsMineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.V1.carts.mine.$put> }) =>
        parseResponse(client.V1.carts.mine.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CartsMineKey() {
  return ['V1', '/V1/carts/mine', 'POST'] as const
}

export function usePostV1CartsMine<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CartsMineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.V1.carts.mine.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CartsMineBalanceApplyKey() {
  return ['V1', '/V1/carts/mine/balance/apply', 'POST'] as const
}

export function usePostV1CartsMineBalanceApply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.balance.apply.$post>>>
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
  const swrKey = customKey ?? getPostV1CartsMineBalanceApplyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.V1.carts.mine.balance.apply.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CartsMineBalanceUnapplyKey() {
  return ['V1', '/V1/carts/mine/balance/unapply', 'POST'] as const
}

export function usePostV1CartsMineBalanceUnapply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.balance.unapply.$post>>>
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
  const swrKey = customKey ?? getPostV1CartsMineBalanceUnapplyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.V1.carts.mine.balance.unapply.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CartsMineBillingAddressKey() {
  return ['V1', '/V1/carts/mine/billing-address'] as const
}

export function useGetV1CartsMineBillingAddress<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['billing-address']['$get']>>
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
        ? getGetV1CartsMineBillingAddressKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts.mine)['billing-address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.carts.mine['billing-address'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CartsMineBillingAddress<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['billing-address']['$get']>>
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
        ? getGetV1CartsMineBillingAddressKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts.mine)['billing-address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.carts.mine['billing-address'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CartsMineBillingAddressKey() {
  return ['V1', '/V1/carts/mine/billing-address', 'POST'] as const
}

export function usePostV1CartsMineBillingAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['billing-address']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts.mine)['billing-address']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CartsMineBillingAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.V1.carts.mine)['billing-address']['$post']> },
      ) => parseResponse(client.V1.carts.mine['billing-address'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CartsMineCheckGiftCardGiftCardCodeKey(
  args: InferRequestType<(typeof client.V1.carts.mine.checkGiftCard)[':giftCardCode']['$get']>,
) {
  return ['V1', '/V1/carts/mine/checkGiftCard/:giftCardCode', args] as const
}

export function useGetV1CartsMineCheckGiftCardGiftCardCode<TError = unknown>(
  args: InferRequestType<(typeof client.V1.carts.mine.checkGiftCard)[':giftCardCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.carts.mine.checkGiftCard)[':giftCardCode']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CartsMineCheckGiftCardGiftCardCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.carts.mine.checkGiftCard)[':giftCardCode']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.carts.mine.checkGiftCard[':giftCardCode'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CartsMineCheckGiftCardGiftCardCode<TError = unknown>(
  args: InferRequestType<(typeof client.V1.carts.mine.checkGiftCard)[':giftCardCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.carts.mine.checkGiftCard)[':giftCardCode']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CartsMineCheckGiftCardGiftCardCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.carts.mine.checkGiftCard)[':giftCardCode']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.carts.mine.checkGiftCard[':giftCardCode'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1CartsMineCheckoutFieldsKey() {
  return ['V1', '/V1/carts/mine/checkout-fields', 'POST'] as const
}

export function usePostV1CartsMineCheckoutFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['checkout-fields']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts.mine)['checkout-fields']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CartsMineCheckoutFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.V1.carts.mine)['checkout-fields']['$post']> },
      ) => parseResponse(client.V1.carts.mine['checkout-fields'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1CartsMineCollectTotalsKey() {
  return ['V1', '/V1/carts/mine/collect-totals', 'PUT'] as const
}

export function usePutV1CartsMineCollectTotals<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['collect-totals']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts.mine)['collect-totals']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CartsMineCollectTotalsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.carts.mine)['collect-totals']['$put']> },
      ) => parseResponse(client.V1.carts.mine['collect-totals'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1CartsMineCollectionPointSearchRequestKey() {
  return ['V1', '/V1/carts/mine/collection-point/search-request', 'PUT'] as const
}

export function usePutV1CartsMineCollectionPointSearchRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.carts.mine)['collection-point']['search-request']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts.mine)['collection-point']['search-request']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CartsMineCollectionPointSearchRequestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.carts.mine)['collection-point']['search-request']['$put']
          >
        },
      ) =>
        parseResponse(
          client.V1.carts.mine['collection-point']['search-request'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1CartsMineCollectionPointSearchRequestKey() {
  return ['V1', '/V1/carts/mine/collection-point/search-request', 'DELETE'] as const
}

export function useDeleteV1CartsMineCollectionPointSearchRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1.carts.mine)['collection-point']['search-request']['$delete']
            >
          >
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
  const swrKey = customKey ?? getDeleteV1CartsMineCollectionPointSearchRequestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.V1.carts.mine['collection-point']['search-request'].$delete(
            undefined,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1CartsMineCollectionPointSearchResultKey() {
  return ['V1', '/V1/carts/mine/collection-point/search-result'] as const
}

export function useGetV1CartsMineCollectionPointSearchResult<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.carts.mine)['collection-point']['search-result']['$get']>
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
        ? getGetV1CartsMineCollectionPointSearchResultKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.carts.mine)['collection-point']['search-result']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.carts.mine['collection-point']['search-result'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CartsMineCollectionPointSearchResult<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.carts.mine)['collection-point']['search-result']['$get']>
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
        ? getGetV1CartsMineCollectionPointSearchResultKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.carts.mine)['collection-point']['search-result']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.carts.mine['collection-point']['search-result'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1CartsMineCollectionPointSelectKey() {
  return ['V1', '/V1/carts/mine/collection-point/select', 'POST'] as const
}

export function usePostV1CartsMineCollectionPointSelect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['collection-point']['select']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts.mine)['collection-point']['select']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CartsMineCollectionPointSelectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.carts.mine)['collection-point']['select']['$post']
          >
        },
      ) => parseResponse(client.V1.carts.mine['collection-point'].select.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CartsMineCouponsKey() {
  return ['V1', '/V1/carts/mine/coupons'] as const
}

export function useGetV1CartsMineCoupons<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.coupons.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CartsMineCouponsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.coupons.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.carts.mine.coupons.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CartsMineCoupons<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.coupons.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CartsMineCouponsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.coupons.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.carts.mine.coupons.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1CartsMineCouponsKey() {
  return ['V1', '/V1/carts/mine/coupons', 'DELETE'] as const
}

export function useDeleteV1CartsMineCoupons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.coupons.$delete>>>
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
  const swrKey = customKey ?? getDeleteV1CartsMineCouponsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.V1.carts.mine.coupons.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1CartsMineCouponsCouponCodeKey() {
  return ['V1', '/V1/carts/mine/coupons/:couponCode', 'PUT'] as const
}

export function usePutV1CartsMineCouponsCouponCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine.coupons)[':couponCode']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts.mine.coupons)[':couponCode']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CartsMineCouponsCouponCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.V1.carts.mine.coupons)[':couponCode']['$put']> },
      ) => parseResponse(client.V1.carts.mine.coupons[':couponCode'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CartsMineDeliveryOptionKey() {
  return ['V1', '/V1/carts/mine/delivery-option', 'POST'] as const
}

export function usePostV1CartsMineDeliveryOption<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['delivery-option']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts.mine)['delivery-option']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CartsMineDeliveryOptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.V1.carts.mine)['delivery-option']['$post']> },
      ) => parseResponse(client.V1.carts.mine['delivery-option'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CartsMineEstimateShippingMethodsKey() {
  return ['V1', '/V1/carts/mine/estimate-shipping-methods', 'POST'] as const
}

export function usePostV1CartsMineEstimateShippingMethods<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['estimate-shipping-methods']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts.mine)['estimate-shipping-methods']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CartsMineEstimateShippingMethodsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1.carts.mine)['estimate-shipping-methods']['$post']>
        },
      ) =>
        parseResponse(client.V1.carts.mine['estimate-shipping-methods'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CartsMineEstimateShippingMethodsByAddressIdKey() {
  return ['V1', '/V1/carts/mine/estimate-shipping-methods-by-address-id', 'POST'] as const
}

export function usePostV1CartsMineEstimateShippingMethodsByAddressId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1.carts.mine)['estimate-shipping-methods-by-address-id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1.carts.mine)['estimate-shipping-methods-by-address-id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CartsMineEstimateShippingMethodsByAddressIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.carts.mine)['estimate-shipping-methods-by-address-id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1.carts.mine['estimate-shipping-methods-by-address-id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1CartsMineGiftMessageKey() {
  return ['V1', '/V1/carts/mine/gift-message'] as const
}

export function useGetV1CartsMineGiftMessage<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['gift-message']['$get']>>
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
        ? getGetV1CartsMineGiftMessageKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts.mine)['gift-message']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.carts.mine['gift-message'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CartsMineGiftMessage<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['gift-message']['$get']>>
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
        ? getGetV1CartsMineGiftMessageKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts.mine)['gift-message']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.carts.mine['gift-message'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CartsMineGiftMessageKey() {
  return ['V1', '/V1/carts/mine/gift-message', 'POST'] as const
}

export function usePostV1CartsMineGiftMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['gift-message']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts.mine)['gift-message']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CartsMineGiftMessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.carts.mine)['gift-message']['$post']> },
      ) => parseResponse(client.V1.carts.mine['gift-message'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CartsMineGiftMessageItemIdKey(
  args: InferRequestType<(typeof client.V1.carts.mine)['gift-message'][':itemId']['$get']>,
) {
  return ['V1', '/V1/carts/mine/gift-message/:itemId', args] as const
}

export function useGetV1CartsMineGiftMessageItemId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.carts.mine)['gift-message'][':itemId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts.mine)['gift-message'][':itemId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CartsMineGiftMessageItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts.mine)['gift-message'][':itemId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.carts.mine['gift-message'][':itemId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CartsMineGiftMessageItemId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.carts.mine)['gift-message'][':itemId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts.mine)['gift-message'][':itemId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CartsMineGiftMessageItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts.mine)['gift-message'][':itemId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.carts.mine['gift-message'][':itemId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CartsMineGiftMessageItemIdKey() {
  return ['V1', '/V1/carts/mine/gift-message/:itemId', 'POST'] as const
}

export function usePostV1CartsMineGiftMessageItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['gift-message'][':itemId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts.mine)['gift-message'][':itemId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CartsMineGiftMessageItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1.carts.mine)['gift-message'][':itemId']['$post']>
        },
      ) => parseResponse(client.V1.carts.mine['gift-message'][':itemId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CartsMineGiftCardsKey() {
  return ['V1', '/V1/carts/mine/giftCards', 'POST'] as const
}

export function usePostV1CartsMineGiftCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.giftCards.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.carts.mine.giftCards.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CartsMineGiftCardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.V1.carts.mine.giftCards.$post> },
      ) => parseResponse(client.V1.carts.mine.giftCards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1CartsMineGiftCardsGiftCardCodeKey() {
  return ['V1', '/V1/carts/mine/giftCards/:giftCardCode', 'DELETE'] as const
}

export function useDeleteV1CartsMineGiftCardsGiftCardCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine.giftCards)[':giftCardCode']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts.mine.giftCards)[':giftCardCode']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CartsMineGiftCardsGiftCardCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1.carts.mine.giftCards)[':giftCardCode']['$delete']>
        },
      ) =>
        parseResponse(client.V1.carts.mine.giftCards[':giftCardCode'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CartsMineItemsKey() {
  return ['V1', '/V1/carts/mine/items'] as const
}

export function useGetV1CartsMineItems<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.items.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CartsMineItemsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.items.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.carts.mine.items.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CartsMineItems<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.items.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CartsMineItemsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.items.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.carts.mine.items.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CartsMineItemsKey() {
  return ['V1', '/V1/carts/mine/items', 'POST'] as const
}

export function usePostV1CartsMineItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.items.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.carts.mine.items.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CartsMineItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.V1.carts.mine.items.$post> }) =>
        parseResponse(client.V1.carts.mine.items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1CartsMineItemsItemIdKey() {
  return ['V1', '/V1/carts/mine/items/:itemId', 'PUT'] as const
}

export function usePutV1CartsMineItemsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine.items)[':itemId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts.mine.items)[':itemId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CartsMineItemsItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.carts.mine.items)[':itemId']['$put']> },
      ) => parseResponse(client.V1.carts.mine.items[':itemId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1CartsMineItemsItemIdKey() {
  return ['V1', '/V1/carts/mine/items/:itemId', 'DELETE'] as const
}

export function useDeleteV1CartsMineItemsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine.items)[':itemId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts.mine.items)[':itemId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CartsMineItemsItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.V1.carts.mine.items)[':itemId']['$delete']> },
      ) => parseResponse(client.V1.carts.mine.items[':itemId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1CartsMineOrderKey() {
  return ['V1', '/V1/carts/mine/order', 'PUT'] as const
}

export function usePutV1CartsMineOrder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.order.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.carts.mine.order.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CartsMineOrderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.V1.carts.mine.order.$put> }) =>
        parseResponse(client.V1.carts.mine.order.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CartsMinePaymentInformationKey() {
  return ['V1', '/V1/carts/mine/payment-information'] as const
}

export function useGetV1CartsMinePaymentInformation<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['payment-information']['$get']>>
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
        ? getGetV1CartsMinePaymentInformationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts.mine)['payment-information']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.carts.mine['payment-information'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CartsMinePaymentInformation<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['payment-information']['$get']>>
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
        ? getGetV1CartsMinePaymentInformationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts.mine)['payment-information']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.carts.mine['payment-information'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CartsMinePaymentInformationKey() {
  return ['V1', '/V1/carts/mine/payment-information', 'POST'] as const
}

export function usePostV1CartsMinePaymentInformation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['payment-information']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts.mine)['payment-information']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CartsMinePaymentInformationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.V1.carts.mine)['payment-information']['$post']> },
      ) => parseResponse(client.V1.carts.mine['payment-information'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CartsMinePaymentMethodsKey() {
  return ['V1', '/V1/carts/mine/payment-methods'] as const
}

export function useGetV1CartsMinePaymentMethods<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['payment-methods']['$get']>>
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
        ? getGetV1CartsMinePaymentMethodsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts.mine)['payment-methods']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.carts.mine['payment-methods'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CartsMinePaymentMethods<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['payment-methods']['$get']>>
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
        ? getGetV1CartsMinePaymentMethodsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts.mine)['payment-methods']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.carts.mine['payment-methods'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CartsMineSelectedPaymentMethodKey() {
  return ['V1', '/V1/carts/mine/selected-payment-method'] as const
}

export function useGetV1CartsMineSelectedPaymentMethod<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['selected-payment-method']['$get']>>
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
        ? getGetV1CartsMineSelectedPaymentMethodKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts.mine)['selected-payment-method']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.carts.mine['selected-payment-method'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CartsMineSelectedPaymentMethod<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['selected-payment-method']['$get']>>
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
        ? getGetV1CartsMineSelectedPaymentMethodKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts.mine)['selected-payment-method']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.carts.mine['selected-payment-method'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1CartsMineSelectedPaymentMethodKey() {
  return ['V1', '/V1/carts/mine/selected-payment-method', 'PUT'] as const
}

export function usePutV1CartsMineSelectedPaymentMethod<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['selected-payment-method']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts.mine)['selected-payment-method']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CartsMineSelectedPaymentMethodKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1.carts.mine)['selected-payment-method']['$put']>
        },
      ) => parseResponse(client.V1.carts.mine['selected-payment-method'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CartsMineSetPaymentInformationKey() {
  return ['V1', '/V1/carts/mine/set-payment-information', 'POST'] as const
}

export function usePostV1CartsMineSetPaymentInformation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['set-payment-information']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts.mine)['set-payment-information']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CartsMineSetPaymentInformationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1.carts.mine)['set-payment-information']['$post']>
        },
      ) => parseResponse(client.V1.carts.mine['set-payment-information'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CartsMineShippingInformationKey() {
  return ['V1', '/V1/carts/mine/shipping-information', 'POST'] as const
}

export function usePostV1CartsMineShippingInformation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['shipping-information']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts.mine)['shipping-information']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CartsMineShippingInformationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1.carts.mine)['shipping-information']['$post']>
        },
      ) => parseResponse(client.V1.carts.mine['shipping-information'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CartsMineShippingMethodsKey() {
  return ['V1', '/V1/carts/mine/shipping-methods'] as const
}

export function useGetV1CartsMineShippingMethods<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['shipping-methods']['$get']>>
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
        ? getGetV1CartsMineShippingMethodsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts.mine)['shipping-methods']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.carts.mine['shipping-methods'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CartsMineShippingMethods<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['shipping-methods']['$get']>>
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
        ? getGetV1CartsMineShippingMethodsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts.mine)['shipping-methods']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.carts.mine['shipping-methods'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CartsMineTotalsKey() {
  return ['V1', '/V1/carts/mine/totals'] as const
}

export function useGetV1CartsMineTotals<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.totals.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CartsMineTotalsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.totals.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.carts.mine.totals.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CartsMineTotals<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.totals.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CartsMineTotalsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.totals.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.carts.mine.totals.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CartsMineTotalsInformationKey() {
  return ['V1', '/V1/carts/mine/totals-information', 'POST'] as const
}

export function usePostV1CartsMineTotalsInformation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['totals-information']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts.mine)['totals-information']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CartsMineTotalsInformationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.V1.carts.mine)['totals-information']['$post']> },
      ) => parseResponse(client.V1.carts.mine['totals-information'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CartsSearchKey(args: InferRequestType<typeof client.V1.carts.search.$get>) {
  return ['V1', '/V1/carts/search', args] as const
}

export function useGetV1CartsSearch<TError = unknown>(
  args: InferRequestType<typeof client.V1.carts.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CartsSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.carts.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CartsSearch<TError = unknown>(
  args: InferRequestType<typeof client.V1.carts.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CartsSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.carts.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CartsCartIdKey(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['$get']>,
) {
  return ['V1', '/V1/carts/:cartId', args] as const
}

export function useGetV1CartsCartId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CartsCartIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.carts[':cartId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CartsCartId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CartsCartIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.carts[':cartId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1CartsCartIdKey() {
  return ['V1', '/V1/carts/:cartId', 'PUT'] as const
}

export function usePutV1CartsCartId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts)[':cartId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CartsCartIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.carts)[':cartId']['$put']> },
      ) => parseResponse(client.V1.carts[':cartId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CartsCartIdBillingAddressKey(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['billing-address']['$get']>,
) {
  return ['V1', '/V1/carts/:cartId/billing-address', args] as const
}

export function useGetV1CartsCartIdBillingAddress<TError = unknown>(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['billing-address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['billing-address']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CartsCartIdBillingAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['billing-address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.carts[':cartId']['billing-address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CartsCartIdBillingAddress<TError = unknown>(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['billing-address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['billing-address']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CartsCartIdBillingAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['billing-address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.carts[':cartId']['billing-address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CartsCartIdBillingAddressKey() {
  return ['V1', '/V1/carts/:cartId/billing-address', 'POST'] as const
}

export function usePostV1CartsCartIdBillingAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['billing-address']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts)[':cartId']['billing-address']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CartsCartIdBillingAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1.carts)[':cartId']['billing-address']['$post']>
        },
      ) => parseResponse(client.V1.carts[':cartId']['billing-address'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CartsCartIdCouponsKey(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['coupons']['$get']>,
) {
  return ['V1', '/V1/carts/:cartId/coupons', args] as const
}

export function useGetV1CartsCartIdCoupons<TError = unknown>(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['coupons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['coupons']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CartsCartIdCouponsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['coupons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.carts[':cartId'].coupons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CartsCartIdCoupons<TError = unknown>(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['coupons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['coupons']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CartsCartIdCouponsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['coupons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.carts[':cartId'].coupons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1CartsCartIdCouponsKey() {
  return ['V1', '/V1/carts/:cartId/coupons', 'DELETE'] as const
}

export function useDeleteV1CartsCartIdCoupons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['coupons']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts)[':cartId']['coupons']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CartsCartIdCouponsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.V1.carts)[':cartId']['coupons']['$delete']> },
      ) => parseResponse(client.V1.carts[':cartId'].coupons.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1CartsCartIdCouponsCouponCodeKey() {
  return ['V1', '/V1/carts/:cartId/coupons/:couponCode', 'PUT'] as const
}

export function usePutV1CartsCartIdCouponsCouponCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['coupons'][':couponCode']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts)[':cartId']['coupons'][':couponCode']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CartsCartIdCouponsCouponCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.carts)[':cartId']['coupons'][':couponCode']['$put']
          >
        },
      ) =>
        parseResponse(client.V1.carts[':cartId'].coupons[':couponCode'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CartsCartIdEstimateShippingMethodsKey() {
  return ['V1', '/V1/carts/:cartId/estimate-shipping-methods', 'POST'] as const
}

export function usePostV1CartsCartIdEstimateShippingMethods<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.carts)[':cartId']['estimate-shipping-methods']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts)[':cartId']['estimate-shipping-methods']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CartsCartIdEstimateShippingMethodsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.carts)[':cartId']['estimate-shipping-methods']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1.carts[':cartId']['estimate-shipping-methods'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1CartsCartIdEstimateShippingMethodsByAddressIdKey() {
  return ['V1', '/V1/carts/:cartId/estimate-shipping-methods-by-address-id', 'POST'] as const
}

export function usePostV1CartsCartIdEstimateShippingMethodsByAddressId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1.carts)[':cartId']['estimate-shipping-methods-by-address-id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1.carts)[':cartId']['estimate-shipping-methods-by-address-id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CartsCartIdEstimateShippingMethodsByAddressIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.carts)[':cartId']['estimate-shipping-methods-by-address-id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1.carts[':cartId']['estimate-shipping-methods-by-address-id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1CartsCartIdGiftMessageKey(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['gift-message']['$get']>,
) {
  return ['V1', '/V1/carts/:cartId/gift-message', args] as const
}

export function useGetV1CartsCartIdGiftMessage<TError = unknown>(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['gift-message']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['gift-message']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CartsCartIdGiftMessageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['gift-message']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.carts[':cartId']['gift-message'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CartsCartIdGiftMessage<TError = unknown>(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['gift-message']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['gift-message']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CartsCartIdGiftMessageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['gift-message']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.carts[':cartId']['gift-message'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CartsCartIdGiftMessageKey() {
  return ['V1', '/V1/carts/:cartId/gift-message', 'POST'] as const
}

export function usePostV1CartsCartIdGiftMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['gift-message']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts)[':cartId']['gift-message']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CartsCartIdGiftMessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.V1.carts)[':cartId']['gift-message']['$post']> },
      ) => parseResponse(client.V1.carts[':cartId']['gift-message'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CartsCartIdGiftMessageItemIdKey(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['gift-message'][':itemId']['$get']>,
) {
  return ['V1', '/V1/carts/:cartId/gift-message/:itemId', args] as const
}

export function useGetV1CartsCartIdGiftMessageItemId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['gift-message'][':itemId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.carts)[':cartId']['gift-message'][':itemId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CartsCartIdGiftMessageItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.carts)[':cartId']['gift-message'][':itemId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.carts[':cartId']['gift-message'][':itemId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CartsCartIdGiftMessageItemId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['gift-message'][':itemId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.carts)[':cartId']['gift-message'][':itemId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CartsCartIdGiftMessageItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.carts)[':cartId']['gift-message'][':itemId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.carts[':cartId']['gift-message'][':itemId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1CartsCartIdGiftMessageItemIdKey() {
  return ['V1', '/V1/carts/:cartId/gift-message/:itemId', 'POST'] as const
}

export function usePostV1CartsCartIdGiftMessageItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.carts)[':cartId']['gift-message'][':itemId']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts)[':cartId']['gift-message'][':itemId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CartsCartIdGiftMessageItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.carts)[':cartId']['gift-message'][':itemId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1.carts[':cartId']['gift-message'][':itemId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1CartsCartIdGiftCardsKey() {
  return ['V1', '/V1/carts/:cartId/giftCards', 'PUT'] as const
}

export function usePutV1CartsCartIdGiftCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['giftCards']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts)[':cartId']['giftCards']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CartsCartIdGiftCardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.V1.carts)[':cartId']['giftCards']['$put']> },
      ) => parseResponse(client.V1.carts[':cartId'].giftCards.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1CartsCartIdGiftCardsGiftCardCodeKey() {
  return ['V1', '/V1/carts/:cartId/giftCards/:giftCardCode', 'DELETE'] as const
}

export function useDeleteV1CartsCartIdGiftCardsGiftCardCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.carts)[':cartId']['giftCards'][':giftCardCode']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts)[':cartId']['giftCards'][':giftCardCode']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CartsCartIdGiftCardsGiftCardCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.carts)[':cartId']['giftCards'][':giftCardCode']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.V1.carts[':cartId'].giftCards[':giftCardCode'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1CartsCartIdItemsKey(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['items']['$get']>,
) {
  return ['V1', '/V1/carts/:cartId/items', args] as const
}

export function useGetV1CartsCartIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CartsCartIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.carts[':cartId'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CartsCartIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CartsCartIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.carts[':cartId'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1CartsCartIdItemsItemIdKey() {
  return ['V1', '/V1/carts/:cartId/items/:itemId', 'PUT'] as const
}

export function usePutV1CartsCartIdItemsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['items'][':itemId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts)[':cartId']['items'][':itemId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CartsCartIdItemsItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1.carts)[':cartId']['items'][':itemId']['$put']>
        },
      ) => parseResponse(client.V1.carts[':cartId'].items[':itemId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1CartsCartIdItemsItemIdKey() {
  return ['V1', '/V1/carts/:cartId/items/:itemId', 'DELETE'] as const
}

export function useDeleteV1CartsCartIdItemsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['items'][':itemId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts)[':cartId']['items'][':itemId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CartsCartIdItemsItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1.carts)[':cartId']['items'][':itemId']['$delete']>
        },
      ) => parseResponse(client.V1.carts[':cartId'].items[':itemId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1CartsCartIdOrderKey() {
  return ['V1', '/V1/carts/:cartId/order', 'PUT'] as const
}

export function usePutV1CartsCartIdOrder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['order']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts)[':cartId']['order']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CartsCartIdOrderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.carts)[':cartId']['order']['$put']> },
      ) => parseResponse(client.V1.carts[':cartId'].order.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CartsCartIdPaymentMethodsKey(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['payment-methods']['$get']>,
) {
  return ['V1', '/V1/carts/:cartId/payment-methods', args] as const
}

export function useGetV1CartsCartIdPaymentMethods<TError = unknown>(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['payment-methods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['payment-methods']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CartsCartIdPaymentMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['payment-methods']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.carts[':cartId']['payment-methods'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CartsCartIdPaymentMethods<TError = unknown>(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['payment-methods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['payment-methods']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CartsCartIdPaymentMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['payment-methods']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.carts[':cartId']['payment-methods'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CartsCartIdSelectedPaymentMethodKey(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['selected-payment-method']['$get']>,
) {
  return ['V1', '/V1/carts/:cartId/selected-payment-method', args] as const
}

export function useGetV1CartsCartIdSelectedPaymentMethod<TError = unknown>(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['selected-payment-method']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.carts)[':cartId']['selected-payment-method']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CartsCartIdSelectedPaymentMethodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.carts)[':cartId']['selected-payment-method']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.carts[':cartId']['selected-payment-method'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CartsCartIdSelectedPaymentMethod<TError = unknown>(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['selected-payment-method']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.carts)[':cartId']['selected-payment-method']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CartsCartIdSelectedPaymentMethodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.carts)[':cartId']['selected-payment-method']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.carts[':cartId']['selected-payment-method'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1CartsCartIdSelectedPaymentMethodKey() {
  return ['V1', '/V1/carts/:cartId/selected-payment-method', 'PUT'] as const
}

export function usePutV1CartsCartIdSelectedPaymentMethod<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.carts)[':cartId']['selected-payment-method']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts)[':cartId']['selected-payment-method']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CartsCartIdSelectedPaymentMethodKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.carts)[':cartId']['selected-payment-method']['$put']
          >
        },
      ) =>
        parseResponse(
          client.V1.carts[':cartId']['selected-payment-method'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1CartsCartIdShippingInformationKey() {
  return ['V1', '/V1/carts/:cartId/shipping-information', 'POST'] as const
}

export function usePostV1CartsCartIdShippingInformation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['shipping-information']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts)[':cartId']['shipping-information']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CartsCartIdShippingInformationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.carts)[':cartId']['shipping-information']['$post']
          >
        },
      ) =>
        parseResponse(client.V1.carts[':cartId']['shipping-information'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CartsCartIdShippingMethodsKey(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['shipping-methods']['$get']>,
) {
  return ['V1', '/V1/carts/:cartId/shipping-methods', args] as const
}

export function useGetV1CartsCartIdShippingMethods<TError = unknown>(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['shipping-methods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['shipping-methods']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CartsCartIdShippingMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['shipping-methods']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.carts[':cartId']['shipping-methods'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CartsCartIdShippingMethods<TError = unknown>(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['shipping-methods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['shipping-methods']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CartsCartIdShippingMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['shipping-methods']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.carts[':cartId']['shipping-methods'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CartsCartIdTotalsKey(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['totals']['$get']>,
) {
  return ['V1', '/V1/carts/:cartId/totals', args] as const
}

export function useGetV1CartsCartIdTotals<TError = unknown>(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['totals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['totals']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CartsCartIdTotalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['totals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.carts[':cartId'].totals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CartsCartIdTotals<TError = unknown>(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['totals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['totals']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CartsCartIdTotalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['totals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.carts[':cartId'].totals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CartsCartIdTotalsInformationKey() {
  return ['V1', '/V1/carts/:cartId/totals-information', 'POST'] as const
}

export function usePostV1CartsCartIdTotalsInformation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['totals-information']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts)[':cartId']['totals-information']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CartsCartIdTotalsInformationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1.carts)[':cartId']['totals-information']['$post']>
        },
      ) =>
        parseResponse(client.V1.carts[':cartId']['totals-information'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CartsQuoteIdGiftCardsKey(
  args: InferRequestType<(typeof client.V1.carts)[':quoteId']['giftCards']['$get']>,
) {
  return ['V1', '/V1/carts/:quoteId/giftCards', args] as const
}

export function useGetV1CartsQuoteIdGiftCards<TError = unknown>(
  args: InferRequestType<(typeof client.V1.carts)[':quoteId']['giftCards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':quoteId']['giftCards']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CartsQuoteIdGiftCardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':quoteId']['giftCards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.carts[':quoteId'].giftCards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CartsQuoteIdGiftCards<TError = unknown>(
  args: InferRequestType<(typeof client.V1.carts)[':quoteId']['giftCards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':quoteId']['giftCards']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CartsQuoteIdGiftCardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.carts)[':quoteId']['giftCards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.carts[':quoteId'].giftCards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CartsQuoteIdItemsKey() {
  return ['V1', '/V1/carts/:quoteId/items', 'POST'] as const
}

export function usePostV1CartsQuoteIdItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts)[':quoteId']['items']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.carts)[':quoteId']['items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CartsQuoteIdItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.carts)[':quoteId']['items']['$post']> },
      ) => parseResponse(client.V1.carts[':quoteId'].items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CategoriesKey(args: InferRequestType<typeof client.V1.categories.$get>) {
  return ['V1', '/V1/categories', args] as const
}

export function useGetV1Categories<TError = unknown>(
  args: InferRequestType<typeof client.V1.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.categories.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CategoriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.categories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Categories<TError = unknown>(
  args: InferRequestType<typeof client.V1.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.categories.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CategoriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.categories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CategoriesKey() {
  return ['V1', '/V1/categories', 'POST'] as const
}

export function usePostV1Categories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.categories.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.categories.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.V1.categories.$post> }) =>
        parseResponse(client.V1.categories.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CategoriesAttributesKey(
  args: InferRequestType<typeof client.V1.categories.attributes.$get>,
) {
  return ['V1', '/V1/categories/attributes', args] as const
}

export function useGetV1CategoriesAttributes<TError = unknown>(
  args: InferRequestType<typeof client.V1.categories.attributes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.categories.attributes.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CategoriesAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.categories.attributes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.categories.attributes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CategoriesAttributes<TError = unknown>(
  args: InferRequestType<typeof client.V1.categories.attributes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.categories.attributes.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CategoriesAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.categories.attributes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.categories.attributes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CategoriesAttributesAttributeCodeKey(
  args: InferRequestType<(typeof client.V1.categories.attributes)[':attributeCode']['$get']>,
) {
  return ['V1', '/V1/categories/attributes/:attributeCode', args] as const
}

export function useGetV1CategoriesAttributesAttributeCode<TError = unknown>(
  args: InferRequestType<(typeof client.V1.categories.attributes)[':attributeCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.categories.attributes)[':attributeCode']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CategoriesAttributesAttributeCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.categories.attributes)[':attributeCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.categories.attributes[':attributeCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CategoriesAttributesAttributeCode<TError = unknown>(
  args: InferRequestType<(typeof client.V1.categories.attributes)[':attributeCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.categories.attributes)[':attributeCode']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CategoriesAttributesAttributeCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.categories.attributes)[':attributeCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.categories.attributes[':attributeCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CategoriesAttributesAttributeCodeOptionsKey(
  args: InferRequestType<
    (typeof client.V1.categories.attributes)[':attributeCode']['options']['$get']
  >,
) {
  return ['V1', '/V1/categories/attributes/:attributeCode/options', args] as const
}

export function useGetV1CategoriesAttributesAttributeCodeOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1.categories.attributes)[':attributeCode']['options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.categories.attributes)[':attributeCode']['options']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CategoriesAttributesAttributeCodeOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.categories.attributes)[':attributeCode']['options']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.categories.attributes[':attributeCode'].options.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CategoriesAttributesAttributeCodeOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1.categories.attributes)[':attributeCode']['options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.categories.attributes)[':attributeCode']['options']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CategoriesAttributesAttributeCodeOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.categories.attributes)[':attributeCode']['options']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.categories.attributes[':attributeCode'].options.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1CategoriesListKey(
  args: InferRequestType<typeof client.V1.categories.list.$get>,
) {
  return ['V1', '/V1/categories/list', args] as const
}

export function useGetV1CategoriesList<TError = unknown>(
  args: InferRequestType<typeof client.V1.categories.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.categories.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CategoriesListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.categories.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.categories.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CategoriesList<TError = unknown>(
  args: InferRequestType<typeof client.V1.categories.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.categories.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CategoriesListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.categories.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.categories.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CategoriesCategoryIdKey(
  args: InferRequestType<(typeof client.V1.categories)[':categoryId']['$get']>,
) {
  return ['V1', '/V1/categories/:categoryId', args] as const
}

export function useGetV1CategoriesCategoryId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.categories)[':categoryId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.categories)[':categoryId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CategoriesCategoryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.categories)[':categoryId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.categories[':categoryId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CategoriesCategoryId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.categories)[':categoryId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.categories)[':categoryId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CategoriesCategoryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.categories)[':categoryId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.categories[':categoryId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1CategoriesCategoryIdKey() {
  return ['V1', '/V1/categories/:categoryId', 'DELETE'] as const
}

export function useDeleteV1CategoriesCategoryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.categories)[':categoryId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.categories)[':categoryId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CategoriesCategoryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.categories)[':categoryId']['$delete']> },
      ) => parseResponse(client.V1.categories[':categoryId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1CategoriesCategoryIdMoveKey() {
  return ['V1', '/V1/categories/:categoryId/move', 'PUT'] as const
}

export function usePutV1CategoriesCategoryIdMove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.categories)[':categoryId']['move']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.categories)[':categoryId']['move']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CategoriesCategoryIdMoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.V1.categories)[':categoryId']['move']['$put']> },
      ) => parseResponse(client.V1.categories[':categoryId'].move.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CategoriesCategoryIdProductsKey(
  args: InferRequestType<(typeof client.V1.categories)[':categoryId']['products']['$get']>,
) {
  return ['V1', '/V1/categories/:categoryId/products', args] as const
}

export function useGetV1CategoriesCategoryIdProducts<TError = unknown>(
  args: InferRequestType<(typeof client.V1.categories)[':categoryId']['products']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.categories)[':categoryId']['products']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CategoriesCategoryIdProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.categories)[':categoryId']['products']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.categories[':categoryId'].products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CategoriesCategoryIdProducts<TError = unknown>(
  args: InferRequestType<(typeof client.V1.categories)[':categoryId']['products']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.categories)[':categoryId']['products']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CategoriesCategoryIdProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.categories)[':categoryId']['products']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.categories[':categoryId'].products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1CategoriesCategoryIdProductsKey() {
  return ['V1', '/V1/categories/:categoryId/products', 'PUT'] as const
}

export function usePutV1CategoriesCategoryIdProducts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.categories)[':categoryId']['products']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.categories)[':categoryId']['products']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CategoriesCategoryIdProductsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1.categories)[':categoryId']['products']['$put']>
        },
      ) => parseResponse(client.V1.categories[':categoryId'].products.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CategoriesCategoryIdProductsKey() {
  return ['V1', '/V1/categories/:categoryId/products', 'POST'] as const
}

export function usePostV1CategoriesCategoryIdProducts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.categories)[':categoryId']['products']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.categories)[':categoryId']['products']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CategoriesCategoryIdProductsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1.categories)[':categoryId']['products']['$post']>
        },
      ) => parseResponse(client.V1.categories[':categoryId'].products.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1CategoriesCategoryIdProductsSkuKey() {
  return ['V1', '/V1/categories/:categoryId/products/:sku', 'DELETE'] as const
}

export function useDeleteV1CategoriesCategoryIdProductsSku<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.categories)[':categoryId']['products'][':sku']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.categories)[':categoryId']['products'][':sku']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CategoriesCategoryIdProductsSkuKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.categories)[':categoryId']['products'][':sku']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.V1.categories[':categoryId'].products[':sku'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1CategoriesIdKey() {
  return ['V1', '/V1/categories/:id', 'PUT'] as const
}

export function usePutV1CategoriesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.categories)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.categories)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CategoriesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.categories)[':id']['$put']> },
      ) => parseResponse(client.V1.categories[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CmsBlockKey() {
  return ['V1', '/V1/cmsBlock', 'POST'] as const
}

export function usePostV1CmsBlock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.cmsBlock.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.V1.cmsBlock.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CmsBlockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.V1.cmsBlock.$post> }) =>
        parseResponse(client.V1.cmsBlock.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CmsBlockSearchKey(
  args: InferRequestType<typeof client.V1.cmsBlock.search.$get>,
) {
  return ['V1', '/V1/cmsBlock/search', args] as const
}

export function useGetV1CmsBlockSearch<TError = unknown>(
  args: InferRequestType<typeof client.V1.cmsBlock.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.cmsBlock.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CmsBlockSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.cmsBlock.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.cmsBlock.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CmsBlockSearch<TError = unknown>(
  args: InferRequestType<typeof client.V1.cmsBlock.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.cmsBlock.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CmsBlockSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.cmsBlock.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.cmsBlock.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CmsBlockBlockIdKey(
  args: InferRequestType<(typeof client.V1.cmsBlock)[':blockId']['$get']>,
) {
  return ['V1', '/V1/cmsBlock/:blockId', args] as const
}

export function useGetV1CmsBlockBlockId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.cmsBlock)[':blockId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.cmsBlock)[':blockId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CmsBlockBlockIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.cmsBlock)[':blockId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.cmsBlock[':blockId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CmsBlockBlockId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.cmsBlock)[':blockId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.cmsBlock)[':blockId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CmsBlockBlockIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.cmsBlock)[':blockId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.cmsBlock[':blockId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1CmsBlockBlockIdKey() {
  return ['V1', '/V1/cmsBlock/:blockId', 'DELETE'] as const
}

export function useDeleteV1CmsBlockBlockId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.cmsBlock)[':blockId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.cmsBlock)[':blockId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CmsBlockBlockIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.cmsBlock)[':blockId']['$delete']> },
      ) => parseResponse(client.V1.cmsBlock[':blockId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1CmsBlockIdKey() {
  return ['V1', '/V1/cmsBlock/:id', 'PUT'] as const
}

export function usePutV1CmsBlockId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.cmsBlock)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.cmsBlock)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CmsBlockIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.cmsBlock)[':id']['$put']> },
      ) => parseResponse(client.V1.cmsBlock[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CmsPageKey() {
  return ['V1', '/V1/cmsPage', 'POST'] as const
}

export function usePostV1CmsPage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.cmsPage.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.V1.cmsPage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CmsPageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.V1.cmsPage.$post> }) =>
        parseResponse(client.V1.cmsPage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CmsPageSearchKey(
  args: InferRequestType<typeof client.V1.cmsPage.search.$get>,
) {
  return ['V1', '/V1/cmsPage/search', args] as const
}

export function useGetV1CmsPageSearch<TError = unknown>(
  args: InferRequestType<typeof client.V1.cmsPage.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.cmsPage.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CmsPageSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.cmsPage.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.cmsPage.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CmsPageSearch<TError = unknown>(
  args: InferRequestType<typeof client.V1.cmsPage.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.cmsPage.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CmsPageSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.cmsPage.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.cmsPage.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1CmsPageIdKey() {
  return ['V1', '/V1/cmsPage/:id', 'PUT'] as const
}

export function usePutV1CmsPageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.cmsPage)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.cmsPage)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CmsPageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.cmsPage)[':id']['$put']> },
      ) => parseResponse(client.V1.cmsPage[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CmsPagePageIdKey(
  args: InferRequestType<(typeof client.V1.cmsPage)[':pageId']['$get']>,
) {
  return ['V1', '/V1/cmsPage/:pageId', args] as const
}

export function useGetV1CmsPagePageId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.cmsPage)[':pageId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.cmsPage)[':pageId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CmsPagePageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.cmsPage)[':pageId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.cmsPage[':pageId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CmsPagePageId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.cmsPage)[':pageId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.cmsPage)[':pageId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CmsPagePageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.cmsPage)[':pageId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.cmsPage[':pageId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1CmsPagePageIdKey() {
  return ['V1', '/V1/cmsPage/:pageId', 'DELETE'] as const
}

export function useDeleteV1CmsPagePageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.cmsPage)[':pageId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.cmsPage)[':pageId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CmsPagePageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.cmsPage)[':pageId']['$delete']> },
      ) => parseResponse(client.V1.cmsPage[':pageId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CompanyIndexKey(
  args: InferRequestType<typeof client.V1.company.index.$get>,
) {
  return ['V1', '/V1/company/', args] as const
}

export function useGetV1CompanyIndex<TError = unknown>(
  args: InferRequestType<typeof client.V1.company.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.company.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CompanyIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.company.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.company.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CompanyIndex<TError = unknown>(
  args: InferRequestType<typeof client.V1.company.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.company.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CompanyIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.company.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.company.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CompanyIndexKey() {
  return ['V1', '/V1/company/', 'POST'] as const
}

export function usePostV1CompanyIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.company.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.company.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CompanyIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.V1.company.index.$post> }) =>
        parseResponse(client.V1.company.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1CompanyAssignRolesKey() {
  return ['V1', '/V1/company/assignRoles', 'PUT'] as const
}

export function usePutV1CompanyAssignRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.company.assignRoles.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.company.assignRoles.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CompanyAssignRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.V1.company.assignRoles.$put> },
      ) => parseResponse(client.V1.company.assignRoles.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CompanyRoleIndexKey(
  args: InferRequestType<typeof client.V1.company.role.index.$get>,
) {
  return ['V1', '/V1/company/role/', args] as const
}

export function useGetV1CompanyRoleIndex<TError = unknown>(
  args: InferRequestType<typeof client.V1.company.role.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.company.role.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CompanyRoleIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.company.role.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.company.role.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CompanyRoleIndex<TError = unknown>(
  args: InferRequestType<typeof client.V1.company.role.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.company.role.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CompanyRoleIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.company.role.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.company.role.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CompanyRoleIndexKey() {
  return ['V1', '/V1/company/role/', 'POST'] as const
}

export function usePostV1CompanyRoleIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.company.role.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.company.role.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CompanyRoleIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.V1.company.role.index.$post> },
      ) => parseResponse(client.V1.company.role.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1CompanyRoleIdKey() {
  return ['V1', '/V1/company/role/:id', 'PUT'] as const
}

export function usePutV1CompanyRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.company.role)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.company.role)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CompanyRoleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.company.role)[':id']['$put']> },
      ) => parseResponse(client.V1.company.role[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CompanyRoleRoleIdKey(
  args: InferRequestType<(typeof client.V1.company.role)[':roleId']['$get']>,
) {
  return ['V1', '/V1/company/role/:roleId', args] as const
}

export function useGetV1CompanyRoleRoleId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.company.role)[':roleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.company.role)[':roleId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CompanyRoleRoleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.company.role)[':roleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.company.role[':roleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CompanyRoleRoleId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.company.role)[':roleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.company.role)[':roleId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CompanyRoleRoleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.company.role)[':roleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.company.role[':roleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1CompanyRoleRoleIdKey() {
  return ['V1', '/V1/company/role/:roleId', 'DELETE'] as const
}

export function useDeleteV1CompanyRoleRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.company.role)[':roleId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.company.role)[':roleId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CompanyRoleRoleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.company.role)[':roleId']['$delete']> },
      ) => parseResponse(client.V1.company.role[':roleId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CompanyRoleRoleIdUsersKey(
  args: InferRequestType<(typeof client.V1.company.role)[':roleId']['users']['$get']>,
) {
  return ['V1', '/V1/company/role/:roleId/users', args] as const
}

export function useGetV1CompanyRoleRoleIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.V1.company.role)[':roleId']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.company.role)[':roleId']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CompanyRoleRoleIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.company.role)[':roleId']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.company.role[':roleId'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CompanyRoleRoleIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.V1.company.role)[':roleId']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.company.role)[':roleId']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CompanyRoleRoleIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.company.role)[':roleId']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.company.role[':roleId'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CompanyCompanyIdKey(
  args: InferRequestType<(typeof client.V1.company)[':companyId']['$get']>,
) {
  return ['V1', '/V1/company/:companyId', args] as const
}

export function useGetV1CompanyCompanyId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.company)[':companyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.company)[':companyId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CompanyCompanyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.company)[':companyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.company[':companyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CompanyCompanyId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.company)[':companyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.company)[':companyId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CompanyCompanyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.company)[':companyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.company[':companyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1CompanyCompanyIdKey() {
  return ['V1', '/V1/company/:companyId', 'PUT'] as const
}

export function usePutV1CompanyCompanyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.company)[':companyId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.company)[':companyId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CompanyCompanyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.company)[':companyId']['$put']> },
      ) => parseResponse(client.V1.company[':companyId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1CompanyCompanyIdKey() {
  return ['V1', '/V1/company/:companyId', 'DELETE'] as const
}

export function useDeleteV1CompanyCompanyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.company)[':companyId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.company)[':companyId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CompanyCompanyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.company)[':companyId']['$delete']> },
      ) => parseResponse(client.V1.company[':companyId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CompanyCreditsIndexKey(
  args: InferRequestType<typeof client.V1.companyCredits.index.$get>,
) {
  return ['V1', '/V1/companyCredits/', args] as const
}

export function useGetV1CompanyCreditsIndex<TError = unknown>(
  args: InferRequestType<typeof client.V1.companyCredits.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.companyCredits.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CompanyCreditsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.companyCredits.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.companyCredits.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CompanyCreditsIndex<TError = unknown>(
  args: InferRequestType<typeof client.V1.companyCredits.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.companyCredits.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CompanyCreditsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.companyCredits.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.companyCredits.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CompanyCreditsCompanyCompanyIdKey(
  args: InferRequestType<(typeof client.V1.companyCredits.company)[':companyId']['$get']>,
) {
  return ['V1', '/V1/companyCredits/company/:companyId', args] as const
}

export function useGetV1CompanyCreditsCompanyCompanyId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.companyCredits.company)[':companyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.companyCredits.company)[':companyId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CompanyCreditsCompanyCompanyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.companyCredits.company)[':companyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.companyCredits.company[':companyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CompanyCreditsCompanyCompanyId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.companyCredits.company)[':companyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.companyCredits.company)[':companyId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CompanyCreditsCompanyCompanyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.companyCredits.company)[':companyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.companyCredits.company[':companyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CompanyCreditsHistoryKey(
  args: InferRequestType<typeof client.V1.companyCredits.history.$get>,
) {
  return ['V1', '/V1/companyCredits/history', args] as const
}

export function useGetV1CompanyCreditsHistory<TError = unknown>(
  args: InferRequestType<typeof client.V1.companyCredits.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.companyCredits.history.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CompanyCreditsHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.companyCredits.history.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.companyCredits.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CompanyCreditsHistory<TError = unknown>(
  args: InferRequestType<typeof client.V1.companyCredits.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.companyCredits.history.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CompanyCreditsHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.companyCredits.history.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.companyCredits.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1CompanyCreditsHistoryHistoryIdKey() {
  return ['V1', '/V1/companyCredits/history/:historyId', 'PUT'] as const
}

export function usePutV1CompanyCreditsHistoryHistoryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.companyCredits.history)[':historyId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.companyCredits.history)[':historyId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CompanyCreditsHistoryHistoryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1.companyCredits.history)[':historyId']['$put']>
        },
      ) => parseResponse(client.V1.companyCredits.history[':historyId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CompanyCreditsCreditIdKey(
  args: InferRequestType<(typeof client.V1.companyCredits)[':creditId']['$get']>,
) {
  return ['V1', '/V1/companyCredits/:creditId', args] as const
}

export function useGetV1CompanyCreditsCreditId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.companyCredits)[':creditId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.companyCredits)[':creditId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CompanyCreditsCreditIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.companyCredits)[':creditId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.companyCredits[':creditId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CompanyCreditsCreditId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.companyCredits)[':creditId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.companyCredits)[':creditId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CompanyCreditsCreditIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.companyCredits)[':creditId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.companyCredits[':creditId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CompanyCreditsCreditIdDecreaseBalanceKey() {
  return ['V1', '/V1/companyCredits/:creditId/decreaseBalance', 'POST'] as const
}

export function usePostV1CompanyCreditsCreditIdDecreaseBalance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.companyCredits)[':creditId']['decreaseBalance']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.companyCredits)[':creditId']['decreaseBalance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CompanyCreditsCreditIdDecreaseBalanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.companyCredits)[':creditId']['decreaseBalance']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1.companyCredits[':creditId'].decreaseBalance.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1CompanyCreditsCreditIdIncreaseBalanceKey() {
  return ['V1', '/V1/companyCredits/:creditId/increaseBalance', 'POST'] as const
}

export function usePostV1CompanyCreditsCreditIdIncreaseBalance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.companyCredits)[':creditId']['increaseBalance']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.companyCredits)[':creditId']['increaseBalance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CompanyCreditsCreditIdIncreaseBalanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.companyCredits)[':creditId']['increaseBalance']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1.companyCredits[':creditId'].increaseBalance.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1CompanyCreditsIdKey() {
  return ['V1', '/V1/companyCredits/:id', 'PUT'] as const
}

export function usePutV1CompanyCreditsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.companyCredits)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.companyCredits)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CompanyCreditsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.companyCredits)[':id']['$put']> },
      ) => parseResponse(client.V1.companyCredits[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1ConfigurableProductsVariationKey() {
  return ['V1', '/V1/configurable-products/variation', 'PUT'] as const
}

export function usePutV1ConfigurableProductsVariation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['configurable-products']['variation']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1)['configurable-products']['variation']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ConfigurableProductsVariationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1)['configurable-products']['variation']['$put']>
        },
      ) => parseResponse(client.V1['configurable-products'].variation.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConfigurableProductsSkuChildKey() {
  return ['V1', '/V1/configurable-products/:sku/child', 'POST'] as const
}

export function usePostV1ConfigurableProductsSkuChild<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['configurable-products'][':sku']['child']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1)['configurable-products'][':sku']['child']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConfigurableProductsSkuChildKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['configurable-products'][':sku']['child']['$post']
          >
        },
      ) =>
        parseResponse(client.V1['configurable-products'][':sku'].child.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConfigurableProductsSkuChildrenKey(
  args: InferRequestType<(typeof client.V1)['configurable-products'][':sku']['children']['$get']>,
) {
  return ['V1', '/V1/configurable-products/:sku/children', args] as const
}

export function useGetV1ConfigurableProductsSkuChildren<TError = unknown>(
  args: InferRequestType<(typeof client.V1)['configurable-products'][':sku']['children']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1)['configurable-products'][':sku']['children']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConfigurableProductsSkuChildrenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1)['configurable-products'][':sku']['children']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1['configurable-products'][':sku'].children.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConfigurableProductsSkuChildren<TError = unknown>(
  args: InferRequestType<(typeof client.V1)['configurable-products'][':sku']['children']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1)['configurable-products'][':sku']['children']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConfigurableProductsSkuChildrenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1)['configurable-products'][':sku']['children']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1['configurable-products'][':sku'].children.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ConfigurableProductsSkuChildrenChildSkuKey() {
  return ['V1', '/V1/configurable-products/:sku/children/:childSku', 'DELETE'] as const
}

export function useDeleteV1ConfigurableProductsSkuChildrenChildSku<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1)['configurable-products'][':sku']['children'][':childSku']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1)['configurable-products'][':sku']['children'][':childSku']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ConfigurableProductsSkuChildrenChildSkuKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['configurable-products'][':sku']['children'][':childSku']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.V1['configurable-products'][':sku'].children[':childSku'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConfigurableProductsSkuOptionsKey() {
  return ['V1', '/V1/configurable-products/:sku/options', 'POST'] as const
}

export function usePostV1ConfigurableProductsSkuOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1)['configurable-products'][':sku']['options']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1)['configurable-products'][':sku']['options']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConfigurableProductsSkuOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['configurable-products'][':sku']['options']['$post']
          >
        },
      ) =>
        parseResponse(client.V1['configurable-products'][':sku'].options.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConfigurableProductsSkuOptionsAllKey(
  args: InferRequestType<
    (typeof client.V1)['configurable-products'][':sku']['options']['all']['$get']
  >,
) {
  return ['V1', '/V1/configurable-products/:sku/options/all', args] as const
}

export function useGetV1ConfigurableProductsSkuOptionsAll<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1)['configurable-products'][':sku']['options']['all']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['configurable-products'][':sku']['options']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConfigurableProductsSkuOptionsAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['configurable-products'][':sku']['options']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1['configurable-products'][':sku'].options.all.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConfigurableProductsSkuOptionsAll<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1)['configurable-products'][':sku']['options']['all']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['configurable-products'][':sku']['options']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConfigurableProductsSkuOptionsAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['configurable-products'][':sku']['options']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1['configurable-products'][':sku'].options.all.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ConfigurableProductsSkuOptionsIdKey(
  args: InferRequestType<
    (typeof client.V1)['configurable-products'][':sku']['options'][':id']['$get']
  >,
) {
  return ['V1', '/V1/configurable-products/:sku/options/:id', args] as const
}

export function useGetV1ConfigurableProductsSkuOptionsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1)['configurable-products'][':sku']['options'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['configurable-products'][':sku']['options'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConfigurableProductsSkuOptionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['configurable-products'][':sku']['options'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1['configurable-products'][':sku'].options[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConfigurableProductsSkuOptionsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1)['configurable-products'][':sku']['options'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['configurable-products'][':sku']['options'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConfigurableProductsSkuOptionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['configurable-products'][':sku']['options'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1['configurable-products'][':sku'].options[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ConfigurableProductsSkuOptionsIdKey() {
  return ['V1', '/V1/configurable-products/:sku/options/:id', 'PUT'] as const
}

export function usePutV1ConfigurableProductsSkuOptionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1)['configurable-products'][':sku']['options'][':id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1)['configurable-products'][':sku']['options'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ConfigurableProductsSkuOptionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['configurable-products'][':sku']['options'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.V1['configurable-products'][':sku'].options[':id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ConfigurableProductsSkuOptionsIdKey() {
  return ['V1', '/V1/configurable-products/:sku/options/:id', 'DELETE'] as const
}

export function useDeleteV1ConfigurableProductsSkuOptionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1)['configurable-products'][':sku']['options'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1)['configurable-products'][':sku']['options'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ConfigurableProductsSkuOptionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['configurable-products'][':sku']['options'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.V1['configurable-products'][':sku'].options[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1CouponsKey() {
  return ['V1', '/V1/coupons', 'POST'] as const
}

export function usePostV1Coupons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.coupons.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.V1.coupons.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CouponsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.V1.coupons.$post> }) =>
        parseResponse(client.V1.coupons.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CouponsDeleteByCodesKey() {
  return ['V1', '/V1/coupons/deleteByCodes', 'POST'] as const
}

export function usePostV1CouponsDeleteByCodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.coupons.deleteByCodes.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.coupons.deleteByCodes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CouponsDeleteByCodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.V1.coupons.deleteByCodes.$post> },
      ) => parseResponse(client.V1.coupons.deleteByCodes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CouponsDeleteByIdsKey() {
  return ['V1', '/V1/coupons/deleteByIds', 'POST'] as const
}

export function usePostV1CouponsDeleteByIds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.coupons.deleteByIds.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.coupons.deleteByIds.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CouponsDeleteByIdsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.V1.coupons.deleteByIds.$post> },
      ) => parseResponse(client.V1.coupons.deleteByIds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CouponsGenerateKey() {
  return ['V1', '/V1/coupons/generate', 'POST'] as const
}

export function usePostV1CouponsGenerate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.coupons.generate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.coupons.generate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CouponsGenerateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.V1.coupons.generate.$post> }) =>
        parseResponse(client.V1.coupons.generate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CouponsSearchKey(
  args: InferRequestType<typeof client.V1.coupons.search.$get>,
) {
  return ['V1', '/V1/coupons/search', args] as const
}

export function useGetV1CouponsSearch<TError = unknown>(
  args: InferRequestType<typeof client.V1.coupons.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.coupons.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CouponsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.coupons.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.coupons.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CouponsSearch<TError = unknown>(
  args: InferRequestType<typeof client.V1.coupons.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.coupons.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CouponsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.coupons.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.coupons.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CouponsCouponIdKey(
  args: InferRequestType<(typeof client.V1.coupons)[':couponId']['$get']>,
) {
  return ['V1', '/V1/coupons/:couponId', args] as const
}

export function useGetV1CouponsCouponId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.coupons)[':couponId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.coupons)[':couponId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CouponsCouponIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.coupons)[':couponId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.coupons[':couponId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CouponsCouponId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.coupons)[':couponId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.coupons)[':couponId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CouponsCouponIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.coupons)[':couponId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.coupons[':couponId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1CouponsCouponIdKey() {
  return ['V1', '/V1/coupons/:couponId', 'PUT'] as const
}

export function usePutV1CouponsCouponId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.coupons)[':couponId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.coupons)[':couponId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CouponsCouponIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.coupons)[':couponId']['$put']> },
      ) => parseResponse(client.V1.coupons[':couponId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1CouponsCouponIdKey() {
  return ['V1', '/V1/coupons/:couponId', 'DELETE'] as const
}

export function useDeleteV1CouponsCouponId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.coupons)[':couponId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.coupons)[':couponId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CouponsCouponIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.coupons)[':couponId']['$delete']> },
      ) => parseResponse(client.V1.coupons[':couponId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CreditmemoKey() {
  return ['V1', '/V1/creditmemo', 'POST'] as const
}

export function usePostV1Creditmemo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.creditmemo.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.creditmemo.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CreditmemoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.V1.creditmemo.$post> }) =>
        parseResponse(client.V1.creditmemo.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CreditmemoRefundKey() {
  return ['V1', '/V1/creditmemo/refund', 'POST'] as const
}

export function usePostV1CreditmemoRefund<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.creditmemo.refund.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.creditmemo.refund.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CreditmemoRefundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.V1.creditmemo.refund.$post> },
      ) => parseResponse(client.V1.creditmemo.refund.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CreditmemoIdKey(
  args: InferRequestType<(typeof client.V1.creditmemo)[':id']['$get']>,
) {
  return ['V1', '/V1/creditmemo/:id', args] as const
}

export function useGetV1CreditmemoId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.creditmemo)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.creditmemo)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CreditmemoIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.creditmemo)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.creditmemo[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CreditmemoId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.creditmemo)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.creditmemo)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CreditmemoIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.creditmemo)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.creditmemo[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1CreditmemoIdKey() {
  return ['V1', '/V1/creditmemo/:id', 'PUT'] as const
}

export function usePutV1CreditmemoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.creditmemo)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.creditmemo)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CreditmemoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.creditmemo)[':id']['$put']> },
      ) => parseResponse(client.V1.creditmemo[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CreditmemoIdCommentsKey(
  args: InferRequestType<(typeof client.V1.creditmemo)[':id']['comments']['$get']>,
) {
  return ['V1', '/V1/creditmemo/:id/comments', args] as const
}

export function useGetV1CreditmemoIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.V1.creditmemo)[':id']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.creditmemo)[':id']['comments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CreditmemoIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.creditmemo)[':id']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.creditmemo[':id'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CreditmemoIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.V1.creditmemo)[':id']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.creditmemo)[':id']['comments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CreditmemoIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.creditmemo)[':id']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.creditmemo[':id'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CreditmemoIdCommentsKey() {
  return ['V1', '/V1/creditmemo/:id/comments', 'POST'] as const
}

export function usePostV1CreditmemoIdComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.creditmemo)[':id']['comments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.creditmemo)[':id']['comments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CreditmemoIdCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.V1.creditmemo)[':id']['comments']['$post']> },
      ) => parseResponse(client.V1.creditmemo[':id'].comments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CreditmemoIdEmailsKey() {
  return ['V1', '/V1/creditmemo/:id/emails', 'POST'] as const
}

export function usePostV1CreditmemoIdEmails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.creditmemo)[':id']['emails']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.creditmemo)[':id']['emails']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CreditmemoIdEmailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.creditmemo)[':id']['emails']['$post']> },
      ) => parseResponse(client.V1.creditmemo[':id'].emails.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CreditmemosKey(args: InferRequestType<typeof client.V1.creditmemos.$get>) {
  return ['V1', '/V1/creditmemos', args] as const
}

export function useGetV1Creditmemos<TError = unknown>(
  args: InferRequestType<typeof client.V1.creditmemos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.creditmemos.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CreditmemosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.creditmemos.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.creditmemos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Creditmemos<TError = unknown>(
  args: InferRequestType<typeof client.V1.creditmemos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.creditmemos.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CreditmemosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.creditmemos.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.creditmemos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CustomerGroupsKey() {
  return ['V1', '/V1/customerGroups', 'POST'] as const
}

export function usePostV1CustomerGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.customerGroups.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.customerGroups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomerGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.V1.customerGroups.$post> }) =>
        parseResponse(client.V1.customerGroups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomerGroupsDefaultKey(
  args: InferRequestType<typeof client.V1.customerGroups.default.$get>,
) {
  return ['V1', '/V1/customerGroups/default', args] as const
}

export function useGetV1CustomerGroupsDefault<TError = unknown>(
  args: InferRequestType<typeof client.V1.customerGroups.default.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.customerGroups.default.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CustomerGroupsDefaultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.customerGroups.default.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.customerGroups.default.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomerGroupsDefault<TError = unknown>(
  args: InferRequestType<typeof client.V1.customerGroups.default.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.customerGroups.default.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CustomerGroupsDefaultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.customerGroups.default.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.customerGroups.default.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1CustomerGroupsDefaultIdKey() {
  return ['V1', '/V1/customerGroups/default/:id', 'PUT'] as const
}

export function usePutV1CustomerGroupsDefaultId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.customerGroups.default)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.customerGroups.default)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CustomerGroupsDefaultIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.V1.customerGroups.default)[':id']['$put']> },
      ) => parseResponse(client.V1.customerGroups.default[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomerGroupsDefaultStoreIdKey(
  args: InferRequestType<(typeof client.V1.customerGroups.default)[':storeId']['$get']>,
) {
  return ['V1', '/V1/customerGroups/default/:storeId', args] as const
}

export function useGetV1CustomerGroupsDefaultStoreId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.customerGroups.default)[':storeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.customerGroups.default)[':storeId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CustomerGroupsDefaultStoreIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.customerGroups.default)[':storeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.customerGroups.default[':storeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomerGroupsDefaultStoreId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.customerGroups.default)[':storeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.customerGroups.default)[':storeId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CustomerGroupsDefaultStoreIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.customerGroups.default)[':storeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.customerGroups.default[':storeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CustomerGroupsSearchKey(
  args: InferRequestType<typeof client.V1.customerGroups.search.$get>,
) {
  return ['V1', '/V1/customerGroups/search', args] as const
}

export function useGetV1CustomerGroupsSearch<TError = unknown>(
  args: InferRequestType<typeof client.V1.customerGroups.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.customerGroups.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CustomerGroupsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.customerGroups.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.customerGroups.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomerGroupsSearch<TError = unknown>(
  args: InferRequestType<typeof client.V1.customerGroups.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.customerGroups.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CustomerGroupsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.customerGroups.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.customerGroups.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CustomerGroupsIdKey(
  args: InferRequestType<(typeof client.V1.customerGroups)[':id']['$get']>,
) {
  return ['V1', '/V1/customerGroups/:id', args] as const
}

export function useGetV1CustomerGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.customerGroups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.customerGroups)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CustomerGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.customerGroups)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.customerGroups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomerGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.customerGroups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.customerGroups)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CustomerGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.customerGroups)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.customerGroups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1CustomerGroupsIdKey() {
  return ['V1', '/V1/customerGroups/:id', 'PUT'] as const
}

export function usePutV1CustomerGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.customerGroups)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.customerGroups)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CustomerGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.customerGroups)[':id']['$put']> },
      ) => parseResponse(client.V1.customerGroups[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1CustomerGroupsIdKey() {
  return ['V1', '/V1/customerGroups/:id', 'DELETE'] as const
}

export function useDeleteV1CustomerGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.customerGroups)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.customerGroups)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CustomerGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.customerGroups)[':id']['$delete']> },
      ) => parseResponse(client.V1.customerGroups[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomerGroupsIdPermissionsKey(
  args: InferRequestType<(typeof client.V1.customerGroups)[':id']['permissions']['$get']>,
) {
  return ['V1', '/V1/customerGroups/:id/permissions', args] as const
}

export function useGetV1CustomerGroupsIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.V1.customerGroups)[':id']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.customerGroups)[':id']['permissions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CustomerGroupsIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.customerGroups)[':id']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.customerGroups[':id'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomerGroupsIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.V1.customerGroups)[':id']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.customerGroups)[':id']['permissions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CustomerGroupsIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.customerGroups)[':id']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.customerGroups[':id'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CustomersKey() {
  return ['V1', '/V1/customers', 'POST'] as const
}

export function usePostV1Customers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.customers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.V1.customers.$post> }) =>
        parseResponse(client.V1.customers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomersAddressesAddressIdKey(
  args: InferRequestType<(typeof client.V1.customers.addresses)[':addressId']['$get']>,
) {
  return ['V1', '/V1/customers/addresses/:addressId', args] as const
}

export function useGetV1CustomersAddressesAddressId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.customers.addresses)[':addressId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.customers.addresses)[':addressId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CustomersAddressesAddressIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.customers.addresses)[':addressId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.customers.addresses[':addressId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersAddressesAddressId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.customers.addresses)[':addressId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.customers.addresses)[':addressId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CustomersAddressesAddressIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.customers.addresses)[':addressId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.customers.addresses[':addressId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CustomersConfirmKey() {
  return ['V1', '/V1/customers/confirm', 'POST'] as const
}

export function usePostV1CustomersConfirm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.confirm.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.customers.confirm.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomersConfirmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.V1.customers.confirm.$post> },
      ) => parseResponse(client.V1.customers.confirm.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CustomersIsEmailAvailableKey() {
  return ['V1', '/V1/customers/isEmailAvailable', 'POST'] as const
}

export function usePostV1CustomersIsEmailAvailable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.isEmailAvailable.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.customers.isEmailAvailable.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomersIsEmailAvailableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.V1.customers.isEmailAvailable.$post> },
      ) => parseResponse(client.V1.customers.isEmailAvailable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomersMeKey() {
  return ['V1', '/V1/customers/me'] as const
}

export function useGetV1CustomersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.me.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CustomersMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.me.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.customers.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.me.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CustomersMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.me.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.customers.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1CustomersMeKey() {
  return ['V1', '/V1/customers/me', 'PUT'] as const
}

export function usePutV1CustomersMe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.me.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.customers.me.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CustomersMeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.V1.customers.me.$put> }) =>
        parseResponse(client.V1.customers.me.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1CustomersMeActivateKey() {
  return ['V1', '/V1/customers/me/activate', 'PUT'] as const
}

export function usePutV1CustomersMeActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.me.activate.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.customers.me.activate.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CustomersMeActivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.V1.customers.me.activate.$put> },
      ) => parseResponse(client.V1.customers.me.activate.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomersMeBillingAddressKey() {
  return ['V1', '/V1/customers/me/billingAddress'] as const
}

export function useGetV1CustomersMeBillingAddress<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.me.billingAddress.$get>>>
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
        ? getGetV1CustomersMeBillingAddressKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.V1.customers.me.billingAddress.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.customers.me.billingAddress.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersMeBillingAddress<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.me.billingAddress.$get>>>
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
        ? getGetV1CustomersMeBillingAddressKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.V1.customers.me.billingAddress.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.customers.me.billingAddress.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1CustomersMePasswordKey() {
  return ['V1', '/V1/customers/me/password', 'PUT'] as const
}

export function usePutV1CustomersMePassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.me.password.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.customers.me.password.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CustomersMePasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.V1.customers.me.password.$put> },
      ) => parseResponse(client.V1.customers.me.password.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomersMeShippingAddressKey() {
  return ['V1', '/V1/customers/me/shippingAddress'] as const
}

export function useGetV1CustomersMeShippingAddress<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.V1.customers.me.shippingAddress.$get>>
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
        ? getGetV1CustomersMeShippingAddressKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.V1.customers.me.shippingAddress.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.customers.me.shippingAddress.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersMeShippingAddress<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.V1.customers.me.shippingAddress.$get>>
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
        ? getGetV1CustomersMeShippingAddressKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.V1.customers.me.shippingAddress.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.customers.me.shippingAddress.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1CustomersPasswordKey() {
  return ['V1', '/V1/customers/password', 'PUT'] as const
}

export function usePutV1CustomersPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.password.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.customers.password.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CustomersPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.V1.customers.password.$put> },
      ) => parseResponse(client.V1.customers.password.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CustomersResetPasswordKey() {
  return ['V1', '/V1/customers/resetPassword', 'POST'] as const
}

export function usePostV1CustomersResetPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.resetPassword.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.customers.resetPassword.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomersResetPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.V1.customers.resetPassword.$post> },
      ) => parseResponse(client.V1.customers.resetPassword.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomersSearchKey(
  args: InferRequestType<typeof client.V1.customers.search.$get>,
) {
  return ['V1', '/V1/customers/search', args] as const
}

export function useGetV1CustomersSearch<TError = unknown>(
  args: InferRequestType<typeof client.V1.customers.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CustomersSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.customers.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersSearch<TError = unknown>(
  args: InferRequestType<typeof client.V1.customers.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CustomersSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.customers.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1CustomersValidateKey() {
  return ['V1', '/V1/customers/validate', 'PUT'] as const
}

export function usePutV1CustomersValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.validate.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.customers.validate.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CustomersValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.V1.customers.validate.$put> },
      ) => parseResponse(client.V1.customers.validate.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomersCustomerIdKey(
  args: InferRequestType<(typeof client.V1.customers)[':customerId']['$get']>,
) {
  return ['V1', '/V1/customers/:customerId', args] as const
}

export function useGetV1CustomersCustomerId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.customers)[':customerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.customers)[':customerId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CustomersCustomerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.customers)[':customerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.customers[':customerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersCustomerId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.customers)[':customerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.customers)[':customerId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CustomersCustomerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.customers)[':customerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.customers[':customerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1CustomersCustomerIdKey() {
  return ['V1', '/V1/customers/:customerId', 'PUT'] as const
}

export function usePutV1CustomersCustomerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.customers)[':customerId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.customers)[':customerId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CustomersCustomerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.customers)[':customerId']['$put']> },
      ) => parseResponse(client.V1.customers[':customerId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1CustomersCustomerIdKey() {
  return ['V1', '/V1/customers/:customerId', 'DELETE'] as const
}

export function useDeleteV1CustomersCustomerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.customers)[':customerId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.customers)[':customerId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CustomersCustomerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.customers)[':customerId']['$delete']> },
      ) => parseResponse(client.V1.customers[':customerId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomersCustomerIdBillingAddressKey(
  args: InferRequestType<(typeof client.V1.customers)[':customerId']['billingAddress']['$get']>,
) {
  return ['V1', '/V1/customers/:customerId/billingAddress', args] as const
}

export function useGetV1CustomersCustomerIdBillingAddress<TError = unknown>(
  args: InferRequestType<(typeof client.V1.customers)[':customerId']['billingAddress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.customers)[':customerId']['billingAddress']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CustomersCustomerIdBillingAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.customers)[':customerId']['billingAddress']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.customers[':customerId'].billingAddress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersCustomerIdBillingAddress<TError = unknown>(
  args: InferRequestType<(typeof client.V1.customers)[':customerId']['billingAddress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.customers)[':customerId']['billingAddress']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CustomersCustomerIdBillingAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.customers)[':customerId']['billingAddress']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.customers[':customerId'].billingAddress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CustomersCustomerIdCartsKey() {
  return ['V1', '/V1/customers/:customerId/carts', 'POST'] as const
}

export function usePostV1CustomersCustomerIdCarts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.customers)[':customerId']['carts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.customers)[':customerId']['carts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomersCustomerIdCartsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.V1.customers)[':customerId']['carts']['$post']> },
      ) => parseResponse(client.V1.customers[':customerId'].carts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomersCustomerIdConfirmKey(
  args: InferRequestType<(typeof client.V1.customers)[':customerId']['confirm']['$get']>,
) {
  return ['V1', '/V1/customers/:customerId/confirm', args] as const
}

export function useGetV1CustomersCustomerIdConfirm<TError = unknown>(
  args: InferRequestType<(typeof client.V1.customers)[':customerId']['confirm']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.customers)[':customerId']['confirm']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CustomersCustomerIdConfirmKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.customers)[':customerId']['confirm']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.customers[':customerId'].confirm.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersCustomerIdConfirm<TError = unknown>(
  args: InferRequestType<(typeof client.V1.customers)[':customerId']['confirm']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.customers)[':customerId']['confirm']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CustomersCustomerIdConfirmKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.customers)[':customerId']['confirm']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.customers[':customerId'].confirm.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CustomersCustomerIdPasswordResetLinkTokenResetPasswordLinkTokenKey(
  args: InferRequestType<
    (typeof client.V1.customers)[':customerId']['password']['resetLinkToken'][':resetPasswordLinkToken']['$get']
  >,
) {
  return [
    'V1',
    '/V1/customers/:customerId/password/resetLinkToken/:resetPasswordLinkToken',
    args,
  ] as const
}

export function useGetV1CustomersCustomerIdPasswordResetLinkTokenResetPasswordLinkToken<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.V1.customers)[':customerId']['password']['resetLinkToken'][':resetPasswordLinkToken']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.customers)[':customerId']['password']['resetLinkToken'][':resetPasswordLinkToken']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CustomersCustomerIdPasswordResetLinkTokenResetPasswordLinkTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.customers)[':customerId']['password']['resetLinkToken'][':resetPasswordLinkToken']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.customers[':customerId'].password.resetLinkToken[
            ':resetPasswordLinkToken'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersCustomerIdPasswordResetLinkTokenResetPasswordLinkToken<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.V1.customers)[':customerId']['password']['resetLinkToken'][':resetPasswordLinkToken']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.customers)[':customerId']['password']['resetLinkToken'][':resetPasswordLinkToken']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CustomersCustomerIdPasswordResetLinkTokenResetPasswordLinkTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.customers)[':customerId']['password']['resetLinkToken'][':resetPasswordLinkToken']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.customers[':customerId'].password.resetLinkToken[
            ':resetPasswordLinkToken'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1CustomersCustomerIdPermissionsReadonlyKey(
  args: InferRequestType<
    (typeof client.V1.customers)[':customerId']['permissions']['readonly']['$get']
  >,
) {
  return ['V1', '/V1/customers/:customerId/permissions/readonly', args] as const
}

export function useGetV1CustomersCustomerIdPermissionsReadonly<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1.customers)[':customerId']['permissions']['readonly']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.customers)[':customerId']['permissions']['readonly']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CustomersCustomerIdPermissionsReadonlyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.customers)[':customerId']['permissions']['readonly']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.customers[':customerId'].permissions.readonly.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersCustomerIdPermissionsReadonly<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1.customers)[':customerId']['permissions']['readonly']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.customers)[':customerId']['permissions']['readonly']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CustomersCustomerIdPermissionsReadonlyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.customers)[':customerId']['permissions']['readonly']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.customers[':customerId'].permissions.readonly.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1CustomersCustomerIdShippingAddressKey(
  args: InferRequestType<(typeof client.V1.customers)[':customerId']['shippingAddress']['$get']>,
) {
  return ['V1', '/V1/customers/:customerId/shippingAddress', args] as const
}

export function useGetV1CustomersCustomerIdShippingAddress<TError = unknown>(
  args: InferRequestType<(typeof client.V1.customers)[':customerId']['shippingAddress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.customers)[':customerId']['shippingAddress']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CustomersCustomerIdShippingAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.customers)[':customerId']['shippingAddress']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.customers[':customerId'].shippingAddress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersCustomerIdShippingAddress<TError = unknown>(
  args: InferRequestType<(typeof client.V1.customers)[':customerId']['shippingAddress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.customers)[':customerId']['shippingAddress']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CustomersCustomerIdShippingAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.customers)[':customerId']['shippingAddress']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.customers[':customerId'].shippingAddress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1CustomersEmailActivateKey() {
  return ['V1', '/V1/customers/:email/activate', 'PUT'] as const
}

export function usePutV1CustomersEmailActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.customers)[':email']['activate']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.customers)[':email']['activate']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CustomersEmailActivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.V1.customers)[':email']['activate']['$put']> },
      ) => parseResponse(client.V1.customers[':email'].activate.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DirectoryCountriesKey() {
  return ['V1', '/V1/directory/countries'] as const
}

export function useGetV1DirectoryCountries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.directory.countries.$get>>>
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
        ? getGetV1DirectoryCountriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.directory.countries.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.directory.countries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DirectoryCountries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.directory.countries.$get>>>
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
        ? getGetV1DirectoryCountriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.directory.countries.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.directory.countries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DirectoryCountriesCountryIdKey(
  args: InferRequestType<(typeof client.V1.directory.countries)[':countryId']['$get']>,
) {
  return ['V1', '/V1/directory/countries/:countryId', args] as const
}

export function useGetV1DirectoryCountriesCountryId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.directory.countries)[':countryId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.directory.countries)[':countryId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DirectoryCountriesCountryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.directory.countries)[':countryId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.directory.countries[':countryId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DirectoryCountriesCountryId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.directory.countries)[':countryId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.directory.countries)[':countryId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DirectoryCountriesCountryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.directory.countries)[':countryId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.directory.countries[':countryId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DirectoryCurrencyKey() {
  return ['V1', '/V1/directory/currency'] as const
}

export function useGetV1DirectoryCurrency<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.directory.currency.$get>>>
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
        ? getGetV1DirectoryCurrencyKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.directory.currency.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.directory.currency.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DirectoryCurrency<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.directory.currency.$get>>>
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
        ? getGetV1DirectoryCurrencyKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.directory.currency.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.directory.currency.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1EavAttributeSetsKey() {
  return ['V1', '/V1/eav/attribute-sets', 'POST'] as const
}

export function usePostV1EavAttributeSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.eav)['attribute-sets']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.eav)['attribute-sets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EavAttributeSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.eav)['attribute-sets']['$post']> },
      ) => parseResponse(client.V1.eav['attribute-sets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1EavAttributeSetsListKey(
  args: InferRequestType<(typeof client.V1.eav)['attribute-sets']['list']['$get']>,
) {
  return ['V1', '/V1/eav/attribute-sets/list', args] as const
}

export function useGetV1EavAttributeSetsList<TError = unknown>(
  args: InferRequestType<(typeof client.V1.eav)['attribute-sets']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.eav)['attribute-sets']['list']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1EavAttributeSetsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.eav)['attribute-sets']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.eav['attribute-sets'].list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EavAttributeSetsList<TError = unknown>(
  args: InferRequestType<(typeof client.V1.eav)['attribute-sets']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.eav)['attribute-sets']['list']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1EavAttributeSetsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.eav)['attribute-sets']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.eav['attribute-sets'].list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1EavAttributeSetsAttributeSetIdKey(
  args: InferRequestType<(typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$get']>,
) {
  return ['V1', '/V1/eav/attribute-sets/:attributeSetId', args] as const
}

export function useGetV1EavAttributeSetsAttributeSetId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1EavAttributeSetsAttributeSetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.eav['attribute-sets'][':attributeSetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EavAttributeSetsAttributeSetId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1EavAttributeSetsAttributeSetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.eav['attribute-sets'][':attributeSetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1EavAttributeSetsAttributeSetIdKey() {
  return ['V1', '/V1/eav/attribute-sets/:attributeSetId', 'PUT'] as const
}

export function usePutV1EavAttributeSetsAttributeSetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1EavAttributeSetsAttributeSetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$put']>
        },
      ) =>
        parseResponse(client.V1.eav['attribute-sets'][':attributeSetId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1EavAttributeSetsAttributeSetIdKey() {
  return ['V1', '/V1/eav/attribute-sets/:attributeSetId', 'DELETE'] as const
}

export function useDeleteV1EavAttributeSetsAttributeSetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1EavAttributeSetsAttributeSetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.V1.eav['attribute-sets'][':attributeSetId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1GiftWrappingsKey(
  args: InferRequestType<(typeof client.V1)['gift-wrappings']['$get']>,
) {
  return ['V1', '/V1/gift-wrappings', args] as const
}

export function useGetV1GiftWrappings<TError = unknown>(
  args: InferRequestType<(typeof client.V1)['gift-wrappings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1)['gift-wrappings']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1GiftWrappingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1)['gift-wrappings']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1['gift-wrappings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GiftWrappings<TError = unknown>(
  args: InferRequestType<(typeof client.V1)['gift-wrappings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1)['gift-wrappings']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1GiftWrappingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1)['gift-wrappings']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1['gift-wrappings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1GiftWrappingsKey() {
  return ['V1', '/V1/gift-wrappings', 'POST'] as const
}

export function usePostV1GiftWrappings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1)['gift-wrappings']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1)['gift-wrappings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GiftWrappingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1)['gift-wrappings']['$post']> },
      ) => parseResponse(client.V1['gift-wrappings'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1GiftWrappingsIdKey(
  args: InferRequestType<(typeof client.V1)['gift-wrappings'][':id']['$get']>,
) {
  return ['V1', '/V1/gift-wrappings/:id', args] as const
}

export function useGetV1GiftWrappingsId<TError = unknown>(
  args: InferRequestType<(typeof client.V1)['gift-wrappings'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1)['gift-wrappings'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1GiftWrappingsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1)['gift-wrappings'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1['gift-wrappings'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GiftWrappingsId<TError = unknown>(
  args: InferRequestType<(typeof client.V1)['gift-wrappings'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1)['gift-wrappings'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1GiftWrappingsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1)['gift-wrappings'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1['gift-wrappings'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1GiftWrappingsIdKey() {
  return ['V1', '/V1/gift-wrappings/:id', 'DELETE'] as const
}

export function useDeleteV1GiftWrappingsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['gift-wrappings'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1)['gift-wrappings'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1GiftWrappingsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1)['gift-wrappings'][':id']['$delete']> },
      ) => parseResponse(client.V1['gift-wrappings'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1GiftWrappingsWrappingIdKey() {
  return ['V1', '/V1/gift-wrappings/:wrappingId', 'PUT'] as const
}

export function usePutV1GiftWrappingsWrappingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['gift-wrappings'][':wrappingId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1)['gift-wrappings'][':wrappingId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1GiftWrappingsWrappingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.V1)['gift-wrappings'][':wrappingId']['$put']> },
      ) => parseResponse(client.V1['gift-wrappings'][':wrappingId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1GiftregistryMineEstimateShippingMethodsKey() {
  return ['V1', '/V1/giftregistry/mine/estimate-shipping-methods', 'POST'] as const
}

export function usePostV1GiftregistryMineEstimateShippingMethods<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.giftregistry.mine)['estimate-shipping-methods']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.giftregistry.mine)['estimate-shipping-methods']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GiftregistryMineEstimateShippingMethodsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.giftregistry.mine)['estimate-shipping-methods']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1.giftregistry.mine['estimate-shipping-methods'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1GuestCartsKey() {
  return ['V1', '/V1/guest-carts', 'POST'] as const
}

export function usePostV1GuestCarts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1)['guest-carts']['$post']>>>
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
  const swrKey = customKey ?? getPostV1GuestCartsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.V1['guest-carts'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1GuestCartsCartIdKey(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['$get']>,
) {
  return ['V1', '/V1/guest-carts/:cartId', args] as const
}

export function useGetV1GuestCartsCartId<TError = unknown>(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1GuestCartsCartIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1['guest-carts'][':cartId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GuestCartsCartId<TError = unknown>(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1GuestCartsCartIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1['guest-carts'][':cartId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1GuestCartsCartIdKey() {
  return ['V1', '/V1/guest-carts/:cartId', 'PUT'] as const
}

export function usePutV1GuestCartsCartId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1GuestCartsCartIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['$put']> },
      ) => parseResponse(client.V1['guest-carts'][':cartId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1GuestCartsCartIdBillingAddressKey(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['billing-address']['$get']>,
) {
  return ['V1', '/V1/guest-carts/:cartId/billing-address', args] as const
}

export function useGetV1GuestCartsCartIdBillingAddress<TError = unknown>(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['billing-address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1)['guest-carts'][':cartId']['billing-address']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1GuestCartsCartIdBillingAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1)['guest-carts'][':cartId']['billing-address']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['billing-address'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GuestCartsCartIdBillingAddress<TError = unknown>(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['billing-address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1)['guest-carts'][':cartId']['billing-address']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1GuestCartsCartIdBillingAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1)['guest-carts'][':cartId']['billing-address']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['billing-address'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1GuestCartsCartIdBillingAddressKey() {
  return ['V1', '/V1/guest-carts/:cartId/billing-address', 'POST'] as const
}

export function usePostV1GuestCartsCartIdBillingAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1)['guest-carts'][':cartId']['billing-address']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['billing-address']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GuestCartsCartIdBillingAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['guest-carts'][':cartId']['billing-address']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['billing-address'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1GuestCartsCartIdCheckoutFieldsKey() {
  return ['V1', '/V1/guest-carts/:cartId/checkout-fields', 'POST'] as const
}

export function usePostV1GuestCartsCartIdCheckoutFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1)['guest-carts'][':cartId']['checkout-fields']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['checkout-fields']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GuestCartsCartIdCheckoutFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['guest-carts'][':cartId']['checkout-fields']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['checkout-fields'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1GuestCartsCartIdCollectTotalsKey() {
  return ['V1', '/V1/guest-carts/:cartId/collect-totals', 'PUT'] as const
}

export function usePutV1GuestCartsCartIdCollectTotals<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1)['guest-carts'][':cartId']['collect-totals']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['collect-totals']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1GuestCartsCartIdCollectTotalsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['guest-carts'][':cartId']['collect-totals']['$put']
          >
        },
      ) =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['collect-totals'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1GuestCartsCartIdCollectionPointSearchRequestKey() {
  return ['V1', '/V1/guest-carts/:cartId/collection-point/search-request', 'PUT'] as const
}

export function usePutV1GuestCartsCartIdCollectionPointSearchRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1)['guest-carts'][':cartId']['collection-point']['search-request']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1)['guest-carts'][':cartId']['collection-point']['search-request']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1GuestCartsCartIdCollectionPointSearchRequestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['guest-carts'][':cartId']['collection-point']['search-request']['$put']
          >
        },
      ) =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['collection-point']['search-request'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1GuestCartsCartIdCollectionPointSearchRequestKey() {
  return ['V1', '/V1/guest-carts/:cartId/collection-point/search-request', 'DELETE'] as const
}

export function useDeleteV1GuestCartsCartIdCollectionPointSearchRequest<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1)['guest-carts'][':cartId']['collection-point']['search-request']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1)['guest-carts'][':cartId']['collection-point']['search-request']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1GuestCartsCartIdCollectionPointSearchRequestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['guest-carts'][':cartId']['collection-point']['search-request']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['collection-point']['search-request'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1GuestCartsCartIdCollectionPointSearchResultKey(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['collection-point']['search-result']['$get']
  >,
) {
  return ['V1', '/V1/guest-carts/:cartId/collection-point/search-result', args] as const
}

export function useGetV1GuestCartsCartIdCollectionPointSearchResult<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['collection-point']['search-result']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['guest-carts'][':cartId']['collection-point']['search-result']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1GuestCartsCartIdCollectionPointSearchResultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['guest-carts'][':cartId']['collection-point']['search-result']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['collection-point']['search-result'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GuestCartsCartIdCollectionPointSearchResult<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['collection-point']['search-result']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['guest-carts'][':cartId']['collection-point']['search-result']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1GuestCartsCartIdCollectionPointSearchResultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['guest-carts'][':cartId']['collection-point']['search-result']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['collection-point']['search-result'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1GuestCartsCartIdCollectionPointSelectKey() {
  return ['V1', '/V1/guest-carts/:cartId/collection-point/select', 'POST'] as const
}

export function usePostV1GuestCartsCartIdCollectionPointSelect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1)['guest-carts'][':cartId']['collection-point']['select']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1)['guest-carts'][':cartId']['collection-point']['select']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GuestCartsCartIdCollectionPointSelectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['guest-carts'][':cartId']['collection-point']['select']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['collection-point'].select.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1GuestCartsCartIdCouponsKey(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['coupons']['$get']>,
) {
  return ['V1', '/V1/guest-carts/:cartId/coupons', args] as const
}

export function useGetV1GuestCartsCartIdCoupons<TError = unknown>(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['coupons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['coupons']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1GuestCartsCartIdCouponsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['coupons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1['guest-carts'][':cartId'].coupons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GuestCartsCartIdCoupons<TError = unknown>(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['coupons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['coupons']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1GuestCartsCartIdCouponsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['coupons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1['guest-carts'][':cartId'].coupons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1GuestCartsCartIdCouponsKey() {
  return ['V1', '/V1/guest-carts/:cartId/coupons', 'DELETE'] as const
}

export function useDeleteV1GuestCartsCartIdCoupons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['coupons']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['coupons']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1GuestCartsCartIdCouponsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['coupons']['$delete']>
        },
      ) => parseResponse(client.V1['guest-carts'][':cartId'].coupons.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1GuestCartsCartIdCouponsCouponCodeKey() {
  return ['V1', '/V1/guest-carts/:cartId/coupons/:couponCode', 'PUT'] as const
}

export function usePutV1GuestCartsCartIdCouponsCouponCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1)['guest-carts'][':cartId']['coupons'][':couponCode']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['coupons'][':couponCode']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1GuestCartsCartIdCouponsCouponCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['guest-carts'][':cartId']['coupons'][':couponCode']['$put']
          >
        },
      ) =>
        parseResponse(
          client.V1['guest-carts'][':cartId'].coupons[':couponCode'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1GuestCartsCartIdDeliveryOptionKey() {
  return ['V1', '/V1/guest-carts/:cartId/delivery-option', 'POST'] as const
}

export function usePostV1GuestCartsCartIdDeliveryOption<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1)['guest-carts'][':cartId']['delivery-option']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['delivery-option']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GuestCartsCartIdDeliveryOptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['guest-carts'][':cartId']['delivery-option']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['delivery-option'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1GuestCartsCartIdEstimateShippingMethodsKey() {
  return ['V1', '/V1/guest-carts/:cartId/estimate-shipping-methods', 'POST'] as const
}

export function usePostV1GuestCartsCartIdEstimateShippingMethods<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1)['guest-carts'][':cartId']['estimate-shipping-methods']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1)['guest-carts'][':cartId']['estimate-shipping-methods']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GuestCartsCartIdEstimateShippingMethodsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['guest-carts'][':cartId']['estimate-shipping-methods']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['estimate-shipping-methods'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1GuestCartsCartIdGiftMessageKey(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['gift-message']['$get']>,
) {
  return ['V1', '/V1/guest-carts/:cartId/gift-message', args] as const
}

export function useGetV1GuestCartsCartIdGiftMessage<TError = unknown>(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['gift-message']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1)['guest-carts'][':cartId']['gift-message']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1GuestCartsCartIdGiftMessageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1)['guest-carts'][':cartId']['gift-message']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['gift-message'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GuestCartsCartIdGiftMessage<TError = unknown>(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['gift-message']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1)['guest-carts'][':cartId']['gift-message']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1GuestCartsCartIdGiftMessageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1)['guest-carts'][':cartId']['gift-message']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['gift-message'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1GuestCartsCartIdGiftMessageKey() {
  return ['V1', '/V1/guest-carts/:cartId/gift-message', 'POST'] as const
}

export function usePostV1GuestCartsCartIdGiftMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['gift-message']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['gift-message']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GuestCartsCartIdGiftMessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['guest-carts'][':cartId']['gift-message']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['gift-message'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1GuestCartsCartIdGiftMessageItemIdKey(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['gift-message'][':itemId']['$get']
  >,
) {
  return ['V1', '/V1/guest-carts/:cartId/gift-message/:itemId', args] as const
}

export function useGetV1GuestCartsCartIdGiftMessageItemId<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['gift-message'][':itemId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['guest-carts'][':cartId']['gift-message'][':itemId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1GuestCartsCartIdGiftMessageItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['guest-carts'][':cartId']['gift-message'][':itemId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['gift-message'][':itemId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GuestCartsCartIdGiftMessageItemId<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['gift-message'][':itemId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['guest-carts'][':cartId']['gift-message'][':itemId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1GuestCartsCartIdGiftMessageItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['guest-carts'][':cartId']['gift-message'][':itemId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['gift-message'][':itemId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1GuestCartsCartIdGiftMessageItemIdKey() {
  return ['V1', '/V1/guest-carts/:cartId/gift-message/:itemId', 'POST'] as const
}

export function usePostV1GuestCartsCartIdGiftMessageItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1)['guest-carts'][':cartId']['gift-message'][':itemId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1)['guest-carts'][':cartId']['gift-message'][':itemId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GuestCartsCartIdGiftMessageItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['guest-carts'][':cartId']['gift-message'][':itemId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['gift-message'][':itemId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1GuestCartsCartIdItemsKey(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['items']['$get']>,
) {
  return ['V1', '/V1/guest-carts/:cartId/items', args] as const
}

export function useGetV1GuestCartsCartIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1GuestCartsCartIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1['guest-carts'][':cartId'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GuestCartsCartIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1GuestCartsCartIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1['guest-carts'][':cartId'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1GuestCartsCartIdItemsKey() {
  return ['V1', '/V1/guest-carts/:cartId/items', 'POST'] as const
}

export function usePostV1GuestCartsCartIdItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['items']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GuestCartsCartIdItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['items']['$post']>
        },
      ) => parseResponse(client.V1['guest-carts'][':cartId'].items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1GuestCartsCartIdItemsItemIdKey() {
  return ['V1', '/V1/guest-carts/:cartId/items/:itemId', 'PUT'] as const
}

export function usePutV1GuestCartsCartIdItemsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1)['guest-carts'][':cartId']['items'][':itemId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['items'][':itemId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1GuestCartsCartIdItemsItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['guest-carts'][':cartId']['items'][':itemId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.V1['guest-carts'][':cartId'].items[':itemId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1GuestCartsCartIdItemsItemIdKey() {
  return ['V1', '/V1/guest-carts/:cartId/items/:itemId', 'DELETE'] as const
}

export function useDeleteV1GuestCartsCartIdItemsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1)['guest-carts'][':cartId']['items'][':itemId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['items'][':itemId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1GuestCartsCartIdItemsItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['guest-carts'][':cartId']['items'][':itemId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.V1['guest-carts'][':cartId'].items[':itemId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1GuestCartsCartIdOrderKey() {
  return ['V1', '/V1/guest-carts/:cartId/order', 'PUT'] as const
}

export function usePutV1GuestCartsCartIdOrder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['order']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['order']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1GuestCartsCartIdOrderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['order']['$put']> },
      ) => parseResponse(client.V1['guest-carts'][':cartId'].order.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1GuestCartsCartIdPaymentInformationKey(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['payment-information']['$get']
  >,
) {
  return ['V1', '/V1/guest-carts/:cartId/payment-information', args] as const
}

export function useGetV1GuestCartsCartIdPaymentInformation<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['payment-information']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['guest-carts'][':cartId']['payment-information']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1GuestCartsCartIdPaymentInformationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['guest-carts'][':cartId']['payment-information']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['payment-information'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GuestCartsCartIdPaymentInformation<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['payment-information']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['guest-carts'][':cartId']['payment-information']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1GuestCartsCartIdPaymentInformationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['guest-carts'][':cartId']['payment-information']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['payment-information'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1GuestCartsCartIdPaymentInformationKey() {
  return ['V1', '/V1/guest-carts/:cartId/payment-information', 'POST'] as const
}

export function usePostV1GuestCartsCartIdPaymentInformation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1)['guest-carts'][':cartId']['payment-information']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['payment-information']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GuestCartsCartIdPaymentInformationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['guest-carts'][':cartId']['payment-information']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['payment-information'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1GuestCartsCartIdPaymentMethodsKey(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['payment-methods']['$get']>,
) {
  return ['V1', '/V1/guest-carts/:cartId/payment-methods', args] as const
}

export function useGetV1GuestCartsCartIdPaymentMethods<TError = unknown>(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['payment-methods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1)['guest-carts'][':cartId']['payment-methods']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1GuestCartsCartIdPaymentMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1)['guest-carts'][':cartId']['payment-methods']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['payment-methods'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GuestCartsCartIdPaymentMethods<TError = unknown>(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['payment-methods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1)['guest-carts'][':cartId']['payment-methods']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1GuestCartsCartIdPaymentMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1)['guest-carts'][':cartId']['payment-methods']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['payment-methods'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1GuestCartsCartIdSelectedPaymentMethodKey(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['selected-payment-method']['$get']
  >,
) {
  return ['V1', '/V1/guest-carts/:cartId/selected-payment-method', args] as const
}

export function useGetV1GuestCartsCartIdSelectedPaymentMethod<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['selected-payment-method']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['guest-carts'][':cartId']['selected-payment-method']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1GuestCartsCartIdSelectedPaymentMethodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['guest-carts'][':cartId']['selected-payment-method']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['selected-payment-method'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GuestCartsCartIdSelectedPaymentMethod<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['selected-payment-method']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['guest-carts'][':cartId']['selected-payment-method']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1GuestCartsCartIdSelectedPaymentMethodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['guest-carts'][':cartId']['selected-payment-method']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['selected-payment-method'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1GuestCartsCartIdSelectedPaymentMethodKey() {
  return ['V1', '/V1/guest-carts/:cartId/selected-payment-method', 'PUT'] as const
}

export function usePutV1GuestCartsCartIdSelectedPaymentMethod<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1)['guest-carts'][':cartId']['selected-payment-method']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1)['guest-carts'][':cartId']['selected-payment-method']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1GuestCartsCartIdSelectedPaymentMethodKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['guest-carts'][':cartId']['selected-payment-method']['$put']
          >
        },
      ) =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['selected-payment-method'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1GuestCartsCartIdSetPaymentInformationKey() {
  return ['V1', '/V1/guest-carts/:cartId/set-payment-information', 'POST'] as const
}

export function usePostV1GuestCartsCartIdSetPaymentInformation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1)['guest-carts'][':cartId']['set-payment-information']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1)['guest-carts'][':cartId']['set-payment-information']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GuestCartsCartIdSetPaymentInformationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['guest-carts'][':cartId']['set-payment-information']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['set-payment-information'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1GuestCartsCartIdShippingInformationKey() {
  return ['V1', '/V1/guest-carts/:cartId/shipping-information', 'POST'] as const
}

export function usePostV1GuestCartsCartIdShippingInformation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1)['guest-carts'][':cartId']['shipping-information']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['shipping-information']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GuestCartsCartIdShippingInformationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['guest-carts'][':cartId']['shipping-information']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['shipping-information'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1GuestCartsCartIdShippingMethodsKey(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['shipping-methods']['$get']>,
) {
  return ['V1', '/V1/guest-carts/:cartId/shipping-methods', args] as const
}

export function useGetV1GuestCartsCartIdShippingMethods<TError = unknown>(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['shipping-methods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1)['guest-carts'][':cartId']['shipping-methods']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1GuestCartsCartIdShippingMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1)['guest-carts'][':cartId']['shipping-methods']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['shipping-methods'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GuestCartsCartIdShippingMethods<TError = unknown>(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['shipping-methods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1)['guest-carts'][':cartId']['shipping-methods']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1GuestCartsCartIdShippingMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1)['guest-carts'][':cartId']['shipping-methods']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['shipping-methods'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1GuestCartsCartIdTotalsKey(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['totals']['$get']>,
) {
  return ['V1', '/V1/guest-carts/:cartId/totals', args] as const
}

export function useGetV1GuestCartsCartIdTotals<TError = unknown>(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['totals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['totals']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1GuestCartsCartIdTotalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['totals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1['guest-carts'][':cartId'].totals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GuestCartsCartIdTotals<TError = unknown>(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['totals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['totals']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1GuestCartsCartIdTotalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['totals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1['guest-carts'][':cartId'].totals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1GuestCartsCartIdTotalsInformationKey() {
  return ['V1', '/V1/guest-carts/:cartId/totals-information', 'POST'] as const
}

export function usePostV1GuestCartsCartIdTotalsInformation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1)['guest-carts'][':cartId']['totals-information']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['totals-information']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GuestCartsCartIdTotalsInformationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['guest-carts'][':cartId']['totals-information']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1['guest-carts'][':cartId']['totals-information'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1GuestGiftregistryCartIdEstimateShippingMethodsKey() {
  return ['V1', '/V1/guest-giftregistry/:cartId/estimate-shipping-methods', 'POST'] as const
}

export function usePostV1GuestGiftregistryCartIdEstimateShippingMethods<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1)['guest-giftregistry'][':cartId']['estimate-shipping-methods']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1)['guest-giftregistry'][':cartId']['estimate-shipping-methods']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GuestGiftregistryCartIdEstimateShippingMethodsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['guest-giftregistry'][':cartId']['estimate-shipping-methods']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1['guest-giftregistry'][':cartId']['estimate-shipping-methods'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1HierarchyMoveIdKey() {
  return ['V1', '/V1/hierarchy/move/:id', 'PUT'] as const
}

export function usePutV1HierarchyMoveId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.hierarchy.move)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.hierarchy.move)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1HierarchyMoveIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.hierarchy.move)[':id']['$put']> },
      ) => parseResponse(client.V1.hierarchy.move[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1HierarchyIdKey(
  args: InferRequestType<(typeof client.V1.hierarchy)[':id']['$get']>,
) {
  return ['V1', '/V1/hierarchy/:id', args] as const
}

export function useGetV1HierarchyId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.hierarchy)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.hierarchy)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1HierarchyIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.hierarchy)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.hierarchy[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1HierarchyId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.hierarchy)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.hierarchy)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1HierarchyIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.hierarchy)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.hierarchy[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1IntegrationAdminTokenKey() {
  return ['V1', '/V1/integration/admin/token', 'POST'] as const
}

export function usePostV1IntegrationAdminToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.integration.admin.token.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.integration.admin.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IntegrationAdminTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.V1.integration.admin.token.$post> },
      ) => parseResponse(client.V1.integration.admin.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1IntegrationCustomerTokenKey() {
  return ['V1', '/V1/integration/customer/token', 'POST'] as const
}

export function usePostV1IntegrationCustomerToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.integration.customer.token.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.integration.customer.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IntegrationCustomerTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.V1.integration.customer.token.$post> },
      ) => parseResponse(client.V1.integration.customer.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1InvoiceInvoiceIdRefundKey() {
  return ['V1', '/V1/invoice/:invoiceId/refund', 'POST'] as const
}

export function usePostV1InvoiceInvoiceIdRefund<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.invoice)[':invoiceId']['refund']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.invoice)[':invoiceId']['refund']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InvoiceInvoiceIdRefundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.V1.invoice)[':invoiceId']['refund']['$post']> },
      ) => parseResponse(client.V1.invoice[':invoiceId'].refund.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1InvoicesKey(args: InferRequestType<typeof client.V1.invoices.$get>) {
  return ['V1', '/V1/invoices', args] as const
}

export function useGetV1Invoices<TError = unknown>(
  args: InferRequestType<typeof client.V1.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.invoices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1InvoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.invoices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Invoices<TError = unknown>(
  args: InferRequestType<typeof client.V1.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.invoices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1InvoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.invoices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1InvoicesIndexKey() {
  return ['V1', '/V1/invoices/', 'POST'] as const
}

export function usePostV1InvoicesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.invoices.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.invoices.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InvoicesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.V1.invoices.index.$post> }) =>
        parseResponse(client.V1.invoices.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1InvoicesCommentsKey() {
  return ['V1', '/V1/invoices/comments', 'POST'] as const
}

export function usePostV1InvoicesComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.invoices.comments.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.invoices.comments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InvoicesCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.V1.invoices.comments.$post> },
      ) => parseResponse(client.V1.invoices.comments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1InvoicesIdKey(
  args: InferRequestType<(typeof client.V1.invoices)[':id']['$get']>,
) {
  return ['V1', '/V1/invoices/:id', args] as const
}

export function useGetV1InvoicesId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.invoices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.invoices)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1InvoicesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.invoices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.invoices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InvoicesId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.invoices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.invoices)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1InvoicesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.invoices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.invoices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1InvoicesIdCaptureKey() {
  return ['V1', '/V1/invoices/:id/capture', 'POST'] as const
}

export function usePostV1InvoicesIdCapture<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.invoices)[':id']['capture']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.invoices)[':id']['capture']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InvoicesIdCaptureKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.invoices)[':id']['capture']['$post']> },
      ) => parseResponse(client.V1.invoices[':id'].capture.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1InvoicesIdCommentsKey(
  args: InferRequestType<(typeof client.V1.invoices)[':id']['comments']['$get']>,
) {
  return ['V1', '/V1/invoices/:id/comments', args] as const
}

export function useGetV1InvoicesIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.V1.invoices)[':id']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.invoices)[':id']['comments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1InvoicesIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.invoices)[':id']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.invoices[':id'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InvoicesIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.V1.invoices)[':id']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.invoices)[':id']['comments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1InvoicesIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.invoices)[':id']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.invoices[':id'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1InvoicesIdEmailsKey() {
  return ['V1', '/V1/invoices/:id/emails', 'POST'] as const
}

export function usePostV1InvoicesIdEmails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.invoices)[':id']['emails']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.invoices)[':id']['emails']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InvoicesIdEmailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.invoices)[':id']['emails']['$post']> },
      ) => parseResponse(client.V1.invoices[':id'].emails.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1InvoicesIdVoidKey() {
  return ['V1', '/V1/invoices/:id/void', 'POST'] as const
}

export function usePostV1InvoicesIdVoid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.invoices)[':id']['void']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.invoices)[':id']['void']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InvoicesIdVoidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.invoices)[':id']['void']['$post']> },
      ) => parseResponse(client.V1.invoices[':id'].void.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ModulesKey() {
  return ['V1', '/V1/modules'] as const
}

export function useGetV1Modules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.modules.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ModulesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.modules.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.modules.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Modules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.modules.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ModulesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.modules.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.modules.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1NegotiableCartsCartIdBillingAddressKey(
  args: InferRequestType<
    (typeof client.V1)['negotiable-carts'][':cartId']['billing-address']['$get']
  >,
) {
  return ['V1', '/V1/negotiable-carts/:cartId/billing-address', args] as const
}

export function useGetV1NegotiableCartsCartIdBillingAddress<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1)['negotiable-carts'][':cartId']['billing-address']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['negotiable-carts'][':cartId']['billing-address']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1NegotiableCartsCartIdBillingAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['negotiable-carts'][':cartId']['billing-address']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1['negotiable-carts'][':cartId']['billing-address'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1NegotiableCartsCartIdBillingAddress<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1)['negotiable-carts'][':cartId']['billing-address']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['negotiable-carts'][':cartId']['billing-address']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1NegotiableCartsCartIdBillingAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['negotiable-carts'][':cartId']['billing-address']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1['negotiable-carts'][':cartId']['billing-address'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1NegotiableCartsCartIdBillingAddressKey() {
  return ['V1', '/V1/negotiable-carts/:cartId/billing-address', 'POST'] as const
}

export function usePostV1NegotiableCartsCartIdBillingAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1)['negotiable-carts'][':cartId']['billing-address']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1)['negotiable-carts'][':cartId']['billing-address']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1NegotiableCartsCartIdBillingAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['negotiable-carts'][':cartId']['billing-address']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1['negotiable-carts'][':cartId']['billing-address'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1NegotiableCartsCartIdCouponsKey() {
  return ['V1', '/V1/negotiable-carts/:cartId/coupons', 'DELETE'] as const
}

export function useDeleteV1NegotiableCartsCartIdCoupons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1)['negotiable-carts'][':cartId']['coupons']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1)['negotiable-carts'][':cartId']['coupons']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1NegotiableCartsCartIdCouponsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['negotiable-carts'][':cartId']['coupons']['$delete']
          >
        },
      ) =>
        parseResponse(client.V1['negotiable-carts'][':cartId'].coupons.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1NegotiableCartsCartIdCouponsCouponCodeKey() {
  return ['V1', '/V1/negotiable-carts/:cartId/coupons/:couponCode', 'PUT'] as const
}

export function usePutV1NegotiableCartsCartIdCouponsCouponCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1)['negotiable-carts'][':cartId']['coupons'][':couponCode']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1)['negotiable-carts'][':cartId']['coupons'][':couponCode']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1NegotiableCartsCartIdCouponsCouponCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['negotiable-carts'][':cartId']['coupons'][':couponCode']['$put']
          >
        },
      ) =>
        parseResponse(
          client.V1['negotiable-carts'][':cartId'].coupons[':couponCode'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1NegotiableCartsCartIdEstimateShippingMethodsKey() {
  return ['V1', '/V1/negotiable-carts/:cartId/estimate-shipping-methods', 'POST'] as const
}

export function usePostV1NegotiableCartsCartIdEstimateShippingMethods<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1)['negotiable-carts'][':cartId']['estimate-shipping-methods']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1)['negotiable-carts'][':cartId']['estimate-shipping-methods']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1NegotiableCartsCartIdEstimateShippingMethodsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['negotiable-carts'][':cartId']['estimate-shipping-methods']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1['negotiable-carts'][':cartId']['estimate-shipping-methods'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1NegotiableCartsCartIdEstimateShippingMethodsByAddressIdKey() {
  return [
    'V1',
    '/V1/negotiable-carts/:cartId/estimate-shipping-methods-by-address-id',
    'POST',
  ] as const
}

export function usePostV1NegotiableCartsCartIdEstimateShippingMethodsByAddressId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1)['negotiable-carts'][':cartId']['estimate-shipping-methods-by-address-id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1)['negotiable-carts'][':cartId']['estimate-shipping-methods-by-address-id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1NegotiableCartsCartIdEstimateShippingMethodsByAddressIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['negotiable-carts'][':cartId']['estimate-shipping-methods-by-address-id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1['negotiable-carts'][':cartId']['estimate-shipping-methods-by-address-id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1NegotiableCartsCartIdGiftCardsKey() {
  return ['V1', '/V1/negotiable-carts/:cartId/giftCards', 'POST'] as const
}

export function usePostV1NegotiableCartsCartIdGiftCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1)['negotiable-carts'][':cartId']['giftCards']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1)['negotiable-carts'][':cartId']['giftCards']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1NegotiableCartsCartIdGiftCardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['negotiable-carts'][':cartId']['giftCards']['$post']
          >
        },
      ) =>
        parseResponse(client.V1['negotiable-carts'][':cartId'].giftCards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1NegotiableCartsCartIdGiftCardsGiftCardCodeKey() {
  return ['V1', '/V1/negotiable-carts/:cartId/giftCards/:giftCardCode', 'DELETE'] as const
}

export function useDeleteV1NegotiableCartsCartIdGiftCardsGiftCardCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1)['negotiable-carts'][':cartId']['giftCards'][':giftCardCode']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1)['negotiable-carts'][':cartId']['giftCards'][':giftCardCode']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1NegotiableCartsCartIdGiftCardsGiftCardCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['negotiable-carts'][':cartId']['giftCards'][':giftCardCode']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.V1['negotiable-carts'][':cartId'].giftCards[':giftCardCode'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1NegotiableCartsCartIdPaymentInformationKey(
  args: InferRequestType<
    (typeof client.V1)['negotiable-carts'][':cartId']['payment-information']['$get']
  >,
) {
  return ['V1', '/V1/negotiable-carts/:cartId/payment-information', args] as const
}

export function useGetV1NegotiableCartsCartIdPaymentInformation<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1)['negotiable-carts'][':cartId']['payment-information']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['negotiable-carts'][':cartId']['payment-information']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1NegotiableCartsCartIdPaymentInformationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['negotiable-carts'][':cartId']['payment-information']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1['negotiable-carts'][':cartId']['payment-information'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1NegotiableCartsCartIdPaymentInformation<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1)['negotiable-carts'][':cartId']['payment-information']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['negotiable-carts'][':cartId']['payment-information']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1NegotiableCartsCartIdPaymentInformationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1)['negotiable-carts'][':cartId']['payment-information']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1['negotiable-carts'][':cartId']['payment-information'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1NegotiableCartsCartIdPaymentInformationKey() {
  return ['V1', '/V1/negotiable-carts/:cartId/payment-information', 'POST'] as const
}

export function usePostV1NegotiableCartsCartIdPaymentInformation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1)['negotiable-carts'][':cartId']['payment-information']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1)['negotiable-carts'][':cartId']['payment-information']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1NegotiableCartsCartIdPaymentInformationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['negotiable-carts'][':cartId']['payment-information']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1['negotiable-carts'][':cartId']['payment-information'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1NegotiableCartsCartIdSetPaymentInformationKey() {
  return ['V1', '/V1/negotiable-carts/:cartId/set-payment-information', 'POST'] as const
}

export function usePostV1NegotiableCartsCartIdSetPaymentInformation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1)['negotiable-carts'][':cartId']['set-payment-information']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1)['negotiable-carts'][':cartId']['set-payment-information']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1NegotiableCartsCartIdSetPaymentInformationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['negotiable-carts'][':cartId']['set-payment-information']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1['negotiable-carts'][':cartId']['set-payment-information'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1NegotiableCartsCartIdShippingInformationKey() {
  return ['V1', '/V1/negotiable-carts/:cartId/shipping-information', 'POST'] as const
}

export function usePostV1NegotiableCartsCartIdShippingInformation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1)['negotiable-carts'][':cartId']['shipping-information']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1)['negotiable-carts'][':cartId']['shipping-information']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1NegotiableCartsCartIdShippingInformationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['negotiable-carts'][':cartId']['shipping-information']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1['negotiable-carts'][':cartId']['shipping-information'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1NegotiableCartsCartIdTotalsKey(
  args: InferRequestType<(typeof client.V1)['negotiable-carts'][':cartId']['totals']['$get']>,
) {
  return ['V1', '/V1/negotiable-carts/:cartId/totals', args] as const
}

export function useGetV1NegotiableCartsCartIdTotals<TError = unknown>(
  args: InferRequestType<(typeof client.V1)['negotiable-carts'][':cartId']['totals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1)['negotiable-carts'][':cartId']['totals']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1NegotiableCartsCartIdTotalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1)['negotiable-carts'][':cartId']['totals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1['negotiable-carts'][':cartId'].totals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1NegotiableCartsCartIdTotals<TError = unknown>(
  args: InferRequestType<(typeof client.V1)['negotiable-carts'][':cartId']['totals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1)['negotiable-carts'][':cartId']['totals']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1NegotiableCartsCartIdTotalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1)['negotiable-carts'][':cartId']['totals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1['negotiable-carts'][':cartId'].totals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1NegotiableQuoteAttachmentContentKey(
  args: InferRequestType<typeof client.V1.negotiableQuote.attachmentContent.$get>,
) {
  return ['V1', '/V1/negotiableQuote/attachmentContent', args] as const
}

export function useGetV1NegotiableQuoteAttachmentContent<TError = unknown>(
  args: InferRequestType<typeof client.V1.negotiableQuote.attachmentContent.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.V1.negotiableQuote.attachmentContent.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1NegotiableQuoteAttachmentContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.V1.negotiableQuote.attachmentContent.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.negotiableQuote.attachmentContent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1NegotiableQuoteAttachmentContent<TError = unknown>(
  args: InferRequestType<typeof client.V1.negotiableQuote.attachmentContent.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.V1.negotiableQuote.attachmentContent.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1NegotiableQuoteAttachmentContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.V1.negotiableQuote.attachmentContent.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.negotiableQuote.attachmentContent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1NegotiableQuoteDeclineKey() {
  return ['V1', '/V1/negotiableQuote/decline', 'POST'] as const
}

export function usePostV1NegotiableQuoteDecline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.negotiableQuote.decline.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.negotiableQuote.decline.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1NegotiableQuoteDeclineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.V1.negotiableQuote.decline.$post> },
      ) => parseResponse(client.V1.negotiableQuote.decline.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1NegotiableQuotePricesUpdatedKey() {
  return ['V1', '/V1/negotiableQuote/pricesUpdated', 'POST'] as const
}

export function usePostV1NegotiableQuotePricesUpdated<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.V1.negotiableQuote.pricesUpdated.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.negotiableQuote.pricesUpdated.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1NegotiableQuotePricesUpdatedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.V1.negotiableQuote.pricesUpdated.$post> },
      ) => parseResponse(client.V1.negotiableQuote.pricesUpdated.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1NegotiableQuoteRequestKey() {
  return ['V1', '/V1/negotiableQuote/request', 'POST'] as const
}

export function usePostV1NegotiableQuoteRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.negotiableQuote.request.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.negotiableQuote.request.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1NegotiableQuoteRequestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.V1.negotiableQuote.request.$post> },
      ) => parseResponse(client.V1.negotiableQuote.request.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1NegotiableQuoteSubmitToCustomerKey() {
  return ['V1', '/V1/negotiableQuote/submitToCustomer', 'POST'] as const
}

export function usePostV1NegotiableQuoteSubmitToCustomer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.V1.negotiableQuote.submitToCustomer.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.negotiableQuote.submitToCustomer.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1NegotiableQuoteSubmitToCustomerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.V1.negotiableQuote.submitToCustomer.$post> },
      ) => parseResponse(client.V1.negotiableQuote.submitToCustomer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1NegotiableQuoteQuoteIdKey() {
  return ['V1', '/V1/negotiableQuote/:quoteId', 'PUT'] as const
}

export function usePutV1NegotiableQuoteQuoteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.negotiableQuote)[':quoteId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.negotiableQuote)[':quoteId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1NegotiableQuoteQuoteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.negotiableQuote)[':quoteId']['$put']> },
      ) => parseResponse(client.V1.negotiableQuote[':quoteId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1NegotiableQuoteQuoteIdCommentsKey(
  args: InferRequestType<(typeof client.V1.negotiableQuote)[':quoteId']['comments']['$get']>,
) {
  return ['V1', '/V1/negotiableQuote/:quoteId/comments', args] as const
}

export function useGetV1NegotiableQuoteQuoteIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.V1.negotiableQuote)[':quoteId']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.negotiableQuote)[':quoteId']['comments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1NegotiableQuoteQuoteIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.negotiableQuote)[':quoteId']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.negotiableQuote[':quoteId'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1NegotiableQuoteQuoteIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.V1.negotiableQuote)[':quoteId']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.negotiableQuote)[':quoteId']['comments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1NegotiableQuoteQuoteIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.negotiableQuote)[':quoteId']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.negotiableQuote[':quoteId'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1NegotiableQuoteQuoteIdShippingMethodKey() {
  return ['V1', '/V1/negotiableQuote/:quoteId/shippingMethod', 'PUT'] as const
}

export function usePutV1NegotiableQuoteQuoteIdShippingMethod<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.negotiableQuote)[':quoteId']['shippingMethod']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.negotiableQuote)[':quoteId']['shippingMethod']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1NegotiableQuoteQuoteIdShippingMethodKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.negotiableQuote)[':quoteId']['shippingMethod']['$put']
          >
        },
      ) =>
        parseResponse(
          client.V1.negotiableQuote[':quoteId'].shippingMethod.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrderOrderIdInvoiceKey() {
  return ['V1', '/V1/order/:orderId/invoice', 'POST'] as const
}

export function usePostV1OrderOrderIdInvoice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.order)[':orderId']['invoice']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.order)[':orderId']['invoice']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrderOrderIdInvoiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.V1.order)[':orderId']['invoice']['$post']> },
      ) => parseResponse(client.V1.order[':orderId'].invoice.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrderOrderIdRefundKey() {
  return ['V1', '/V1/order/:orderId/refund', 'POST'] as const
}

export function usePostV1OrderOrderIdRefund<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.order)[':orderId']['refund']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.order)[':orderId']['refund']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrderOrderIdRefundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.order)[':orderId']['refund']['$post']> },
      ) => parseResponse(client.V1.order[':orderId'].refund.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrderOrderIdShipKey() {
  return ['V1', '/V1/order/:orderId/ship', 'POST'] as const
}

export function usePostV1OrderOrderIdShip<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.order)[':orderId']['ship']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.order)[':orderId']['ship']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrderOrderIdShipKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.order)[':orderId']['ship']['$post']> },
      ) => parseResponse(client.V1.order[':orderId'].ship.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrdersKey(args: InferRequestType<typeof client.V1.orders.$get>) {
  return ['V1', '/V1/orders', args] as const
}

export function useGetV1Orders<TError = unknown>(
  args: InferRequestType<typeof client.V1.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.orders.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.orders.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Orders<TError = unknown>(
  args: InferRequestType<typeof client.V1.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.orders.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.orders.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrdersIndexKey() {
  return ['V1', '/V1/orders/', 'POST'] as const
}

export function usePostV1OrdersIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.orders.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.orders.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrdersIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.V1.orders.index.$post> }) =>
        parseResponse(client.V1.orders.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1OrdersCreateKey() {
  return ['V1', '/V1/orders/create', 'PUT'] as const
}

export function usePutV1OrdersCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.orders.create.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.orders.create.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1OrdersCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.V1.orders.create.$put> }) =>
        parseResponse(client.V1.orders.create.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrdersItemsKey(args: InferRequestType<typeof client.V1.orders.items.$get>) {
  return ['V1', '/V1/orders/items', args] as const
}

export function useGetV1OrdersItems<TError = unknown>(
  args: InferRequestType<typeof client.V1.orders.items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.orders.items.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OrdersItemsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.orders.items.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.orders.items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrdersItems<TError = unknown>(
  args: InferRequestType<typeof client.V1.orders.items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.orders.items.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OrdersItemsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.orders.items.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.orders.items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrdersItemsIdKey(
  args: InferRequestType<(typeof client.V1.orders.items)[':id']['$get']>,
) {
  return ['V1', '/V1/orders/items/:id', args] as const
}

export function useGetV1OrdersItemsId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.orders.items)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.orders.items)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OrdersItemsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.orders.items)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.orders.items[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrdersItemsId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.orders.items)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.orders.items)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OrdersItemsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.orders.items)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.orders.items[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrdersIdKey(
  args: InferRequestType<(typeof client.V1.orders)[':id']['$get']>,
) {
  return ['V1', '/V1/orders/:id', args] as const
}

export function useGetV1OrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.orders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.orders)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OrdersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.orders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.orders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.orders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.orders)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OrdersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.orders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.orders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrdersIdCancelKey() {
  return ['V1', '/V1/orders/:id/cancel', 'POST'] as const
}

export function usePostV1OrdersIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.orders)[':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.orders)[':id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrdersIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.orders)[':id']['cancel']['$post']> },
      ) => parseResponse(client.V1.orders[':id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrdersIdCommentsKey(
  args: InferRequestType<(typeof client.V1.orders)[':id']['comments']['$get']>,
) {
  return ['V1', '/V1/orders/:id/comments', args] as const
}

export function useGetV1OrdersIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.V1.orders)[':id']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.orders)[':id']['comments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OrdersIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.orders)[':id']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.orders[':id'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrdersIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.V1.orders)[':id']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.orders)[':id']['comments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OrdersIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.orders)[':id']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.orders[':id'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrdersIdCommentsKey() {
  return ['V1', '/V1/orders/:id/comments', 'POST'] as const
}

export function usePostV1OrdersIdComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.orders)[':id']['comments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.orders)[':id']['comments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrdersIdCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.orders)[':id']['comments']['$post']> },
      ) => parseResponse(client.V1.orders[':id'].comments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrdersIdEmailsKey() {
  return ['V1', '/V1/orders/:id/emails', 'POST'] as const
}

export function usePostV1OrdersIdEmails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.orders)[':id']['emails']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.orders)[':id']['emails']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrdersIdEmailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.orders)[':id']['emails']['$post']> },
      ) => parseResponse(client.V1.orders[':id'].emails.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrdersIdHoldKey() {
  return ['V1', '/V1/orders/:id/hold', 'POST'] as const
}

export function usePostV1OrdersIdHold<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.orders)[':id']['hold']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.orders)[':id']['hold']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrdersIdHoldKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.orders)[':id']['hold']['$post']> },
      ) => parseResponse(client.V1.orders[':id'].hold.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrdersIdStatusesKey(
  args: InferRequestType<(typeof client.V1.orders)[':id']['statuses']['$get']>,
) {
  return ['V1', '/V1/orders/:id/statuses', args] as const
}

export function useGetV1OrdersIdStatuses<TError = unknown>(
  args: InferRequestType<(typeof client.V1.orders)[':id']['statuses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.orders)[':id']['statuses']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OrdersIdStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.orders)[':id']['statuses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.orders[':id'].statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrdersIdStatuses<TError = unknown>(
  args: InferRequestType<(typeof client.V1.orders)[':id']['statuses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.orders)[':id']['statuses']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OrdersIdStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.orders)[':id']['statuses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.orders[':id'].statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrdersIdUnholdKey() {
  return ['V1', '/V1/orders/:id/unhold', 'POST'] as const
}

export function usePostV1OrdersIdUnhold<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.orders)[':id']['unhold']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.orders)[':id']['unhold']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrdersIdUnholdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.orders)[':id']['unhold']['$post']> },
      ) => parseResponse(client.V1.orders[':id'].unhold.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1OrdersParentIdKey() {
  return ['V1', '/V1/orders/:parent_id', 'PUT'] as const
}

export function usePutV1OrdersParentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.orders)[':parent_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.orders)[':parent_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1OrdersParentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.orders)[':parent_id']['$put']> },
      ) => parseResponse(client.V1.orders[':parent_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProductsKey(args: InferRequestType<typeof client.V1.products.$get>) {
  return ['V1', '/V1/products', args] as const
}

export function useGetV1Products<TError = unknown>(
  args: InferRequestType<typeof client.V1.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ProductsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Products<TError = unknown>(
  args: InferRequestType<typeof client.V1.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ProductsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProductsKey() {
  return ['V1', '/V1/products', 'POST'] as const
}

export function usePostV1Products<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.V1.products.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.V1.products.$post> }) =>
        parseResponse(client.V1.products.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProductsRenderInfoKey(
  args: InferRequestType<(typeof client.V1)['products-render-info']['$get']>,
) {
  return ['V1', '/V1/products-render-info', args] as const
}

export function useGetV1ProductsRenderInfo<TError = unknown>(
  args: InferRequestType<(typeof client.V1)['products-render-info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1)['products-render-info']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsRenderInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1)['products-render-info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1['products-render-info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsRenderInfo<TError = unknown>(
  args: InferRequestType<(typeof client.V1)['products-render-info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1)['products-render-info']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsRenderInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1)['products-render-info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1['products-render-info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProductsAttributeSetsKey() {
  return ['V1', '/V1/products/attribute-sets', 'POST'] as const
}

export function usePostV1ProductsAttributeSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['attribute-sets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)['attribute-sets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsAttributeSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.products)['attribute-sets']['$post']> },
      ) => parseResponse(client.V1.products['attribute-sets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProductsAttributeSetsAttributesKey() {
  return ['V1', '/V1/products/attribute-sets/attributes', 'POST'] as const
}

export function usePostV1ProductsAttributeSetsAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['attribute-sets']['attributes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)['attribute-sets']['attributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsAttributeSetsAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.products)['attribute-sets']['attributes']['$post']
          >
        },
      ) => parseResponse(client.V1.products['attribute-sets'].attributes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProductsAttributeSetsGroupsKey() {
  return ['V1', '/V1/products/attribute-sets/groups', 'POST'] as const
}

export function usePostV1ProductsAttributeSetsGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['attribute-sets']['groups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)['attribute-sets']['groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsAttributeSetsGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1.products)['attribute-sets']['groups']['$post']>
        },
      ) => parseResponse(client.V1.products['attribute-sets'].groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProductsAttributeSetsGroupsListKey(
  args: InferRequestType<(typeof client.V1.products)['attribute-sets']['groups']['list']['$get']>,
) {
  return ['V1', '/V1/products/attribute-sets/groups/list', args] as const
}

export function useGetV1ProductsAttributeSetsGroupsList<TError = unknown>(
  args: InferRequestType<(typeof client.V1.products)['attribute-sets']['groups']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.products)['attribute-sets']['groups']['list']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsAttributeSetsGroupsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.products)['attribute-sets']['groups']['list']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.products['attribute-sets'].groups.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsAttributeSetsGroupsList<TError = unknown>(
  args: InferRequestType<(typeof client.V1.products)['attribute-sets']['groups']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.products)['attribute-sets']['groups']['list']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsAttributeSetsGroupsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.products)['attribute-sets']['groups']['list']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.products['attribute-sets'].groups.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProductsAttributeSetsGroupsGroupIdKey() {
  return ['V1', '/V1/products/attribute-sets/groups/:groupId', 'DELETE'] as const
}

export function useDeleteV1ProductsAttributeSetsGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1.products)['attribute-sets']['groups'][':groupId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)['attribute-sets']['groups'][':groupId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProductsAttributeSetsGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.products)['attribute-sets']['groups'][':groupId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.V1.products['attribute-sets'].groups[':groupId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProductsAttributeSetsSetsListKey(
  args: InferRequestType<(typeof client.V1.products)['attribute-sets']['sets']['list']['$get']>,
) {
  return ['V1', '/V1/products/attribute-sets/sets/list', args] as const
}

export function useGetV1ProductsAttributeSetsSetsList<TError = unknown>(
  args: InferRequestType<(typeof client.V1.products)['attribute-sets']['sets']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.products)['attribute-sets']['sets']['list']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsAttributeSetsSetsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.products)['attribute-sets']['sets']['list']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.products['attribute-sets'].sets.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsAttributeSetsSetsList<TError = unknown>(
  args: InferRequestType<(typeof client.V1.products)['attribute-sets']['sets']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.products)['attribute-sets']['sets']['list']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsAttributeSetsSetsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.products)['attribute-sets']['sets']['list']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.products['attribute-sets'].sets.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProductsAttributeSetsAttributeSetIdKey(
  args: InferRequestType<(typeof client.V1.products)['attribute-sets'][':attributeSetId']['$get']>,
) {
  return ['V1', '/V1/products/attribute-sets/:attributeSetId', args] as const
}

export function useGetV1ProductsAttributeSetsAttributeSetId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.products)['attribute-sets'][':attributeSetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.products)['attribute-sets'][':attributeSetId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsAttributeSetsAttributeSetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.products)['attribute-sets'][':attributeSetId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.products['attribute-sets'][':attributeSetId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsAttributeSetsAttributeSetId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.products)['attribute-sets'][':attributeSetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.products)['attribute-sets'][':attributeSetId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsAttributeSetsAttributeSetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.products)['attribute-sets'][':attributeSetId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.products['attribute-sets'][':attributeSetId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProductsAttributeSetsAttributeSetIdKey() {
  return ['V1', '/V1/products/attribute-sets/:attributeSetId', 'PUT'] as const
}

export function usePutV1ProductsAttributeSetsAttributeSetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.products)['attribute-sets'][':attributeSetId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)['attribute-sets'][':attributeSetId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProductsAttributeSetsAttributeSetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.products)['attribute-sets'][':attributeSetId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.V1.products['attribute-sets'][':attributeSetId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProductsAttributeSetsAttributeSetIdKey() {
  return ['V1', '/V1/products/attribute-sets/:attributeSetId', 'DELETE'] as const
}

export function useDeleteV1ProductsAttributeSetsAttributeSetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.products)['attribute-sets'][':attributeSetId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)['attribute-sets'][':attributeSetId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProductsAttributeSetsAttributeSetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.products)['attribute-sets'][':attributeSetId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.V1.products['attribute-sets'][':attributeSetId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProductsAttributeSetsAttributeSetIdAttributesKey(
  args: InferRequestType<
    (typeof client.V1.products)['attribute-sets'][':attributeSetId']['attributes']['$get']
  >,
) {
  return ['V1', '/V1/products/attribute-sets/:attributeSetId/attributes', args] as const
}

export function useGetV1ProductsAttributeSetsAttributeSetIdAttributes<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1.products)['attribute-sets'][':attributeSetId']['attributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.products)['attribute-sets'][':attributeSetId']['attributes']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsAttributeSetsAttributeSetIdAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.products)['attribute-sets'][':attributeSetId']['attributes']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.products['attribute-sets'][':attributeSetId'].attributes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsAttributeSetsAttributeSetIdAttributes<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1.products)['attribute-sets'][':attributeSetId']['attributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.products)['attribute-sets'][':attributeSetId']['attributes']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsAttributeSetsAttributeSetIdAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.products)['attribute-sets'][':attributeSetId']['attributes']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.products['attribute-sets'][':attributeSetId'].attributes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProductsAttributeSetsAttributeSetIdAttributesAttributeCodeKey() {
  return [
    'V1',
    '/V1/products/attribute-sets/:attributeSetId/attributes/:attributeCode',
    'DELETE',
  ] as const
}

export function useDeleteV1ProductsAttributeSetsAttributeSetIdAttributesAttributeCode<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1.products)['attribute-sets'][':attributeSetId']['attributes'][':attributeCode']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1.products)['attribute-sets'][':attributeSetId']['attributes'][':attributeCode']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1ProductsAttributeSetsAttributeSetIdAttributesAttributeCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.products)['attribute-sets'][':attributeSetId']['attributes'][':attributeCode']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.V1.products['attribute-sets'][':attributeSetId'].attributes[
            ':attributeCode'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1ProductsAttributeSetsAttributeSetIdGroupsKey() {
  return ['V1', '/V1/products/attribute-sets/:attributeSetId/groups', 'PUT'] as const
}

export function usePutV1ProductsAttributeSetsAttributeSetIdGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1.products)['attribute-sets'][':attributeSetId']['groups']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1.products)['attribute-sets'][':attributeSetId']['groups']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProductsAttributeSetsAttributeSetIdGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.products)['attribute-sets'][':attributeSetId']['groups']['$put']
          >
        },
      ) =>
        parseResponse(
          client.V1.products['attribute-sets'][':attributeSetId'].groups.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProductsAttributesKey(
  args: InferRequestType<typeof client.V1.products.attributes.$get>,
) {
  return ['V1', '/V1/products/attributes', args] as const
}

export function useGetV1ProductsAttributes<TError = unknown>(
  args: InferRequestType<typeof client.V1.products.attributes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.attributes.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.attributes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.products.attributes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsAttributes<TError = unknown>(
  args: InferRequestType<typeof client.V1.products.attributes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.attributes.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.attributes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.products.attributes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProductsAttributesKey() {
  return ['V1', '/V1/products/attributes', 'POST'] as const
}

export function usePostV1ProductsAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.attributes.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.products.attributes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.V1.products.attributes.$post> },
      ) => parseResponse(client.V1.products.attributes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProductsAttributesTypesKey() {
  return ['V1', '/V1/products/attributes/types'] as const
}

export function useGetV1ProductsAttributesTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.attributes.types.$get>>>
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
        ? getGetV1ProductsAttributesTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.attributes.types.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.products.attributes.types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsAttributesTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.attributes.types.$get>>>
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
        ? getGetV1ProductsAttributesTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.attributes.types.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.products.attributes.types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProductsAttributesAttributeCodeKey(
  args: InferRequestType<(typeof client.V1.products.attributes)[':attributeCode']['$get']>,
) {
  return ['V1', '/V1/products/attributes/:attributeCode', args] as const
}

export function useGetV1ProductsAttributesAttributeCode<TError = unknown>(
  args: InferRequestType<(typeof client.V1.products.attributes)[':attributeCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products.attributes)[':attributeCode']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsAttributesAttributeCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products.attributes)[':attributeCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.products.attributes[':attributeCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsAttributesAttributeCode<TError = unknown>(
  args: InferRequestType<(typeof client.V1.products.attributes)[':attributeCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products.attributes)[':attributeCode']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsAttributesAttributeCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products.attributes)[':attributeCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.products.attributes[':attributeCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProductsAttributesAttributeCodeKey() {
  return ['V1', '/V1/products/attributes/:attributeCode', 'PUT'] as const
}

export function usePutV1ProductsAttributesAttributeCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products.attributes)[':attributeCode']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products.attributes)[':attributeCode']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProductsAttributesAttributeCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1.products.attributes)[':attributeCode']['$put']>
        },
      ) => parseResponse(client.V1.products.attributes[':attributeCode'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProductsAttributesAttributeCodeKey() {
  return ['V1', '/V1/products/attributes/:attributeCode', 'DELETE'] as const
}

export function useDeleteV1ProductsAttributesAttributeCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products.attributes)[':attributeCode']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products.attributes)[':attributeCode']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProductsAttributesAttributeCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1.products.attributes)[':attributeCode']['$delete']>
        },
      ) =>
        parseResponse(client.V1.products.attributes[':attributeCode'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProductsAttributesAttributeCodeOptionsKey(
  args: InferRequestType<
    (typeof client.V1.products.attributes)[':attributeCode']['options']['$get']
  >,
) {
  return ['V1', '/V1/products/attributes/:attributeCode/options', args] as const
}

export function useGetV1ProductsAttributesAttributeCodeOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1.products.attributes)[':attributeCode']['options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.products.attributes)[':attributeCode']['options']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsAttributesAttributeCodeOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.products.attributes)[':attributeCode']['options']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.products.attributes[':attributeCode'].options.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsAttributesAttributeCodeOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1.products.attributes)[':attributeCode']['options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.products.attributes)[':attributeCode']['options']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsAttributesAttributeCodeOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.products.attributes)[':attributeCode']['options']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.products.attributes[':attributeCode'].options.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProductsAttributesAttributeCodeOptionsKey() {
  return ['V1', '/V1/products/attributes/:attributeCode/options', 'POST'] as const
}

export function usePostV1ProductsAttributesAttributeCodeOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.products.attributes)[':attributeCode']['options']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products.attributes)[':attributeCode']['options']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsAttributesAttributeCodeOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.products.attributes)[':attributeCode']['options']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1.products.attributes[':attributeCode'].options.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProductsAttributesAttributeCodeOptionsOptionIdKey() {
  return ['V1', '/V1/products/attributes/:attributeCode/options/:optionId', 'DELETE'] as const
}

export function useDeleteV1ProductsAttributesAttributeCodeOptionsOptionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1.products.attributes)[':attributeCode']['options'][':optionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1.products.attributes)[':attributeCode']['options'][':optionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProductsAttributesAttributeCodeOptionsOptionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.products.attributes)[':attributeCode']['options'][':optionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.V1.products.attributes[':attributeCode'].options[':optionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProductsBasePricesKey() {
  return ['V1', '/V1/products/base-prices', 'POST'] as const
}

export function usePostV1ProductsBasePrices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['base-prices']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)['base-prices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsBasePricesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.products)['base-prices']['$post']> },
      ) => parseResponse(client.V1.products['base-prices'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProductsBasePricesInformationKey() {
  return ['V1', '/V1/products/base-prices-information', 'POST'] as const
}

export function usePostV1ProductsBasePricesInformation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['base-prices-information']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)['base-prices-information']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsBasePricesInformationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1.products)['base-prices-information']['$post']>
        },
      ) => parseResponse(client.V1.products['base-prices-information'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProductsCostKey() {
  return ['V1', '/V1/products/cost', 'POST'] as const
}

export function usePostV1ProductsCost<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.cost.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.products.cost.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsCostKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.V1.products.cost.$post> }) =>
        parseResponse(client.V1.products.cost.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProductsCostDeleteKey() {
  return ['V1', '/V1/products/cost-delete', 'POST'] as const
}

export function usePostV1ProductsCostDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['cost-delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)['cost-delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsCostDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.products)['cost-delete']['$post']> },
      ) => parseResponse(client.V1.products['cost-delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProductsCostInformationKey() {
  return ['V1', '/V1/products/cost-information', 'POST'] as const
}

export function usePostV1ProductsCostInformation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['cost-information']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)['cost-information']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsCostInformationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.V1.products)['cost-information']['$post']> },
      ) => parseResponse(client.V1.products['cost-information'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProductsDownloadableLinksSamplesIdKey() {
  return ['V1', '/V1/products/downloadable-links/samples/:id', 'DELETE'] as const
}

export function useDeleteV1ProductsDownloadableLinksSamplesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1.products)['downloadable-links']['samples'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)['downloadable-links']['samples'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProductsDownloadableLinksSamplesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.products)['downloadable-links']['samples'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.V1.products['downloadable-links'].samples[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProductsDownloadableLinksIdKey() {
  return ['V1', '/V1/products/downloadable-links/:id', 'DELETE'] as const
}

export function useDeleteV1ProductsDownloadableLinksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['downloadable-links'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)['downloadable-links'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProductsDownloadableLinksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1.products)['downloadable-links'][':id']['$delete']>
        },
      ) =>
        parseResponse(client.V1.products['downloadable-links'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProductsLinksTypesKey() {
  return ['V1', '/V1/products/links/types'] as const
}

export function useGetV1ProductsLinksTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.links.types.$get>>>
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
        ? getGetV1ProductsLinksTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.links.types.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.products.links.types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsLinksTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.links.types.$get>>>
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
        ? getGetV1ProductsLinksTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.links.types.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.products.links.types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProductsLinksTypeAttributesKey(
  args: InferRequestType<(typeof client.V1.products.links)[':type']['attributes']['$get']>,
) {
  return ['V1', '/V1/products/links/:type/attributes', args] as const
}

export function useGetV1ProductsLinksTypeAttributes<TError = unknown>(
  args: InferRequestType<(typeof client.V1.products.links)[':type']['attributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products.links)[':type']['attributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsLinksTypeAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products.links)[':type']['attributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.products.links[':type'].attributes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsLinksTypeAttributes<TError = unknown>(
  args: InferRequestType<(typeof client.V1.products.links)[':type']['attributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products.links)[':type']['attributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsLinksTypeAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products.links)[':type']['attributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.products.links[':type'].attributes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProductsMediaTypesAttributeSetNameKey(
  args: InferRequestType<(typeof client.V1.products.media.types)[':attributeSetName']['$get']>,
) {
  return ['V1', '/V1/products/media/types/:attributeSetName', args] as const
}

export function useGetV1ProductsMediaTypesAttributeSetName<TError = unknown>(
  args: InferRequestType<(typeof client.V1.products.media.types)[':attributeSetName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.products.media.types)[':attributeSetName']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsMediaTypesAttributeSetNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.products.media.types)[':attributeSetName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.products.media.types[':attributeSetName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsMediaTypesAttributeSetName<TError = unknown>(
  args: InferRequestType<(typeof client.V1.products.media.types)[':attributeSetName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.products.media.types)[':attributeSetName']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsMediaTypesAttributeSetNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.products.media.types)[':attributeSetName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.products.media.types[':attributeSetName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProductsOptionsKey() {
  return ['V1', '/V1/products/options', 'POST'] as const
}

export function usePostV1ProductsOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.options.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.products.options.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.V1.products.options.$post> }) =>
        parseResponse(client.V1.products.options.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProductsOptionsTypesKey() {
  return ['V1', '/V1/products/options/types'] as const
}

export function useGetV1ProductsOptionsTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.options.types.$get>>>
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
        ? getGetV1ProductsOptionsTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.options.types.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.products.options.types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsOptionsTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.options.types.$get>>>
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
        ? getGetV1ProductsOptionsTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.options.types.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.products.options.types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProductsOptionsOptionIdKey() {
  return ['V1', '/V1/products/options/:optionId', 'PUT'] as const
}

export function usePutV1ProductsOptionsOptionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products.options)[':optionId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products.options)[':optionId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProductsOptionsOptionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.V1.products.options)[':optionId']['$put']> },
      ) => parseResponse(client.V1.products.options[':optionId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProductsSpecialPriceKey() {
  return ['V1', '/V1/products/special-price', 'POST'] as const
}

export function usePostV1ProductsSpecialPrice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['special-price']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)['special-price']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsSpecialPriceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.products)['special-price']['$post']> },
      ) => parseResponse(client.V1.products['special-price'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProductsSpecialPriceDeleteKey() {
  return ['V1', '/V1/products/special-price-delete', 'POST'] as const
}

export function usePostV1ProductsSpecialPriceDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['special-price-delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)['special-price-delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsSpecialPriceDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.V1.products)['special-price-delete']['$post']> },
      ) => parseResponse(client.V1.products['special-price-delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProductsSpecialPriceInformationKey() {
  return ['V1', '/V1/products/special-price-information', 'POST'] as const
}

export function usePostV1ProductsSpecialPriceInformation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['special-price-information']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)['special-price-information']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsSpecialPriceInformationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1.products)['special-price-information']['$post']>
        },
      ) => parseResponse(client.V1.products['special-price-information'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1ProductsTierPricesKey() {
  return ['V1', '/V1/products/tier-prices', 'PUT'] as const
}

export function usePutV1ProductsTierPrices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['tier-prices']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)['tier-prices']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProductsTierPricesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.products)['tier-prices']['$put']> },
      ) => parseResponse(client.V1.products['tier-prices'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProductsTierPricesKey() {
  return ['V1', '/V1/products/tier-prices', 'POST'] as const
}

export function usePostV1ProductsTierPrices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['tier-prices']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)['tier-prices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsTierPricesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.products)['tier-prices']['$post']> },
      ) => parseResponse(client.V1.products['tier-prices'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProductsTierPricesDeleteKey() {
  return ['V1', '/V1/products/tier-prices-delete', 'POST'] as const
}

export function usePostV1ProductsTierPricesDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['tier-prices-delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)['tier-prices-delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsTierPricesDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.V1.products)['tier-prices-delete']['$post']> },
      ) => parseResponse(client.V1.products['tier-prices-delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProductsTierPricesInformationKey() {
  return ['V1', '/V1/products/tier-prices-information', 'POST'] as const
}

export function usePostV1ProductsTierPricesInformation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['tier-prices-information']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)['tier-prices-information']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsTierPricesInformationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1.products)['tier-prices-information']['$post']>
        },
      ) => parseResponse(client.V1.products['tier-prices-information'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProductsTypesKey() {
  return ['V1', '/V1/products/types'] as const
}

export function useGetV1ProductsTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.types.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ProductsTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.products.types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.types.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ProductsTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.products.types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProductsProductSkuStockItemsItemIdKey() {
  return ['V1', '/V1/products/:productSku/stockItems/:itemId', 'PUT'] as const
}

export function usePutV1ProductsProductSkuStockItemsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.products)[':productSku']['stockItems'][':itemId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)[':productSku']['stockItems'][':itemId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProductsProductSkuStockItemsItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.products)[':productSku']['stockItems'][':itemId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.V1.products[':productSku'].stockItems[':itemId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProductsSkuKey(
  args: InferRequestType<(typeof client.V1.products)[':sku']['$get']>,
) {
  return ['V1', '/V1/products/:sku', args] as const
}

export function useGetV1ProductsSku<TError = unknown>(
  args: InferRequestType<(typeof client.V1.products)[':sku']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.products)[':sku']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ProductsSkuKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.products)[':sku']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.products[':sku'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsSku<TError = unknown>(
  args: InferRequestType<(typeof client.V1.products)[':sku']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.products)[':sku']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ProductsSkuKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.products)[':sku']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.products[':sku'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProductsSkuKey() {
  return ['V1', '/V1/products/:sku', 'PUT'] as const
}

export function usePutV1ProductsSku<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.products)[':sku']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)[':sku']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProductsSkuKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.products)[':sku']['$put']> },
      ) => parseResponse(client.V1.products[':sku'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProductsSkuKey() {
  return ['V1', '/V1/products/:sku', 'DELETE'] as const
}

export function useDeleteV1ProductsSku<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.products)[':sku']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)[':sku']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProductsSkuKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.products)[':sku']['$delete']> },
      ) => parseResponse(client.V1.products[':sku'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProductsSkuDownloadableLinksKey(
  args: InferRequestType<(typeof client.V1.products)[':sku']['downloadable-links']['$get']>,
) {
  return ['V1', '/V1/products/:sku/downloadable-links', args] as const
}

export function useGetV1ProductsSkuDownloadableLinks<TError = unknown>(
  args: InferRequestType<(typeof client.V1.products)[':sku']['downloadable-links']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products)[':sku']['downloadable-links']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsSkuDownloadableLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products)[':sku']['downloadable-links']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.products[':sku']['downloadable-links'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsSkuDownloadableLinks<TError = unknown>(
  args: InferRequestType<(typeof client.V1.products)[':sku']['downloadable-links']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products)[':sku']['downloadable-links']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsSkuDownloadableLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products)[':sku']['downloadable-links']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.products[':sku']['downloadable-links'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProductsSkuDownloadableLinksKey() {
  return ['V1', '/V1/products/:sku/downloadable-links', 'POST'] as const
}

export function usePostV1ProductsSkuDownloadableLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)[':sku']['downloadable-links']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)[':sku']['downloadable-links']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsSkuDownloadableLinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1.products)[':sku']['downloadable-links']['$post']>
        },
      ) =>
        parseResponse(client.V1.products[':sku']['downloadable-links'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProductsSkuDownloadableLinksSamplesKey(
  args: InferRequestType<
    (typeof client.V1.products)[':sku']['downloadable-links']['samples']['$get']
  >,
) {
  return ['V1', '/V1/products/:sku/downloadable-links/samples', args] as const
}

export function useGetV1ProductsSkuDownloadableLinksSamples<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1.products)[':sku']['downloadable-links']['samples']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.products)[':sku']['downloadable-links']['samples']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsSkuDownloadableLinksSamplesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.products)[':sku']['downloadable-links']['samples']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.products[':sku']['downloadable-links'].samples.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsSkuDownloadableLinksSamples<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1.products)[':sku']['downloadable-links']['samples']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.products)[':sku']['downloadable-links']['samples']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsSkuDownloadableLinksSamplesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.products)[':sku']['downloadable-links']['samples']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.products[':sku']['downloadable-links'].samples.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProductsSkuDownloadableLinksSamplesKey() {
  return ['V1', '/V1/products/:sku/downloadable-links/samples', 'POST'] as const
}

export function usePostV1ProductsSkuDownloadableLinksSamples<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1.products)[':sku']['downloadable-links']['samples']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)[':sku']['downloadable-links']['samples']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsSkuDownloadableLinksSamplesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.products)[':sku']['downloadable-links']['samples']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1.products[':sku']['downloadable-links'].samples.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1ProductsSkuDownloadableLinksSamplesIdKey() {
  return ['V1', '/V1/products/:sku/downloadable-links/samples/:id', 'PUT'] as const
}

export function usePutV1ProductsSkuDownloadableLinksSamplesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1.products)[':sku']['downloadable-links']['samples'][':id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1.products)[':sku']['downloadable-links']['samples'][':id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProductsSkuDownloadableLinksSamplesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.products)[':sku']['downloadable-links']['samples'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.V1.products[':sku']['downloadable-links'].samples[':id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1ProductsSkuDownloadableLinksIdKey() {
  return ['V1', '/V1/products/:sku/downloadable-links/:id', 'PUT'] as const
}

export function usePutV1ProductsSkuDownloadableLinksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.products)[':sku']['downloadable-links'][':id']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)[':sku']['downloadable-links'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProductsSkuDownloadableLinksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.products)[':sku']['downloadable-links'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.V1.products[':sku']['downloadable-links'][':id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProductsSkuGroupPricesCustomerGroupIdTiersKey(
  args: InferRequestType<
    (typeof client.V1.products)[':sku']['group-prices'][':customerGroupId']['tiers']['$get']
  >,
) {
  return ['V1', '/V1/products/:sku/group-prices/:customerGroupId/tiers', args] as const
}

export function useGetV1ProductsSkuGroupPricesCustomerGroupIdTiers<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1.products)[':sku']['group-prices'][':customerGroupId']['tiers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.products)[':sku']['group-prices'][':customerGroupId']['tiers']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsSkuGroupPricesCustomerGroupIdTiersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.products)[':sku']['group-prices'][':customerGroupId']['tiers']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.products[':sku']['group-prices'][':customerGroupId'].tiers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsSkuGroupPricesCustomerGroupIdTiers<TError = unknown>(
  args: InferRequestType<
    (typeof client.V1.products)[':sku']['group-prices'][':customerGroupId']['tiers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.products)[':sku']['group-prices'][':customerGroupId']['tiers']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsSkuGroupPricesCustomerGroupIdTiersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.V1.products)[':sku']['group-prices'][':customerGroupId']['tiers']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.products[':sku']['group-prices'][':customerGroupId'].tiers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProductsSkuGroupPricesCustomerGroupIdTiersQtyKey() {
  return ['V1', '/V1/products/:sku/group-prices/:customerGroupId/tiers/:qty', 'DELETE'] as const
}

export function useDeleteV1ProductsSkuGroupPricesCustomerGroupIdTiersQty<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1.products)[':sku']['group-prices'][':customerGroupId']['tiers'][':qty']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1.products)[':sku']['group-prices'][':customerGroupId']['tiers'][':qty']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProductsSkuGroupPricesCustomerGroupIdTiersQtyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.products)[':sku']['group-prices'][':customerGroupId']['tiers'][':qty']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.V1.products[':sku']['group-prices'][':customerGroupId'].tiers[':qty'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProductsSkuGroupPricesCustomerGroupIdTiersQtyPricePriceKey() {
  return [
    'V1',
    '/V1/products/:sku/group-prices/:customerGroupId/tiers/:qty/price/:price',
    'POST',
  ] as const
}

export function usePostV1ProductsSkuGroupPricesCustomerGroupIdTiersQtyPricePrice<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1.products)[':sku']['group-prices'][':customerGroupId']['tiers'][':qty']['price'][':price']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1.products)[':sku']['group-prices'][':customerGroupId']['tiers'][':qty']['price'][':price']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsSkuGroupPricesCustomerGroupIdTiersQtyPricePriceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.products)[':sku']['group-prices'][':customerGroupId']['tiers'][':qty']['price'][':price']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1.products[':sku']['group-prices'][':customerGroupId'].tiers[':qty'].price[
            ':price'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1ProductsSkuLinksKey() {
  return ['V1', '/V1/products/:sku/links', 'PUT'] as const
}

export function usePutV1ProductsSkuLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)[':sku']['links']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)[':sku']['links']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProductsSkuLinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.products)[':sku']['links']['$put']> },
      ) => parseResponse(client.V1.products[':sku'].links.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProductsSkuLinksKey() {
  return ['V1', '/V1/products/:sku/links', 'POST'] as const
}

export function usePostV1ProductsSkuLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)[':sku']['links']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)[':sku']['links']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsSkuLinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.products)[':sku']['links']['$post']> },
      ) => parseResponse(client.V1.products[':sku'].links.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProductsSkuLinksTypeKey(
  args: InferRequestType<(typeof client.V1.products)[':sku']['links'][':type']['$get']>,
) {
  return ['V1', '/V1/products/:sku/links/:type', args] as const
}

export function useGetV1ProductsSkuLinksType<TError = unknown>(
  args: InferRequestType<(typeof client.V1.products)[':sku']['links'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products)[':sku']['links'][':type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsSkuLinksTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products)[':sku']['links'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.products[':sku'].links[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsSkuLinksType<TError = unknown>(
  args: InferRequestType<(typeof client.V1.products)[':sku']['links'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products)[':sku']['links'][':type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsSkuLinksTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products)[':sku']['links'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.products[':sku'].links[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProductsSkuLinksTypeLinkedProductSkuKey() {
  return ['V1', '/V1/products/:sku/links/:type/:linkedProductSku', 'DELETE'] as const
}

export function useDeleteV1ProductsSkuLinksTypeLinkedProductSku<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1.products)[':sku']['links'][':type'][':linkedProductSku']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1.products)[':sku']['links'][':type'][':linkedProductSku']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProductsSkuLinksTypeLinkedProductSkuKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.products)[':sku']['links'][':type'][':linkedProductSku']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.V1.products[':sku'].links[':type'][':linkedProductSku'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProductsSkuMediaKey(
  args: InferRequestType<(typeof client.V1.products)[':sku']['media']['$get']>,
) {
  return ['V1', '/V1/products/:sku/media', args] as const
}

export function useGetV1ProductsSkuMedia<TError = unknown>(
  args: InferRequestType<(typeof client.V1.products)[':sku']['media']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products)[':sku']['media']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsSkuMediaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products)[':sku']['media']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.products[':sku'].media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsSkuMedia<TError = unknown>(
  args: InferRequestType<(typeof client.V1.products)[':sku']['media']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products)[':sku']['media']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsSkuMediaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products)[':sku']['media']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.products[':sku'].media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProductsSkuMediaKey() {
  return ['V1', '/V1/products/:sku/media', 'POST'] as const
}

export function usePostV1ProductsSkuMedia<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)[':sku']['media']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)[':sku']['media']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsSkuMediaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.products)[':sku']['media']['$post']> },
      ) => parseResponse(client.V1.products[':sku'].media.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProductsSkuMediaEntryIdKey(
  args: InferRequestType<(typeof client.V1.products)[':sku']['media'][':entryId']['$get']>,
) {
  return ['V1', '/V1/products/:sku/media/:entryId', args] as const
}

export function useGetV1ProductsSkuMediaEntryId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.products)[':sku']['media'][':entryId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products)[':sku']['media'][':entryId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsSkuMediaEntryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products)[':sku']['media'][':entryId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.products[':sku'].media[':entryId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsSkuMediaEntryId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.products)[':sku']['media'][':entryId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products)[':sku']['media'][':entryId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsSkuMediaEntryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products)[':sku']['media'][':entryId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.products[':sku'].media[':entryId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProductsSkuMediaEntryIdKey() {
  return ['V1', '/V1/products/:sku/media/:entryId', 'PUT'] as const
}

export function usePutV1ProductsSkuMediaEntryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)[':sku']['media'][':entryId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)[':sku']['media'][':entryId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProductsSkuMediaEntryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1.products)[':sku']['media'][':entryId']['$put']>
        },
      ) => parseResponse(client.V1.products[':sku'].media[':entryId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProductsSkuMediaEntryIdKey() {
  return ['V1', '/V1/products/:sku/media/:entryId', 'DELETE'] as const
}

export function useDeleteV1ProductsSkuMediaEntryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)[':sku']['media'][':entryId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)[':sku']['media'][':entryId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProductsSkuMediaEntryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1.products)[':sku']['media'][':entryId']['$delete']>
        },
      ) => parseResponse(client.V1.products[':sku'].media[':entryId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProductsSkuOptionsKey(
  args: InferRequestType<(typeof client.V1.products)[':sku']['options']['$get']>,
) {
  return ['V1', '/V1/products/:sku/options', args] as const
}

export function useGetV1ProductsSkuOptions<TError = unknown>(
  args: InferRequestType<(typeof client.V1.products)[':sku']['options']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products)[':sku']['options']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsSkuOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products)[':sku']['options']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.products[':sku'].options.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsSkuOptions<TError = unknown>(
  args: InferRequestType<(typeof client.V1.products)[':sku']['options']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products)[':sku']['options']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsSkuOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products)[':sku']['options']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.products[':sku'].options.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProductsSkuOptionsOptionIdKey(
  args: InferRequestType<(typeof client.V1.products)[':sku']['options'][':optionId']['$get']>,
) {
  return ['V1', '/V1/products/:sku/options/:optionId', args] as const
}

export function useGetV1ProductsSkuOptionsOptionId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.products)[':sku']['options'][':optionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products)[':sku']['options'][':optionId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsSkuOptionsOptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products)[':sku']['options'][':optionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.products[':sku'].options[':optionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsSkuOptionsOptionId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.products)[':sku']['options'][':optionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products)[':sku']['options'][':optionId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsSkuOptionsOptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.products)[':sku']['options'][':optionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.products[':sku'].options[':optionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProductsSkuOptionsOptionIdKey() {
  return ['V1', '/V1/products/:sku/options/:optionId', 'DELETE'] as const
}

export function useDeleteV1ProductsSkuOptionsOptionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.products)[':sku']['options'][':optionId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)[':sku']['options'][':optionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProductsSkuOptionsOptionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.products)[':sku']['options'][':optionId']['$delete']
          >
        },
      ) =>
        parseResponse(client.V1.products[':sku'].options[':optionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1ProductsSkuWebsitesKey() {
  return ['V1', '/V1/products/:sku/websites', 'PUT'] as const
}

export function usePutV1ProductsSkuWebsites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)[':sku']['websites']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)[':sku']['websites']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProductsSkuWebsitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.products)[':sku']['websites']['$put']> },
      ) => parseResponse(client.V1.products[':sku'].websites.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProductsSkuWebsitesKey() {
  return ['V1', '/V1/products/:sku/websites', 'POST'] as const
}

export function usePostV1ProductsSkuWebsites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)[':sku']['websites']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)[':sku']['websites']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsSkuWebsitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.V1.products)[':sku']['websites']['$post']> },
      ) => parseResponse(client.V1.products[':sku'].websites.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProductsSkuWebsitesWebsiteIdKey() {
  return ['V1', '/V1/products/:sku/websites/:websiteId', 'DELETE'] as const
}

export function useDeleteV1ProductsSkuWebsitesWebsiteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.products)[':sku']['websites'][':websiteId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.products)[':sku']['websites'][':websiteId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProductsSkuWebsitesWebsiteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.products)[':sku']['websites'][':websiteId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.V1.products[':sku'].websites[':websiteId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1RequisitionListsKey() {
  return ['V1', '/V1/requisition_lists', 'POST'] as const
}

export function usePostV1RequisitionLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.requisition_lists.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.requisition_lists.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RequisitionListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.V1.requisition_lists.$post> },
      ) => parseResponse(client.V1.requisition_lists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ReturnsKey(args: InferRequestType<typeof client.V1.returns.$get>) {
  return ['V1', '/V1/returns', args] as const
}

export function useGetV1Returns<TError = unknown>(
  args: InferRequestType<typeof client.V1.returns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.returns.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ReturnsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.returns.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.returns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Returns<TError = unknown>(
  args: InferRequestType<typeof client.V1.returns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.returns.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ReturnsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.returns.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.returns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ReturnsKey() {
  return ['V1', '/V1/returns', 'POST'] as const
}

export function usePostV1Returns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.returns.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.V1.returns.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ReturnsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.V1.returns.$post> }) =>
        parseResponse(client.V1.returns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ReturnsIdKey(
  args: InferRequestType<(typeof client.V1.returns)[':id']['$get']>,
) {
  return ['V1', '/V1/returns/:id', args] as const
}

export function useGetV1ReturnsId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.returns)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.returns)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ReturnsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.returns)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.returns[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ReturnsId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.returns)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.returns)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ReturnsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.returns)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.returns[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ReturnsIdKey() {
  return ['V1', '/V1/returns/:id', 'PUT'] as const
}

export function usePutV1ReturnsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.returns)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.returns)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ReturnsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.returns)[':id']['$put']> },
      ) => parseResponse(client.V1.returns[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ReturnsIdKey() {
  return ['V1', '/V1/returns/:id', 'DELETE'] as const
}

export function useDeleteV1ReturnsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.returns)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.returns)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ReturnsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.returns)[':id']['$delete']> },
      ) => parseResponse(client.V1.returns[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ReturnsIdCommentsKey(
  args: InferRequestType<(typeof client.V1.returns)[':id']['comments']['$get']>,
) {
  return ['V1', '/V1/returns/:id/comments', args] as const
}

export function useGetV1ReturnsIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.V1.returns)[':id']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.returns)[':id']['comments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ReturnsIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.returns)[':id']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.returns[':id'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ReturnsIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.V1.returns)[':id']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.returns)[':id']['comments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ReturnsIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.returns)[':id']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.returns[':id'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ReturnsIdCommentsKey() {
  return ['V1', '/V1/returns/:id/comments', 'POST'] as const
}

export function usePostV1ReturnsIdComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.returns)[':id']['comments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.returns)[':id']['comments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ReturnsIdCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.returns)[':id']['comments']['$post']> },
      ) => parseResponse(client.V1.returns[':id'].comments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ReturnsIdLabelsKey(
  args: InferRequestType<(typeof client.V1.returns)[':id']['labels']['$get']>,
) {
  return ['V1', '/V1/returns/:id/labels', args] as const
}

export function useGetV1ReturnsIdLabels<TError = unknown>(
  args: InferRequestType<(typeof client.V1.returns)[':id']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.returns)[':id']['labels']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ReturnsIdLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.returns)[':id']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.returns[':id'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ReturnsIdLabels<TError = unknown>(
  args: InferRequestType<(typeof client.V1.returns)[':id']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.returns)[':id']['labels']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ReturnsIdLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.returns)[':id']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.returns[':id'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ReturnsIdTrackingNumbersKey(
  args: InferRequestType<(typeof client.V1.returns)[':id']['tracking-numbers']['$get']>,
) {
  return ['V1', '/V1/returns/:id/tracking-numbers', args] as const
}

export function useGetV1ReturnsIdTrackingNumbers<TError = unknown>(
  args: InferRequestType<(typeof client.V1.returns)[':id']['tracking-numbers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.returns)[':id']['tracking-numbers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ReturnsIdTrackingNumbersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.returns)[':id']['tracking-numbers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.returns[':id']['tracking-numbers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ReturnsIdTrackingNumbers<TError = unknown>(
  args: InferRequestType<(typeof client.V1.returns)[':id']['tracking-numbers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.returns)[':id']['tracking-numbers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ReturnsIdTrackingNumbersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.returns)[':id']['tracking-numbers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.returns[':id']['tracking-numbers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ReturnsIdTrackingNumbersKey() {
  return ['V1', '/V1/returns/:id/tracking-numbers', 'POST'] as const
}

export function usePostV1ReturnsIdTrackingNumbers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.returns)[':id']['tracking-numbers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.returns)[':id']['tracking-numbers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ReturnsIdTrackingNumbersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1.returns)[':id']['tracking-numbers']['$post']>
        },
      ) => parseResponse(client.V1.returns[':id']['tracking-numbers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ReturnsIdTrackingNumbersTrackIdKey() {
  return ['V1', '/V1/returns/:id/tracking-numbers/:trackId', 'DELETE'] as const
}

export function useDeleteV1ReturnsIdTrackingNumbersTrackId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.returns)[':id']['tracking-numbers'][':trackId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.returns)[':id']['tracking-numbers'][':trackId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ReturnsIdTrackingNumbersTrackIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.returns)[':id']['tracking-numbers'][':trackId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.V1.returns[':id']['tracking-numbers'][':trackId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ReturnsAttributeMetadataKey() {
  return ['V1', '/V1/returnsAttributeMetadata'] as const
}

export function useGetV1ReturnsAttributeMetadata<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.returnsAttributeMetadata.$get>>>
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
        ? getGetV1ReturnsAttributeMetadataKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.returnsAttributeMetadata.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.returnsAttributeMetadata.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ReturnsAttributeMetadata<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.returnsAttributeMetadata.$get>>>
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
        ? getGetV1ReturnsAttributeMetadataKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.returnsAttributeMetadata.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.returnsAttributeMetadata.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ReturnsAttributeMetadataCustomKey(
  args: InferRequestType<typeof client.V1.returnsAttributeMetadata.custom.$get>,
) {
  return ['V1', '/V1/returnsAttributeMetadata/custom', args] as const
}

export function useGetV1ReturnsAttributeMetadataCustom<TError = unknown>(
  args: InferRequestType<typeof client.V1.returnsAttributeMetadata.custom.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.V1.returnsAttributeMetadata.custom.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ReturnsAttributeMetadataCustomKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.V1.returnsAttributeMetadata.custom.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.returnsAttributeMetadata.custom.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ReturnsAttributeMetadataCustom<TError = unknown>(
  args: InferRequestType<typeof client.V1.returnsAttributeMetadata.custom.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.V1.returnsAttributeMetadata.custom.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ReturnsAttributeMetadataCustomKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.V1.returnsAttributeMetadata.custom.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.returnsAttributeMetadata.custom.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ReturnsAttributeMetadataFormFormCodeKey(
  args: InferRequestType<(typeof client.V1.returnsAttributeMetadata.form)[':formCode']['$get']>,
) {
  return ['V1', '/V1/returnsAttributeMetadata/form/:formCode', args] as const
}

export function useGetV1ReturnsAttributeMetadataFormFormCode<TError = unknown>(
  args: InferRequestType<(typeof client.V1.returnsAttributeMetadata.form)[':formCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.returnsAttributeMetadata.form)[':formCode']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ReturnsAttributeMetadataFormFormCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.returnsAttributeMetadata.form)[':formCode']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.returnsAttributeMetadata.form[':formCode'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ReturnsAttributeMetadataFormFormCode<TError = unknown>(
  args: InferRequestType<(typeof client.V1.returnsAttributeMetadata.form)[':formCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.returnsAttributeMetadata.form)[':formCode']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ReturnsAttributeMetadataFormFormCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.returnsAttributeMetadata.form)[':formCode']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.returnsAttributeMetadata.form[':formCode'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ReturnsAttributeMetadataAttributeCodeKey(
  args: InferRequestType<(typeof client.V1.returnsAttributeMetadata)[':attributeCode']['$get']>,
) {
  return ['V1', '/V1/returnsAttributeMetadata/:attributeCode', args] as const
}

export function useGetV1ReturnsAttributeMetadataAttributeCode<TError = unknown>(
  args: InferRequestType<(typeof client.V1.returnsAttributeMetadata)[':attributeCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.returnsAttributeMetadata)[':attributeCode']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ReturnsAttributeMetadataAttributeCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.returnsAttributeMetadata)[':attributeCode']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.returnsAttributeMetadata[':attributeCode'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ReturnsAttributeMetadataAttributeCode<TError = unknown>(
  args: InferRequestType<(typeof client.V1.returnsAttributeMetadata)[':attributeCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.returnsAttributeMetadata)[':attributeCode']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ReturnsAttributeMetadataAttributeCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.returnsAttributeMetadata)[':attributeCode']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.returnsAttributeMetadata[':attributeCode'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1RewardMineUseRewardKey() {
  return ['V1', '/V1/reward/mine/use-reward', 'POST'] as const
}

export function usePostV1RewardMineUseReward<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.reward.mine)['use-reward']['$post']>>
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
  const swrKey = customKey ?? getPostV1RewardMineUseRewardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.V1.reward.mine['use-reward'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SalesRulesKey() {
  return ['V1', '/V1/salesRules', 'POST'] as const
}

export function usePostV1SalesRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.salesRules.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.salesRules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SalesRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.V1.salesRules.$post> }) =>
        parseResponse(client.V1.salesRules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SalesRulesSearchKey(
  args: InferRequestType<typeof client.V1.salesRules.search.$get>,
) {
  return ['V1', '/V1/salesRules/search', args] as const
}

export function useGetV1SalesRulesSearch<TError = unknown>(
  args: InferRequestType<typeof client.V1.salesRules.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.salesRules.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SalesRulesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.salesRules.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.salesRules.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SalesRulesSearch<TError = unknown>(
  args: InferRequestType<typeof client.V1.salesRules.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.salesRules.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SalesRulesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.salesRules.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.salesRules.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1SalesRulesRuleIdKey(
  args: InferRequestType<(typeof client.V1.salesRules)[':ruleId']['$get']>,
) {
  return ['V1', '/V1/salesRules/:ruleId', args] as const
}

export function useGetV1SalesRulesRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.salesRules)[':ruleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.salesRules)[':ruleId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SalesRulesRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.salesRules)[':ruleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.salesRules[':ruleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SalesRulesRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.salesRules)[':ruleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.salesRules)[':ruleId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SalesRulesRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.salesRules)[':ruleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.salesRules[':ruleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1SalesRulesRuleIdKey() {
  return ['V1', '/V1/salesRules/:ruleId', 'PUT'] as const
}

export function usePutV1SalesRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.salesRules)[':ruleId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.salesRules)[':ruleId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SalesRulesRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.salesRules)[':ruleId']['$put']> },
      ) => parseResponse(client.V1.salesRules[':ruleId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1SalesRulesRuleIdKey() {
  return ['V1', '/V1/salesRules/:ruleId', 'DELETE'] as const
}

export function useDeleteV1SalesRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.salesRules)[':ruleId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.salesRules)[':ruleId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1SalesRulesRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.salesRules)[':ruleId']['$delete']> },
      ) => parseResponse(client.V1.salesRules[':ruleId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SearchKey(args: InferRequestType<typeof client.V1.search.$get>) {
  return ['V1', '/V1/search', args] as const
}

export function useGetV1Search<TError = unknown>(
  args: InferRequestType<typeof client.V1.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.search.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.search.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Search<TError = unknown>(
  args: InferRequestType<typeof client.V1.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.search.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.search.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1SharedCatalogKey() {
  return ['V1', '/V1/sharedCatalog', 'POST'] as const
}

export function usePostV1SharedCatalog<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.sharedCatalog.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.sharedCatalog.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SharedCatalogKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.V1.sharedCatalog.$post> }) =>
        parseResponse(client.V1.sharedCatalog.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SharedCatalogIndexKey(
  args: InferRequestType<typeof client.V1.sharedCatalog.index.$get>,
) {
  return ['V1', '/V1/sharedCatalog/', args] as const
}

export function useGetV1SharedCatalogIndex<TError = unknown>(
  args: InferRequestType<typeof client.V1.sharedCatalog.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.sharedCatalog.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SharedCatalogIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.sharedCatalog.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.sharedCatalog.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SharedCatalogIndex<TError = unknown>(
  args: InferRequestType<typeof client.V1.sharedCatalog.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.sharedCatalog.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SharedCatalogIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.sharedCatalog.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.sharedCatalog.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1SharedCatalogIdKey() {
  return ['V1', '/V1/sharedCatalog/:id', 'PUT'] as const
}

export function usePutV1SharedCatalogId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.sharedCatalog)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SharedCatalogIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.sharedCatalog)[':id']['$put']> },
      ) => parseResponse(client.V1.sharedCatalog[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SharedCatalogIdAssignCategoriesKey() {
  return ['V1', '/V1/sharedCatalog/:id/assignCategories', 'POST'] as const
}

export function usePostV1SharedCatalogIdAssignCategories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':id']['assignCategories']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.sharedCatalog)[':id']['assignCategories']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SharedCatalogIdAssignCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.sharedCatalog)[':id']['assignCategories']['$post']
          >
        },
      ) => parseResponse(client.V1.sharedCatalog[':id'].assignCategories.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SharedCatalogIdAssignProductsKey() {
  return ['V1', '/V1/sharedCatalog/:id/assignProducts', 'POST'] as const
}

export function usePostV1SharedCatalogIdAssignProducts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':id']['assignProducts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.sharedCatalog)[':id']['assignProducts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SharedCatalogIdAssignProductsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1.sharedCatalog)[':id']['assignProducts']['$post']>
        },
      ) => parseResponse(client.V1.sharedCatalog[':id'].assignProducts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SharedCatalogIdCategoriesKey(
  args: InferRequestType<(typeof client.V1.sharedCatalog)[':id']['categories']['$get']>,
) {
  return ['V1', '/V1/sharedCatalog/:id/categories', args] as const
}

export function useGetV1SharedCatalogIdCategories<TError = unknown>(
  args: InferRequestType<(typeof client.V1.sharedCatalog)[':id']['categories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':id']['categories']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SharedCatalogIdCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':id']['categories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.sharedCatalog[':id'].categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SharedCatalogIdCategories<TError = unknown>(
  args: InferRequestType<(typeof client.V1.sharedCatalog)[':id']['categories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':id']['categories']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SharedCatalogIdCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':id']['categories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.sharedCatalog[':id'].categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1SharedCatalogIdProductsKey(
  args: InferRequestType<(typeof client.V1.sharedCatalog)[':id']['products']['$get']>,
) {
  return ['V1', '/V1/sharedCatalog/:id/products', args] as const
}

export function useGetV1SharedCatalogIdProducts<TError = unknown>(
  args: InferRequestType<(typeof client.V1.sharedCatalog)[':id']['products']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':id']['products']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SharedCatalogIdProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':id']['products']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.sharedCatalog[':id'].products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SharedCatalogIdProducts<TError = unknown>(
  args: InferRequestType<(typeof client.V1.sharedCatalog)[':id']['products']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':id']['products']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SharedCatalogIdProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':id']['products']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.sharedCatalog[':id'].products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1SharedCatalogIdUnassignCategoriesKey() {
  return ['V1', '/V1/sharedCatalog/:id/unassignCategories', 'POST'] as const
}

export function usePostV1SharedCatalogIdUnassignCategories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.sharedCatalog)[':id']['unassignCategories']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.sharedCatalog)[':id']['unassignCategories']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SharedCatalogIdUnassignCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.sharedCatalog)[':id']['unassignCategories']['$post']
          >
        },
      ) =>
        parseResponse(client.V1.sharedCatalog[':id'].unassignCategories.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SharedCatalogIdUnassignProductsKey() {
  return ['V1', '/V1/sharedCatalog/:id/unassignProducts', 'POST'] as const
}

export function usePostV1SharedCatalogIdUnassignProducts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':id']['unassignProducts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.sharedCatalog)[':id']['unassignProducts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SharedCatalogIdUnassignProductsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.sharedCatalog)[':id']['unassignProducts']['$post']
          >
        },
      ) => parseResponse(client.V1.sharedCatalog[':id'].unassignProducts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SharedCatalogSharedCatalogIdKey(
  args: InferRequestType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['$get']>,
) {
  return ['V1', '/V1/sharedCatalog/:sharedCatalogId', args] as const
}

export function useGetV1SharedCatalogSharedCatalogId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SharedCatalogSharedCatalogIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.sharedCatalog[':sharedCatalogId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SharedCatalogSharedCatalogId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SharedCatalogSharedCatalogIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.V1.sharedCatalog[':sharedCatalogId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1SharedCatalogSharedCatalogIdKey() {
  return ['V1', '/V1/sharedCatalog/:sharedCatalogId', 'DELETE'] as const
}

export function useDeleteV1SharedCatalogSharedCatalogId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1SharedCatalogSharedCatalogIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['$delete']>
        },
      ) => parseResponse(client.V1.sharedCatalog[':sharedCatalogId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SharedCatalogSharedCatalogIdAssignCompaniesKey() {
  return ['V1', '/V1/sharedCatalog/:sharedCatalogId/assignCompanies', 'POST'] as const
}

export function usePostV1SharedCatalogSharedCatalogIdAssignCompanies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1.sharedCatalog)[':sharedCatalogId']['assignCompanies']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1.sharedCatalog)[':sharedCatalogId']['assignCompanies']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SharedCatalogSharedCatalogIdAssignCompaniesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.sharedCatalog)[':sharedCatalogId']['assignCompanies']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1.sharedCatalog[':sharedCatalogId'].assignCompanies.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1SharedCatalogSharedCatalogIdCompaniesKey(
  args: InferRequestType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['companies']['$get']>,
) {
  return ['V1', '/V1/sharedCatalog/:sharedCatalogId/companies', args] as const
}

export function useGetV1SharedCatalogSharedCatalogIdCompanies<TError = unknown>(
  args: InferRequestType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['companies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['companies']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SharedCatalogSharedCatalogIdCompaniesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['companies']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.sharedCatalog[':sharedCatalogId'].companies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SharedCatalogSharedCatalogIdCompanies<TError = unknown>(
  args: InferRequestType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['companies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['companies']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SharedCatalogSharedCatalogIdCompaniesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['companies']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.V1.sharedCatalog[':sharedCatalogId'].companies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1SharedCatalogSharedCatalogIdUnassignCompaniesKey() {
  return ['V1', '/V1/sharedCatalog/:sharedCatalogId/unassignCompanies', 'POST'] as const
}

export function usePostV1SharedCatalogSharedCatalogIdUnassignCompanies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1.sharedCatalog)[':sharedCatalogId']['unassignCompanies']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1.sharedCatalog)[':sharedCatalogId']['unassignCompanies']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SharedCatalogSharedCatalogIdUnassignCompaniesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1.sharedCatalog)[':sharedCatalogId']['unassignCompanies']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1.sharedCatalog[':sharedCatalogId'].unassignCompanies.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ShipmentIndexKey() {
  return ['V1', '/V1/shipment/', 'POST'] as const
}

export function usePostV1ShipmentIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.shipment.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.shipment.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ShipmentIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.V1.shipment.index.$post> }) =>
        parseResponse(client.V1.shipment.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ShipmentTrackKey() {
  return ['V1', '/V1/shipment/track', 'POST'] as const
}

export function usePostV1ShipmentTrack<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.shipment.track.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.shipment.track.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ShipmentTrackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.V1.shipment.track.$post> }) =>
        parseResponse(client.V1.shipment.track.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ShipmentTrackIdKey() {
  return ['V1', '/V1/shipment/track/:id', 'DELETE'] as const
}

export function useDeleteV1ShipmentTrackId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.shipment.track)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.shipment.track)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ShipmentTrackIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.shipment.track)[':id']['$delete']> },
      ) => parseResponse(client.V1.shipment.track[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ShipmentIdKey(
  args: InferRequestType<(typeof client.V1.shipment)[':id']['$get']>,
) {
  return ['V1', '/V1/shipment/:id', args] as const
}

export function useGetV1ShipmentId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.shipment)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.shipment)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ShipmentIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.shipment)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.shipment[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ShipmentId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.shipment)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.shipment)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ShipmentIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.shipment)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.shipment[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ShipmentIdCommentsKey(
  args: InferRequestType<(typeof client.V1.shipment)[':id']['comments']['$get']>,
) {
  return ['V1', '/V1/shipment/:id/comments', args] as const
}

export function useGetV1ShipmentIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.V1.shipment)[':id']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.shipment)[':id']['comments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ShipmentIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.shipment)[':id']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.shipment[':id'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ShipmentIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.V1.shipment)[':id']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.shipment)[':id']['comments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ShipmentIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.shipment)[':id']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.shipment[':id'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ShipmentIdCommentsKey() {
  return ['V1', '/V1/shipment/:id/comments', 'POST'] as const
}

export function usePostV1ShipmentIdComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.shipment)[':id']['comments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.shipment)[':id']['comments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ShipmentIdCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.shipment)[':id']['comments']['$post']> },
      ) => parseResponse(client.V1.shipment[':id'].comments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ShipmentIdEmailsKey() {
  return ['V1', '/V1/shipment/:id/emails', 'POST'] as const
}

export function usePostV1ShipmentIdEmails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.shipment)[':id']['emails']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.shipment)[':id']['emails']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ShipmentIdEmailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.shipment)[':id']['emails']['$post']> },
      ) => parseResponse(client.V1.shipment[':id'].emails.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ShipmentIdLabelKey(
  args: InferRequestType<(typeof client.V1.shipment)[':id']['label']['$get']>,
) {
  return ['V1', '/V1/shipment/:id/label', args] as const
}

export function useGetV1ShipmentIdLabel<TError = unknown>(
  args: InferRequestType<(typeof client.V1.shipment)[':id']['label']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.shipment)[':id']['label']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ShipmentIdLabelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.shipment)[':id']['label']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.shipment[':id'].label.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ShipmentIdLabel<TError = unknown>(
  args: InferRequestType<(typeof client.V1.shipment)[':id']['label']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.shipment)[':id']['label']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ShipmentIdLabelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.shipment)[':id']['label']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.shipment[':id'].label.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ShipmentsKey(args: InferRequestType<typeof client.V1.shipments.$get>) {
  return ['V1', '/V1/shipments', args] as const
}

export function useGetV1Shipments<TError = unknown>(
  args: InferRequestType<typeof client.V1.shipments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.shipments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ShipmentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.shipments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.shipments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Shipments<TError = unknown>(
  args: InferRequestType<typeof client.V1.shipments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.shipments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ShipmentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.shipments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.shipments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1StockItemsLowStockIndexKey(
  args: InferRequestType<typeof client.V1.stockItems.lowStock.index.$get>,
) {
  return ['V1', '/V1/stockItems/lowStock/', args] as const
}

export function useGetV1StockItemsLowStockIndex<TError = unknown>(
  args: InferRequestType<typeof client.V1.stockItems.lowStock.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.stockItems.lowStock.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1StockItemsLowStockIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.stockItems.lowStock.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.stockItems.lowStock.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1StockItemsLowStockIndex<TError = unknown>(
  args: InferRequestType<typeof client.V1.stockItems.lowStock.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.stockItems.lowStock.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1StockItemsLowStockIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.stockItems.lowStock.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.stockItems.lowStock.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1StockItemsProductSkuKey(
  args: InferRequestType<(typeof client.V1.stockItems)[':productSku']['$get']>,
) {
  return ['V1', '/V1/stockItems/:productSku', args] as const
}

export function useGetV1StockItemsProductSku<TError = unknown>(
  args: InferRequestType<(typeof client.V1.stockItems)[':productSku']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.stockItems)[':productSku']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1StockItemsProductSkuKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.stockItems)[':productSku']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.stockItems[':productSku'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1StockItemsProductSku<TError = unknown>(
  args: InferRequestType<(typeof client.V1.stockItems)[':productSku']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.stockItems)[':productSku']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1StockItemsProductSkuKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.stockItems)[':productSku']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.stockItems[':productSku'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1StockStatusesProductSkuKey(
  args: InferRequestType<(typeof client.V1.stockStatuses)[':productSku']['$get']>,
) {
  return ['V1', '/V1/stockStatuses/:productSku', args] as const
}

export function useGetV1StockStatusesProductSku<TError = unknown>(
  args: InferRequestType<(typeof client.V1.stockStatuses)[':productSku']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.stockStatuses)[':productSku']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1StockStatusesProductSkuKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.stockStatuses)[':productSku']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.stockStatuses[':productSku'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1StockStatusesProductSku<TError = unknown>(
  args: InferRequestType<(typeof client.V1.stockStatuses)[':productSku']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.stockStatuses)[':productSku']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1StockStatusesProductSkuKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.stockStatuses)[':productSku']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.stockStatuses[':productSku'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1StoreStoreConfigsKey(
  args: InferRequestType<typeof client.V1.store.storeConfigs.$get>,
) {
  return ['V1', '/V1/store/storeConfigs', args] as const
}

export function useGetV1StoreStoreConfigs<TError = unknown>(
  args: InferRequestType<typeof client.V1.store.storeConfigs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.storeConfigs.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1StoreStoreConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.storeConfigs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.store.storeConfigs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1StoreStoreConfigs<TError = unknown>(
  args: InferRequestType<typeof client.V1.store.storeConfigs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.storeConfigs.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1StoreStoreConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.storeConfigs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.store.storeConfigs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1StoreStoreGroupsKey() {
  return ['V1', '/V1/store/storeGroups'] as const
}

export function useGetV1StoreStoreGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.storeGroups.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1StoreStoreGroupsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.storeGroups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.store.storeGroups.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1StoreStoreGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.storeGroups.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1StoreStoreGroupsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.storeGroups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.store.storeGroups.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1StoreStoreViewsKey() {
  return ['V1', '/V1/store/storeViews'] as const
}

export function useGetV1StoreStoreViews<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.storeViews.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1StoreStoreViewsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.storeViews.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.store.storeViews.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1StoreStoreViews<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.storeViews.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1StoreStoreViewsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.storeViews.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.store.storeViews.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1StoreWebsitesKey() {
  return ['V1', '/V1/store/websites'] as const
}

export function useGetV1StoreWebsites<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.websites.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1StoreWebsitesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.websites.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.store.websites.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1StoreWebsites<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.websites.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1StoreWebsitesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.websites.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.store.websites.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TaxClassesKey() {
  return ['V1', '/V1/taxClasses', 'POST'] as const
}

export function usePostV1TaxClasses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxClasses.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.V1.taxClasses.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TaxClassesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.V1.taxClasses.$post> }) =>
        parseResponse(client.V1.taxClasses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TaxClassesSearchKey(
  args: InferRequestType<typeof client.V1.taxClasses.search.$get>,
) {
  return ['V1', '/V1/taxClasses/search', args] as const
}

export function useGetV1TaxClassesSearch<TError = unknown>(
  args: InferRequestType<typeof client.V1.taxClasses.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxClasses.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TaxClassesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxClasses.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.taxClasses.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TaxClassesSearch<TError = unknown>(
  args: InferRequestType<typeof client.V1.taxClasses.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxClasses.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TaxClassesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxClasses.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.taxClasses.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1TaxClassesClassIdKey() {
  return ['V1', '/V1/taxClasses/:classId', 'PUT'] as const
}

export function usePutV1TaxClassesClassId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.taxClasses)[':classId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.taxClasses)[':classId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1TaxClassesClassIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.taxClasses)[':classId']['$put']> },
      ) => parseResponse(client.V1.taxClasses[':classId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TaxClassesTaxClassIdKey(
  args: InferRequestType<(typeof client.V1.taxClasses)[':taxClassId']['$get']>,
) {
  return ['V1', '/V1/taxClasses/:taxClassId', args] as const
}

export function useGetV1TaxClassesTaxClassId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.taxClasses)[':taxClassId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.taxClasses)[':taxClassId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TaxClassesTaxClassIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.taxClasses)[':taxClassId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.taxClasses[':taxClassId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TaxClassesTaxClassId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.taxClasses)[':taxClassId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.taxClasses)[':taxClassId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TaxClassesTaxClassIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.V1.taxClasses)[':taxClassId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.taxClasses[':taxClassId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1TaxClassesTaxClassIdKey() {
  return ['V1', '/V1/taxClasses/:taxClassId', 'DELETE'] as const
}

export function useDeleteV1TaxClassesTaxClassId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.taxClasses)[':taxClassId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.taxClasses)[':taxClassId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TaxClassesTaxClassIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.taxClasses)[':taxClassId']['$delete']> },
      ) => parseResponse(client.V1.taxClasses[':taxClassId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1TaxRatesKey() {
  return ['V1', '/V1/taxRates', 'PUT'] as const
}

export function usePutV1TaxRates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxRates.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.V1.taxRates.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1TaxRatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.V1.taxRates.$put> }) =>
        parseResponse(client.V1.taxRates.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TaxRatesKey() {
  return ['V1', '/V1/taxRates', 'POST'] as const
}

export function usePostV1TaxRates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxRates.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.V1.taxRates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TaxRatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.V1.taxRates.$post> }) =>
        parseResponse(client.V1.taxRates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TaxRatesSearchKey(
  args: InferRequestType<typeof client.V1.taxRates.search.$get>,
) {
  return ['V1', '/V1/taxRates/search', args] as const
}

export function useGetV1TaxRatesSearch<TError = unknown>(
  args: InferRequestType<typeof client.V1.taxRates.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxRates.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TaxRatesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxRates.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.taxRates.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TaxRatesSearch<TError = unknown>(
  args: InferRequestType<typeof client.V1.taxRates.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxRates.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TaxRatesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxRates.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.taxRates.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TaxRatesRateIdKey(
  args: InferRequestType<(typeof client.V1.taxRates)[':rateId']['$get']>,
) {
  return ['V1', '/V1/taxRates/:rateId', args] as const
}

export function useGetV1TaxRatesRateId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.taxRates)[':rateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.taxRates)[':rateId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TaxRatesRateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.taxRates)[':rateId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.taxRates[':rateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TaxRatesRateId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.taxRates)[':rateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.taxRates)[':rateId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TaxRatesRateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.taxRates)[':rateId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.taxRates[':rateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1TaxRatesRateIdKey() {
  return ['V1', '/V1/taxRates/:rateId', 'DELETE'] as const
}

export function useDeleteV1TaxRatesRateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.taxRates)[':rateId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.taxRates)[':rateId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TaxRatesRateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.taxRates)[':rateId']['$delete']> },
      ) => parseResponse(client.V1.taxRates[':rateId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1TaxRulesKey() {
  return ['V1', '/V1/taxRules', 'PUT'] as const
}

export function usePutV1TaxRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxRules.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.V1.taxRules.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1TaxRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.V1.taxRules.$put> }) =>
        parseResponse(client.V1.taxRules.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TaxRulesKey() {
  return ['V1', '/V1/taxRules', 'POST'] as const
}

export function usePostV1TaxRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxRules.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.V1.taxRules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TaxRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.V1.taxRules.$post> }) =>
        parseResponse(client.V1.taxRules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TaxRulesSearchKey(
  args: InferRequestType<typeof client.V1.taxRules.search.$get>,
) {
  return ['V1', '/V1/taxRules/search', args] as const
}

export function useGetV1TaxRulesSearch<TError = unknown>(
  args: InferRequestType<typeof client.V1.taxRules.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxRules.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TaxRulesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxRules.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.taxRules.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TaxRulesSearch<TError = unknown>(
  args: InferRequestType<typeof client.V1.taxRules.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxRules.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TaxRulesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxRules.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.taxRules.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TaxRulesRuleIdKey(
  args: InferRequestType<(typeof client.V1.taxRules)[':ruleId']['$get']>,
) {
  return ['V1', '/V1/taxRules/:ruleId', args] as const
}

export function useGetV1TaxRulesRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.taxRules)[':ruleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.taxRules)[':ruleId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TaxRulesRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.taxRules)[':ruleId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.taxRules[':ruleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TaxRulesRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.taxRules)[':ruleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.taxRules)[':ruleId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TaxRulesRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.taxRules)[':ruleId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.taxRules[':ruleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1TaxRulesRuleIdKey() {
  return ['V1', '/V1/taxRules/:ruleId', 'DELETE'] as const
}

export function useDeleteV1TaxRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.taxRules)[':ruleId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.taxRules)[':ruleId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TaxRulesRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.taxRules)[':ruleId']['$delete']> },
      ) => parseResponse(client.V1.taxRules[':ruleId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TeamIndexKey(args: InferRequestType<typeof client.V1.team.index.$get>) {
  return ['V1', '/V1/team/', args] as const
}

export function useGetV1TeamIndex<TError = unknown>(
  args: InferRequestType<typeof client.V1.team.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.team.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TeamIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.team.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.team.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TeamIndex<TError = unknown>(
  args: InferRequestType<typeof client.V1.team.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.team.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TeamIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.team.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.team.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TeamCompanyIdKey() {
  return ['V1', '/V1/team/:companyId', 'POST'] as const
}

export function usePostV1TeamCompanyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.team)[':companyId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.team)[':companyId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TeamCompanyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.team)[':companyId']['$post']> },
      ) => parseResponse(client.V1.team[':companyId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TeamTeamIdKey(
  args: InferRequestType<(typeof client.V1.team)[':teamId']['$get']>,
) {
  return ['V1', '/V1/team/:teamId', args] as const
}

export function useGetV1TeamTeamId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.team)[':teamId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.team)[':teamId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TeamTeamIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.team)[':teamId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.team[':teamId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TeamTeamId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.team)[':teamId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.team)[':teamId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TeamTeamIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.team)[':teamId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.team[':teamId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1TeamTeamIdKey() {
  return ['V1', '/V1/team/:teamId', 'PUT'] as const
}

export function usePutV1TeamTeamId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.team)[':teamId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.team)[':teamId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1TeamTeamIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.team)[':teamId']['$put']> },
      ) => parseResponse(client.V1.team[':teamId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TeamTeamIdKey() {
  return ['V1', '/V1/team/:teamId', 'DELETE'] as const
}

export function useDeleteV1TeamTeamId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.team)[':teamId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.team)[':teamId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TeamTeamIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.V1.team)[':teamId']['$delete']> },
      ) => parseResponse(client.V1.team[':teamId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1TemandoRmaRmaIdShipmentsKey() {
  return ['V1', '/V1/temando/rma/:rmaId/shipments', 'PUT'] as const
}

export function usePutV1TemandoRmaRmaIdShipments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.temando.rma)[':rmaId']['shipments']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.V1.temando.rma)[':rmaId']['shipments']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1TemandoRmaRmaIdShipmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.V1.temando.rma)[':rmaId']['shipments']['$put']> },
      ) => parseResponse(client.V1.temando.rma[':rmaId'].shipments.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TransactionsKey(
  args: InferRequestType<typeof client.V1.transactions.$get>,
) {
  return ['V1', '/V1/transactions', args] as const
}

export function useGetV1Transactions<TError = unknown>(
  args: InferRequestType<typeof client.V1.transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.transactions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TransactionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.transactions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Transactions<TError = unknown>(
  args: InferRequestType<typeof client.V1.transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.transactions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TransactionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.transactions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TransactionsIdKey(
  args: InferRequestType<(typeof client.V1.transactions)[':id']['$get']>,
) {
  return ['V1', '/V1/transactions/:id', args] as const
}

export function useGetV1TransactionsId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.transactions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.transactions)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TransactionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.transactions)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.transactions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TransactionsId<TError = unknown>(
  args: InferRequestType<(typeof client.V1.transactions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.transactions)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TransactionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.V1.transactions)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.V1.transactions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1WorldpayGuestCartsCartIdPaymentInformationKey() {
  return ['V1', '/V1/worldpay-guest-carts/:cartId/payment-information', 'POST'] as const
}

export function usePostV1WorldpayGuestCartsCartIdPaymentInformation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.V1)['worldpay-guest-carts'][':cartId']['payment-information']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.V1)['worldpay-guest-carts'][':cartId']['payment-information']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorldpayGuestCartsCartIdPaymentInformationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.V1)['worldpay-guest-carts'][':cartId']['payment-information']['$post']
          >
        },
      ) =>
        parseResponse(
          client.V1['worldpay-guest-carts'][':cartId']['payment-information'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
