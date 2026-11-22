import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['V1'] as const
}

export function getDeleteV1AddressesAddressIdMutationKey() {
  return ['V1', '/V1/addresses/:addressId', 'DELETE'] as const
}

export function getDeleteV1AddressesAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.addresses)[':addressId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.addresses)[':addressId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AddressesAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.addresses)[':addressId']['$delete']>,
    ) {
      return parseResponse(client.V1.addresses[':addressId'].$delete(args, options))
    },
  })
}

export function createDeleteV1AddressesAddressId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.addresses)[':addressId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.addresses)[':addressId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1AddressesAddressIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1AmazonBillingAddressAmazonOrderReferenceIdMutationKey() {
  return ['V1', '/V1/amazon-billing-address/:amazonOrderReferenceId', 'PUT'] as const
}

export function getPutV1AmazonBillingAddressAmazonOrderReferenceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1)['amazon-billing-address'][':amazonOrderReferenceId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1AmazonBillingAddressAmazonOrderReferenceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['amazon-billing-address'][':amazonOrderReferenceId']['$put']
      >,
    ) {
      return parseResponse(
        client.V1['amazon-billing-address'][':amazonOrderReferenceId'].$put(args, options),
      )
    },
  })
}

export function createPutV1AmazonBillingAddressAmazonOrderReferenceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1)['amazon-billing-address'][':amazonOrderReferenceId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1AmazonBillingAddressAmazonOrderReferenceIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1AmazonShippingAddressAmazonOrderReferenceIdMutationKey() {
  return ['V1', '/V1/amazon-shipping-address/:amazonOrderReferenceId', 'PUT'] as const
}

export function getPutV1AmazonShippingAddressAmazonOrderReferenceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1)['amazon-shipping-address'][':amazonOrderReferenceId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1AmazonShippingAddressAmazonOrderReferenceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['amazon-shipping-address'][':amazonOrderReferenceId']['$put']
      >,
    ) {
      return parseResponse(
        client.V1['amazon-shipping-address'][':amazonOrderReferenceId'].$put(args, options),
      )
    },
  })
}

export function createPutV1AmazonShippingAddressAmazonOrderReferenceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1)['amazon-shipping-address'][':amazonOrderReferenceId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1AmazonShippingAddressAmazonOrderReferenceIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1AmazonOrderRefMutationKey() {
  return ['V1', '/V1/amazon/order-ref', 'DELETE'] as const
}

export function getDeleteV1AmazonOrderRefMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.amazon)['order-ref']['$delete']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AmazonOrderRefMutationKey(),
    async mutationFn() {
      return parseResponse(client.V1.amazon['order-ref'].$delete(undefined, options))
    },
  })
}

export function createDeleteV1AmazonOrderRef<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.amazon)['order-ref']['$delete']>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1AmazonOrderRefMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1AnalyticsLinkQueryKey() {
  return ['V1', '/V1/analytics/link'] as const
}

export function getV1AnalyticsLinkQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.analytics.link.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.analytics.link.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AnalyticsLinkQueryKey>
  >({
    queryKey: getV1AnalyticsLinkQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.analytics.link.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AnalyticsLink<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.analytics.link.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.analytics.link.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AnalyticsLinkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AnalyticsLinkQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1AttributeMetadataCustomerQueryKey() {
  return ['V1', '/V1/attributeMetadata/customer'] as const
}

export function getV1AttributeMetadataCustomerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.V1.attributeMetadata.customer.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.attributeMetadata.customer.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AttributeMetadataCustomerQueryKey>
  >({
    queryKey: getV1AttributeMetadataCustomerQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.attributeMetadata.customer.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AttributeMetadataCustomer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.V1.attributeMetadata.customer.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.V1.attributeMetadata.customer.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AttributeMetadataCustomerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AttributeMetadataCustomerQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1AttributeMetadataCustomerAttributeAttributeCodeQueryKey(
  args: InferRequestType<
    (typeof client.V1.attributeMetadata.customer.attribute)[':attributeCode']['$get']
  >,
) {
  return ['V1', '/V1/attributeMetadata/customer/attribute/:attributeCode', args] as const
}

export function getV1AttributeMetadataCustomerAttributeAttributeCodeQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.V1.attributeMetadata.customer.attribute)[':attributeCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1AttributeMetadataCustomerAttributeAttributeCodeQueryKey>
  >({
    queryKey: getV1AttributeMetadataCustomerAttributeAttributeCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.attributeMetadata.customer.attribute[':attributeCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AttributeMetadataCustomerAttributeAttributeCode<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1.attributeMetadata.customer.attribute)[':attributeCode']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1AttributeMetadataCustomerAttributeAttributeCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AttributeMetadataCustomerAttributeAttributeCodeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1AttributeMetadataCustomerCustomQueryKey(
  args: InferRequestType<typeof client.V1.attributeMetadata.customer.custom.$get>,
) {
  return ['V1', '/V1/attributeMetadata/customer/custom', args] as const
}

export function getV1AttributeMetadataCustomerCustomQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.V1.attributeMetadata.customer.custom.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.V1.attributeMetadata.customer.custom.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.V1.attributeMetadata.customer.custom.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AttributeMetadataCustomerCustomQueryKey>
  >({
    queryKey: getV1AttributeMetadataCustomerCustomQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.attributeMetadata.customer.custom.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AttributeMetadataCustomerCustom<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.V1.attributeMetadata.customer.custom.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.attributeMetadata.customer.custom.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.V1.attributeMetadata.customer.custom.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AttributeMetadataCustomerCustomQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AttributeMetadataCustomerCustomQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1AttributeMetadataCustomerFormFormCodeQueryKey(
  args: InferRequestType<(typeof client.V1.attributeMetadata.customer.form)[':formCode']['$get']>,
) {
  return ['V1', '/V1/attributeMetadata/customer/form/:formCode', args] as const
}

export function getV1AttributeMetadataCustomerFormFormCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.attributeMetadata.customer.form)[':formCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.attributeMetadata.customer.form)[':formCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.attributeMetadata.customer.form)[':formCode']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AttributeMetadataCustomerFormFormCodeQueryKey>
  >({
    queryKey: getV1AttributeMetadataCustomerFormFormCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.attributeMetadata.customer.form[':formCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AttributeMetadataCustomerFormFormCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.attributeMetadata.customer.form)[':formCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1.attributeMetadata.customer.form)[':formCode']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.attributeMetadata.customer.form)[':formCode']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AttributeMetadataCustomerFormFormCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AttributeMetadataCustomerFormFormCodeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1AttributeMetadataCustomerAddressQueryKey() {
  return ['V1', '/V1/attributeMetadata/customerAddress'] as const
}

export function getV1AttributeMetadataCustomerAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.V1.attributeMetadata.customerAddress.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.V1.attributeMetadata.customerAddress.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AttributeMetadataCustomerAddressQueryKey>
  >({
    queryKey: getV1AttributeMetadataCustomerAddressQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.attributeMetadata.customerAddress.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AttributeMetadataCustomerAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.V1.attributeMetadata.customerAddress.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.V1.attributeMetadata.customerAddress.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AttributeMetadataCustomerAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AttributeMetadataCustomerAddressQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1AttributeMetadataCustomerAddressAttributeAttributeCodeQueryKey(
  args: InferRequestType<
    (typeof client.V1.attributeMetadata.customerAddress.attribute)[':attributeCode']['$get']
  >,
) {
  return ['V1', '/V1/attributeMetadata/customerAddress/attribute/:attributeCode', args] as const
}

export function getV1AttributeMetadataCustomerAddressAttributeAttributeCodeQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.V1.attributeMetadata.customerAddress.attribute)[':attributeCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1AttributeMetadataCustomerAddressAttributeAttributeCodeQueryKey>
  >({
    queryKey: getV1AttributeMetadataCustomerAddressAttributeAttributeCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.attributeMetadata.customerAddress.attribute[':attributeCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AttributeMetadataCustomerAddressAttributeAttributeCode<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1.attributeMetadata.customerAddress.attribute)[':attributeCode']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1AttributeMetadataCustomerAddressAttributeAttributeCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AttributeMetadataCustomerAddressAttributeAttributeCodeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1AttributeMetadataCustomerAddressCustomQueryKey(
  args: InferRequestType<typeof client.V1.attributeMetadata.customerAddress.custom.$get>,
) {
  return ['V1', '/V1/attributeMetadata/customerAddress/custom', args] as const
}

export function getV1AttributeMetadataCustomerAddressCustomQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.V1.attributeMetadata.customerAddress.custom.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.V1.attributeMetadata.customerAddress.custom.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.V1.attributeMetadata.customerAddress.custom.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AttributeMetadataCustomerAddressCustomQueryKey>
  >({
    queryKey: getV1AttributeMetadataCustomerAddressCustomQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.attributeMetadata.customerAddress.custom.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AttributeMetadataCustomerAddressCustom<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.V1.attributeMetadata.customerAddress.custom.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.attributeMetadata.customerAddress.custom.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.V1.attributeMetadata.customerAddress.custom.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AttributeMetadataCustomerAddressCustomQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AttributeMetadataCustomerAddressCustomQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1AttributeMetadataCustomerAddressFormFormCodeQueryKey(
  args: InferRequestType<
    (typeof client.V1.attributeMetadata.customerAddress.form)[':formCode']['$get']
  >,
) {
  return ['V1', '/V1/attributeMetadata/customerAddress/form/:formCode', args] as const
}

export function getV1AttributeMetadataCustomerAddressFormFormCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1.attributeMetadata.customerAddress.form)[':formCode']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.V1.attributeMetadata.customerAddress.form)[':formCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1AttributeMetadataCustomerAddressFormFormCodeQueryKey>
  >({
    queryKey: getV1AttributeMetadataCustomerAddressFormFormCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.attributeMetadata.customerAddress.form[':formCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AttributeMetadataCustomerAddressFormFormCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1.attributeMetadata.customerAddress.form)[':formCode']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1.attributeMetadata.customerAddress.form)[':formCode']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1AttributeMetadataCustomerAddressFormFormCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AttributeMetadataCustomerAddressFormFormCodeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1BulkBulkUuidDetailedStatusQueryKey(
  args: InferRequestType<(typeof client.V1.bulk)[':bulkUuid']['detailed-status']['$get']>,
) {
  return ['V1', '/V1/bulk/:bulkUuid/detailed-status', args] as const
}

export function getV1BulkBulkUuidDetailedStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.bulk)[':bulkUuid']['detailed-status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.bulk)[':bulkUuid']['detailed-status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.bulk)[':bulkUuid']['detailed-status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BulkBulkUuidDetailedStatusQueryKey>
  >({
    queryKey: getV1BulkBulkUuidDetailedStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.bulk[':bulkUuid']['detailed-status'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1BulkBulkUuidDetailedStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.bulk)[':bulkUuid']['detailed-status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.bulk)[':bulkUuid']['detailed-status']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.bulk)[':bulkUuid']['detailed-status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BulkBulkUuidDetailedStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1BulkBulkUuidDetailedStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1BulkBulkUuidOperationStatusStatusQueryKey(
  args: InferRequestType<
    (typeof client.V1.bulk)[':bulkUuid']['operation-status'][':status']['$get']
  >,
) {
  return ['V1', '/V1/bulk/:bulkUuid/operation-status/:status', args] as const
}

export function getV1BulkBulkUuidOperationStatusStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1.bulk)[':bulkUuid']['operation-status'][':status']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.V1.bulk)[':bulkUuid']['operation-status'][':status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.bulk)[':bulkUuid']['operation-status'][':status']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BulkBulkUuidOperationStatusStatusQueryKey>
  >({
    queryKey: getV1BulkBulkUuidOperationStatusStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.bulk[':bulkUuid']['operation-status'][':status'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1BulkBulkUuidOperationStatusStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1.bulk)[':bulkUuid']['operation-status'][':status']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1.bulk)[':bulkUuid']['operation-status'][':status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1BulkBulkUuidOperationStatusStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1BulkBulkUuidOperationStatusStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1BulkBulkUuidStatusQueryKey(
  args: InferRequestType<(typeof client.V1.bulk)[':bulkUuid']['status']['$get']>,
) {
  return ['V1', '/V1/bulk/:bulkUuid/status', args] as const
}

export function getV1BulkBulkUuidStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.bulk)[':bulkUuid']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.bulk)[':bulkUuid']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.bulk)[':bulkUuid']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BulkBulkUuidStatusQueryKey>
  >({
    queryKey: getV1BulkBulkUuidStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.bulk[':bulkUuid'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1BulkBulkUuidStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.bulk)[':bulkUuid']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.bulk)[':bulkUuid']['status']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.bulk)[':bulkUuid']['status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BulkBulkUuidStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1BulkBulkUuidStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1BundleProductsOptionsAddMutationKey() {
  return ['V1', '/V1/bundle-products/options/add', 'POST'] as const
}

export function getPostV1BundleProductsOptionsAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['bundle-products']['options']['add']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1)['bundle-products']['options']['add']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BundleProductsOptionsAddMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1)['bundle-products']['options']['add']['$post']>,
    ) {
      return parseResponse(client.V1['bundle-products'].options.add.$post(args, options))
    },
  })
}

export function createPostV1BundleProductsOptionsAdd<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1)['bundle-products']['options']['add']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1)['bundle-products']['options']['add']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1BundleProductsOptionsAddMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1BundleProductsOptionsTypesQueryKey() {
  return ['V1', '/V1/bundle-products/options/types'] as const
}

export function getV1BundleProductsOptionsTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1)['bundle-products']['options']['types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['bundle-products']['options']['types']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BundleProductsOptionsTypesQueryKey>
  >({
    queryKey: getV1BundleProductsOptionsTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.V1['bundle-products'].options.types.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1BundleProductsOptionsTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1)['bundle-products']['options']['types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1)['bundle-products']['options']['types']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BundleProductsOptionsTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1BundleProductsOptionsTypesQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1BundleProductsOptionsOptionIdMutationKey() {
  return ['V1', '/V1/bundle-products/options/:optionId', 'PUT'] as const
}

export function getPutV1BundleProductsOptionsOptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['bundle-products']['options'][':optionId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1)['bundle-products']['options'][':optionId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1BundleProductsOptionsOptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1)['bundle-products']['options'][':optionId']['$put']>,
    ) {
      return parseResponse(client.V1['bundle-products'].options[':optionId'].$put(args, options))
    },
  })
}

export function createPutV1BundleProductsOptionsOptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1)['bundle-products']['options'][':optionId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1)['bundle-products']['options'][':optionId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1BundleProductsOptionsOptionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1BundleProductsProductSkuChildrenQueryKey(
  args: InferRequestType<(typeof client.V1)['bundle-products'][':productSku']['children']['$get']>,
) {
  return ['V1', '/V1/bundle-products/:productSku/children', args] as const
}

export function getV1BundleProductsProductSkuChildrenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1)['bundle-products'][':productSku']['children']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1)['bundle-products'][':productSku']['children']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1)['bundle-products'][':productSku']['children']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BundleProductsProductSkuChildrenQueryKey>
  >({
    queryKey: getV1BundleProductsProductSkuChildrenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1['bundle-products'][':productSku'].children.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1BundleProductsProductSkuChildren<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1)['bundle-products'][':productSku']['children']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1)['bundle-products'][':productSku']['children']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1)['bundle-products'][':productSku']['children']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BundleProductsProductSkuChildrenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1BundleProductsProductSkuChildrenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1BundleProductsSkuLinksIdMutationKey() {
  return ['V1', '/V1/bundle-products/:sku/links/:id', 'PUT'] as const
}

export function getPutV1BundleProductsSkuLinksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['bundle-products'][':sku']['links'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1)['bundle-products'][':sku']['links'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1BundleProductsSkuLinksIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1)['bundle-products'][':sku']['links'][':id']['$put']>,
    ) {
      return parseResponse(client.V1['bundle-products'][':sku'].links[':id'].$put(args, options))
    },
  })
}

export function createPutV1BundleProductsSkuLinksId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1)['bundle-products'][':sku']['links'][':id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1)['bundle-products'][':sku']['links'][':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1BundleProductsSkuLinksIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1BundleProductsSkuLinksOptionIdMutationKey() {
  return ['V1', '/V1/bundle-products/:sku/links/:optionId', 'POST'] as const
}

export function getPostV1BundleProductsSkuLinksOptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1)['bundle-products'][':sku']['links'][':optionId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BundleProductsSkuLinksOptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['bundle-products'][':sku']['links'][':optionId']['$post']
      >,
    ) {
      return parseResponse(
        client.V1['bundle-products'][':sku'].links[':optionId'].$post(args, options),
      )
    },
  })
}

export function createPostV1BundleProductsSkuLinksOptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.V1)['bundle-products'][':sku']['links'][':optionId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.V1)['bundle-products'][':sku']['links'][':optionId']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1BundleProductsSkuLinksOptionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1BundleProductsSkuOptionsAllQueryKey(
  args: InferRequestType<(typeof client.V1)['bundle-products'][':sku']['options']['all']['$get']>,
) {
  return ['V1', '/V1/bundle-products/:sku/options/all', args] as const
}

export function getV1BundleProductsSkuOptionsAllQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1)['bundle-products'][':sku']['options']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1)['bundle-products'][':sku']['options']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1)['bundle-products'][':sku']['options']['all']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BundleProductsSkuOptionsAllQueryKey>
  >({
    queryKey: getV1BundleProductsSkuOptionsAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1['bundle-products'][':sku'].options.all.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1BundleProductsSkuOptionsAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1)['bundle-products'][':sku']['options']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1)['bundle-products'][':sku']['options']['all']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1)['bundle-products'][':sku']['options']['all']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BundleProductsSkuOptionsAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1BundleProductsSkuOptionsAllQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1BundleProductsSkuOptionsOptionIdQueryKey(
  args: InferRequestType<
    (typeof client.V1)['bundle-products'][':sku']['options'][':optionId']['$get']
  >,
) {
  return ['V1', '/V1/bundle-products/:sku/options/:optionId', args] as const
}

export function getV1BundleProductsSkuOptionsOptionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1)['bundle-products'][':sku']['options'][':optionId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.V1)['bundle-products'][':sku']['options'][':optionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1BundleProductsSkuOptionsOptionIdQueryKey>
  >({
    queryKey: getV1BundleProductsSkuOptionsOptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1['bundle-products'][':sku'].options[':optionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1BundleProductsSkuOptionsOptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1)['bundle-products'][':sku']['options'][':optionId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1)['bundle-products'][':sku']['options'][':optionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1BundleProductsSkuOptionsOptionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1BundleProductsSkuOptionsOptionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV1BundleProductsSkuOptionsOptionIdMutationKey() {
  return ['V1', '/V1/bundle-products/:sku/options/:optionId', 'DELETE'] as const
}

export function getDeleteV1BundleProductsSkuOptionsOptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1)['bundle-products'][':sku']['options'][':optionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BundleProductsSkuOptionsOptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['bundle-products'][':sku']['options'][':optionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.V1['bundle-products'][':sku'].options[':optionId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1BundleProductsSkuOptionsOptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1)['bundle-products'][':sku']['options'][':optionId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1BundleProductsSkuOptionsOptionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1BundleProductsSkuOptionsOptionIdChildrenChildSkuMutationKey() {
  return ['V1', '/V1/bundle-products/:sku/options/:optionId/children/:childSku', 'DELETE'] as const
}

export function getDeleteV1BundleProductsSkuOptionsOptionIdChildrenChildSkuMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1)['bundle-products'][':sku']['options'][':optionId']['children'][':childSku']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BundleProductsSkuOptionsOptionIdChildrenChildSkuMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['bundle-products'][':sku']['options'][':optionId']['children'][':childSku']['$delete']
      >,
    ) {
      return parseResponse(
        client.V1['bundle-products'][':sku'].options[':optionId'].children[':childSku'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteV1BundleProductsSkuOptionsOptionIdChildrenChildSku<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1)['bundle-products'][':sku']['options'][':optionId']['children'][':childSku']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1BundleProductsSkuOptionsOptionIdChildrenChildSkuMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CartsIndexMutationKey() {
  return ['V1', '/V1/carts/', 'POST'] as const
}

export function getPostV1CartsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.index.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1CartsIndexMutationKey(),
    async mutationFn() {
      return parseResponse(client.V1.carts.index.$post(undefined, options))
    },
  })
}

export function createPostV1CartsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.index.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CartsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CartsGuestCartsCartIdCheckGiftCardGiftCardCodeQueryKey(
  args: InferRequestType<
    (typeof client.V1.carts)['guest-carts'][':cartId']['checkGiftCard'][':giftCardCode']['$get']
  >,
) {
  return ['V1', '/V1/carts/guest-carts/:cartId/checkGiftCard/:giftCardCode', args] as const
}

export function getV1CartsGuestCartsCartIdCheckGiftCardGiftCardCodeQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.V1.carts)['guest-carts'][':cartId']['checkGiftCard'][':giftCardCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1CartsGuestCartsCartIdCheckGiftCardGiftCardCodeQueryKey>
  >({
    queryKey: getV1CartsGuestCartsCartIdCheckGiftCardGiftCardCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.carts['guest-carts'][':cartId'].checkGiftCard[':giftCardCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CartsGuestCartsCartIdCheckGiftCardGiftCardCode<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1.carts)['guest-carts'][':cartId']['checkGiftCard'][':giftCardCode']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1CartsGuestCartsCartIdCheckGiftCardGiftCardCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CartsGuestCartsCartIdCheckGiftCardGiftCardCodeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostV1CartsGuestCartsCartIdGiftCardsMutationKey() {
  return ['V1', '/V1/carts/guest-carts/:cartId/giftCards', 'POST'] as const
}

export function getPostV1CartsGuestCartsCartIdGiftCardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1.carts)['guest-carts'][':cartId']['giftCards']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CartsGuestCartsCartIdGiftCardsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.carts)['guest-carts'][':cartId']['giftCards']['$post']
      >,
    ) {
      return parseResponse(client.V1.carts['guest-carts'][':cartId'].giftCards.$post(args, options))
    },
  })
}

export function createPostV1CartsGuestCartsCartIdGiftCards<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.V1.carts)['guest-carts'][':cartId']['giftCards']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CartsGuestCartsCartIdGiftCardsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1CartsGuestCartsCartIdGiftCardsGiftCardCodeMutationKey() {
  return ['V1', '/V1/carts/guest-carts/:cartId/giftCards/:giftCardCode', 'DELETE'] as const
}

export function getDeleteV1CartsGuestCartsCartIdGiftCardsGiftCardCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1.carts)['guest-carts'][':cartId']['giftCards'][':giftCardCode']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CartsGuestCartsCartIdGiftCardsGiftCardCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.carts)['guest-carts'][':cartId']['giftCards'][':giftCardCode']['$delete']
      >,
    ) {
      return parseResponse(
        client.V1.carts['guest-carts'][':cartId'].giftCards[':giftCardCode'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1CartsGuestCartsCartIdGiftCardsGiftCardCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1.carts)['guest-carts'][':cartId']['giftCards'][':giftCardCode']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1CartsGuestCartsCartIdGiftCardsGiftCardCodeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CartsLicenceQueryKey() {
  return ['V1', '/V1/carts/licence'] as const
}

export function getV1CartsLicenceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.licence.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.licence.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CartsLicenceQueryKey>
  >({
    queryKey: getV1CartsLicenceQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.carts.licence.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1CartsLicence<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.licence.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.licence.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CartsLicenceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CartsLicenceQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1CartsMineQueryKey() {
  return ['V1', '/V1/carts/mine'] as const
}

export function getV1CartsMineQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CartsMineQueryKey>
  >({
    queryKey: getV1CartsMineQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.carts.mine.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1CartsMine<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CartsMineQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CartsMineQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPutV1CartsMineMutationKey() {
  return ['V1', '/V1/carts/mine', 'PUT'] as const
}

export function getPutV1CartsMineMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.V1.carts.mine.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CartsMineMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.carts.mine.$put>) {
      return parseResponse(client.V1.carts.mine.$put(args, options))
    },
  })
}

export function createPutV1CartsMine<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.V1.carts.mine.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CartsMineMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CartsMineMutationKey() {
  return ['V1', '/V1/carts/mine', 'POST'] as const
}

export function getPostV1CartsMineMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1CartsMineMutationKey(),
    async mutationFn() {
      return parseResponse(client.V1.carts.mine.$post(undefined, options))
    },
  })
}

export function createPostV1CartsMine<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CartsMineMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CartsMineBalanceApplyMutationKey() {
  return ['V1', '/V1/carts/mine/balance/apply', 'POST'] as const
}

export function getPostV1CartsMineBalanceApplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.balance.apply.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1CartsMineBalanceApplyMutationKey(),
    async mutationFn() {
      return parseResponse(client.V1.carts.mine.balance.apply.$post(undefined, options))
    },
  })
}

export function createPostV1CartsMineBalanceApply<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.V1.carts.mine.balance.apply.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CartsMineBalanceApplyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CartsMineBalanceUnapplyMutationKey() {
  return ['V1', '/V1/carts/mine/balance/unapply', 'POST'] as const
}

export function getPostV1CartsMineBalanceUnapplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.balance.unapply.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1CartsMineBalanceUnapplyMutationKey(),
    async mutationFn() {
      return parseResponse(client.V1.carts.mine.balance.unapply.$post(undefined, options))
    },
  })
}

export function createPostV1CartsMineBalanceUnapply<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.V1.carts.mine.balance.unapply.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CartsMineBalanceUnapplyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CartsMineBillingAddressQueryKey() {
  return ['V1', '/V1/carts/mine/billing-address'] as const
}

export function getV1CartsMineBillingAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts.mine)['billing-address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['billing-address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CartsMineBillingAddressQueryKey>
  >({
    queryKey: getV1CartsMineBillingAddressQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.carts.mine['billing-address'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CartsMineBillingAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts.mine)['billing-address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts.mine)['billing-address']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CartsMineBillingAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CartsMineBillingAddressQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV1CartsMineBillingAddressMutationKey() {
  return ['V1', '/V1/carts/mine/billing-address', 'POST'] as const
}

export function getPostV1CartsMineBillingAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['billing-address']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.carts.mine)['billing-address']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CartsMineBillingAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.carts.mine)['billing-address']['$post']>,
    ) {
      return parseResponse(client.V1.carts.mine['billing-address'].$post(args, options))
    },
  })
}

export function createPostV1CartsMineBillingAddress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts.mine)['billing-address']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.carts.mine)['billing-address']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CartsMineBillingAddressMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CartsMineCheckGiftCardGiftCardCodeQueryKey(
  args: InferRequestType<(typeof client.V1.carts.mine.checkGiftCard)[':giftCardCode']['$get']>,
) {
  return ['V1', '/V1/carts/mine/checkGiftCard/:giftCardCode', args] as const
}

export function getV1CartsMineCheckGiftCardGiftCardCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts.mine.checkGiftCard)[':giftCardCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.carts.mine.checkGiftCard)[':giftCardCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine.checkGiftCard)[':giftCardCode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CartsMineCheckGiftCardGiftCardCodeQueryKey>
  >({
    queryKey: getV1CartsMineCheckGiftCardGiftCardCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.carts.mine.checkGiftCard[':giftCardCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CartsMineCheckGiftCardGiftCardCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts.mine.checkGiftCard)[':giftCardCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1.carts.mine.checkGiftCard)[':giftCardCode']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.carts.mine.checkGiftCard)[':giftCardCode']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CartsMineCheckGiftCardGiftCardCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CartsMineCheckGiftCardGiftCardCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1CartsMineCheckoutFieldsMutationKey() {
  return ['V1', '/V1/carts/mine/checkout-fields', 'POST'] as const
}

export function getPostV1CartsMineCheckoutFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['checkout-fields']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.carts.mine)['checkout-fields']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CartsMineCheckoutFieldsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.carts.mine)['checkout-fields']['$post']>,
    ) {
      return parseResponse(client.V1.carts.mine['checkout-fields'].$post(args, options))
    },
  })
}

export function createPostV1CartsMineCheckoutFields<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts.mine)['checkout-fields']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.carts.mine)['checkout-fields']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CartsMineCheckoutFieldsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1CartsMineCollectTotalsMutationKey() {
  return ['V1', '/V1/carts/mine/collect-totals', 'PUT'] as const
}

export function getPutV1CartsMineCollectTotalsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['collect-totals']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.carts.mine)['collect-totals']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CartsMineCollectTotalsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.carts.mine)['collect-totals']['$put']>,
    ) {
      return parseResponse(client.V1.carts.mine['collect-totals'].$put(args, options))
    },
  })
}

export function createPutV1CartsMineCollectTotals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts.mine)['collect-totals']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.carts.mine)['collect-totals']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CartsMineCollectTotalsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1CartsMineCollectionPointSearchRequestMutationKey() {
  return ['V1', '/V1/carts/mine/collection-point/search-request', 'PUT'] as const
}

export function getPutV1CartsMineCollectionPointSearchRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1.carts.mine)['collection-point']['search-request']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CartsMineCollectionPointSearchRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.carts.mine)['collection-point']['search-request']['$put']
      >,
    ) {
      return parseResponse(
        client.V1.carts.mine['collection-point']['search-request'].$put(args, options),
      )
    },
  })
}

export function createPutV1CartsMineCollectionPointSearchRequest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.V1.carts.mine)['collection-point']['search-request']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.V1.carts.mine)['collection-point']['search-request']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CartsMineCollectionPointSearchRequestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1CartsMineCollectionPointSearchRequestMutationKey() {
  return ['V1', '/V1/carts/mine/collection-point/search-request', 'DELETE'] as const
}

export function getDeleteV1CartsMineCollectionPointSearchRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CartsMineCollectionPointSearchRequestMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.V1.carts.mine['collection-point']['search-request'].$delete(undefined, options),
      )
    },
  })
}

export function createDeleteV1CartsMineCollectionPointSearchRequest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1CartsMineCollectionPointSearchRequestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CartsMineCollectionPointSearchResultQueryKey() {
  return ['V1', '/V1/carts/mine/collection-point/search-result'] as const
}

export function getV1CartsMineCollectionPointSearchResultQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1.carts.mine)['collection-point']['search-result']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.carts.mine)['collection-point']['search-result']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CartsMineCollectionPointSearchResultQueryKey>
  >({
    queryKey: getV1CartsMineCollectionPointSearchResultQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.carts.mine['collection-point']['search-result'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CartsMineCollectionPointSearchResult<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1.carts.mine)['collection-point']['search-result']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.V1.carts.mine)['collection-point']['search-result']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CartsMineCollectionPointSearchResultQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CartsMineCollectionPointSearchResultQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1CartsMineCollectionPointSelectMutationKey() {
  return ['V1', '/V1/carts/mine/collection-point/select', 'POST'] as const
}

export function getPostV1CartsMineCollectionPointSelectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['collection-point']['select']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.carts.mine)['collection-point']['select']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CartsMineCollectionPointSelectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.carts.mine)['collection-point']['select']['$post']>,
    ) {
      return parseResponse(client.V1.carts.mine['collection-point'].select.$post(args, options))
    },
  })
}

export function createPostV1CartsMineCollectionPointSelect<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.carts.mine)['collection-point']['select']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.carts.mine)['collection-point']['select']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CartsMineCollectionPointSelectMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CartsMineCouponsQueryKey() {
  return ['V1', '/V1/carts/mine/coupons'] as const
}

export function getV1CartsMineCouponsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.coupons.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.coupons.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CartsMineCouponsQueryKey>
  >({
    queryKey: getV1CartsMineCouponsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.carts.mine.coupons.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CartsMineCoupons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.coupons.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.coupons.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CartsMineCouponsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CartsMineCouponsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV1CartsMineCouponsMutationKey() {
  return ['V1', '/V1/carts/mine/coupons', 'DELETE'] as const
}

export function getDeleteV1CartsMineCouponsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.coupons.$delete>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CartsMineCouponsMutationKey(),
    async mutationFn() {
      return parseResponse(client.V1.carts.mine.coupons.$delete(undefined, options))
    },
  })
}

export function createDeleteV1CartsMineCoupons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.coupons.$delete>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1CartsMineCouponsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1CartsMineCouponsCouponCodeMutationKey() {
  return ['V1', '/V1/carts/mine/coupons/:couponCode', 'PUT'] as const
}

export function getPutV1CartsMineCouponsCouponCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine.coupons)[':couponCode']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.carts.mine.coupons)[':couponCode']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CartsMineCouponsCouponCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.carts.mine.coupons)[':couponCode']['$put']>,
    ) {
      return parseResponse(client.V1.carts.mine.coupons[':couponCode'].$put(args, options))
    },
  })
}

export function createPutV1CartsMineCouponsCouponCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts.mine.coupons)[':couponCode']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.carts.mine.coupons)[':couponCode']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CartsMineCouponsCouponCodeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CartsMineDeliveryOptionMutationKey() {
  return ['V1', '/V1/carts/mine/delivery-option', 'POST'] as const
}

export function getPostV1CartsMineDeliveryOptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['delivery-option']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.carts.mine)['delivery-option']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CartsMineDeliveryOptionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.carts.mine)['delivery-option']['$post']>,
    ) {
      return parseResponse(client.V1.carts.mine['delivery-option'].$post(args, options))
    },
  })
}

export function createPostV1CartsMineDeliveryOption<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts.mine)['delivery-option']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.carts.mine)['delivery-option']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CartsMineDeliveryOptionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CartsMineEstimateShippingMethodsMutationKey() {
  return ['V1', '/V1/carts/mine/estimate-shipping-methods', 'POST'] as const
}

export function getPostV1CartsMineEstimateShippingMethodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['estimate-shipping-methods']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.carts.mine)['estimate-shipping-methods']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CartsMineEstimateShippingMethodsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.carts.mine)['estimate-shipping-methods']['$post']>,
    ) {
      return parseResponse(client.V1.carts.mine['estimate-shipping-methods'].$post(args, options))
    },
  })
}

export function createPostV1CartsMineEstimateShippingMethods<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.carts.mine)['estimate-shipping-methods']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.carts.mine)['estimate-shipping-methods']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CartsMineEstimateShippingMethodsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CartsMineEstimateShippingMethodsByAddressIdMutationKey() {
  return ['V1', '/V1/carts/mine/estimate-shipping-methods-by-address-id', 'POST'] as const
}

export function getPostV1CartsMineEstimateShippingMethodsByAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1.carts.mine)['estimate-shipping-methods-by-address-id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1CartsMineEstimateShippingMethodsByAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.carts.mine)['estimate-shipping-methods-by-address-id']['$post']
      >,
    ) {
      return parseResponse(
        client.V1.carts.mine['estimate-shipping-methods-by-address-id'].$post(args, options),
      )
    },
  })
}

export function createPostV1CartsMineEstimateShippingMethodsByAddressId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1.carts.mine)['estimate-shipping-methods-by-address-id']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CartsMineEstimateShippingMethodsByAddressIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CartsMineGiftMessageQueryKey() {
  return ['V1', '/V1/carts/mine/gift-message'] as const
}

export function getV1CartsMineGiftMessageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts.mine)['gift-message']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['gift-message']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CartsMineGiftMessageQueryKey>
  >({
    queryKey: getV1CartsMineGiftMessageQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.carts.mine['gift-message'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CartsMineGiftMessage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts.mine)['gift-message']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts.mine)['gift-message']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CartsMineGiftMessageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CartsMineGiftMessageQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV1CartsMineGiftMessageMutationKey() {
  return ['V1', '/V1/carts/mine/gift-message', 'POST'] as const
}

export function getPostV1CartsMineGiftMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['gift-message']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.carts.mine)['gift-message']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CartsMineGiftMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.carts.mine)['gift-message']['$post']>,
    ) {
      return parseResponse(client.V1.carts.mine['gift-message'].$post(args, options))
    },
  })
}

export function createPostV1CartsMineGiftMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts.mine)['gift-message']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.carts.mine)['gift-message']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CartsMineGiftMessageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CartsMineGiftMessageItemIdQueryKey(
  args: InferRequestType<(typeof client.V1.carts.mine)['gift-message'][':itemId']['$get']>,
) {
  return ['V1', '/V1/carts/mine/gift-message/:itemId', args] as const
}

export function getV1CartsMineGiftMessageItemIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts.mine)['gift-message'][':itemId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.carts.mine)['gift-message'][':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['gift-message'][':itemId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CartsMineGiftMessageItemIdQueryKey>
  >({
    queryKey: getV1CartsMineGiftMessageItemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.carts.mine['gift-message'][':itemId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CartsMineGiftMessageItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts.mine)['gift-message'][':itemId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.carts.mine)['gift-message'][':itemId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts.mine)['gift-message'][':itemId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CartsMineGiftMessageItemIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CartsMineGiftMessageItemIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1CartsMineGiftMessageItemIdMutationKey() {
  return ['V1', '/V1/carts/mine/gift-message/:itemId', 'POST'] as const
}

export function getPostV1CartsMineGiftMessageItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['gift-message'][':itemId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.carts.mine)['gift-message'][':itemId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CartsMineGiftMessageItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.carts.mine)['gift-message'][':itemId']['$post']>,
    ) {
      return parseResponse(client.V1.carts.mine['gift-message'][':itemId'].$post(args, options))
    },
  })
}

export function createPostV1CartsMineGiftMessageItemId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts.mine)['gift-message'][':itemId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.carts.mine)['gift-message'][':itemId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CartsMineGiftMessageItemIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CartsMineGiftCardsMutationKey() {
  return ['V1', '/V1/carts/mine/giftCards', 'POST'] as const
}

export function getPostV1CartsMineGiftCardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.giftCards.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.V1.carts.mine.giftCards.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CartsMineGiftCardsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.carts.mine.giftCards.$post>) {
      return parseResponse(client.V1.carts.mine.giftCards.$post(args, options))
    },
  })
}

export function createPostV1CartsMineGiftCards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.giftCards.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.V1.carts.mine.giftCards.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CartsMineGiftCardsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1CartsMineGiftCardsGiftCardCodeMutationKey() {
  return ['V1', '/V1/carts/mine/giftCards/:giftCardCode', 'DELETE'] as const
}

export function getDeleteV1CartsMineGiftCardsGiftCardCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine.giftCards)[':giftCardCode']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.carts.mine.giftCards)[':giftCardCode']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CartsMineGiftCardsGiftCardCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.carts.mine.giftCards)[':giftCardCode']['$delete']>,
    ) {
      return parseResponse(client.V1.carts.mine.giftCards[':giftCardCode'].$delete(args, options))
    },
  })
}

export function createDeleteV1CartsMineGiftCardsGiftCardCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.carts.mine.giftCards)[':giftCardCode']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.carts.mine.giftCards)[':giftCardCode']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1CartsMineGiftCardsGiftCardCodeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CartsMineItemsQueryKey() {
  return ['V1', '/V1/carts/mine/items'] as const
}

export function getV1CartsMineItemsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.items.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.items.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CartsMineItemsQueryKey>
  >({
    queryKey: getV1CartsMineItemsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.carts.mine.items.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CartsMineItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.items.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.items.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CartsMineItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CartsMineItemsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV1CartsMineItemsMutationKey() {
  return ['V1', '/V1/carts/mine/items', 'POST'] as const
}

export function getPostV1CartsMineItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.items.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.V1.carts.mine.items.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CartsMineItemsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.carts.mine.items.$post>) {
      return parseResponse(client.V1.carts.mine.items.$post(args, options))
    },
  })
}

export function createPostV1CartsMineItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.items.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.V1.carts.mine.items.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CartsMineItemsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1CartsMineItemsItemIdMutationKey() {
  return ['V1', '/V1/carts/mine/items/:itemId', 'PUT'] as const
}

export function getPutV1CartsMineItemsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine.items)[':itemId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.carts.mine.items)[':itemId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CartsMineItemsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.carts.mine.items)[':itemId']['$put']>,
    ) {
      return parseResponse(client.V1.carts.mine.items[':itemId'].$put(args, options))
    },
  })
}

export function createPutV1CartsMineItemsItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts.mine.items)[':itemId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.carts.mine.items)[':itemId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CartsMineItemsItemIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1CartsMineItemsItemIdMutationKey() {
  return ['V1', '/V1/carts/mine/items/:itemId', 'DELETE'] as const
}

export function getDeleteV1CartsMineItemsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine.items)[':itemId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.carts.mine.items)[':itemId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CartsMineItemsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.carts.mine.items)[':itemId']['$delete']>,
    ) {
      return parseResponse(client.V1.carts.mine.items[':itemId'].$delete(args, options))
    },
  })
}

export function createDeleteV1CartsMineItemsItemId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts.mine.items)[':itemId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.carts.mine.items)[':itemId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1CartsMineItemsItemIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1CartsMineOrderMutationKey() {
  return ['V1', '/V1/carts/mine/order', 'PUT'] as const
}

export function getPutV1CartsMineOrderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.order.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.V1.carts.mine.order.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CartsMineOrderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.carts.mine.order.$put>) {
      return parseResponse(client.V1.carts.mine.order.$put(args, options))
    },
  })
}

export function createPutV1CartsMineOrder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.order.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.V1.carts.mine.order.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CartsMineOrderMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CartsMinePaymentInformationQueryKey() {
  return ['V1', '/V1/carts/mine/payment-information'] as const
}

export function getV1CartsMinePaymentInformationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts.mine)['payment-information']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['payment-information']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CartsMinePaymentInformationQueryKey>
  >({
    queryKey: getV1CartsMinePaymentInformationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.carts.mine['payment-information'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CartsMinePaymentInformation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts.mine)['payment-information']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts.mine)['payment-information']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CartsMinePaymentInformationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CartsMinePaymentInformationQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1CartsMinePaymentInformationMutationKey() {
  return ['V1', '/V1/carts/mine/payment-information', 'POST'] as const
}

export function getPostV1CartsMinePaymentInformationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['payment-information']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.carts.mine)['payment-information']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CartsMinePaymentInformationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.carts.mine)['payment-information']['$post']>,
    ) {
      return parseResponse(client.V1.carts.mine['payment-information'].$post(args, options))
    },
  })
}

export function createPostV1CartsMinePaymentInformation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts.mine)['payment-information']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.carts.mine)['payment-information']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CartsMinePaymentInformationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CartsMinePaymentMethodsQueryKey() {
  return ['V1', '/V1/carts/mine/payment-methods'] as const
}

export function getV1CartsMinePaymentMethodsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts.mine)['payment-methods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['payment-methods']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CartsMinePaymentMethodsQueryKey>
  >({
    queryKey: getV1CartsMinePaymentMethodsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.carts.mine['payment-methods'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CartsMinePaymentMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts.mine)['payment-methods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts.mine)['payment-methods']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CartsMinePaymentMethodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CartsMinePaymentMethodsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1CartsMineSelectedPaymentMethodQueryKey() {
  return ['V1', '/V1/carts/mine/selected-payment-method'] as const
}

export function getV1CartsMineSelectedPaymentMethodQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts.mine)['selected-payment-method']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['selected-payment-method']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CartsMineSelectedPaymentMethodQueryKey>
  >({
    queryKey: getV1CartsMineSelectedPaymentMethodQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.carts.mine['selected-payment-method'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CartsMineSelectedPaymentMethod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts.mine)['selected-payment-method']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts.mine)['selected-payment-method']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CartsMineSelectedPaymentMethodQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CartsMineSelectedPaymentMethodQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1CartsMineSelectedPaymentMethodMutationKey() {
  return ['V1', '/V1/carts/mine/selected-payment-method', 'PUT'] as const
}

export function getPutV1CartsMineSelectedPaymentMethodMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['selected-payment-method']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.carts.mine)['selected-payment-method']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CartsMineSelectedPaymentMethodMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.carts.mine)['selected-payment-method']['$put']>,
    ) {
      return parseResponse(client.V1.carts.mine['selected-payment-method'].$put(args, options))
    },
  })
}

export function createPutV1CartsMineSelectedPaymentMethod<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts.mine)['selected-payment-method']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.carts.mine)['selected-payment-method']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CartsMineSelectedPaymentMethodMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CartsMineSetPaymentInformationMutationKey() {
  return ['V1', '/V1/carts/mine/set-payment-information', 'POST'] as const
}

export function getPostV1CartsMineSetPaymentInformationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['set-payment-information']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.carts.mine)['set-payment-information']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CartsMineSetPaymentInformationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.carts.mine)['set-payment-information']['$post']>,
    ) {
      return parseResponse(client.V1.carts.mine['set-payment-information'].$post(args, options))
    },
  })
}

export function createPostV1CartsMineSetPaymentInformation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts.mine)['set-payment-information']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.carts.mine)['set-payment-information']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CartsMineSetPaymentInformationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CartsMineShippingInformationMutationKey() {
  return ['V1', '/V1/carts/mine/shipping-information', 'POST'] as const
}

export function getPostV1CartsMineShippingInformationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['shipping-information']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.carts.mine)['shipping-information']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CartsMineShippingInformationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.carts.mine)['shipping-information']['$post']>,
    ) {
      return parseResponse(client.V1.carts.mine['shipping-information'].$post(args, options))
    },
  })
}

export function createPostV1CartsMineShippingInformation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts.mine)['shipping-information']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.carts.mine)['shipping-information']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CartsMineShippingInformationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CartsMineShippingMethodsQueryKey() {
  return ['V1', '/V1/carts/mine/shipping-methods'] as const
}

export function getV1CartsMineShippingMethodsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts.mine)['shipping-methods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['shipping-methods']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CartsMineShippingMethodsQueryKey>
  >({
    queryKey: getV1CartsMineShippingMethodsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.carts.mine['shipping-methods'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CartsMineShippingMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts.mine)['shipping-methods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts.mine)['shipping-methods']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CartsMineShippingMethodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CartsMineShippingMethodsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1CartsMineTotalsQueryKey() {
  return ['V1', '/V1/carts/mine/totals'] as const
}

export function getV1CartsMineTotalsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.totals.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.totals.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CartsMineTotalsQueryKey>
  >({
    queryKey: getV1CartsMineTotalsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.carts.mine.totals.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CartsMineTotals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.totals.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.mine.totals.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CartsMineTotalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CartsMineTotalsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV1CartsMineTotalsInformationMutationKey() {
  return ['V1', '/V1/carts/mine/totals-information', 'POST'] as const
}

export function getPostV1CartsMineTotalsInformationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts.mine)['totals-information']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.carts.mine)['totals-information']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CartsMineTotalsInformationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.carts.mine)['totals-information']['$post']>,
    ) {
      return parseResponse(client.V1.carts.mine['totals-information'].$post(args, options))
    },
  })
}

export function createPostV1CartsMineTotalsInformation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts.mine)['totals-information']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.carts.mine)['totals-information']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CartsMineTotalsInformationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CartsSearchQueryKey(
  args: InferRequestType<typeof client.V1.carts.search.$get>,
) {
  return ['V1', '/V1/carts/search', args] as const
}

export function getV1CartsSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.V1.carts.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CartsSearchQueryKey>
  >({
    queryKey: getV1CartsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.carts.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1CartsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.carts.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.carts.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CartsSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CartsSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1CartsCartIdQueryKey(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['$get']>,
) {
  return ['V1', '/V1/carts/:cartId', args] as const
}

export function getV1CartsCartIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CartsCartIdQueryKey>
  >({
    queryKey: getV1CartsCartIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.carts[':cartId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1CartsCartId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.carts)[':cartId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CartsCartIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CartsCartIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV1CartsCartIdMutationKey() {
  return ['V1', '/V1/carts/:cartId', 'PUT'] as const
}

export function getPutV1CartsCartIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.carts)[':cartId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CartsCartIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.carts)[':cartId']['$put']>) {
      return parseResponse(client.V1.carts[':cartId'].$put(args, options))
    },
  })
}

export function createPutV1CartsCartId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.carts)[':cartId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CartsCartIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CartsCartIdBillingAddressQueryKey(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['billing-address']['$get']>,
) {
  return ['V1', '/V1/carts/:cartId/billing-address', args] as const
}

export function getV1CartsCartIdBillingAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['billing-address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['billing-address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['billing-address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CartsCartIdBillingAddressQueryKey>
  >({
    queryKey: getV1CartsCartIdBillingAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.carts[':cartId']['billing-address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CartsCartIdBillingAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['billing-address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.carts)[':cartId']['billing-address']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['billing-address']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CartsCartIdBillingAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CartsCartIdBillingAddressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1CartsCartIdBillingAddressMutationKey() {
  return ['V1', '/V1/carts/:cartId/billing-address', 'POST'] as const
}

export function getPostV1CartsCartIdBillingAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['billing-address']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.carts)[':cartId']['billing-address']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CartsCartIdBillingAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.carts)[':cartId']['billing-address']['$post']>,
    ) {
      return parseResponse(client.V1.carts[':cartId']['billing-address'].$post(args, options))
    },
  })
}

export function createPostV1CartsCartIdBillingAddress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['billing-address']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.carts)[':cartId']['billing-address']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CartsCartIdBillingAddressMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CartsCartIdCouponsQueryKey(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['coupons']['$get']>,
) {
  return ['V1', '/V1/carts/:cartId/coupons', args] as const
}

export function getV1CartsCartIdCouponsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['coupons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['coupons']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['coupons']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CartsCartIdCouponsQueryKey>
  >({
    queryKey: getV1CartsCartIdCouponsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.carts[':cartId'].coupons.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CartsCartIdCoupons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['coupons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.carts)[':cartId']['coupons']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['coupons']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CartsCartIdCouponsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CartsCartIdCouponsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV1CartsCartIdCouponsMutationKey() {
  return ['V1', '/V1/carts/:cartId/coupons', 'DELETE'] as const
}

export function getDeleteV1CartsCartIdCouponsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['coupons']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.carts)[':cartId']['coupons']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CartsCartIdCouponsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.carts)[':cartId']['coupons']['$delete']>,
    ) {
      return parseResponse(client.V1.carts[':cartId'].coupons.$delete(args, options))
    },
  })
}

export function createDeleteV1CartsCartIdCoupons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['coupons']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.carts)[':cartId']['coupons']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1CartsCartIdCouponsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1CartsCartIdCouponsCouponCodeMutationKey() {
  return ['V1', '/V1/carts/:cartId/coupons/:couponCode', 'PUT'] as const
}

export function getPutV1CartsCartIdCouponsCouponCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['coupons'][':couponCode']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.carts)[':cartId']['coupons'][':couponCode']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CartsCartIdCouponsCouponCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.carts)[':cartId']['coupons'][':couponCode']['$put']>,
    ) {
      return parseResponse(client.V1.carts[':cartId'].coupons[':couponCode'].$put(args, options))
    },
  })
}

export function createPutV1CartsCartIdCouponsCouponCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.carts)[':cartId']['coupons'][':couponCode']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.carts)[':cartId']['coupons'][':couponCode']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CartsCartIdCouponsCouponCodeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CartsCartIdEstimateShippingMethodsMutationKey() {
  return ['V1', '/V1/carts/:cartId/estimate-shipping-methods', 'POST'] as const
}

export function getPostV1CartsCartIdEstimateShippingMethodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1.carts)[':cartId']['estimate-shipping-methods']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CartsCartIdEstimateShippingMethodsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.carts)[':cartId']['estimate-shipping-methods']['$post']
      >,
    ) {
      return parseResponse(
        client.V1.carts[':cartId']['estimate-shipping-methods'].$post(args, options),
      )
    },
  })
}

export function createPostV1CartsCartIdEstimateShippingMethods<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.V1.carts)[':cartId']['estimate-shipping-methods']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.carts)[':cartId']['estimate-shipping-methods']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CartsCartIdEstimateShippingMethodsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CartsCartIdEstimateShippingMethodsByAddressIdMutationKey() {
  return ['V1', '/V1/carts/:cartId/estimate-shipping-methods-by-address-id', 'POST'] as const
}

export function getPostV1CartsCartIdEstimateShippingMethodsByAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1.carts)[':cartId']['estimate-shipping-methods-by-address-id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1CartsCartIdEstimateShippingMethodsByAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.carts)[':cartId']['estimate-shipping-methods-by-address-id']['$post']
      >,
    ) {
      return parseResponse(
        client.V1.carts[':cartId']['estimate-shipping-methods-by-address-id'].$post(args, options),
      )
    },
  })
}

export function createPostV1CartsCartIdEstimateShippingMethodsByAddressId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1.carts)[':cartId']['estimate-shipping-methods-by-address-id']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CartsCartIdEstimateShippingMethodsByAddressIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CartsCartIdGiftMessageQueryKey(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['gift-message']['$get']>,
) {
  return ['V1', '/V1/carts/:cartId/gift-message', args] as const
}

export function getV1CartsCartIdGiftMessageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['gift-message']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['gift-message']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['gift-message']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CartsCartIdGiftMessageQueryKey>
  >({
    queryKey: getV1CartsCartIdGiftMessageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.carts[':cartId']['gift-message'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CartsCartIdGiftMessage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['gift-message']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.carts)[':cartId']['gift-message']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['gift-message']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CartsCartIdGiftMessageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CartsCartIdGiftMessageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1CartsCartIdGiftMessageMutationKey() {
  return ['V1', '/V1/carts/:cartId/gift-message', 'POST'] as const
}

export function getPostV1CartsCartIdGiftMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['gift-message']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.carts)[':cartId']['gift-message']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CartsCartIdGiftMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.carts)[':cartId']['gift-message']['$post']>,
    ) {
      return parseResponse(client.V1.carts[':cartId']['gift-message'].$post(args, options))
    },
  })
}

export function createPostV1CartsCartIdGiftMessage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['gift-message']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.carts)[':cartId']['gift-message']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CartsCartIdGiftMessageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CartsCartIdGiftMessageItemIdQueryKey(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['gift-message'][':itemId']['$get']>,
) {
  return ['V1', '/V1/carts/:cartId/gift-message/:itemId', args] as const
}

export function getV1CartsCartIdGiftMessageItemIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['gift-message'][':itemId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['gift-message'][':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.carts)[':cartId']['gift-message'][':itemId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CartsCartIdGiftMessageItemIdQueryKey>
  >({
    queryKey: getV1CartsCartIdGiftMessageItemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.carts[':cartId']['gift-message'][':itemId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CartsCartIdGiftMessageItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['gift-message'][':itemId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1.carts)[':cartId']['gift-message'][':itemId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.carts)[':cartId']['gift-message'][':itemId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CartsCartIdGiftMessageItemIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CartsCartIdGiftMessageItemIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1CartsCartIdGiftMessageItemIdMutationKey() {
  return ['V1', '/V1/carts/:cartId/gift-message/:itemId', 'POST'] as const
}

export function getPostV1CartsCartIdGiftMessageItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1.carts)[':cartId']['gift-message'][':itemId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CartsCartIdGiftMessageItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.carts)[':cartId']['gift-message'][':itemId']['$post']
      >,
    ) {
      return parseResponse(
        client.V1.carts[':cartId']['gift-message'][':itemId'].$post(args, options),
      )
    },
  })
}

export function createPostV1CartsCartIdGiftMessageItemId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.V1.carts)[':cartId']['gift-message'][':itemId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CartsCartIdGiftMessageItemIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1CartsCartIdGiftCardsMutationKey() {
  return ['V1', '/V1/carts/:cartId/giftCards', 'PUT'] as const
}

export function getPutV1CartsCartIdGiftCardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['giftCards']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.carts)[':cartId']['giftCards']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CartsCartIdGiftCardsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.carts)[':cartId']['giftCards']['$put']>,
    ) {
      return parseResponse(client.V1.carts[':cartId'].giftCards.$put(args, options))
    },
  })
}

export function createPutV1CartsCartIdGiftCards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['giftCards']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.carts)[':cartId']['giftCards']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CartsCartIdGiftCardsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1CartsCartIdGiftCardsGiftCardCodeMutationKey() {
  return ['V1', '/V1/carts/:cartId/giftCards/:giftCardCode', 'DELETE'] as const
}

export function getDeleteV1CartsCartIdGiftCardsGiftCardCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1.carts)[':cartId']['giftCards'][':giftCardCode']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CartsCartIdGiftCardsGiftCardCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.carts)[':cartId']['giftCards'][':giftCardCode']['$delete']
      >,
    ) {
      return parseResponse(
        client.V1.carts[':cartId'].giftCards[':giftCardCode'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1CartsCartIdGiftCardsGiftCardCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.V1.carts)[':cartId']['giftCards'][':giftCardCode']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.V1.carts)[':cartId']['giftCards'][':giftCardCode']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1CartsCartIdGiftCardsGiftCardCodeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CartsCartIdItemsQueryKey(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['items']['$get']>,
) {
  return ['V1', '/V1/carts/:cartId/items', args] as const
}

export function getV1CartsCartIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CartsCartIdItemsQueryKey>
  >({
    queryKey: getV1CartsCartIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.carts[':cartId'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CartsCartIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.carts)[':cartId']['items']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['items']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CartsCartIdItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CartsCartIdItemsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV1CartsCartIdItemsItemIdMutationKey() {
  return ['V1', '/V1/carts/:cartId/items/:itemId', 'PUT'] as const
}

export function getPutV1CartsCartIdItemsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['items'][':itemId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.carts)[':cartId']['items'][':itemId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CartsCartIdItemsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.carts)[':cartId']['items'][':itemId']['$put']>,
    ) {
      return parseResponse(client.V1.carts[':cartId'].items[':itemId'].$put(args, options))
    },
  })
}

export function createPutV1CartsCartIdItemsItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['items'][':itemId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.carts)[':cartId']['items'][':itemId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CartsCartIdItemsItemIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1CartsCartIdItemsItemIdMutationKey() {
  return ['V1', '/V1/carts/:cartId/items/:itemId', 'DELETE'] as const
}

export function getDeleteV1CartsCartIdItemsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['items'][':itemId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.carts)[':cartId']['items'][':itemId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CartsCartIdItemsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.carts)[':cartId']['items'][':itemId']['$delete']>,
    ) {
      return parseResponse(client.V1.carts[':cartId'].items[':itemId'].$delete(args, options))
    },
  })
}

export function createDeleteV1CartsCartIdItemsItemId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.carts)[':cartId']['items'][':itemId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.carts)[':cartId']['items'][':itemId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1CartsCartIdItemsItemIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1CartsCartIdOrderMutationKey() {
  return ['V1', '/V1/carts/:cartId/order', 'PUT'] as const
}

export function getPutV1CartsCartIdOrderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['order']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.carts)[':cartId']['order']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CartsCartIdOrderMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.carts)[':cartId']['order']['$put']>) {
      return parseResponse(client.V1.carts[':cartId'].order.$put(args, options))
    },
  })
}

export function createPutV1CartsCartIdOrder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['order']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.carts)[':cartId']['order']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CartsCartIdOrderMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CartsCartIdPaymentMethodsQueryKey(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['payment-methods']['$get']>,
) {
  return ['V1', '/V1/carts/:cartId/payment-methods', args] as const
}

export function getV1CartsCartIdPaymentMethodsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['payment-methods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['payment-methods']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['payment-methods']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CartsCartIdPaymentMethodsQueryKey>
  >({
    queryKey: getV1CartsCartIdPaymentMethodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.carts[':cartId']['payment-methods'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CartsCartIdPaymentMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['payment-methods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.carts)[':cartId']['payment-methods']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['payment-methods']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CartsCartIdPaymentMethodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CartsCartIdPaymentMethodsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1CartsCartIdSelectedPaymentMethodQueryKey(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['selected-payment-method']['$get']>,
) {
  return ['V1', '/V1/carts/:cartId/selected-payment-method', args] as const
}

export function getV1CartsCartIdSelectedPaymentMethodQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['selected-payment-method']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['selected-payment-method']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.carts)[':cartId']['selected-payment-method']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CartsCartIdSelectedPaymentMethodQueryKey>
  >({
    queryKey: getV1CartsCartIdSelectedPaymentMethodQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.carts[':cartId']['selected-payment-method'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CartsCartIdSelectedPaymentMethod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['selected-payment-method']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1.carts)[':cartId']['selected-payment-method']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.carts)[':cartId']['selected-payment-method']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CartsCartIdSelectedPaymentMethodQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CartsCartIdSelectedPaymentMethodQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1CartsCartIdSelectedPaymentMethodMutationKey() {
  return ['V1', '/V1/carts/:cartId/selected-payment-method', 'PUT'] as const
}

export function getPutV1CartsCartIdSelectedPaymentMethodMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1.carts)[':cartId']['selected-payment-method']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CartsCartIdSelectedPaymentMethodMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.carts)[':cartId']['selected-payment-method']['$put']
      >,
    ) {
      return parseResponse(
        client.V1.carts[':cartId']['selected-payment-method'].$put(args, options),
      )
    },
  })
}

export function createPutV1CartsCartIdSelectedPaymentMethod<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.V1.carts)[':cartId']['selected-payment-method']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CartsCartIdSelectedPaymentMethodMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CartsCartIdShippingInformationMutationKey() {
  return ['V1', '/V1/carts/:cartId/shipping-information', 'POST'] as const
}

export function getPostV1CartsCartIdShippingInformationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['shipping-information']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.carts)[':cartId']['shipping-information']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CartsCartIdShippingInformationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.carts)[':cartId']['shipping-information']['$post']>,
    ) {
      return parseResponse(client.V1.carts[':cartId']['shipping-information'].$post(args, options))
    },
  })
}

export function createPostV1CartsCartIdShippingInformation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.carts)[':cartId']['shipping-information']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.carts)[':cartId']['shipping-information']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CartsCartIdShippingInformationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CartsCartIdShippingMethodsQueryKey(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['shipping-methods']['$get']>,
) {
  return ['V1', '/V1/carts/:cartId/shipping-methods', args] as const
}

export function getV1CartsCartIdShippingMethodsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['shipping-methods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['shipping-methods']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['shipping-methods']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CartsCartIdShippingMethodsQueryKey>
  >({
    queryKey: getV1CartsCartIdShippingMethodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.carts[':cartId']['shipping-methods'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CartsCartIdShippingMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['shipping-methods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.carts)[':cartId']['shipping-methods']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['shipping-methods']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CartsCartIdShippingMethodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CartsCartIdShippingMethodsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1CartsCartIdTotalsQueryKey(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['totals']['$get']>,
) {
  return ['V1', '/V1/carts/:cartId/totals', args] as const
}

export function getV1CartsCartIdTotalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['totals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.carts)[':cartId']['totals']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['totals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CartsCartIdTotalsQueryKey>
  >({
    queryKey: getV1CartsCartIdTotalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.carts[':cartId'].totals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CartsCartIdTotals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['totals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.carts)[':cartId']['totals']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['totals']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CartsCartIdTotalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CartsCartIdTotalsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1CartsCartIdTotalsInformationMutationKey() {
  return ['V1', '/V1/carts/:cartId/totals-information', 'POST'] as const
}

export function getPostV1CartsCartIdTotalsInformationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts)[':cartId']['totals-information']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.carts)[':cartId']['totals-information']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CartsCartIdTotalsInformationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.carts)[':cartId']['totals-information']['$post']>,
    ) {
      return parseResponse(client.V1.carts[':cartId']['totals-information'].$post(args, options))
    },
  })
}

export function createPostV1CartsCartIdTotalsInformation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.carts)[':cartId']['totals-information']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.carts)[':cartId']['totals-information']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CartsCartIdTotalsInformationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CartsQuoteIdGiftCardsQueryKey(
  args: InferRequestType<(typeof client.V1.carts)[':quoteId']['giftCards']['$get']>,
) {
  return ['V1', '/V1/carts/:quoteId/giftCards', args] as const
}

export function getV1CartsQuoteIdGiftCardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts)[':quoteId']['giftCards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.carts)[':quoteId']['giftCards']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts)[':quoteId']['giftCards']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CartsQuoteIdGiftCardsQueryKey>
  >({
    queryKey: getV1CartsQuoteIdGiftCardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.carts[':quoteId'].giftCards.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CartsQuoteIdGiftCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.carts)[':quoteId']['giftCards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.carts)[':quoteId']['giftCards']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts)[':quoteId']['giftCards']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CartsQuoteIdGiftCardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CartsQuoteIdGiftCardsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1CartsQuoteIdItemsMutationKey() {
  return ['V1', '/V1/carts/:quoteId/items', 'POST'] as const
}

export function getPostV1CartsQuoteIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.carts)[':quoteId']['items']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.carts)[':quoteId']['items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CartsQuoteIdItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.carts)[':quoteId']['items']['$post']>,
    ) {
      return parseResponse(client.V1.carts[':quoteId'].items.$post(args, options))
    },
  })
}

export function createPostV1CartsQuoteIdItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.carts)[':quoteId']['items']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.carts)[':quoteId']['items']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CartsQuoteIdItemsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CategoriesQueryKey(args: InferRequestType<typeof client.V1.categories.$get>) {
  return ['V1', '/V1/categories', args] as const
}

export function getV1CategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.categories.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.V1.categories.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CategoriesQueryKey>
  >({
    queryKey: getV1CategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.categories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Categories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.categories.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.categories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CategoriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1CategoriesMutationKey() {
  return ['V1', '/V1/categories', 'POST'] as const
}

export function getPostV1CategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.categories.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.V1.categories.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CategoriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.categories.$post>) {
      return parseResponse(client.V1.categories.$post(args, options))
    },
  })
}

export function createPostV1Categories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.categories.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.V1.categories.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CategoriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CategoriesAttributesQueryKey(
  args: InferRequestType<typeof client.V1.categories.attributes.$get>,
) {
  return ['V1', '/V1/categories/attributes', args] as const
}

export function getV1CategoriesAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.V1.categories.attributes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.V1.categories.attributes.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.categories.attributes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CategoriesAttributesQueryKey>
  >({
    queryKey: getV1CategoriesAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.categories.attributes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CategoriesAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.V1.categories.attributes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.categories.attributes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.categories.attributes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CategoriesAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CategoriesAttributesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1CategoriesAttributesAttributeCodeQueryKey(
  args: InferRequestType<(typeof client.V1.categories.attributes)[':attributeCode']['$get']>,
) {
  return ['V1', '/V1/categories/attributes/:attributeCode', args] as const
}

export function getV1CategoriesAttributesAttributeCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.categories.attributes)[':attributeCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.categories.attributes)[':attributeCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.categories.attributes)[':attributeCode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CategoriesAttributesAttributeCodeQueryKey>
  >({
    queryKey: getV1CategoriesAttributesAttributeCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.categories.attributes[':attributeCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CategoriesAttributesAttributeCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.categories.attributes)[':attributeCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.categories.attributes)[':attributeCode']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.categories.attributes)[':attributeCode']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CategoriesAttributesAttributeCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CategoriesAttributesAttributeCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1CategoriesAttributesAttributeCodeOptionsQueryKey(
  args: InferRequestType<
    (typeof client.V1.categories.attributes)[':attributeCode']['options']['$get']
  >,
) {
  return ['V1', '/V1/categories/attributes/:attributeCode/options', args] as const
}

export function getV1CategoriesAttributesAttributeCodeOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1.categories.attributes)[':attributeCode']['options']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.V1.categories.attributes)[':attributeCode']['options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1CategoriesAttributesAttributeCodeOptionsQueryKey>
  >({
    queryKey: getV1CategoriesAttributesAttributeCodeOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.categories.attributes[':attributeCode'].options.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CategoriesAttributesAttributeCodeOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1.categories.attributes)[':attributeCode']['options']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1.categories.attributes)[':attributeCode']['options']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1CategoriesAttributesAttributeCodeOptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CategoriesAttributesAttributeCodeOptionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1CategoriesListQueryKey(
  args: InferRequestType<typeof client.V1.categories.list.$get>,
) {
  return ['V1', '/V1/categories/list', args] as const
}

export function getV1CategoriesListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.categories.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.V1.categories.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.categories.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CategoriesListQueryKey>
  >({
    queryKey: getV1CategoriesListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.categories.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1CategoriesList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.categories.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.categories.list.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.categories.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CategoriesListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CategoriesListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1CategoriesCategoryIdQueryKey(
  args: InferRequestType<(typeof client.V1.categories)[':categoryId']['$get']>,
) {
  return ['V1', '/V1/categories/:categoryId', args] as const
}

export function getV1CategoriesCategoryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.categories)[':categoryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.categories)[':categoryId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.categories)[':categoryId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CategoriesCategoryIdQueryKey>
  >({
    queryKey: getV1CategoriesCategoryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.categories[':categoryId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CategoriesCategoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.categories)[':categoryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.categories)[':categoryId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.categories)[':categoryId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CategoriesCategoryIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CategoriesCategoryIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV1CategoriesCategoryIdMutationKey() {
  return ['V1', '/V1/categories/:categoryId', 'DELETE'] as const
}

export function getDeleteV1CategoriesCategoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.categories)[':categoryId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.categories)[':categoryId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CategoriesCategoryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.categories)[':categoryId']['$delete']>,
    ) {
      return parseResponse(client.V1.categories[':categoryId'].$delete(args, options))
    },
  })
}

export function createDeleteV1CategoriesCategoryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.categories)[':categoryId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.categories)[':categoryId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1CategoriesCategoryIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1CategoriesCategoryIdMoveMutationKey() {
  return ['V1', '/V1/categories/:categoryId/move', 'PUT'] as const
}

export function getPutV1CategoriesCategoryIdMoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.categories)[':categoryId']['move']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.categories)[':categoryId']['move']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CategoriesCategoryIdMoveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.categories)[':categoryId']['move']['$put']>,
    ) {
      return parseResponse(client.V1.categories[':categoryId'].move.$put(args, options))
    },
  })
}

export function createPutV1CategoriesCategoryIdMove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.categories)[':categoryId']['move']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.categories)[':categoryId']['move']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CategoriesCategoryIdMoveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CategoriesCategoryIdProductsQueryKey(
  args: InferRequestType<(typeof client.V1.categories)[':categoryId']['products']['$get']>,
) {
  return ['V1', '/V1/categories/:categoryId/products', args] as const
}

export function getV1CategoriesCategoryIdProductsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.categories)[':categoryId']['products']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.categories)[':categoryId']['products']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.categories)[':categoryId']['products']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CategoriesCategoryIdProductsQueryKey>
  >({
    queryKey: getV1CategoriesCategoryIdProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.categories[':categoryId'].products.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CategoriesCategoryIdProducts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.categories)[':categoryId']['products']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.categories)[':categoryId']['products']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.categories)[':categoryId']['products']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CategoriesCategoryIdProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CategoriesCategoryIdProductsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1CategoriesCategoryIdProductsMutationKey() {
  return ['V1', '/V1/categories/:categoryId/products', 'PUT'] as const
}

export function getPutV1CategoriesCategoryIdProductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.categories)[':categoryId']['products']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.categories)[':categoryId']['products']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CategoriesCategoryIdProductsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.categories)[':categoryId']['products']['$put']>,
    ) {
      return parseResponse(client.V1.categories[':categoryId'].products.$put(args, options))
    },
  })
}

export function createPutV1CategoriesCategoryIdProducts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.categories)[':categoryId']['products']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.categories)[':categoryId']['products']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CategoriesCategoryIdProductsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CategoriesCategoryIdProductsMutationKey() {
  return ['V1', '/V1/categories/:categoryId/products', 'POST'] as const
}

export function getPostV1CategoriesCategoryIdProductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.categories)[':categoryId']['products']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.categories)[':categoryId']['products']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CategoriesCategoryIdProductsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.categories)[':categoryId']['products']['$post']>,
    ) {
      return parseResponse(client.V1.categories[':categoryId'].products.$post(args, options))
    },
  })
}

export function createPostV1CategoriesCategoryIdProducts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.categories)[':categoryId']['products']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.categories)[':categoryId']['products']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CategoriesCategoryIdProductsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1CategoriesCategoryIdProductsSkuMutationKey() {
  return ['V1', '/V1/categories/:categoryId/products/:sku', 'DELETE'] as const
}

export function getDeleteV1CategoriesCategoryIdProductsSkuMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1.categories)[':categoryId']['products'][':sku']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CategoriesCategoryIdProductsSkuMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.categories)[':categoryId']['products'][':sku']['$delete']
      >,
    ) {
      return parseResponse(
        client.V1.categories[':categoryId'].products[':sku'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1CategoriesCategoryIdProductsSku<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.V1.categories)[':categoryId']['products'][':sku']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.V1.categories)[':categoryId']['products'][':sku']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1CategoriesCategoryIdProductsSkuMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1CategoriesIdMutationKey() {
  return ['V1', '/V1/categories/:id', 'PUT'] as const
}

export function getPutV1CategoriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.categories)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.categories)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CategoriesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.categories)[':id']['$put']>) {
      return parseResponse(client.V1.categories[':id'].$put(args, options))
    },
  })
}

export function createPutV1CategoriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.V1.categories)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.categories)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CategoriesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CmsBlockMutationKey() {
  return ['V1', '/V1/cmsBlock', 'POST'] as const
}

export function getPostV1CmsBlockMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.cmsBlock.$post>>>>>,
    TError,
    InferRequestType<typeof client.V1.cmsBlock.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CmsBlockMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.cmsBlock.$post>) {
      return parseResponse(client.V1.cmsBlock.$post(args, options))
    },
  })
}

export function createPostV1CmsBlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.cmsBlock.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.V1.cmsBlock.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CmsBlockMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CmsBlockSearchQueryKey(
  args: InferRequestType<typeof client.V1.cmsBlock.search.$get>,
) {
  return ['V1', '/V1/cmsBlock/search', args] as const
}

export function getV1CmsBlockSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.cmsBlock.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.V1.cmsBlock.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.cmsBlock.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CmsBlockSearchQueryKey>
  >({
    queryKey: getV1CmsBlockSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.cmsBlock.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1CmsBlockSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.cmsBlock.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.cmsBlock.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.cmsBlock.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CmsBlockSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CmsBlockSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1CmsBlockBlockIdQueryKey(
  args: InferRequestType<(typeof client.V1.cmsBlock)[':blockId']['$get']>,
) {
  return ['V1', '/V1/cmsBlock/:blockId', args] as const
}

export function getV1CmsBlockBlockIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.cmsBlock)[':blockId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.cmsBlock)[':blockId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.cmsBlock)[':blockId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CmsBlockBlockIdQueryKey>
  >({
    queryKey: getV1CmsBlockBlockIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.cmsBlock[':blockId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CmsBlockBlockId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.cmsBlock)[':blockId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.cmsBlock)[':blockId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.cmsBlock)[':blockId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CmsBlockBlockIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CmsBlockBlockIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV1CmsBlockBlockIdMutationKey() {
  return ['V1', '/V1/cmsBlock/:blockId', 'DELETE'] as const
}

export function getDeleteV1CmsBlockBlockIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.cmsBlock)[':blockId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.cmsBlock)[':blockId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CmsBlockBlockIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.cmsBlock)[':blockId']['$delete']>) {
      return parseResponse(client.V1.cmsBlock[':blockId'].$delete(args, options))
    },
  })
}

export function createDeleteV1CmsBlockBlockId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.cmsBlock)[':blockId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.cmsBlock)[':blockId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1CmsBlockBlockIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1CmsBlockIdMutationKey() {
  return ['V1', '/V1/cmsBlock/:id', 'PUT'] as const
}

export function getPutV1CmsBlockIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.cmsBlock)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.cmsBlock)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CmsBlockIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.cmsBlock)[':id']['$put']>) {
      return parseResponse(client.V1.cmsBlock[':id'].$put(args, options))
    },
  })
}

export function createPutV1CmsBlockId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.V1.cmsBlock)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.cmsBlock)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CmsBlockIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CmsPageMutationKey() {
  return ['V1', '/V1/cmsPage', 'POST'] as const
}

export function getPostV1CmsPageMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.cmsPage.$post>>>>>,
    TError,
    InferRequestType<typeof client.V1.cmsPage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CmsPageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.cmsPage.$post>) {
      return parseResponse(client.V1.cmsPage.$post(args, options))
    },
  })
}

export function createPostV1CmsPage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.cmsPage.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.V1.cmsPage.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CmsPageMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CmsPageSearchQueryKey(
  args: InferRequestType<typeof client.V1.cmsPage.search.$get>,
) {
  return ['V1', '/V1/cmsPage/search', args] as const
}

export function getV1CmsPageSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.cmsPage.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.V1.cmsPage.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.cmsPage.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CmsPageSearchQueryKey>
  >({
    queryKey: getV1CmsPageSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.cmsPage.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1CmsPageSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.cmsPage.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.cmsPage.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.cmsPage.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CmsPageSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CmsPageSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV1CmsPageIdMutationKey() {
  return ['V1', '/V1/cmsPage/:id', 'PUT'] as const
}

export function getPutV1CmsPageIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.cmsPage)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.cmsPage)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CmsPageIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.cmsPage)[':id']['$put']>) {
      return parseResponse(client.V1.cmsPage[':id'].$put(args, options))
    },
  })
}

export function createPutV1CmsPageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.V1.cmsPage)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.cmsPage)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CmsPageIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CmsPagePageIdQueryKey(
  args: InferRequestType<(typeof client.V1.cmsPage)[':pageId']['$get']>,
) {
  return ['V1', '/V1/cmsPage/:pageId', args] as const
}

export function getV1CmsPagePageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.cmsPage)[':pageId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.cmsPage)[':pageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.cmsPage)[':pageId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CmsPagePageIdQueryKey>
  >({
    queryKey: getV1CmsPagePageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.cmsPage[':pageId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1CmsPagePageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.cmsPage)[':pageId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.cmsPage)[':pageId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.V1.cmsPage)[':pageId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CmsPagePageIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CmsPagePageIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV1CmsPagePageIdMutationKey() {
  return ['V1', '/V1/cmsPage/:pageId', 'DELETE'] as const
}

export function getDeleteV1CmsPagePageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.cmsPage)[':pageId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.cmsPage)[':pageId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CmsPagePageIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.cmsPage)[':pageId']['$delete']>) {
      return parseResponse(client.V1.cmsPage[':pageId'].$delete(args, options))
    },
  })
}

export function createDeleteV1CmsPagePageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.cmsPage)[':pageId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.cmsPage)[':pageId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1CmsPagePageIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CompanyIndexQueryKey(
  args: InferRequestType<typeof client.V1.company.index.$get>,
) {
  return ['V1', '/V1/company/', args] as const
}

export function getV1CompanyIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.company.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.V1.company.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.company.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CompanyIndexQueryKey>
  >({
    queryKey: getV1CompanyIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.company.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1CompanyIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.company.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.company.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.company.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CompanyIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CompanyIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1CompanyIndexMutationKey() {
  return ['V1', '/V1/company/', 'POST'] as const
}

export function getPostV1CompanyIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.company.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.V1.company.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CompanyIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.company.index.$post>) {
      return parseResponse(client.V1.company.index.$post(args, options))
    },
  })
}

export function createPostV1CompanyIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.company.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.V1.company.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CompanyIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1CompanyAssignRolesMutationKey() {
  return ['V1', '/V1/company/assignRoles', 'PUT'] as const
}

export function getPutV1CompanyAssignRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.company.assignRoles.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.V1.company.assignRoles.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CompanyAssignRolesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.company.assignRoles.$put>) {
      return parseResponse(client.V1.company.assignRoles.$put(args, options))
    },
  })
}

export function createPutV1CompanyAssignRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.company.assignRoles.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.V1.company.assignRoles.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CompanyAssignRolesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CompanyRoleIndexQueryKey(
  args: InferRequestType<typeof client.V1.company.role.index.$get>,
) {
  return ['V1', '/V1/company/role/', args] as const
}

export function getV1CompanyRoleIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.company.role.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.V1.company.role.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.company.role.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CompanyRoleIndexQueryKey>
  >({
    queryKey: getV1CompanyRoleIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.company.role.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1CompanyRoleIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.company.role.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.company.role.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.company.role.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CompanyRoleIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CompanyRoleIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1CompanyRoleIndexMutationKey() {
  return ['V1', '/V1/company/role/', 'POST'] as const
}

export function getPostV1CompanyRoleIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.company.role.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.V1.company.role.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CompanyRoleIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.company.role.index.$post>) {
      return parseResponse(client.V1.company.role.index.$post(args, options))
    },
  })
}

export function createPostV1CompanyRoleIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.company.role.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.V1.company.role.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CompanyRoleIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1CompanyRoleIdMutationKey() {
  return ['V1', '/V1/company/role/:id', 'PUT'] as const
}

export function getPutV1CompanyRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.company.role)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.company.role)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CompanyRoleIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.company.role)[':id']['$put']>) {
      return parseResponse(client.V1.company.role[':id'].$put(args, options))
    },
  })
}

export function createPutV1CompanyRoleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.company.role)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.company.role)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CompanyRoleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CompanyRoleRoleIdQueryKey(
  args: InferRequestType<(typeof client.V1.company.role)[':roleId']['$get']>,
) {
  return ['V1', '/V1/company/role/:roleId', args] as const
}

export function getV1CompanyRoleRoleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.company.role)[':roleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.company.role)[':roleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.company.role)[':roleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CompanyRoleRoleIdQueryKey>
  >({
    queryKey: getV1CompanyRoleRoleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.company.role[':roleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CompanyRoleRoleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.company.role)[':roleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.company.role)[':roleId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.company.role)[':roleId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CompanyRoleRoleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CompanyRoleRoleIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV1CompanyRoleRoleIdMutationKey() {
  return ['V1', '/V1/company/role/:roleId', 'DELETE'] as const
}

export function getDeleteV1CompanyRoleRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.company.role)[':roleId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.company.role)[':roleId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CompanyRoleRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.company.role)[':roleId']['$delete']>,
    ) {
      return parseResponse(client.V1.company.role[':roleId'].$delete(args, options))
    },
  })
}

export function createDeleteV1CompanyRoleRoleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.company.role)[':roleId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.company.role)[':roleId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1CompanyRoleRoleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CompanyRoleRoleIdUsersQueryKey(
  args: InferRequestType<(typeof client.V1.company.role)[':roleId']['users']['$get']>,
) {
  return ['V1', '/V1/company/role/:roleId/users', args] as const
}

export function getV1CompanyRoleRoleIdUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.company.role)[':roleId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.company.role)[':roleId']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.company.role)[':roleId']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CompanyRoleRoleIdUsersQueryKey>
  >({
    queryKey: getV1CompanyRoleRoleIdUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.company.role[':roleId'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CompanyRoleRoleIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.company.role)[':roleId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.company.role)[':roleId']['users']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.company.role)[':roleId']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CompanyRoleRoleIdUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CompanyRoleRoleIdUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1CompanyCompanyIdQueryKey(
  args: InferRequestType<(typeof client.V1.company)[':companyId']['$get']>,
) {
  return ['V1', '/V1/company/:companyId', args] as const
}

export function getV1CompanyCompanyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.company)[':companyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.company)[':companyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.company)[':companyId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CompanyCompanyIdQueryKey>
  >({
    queryKey: getV1CompanyCompanyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.company[':companyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CompanyCompanyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.company)[':companyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.company)[':companyId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.company)[':companyId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CompanyCompanyIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CompanyCompanyIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV1CompanyCompanyIdMutationKey() {
  return ['V1', '/V1/company/:companyId', 'PUT'] as const
}

export function getPutV1CompanyCompanyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.company)[':companyId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.company)[':companyId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CompanyCompanyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.company)[':companyId']['$put']>) {
      return parseResponse(client.V1.company[':companyId'].$put(args, options))
    },
  })
}

export function createPutV1CompanyCompanyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.company)[':companyId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.company)[':companyId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CompanyCompanyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1CompanyCompanyIdMutationKey() {
  return ['V1', '/V1/company/:companyId', 'DELETE'] as const
}

export function getDeleteV1CompanyCompanyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.company)[':companyId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.company)[':companyId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CompanyCompanyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.company)[':companyId']['$delete']>) {
      return parseResponse(client.V1.company[':companyId'].$delete(args, options))
    },
  })
}

export function createDeleteV1CompanyCompanyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.company)[':companyId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.company)[':companyId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1CompanyCompanyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CompanyCreditsIndexQueryKey(
  args: InferRequestType<typeof client.V1.companyCredits.index.$get>,
) {
  return ['V1', '/V1/companyCredits/', args] as const
}

export function getV1CompanyCreditsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.V1.companyCredits.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.V1.companyCredits.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.companyCredits.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CompanyCreditsIndexQueryKey>
  >({
    queryKey: getV1CompanyCreditsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.companyCredits.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CompanyCreditsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.V1.companyCredits.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.companyCredits.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.companyCredits.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CompanyCreditsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CompanyCreditsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1CompanyCreditsCompanyCompanyIdQueryKey(
  args: InferRequestType<(typeof client.V1.companyCredits.company)[':companyId']['$get']>,
) {
  return ['V1', '/V1/companyCredits/company/:companyId', args] as const
}

export function getV1CompanyCreditsCompanyCompanyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.companyCredits.company)[':companyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.companyCredits.company)[':companyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.companyCredits.company)[':companyId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CompanyCreditsCompanyCompanyIdQueryKey>
  >({
    queryKey: getV1CompanyCreditsCompanyCompanyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.companyCredits.company[':companyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CompanyCreditsCompanyCompanyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.companyCredits.company)[':companyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.companyCredits.company)[':companyId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.companyCredits.company)[':companyId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CompanyCreditsCompanyCompanyIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CompanyCreditsCompanyCompanyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1CompanyCreditsHistoryQueryKey(
  args: InferRequestType<typeof client.V1.companyCredits.history.$get>,
) {
  return ['V1', '/V1/companyCredits/history', args] as const
}

export function getV1CompanyCreditsHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.V1.companyCredits.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.V1.companyCredits.history.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.companyCredits.history.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CompanyCreditsHistoryQueryKey>
  >({
    queryKey: getV1CompanyCreditsHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.companyCredits.history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CompanyCreditsHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.V1.companyCredits.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.companyCredits.history.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.companyCredits.history.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CompanyCreditsHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CompanyCreditsHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1CompanyCreditsHistoryHistoryIdMutationKey() {
  return ['V1', '/V1/companyCredits/history/:historyId', 'PUT'] as const
}

export function getPutV1CompanyCreditsHistoryHistoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.companyCredits.history)[':historyId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.companyCredits.history)[':historyId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CompanyCreditsHistoryHistoryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.companyCredits.history)[':historyId']['$put']>,
    ) {
      return parseResponse(client.V1.companyCredits.history[':historyId'].$put(args, options))
    },
  })
}

export function createPutV1CompanyCreditsHistoryHistoryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.companyCredits.history)[':historyId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.companyCredits.history)[':historyId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CompanyCreditsHistoryHistoryIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CompanyCreditsCreditIdQueryKey(
  args: InferRequestType<(typeof client.V1.companyCredits)[':creditId']['$get']>,
) {
  return ['V1', '/V1/companyCredits/:creditId', args] as const
}

export function getV1CompanyCreditsCreditIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.companyCredits)[':creditId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.companyCredits)[':creditId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.companyCredits)[':creditId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CompanyCreditsCreditIdQueryKey>
  >({
    queryKey: getV1CompanyCreditsCreditIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.companyCredits[':creditId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CompanyCreditsCreditId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.companyCredits)[':creditId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.companyCredits)[':creditId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.companyCredits)[':creditId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CompanyCreditsCreditIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CompanyCreditsCreditIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1CompanyCreditsCreditIdDecreaseBalanceMutationKey() {
  return ['V1', '/V1/companyCredits/:creditId/decreaseBalance', 'POST'] as const
}

export function getPostV1CompanyCreditsCreditIdDecreaseBalanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1.companyCredits)[':creditId']['decreaseBalance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CompanyCreditsCreditIdDecreaseBalanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.companyCredits)[':creditId']['decreaseBalance']['$post']
      >,
    ) {
      return parseResponse(
        client.V1.companyCredits[':creditId'].decreaseBalance.$post(args, options),
      )
    },
  })
}

export function createPostV1CompanyCreditsCreditIdDecreaseBalance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.V1.companyCredits)[':creditId']['decreaseBalance']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.V1.companyCredits)[':creditId']['decreaseBalance']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CompanyCreditsCreditIdDecreaseBalanceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CompanyCreditsCreditIdIncreaseBalanceMutationKey() {
  return ['V1', '/V1/companyCredits/:creditId/increaseBalance', 'POST'] as const
}

export function getPostV1CompanyCreditsCreditIdIncreaseBalanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1.companyCredits)[':creditId']['increaseBalance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CompanyCreditsCreditIdIncreaseBalanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.companyCredits)[':creditId']['increaseBalance']['$post']
      >,
    ) {
      return parseResponse(
        client.V1.companyCredits[':creditId'].increaseBalance.$post(args, options),
      )
    },
  })
}

export function createPostV1CompanyCreditsCreditIdIncreaseBalance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.V1.companyCredits)[':creditId']['increaseBalance']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.V1.companyCredits)[':creditId']['increaseBalance']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CompanyCreditsCreditIdIncreaseBalanceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1CompanyCreditsIdMutationKey() {
  return ['V1', '/V1/companyCredits/:id', 'PUT'] as const
}

export function getPutV1CompanyCreditsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.companyCredits)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.companyCredits)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CompanyCreditsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.companyCredits)[':id']['$put']>) {
      return parseResponse(client.V1.companyCredits[':id'].$put(args, options))
    },
  })
}

export function createPutV1CompanyCreditsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.companyCredits)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.companyCredits)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CompanyCreditsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1ConfigurableProductsVariationMutationKey() {
  return ['V1', '/V1/configurable-products/variation', 'PUT'] as const
}

export function getPutV1ConfigurableProductsVariationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['configurable-products']['variation']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1)['configurable-products']['variation']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ConfigurableProductsVariationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1)['configurable-products']['variation']['$put']>,
    ) {
      return parseResponse(client.V1['configurable-products'].variation.$put(args, options))
    },
  })
}

export function createPutV1ConfigurableProductsVariation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1)['configurable-products']['variation']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1)['configurable-products']['variation']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ConfigurableProductsVariationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ConfigurableProductsSkuChildMutationKey() {
  return ['V1', '/V1/configurable-products/:sku/child', 'POST'] as const
}

export function getPostV1ConfigurableProductsSkuChildMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['configurable-products'][':sku']['child']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1)['configurable-products'][':sku']['child']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConfigurableProductsSkuChildMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1)['configurable-products'][':sku']['child']['$post']>,
    ) {
      return parseResponse(client.V1['configurable-products'][':sku'].child.$post(args, options))
    },
  })
}

export function createPostV1ConfigurableProductsSkuChild<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1)['configurable-products'][':sku']['child']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1)['configurable-products'][':sku']['child']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ConfigurableProductsSkuChildMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ConfigurableProductsSkuChildrenQueryKey(
  args: InferRequestType<(typeof client.V1)['configurable-products'][':sku']['children']['$get']>,
) {
  return ['V1', '/V1/configurable-products/:sku/children', args] as const
}

export function getV1ConfigurableProductsSkuChildrenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1)['configurable-products'][':sku']['children']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1)['configurable-products'][':sku']['children']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1)['configurable-products'][':sku']['children']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConfigurableProductsSkuChildrenQueryKey>
  >({
    queryKey: getV1ConfigurableProductsSkuChildrenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1['configurable-products'][':sku'].children.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ConfigurableProductsSkuChildren<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1)['configurable-products'][':sku']['children']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1)['configurable-products'][':sku']['children']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1)['configurable-products'][':sku']['children']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ConfigurableProductsSkuChildrenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ConfigurableProductsSkuChildrenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV1ConfigurableProductsSkuChildrenChildSkuMutationKey() {
  return ['V1', '/V1/configurable-products/:sku/children/:childSku', 'DELETE'] as const
}

export function getDeleteV1ConfigurableProductsSkuChildrenChildSkuMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1)['configurable-products'][':sku']['children'][':childSku']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ConfigurableProductsSkuChildrenChildSkuMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['configurable-products'][':sku']['children'][':childSku']['$delete']
      >,
    ) {
      return parseResponse(
        client.V1['configurable-products'][':sku'].children[':childSku'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1ConfigurableProductsSkuChildrenChildSku<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1)['configurable-products'][':sku']['children'][':childSku']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ConfigurableProductsSkuChildrenChildSkuMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ConfigurableProductsSkuOptionsMutationKey() {
  return ['V1', '/V1/configurable-products/:sku/options', 'POST'] as const
}

export function getPostV1ConfigurableProductsSkuOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1)['configurable-products'][':sku']['options']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConfigurableProductsSkuOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['configurable-products'][':sku']['options']['$post']
      >,
    ) {
      return parseResponse(client.V1['configurable-products'][':sku'].options.$post(args, options))
    },
  })
}

export function createPostV1ConfigurableProductsSkuOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.V1)['configurable-products'][':sku']['options']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ConfigurableProductsSkuOptionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ConfigurableProductsSkuOptionsAllQueryKey(
  args: InferRequestType<
    (typeof client.V1)['configurable-products'][':sku']['options']['all']['$get']
  >,
) {
  return ['V1', '/V1/configurable-products/:sku/options/all', args] as const
}

export function getV1ConfigurableProductsSkuOptionsAllQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1)['configurable-products'][':sku']['options']['all']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.V1)['configurable-products'][':sku']['options']['all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ConfigurableProductsSkuOptionsAllQueryKey>
  >({
    queryKey: getV1ConfigurableProductsSkuOptionsAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1['configurable-products'][':sku'].options.all.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ConfigurableProductsSkuOptionsAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1)['configurable-products'][':sku']['options']['all']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1)['configurable-products'][':sku']['options']['all']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ConfigurableProductsSkuOptionsAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ConfigurableProductsSkuOptionsAllQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ConfigurableProductsSkuOptionsIdQueryKey(
  args: InferRequestType<
    (typeof client.V1)['configurable-products'][':sku']['options'][':id']['$get']
  >,
) {
  return ['V1', '/V1/configurable-products/:sku/options/:id', args] as const
}

export function getV1ConfigurableProductsSkuOptionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1)['configurable-products'][':sku']['options'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.V1)['configurable-products'][':sku']['options'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ConfigurableProductsSkuOptionsIdQueryKey>
  >({
    queryKey: getV1ConfigurableProductsSkuOptionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1['configurable-products'][':sku'].options[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ConfigurableProductsSkuOptionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1)['configurable-products'][':sku']['options'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1)['configurable-products'][':sku']['options'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ConfigurableProductsSkuOptionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ConfigurableProductsSkuOptionsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1ConfigurableProductsSkuOptionsIdMutationKey() {
  return ['V1', '/V1/configurable-products/:sku/options/:id', 'PUT'] as const
}

export function getPutV1ConfigurableProductsSkuOptionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1)['configurable-products'][':sku']['options'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ConfigurableProductsSkuOptionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['configurable-products'][':sku']['options'][':id']['$put']
      >,
    ) {
      return parseResponse(
        client.V1['configurable-products'][':sku'].options[':id'].$put(args, options),
      )
    },
  })
}

export function createPutV1ConfigurableProductsSkuOptionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1)['configurable-products'][':sku']['options'][':id']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ConfigurableProductsSkuOptionsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1ConfigurableProductsSkuOptionsIdMutationKey() {
  return ['V1', '/V1/configurable-products/:sku/options/:id', 'DELETE'] as const
}

export function getDeleteV1ConfigurableProductsSkuOptionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1)['configurable-products'][':sku']['options'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ConfigurableProductsSkuOptionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['configurable-products'][':sku']['options'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.V1['configurable-products'][':sku'].options[':id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1ConfigurableProductsSkuOptionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1)['configurable-products'][':sku']['options'][':id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ConfigurableProductsSkuOptionsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CouponsMutationKey() {
  return ['V1', '/V1/coupons', 'POST'] as const
}

export function getPostV1CouponsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.coupons.$post>>>>>,
    TError,
    InferRequestType<typeof client.V1.coupons.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CouponsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.coupons.$post>) {
      return parseResponse(client.V1.coupons.$post(args, options))
    },
  })
}

export function createPostV1Coupons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.coupons.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.V1.coupons.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CouponsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CouponsDeleteByCodesMutationKey() {
  return ['V1', '/V1/coupons/deleteByCodes', 'POST'] as const
}

export function getPostV1CouponsDeleteByCodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.coupons.deleteByCodes.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.V1.coupons.deleteByCodes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CouponsDeleteByCodesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.coupons.deleteByCodes.$post>) {
      return parseResponse(client.V1.coupons.deleteByCodes.$post(args, options))
    },
  })
}

export function createPostV1CouponsDeleteByCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.coupons.deleteByCodes.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.V1.coupons.deleteByCodes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CouponsDeleteByCodesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CouponsDeleteByIdsMutationKey() {
  return ['V1', '/V1/coupons/deleteByIds', 'POST'] as const
}

export function getPostV1CouponsDeleteByIdsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.coupons.deleteByIds.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.V1.coupons.deleteByIds.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CouponsDeleteByIdsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.coupons.deleteByIds.$post>) {
      return parseResponse(client.V1.coupons.deleteByIds.$post(args, options))
    },
  })
}

export function createPostV1CouponsDeleteByIds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.coupons.deleteByIds.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.V1.coupons.deleteByIds.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CouponsDeleteByIdsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CouponsGenerateMutationKey() {
  return ['V1', '/V1/coupons/generate', 'POST'] as const
}

export function getPostV1CouponsGenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.coupons.generate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.V1.coupons.generate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CouponsGenerateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.coupons.generate.$post>) {
      return parseResponse(client.V1.coupons.generate.$post(args, options))
    },
  })
}

export function createPostV1CouponsGenerate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.coupons.generate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.V1.coupons.generate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CouponsGenerateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CouponsSearchQueryKey(
  args: InferRequestType<typeof client.V1.coupons.search.$get>,
) {
  return ['V1', '/V1/coupons/search', args] as const
}

export function getV1CouponsSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.coupons.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.V1.coupons.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.coupons.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CouponsSearchQueryKey>
  >({
    queryKey: getV1CouponsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.coupons.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1CouponsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.coupons.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.coupons.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.coupons.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CouponsSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CouponsSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1CouponsCouponIdQueryKey(
  args: InferRequestType<(typeof client.V1.coupons)[':couponId']['$get']>,
) {
  return ['V1', '/V1/coupons/:couponId', args] as const
}

export function getV1CouponsCouponIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.coupons)[':couponId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.coupons)[':couponId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.coupons)[':couponId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CouponsCouponIdQueryKey>
  >({
    queryKey: getV1CouponsCouponIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.coupons[':couponId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CouponsCouponId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.coupons)[':couponId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.coupons)[':couponId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.coupons)[':couponId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CouponsCouponIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CouponsCouponIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV1CouponsCouponIdMutationKey() {
  return ['V1', '/V1/coupons/:couponId', 'PUT'] as const
}

export function getPutV1CouponsCouponIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.coupons)[':couponId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.coupons)[':couponId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CouponsCouponIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.coupons)[':couponId']['$put']>) {
      return parseResponse(client.V1.coupons[':couponId'].$put(args, options))
    },
  })
}

export function createPutV1CouponsCouponId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.coupons)[':couponId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.coupons)[':couponId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CouponsCouponIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1CouponsCouponIdMutationKey() {
  return ['V1', '/V1/coupons/:couponId', 'DELETE'] as const
}

export function getDeleteV1CouponsCouponIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.coupons)[':couponId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.coupons)[':couponId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CouponsCouponIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.coupons)[':couponId']['$delete']>) {
      return parseResponse(client.V1.coupons[':couponId'].$delete(args, options))
    },
  })
}

export function createDeleteV1CouponsCouponId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.coupons)[':couponId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.coupons)[':couponId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1CouponsCouponIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CreditmemoMutationKey() {
  return ['V1', '/V1/creditmemo', 'POST'] as const
}

export function getPostV1CreditmemoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.creditmemo.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.V1.creditmemo.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CreditmemoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.creditmemo.$post>) {
      return parseResponse(client.V1.creditmemo.$post(args, options))
    },
  })
}

export function createPostV1Creditmemo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.creditmemo.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.V1.creditmemo.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CreditmemoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CreditmemoRefundMutationKey() {
  return ['V1', '/V1/creditmemo/refund', 'POST'] as const
}

export function getPostV1CreditmemoRefundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.creditmemo.refund.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.V1.creditmemo.refund.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CreditmemoRefundMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.creditmemo.refund.$post>) {
      return parseResponse(client.V1.creditmemo.refund.$post(args, options))
    },
  })
}

export function createPostV1CreditmemoRefund<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.creditmemo.refund.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.V1.creditmemo.refund.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CreditmemoRefundMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CreditmemoIdQueryKey(
  args: InferRequestType<(typeof client.V1.creditmemo)[':id']['$get']>,
) {
  return ['V1', '/V1/creditmemo/:id', args] as const
}

export function getV1CreditmemoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.creditmemo)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.creditmemo)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.creditmemo)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CreditmemoIdQueryKey>
  >({
    queryKey: getV1CreditmemoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.creditmemo[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1CreditmemoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.creditmemo)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.creditmemo)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.V1.creditmemo)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CreditmemoIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CreditmemoIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV1CreditmemoIdMutationKey() {
  return ['V1', '/V1/creditmemo/:id', 'PUT'] as const
}

export function getPutV1CreditmemoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.creditmemo)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.creditmemo)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CreditmemoIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.creditmemo)[':id']['$put']>) {
      return parseResponse(client.V1.creditmemo[':id'].$put(args, options))
    },
  })
}

export function createPutV1CreditmemoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.V1.creditmemo)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.creditmemo)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CreditmemoIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CreditmemoIdCommentsQueryKey(
  args: InferRequestType<(typeof client.V1.creditmemo)[':id']['comments']['$get']>,
) {
  return ['V1', '/V1/creditmemo/:id/comments', args] as const
}

export function getV1CreditmemoIdCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.creditmemo)[':id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.creditmemo)[':id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.creditmemo)[':id']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CreditmemoIdCommentsQueryKey>
  >({
    queryKey: getV1CreditmemoIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.creditmemo[':id'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CreditmemoIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.creditmemo)[':id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.creditmemo)[':id']['comments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.creditmemo)[':id']['comments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CreditmemoIdCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CreditmemoIdCommentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1CreditmemoIdCommentsMutationKey() {
  return ['V1', '/V1/creditmemo/:id/comments', 'POST'] as const
}

export function getPostV1CreditmemoIdCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.creditmemo)[':id']['comments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.creditmemo)[':id']['comments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CreditmemoIdCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.creditmemo)[':id']['comments']['$post']>,
    ) {
      return parseResponse(client.V1.creditmemo[':id'].comments.$post(args, options))
    },
  })
}

export function createPostV1CreditmemoIdComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.creditmemo)[':id']['comments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.creditmemo)[':id']['comments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CreditmemoIdCommentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CreditmemoIdEmailsMutationKey() {
  return ['V1', '/V1/creditmemo/:id/emails', 'POST'] as const
}

export function getPostV1CreditmemoIdEmailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.creditmemo)[':id']['emails']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.creditmemo)[':id']['emails']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CreditmemoIdEmailsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.creditmemo)[':id']['emails']['$post']>,
    ) {
      return parseResponse(client.V1.creditmemo[':id'].emails.$post(args, options))
    },
  })
}

export function createPostV1CreditmemoIdEmails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.creditmemo)[':id']['emails']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.creditmemo)[':id']['emails']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CreditmemoIdEmailsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CreditmemosQueryKey(
  args: InferRequestType<typeof client.V1.creditmemos.$get>,
) {
  return ['V1', '/V1/creditmemos', args] as const
}

export function getV1CreditmemosQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.creditmemos.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.V1.creditmemos.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.creditmemos.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CreditmemosQueryKey>
  >({
    queryKey: getV1CreditmemosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.creditmemos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Creditmemos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.creditmemos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.creditmemos.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.creditmemos.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CreditmemosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CreditmemosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1CustomerGroupsMutationKey() {
  return ['V1', '/V1/customerGroups', 'POST'] as const
}

export function getPostV1CustomerGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.customerGroups.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.V1.customerGroups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomerGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.customerGroups.$post>) {
      return parseResponse(client.V1.customerGroups.$post(args, options))
    },
  })
}

export function createPostV1CustomerGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.customerGroups.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.V1.customerGroups.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CustomerGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CustomerGroupsDefaultQueryKey(
  args: InferRequestType<typeof client.V1.customerGroups.default.$get>,
) {
  return ['V1', '/V1/customerGroups/default', args] as const
}

export function getV1CustomerGroupsDefaultQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.V1.customerGroups.default.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.V1.customerGroups.default.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.customerGroups.default.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomerGroupsDefaultQueryKey>
  >({
    queryKey: getV1CustomerGroupsDefaultQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.customerGroups.default.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CustomerGroupsDefault<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.V1.customerGroups.default.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.customerGroups.default.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.customerGroups.default.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomerGroupsDefaultQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CustomerGroupsDefaultQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1CustomerGroupsDefaultIdMutationKey() {
  return ['V1', '/V1/customerGroups/default/:id', 'PUT'] as const
}

export function getPutV1CustomerGroupsDefaultIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.customerGroups.default)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.customerGroups.default)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CustomerGroupsDefaultIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.customerGroups.default)[':id']['$put']>,
    ) {
      return parseResponse(client.V1.customerGroups.default[':id'].$put(args, options))
    },
  })
}

export function createPutV1CustomerGroupsDefaultId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.customerGroups.default)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.customerGroups.default)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CustomerGroupsDefaultIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CustomerGroupsDefaultStoreIdQueryKey(
  args: InferRequestType<(typeof client.V1.customerGroups.default)[':storeId']['$get']>,
) {
  return ['V1', '/V1/customerGroups/default/:storeId', args] as const
}

export function getV1CustomerGroupsDefaultStoreIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.customerGroups.default)[':storeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.customerGroups.default)[':storeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.customerGroups.default)[':storeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomerGroupsDefaultStoreIdQueryKey>
  >({
    queryKey: getV1CustomerGroupsDefaultStoreIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.customerGroups.default[':storeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CustomerGroupsDefaultStoreId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.customerGroups.default)[':storeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.customerGroups.default)[':storeId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.customerGroups.default)[':storeId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomerGroupsDefaultStoreIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CustomerGroupsDefaultStoreIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1CustomerGroupsSearchQueryKey(
  args: InferRequestType<typeof client.V1.customerGroups.search.$get>,
) {
  return ['V1', '/V1/customerGroups/search', args] as const
}

export function getV1CustomerGroupsSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.V1.customerGroups.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.V1.customerGroups.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.customerGroups.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomerGroupsSearchQueryKey>
  >({
    queryKey: getV1CustomerGroupsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.customerGroups.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CustomerGroupsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.V1.customerGroups.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.customerGroups.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.customerGroups.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomerGroupsSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CustomerGroupsSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1CustomerGroupsIdQueryKey(
  args: InferRequestType<(typeof client.V1.customerGroups)[':id']['$get']>,
) {
  return ['V1', '/V1/customerGroups/:id', args] as const
}

export function getV1CustomerGroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.customerGroups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.customerGroups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.customerGroups)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomerGroupsIdQueryKey>
  >({
    queryKey: getV1CustomerGroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.customerGroups[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CustomerGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.customerGroups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.customerGroups)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.customerGroups)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomerGroupsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CustomerGroupsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV1CustomerGroupsIdMutationKey() {
  return ['V1', '/V1/customerGroups/:id', 'PUT'] as const
}

export function getPutV1CustomerGroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.customerGroups)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.customerGroups)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CustomerGroupsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.customerGroups)[':id']['$put']>) {
      return parseResponse(client.V1.customerGroups[':id'].$put(args, options))
    },
  })
}

export function createPutV1CustomerGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.customerGroups)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.customerGroups)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CustomerGroupsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1CustomerGroupsIdMutationKey() {
  return ['V1', '/V1/customerGroups/:id', 'DELETE'] as const
}

export function getDeleteV1CustomerGroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.customerGroups)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.customerGroups)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CustomerGroupsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.customerGroups)[':id']['$delete']>) {
      return parseResponse(client.V1.customerGroups[':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1CustomerGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.customerGroups)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.customerGroups)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1CustomerGroupsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CustomerGroupsIdPermissionsQueryKey(
  args: InferRequestType<(typeof client.V1.customerGroups)[':id']['permissions']['$get']>,
) {
  return ['V1', '/V1/customerGroups/:id/permissions', args] as const
}

export function getV1CustomerGroupsIdPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.customerGroups)[':id']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.customerGroups)[':id']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.customerGroups)[':id']['permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomerGroupsIdPermissionsQueryKey>
  >({
    queryKey: getV1CustomerGroupsIdPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.customerGroups[':id'].permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CustomerGroupsIdPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.customerGroups)[':id']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.customerGroups)[':id']['permissions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.customerGroups)[':id']['permissions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomerGroupsIdPermissionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CustomerGroupsIdPermissionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1CustomersMutationKey() {
  return ['V1', '/V1/customers', 'POST'] as const
}

export function getPostV1CustomersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.V1.customers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.customers.$post>) {
      return parseResponse(client.V1.customers.$post(args, options))
    },
  })
}

export function createPostV1Customers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.V1.customers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CustomersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CustomersAddressesAddressIdQueryKey(
  args: InferRequestType<(typeof client.V1.customers.addresses)[':addressId']['$get']>,
) {
  return ['V1', '/V1/customers/addresses/:addressId', args] as const
}

export function getV1CustomersAddressesAddressIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.customers.addresses)[':addressId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.customers.addresses)[':addressId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.customers.addresses)[':addressId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomersAddressesAddressIdQueryKey>
  >({
    queryKey: getV1CustomersAddressesAddressIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.customers.addresses[':addressId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CustomersAddressesAddressId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.customers.addresses)[':addressId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.customers.addresses)[':addressId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.customers.addresses)[':addressId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomersAddressesAddressIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CustomersAddressesAddressIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1CustomersConfirmMutationKey() {
  return ['V1', '/V1/customers/confirm', 'POST'] as const
}

export function getPostV1CustomersConfirmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.confirm.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.V1.customers.confirm.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomersConfirmMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.customers.confirm.$post>) {
      return parseResponse(client.V1.customers.confirm.$post(args, options))
    },
  })
}

export function createPostV1CustomersConfirm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.confirm.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.V1.customers.confirm.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CustomersConfirmMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CustomersIsEmailAvailableMutationKey() {
  return ['V1', '/V1/customers/isEmailAvailable', 'POST'] as const
}

export function getPostV1CustomersIsEmailAvailableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.isEmailAvailable.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.V1.customers.isEmailAvailable.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomersIsEmailAvailableMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.customers.isEmailAvailable.$post>) {
      return parseResponse(client.V1.customers.isEmailAvailable.$post(args, options))
    },
  })
}

export function createPostV1CustomersIsEmailAvailable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.V1.customers.isEmailAvailable.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.V1.customers.isEmailAvailable.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CustomersIsEmailAvailableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CustomersMeQueryKey() {
  return ['V1', '/V1/customers/me'] as const
}

export function getV1CustomersMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.me.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.me.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomersMeQueryKey>
  >({
    queryKey: getV1CustomersMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.customers.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1CustomersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.me.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomersMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CustomersMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPutV1CustomersMeMutationKey() {
  return ['V1', '/V1/customers/me', 'PUT'] as const
}

export function getPutV1CustomersMeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.me.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.V1.customers.me.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CustomersMeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.customers.me.$put>) {
      return parseResponse(client.V1.customers.me.$put(args, options))
    },
  })
}

export function createPutV1CustomersMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.me.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.V1.customers.me.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CustomersMeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1CustomersMeActivateMutationKey() {
  return ['V1', '/V1/customers/me/activate', 'PUT'] as const
}

export function getPutV1CustomersMeActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.me.activate.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.V1.customers.me.activate.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CustomersMeActivateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.customers.me.activate.$put>) {
      return parseResponse(client.V1.customers.me.activate.$put(args, options))
    },
  })
}

export function createPutV1CustomersMeActivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.me.activate.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.V1.customers.me.activate.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CustomersMeActivateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CustomersMeBillingAddressQueryKey() {
  return ['V1', '/V1/customers/me/billingAddress'] as const
}

export function getV1CustomersMeBillingAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.me.billingAddress.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.me.billingAddress.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomersMeBillingAddressQueryKey>
  >({
    queryKey: getV1CustomersMeBillingAddressQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.customers.me.billingAddress.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CustomersMeBillingAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.me.billingAddress.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.V1.customers.me.billingAddress.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomersMeBillingAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CustomersMeBillingAddressQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPutV1CustomersMePasswordMutationKey() {
  return ['V1', '/V1/customers/me/password', 'PUT'] as const
}

export function getPutV1CustomersMePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.me.password.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.V1.customers.me.password.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CustomersMePasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.customers.me.password.$put>) {
      return parseResponse(client.V1.customers.me.password.$put(args, options))
    },
  })
}

export function createPutV1CustomersMePassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.me.password.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.V1.customers.me.password.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CustomersMePasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CustomersMeShippingAddressQueryKey() {
  return ['V1', '/V1/customers/me/shippingAddress'] as const
}

export function getV1CustomersMeShippingAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.me.shippingAddress.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.V1.customers.me.shippingAddress.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomersMeShippingAddressQueryKey>
  >({
    queryKey: getV1CustomersMeShippingAddressQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.customers.me.shippingAddress.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CustomersMeShippingAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.me.shippingAddress.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.V1.customers.me.shippingAddress.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomersMeShippingAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CustomersMeShippingAddressQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1CustomersPasswordMutationKey() {
  return ['V1', '/V1/customers/password', 'PUT'] as const
}

export function getPutV1CustomersPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.password.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.V1.customers.password.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CustomersPasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.customers.password.$put>) {
      return parseResponse(client.V1.customers.password.$put(args, options))
    },
  })
}

export function createPutV1CustomersPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.password.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.V1.customers.password.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CustomersPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CustomersResetPasswordMutationKey() {
  return ['V1', '/V1/customers/resetPassword', 'POST'] as const
}

export function getPostV1CustomersResetPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.resetPassword.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.V1.customers.resetPassword.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomersResetPasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.customers.resetPassword.$post>) {
      return parseResponse(client.V1.customers.resetPassword.$post(args, options))
    },
  })
}

export function createPostV1CustomersResetPassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.V1.customers.resetPassword.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.V1.customers.resetPassword.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CustomersResetPasswordMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CustomersSearchQueryKey(
  args: InferRequestType<typeof client.V1.customers.search.$get>,
) {
  return ['V1', '/V1/customers/search', args] as const
}

export function getV1CustomersSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.V1.customers.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomersSearchQueryKey>
  >({
    queryKey: getV1CustomersSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.customers.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1CustomersSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.customers.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomersSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CustomersSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV1CustomersValidateMutationKey() {
  return ['V1', '/V1/customers/validate', 'PUT'] as const
}

export function getPutV1CustomersValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.validate.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.V1.customers.validate.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CustomersValidateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.customers.validate.$put>) {
      return parseResponse(client.V1.customers.validate.$put(args, options))
    },
  })
}

export function createPutV1CustomersValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.customers.validate.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.V1.customers.validate.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CustomersValidateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CustomersCustomerIdQueryKey(
  args: InferRequestType<(typeof client.V1.customers)[':customerId']['$get']>,
) {
  return ['V1', '/V1/customers/:customerId', args] as const
}

export function getV1CustomersCustomerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.customers)[':customerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.customers)[':customerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.customers)[':customerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomersCustomerIdQueryKey>
  >({
    queryKey: getV1CustomersCustomerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.customers[':customerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CustomersCustomerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.customers)[':customerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.customers)[':customerId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.customers)[':customerId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomersCustomerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CustomersCustomerIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1CustomersCustomerIdMutationKey() {
  return ['V1', '/V1/customers/:customerId', 'PUT'] as const
}

export function getPutV1CustomersCustomerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.customers)[':customerId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.customers)[':customerId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CustomersCustomerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.customers)[':customerId']['$put']>) {
      return parseResponse(client.V1.customers[':customerId'].$put(args, options))
    },
  })
}

export function createPutV1CustomersCustomerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.customers)[':customerId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.customers)[':customerId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CustomersCustomerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1CustomersCustomerIdMutationKey() {
  return ['V1', '/V1/customers/:customerId', 'DELETE'] as const
}

export function getDeleteV1CustomersCustomerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.customers)[':customerId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.customers)[':customerId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CustomersCustomerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.customers)[':customerId']['$delete']>,
    ) {
      return parseResponse(client.V1.customers[':customerId'].$delete(args, options))
    },
  })
}

export function createDeleteV1CustomersCustomerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.customers)[':customerId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.customers)[':customerId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1CustomersCustomerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CustomersCustomerIdBillingAddressQueryKey(
  args: InferRequestType<(typeof client.V1.customers)[':customerId']['billingAddress']['$get']>,
) {
  return ['V1', '/V1/customers/:customerId/billingAddress', args] as const
}

export function getV1CustomersCustomerIdBillingAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.customers)[':customerId']['billingAddress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.customers)[':customerId']['billingAddress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.customers)[':customerId']['billingAddress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomersCustomerIdBillingAddressQueryKey>
  >({
    queryKey: getV1CustomersCustomerIdBillingAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.customers[':customerId'].billingAddress.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CustomersCustomerIdBillingAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.customers)[':customerId']['billingAddress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1.customers)[':customerId']['billingAddress']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.customers)[':customerId']['billingAddress']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomersCustomerIdBillingAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CustomersCustomerIdBillingAddressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1CustomersCustomerIdCartsMutationKey() {
  return ['V1', '/V1/customers/:customerId/carts', 'POST'] as const
}

export function getPostV1CustomersCustomerIdCartsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.customers)[':customerId']['carts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.customers)[':customerId']['carts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomersCustomerIdCartsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.customers)[':customerId']['carts']['$post']>,
    ) {
      return parseResponse(client.V1.customers[':customerId'].carts.$post(args, options))
    },
  })
}

export function createPostV1CustomersCustomerIdCarts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.customers)[':customerId']['carts']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.customers)[':customerId']['carts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CustomersCustomerIdCartsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CustomersCustomerIdConfirmQueryKey(
  args: InferRequestType<(typeof client.V1.customers)[':customerId']['confirm']['$get']>,
) {
  return ['V1', '/V1/customers/:customerId/confirm', args] as const
}

export function getV1CustomersCustomerIdConfirmQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.customers)[':customerId']['confirm']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.customers)[':customerId']['confirm']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.customers)[':customerId']['confirm']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomersCustomerIdConfirmQueryKey>
  >({
    queryKey: getV1CustomersCustomerIdConfirmQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.customers[':customerId'].confirm.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CustomersCustomerIdConfirm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.customers)[':customerId']['confirm']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.customers)[':customerId']['confirm']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.customers)[':customerId']['confirm']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomersCustomerIdConfirmQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CustomersCustomerIdConfirmQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1CustomersCustomerIdPasswordResetLinkTokenResetPasswordLinkTokenQueryKey(
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

export function getV1CustomersCustomerIdPasswordResetLinkTokenResetPasswordLinkTokenQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.V1.customers)[':customerId']['password']['resetLinkToken'][':resetPasswordLinkToken']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1CustomersCustomerIdPasswordResetLinkTokenResetPasswordLinkTokenQueryKey>
  >({
    queryKey: getV1CustomersCustomerIdPasswordResetLinkTokenResetPasswordLinkTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.customers[':customerId'].password.resetLinkToken[':resetPasswordLinkToken'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1CustomersCustomerIdPasswordResetLinkTokenResetPasswordLinkToken<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1.customers)[':customerId']['password']['resetLinkToken'][':resetPasswordLinkToken']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getV1CustomersCustomerIdPasswordResetLinkTokenResetPasswordLinkTokenQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CustomersCustomerIdPasswordResetLinkTokenResetPasswordLinkTokenQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1CustomersCustomerIdPermissionsReadonlyQueryKey(
  args: InferRequestType<
    (typeof client.V1.customers)[':customerId']['permissions']['readonly']['$get']
  >,
) {
  return ['V1', '/V1/customers/:customerId/permissions/readonly', args] as const
}

export function getV1CustomersCustomerIdPermissionsReadonlyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1.customers)[':customerId']['permissions']['readonly']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.V1.customers)[':customerId']['permissions']['readonly']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1CustomersCustomerIdPermissionsReadonlyQueryKey>
  >({
    queryKey: getV1CustomersCustomerIdPermissionsReadonlyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.customers[':customerId'].permissions.readonly.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CustomersCustomerIdPermissionsReadonly<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1.customers)[':customerId']['permissions']['readonly']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1.customers)[':customerId']['permissions']['readonly']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1CustomersCustomerIdPermissionsReadonlyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CustomersCustomerIdPermissionsReadonlyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1CustomersCustomerIdShippingAddressQueryKey(
  args: InferRequestType<(typeof client.V1.customers)[':customerId']['shippingAddress']['$get']>,
) {
  return ['V1', '/V1/customers/:customerId/shippingAddress', args] as const
}

export function getV1CustomersCustomerIdShippingAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.customers)[':customerId']['shippingAddress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.customers)[':customerId']['shippingAddress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.customers)[':customerId']['shippingAddress']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomersCustomerIdShippingAddressQueryKey>
  >({
    queryKey: getV1CustomersCustomerIdShippingAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.customers[':customerId'].shippingAddress.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CustomersCustomerIdShippingAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.customers)[':customerId']['shippingAddress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1.customers)[':customerId']['shippingAddress']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.customers)[':customerId']['shippingAddress']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomersCustomerIdShippingAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CustomersCustomerIdShippingAddressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1CustomersEmailActivateMutationKey() {
  return ['V1', '/V1/customers/:email/activate', 'PUT'] as const
}

export function getPutV1CustomersEmailActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.customers)[':email']['activate']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.customers)[':email']['activate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CustomersEmailActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.customers)[':email']['activate']['$put']>,
    ) {
      return parseResponse(client.V1.customers[':email'].activate.$put(args, options))
    },
  })
}

export function createPutV1CustomersEmailActivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.customers)[':email']['activate']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.customers)[':email']['activate']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CustomersEmailActivateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1DirectoryCountriesQueryKey() {
  return ['V1', '/V1/directory/countries'] as const
}

export function getV1DirectoryCountriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.directory.countries.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.directory.countries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DirectoryCountriesQueryKey>
  >({
    queryKey: getV1DirectoryCountriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.directory.countries.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1DirectoryCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.directory.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.directory.countries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DirectoryCountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1DirectoryCountriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1DirectoryCountriesCountryIdQueryKey(
  args: InferRequestType<(typeof client.V1.directory.countries)[':countryId']['$get']>,
) {
  return ['V1', '/V1/directory/countries/:countryId', args] as const
}

export function getV1DirectoryCountriesCountryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.directory.countries)[':countryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.directory.countries)[':countryId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.directory.countries)[':countryId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DirectoryCountriesCountryIdQueryKey>
  >({
    queryKey: getV1DirectoryCountriesCountryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.directory.countries[':countryId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1DirectoryCountriesCountryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.directory.countries)[':countryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.directory.countries)[':countryId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.directory.countries)[':countryId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DirectoryCountriesCountryIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1DirectoryCountriesCountryIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1DirectoryCurrencyQueryKey() {
  return ['V1', '/V1/directory/currency'] as const
}

export function getV1DirectoryCurrencyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.directory.currency.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.directory.currency.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DirectoryCurrencyQueryKey>
  >({
    queryKey: getV1DirectoryCurrencyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.directory.currency.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1DirectoryCurrency<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.directory.currency.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.directory.currency.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DirectoryCurrencyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1DirectoryCurrencyQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV1EavAttributeSetsMutationKey() {
  return ['V1', '/V1/eav/attribute-sets', 'POST'] as const
}

export function getPostV1EavAttributeSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.eav)['attribute-sets']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.eav)['attribute-sets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EavAttributeSetsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.eav)['attribute-sets']['$post']>) {
      return parseResponse(client.V1.eav['attribute-sets'].$post(args, options))
    },
  })
}

export function createPostV1EavAttributeSets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.eav)['attribute-sets']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.eav)['attribute-sets']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1EavAttributeSetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1EavAttributeSetsListQueryKey(
  args: InferRequestType<(typeof client.V1.eav)['attribute-sets']['list']['$get']>,
) {
  return ['V1', '/V1/eav/attribute-sets/list', args] as const
}

export function getV1EavAttributeSetsListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.eav)['attribute-sets']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.eav)['attribute-sets']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.eav)['attribute-sets']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EavAttributeSetsListQueryKey>
  >({
    queryKey: getV1EavAttributeSetsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.eav['attribute-sets'].list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1EavAttributeSetsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.eav)['attribute-sets']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.eav)['attribute-sets']['list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.eav)['attribute-sets']['list']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EavAttributeSetsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1EavAttributeSetsListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1EavAttributeSetsAttributeSetIdQueryKey(
  args: InferRequestType<(typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$get']>,
) {
  return ['V1', '/V1/eav/attribute-sets/:attributeSetId', args] as const
}

export function getV1EavAttributeSetsAttributeSetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EavAttributeSetsAttributeSetIdQueryKey>
  >({
    queryKey: getV1EavAttributeSetsAttributeSetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.eav['attribute-sets'][':attributeSetId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1EavAttributeSetsAttributeSetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EavAttributeSetsAttributeSetIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1EavAttributeSetsAttributeSetIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1EavAttributeSetsAttributeSetIdMutationKey() {
  return ['V1', '/V1/eav/attribute-sets/:attributeSetId', 'PUT'] as const
}

export function getPutV1EavAttributeSetsAttributeSetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1EavAttributeSetsAttributeSetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$put']>,
    ) {
      return parseResponse(client.V1.eav['attribute-sets'][':attributeSetId'].$put(args, options))
    },
  })
}

export function createPutV1EavAttributeSetsAttributeSetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1EavAttributeSetsAttributeSetIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1EavAttributeSetsAttributeSetIdMutationKey() {
  return ['V1', '/V1/eav/attribute-sets/:attributeSetId', 'DELETE'] as const
}

export function getDeleteV1EavAttributeSetsAttributeSetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1EavAttributeSetsAttributeSetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$delete']
      >,
    ) {
      return parseResponse(
        client.V1.eav['attribute-sets'][':attributeSetId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1EavAttributeSetsAttributeSetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.V1.eav)['attribute-sets'][':attributeSetId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1EavAttributeSetsAttributeSetIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1GiftWrappingsQueryKey(
  args: InferRequestType<(typeof client.V1)['gift-wrappings']['$get']>,
) {
  return ['V1', '/V1/gift-wrappings', args] as const
}

export function getV1GiftWrappingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1)['gift-wrappings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1)['gift-wrappings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1)['gift-wrappings']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GiftWrappingsQueryKey>
  >({
    queryKey: getV1GiftWrappingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1['gift-wrappings'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1GiftWrappings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1)['gift-wrappings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1)['gift-wrappings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.V1)['gift-wrappings']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1GiftWrappingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1GiftWrappingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1GiftWrappingsMutationKey() {
  return ['V1', '/V1/gift-wrappings', 'POST'] as const
}

export function getPostV1GiftWrappingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1)['gift-wrappings']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.V1)['gift-wrappings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GiftWrappingsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1)['gift-wrappings']['$post']>) {
      return parseResponse(client.V1['gift-wrappings'].$post(args, options))
    },
  })
}

export function createPostV1GiftWrappings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.V1)['gift-wrappings']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.V1)['gift-wrappings']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1GiftWrappingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1GiftWrappingsIdQueryKey(
  args: InferRequestType<(typeof client.V1)['gift-wrappings'][':id']['$get']>,
) {
  return ['V1', '/V1/gift-wrappings/:id', args] as const
}

export function getV1GiftWrappingsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1)['gift-wrappings'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1)['gift-wrappings'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['gift-wrappings'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GiftWrappingsIdQueryKey>
  >({
    queryKey: getV1GiftWrappingsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1['gift-wrappings'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1GiftWrappingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1)['gift-wrappings'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1)['gift-wrappings'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1)['gift-wrappings'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1GiftWrappingsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1GiftWrappingsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV1GiftWrappingsIdMutationKey() {
  return ['V1', '/V1/gift-wrappings/:id', 'DELETE'] as const
}

export function getDeleteV1GiftWrappingsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['gift-wrappings'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1)['gift-wrappings'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1GiftWrappingsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1)['gift-wrappings'][':id']['$delete']>,
    ) {
      return parseResponse(client.V1['gift-wrappings'][':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1GiftWrappingsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1)['gift-wrappings'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1)['gift-wrappings'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1GiftWrappingsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1GiftWrappingsWrappingIdMutationKey() {
  return ['V1', '/V1/gift-wrappings/:wrappingId', 'PUT'] as const
}

export function getPutV1GiftWrappingsWrappingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['gift-wrappings'][':wrappingId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1)['gift-wrappings'][':wrappingId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1GiftWrappingsWrappingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1)['gift-wrappings'][':wrappingId']['$put']>,
    ) {
      return parseResponse(client.V1['gift-wrappings'][':wrappingId'].$put(args, options))
    },
  })
}

export function createPutV1GiftWrappingsWrappingId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1)['gift-wrappings'][':wrappingId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1)['gift-wrappings'][':wrappingId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1GiftWrappingsWrappingIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1GiftregistryMineEstimateShippingMethodsMutationKey() {
  return ['V1', '/V1/giftregistry/mine/estimate-shipping-methods', 'POST'] as const
}

export function getPostV1GiftregistryMineEstimateShippingMethodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1.giftregistry.mine)['estimate-shipping-methods']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GiftregistryMineEstimateShippingMethodsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.giftregistry.mine)['estimate-shipping-methods']['$post']
      >,
    ) {
      return parseResponse(
        client.V1.giftregistry.mine['estimate-shipping-methods'].$post(args, options),
      )
    },
  })
}

export function createPostV1GiftregistryMineEstimateShippingMethods<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.V1.giftregistry.mine)['estimate-shipping-methods']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.V1.giftregistry.mine)['estimate-shipping-methods']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1GiftregistryMineEstimateShippingMethodsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1GuestCartsMutationKey() {
  return ['V1', '/V1/guest-carts', 'POST'] as const
}

export function getPostV1GuestCartsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1)['guest-carts']['$post']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1GuestCartsMutationKey(),
    async mutationFn() {
      return parseResponse(client.V1['guest-carts'].$post(undefined, options))
    },
  })
}

export function createPostV1GuestCarts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.V1)['guest-carts']['$post']>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1GuestCartsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1GuestCartsCartIdQueryKey(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['$get']>,
) {
  return ['V1', '/V1/guest-carts/:cartId', args] as const
}

export function getV1GuestCartsCartIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GuestCartsCartIdQueryKey>
  >({
    queryKey: getV1GuestCartsCartIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1['guest-carts'][':cartId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1GuestCartsCartId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1GuestCartsCartIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1GuestCartsCartIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV1GuestCartsCartIdMutationKey() {
  return ['V1', '/V1/guest-carts/:cartId', 'PUT'] as const
}

export function getPutV1GuestCartsCartIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1GuestCartsCartIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['$put']>) {
      return parseResponse(client.V1['guest-carts'][':cartId'].$put(args, options))
    },
  })
}

export function createPutV1GuestCartsCartId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1GuestCartsCartIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1GuestCartsCartIdBillingAddressQueryKey(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['billing-address']['$get']>,
) {
  return ['V1', '/V1/guest-carts/:cartId/billing-address', args] as const
}

export function getV1GuestCartsCartIdBillingAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['billing-address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['billing-address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1)['guest-carts'][':cartId']['billing-address']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GuestCartsCartIdBillingAddressQueryKey>
  >({
    queryKey: getV1GuestCartsCartIdBillingAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1['guest-carts'][':cartId']['billing-address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1GuestCartsCartIdBillingAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['billing-address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['billing-address']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1)['guest-carts'][':cartId']['billing-address']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1GuestCartsCartIdBillingAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1GuestCartsCartIdBillingAddressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1GuestCartsCartIdBillingAddressMutationKey() {
  return ['V1', '/V1/guest-carts/:cartId/billing-address', 'POST'] as const
}

export function getPostV1GuestCartsCartIdBillingAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['billing-address']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GuestCartsCartIdBillingAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['guest-carts'][':cartId']['billing-address']['$post']
      >,
    ) {
      return parseResponse(
        client.V1['guest-carts'][':cartId']['billing-address'].$post(args, options),
      )
    },
  })
}

export function createPostV1GuestCartsCartIdBillingAddress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['billing-address']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1GuestCartsCartIdBillingAddressMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1GuestCartsCartIdCheckoutFieldsMutationKey() {
  return ['V1', '/V1/guest-carts/:cartId/checkout-fields', 'POST'] as const
}

export function getPostV1GuestCartsCartIdCheckoutFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['checkout-fields']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GuestCartsCartIdCheckoutFieldsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['guest-carts'][':cartId']['checkout-fields']['$post']
      >,
    ) {
      return parseResponse(
        client.V1['guest-carts'][':cartId']['checkout-fields'].$post(args, options),
      )
    },
  })
}

export function createPostV1GuestCartsCartIdCheckoutFields<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['checkout-fields']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1GuestCartsCartIdCheckoutFieldsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1GuestCartsCartIdCollectTotalsMutationKey() {
  return ['V1', '/V1/guest-carts/:cartId/collect-totals', 'PUT'] as const
}

export function getPutV1GuestCartsCartIdCollectTotalsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['collect-totals']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1GuestCartsCartIdCollectTotalsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['guest-carts'][':cartId']['collect-totals']['$put']
      >,
    ) {
      return parseResponse(
        client.V1['guest-carts'][':cartId']['collect-totals'].$put(args, options),
      )
    },
  })
}

export function createPutV1GuestCartsCartIdCollectTotals<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['collect-totals']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1GuestCartsCartIdCollectTotalsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1GuestCartsCartIdCollectionPointSearchRequestMutationKey() {
  return ['V1', '/V1/guest-carts/:cartId/collection-point/search-request', 'PUT'] as const
}

export function getPutV1GuestCartsCartIdCollectionPointSearchRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1)['guest-carts'][':cartId']['collection-point']['search-request']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1GuestCartsCartIdCollectionPointSearchRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['guest-carts'][':cartId']['collection-point']['search-request']['$put']
      >,
    ) {
      return parseResponse(
        client.V1['guest-carts'][':cartId']['collection-point']['search-request'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutV1GuestCartsCartIdCollectionPointSearchRequest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1)['guest-carts'][':cartId']['collection-point']['search-request']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1GuestCartsCartIdCollectionPointSearchRequestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1GuestCartsCartIdCollectionPointSearchRequestMutationKey() {
  return ['V1', '/V1/guest-carts/:cartId/collection-point/search-request', 'DELETE'] as const
}

export function getDeleteV1GuestCartsCartIdCollectionPointSearchRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1)['guest-carts'][':cartId']['collection-point']['search-request']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1GuestCartsCartIdCollectionPointSearchRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['guest-carts'][':cartId']['collection-point']['search-request']['$delete']
      >,
    ) {
      return parseResponse(
        client.V1['guest-carts'][':cartId']['collection-point']['search-request'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteV1GuestCartsCartIdCollectionPointSearchRequest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1)['guest-carts'][':cartId']['collection-point']['search-request']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1GuestCartsCartIdCollectionPointSearchRequestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1GuestCartsCartIdCollectionPointSearchResultQueryKey(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['collection-point']['search-result']['$get']
  >,
) {
  return ['V1', '/V1/guest-carts/:cartId/collection-point/search-result', args] as const
}

export function getV1GuestCartsCartIdCollectionPointSearchResultQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['collection-point']['search-result']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1GuestCartsCartIdCollectionPointSearchResultQueryKey>
  >({
    queryKey: getV1GuestCartsCartIdCollectionPointSearchResultQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1['guest-carts'][':cartId']['collection-point']['search-result'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1GuestCartsCartIdCollectionPointSearchResult<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['collection-point']['search-result']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1GuestCartsCartIdCollectionPointSearchResultQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1GuestCartsCartIdCollectionPointSearchResultQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostV1GuestCartsCartIdCollectionPointSelectMutationKey() {
  return ['V1', '/V1/guest-carts/:cartId/collection-point/select', 'POST'] as const
}

export function getPostV1GuestCartsCartIdCollectionPointSelectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1)['guest-carts'][':cartId']['collection-point']['select']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1GuestCartsCartIdCollectionPointSelectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['guest-carts'][':cartId']['collection-point']['select']['$post']
      >,
    ) {
      return parseResponse(
        client.V1['guest-carts'][':cartId']['collection-point'].select.$post(args, options),
      )
    },
  })
}

export function createPostV1GuestCartsCartIdCollectionPointSelect<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1)['guest-carts'][':cartId']['collection-point']['select']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1GuestCartsCartIdCollectionPointSelectMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1GuestCartsCartIdCouponsQueryKey(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['coupons']['$get']>,
) {
  return ['V1', '/V1/guest-carts/:cartId/coupons', args] as const
}

export function getV1GuestCartsCartIdCouponsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['coupons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['coupons']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['coupons']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GuestCartsCartIdCouponsQueryKey>
  >({
    queryKey: getV1GuestCartsCartIdCouponsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1['guest-carts'][':cartId'].coupons.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1GuestCartsCartIdCoupons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['coupons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['coupons']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['coupons']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1GuestCartsCartIdCouponsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1GuestCartsCartIdCouponsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV1GuestCartsCartIdCouponsMutationKey() {
  return ['V1', '/V1/guest-carts/:cartId/coupons', 'DELETE'] as const
}

export function getDeleteV1GuestCartsCartIdCouponsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['coupons']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['coupons']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1GuestCartsCartIdCouponsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['coupons']['$delete']>,
    ) {
      return parseResponse(client.V1['guest-carts'][':cartId'].coupons.$delete(args, options))
    },
  })
}

export function createDeleteV1GuestCartsCartIdCoupons<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1)['guest-carts'][':cartId']['coupons']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['coupons']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1GuestCartsCartIdCouponsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1GuestCartsCartIdCouponsCouponCodeMutationKey() {
  return ['V1', '/V1/guest-carts/:cartId/coupons/:couponCode', 'PUT'] as const
}

export function getPutV1GuestCartsCartIdCouponsCouponCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1)['guest-carts'][':cartId']['coupons'][':couponCode']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1GuestCartsCartIdCouponsCouponCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['guest-carts'][':cartId']['coupons'][':couponCode']['$put']
      >,
    ) {
      return parseResponse(
        client.V1['guest-carts'][':cartId'].coupons[':couponCode'].$put(args, options),
      )
    },
  })
}

export function createPutV1GuestCartsCartIdCouponsCouponCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1)['guest-carts'][':cartId']['coupons'][':couponCode']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1GuestCartsCartIdCouponsCouponCodeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1GuestCartsCartIdDeliveryOptionMutationKey() {
  return ['V1', '/V1/guest-carts/:cartId/delivery-option', 'POST'] as const
}

export function getPostV1GuestCartsCartIdDeliveryOptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['delivery-option']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GuestCartsCartIdDeliveryOptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['guest-carts'][':cartId']['delivery-option']['$post']
      >,
    ) {
      return parseResponse(
        client.V1['guest-carts'][':cartId']['delivery-option'].$post(args, options),
      )
    },
  })
}

export function createPostV1GuestCartsCartIdDeliveryOption<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['delivery-option']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1GuestCartsCartIdDeliveryOptionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1GuestCartsCartIdEstimateShippingMethodsMutationKey() {
  return ['V1', '/V1/guest-carts/:cartId/estimate-shipping-methods', 'POST'] as const
}

export function getPostV1GuestCartsCartIdEstimateShippingMethodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1)['guest-carts'][':cartId']['estimate-shipping-methods']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1GuestCartsCartIdEstimateShippingMethodsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['guest-carts'][':cartId']['estimate-shipping-methods']['$post']
      >,
    ) {
      return parseResponse(
        client.V1['guest-carts'][':cartId']['estimate-shipping-methods'].$post(args, options),
      )
    },
  })
}

export function createPostV1GuestCartsCartIdEstimateShippingMethods<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1)['guest-carts'][':cartId']['estimate-shipping-methods']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1GuestCartsCartIdEstimateShippingMethodsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1GuestCartsCartIdGiftMessageQueryKey(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['gift-message']['$get']>,
) {
  return ['V1', '/V1/guest-carts/:cartId/gift-message', args] as const
}

export function getV1GuestCartsCartIdGiftMessageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['gift-message']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['gift-message']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['gift-message']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GuestCartsCartIdGiftMessageQueryKey>
  >({
    queryKey: getV1GuestCartsCartIdGiftMessageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1['guest-carts'][':cartId']['gift-message'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1GuestCartsCartIdGiftMessage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['gift-message']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['gift-message']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1)['guest-carts'][':cartId']['gift-message']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1GuestCartsCartIdGiftMessageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1GuestCartsCartIdGiftMessageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1GuestCartsCartIdGiftMessageMutationKey() {
  return ['V1', '/V1/guest-carts/:cartId/gift-message', 'POST'] as const
}

export function getPostV1GuestCartsCartIdGiftMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['gift-message']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['gift-message']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GuestCartsCartIdGiftMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['gift-message']['$post']>,
    ) {
      return parseResponse(client.V1['guest-carts'][':cartId']['gift-message'].$post(args, options))
    },
  })
}

export function createPostV1GuestCartsCartIdGiftMessage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1)['guest-carts'][':cartId']['gift-message']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['gift-message']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1GuestCartsCartIdGiftMessageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1GuestCartsCartIdGiftMessageItemIdQueryKey(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['gift-message'][':itemId']['$get']
  >,
) {
  return ['V1', '/V1/guest-carts/:cartId/gift-message/:itemId', args] as const
}

export function getV1GuestCartsCartIdGiftMessageItemIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['gift-message'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1GuestCartsCartIdGiftMessageItemIdQueryKey>
  >({
    queryKey: getV1GuestCartsCartIdGiftMessageItemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1['guest-carts'][':cartId']['gift-message'][':itemId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1GuestCartsCartIdGiftMessageItemId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['gift-message'][':itemId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1GuestCartsCartIdGiftMessageItemIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1GuestCartsCartIdGiftMessageItemIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1GuestCartsCartIdGiftMessageItemIdMutationKey() {
  return ['V1', '/V1/guest-carts/:cartId/gift-message/:itemId', 'POST'] as const
}

export function getPostV1GuestCartsCartIdGiftMessageItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1)['guest-carts'][':cartId']['gift-message'][':itemId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1GuestCartsCartIdGiftMessageItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['guest-carts'][':cartId']['gift-message'][':itemId']['$post']
      >,
    ) {
      return parseResponse(
        client.V1['guest-carts'][':cartId']['gift-message'][':itemId'].$post(args, options),
      )
    },
  })
}

export function createPostV1GuestCartsCartIdGiftMessageItemId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1)['guest-carts'][':cartId']['gift-message'][':itemId']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1GuestCartsCartIdGiftMessageItemIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1GuestCartsCartIdItemsQueryKey(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['items']['$get']>,
) {
  return ['V1', '/V1/guest-carts/:cartId/items', args] as const
}

export function getV1GuestCartsCartIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GuestCartsCartIdItemsQueryKey>
  >({
    queryKey: getV1GuestCartsCartIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1['guest-carts'][':cartId'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1GuestCartsCartIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['items']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['items']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1GuestCartsCartIdItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1GuestCartsCartIdItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1GuestCartsCartIdItemsMutationKey() {
  return ['V1', '/V1/guest-carts/:cartId/items', 'POST'] as const
}

export function getPostV1GuestCartsCartIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['items']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GuestCartsCartIdItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['items']['$post']>,
    ) {
      return parseResponse(client.V1['guest-carts'][':cartId'].items.$post(args, options))
    },
  })
}

export function createPostV1GuestCartsCartIdItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['items']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['items']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1GuestCartsCartIdItemsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1GuestCartsCartIdItemsItemIdMutationKey() {
  return ['V1', '/V1/guest-carts/:cartId/items/:itemId', 'PUT'] as const
}

export function getPutV1GuestCartsCartIdItemsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['items'][':itemId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1GuestCartsCartIdItemsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['guest-carts'][':cartId']['items'][':itemId']['$put']
      >,
    ) {
      return parseResponse(client.V1['guest-carts'][':cartId'].items[':itemId'].$put(args, options))
    },
  })
}

export function createPutV1GuestCartsCartIdItemsItemId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['items'][':itemId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1GuestCartsCartIdItemsItemIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1GuestCartsCartIdItemsItemIdMutationKey() {
  return ['V1', '/V1/guest-carts/:cartId/items/:itemId', 'DELETE'] as const
}

export function getDeleteV1GuestCartsCartIdItemsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['items'][':itemId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1GuestCartsCartIdItemsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['guest-carts'][':cartId']['items'][':itemId']['$delete']
      >,
    ) {
      return parseResponse(
        client.V1['guest-carts'][':cartId'].items[':itemId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1GuestCartsCartIdItemsItemId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.V1)['guest-carts'][':cartId']['items'][':itemId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.V1)['guest-carts'][':cartId']['items'][':itemId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1GuestCartsCartIdItemsItemIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1GuestCartsCartIdOrderMutationKey() {
  return ['V1', '/V1/guest-carts/:cartId/order', 'PUT'] as const
}

export function getPutV1GuestCartsCartIdOrderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['order']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['order']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1GuestCartsCartIdOrderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['order']['$put']>,
    ) {
      return parseResponse(client.V1['guest-carts'][':cartId'].order.$put(args, options))
    },
  })
}

export function createPutV1GuestCartsCartIdOrder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['order']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['order']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1GuestCartsCartIdOrderMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1GuestCartsCartIdPaymentInformationQueryKey(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['payment-information']['$get']
  >,
) {
  return ['V1', '/V1/guest-carts/:cartId/payment-information', args] as const
}

export function getV1GuestCartsCartIdPaymentInformationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1)['guest-carts'][':cartId']['payment-information']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['payment-information']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1)['guest-carts'][':cartId']['payment-information']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GuestCartsCartIdPaymentInformationQueryKey>
  >({
    queryKey: getV1GuestCartsCartIdPaymentInformationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1['guest-carts'][':cartId']['payment-information'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1GuestCartsCartIdPaymentInformation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1)['guest-carts'][':cartId']['payment-information']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['payment-information']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1GuestCartsCartIdPaymentInformationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1GuestCartsCartIdPaymentInformationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1GuestCartsCartIdPaymentInformationMutationKey() {
  return ['V1', '/V1/guest-carts/:cartId/payment-information', 'POST'] as const
}

export function getPostV1GuestCartsCartIdPaymentInformationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['payment-information']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GuestCartsCartIdPaymentInformationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['guest-carts'][':cartId']['payment-information']['$post']
      >,
    ) {
      return parseResponse(
        client.V1['guest-carts'][':cartId']['payment-information'].$post(args, options),
      )
    },
  })
}

export function createPostV1GuestCartsCartIdPaymentInformation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.V1)['guest-carts'][':cartId']['payment-information']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.V1)['guest-carts'][':cartId']['payment-information']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1GuestCartsCartIdPaymentInformationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1GuestCartsCartIdPaymentMethodsQueryKey(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['payment-methods']['$get']>,
) {
  return ['V1', '/V1/guest-carts/:cartId/payment-methods', args] as const
}

export function getV1GuestCartsCartIdPaymentMethodsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['payment-methods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['payment-methods']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1)['guest-carts'][':cartId']['payment-methods']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GuestCartsCartIdPaymentMethodsQueryKey>
  >({
    queryKey: getV1GuestCartsCartIdPaymentMethodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1['guest-carts'][':cartId']['payment-methods'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1GuestCartsCartIdPaymentMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['payment-methods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['payment-methods']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1)['guest-carts'][':cartId']['payment-methods']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1GuestCartsCartIdPaymentMethodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1GuestCartsCartIdPaymentMethodsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1GuestCartsCartIdSelectedPaymentMethodQueryKey(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['selected-payment-method']['$get']
  >,
) {
  return ['V1', '/V1/guest-carts/:cartId/selected-payment-method', args] as const
}

export function getV1GuestCartsCartIdSelectedPaymentMethodQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['selected-payment-method']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1GuestCartsCartIdSelectedPaymentMethodQueryKey>
  >({
    queryKey: getV1GuestCartsCartIdSelectedPaymentMethodQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1['guest-carts'][':cartId']['selected-payment-method'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1GuestCartsCartIdSelectedPaymentMethod<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['selected-payment-method']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1GuestCartsCartIdSelectedPaymentMethodQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1GuestCartsCartIdSelectedPaymentMethodQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutV1GuestCartsCartIdSelectedPaymentMethodMutationKey() {
  return ['V1', '/V1/guest-carts/:cartId/selected-payment-method', 'PUT'] as const
}

export function getPutV1GuestCartsCartIdSelectedPaymentMethodMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1)['guest-carts'][':cartId']['selected-payment-method']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1GuestCartsCartIdSelectedPaymentMethodMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['guest-carts'][':cartId']['selected-payment-method']['$put']
      >,
    ) {
      return parseResponse(
        client.V1['guest-carts'][':cartId']['selected-payment-method'].$put(args, options),
      )
    },
  })
}

export function createPutV1GuestCartsCartIdSelectedPaymentMethod<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1)['guest-carts'][':cartId']['selected-payment-method']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1GuestCartsCartIdSelectedPaymentMethodMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1GuestCartsCartIdSetPaymentInformationMutationKey() {
  return ['V1', '/V1/guest-carts/:cartId/set-payment-information', 'POST'] as const
}

export function getPostV1GuestCartsCartIdSetPaymentInformationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1)['guest-carts'][':cartId']['set-payment-information']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1GuestCartsCartIdSetPaymentInformationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['guest-carts'][':cartId']['set-payment-information']['$post']
      >,
    ) {
      return parseResponse(
        client.V1['guest-carts'][':cartId']['set-payment-information'].$post(args, options),
      )
    },
  })
}

export function createPostV1GuestCartsCartIdSetPaymentInformation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1)['guest-carts'][':cartId']['set-payment-information']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1GuestCartsCartIdSetPaymentInformationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1GuestCartsCartIdShippingInformationMutationKey() {
  return ['V1', '/V1/guest-carts/:cartId/shipping-information', 'POST'] as const
}

export function getPostV1GuestCartsCartIdShippingInformationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['shipping-information']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GuestCartsCartIdShippingInformationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['guest-carts'][':cartId']['shipping-information']['$post']
      >,
    ) {
      return parseResponse(
        client.V1['guest-carts'][':cartId']['shipping-information'].$post(args, options),
      )
    },
  })
}

export function createPostV1GuestCartsCartIdShippingInformation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1)['guest-carts'][':cartId']['shipping-information']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1GuestCartsCartIdShippingInformationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1GuestCartsCartIdShippingMethodsQueryKey(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['shipping-methods']['$get']>,
) {
  return ['V1', '/V1/guest-carts/:cartId/shipping-methods', args] as const
}

export function getV1GuestCartsCartIdShippingMethodsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1)['guest-carts'][':cartId']['shipping-methods']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['shipping-methods']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1)['guest-carts'][':cartId']['shipping-methods']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GuestCartsCartIdShippingMethodsQueryKey>
  >({
    queryKey: getV1GuestCartsCartIdShippingMethodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1['guest-carts'][':cartId']['shipping-methods'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1GuestCartsCartIdShippingMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1)['guest-carts'][':cartId']['shipping-methods']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1)['guest-carts'][':cartId']['shipping-methods']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1)['guest-carts'][':cartId']['shipping-methods']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1GuestCartsCartIdShippingMethodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1GuestCartsCartIdShippingMethodsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1GuestCartsCartIdTotalsQueryKey(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['totals']['$get']>,
) {
  return ['V1', '/V1/guest-carts/:cartId/totals', args] as const
}

export function getV1GuestCartsCartIdTotalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['totals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['totals']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['totals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GuestCartsCartIdTotalsQueryKey>
  >({
    queryKey: getV1GuestCartsCartIdTotalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1['guest-carts'][':cartId'].totals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1GuestCartsCartIdTotals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['totals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['totals']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1)['guest-carts'][':cartId']['totals']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1GuestCartsCartIdTotalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1GuestCartsCartIdTotalsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1GuestCartsCartIdTotalsInformationMutationKey() {
  return ['V1', '/V1/guest-carts/:cartId/totals-information', 'POST'] as const
}

export function getPostV1GuestCartsCartIdTotalsInformationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1)['guest-carts'][':cartId']['totals-information']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GuestCartsCartIdTotalsInformationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['guest-carts'][':cartId']['totals-information']['$post']
      >,
    ) {
      return parseResponse(
        client.V1['guest-carts'][':cartId']['totals-information'].$post(args, options),
      )
    },
  })
}

export function createPostV1GuestCartsCartIdTotalsInformation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.V1)['guest-carts'][':cartId']['totals-information']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.V1)['guest-carts'][':cartId']['totals-information']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1GuestCartsCartIdTotalsInformationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1GuestGiftregistryCartIdEstimateShippingMethodsMutationKey() {
  return ['V1', '/V1/guest-giftregistry/:cartId/estimate-shipping-methods', 'POST'] as const
}

export function getPostV1GuestGiftregistryCartIdEstimateShippingMethodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1)['guest-giftregistry'][':cartId']['estimate-shipping-methods']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1GuestGiftregistryCartIdEstimateShippingMethodsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['guest-giftregistry'][':cartId']['estimate-shipping-methods']['$post']
      >,
    ) {
      return parseResponse(
        client.V1['guest-giftregistry'][':cartId']['estimate-shipping-methods'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostV1GuestGiftregistryCartIdEstimateShippingMethods<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1)['guest-giftregistry'][':cartId']['estimate-shipping-methods']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1GuestGiftregistryCartIdEstimateShippingMethodsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1HierarchyMoveIdMutationKey() {
  return ['V1', '/V1/hierarchy/move/:id', 'PUT'] as const
}

export function getPutV1HierarchyMoveIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.hierarchy.move)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.hierarchy.move)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1HierarchyMoveIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.hierarchy.move)[':id']['$put']>) {
      return parseResponse(client.V1.hierarchy.move[':id'].$put(args, options))
    },
  })
}

export function createPutV1HierarchyMoveId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.hierarchy.move)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.hierarchy.move)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1HierarchyMoveIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1HierarchyIdQueryKey(
  args: InferRequestType<(typeof client.V1.hierarchy)[':id']['$get']>,
) {
  return ['V1', '/V1/hierarchy/:id', args] as const
}

export function getV1HierarchyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.hierarchy)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.hierarchy)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.hierarchy)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1HierarchyIdQueryKey>
  >({
    queryKey: getV1HierarchyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.hierarchy[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1HierarchyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.hierarchy)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.hierarchy)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.V1.hierarchy)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1HierarchyIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1HierarchyIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1IntegrationAdminTokenMutationKey() {
  return ['V1', '/V1/integration/admin/token', 'POST'] as const
}

export function getPostV1IntegrationAdminTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.integration.admin.token.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.V1.integration.admin.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1IntegrationAdminTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.integration.admin.token.$post>) {
      return parseResponse(client.V1.integration.admin.token.$post(args, options))
    },
  })
}

export function createPostV1IntegrationAdminToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.V1.integration.admin.token.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.V1.integration.admin.token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1IntegrationAdminTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1IntegrationCustomerTokenMutationKey() {
  return ['V1', '/V1/integration/customer/token', 'POST'] as const
}

export function getPostV1IntegrationCustomerTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.integration.customer.token.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.V1.integration.customer.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1IntegrationCustomerTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.integration.customer.token.$post>) {
      return parseResponse(client.V1.integration.customer.token.$post(args, options))
    },
  })
}

export function createPostV1IntegrationCustomerToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.V1.integration.customer.token.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.V1.integration.customer.token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1IntegrationCustomerTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1InvoiceInvoiceIdRefundMutationKey() {
  return ['V1', '/V1/invoice/:invoiceId/refund', 'POST'] as const
}

export function getPostV1InvoiceInvoiceIdRefundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.invoice)[':invoiceId']['refund']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.invoice)[':invoiceId']['refund']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1InvoiceInvoiceIdRefundMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.invoice)[':invoiceId']['refund']['$post']>,
    ) {
      return parseResponse(client.V1.invoice[':invoiceId'].refund.$post(args, options))
    },
  })
}

export function createPostV1InvoiceInvoiceIdRefund<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.invoice)[':invoiceId']['refund']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.invoice)[':invoiceId']['refund']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1InvoiceInvoiceIdRefundMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1InvoicesQueryKey(args: InferRequestType<typeof client.V1.invoices.$get>) {
  return ['V1', '/V1/invoices', args] as const
}

export function getV1InvoicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.invoices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.V1.invoices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.invoices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1InvoicesQueryKey>
  >({
    queryKey: getV1InvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.invoices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Invoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.invoices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.invoices.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.invoices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1InvoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1InvoicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1InvoicesIndexMutationKey() {
  return ['V1', '/V1/invoices/', 'POST'] as const
}

export function getPostV1InvoicesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.invoices.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.V1.invoices.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1InvoicesIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.invoices.index.$post>) {
      return parseResponse(client.V1.invoices.index.$post(args, options))
    },
  })
}

export function createPostV1InvoicesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.invoices.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.V1.invoices.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1InvoicesIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1InvoicesCommentsMutationKey() {
  return ['V1', '/V1/invoices/comments', 'POST'] as const
}

export function getPostV1InvoicesCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.invoices.comments.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.V1.invoices.comments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1InvoicesCommentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.invoices.comments.$post>) {
      return parseResponse(client.V1.invoices.comments.$post(args, options))
    },
  })
}

export function createPostV1InvoicesComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.invoices.comments.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.V1.invoices.comments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1InvoicesCommentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1InvoicesIdQueryKey(
  args: InferRequestType<(typeof client.V1.invoices)[':id']['$get']>,
) {
  return ['V1', '/V1/invoices/:id', args] as const
}

export function getV1InvoicesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.invoices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.invoices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.invoices)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InvoicesIdQueryKey>
  >({
    queryKey: getV1InvoicesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.invoices[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1InvoicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.invoices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.invoices)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.V1.invoices)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1InvoicesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1InvoicesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1InvoicesIdCaptureMutationKey() {
  return ['V1', '/V1/invoices/:id/capture', 'POST'] as const
}

export function getPostV1InvoicesIdCaptureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.invoices)[':id']['capture']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.invoices)[':id']['capture']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1InvoicesIdCaptureMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.invoices)[':id']['capture']['$post']>,
    ) {
      return parseResponse(client.V1.invoices[':id'].capture.$post(args, options))
    },
  })
}

export function createPostV1InvoicesIdCapture<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.invoices)[':id']['capture']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.invoices)[':id']['capture']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1InvoicesIdCaptureMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1InvoicesIdCommentsQueryKey(
  args: InferRequestType<(typeof client.V1.invoices)[':id']['comments']['$get']>,
) {
  return ['V1', '/V1/invoices/:id/comments', args] as const
}

export function getV1InvoicesIdCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.invoices)[':id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.invoices)[':id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.invoices)[':id']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InvoicesIdCommentsQueryKey>
  >({
    queryKey: getV1InvoicesIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.invoices[':id'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1InvoicesIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.invoices)[':id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.invoices)[':id']['comments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.invoices)[':id']['comments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1InvoicesIdCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1InvoicesIdCommentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1InvoicesIdEmailsMutationKey() {
  return ['V1', '/V1/invoices/:id/emails', 'POST'] as const
}

export function getPostV1InvoicesIdEmailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.invoices)[':id']['emails']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.invoices)[':id']['emails']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1InvoicesIdEmailsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.invoices)[':id']['emails']['$post']>,
    ) {
      return parseResponse(client.V1.invoices[':id'].emails.$post(args, options))
    },
  })
}

export function createPostV1InvoicesIdEmails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.invoices)[':id']['emails']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.invoices)[':id']['emails']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1InvoicesIdEmailsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1InvoicesIdVoidMutationKey() {
  return ['V1', '/V1/invoices/:id/void', 'POST'] as const
}

export function getPostV1InvoicesIdVoidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.invoices)[':id']['void']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.invoices)[':id']['void']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1InvoicesIdVoidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.invoices)[':id']['void']['$post']>) {
      return parseResponse(client.V1.invoices[':id'].void.$post(args, options))
    },
  })
}

export function createPostV1InvoicesIdVoid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.invoices)[':id']['void']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.invoices)[':id']['void']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1InvoicesIdVoidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ModulesQueryKey() {
  return ['V1', '/V1/modules'] as const
}

export function getV1ModulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.modules.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.modules.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ModulesQueryKey>
  >({
    queryKey: getV1ModulesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.modules.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Modules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.modules.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.modules.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ModulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ModulesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1NegotiableCartsCartIdBillingAddressQueryKey(
  args: InferRequestType<
    (typeof client.V1)['negotiable-carts'][':cartId']['billing-address']['$get']
  >,
) {
  return ['V1', '/V1/negotiable-carts/:cartId/billing-address', args] as const
}

export function getV1NegotiableCartsCartIdBillingAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1)['negotiable-carts'][':cartId']['billing-address']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.V1)['negotiable-carts'][':cartId']['billing-address']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1)['negotiable-carts'][':cartId']['billing-address']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NegotiableCartsCartIdBillingAddressQueryKey>
  >({
    queryKey: getV1NegotiableCartsCartIdBillingAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1['negotiable-carts'][':cartId']['billing-address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1NegotiableCartsCartIdBillingAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1)['negotiable-carts'][':cartId']['billing-address']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1)['negotiable-carts'][':cartId']['billing-address']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1NegotiableCartsCartIdBillingAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1NegotiableCartsCartIdBillingAddressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1NegotiableCartsCartIdBillingAddressMutationKey() {
  return ['V1', '/V1/negotiable-carts/:cartId/billing-address', 'POST'] as const
}

export function getPostV1NegotiableCartsCartIdBillingAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1)['negotiable-carts'][':cartId']['billing-address']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NegotiableCartsCartIdBillingAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['negotiable-carts'][':cartId']['billing-address']['$post']
      >,
    ) {
      return parseResponse(
        client.V1['negotiable-carts'][':cartId']['billing-address'].$post(args, options),
      )
    },
  })
}

export function createPostV1NegotiableCartsCartIdBillingAddress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1)['negotiable-carts'][':cartId']['billing-address']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1NegotiableCartsCartIdBillingAddressMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1NegotiableCartsCartIdCouponsMutationKey() {
  return ['V1', '/V1/negotiable-carts/:cartId/coupons', 'DELETE'] as const
}

export function getDeleteV1NegotiableCartsCartIdCouponsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1)['negotiable-carts'][':cartId']['coupons']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1NegotiableCartsCartIdCouponsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['negotiable-carts'][':cartId']['coupons']['$delete']
      >,
    ) {
      return parseResponse(client.V1['negotiable-carts'][':cartId'].coupons.$delete(args, options))
    },
  })
}

export function createDeleteV1NegotiableCartsCartIdCoupons<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.V1)['negotiable-carts'][':cartId']['coupons']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1NegotiableCartsCartIdCouponsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1NegotiableCartsCartIdCouponsCouponCodeMutationKey() {
  return ['V1', '/V1/negotiable-carts/:cartId/coupons/:couponCode', 'PUT'] as const
}

export function getPutV1NegotiableCartsCartIdCouponsCouponCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1)['negotiable-carts'][':cartId']['coupons'][':couponCode']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1NegotiableCartsCartIdCouponsCouponCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['negotiable-carts'][':cartId']['coupons'][':couponCode']['$put']
      >,
    ) {
      return parseResponse(
        client.V1['negotiable-carts'][':cartId'].coupons[':couponCode'].$put(args, options),
      )
    },
  })
}

export function createPutV1NegotiableCartsCartIdCouponsCouponCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1)['negotiable-carts'][':cartId']['coupons'][':couponCode']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1NegotiableCartsCartIdCouponsCouponCodeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NegotiableCartsCartIdEstimateShippingMethodsMutationKey() {
  return ['V1', '/V1/negotiable-carts/:cartId/estimate-shipping-methods', 'POST'] as const
}

export function getPostV1NegotiableCartsCartIdEstimateShippingMethodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1)['negotiable-carts'][':cartId']['estimate-shipping-methods']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1NegotiableCartsCartIdEstimateShippingMethodsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['negotiable-carts'][':cartId']['estimate-shipping-methods']['$post']
      >,
    ) {
      return parseResponse(
        client.V1['negotiable-carts'][':cartId']['estimate-shipping-methods'].$post(args, options),
      )
    },
  })
}

export function createPostV1NegotiableCartsCartIdEstimateShippingMethods<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1)['negotiable-carts'][':cartId']['estimate-shipping-methods']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1NegotiableCartsCartIdEstimateShippingMethodsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NegotiableCartsCartIdEstimateShippingMethodsByAddressIdMutationKey() {
  return [
    'V1',
    '/V1/negotiable-carts/:cartId/estimate-shipping-methods-by-address-id',
    'POST',
  ] as const
}

export function getPostV1NegotiableCartsCartIdEstimateShippingMethodsByAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1)['negotiable-carts'][':cartId']['estimate-shipping-methods-by-address-id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1NegotiableCartsCartIdEstimateShippingMethodsByAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['negotiable-carts'][':cartId']['estimate-shipping-methods-by-address-id']['$post']
      >,
    ) {
      return parseResponse(
        client.V1['negotiable-carts'][':cartId']['estimate-shipping-methods-by-address-id'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostV1NegotiableCartsCartIdEstimateShippingMethodsByAddressId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1)['negotiable-carts'][':cartId']['estimate-shipping-methods-by-address-id']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1NegotiableCartsCartIdEstimateShippingMethodsByAddressIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NegotiableCartsCartIdGiftCardsMutationKey() {
  return ['V1', '/V1/negotiable-carts/:cartId/giftCards', 'POST'] as const
}

export function getPostV1NegotiableCartsCartIdGiftCardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1)['negotiable-carts'][':cartId']['giftCards']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NegotiableCartsCartIdGiftCardsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['negotiable-carts'][':cartId']['giftCards']['$post']
      >,
    ) {
      return parseResponse(client.V1['negotiable-carts'][':cartId'].giftCards.$post(args, options))
    },
  })
}

export function createPostV1NegotiableCartsCartIdGiftCards<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.V1)['negotiable-carts'][':cartId']['giftCards']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1NegotiableCartsCartIdGiftCardsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1NegotiableCartsCartIdGiftCardsGiftCardCodeMutationKey() {
  return ['V1', '/V1/negotiable-carts/:cartId/giftCards/:giftCardCode', 'DELETE'] as const
}

export function getDeleteV1NegotiableCartsCartIdGiftCardsGiftCardCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1)['negotiable-carts'][':cartId']['giftCards'][':giftCardCode']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1NegotiableCartsCartIdGiftCardsGiftCardCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['negotiable-carts'][':cartId']['giftCards'][':giftCardCode']['$delete']
      >,
    ) {
      return parseResponse(
        client.V1['negotiable-carts'][':cartId'].giftCards[':giftCardCode'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1NegotiableCartsCartIdGiftCardsGiftCardCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1)['negotiable-carts'][':cartId']['giftCards'][':giftCardCode']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1NegotiableCartsCartIdGiftCardsGiftCardCodeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1NegotiableCartsCartIdPaymentInformationQueryKey(
  args: InferRequestType<
    (typeof client.V1)['negotiable-carts'][':cartId']['payment-information']['$get']
  >,
) {
  return ['V1', '/V1/negotiable-carts/:cartId/payment-information', args] as const
}

export function getV1NegotiableCartsCartIdPaymentInformationQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.V1)['negotiable-carts'][':cartId']['payment-information']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1NegotiableCartsCartIdPaymentInformationQueryKey>
  >({
    queryKey: getV1NegotiableCartsCartIdPaymentInformationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1['negotiable-carts'][':cartId']['payment-information'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1NegotiableCartsCartIdPaymentInformation<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1)['negotiable-carts'][':cartId']['payment-information']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1NegotiableCartsCartIdPaymentInformationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1NegotiableCartsCartIdPaymentInformationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostV1NegotiableCartsCartIdPaymentInformationMutationKey() {
  return ['V1', '/V1/negotiable-carts/:cartId/payment-information', 'POST'] as const
}

export function getPostV1NegotiableCartsCartIdPaymentInformationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1)['negotiable-carts'][':cartId']['payment-information']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1NegotiableCartsCartIdPaymentInformationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['negotiable-carts'][':cartId']['payment-information']['$post']
      >,
    ) {
      return parseResponse(
        client.V1['negotiable-carts'][':cartId']['payment-information'].$post(args, options),
      )
    },
  })
}

export function createPostV1NegotiableCartsCartIdPaymentInformation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1)['negotiable-carts'][':cartId']['payment-information']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1NegotiableCartsCartIdPaymentInformationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NegotiableCartsCartIdSetPaymentInformationMutationKey() {
  return ['V1', '/V1/negotiable-carts/:cartId/set-payment-information', 'POST'] as const
}

export function getPostV1NegotiableCartsCartIdSetPaymentInformationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1)['negotiable-carts'][':cartId']['set-payment-information']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1NegotiableCartsCartIdSetPaymentInformationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['negotiable-carts'][':cartId']['set-payment-information']['$post']
      >,
    ) {
      return parseResponse(
        client.V1['negotiable-carts'][':cartId']['set-payment-information'].$post(args, options),
      )
    },
  })
}

export function createPostV1NegotiableCartsCartIdSetPaymentInformation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1)['negotiable-carts'][':cartId']['set-payment-information']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1NegotiableCartsCartIdSetPaymentInformationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NegotiableCartsCartIdShippingInformationMutationKey() {
  return ['V1', '/V1/negotiable-carts/:cartId/shipping-information', 'POST'] as const
}

export function getPostV1NegotiableCartsCartIdShippingInformationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1)['negotiable-carts'][':cartId']['shipping-information']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1NegotiableCartsCartIdShippingInformationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['negotiable-carts'][':cartId']['shipping-information']['$post']
      >,
    ) {
      return parseResponse(
        client.V1['negotiable-carts'][':cartId']['shipping-information'].$post(args, options),
      )
    },
  })
}

export function createPostV1NegotiableCartsCartIdShippingInformation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1)['negotiable-carts'][':cartId']['shipping-information']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1NegotiableCartsCartIdShippingInformationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1NegotiableCartsCartIdTotalsQueryKey(
  args: InferRequestType<(typeof client.V1)['negotiable-carts'][':cartId']['totals']['$get']>,
) {
  return ['V1', '/V1/negotiable-carts/:cartId/totals', args] as const
}

export function getV1NegotiableCartsCartIdTotalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1)['negotiable-carts'][':cartId']['totals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1)['negotiable-carts'][':cartId']['totals']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['negotiable-carts'][':cartId']['totals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NegotiableCartsCartIdTotalsQueryKey>
  >({
    queryKey: getV1NegotiableCartsCartIdTotalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1['negotiable-carts'][':cartId'].totals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1NegotiableCartsCartIdTotals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1)['negotiable-carts'][':cartId']['totals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1)['negotiable-carts'][':cartId']['totals']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1)['negotiable-carts'][':cartId']['totals']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NegotiableCartsCartIdTotalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1NegotiableCartsCartIdTotalsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1NegotiableQuoteAttachmentContentQueryKey(
  args: InferRequestType<typeof client.V1.negotiableQuote.attachmentContent.$get>,
) {
  return ['V1', '/V1/negotiableQuote/attachmentContent', args] as const
}

export function getV1NegotiableQuoteAttachmentContentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.V1.negotiableQuote.attachmentContent.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.V1.negotiableQuote.attachmentContent.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.V1.negotiableQuote.attachmentContent.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NegotiableQuoteAttachmentContentQueryKey>
  >({
    queryKey: getV1NegotiableQuoteAttachmentContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.negotiableQuote.attachmentContent.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1NegotiableQuoteAttachmentContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.V1.negotiableQuote.attachmentContent.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.negotiableQuote.attachmentContent.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.V1.negotiableQuote.attachmentContent.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NegotiableQuoteAttachmentContentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1NegotiableQuoteAttachmentContentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1NegotiableQuoteDeclineMutationKey() {
  return ['V1', '/V1/negotiableQuote/decline', 'POST'] as const
}

export function getPostV1NegotiableQuoteDeclineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.negotiableQuote.decline.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.V1.negotiableQuote.decline.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NegotiableQuoteDeclineMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.negotiableQuote.decline.$post>) {
      return parseResponse(client.V1.negotiableQuote.decline.$post(args, options))
    },
  })
}

export function createPostV1NegotiableQuoteDecline<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.V1.negotiableQuote.decline.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.V1.negotiableQuote.decline.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1NegotiableQuoteDeclineMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NegotiableQuotePricesUpdatedMutationKey() {
  return ['V1', '/V1/negotiableQuote/pricesUpdated', 'POST'] as const
}

export function getPostV1NegotiableQuotePricesUpdatedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.V1.negotiableQuote.pricesUpdated.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.V1.negotiableQuote.pricesUpdated.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NegotiableQuotePricesUpdatedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.negotiableQuote.pricesUpdated.$post>) {
      return parseResponse(client.V1.negotiableQuote.pricesUpdated.$post(args, options))
    },
  })
}

export function createPostV1NegotiableQuotePricesUpdated<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.V1.negotiableQuote.pricesUpdated.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.V1.negotiableQuote.pricesUpdated.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1NegotiableQuotePricesUpdatedMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NegotiableQuoteRequestMutationKey() {
  return ['V1', '/V1/negotiableQuote/request', 'POST'] as const
}

export function getPostV1NegotiableQuoteRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.negotiableQuote.request.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.V1.negotiableQuote.request.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NegotiableQuoteRequestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.negotiableQuote.request.$post>) {
      return parseResponse(client.V1.negotiableQuote.request.$post(args, options))
    },
  })
}

export function createPostV1NegotiableQuoteRequest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.V1.negotiableQuote.request.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.V1.negotiableQuote.request.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1NegotiableQuoteRequestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NegotiableQuoteSubmitToCustomerMutationKey() {
  return ['V1', '/V1/negotiableQuote/submitToCustomer', 'POST'] as const
}

export function getPostV1NegotiableQuoteSubmitToCustomerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.V1.negotiableQuote.submitToCustomer.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.V1.negotiableQuote.submitToCustomer.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NegotiableQuoteSubmitToCustomerMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.V1.negotiableQuote.submitToCustomer.$post>,
    ) {
      return parseResponse(client.V1.negotiableQuote.submitToCustomer.$post(args, options))
    },
  })
}

export function createPostV1NegotiableQuoteSubmitToCustomer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.V1.negotiableQuote.submitToCustomer.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.V1.negotiableQuote.submitToCustomer.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1NegotiableQuoteSubmitToCustomerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1NegotiableQuoteQuoteIdMutationKey() {
  return ['V1', '/V1/negotiableQuote/:quoteId', 'PUT'] as const
}

export function getPutV1NegotiableQuoteQuoteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.negotiableQuote)[':quoteId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.negotiableQuote)[':quoteId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1NegotiableQuoteQuoteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.negotiableQuote)[':quoteId']['$put']>,
    ) {
      return parseResponse(client.V1.negotiableQuote[':quoteId'].$put(args, options))
    },
  })
}

export function createPutV1NegotiableQuoteQuoteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.negotiableQuote)[':quoteId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.negotiableQuote)[':quoteId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1NegotiableQuoteQuoteIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1NegotiableQuoteQuoteIdCommentsQueryKey(
  args: InferRequestType<(typeof client.V1.negotiableQuote)[':quoteId']['comments']['$get']>,
) {
  return ['V1', '/V1/negotiableQuote/:quoteId/comments', args] as const
}

export function getV1NegotiableQuoteQuoteIdCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.negotiableQuote)[':quoteId']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.negotiableQuote)[':quoteId']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.negotiableQuote)[':quoteId']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NegotiableQuoteQuoteIdCommentsQueryKey>
  >({
    queryKey: getV1NegotiableQuoteQuoteIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.negotiableQuote[':quoteId'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1NegotiableQuoteQuoteIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.negotiableQuote)[':quoteId']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.negotiableQuote)[':quoteId']['comments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.negotiableQuote)[':quoteId']['comments']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NegotiableQuoteQuoteIdCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1NegotiableQuoteQuoteIdCommentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1NegotiableQuoteQuoteIdShippingMethodMutationKey() {
  return ['V1', '/V1/negotiableQuote/:quoteId/shippingMethod', 'PUT'] as const
}

export function getPutV1NegotiableQuoteQuoteIdShippingMethodMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1.negotiableQuote)[':quoteId']['shippingMethod']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1NegotiableQuoteQuoteIdShippingMethodMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.negotiableQuote)[':quoteId']['shippingMethod']['$put']
      >,
    ) {
      return parseResponse(client.V1.negotiableQuote[':quoteId'].shippingMethod.$put(args, options))
    },
  })
}

export function createPutV1NegotiableQuoteQuoteIdShippingMethod<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.V1.negotiableQuote)[':quoteId']['shippingMethod']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1NegotiableQuoteQuoteIdShippingMethodMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1OrderOrderIdInvoiceMutationKey() {
  return ['V1', '/V1/order/:orderId/invoice', 'POST'] as const
}

export function getPostV1OrderOrderIdInvoiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.order)[':orderId']['invoice']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.order)[':orderId']['invoice']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrderOrderIdInvoiceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.order)[':orderId']['invoice']['$post']>,
    ) {
      return parseResponse(client.V1.order[':orderId'].invoice.$post(args, options))
    },
  })
}

export function createPostV1OrderOrderIdInvoice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.order)[':orderId']['invoice']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.order)[':orderId']['invoice']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OrderOrderIdInvoiceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1OrderOrderIdRefundMutationKey() {
  return ['V1', '/V1/order/:orderId/refund', 'POST'] as const
}

export function getPostV1OrderOrderIdRefundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.order)[':orderId']['refund']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.order)[':orderId']['refund']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrderOrderIdRefundMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.order)[':orderId']['refund']['$post']>,
    ) {
      return parseResponse(client.V1.order[':orderId'].refund.$post(args, options))
    },
  })
}

export function createPostV1OrderOrderIdRefund<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.order)[':orderId']['refund']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.order)[':orderId']['refund']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OrderOrderIdRefundMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1OrderOrderIdShipMutationKey() {
  return ['V1', '/V1/order/:orderId/ship', 'POST'] as const
}

export function getPostV1OrderOrderIdShipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.order)[':orderId']['ship']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.order)[':orderId']['ship']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrderOrderIdShipMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.order)[':orderId']['ship']['$post']>,
    ) {
      return parseResponse(client.V1.order[':orderId'].ship.$post(args, options))
    },
  })
}

export function createPostV1OrderOrderIdShip<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.order)[':orderId']['ship']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.order)[':orderId']['ship']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OrderOrderIdShipMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1OrdersQueryKey(args: InferRequestType<typeof client.V1.orders.$get>) {
  return ['V1', '/V1/orders', args] as const
}

export function getV1OrdersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.orders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.V1.orders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.orders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1OrdersQueryKey>
  >({
    queryKey: getV1OrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.orders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Orders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.orders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.orders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1OrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1OrdersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1OrdersIndexMutationKey() {
  return ['V1', '/V1/orders/', 'POST'] as const
}

export function getPostV1OrdersIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.orders.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.V1.orders.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrdersIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.orders.index.$post>) {
      return parseResponse(client.V1.orders.index.$post(args, options))
    },
  })
}

export function createPostV1OrdersIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.orders.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.V1.orders.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OrdersIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1OrdersCreateMutationKey() {
  return ['V1', '/V1/orders/create', 'PUT'] as const
}

export function getPutV1OrdersCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.orders.create.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.V1.orders.create.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1OrdersCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.orders.create.$put>) {
      return parseResponse(client.V1.orders.create.$put(args, options))
    },
  })
}

export function createPutV1OrdersCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.orders.create.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.V1.orders.create.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1OrdersCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1OrdersItemsQueryKey(
  args: InferRequestType<typeof client.V1.orders.items.$get>,
) {
  return ['V1', '/V1/orders/items', args] as const
}

export function getV1OrdersItemsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.orders.items.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.V1.orders.items.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.orders.items.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrdersItemsQueryKey>
  >({
    queryKey: getV1OrdersItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.orders.items.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1OrdersItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.orders.items.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.orders.items.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.orders.items.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1OrdersItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1OrdersItemsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1OrdersItemsIdQueryKey(
  args: InferRequestType<(typeof client.V1.orders.items)[':id']['$get']>,
) {
  return ['V1', '/V1/orders/items/:id', args] as const
}

export function getV1OrdersItemsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.orders.items)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.orders.items)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.orders.items)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrdersItemsIdQueryKey>
  >({
    queryKey: getV1OrdersItemsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.orders.items[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrdersItemsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.orders.items)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.orders.items)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.orders.items)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OrdersItemsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1OrdersItemsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1OrdersIdQueryKey(
  args: InferRequestType<(typeof client.V1.orders)[':id']['$get']>,
) {
  return ['V1', '/V1/orders/:id', args] as const
}

export function getV1OrdersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.V1.orders)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.orders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrdersIdQueryKey>
  >({
    queryKey: getV1OrdersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.orders[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1OrdersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.V1.orders)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.orders)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.V1.orders)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OrdersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1OrdersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1OrdersIdCancelMutationKey() {
  return ['V1', '/V1/orders/:id/cancel', 'POST'] as const
}

export function getPostV1OrdersIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.orders)[':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.orders)[':id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrdersIdCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.orders)[':id']['cancel']['$post']>) {
      return parseResponse(client.V1.orders[':id'].cancel.$post(args, options))
    },
  })
}

export function createPostV1OrdersIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.orders)[':id']['cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.orders)[':id']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OrdersIdCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1OrdersIdCommentsQueryKey(
  args: InferRequestType<(typeof client.V1.orders)[':id']['comments']['$get']>,
) {
  return ['V1', '/V1/orders/:id/comments', args] as const
}

export function getV1OrdersIdCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.orders)[':id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.orders)[':id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.orders)[':id']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrdersIdCommentsQueryKey>
  >({
    queryKey: getV1OrdersIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.orders[':id'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrdersIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.orders)[':id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.orders)[':id']['comments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.orders)[':id']['comments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OrdersIdCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1OrdersIdCommentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1OrdersIdCommentsMutationKey() {
  return ['V1', '/V1/orders/:id/comments', 'POST'] as const
}

export function getPostV1OrdersIdCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.orders)[':id']['comments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.orders)[':id']['comments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrdersIdCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.orders)[':id']['comments']['$post']>,
    ) {
      return parseResponse(client.V1.orders[':id'].comments.$post(args, options))
    },
  })
}

export function createPostV1OrdersIdComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.orders)[':id']['comments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.orders)[':id']['comments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OrdersIdCommentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1OrdersIdEmailsMutationKey() {
  return ['V1', '/V1/orders/:id/emails', 'POST'] as const
}

export function getPostV1OrdersIdEmailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.orders)[':id']['emails']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.orders)[':id']['emails']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrdersIdEmailsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.orders)[':id']['emails']['$post']>) {
      return parseResponse(client.V1.orders[':id'].emails.$post(args, options))
    },
  })
}

export function createPostV1OrdersIdEmails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.orders)[':id']['emails']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.orders)[':id']['emails']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OrdersIdEmailsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1OrdersIdHoldMutationKey() {
  return ['V1', '/V1/orders/:id/hold', 'POST'] as const
}

export function getPostV1OrdersIdHoldMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.orders)[':id']['hold']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.orders)[':id']['hold']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrdersIdHoldMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.orders)[':id']['hold']['$post']>) {
      return parseResponse(client.V1.orders[':id'].hold.$post(args, options))
    },
  })
}

export function createPostV1OrdersIdHold<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.orders)[':id']['hold']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.orders)[':id']['hold']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OrdersIdHoldMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1OrdersIdStatusesQueryKey(
  args: InferRequestType<(typeof client.V1.orders)[':id']['statuses']['$get']>,
) {
  return ['V1', '/V1/orders/:id/statuses', args] as const
}

export function getV1OrdersIdStatusesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.orders)[':id']['statuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.orders)[':id']['statuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.orders)[':id']['statuses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrdersIdStatusesQueryKey>
  >({
    queryKey: getV1OrdersIdStatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.orders[':id'].statuses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrdersIdStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.orders)[':id']['statuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.orders)[':id']['statuses']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.orders)[':id']['statuses']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OrdersIdStatusesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1OrdersIdStatusesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1OrdersIdUnholdMutationKey() {
  return ['V1', '/V1/orders/:id/unhold', 'POST'] as const
}

export function getPostV1OrdersIdUnholdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.orders)[':id']['unhold']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.orders)[':id']['unhold']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrdersIdUnholdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.orders)[':id']['unhold']['$post']>) {
      return parseResponse(client.V1.orders[':id'].unhold.$post(args, options))
    },
  })
}

export function createPostV1OrdersIdUnhold<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.orders)[':id']['unhold']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.orders)[':id']['unhold']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OrdersIdUnholdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1OrdersParentIdMutationKey() {
  return ['V1', '/V1/orders/:parent_id', 'PUT'] as const
}

export function getPutV1OrdersParentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.orders)[':parent_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.orders)[':parent_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1OrdersParentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.orders)[':parent_id']['$put']>) {
      return parseResponse(client.V1.orders[':parent_id'].$put(args, options))
    },
  })
}

export function createPutV1OrdersParentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.orders)[':parent_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.orders)[':parent_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1OrdersParentIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ProductsQueryKey(args: InferRequestType<typeof client.V1.products.$get>) {
  return ['V1', '/V1/products', args] as const
}

export function getV1ProductsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.V1.products.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ProductsQueryKey>
  >({
    queryKey: getV1ProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.products.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Products<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.products.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ProductsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ProductsMutationKey() {
  return ['V1', '/V1/products', 'POST'] as const
}

export function getPostV1ProductsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.$post>>>>>,
    TError,
    InferRequestType<typeof client.V1.products.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.products.$post>) {
      return parseResponse(client.V1.products.$post(args, options))
    },
  })
}

export function createPostV1Products<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.V1.products.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProductsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ProductsRenderInfoQueryKey(
  args: InferRequestType<(typeof client.V1)['products-render-info']['$get']>,
) {
  return ['V1', '/V1/products-render-info', args] as const
}

export function getV1ProductsRenderInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1)['products-render-info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1)['products-render-info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1)['products-render-info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsRenderInfoQueryKey>
  >({
    queryKey: getV1ProductsRenderInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1['products-render-info'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProductsRenderInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1)['products-render-info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1)['products-render-info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1)['products-render-info']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsRenderInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProductsRenderInfoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ProductsAttributeSetsMutationKey() {
  return ['V1', '/V1/products/attribute-sets', 'POST'] as const
}

export function getPostV1ProductsAttributeSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['attribute-sets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.products)['attribute-sets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsAttributeSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.products)['attribute-sets']['$post']>,
    ) {
      return parseResponse(client.V1.products['attribute-sets'].$post(args, options))
    },
  })
}

export function createPostV1ProductsAttributeSets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.products)['attribute-sets']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.products)['attribute-sets']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProductsAttributeSetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ProductsAttributeSetsAttributesMutationKey() {
  return ['V1', '/V1/products/attribute-sets/attributes', 'POST'] as const
}

export function getPostV1ProductsAttributeSetsAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['attribute-sets']['attributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.products)['attribute-sets']['attributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsAttributeSetsAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.products)['attribute-sets']['attributes']['$post']>,
    ) {
      return parseResponse(client.V1.products['attribute-sets'].attributes.$post(args, options))
    },
  })
}

export function createPostV1ProductsAttributeSetsAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.products)['attribute-sets']['attributes']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.products)['attribute-sets']['attributes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProductsAttributeSetsAttributesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ProductsAttributeSetsGroupsMutationKey() {
  return ['V1', '/V1/products/attribute-sets/groups', 'POST'] as const
}

export function getPostV1ProductsAttributeSetsGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['attribute-sets']['groups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.products)['attribute-sets']['groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsAttributeSetsGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.products)['attribute-sets']['groups']['$post']>,
    ) {
      return parseResponse(client.V1.products['attribute-sets'].groups.$post(args, options))
    },
  })
}

export function createPostV1ProductsAttributeSetsGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.products)['attribute-sets']['groups']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.products)['attribute-sets']['groups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProductsAttributeSetsGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ProductsAttributeSetsGroupsListQueryKey(
  args: InferRequestType<(typeof client.V1.products)['attribute-sets']['groups']['list']['$get']>,
) {
  return ['V1', '/V1/products/attribute-sets/groups/list', args] as const
}

export function getV1ProductsAttributeSetsGroupsListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.products)['attribute-sets']['groups']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.products)['attribute-sets']['groups']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.products)['attribute-sets']['groups']['list']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsAttributeSetsGroupsListQueryKey>
  >({
    queryKey: getV1ProductsAttributeSetsGroupsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.products['attribute-sets'].groups.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProductsAttributeSetsGroupsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.products)['attribute-sets']['groups']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1.products)['attribute-sets']['groups']['list']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.products)['attribute-sets']['groups']['list']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsAttributeSetsGroupsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProductsAttributeSetsGroupsListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV1ProductsAttributeSetsGroupsGroupIdMutationKey() {
  return ['V1', '/V1/products/attribute-sets/groups/:groupId', 'DELETE'] as const
}

export function getDeleteV1ProductsAttributeSetsGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1.products)['attribute-sets']['groups'][':groupId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProductsAttributeSetsGroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.products)['attribute-sets']['groups'][':groupId']['$delete']
      >,
    ) {
      return parseResponse(
        client.V1.products['attribute-sets'].groups[':groupId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1ProductsAttributeSetsGroupsGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1.products)['attribute-sets']['groups'][':groupId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ProductsAttributeSetsGroupsGroupIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ProductsAttributeSetsSetsListQueryKey(
  args: InferRequestType<(typeof client.V1.products)['attribute-sets']['sets']['list']['$get']>,
) {
  return ['V1', '/V1/products/attribute-sets/sets/list', args] as const
}

export function getV1ProductsAttributeSetsSetsListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.products)['attribute-sets']['sets']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.products)['attribute-sets']['sets']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['attribute-sets']['sets']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsAttributeSetsSetsListQueryKey>
  >({
    queryKey: getV1ProductsAttributeSetsSetsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.products['attribute-sets'].sets.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProductsAttributeSetsSetsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.products)['attribute-sets']['sets']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1.products)['attribute-sets']['sets']['list']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.products)['attribute-sets']['sets']['list']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsAttributeSetsSetsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProductsAttributeSetsSetsListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ProductsAttributeSetsAttributeSetIdQueryKey(
  args: InferRequestType<(typeof client.V1.products)['attribute-sets'][':attributeSetId']['$get']>,
) {
  return ['V1', '/V1/products/attribute-sets/:attributeSetId', args] as const
}

export function getV1ProductsAttributeSetsAttributeSetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1.products)['attribute-sets'][':attributeSetId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.products)['attribute-sets'][':attributeSetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.products)['attribute-sets'][':attributeSetId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsAttributeSetsAttributeSetIdQueryKey>
  >({
    queryKey: getV1ProductsAttributeSetsAttributeSetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.products['attribute-sets'][':attributeSetId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProductsAttributeSetsAttributeSetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1.products)['attribute-sets'][':attributeSetId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1.products)['attribute-sets'][':attributeSetId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.products)['attribute-sets'][':attributeSetId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsAttributeSetsAttributeSetIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProductsAttributeSetsAttributeSetIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1ProductsAttributeSetsAttributeSetIdMutationKey() {
  return ['V1', '/V1/products/attribute-sets/:attributeSetId', 'PUT'] as const
}

export function getPutV1ProductsAttributeSetsAttributeSetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1.products)['attribute-sets'][':attributeSetId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProductsAttributeSetsAttributeSetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.products)['attribute-sets'][':attributeSetId']['$put']
      >,
    ) {
      return parseResponse(
        client.V1.products['attribute-sets'][':attributeSetId'].$put(args, options),
      )
    },
  })
}

export function createPutV1ProductsAttributeSetsAttributeSetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.V1.products)['attribute-sets'][':attributeSetId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ProductsAttributeSetsAttributeSetIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1ProductsAttributeSetsAttributeSetIdMutationKey() {
  return ['V1', '/V1/products/attribute-sets/:attributeSetId', 'DELETE'] as const
}

export function getDeleteV1ProductsAttributeSetsAttributeSetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1.products)['attribute-sets'][':attributeSetId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProductsAttributeSetsAttributeSetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.products)['attribute-sets'][':attributeSetId']['$delete']
      >,
    ) {
      return parseResponse(
        client.V1.products['attribute-sets'][':attributeSetId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1ProductsAttributeSetsAttributeSetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.V1.products)['attribute-sets'][':attributeSetId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.V1.products)['attribute-sets'][':attributeSetId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ProductsAttributeSetsAttributeSetIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ProductsAttributeSetsAttributeSetIdAttributesQueryKey(
  args: InferRequestType<
    (typeof client.V1.products)['attribute-sets'][':attributeSetId']['attributes']['$get']
  >,
) {
  return ['V1', '/V1/products/attribute-sets/:attributeSetId/attributes', args] as const
}

export function getV1ProductsAttributeSetsAttributeSetIdAttributesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.V1.products)['attribute-sets'][':attributeSetId']['attributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ProductsAttributeSetsAttributeSetIdAttributesQueryKey>
  >({
    queryKey: getV1ProductsAttributeSetsAttributeSetIdAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.products['attribute-sets'][':attributeSetId'].attributes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProductsAttributeSetsAttributeSetIdAttributes<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1.products)['attribute-sets'][':attributeSetId']['attributes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ProductsAttributeSetsAttributeSetIdAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProductsAttributeSetsAttributeSetIdAttributesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV1ProductsAttributeSetsAttributeSetIdAttributesAttributeCodeMutationKey() {
  return [
    'V1',
    '/V1/products/attribute-sets/:attributeSetId/attributes/:attributeCode',
    'DELETE',
  ] as const
}

export function getDeleteV1ProductsAttributeSetsAttributeSetIdAttributesAttributeCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1.products)['attribute-sets'][':attributeSetId']['attributes'][':attributeCode']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProductsAttributeSetsAttributeSetIdAttributesAttributeCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.products)['attribute-sets'][':attributeSetId']['attributes'][':attributeCode']['$delete']
      >,
    ) {
      return parseResponse(
        client.V1.products['attribute-sets'][':attributeSetId'].attributes[
          ':attributeCode'
        ].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1ProductsAttributeSetsAttributeSetIdAttributesAttributeCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1.products)['attribute-sets'][':attributeSetId']['attributes'][':attributeCode']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1ProductsAttributeSetsAttributeSetIdAttributesAttributeCodeMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1ProductsAttributeSetsAttributeSetIdGroupsMutationKey() {
  return ['V1', '/V1/products/attribute-sets/:attributeSetId/groups', 'PUT'] as const
}

export function getPutV1ProductsAttributeSetsAttributeSetIdGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1.products)['attribute-sets'][':attributeSetId']['groups']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProductsAttributeSetsAttributeSetIdGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.products)['attribute-sets'][':attributeSetId']['groups']['$put']
      >,
    ) {
      return parseResponse(
        client.V1.products['attribute-sets'][':attributeSetId'].groups.$put(args, options),
      )
    },
  })
}

export function createPutV1ProductsAttributeSetsAttributeSetIdGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1.products)['attribute-sets'][':attributeSetId']['groups']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ProductsAttributeSetsAttributeSetIdGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ProductsAttributesQueryKey(
  args: InferRequestType<typeof client.V1.products.attributes.$get>,
) {
  return ['V1', '/V1/products/attributes', args] as const
}

export function getV1ProductsAttributesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.attributes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.V1.products.attributes.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.attributes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsAttributesQueryKey>
  >({
    queryKey: getV1ProductsAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.products.attributes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProductsAttributes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.attributes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.products.attributes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.attributes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProductsAttributesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ProductsAttributesMutationKey() {
  return ['V1', '/V1/products/attributes', 'POST'] as const
}

export function getPostV1ProductsAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.attributes.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.V1.products.attributes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsAttributesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.products.attributes.$post>) {
      return parseResponse(client.V1.products.attributes.$post(args, options))
    },
  })
}

export function createPostV1ProductsAttributes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.attributes.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.V1.products.attributes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProductsAttributesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ProductsAttributesTypesQueryKey() {
  return ['V1', '/V1/products/attributes/types'] as const
}

export function getV1ProductsAttributesTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.attributes.types.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.attributes.types.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsAttributesTypesQueryKey>
  >({
    queryKey: getV1ProductsAttributesTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.products.attributes.types.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProductsAttributesTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.attributes.types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.V1.products.attributes.types.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsAttributesTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ProductsAttributesTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1ProductsAttributesAttributeCodeQueryKey(
  args: InferRequestType<(typeof client.V1.products.attributes)[':attributeCode']['$get']>,
) {
  return ['V1', '/V1/products/attributes/:attributeCode', args] as const
}

export function getV1ProductsAttributesAttributeCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.products.attributes)[':attributeCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.products.attributes)[':attributeCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products.attributes)[':attributeCode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsAttributesAttributeCodeQueryKey>
  >({
    queryKey: getV1ProductsAttributesAttributeCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.products.attributes[':attributeCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProductsAttributesAttributeCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.products.attributes)[':attributeCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.products.attributes)[':attributeCode']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.products.attributes)[':attributeCode']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsAttributesAttributeCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProductsAttributesAttributeCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1ProductsAttributesAttributeCodeMutationKey() {
  return ['V1', '/V1/products/attributes/:attributeCode', 'PUT'] as const
}

export function getPutV1ProductsAttributesAttributeCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products.attributes)[':attributeCode']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.products.attributes)[':attributeCode']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProductsAttributesAttributeCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.products.attributes)[':attributeCode']['$put']>,
    ) {
      return parseResponse(client.V1.products.attributes[':attributeCode'].$put(args, options))
    },
  })
}

export function createPutV1ProductsAttributesAttributeCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.products.attributes)[':attributeCode']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.products.attributes)[':attributeCode']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ProductsAttributesAttributeCodeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1ProductsAttributesAttributeCodeMutationKey() {
  return ['V1', '/V1/products/attributes/:attributeCode', 'DELETE'] as const
}

export function getDeleteV1ProductsAttributesAttributeCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products.attributes)[':attributeCode']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.products.attributes)[':attributeCode']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProductsAttributesAttributeCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.products.attributes)[':attributeCode']['$delete']>,
    ) {
      return parseResponse(client.V1.products.attributes[':attributeCode'].$delete(args, options))
    },
  })
}

export function createDeleteV1ProductsAttributesAttributeCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.products.attributes)[':attributeCode']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.products.attributes)[':attributeCode']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ProductsAttributesAttributeCodeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ProductsAttributesAttributeCodeOptionsQueryKey(
  args: InferRequestType<
    (typeof client.V1.products.attributes)[':attributeCode']['options']['$get']
  >,
) {
  return ['V1', '/V1/products/attributes/:attributeCode/options', args] as const
}

export function getV1ProductsAttributesAttributeCodeOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1.products.attributes)[':attributeCode']['options']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.V1.products.attributes)[':attributeCode']['options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.products.attributes)[':attributeCode']['options']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsAttributesAttributeCodeOptionsQueryKey>
  >({
    queryKey: getV1ProductsAttributesAttributeCodeOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.products.attributes[':attributeCode'].options.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProductsAttributesAttributeCodeOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1.products.attributes)[':attributeCode']['options']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1.products.attributes)[':attributeCode']['options']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ProductsAttributesAttributeCodeOptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProductsAttributesAttributeCodeOptionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ProductsAttributesAttributeCodeOptionsMutationKey() {
  return ['V1', '/V1/products/attributes/:attributeCode/options', 'POST'] as const
}

export function getPostV1ProductsAttributesAttributeCodeOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1.products.attributes)[':attributeCode']['options']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsAttributesAttributeCodeOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.products.attributes)[':attributeCode']['options']['$post']
      >,
    ) {
      return parseResponse(
        client.V1.products.attributes[':attributeCode'].options.$post(args, options),
      )
    },
  })
}

export function createPostV1ProductsAttributesAttributeCodeOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.V1.products.attributes)[':attributeCode']['options']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.V1.products.attributes)[':attributeCode']['options']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProductsAttributesAttributeCodeOptionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1ProductsAttributesAttributeCodeOptionsOptionIdMutationKey() {
  return ['V1', '/V1/products/attributes/:attributeCode/options/:optionId', 'DELETE'] as const
}

export function getDeleteV1ProductsAttributesAttributeCodeOptionsOptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1.products.attributes)[':attributeCode']['options'][':optionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProductsAttributesAttributeCodeOptionsOptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.products.attributes)[':attributeCode']['options'][':optionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.V1.products.attributes[':attributeCode'].options[':optionId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1ProductsAttributesAttributeCodeOptionsOptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1.products.attributes)[':attributeCode']['options'][':optionId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1ProductsAttributesAttributeCodeOptionsOptionIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ProductsBasePricesMutationKey() {
  return ['V1', '/V1/products/base-prices', 'POST'] as const
}

export function getPostV1ProductsBasePricesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['base-prices']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.products)['base-prices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsBasePricesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.products)['base-prices']['$post']>) {
      return parseResponse(client.V1.products['base-prices'].$post(args, options))
    },
  })
}

export function createPostV1ProductsBasePrices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.products)['base-prices']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.products)['base-prices']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProductsBasePricesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ProductsBasePricesInformationMutationKey() {
  return ['V1', '/V1/products/base-prices-information', 'POST'] as const
}

export function getPostV1ProductsBasePricesInformationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['base-prices-information']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.products)['base-prices-information']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsBasePricesInformationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.products)['base-prices-information']['$post']>,
    ) {
      return parseResponse(client.V1.products['base-prices-information'].$post(args, options))
    },
  })
}

export function createPostV1ProductsBasePricesInformation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.products)['base-prices-information']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.products)['base-prices-information']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProductsBasePricesInformationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ProductsCostMutationKey() {
  return ['V1', '/V1/products/cost', 'POST'] as const
}

export function getPostV1ProductsCostMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.cost.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.V1.products.cost.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsCostMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.products.cost.$post>) {
      return parseResponse(client.V1.products.cost.$post(args, options))
    },
  })
}

export function createPostV1ProductsCost<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.cost.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.V1.products.cost.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProductsCostMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ProductsCostDeleteMutationKey() {
  return ['V1', '/V1/products/cost-delete', 'POST'] as const
}

export function getPostV1ProductsCostDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['cost-delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.products)['cost-delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsCostDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.products)['cost-delete']['$post']>) {
      return parseResponse(client.V1.products['cost-delete'].$post(args, options))
    },
  })
}

export function createPostV1ProductsCostDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.products)['cost-delete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.products)['cost-delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProductsCostDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ProductsCostInformationMutationKey() {
  return ['V1', '/V1/products/cost-information', 'POST'] as const
}

export function getPostV1ProductsCostInformationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['cost-information']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.products)['cost-information']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsCostInformationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.products)['cost-information']['$post']>,
    ) {
      return parseResponse(client.V1.products['cost-information'].$post(args, options))
    },
  })
}

export function createPostV1ProductsCostInformation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.products)['cost-information']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.products)['cost-information']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProductsCostInformationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1ProductsDownloadableLinksSamplesIdMutationKey() {
  return ['V1', '/V1/products/downloadable-links/samples/:id', 'DELETE'] as const
}

export function getDeleteV1ProductsDownloadableLinksSamplesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1.products)['downloadable-links']['samples'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProductsDownloadableLinksSamplesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.products)['downloadable-links']['samples'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.V1.products['downloadable-links'].samples[':id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1ProductsDownloadableLinksSamplesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1.products)['downloadable-links']['samples'][':id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ProductsDownloadableLinksSamplesIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1ProductsDownloadableLinksIdMutationKey() {
  return ['V1', '/V1/products/downloadable-links/:id', 'DELETE'] as const
}

export function getDeleteV1ProductsDownloadableLinksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['downloadable-links'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.products)['downloadable-links'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProductsDownloadableLinksIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.products)['downloadable-links'][':id']['$delete']>,
    ) {
      return parseResponse(client.V1.products['downloadable-links'][':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1ProductsDownloadableLinksId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.products)['downloadable-links'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.products)['downloadable-links'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ProductsDownloadableLinksIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ProductsLinksTypesQueryKey() {
  return ['V1', '/V1/products/links/types'] as const
}

export function getV1ProductsLinksTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.links.types.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.links.types.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsLinksTypesQueryKey>
  >({
    queryKey: getV1ProductsLinksTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.products.links.types.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProductsLinksTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.links.types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.links.types.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsLinksTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ProductsLinksTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1ProductsLinksTypeAttributesQueryKey(
  args: InferRequestType<(typeof client.V1.products.links)[':type']['attributes']['$get']>,
) {
  return ['V1', '/V1/products/links/:type/attributes', args] as const
}

export function getV1ProductsLinksTypeAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.products.links)[':type']['attributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.products.links)[':type']['attributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products.links)[':type']['attributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsLinksTypeAttributesQueryKey>
  >({
    queryKey: getV1ProductsLinksTypeAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.products.links[':type'].attributes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProductsLinksTypeAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.products.links)[':type']['attributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.products.links)[':type']['attributes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.products.links)[':type']['attributes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsLinksTypeAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProductsLinksTypeAttributesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ProductsMediaTypesAttributeSetNameQueryKey(
  args: InferRequestType<(typeof client.V1.products.media.types)[':attributeSetName']['$get']>,
) {
  return ['V1', '/V1/products/media/types/:attributeSetName', args] as const
}

export function getV1ProductsMediaTypesAttributeSetNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.products.media.types)[':attributeSetName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.products.media.types)[':attributeSetName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products.media.types)[':attributeSetName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsMediaTypesAttributeSetNameQueryKey>
  >({
    queryKey: getV1ProductsMediaTypesAttributeSetNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.products.media.types[':attributeSetName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProductsMediaTypesAttributeSetName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.products.media.types)[':attributeSetName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1.products.media.types)[':attributeSetName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.products.media.types)[':attributeSetName']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsMediaTypesAttributeSetNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProductsMediaTypesAttributeSetNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ProductsOptionsMutationKey() {
  return ['V1', '/V1/products/options', 'POST'] as const
}

export function getPostV1ProductsOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.options.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.V1.products.options.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsOptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.products.options.$post>) {
      return parseResponse(client.V1.products.options.$post(args, options))
    },
  })
}

export function createPostV1ProductsOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.options.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.V1.products.options.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProductsOptionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ProductsOptionsTypesQueryKey() {
  return ['V1', '/V1/products/options/types'] as const
}

export function getV1ProductsOptionsTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.options.types.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.options.types.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsOptionsTypesQueryKey>
  >({
    queryKey: getV1ProductsOptionsTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.products.options.types.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProductsOptionsTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.options.types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.options.types.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsOptionsTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ProductsOptionsTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPutV1ProductsOptionsOptionIdMutationKey() {
  return ['V1', '/V1/products/options/:optionId', 'PUT'] as const
}

export function getPutV1ProductsOptionsOptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products.options)[':optionId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.products.options)[':optionId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProductsOptionsOptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.products.options)[':optionId']['$put']>,
    ) {
      return parseResponse(client.V1.products.options[':optionId'].$put(args, options))
    },
  })
}

export function createPutV1ProductsOptionsOptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.products.options)[':optionId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.products.options)[':optionId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ProductsOptionsOptionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ProductsSpecialPriceMutationKey() {
  return ['V1', '/V1/products/special-price', 'POST'] as const
}

export function getPostV1ProductsSpecialPriceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['special-price']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.products)['special-price']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsSpecialPriceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.products)['special-price']['$post']>,
    ) {
      return parseResponse(client.V1.products['special-price'].$post(args, options))
    },
  })
}

export function createPostV1ProductsSpecialPrice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.products)['special-price']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.products)['special-price']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProductsSpecialPriceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ProductsSpecialPriceDeleteMutationKey() {
  return ['V1', '/V1/products/special-price-delete', 'POST'] as const
}

export function getPostV1ProductsSpecialPriceDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['special-price-delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.products)['special-price-delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsSpecialPriceDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.products)['special-price-delete']['$post']>,
    ) {
      return parseResponse(client.V1.products['special-price-delete'].$post(args, options))
    },
  })
}

export function createPostV1ProductsSpecialPriceDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.products)['special-price-delete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.products)['special-price-delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProductsSpecialPriceDeleteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ProductsSpecialPriceInformationMutationKey() {
  return ['V1', '/V1/products/special-price-information', 'POST'] as const
}

export function getPostV1ProductsSpecialPriceInformationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['special-price-information']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.products)['special-price-information']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsSpecialPriceInformationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.products)['special-price-information']['$post']>,
    ) {
      return parseResponse(client.V1.products['special-price-information'].$post(args, options))
    },
  })
}

export function createPostV1ProductsSpecialPriceInformation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.products)['special-price-information']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.products)['special-price-information']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProductsSpecialPriceInformationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1ProductsTierPricesMutationKey() {
  return ['V1', '/V1/products/tier-prices', 'PUT'] as const
}

export function getPutV1ProductsTierPricesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['tier-prices']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.products)['tier-prices']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProductsTierPricesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.products)['tier-prices']['$put']>) {
      return parseResponse(client.V1.products['tier-prices'].$put(args, options))
    },
  })
}

export function createPutV1ProductsTierPrices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.products)['tier-prices']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.products)['tier-prices']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ProductsTierPricesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ProductsTierPricesMutationKey() {
  return ['V1', '/V1/products/tier-prices', 'POST'] as const
}

export function getPostV1ProductsTierPricesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['tier-prices']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.products)['tier-prices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsTierPricesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.products)['tier-prices']['$post']>) {
      return parseResponse(client.V1.products['tier-prices'].$post(args, options))
    },
  })
}

export function createPostV1ProductsTierPrices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.products)['tier-prices']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.products)['tier-prices']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProductsTierPricesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ProductsTierPricesDeleteMutationKey() {
  return ['V1', '/V1/products/tier-prices-delete', 'POST'] as const
}

export function getPostV1ProductsTierPricesDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['tier-prices-delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.products)['tier-prices-delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsTierPricesDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.products)['tier-prices-delete']['$post']>,
    ) {
      return parseResponse(client.V1.products['tier-prices-delete'].$post(args, options))
    },
  })
}

export function createPostV1ProductsTierPricesDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.products)['tier-prices-delete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.products)['tier-prices-delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProductsTierPricesDeleteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ProductsTierPricesInformationMutationKey() {
  return ['V1', '/V1/products/tier-prices-information', 'POST'] as const
}

export function getPostV1ProductsTierPricesInformationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)['tier-prices-information']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.products)['tier-prices-information']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsTierPricesInformationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.products)['tier-prices-information']['$post']>,
    ) {
      return parseResponse(client.V1.products['tier-prices-information'].$post(args, options))
    },
  })
}

export function createPostV1ProductsTierPricesInformation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.products)['tier-prices-information']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.products)['tier-prices-information']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProductsTierPricesInformationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ProductsTypesQueryKey() {
  return ['V1', '/V1/products/types'] as const
}

export function getV1ProductsTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.types.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsTypesQueryKey>
  >({
    queryKey: getV1ProductsTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.products.types.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProductsTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.products.types.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ProductsTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPutV1ProductsProductSkuStockItemsItemIdMutationKey() {
  return ['V1', '/V1/products/:productSku/stockItems/:itemId', 'PUT'] as const
}

export function getPutV1ProductsProductSkuStockItemsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1.products)[':productSku']['stockItems'][':itemId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProductsProductSkuStockItemsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.products)[':productSku']['stockItems'][':itemId']['$put']
      >,
    ) {
      return parseResponse(
        client.V1.products[':productSku'].stockItems[':itemId'].$put(args, options),
      )
    },
  })
}

export function createPutV1ProductsProductSkuStockItemsItemId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.V1.products)[':productSku']['stockItems'][':itemId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.V1.products)[':productSku']['stockItems'][':itemId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ProductsProductSkuStockItemsItemIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ProductsSkuQueryKey(
  args: InferRequestType<(typeof client.V1.products)[':sku']['$get']>,
) {
  return ['V1', '/V1/products/:sku', args] as const
}

export function getV1ProductsSkuQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.products)[':sku']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.products)[':sku']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.products)[':sku']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsSkuQueryKey>
  >({
    queryKey: getV1ProductsSkuQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.products[':sku'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ProductsSku<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.products)[':sku']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.products)[':sku']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.V1.products)[':sku']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsSkuQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ProductsSkuQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV1ProductsSkuMutationKey() {
  return ['V1', '/V1/products/:sku', 'PUT'] as const
}

export function getPutV1ProductsSkuMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.products)[':sku']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.products)[':sku']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProductsSkuMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.products)[':sku']['$put']>) {
      return parseResponse(client.V1.products[':sku'].$put(args, options))
    },
  })
}

export function createPutV1ProductsSku<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.V1.products)[':sku']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.products)[':sku']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ProductsSkuMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1ProductsSkuMutationKey() {
  return ['V1', '/V1/products/:sku', 'DELETE'] as const
}

export function getDeleteV1ProductsSkuMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.products)[':sku']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.products)[':sku']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProductsSkuMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.products)[':sku']['$delete']>) {
      return parseResponse(client.V1.products[':sku'].$delete(args, options))
    },
  })
}

export function createDeleteV1ProductsSku<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.products)[':sku']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.products)[':sku']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ProductsSkuMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ProductsSkuDownloadableLinksQueryKey(
  args: InferRequestType<(typeof client.V1.products)[':sku']['downloadable-links']['$get']>,
) {
  return ['V1', '/V1/products/:sku/downloadable-links', args] as const
}

export function getV1ProductsSkuDownloadableLinksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.products)[':sku']['downloadable-links']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.products)[':sku']['downloadable-links']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)[':sku']['downloadable-links']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsSkuDownloadableLinksQueryKey>
  >({
    queryKey: getV1ProductsSkuDownloadableLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.products[':sku']['downloadable-links'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProductsSkuDownloadableLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.products)[':sku']['downloadable-links']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.products)[':sku']['downloadable-links']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.products)[':sku']['downloadable-links']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsSkuDownloadableLinksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProductsSkuDownloadableLinksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ProductsSkuDownloadableLinksMutationKey() {
  return ['V1', '/V1/products/:sku/downloadable-links', 'POST'] as const
}

export function getPostV1ProductsSkuDownloadableLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)[':sku']['downloadable-links']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.products)[':sku']['downloadable-links']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsSkuDownloadableLinksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.products)[':sku']['downloadable-links']['$post']>,
    ) {
      return parseResponse(client.V1.products[':sku']['downloadable-links'].$post(args, options))
    },
  })
}

export function createPostV1ProductsSkuDownloadableLinks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.products)[':sku']['downloadable-links']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.products)[':sku']['downloadable-links']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProductsSkuDownloadableLinksMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ProductsSkuDownloadableLinksSamplesQueryKey(
  args: InferRequestType<
    (typeof client.V1.products)[':sku']['downloadable-links']['samples']['$get']
  >,
) {
  return ['V1', '/V1/products/:sku/downloadable-links/samples', args] as const
}

export function getV1ProductsSkuDownloadableLinksSamplesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1.products)[':sku']['downloadable-links']['samples']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.V1.products)[':sku']['downloadable-links']['samples']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.products)[':sku']['downloadable-links']['samples']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsSkuDownloadableLinksSamplesQueryKey>
  >({
    queryKey: getV1ProductsSkuDownloadableLinksSamplesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.products[':sku']['downloadable-links'].samples.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProductsSkuDownloadableLinksSamples<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1.products)[':sku']['downloadable-links']['samples']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1.products)[':sku']['downloadable-links']['samples']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ProductsSkuDownloadableLinksSamplesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProductsSkuDownloadableLinksSamplesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ProductsSkuDownloadableLinksSamplesMutationKey() {
  return ['V1', '/V1/products/:sku/downloadable-links/samples', 'POST'] as const
}

export function getPostV1ProductsSkuDownloadableLinksSamplesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1.products)[':sku']['downloadable-links']['samples']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsSkuDownloadableLinksSamplesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.products)[':sku']['downloadable-links']['samples']['$post']
      >,
    ) {
      return parseResponse(
        client.V1.products[':sku']['downloadable-links'].samples.$post(args, options),
      )
    },
  })
}

export function createPostV1ProductsSkuDownloadableLinksSamples<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1.products)[':sku']['downloadable-links']['samples']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProductsSkuDownloadableLinksSamplesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1ProductsSkuDownloadableLinksSamplesIdMutationKey() {
  return ['V1', '/V1/products/:sku/downloadable-links/samples/:id', 'PUT'] as const
}

export function getPutV1ProductsSkuDownloadableLinksSamplesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1.products)[':sku']['downloadable-links']['samples'][':id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProductsSkuDownloadableLinksSamplesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.products)[':sku']['downloadable-links']['samples'][':id']['$put']
      >,
    ) {
      return parseResponse(
        client.V1.products[':sku']['downloadable-links'].samples[':id'].$put(args, options),
      )
    },
  })
}

export function createPutV1ProductsSkuDownloadableLinksSamplesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1.products)[':sku']['downloadable-links']['samples'][':id']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ProductsSkuDownloadableLinksSamplesIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1ProductsSkuDownloadableLinksIdMutationKey() {
  return ['V1', '/V1/products/:sku/downloadable-links/:id', 'PUT'] as const
}

export function getPutV1ProductsSkuDownloadableLinksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1.products)[':sku']['downloadable-links'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProductsSkuDownloadableLinksIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.products)[':sku']['downloadable-links'][':id']['$put']
      >,
    ) {
      return parseResponse(
        client.V1.products[':sku']['downloadable-links'][':id'].$put(args, options),
      )
    },
  })
}

export function createPutV1ProductsSkuDownloadableLinksId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.V1.products)[':sku']['downloadable-links'][':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ProductsSkuDownloadableLinksIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ProductsSkuGroupPricesCustomerGroupIdTiersQueryKey(
  args: InferRequestType<
    (typeof client.V1.products)[':sku']['group-prices'][':customerGroupId']['tiers']['$get']
  >,
) {
  return ['V1', '/V1/products/:sku/group-prices/:customerGroupId/tiers', args] as const
}

export function getV1ProductsSkuGroupPricesCustomerGroupIdTiersQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.V1.products)[':sku']['group-prices'][':customerGroupId']['tiers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ProductsSkuGroupPricesCustomerGroupIdTiersQueryKey>
  >({
    queryKey: getV1ProductsSkuGroupPricesCustomerGroupIdTiersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.products[':sku']['group-prices'][':customerGroupId'].tiers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProductsSkuGroupPricesCustomerGroupIdTiers<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1.products)[':sku']['group-prices'][':customerGroupId']['tiers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ProductsSkuGroupPricesCustomerGroupIdTiersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProductsSkuGroupPricesCustomerGroupIdTiersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV1ProductsSkuGroupPricesCustomerGroupIdTiersQtyMutationKey() {
  return ['V1', '/V1/products/:sku/group-prices/:customerGroupId/tiers/:qty', 'DELETE'] as const
}

export function getDeleteV1ProductsSkuGroupPricesCustomerGroupIdTiersQtyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1.products)[':sku']['group-prices'][':customerGroupId']['tiers'][':qty']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProductsSkuGroupPricesCustomerGroupIdTiersQtyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.products)[':sku']['group-prices'][':customerGroupId']['tiers'][':qty']['$delete']
      >,
    ) {
      return parseResponse(
        client.V1.products[':sku']['group-prices'][':customerGroupId'].tiers[':qty'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteV1ProductsSkuGroupPricesCustomerGroupIdTiersQty<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1.products)[':sku']['group-prices'][':customerGroupId']['tiers'][':qty']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1ProductsSkuGroupPricesCustomerGroupIdTiersQtyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ProductsSkuGroupPricesCustomerGroupIdTiersQtyPricePriceMutationKey() {
  return [
    'V1',
    '/V1/products/:sku/group-prices/:customerGroupId/tiers/:qty/price/:price',
    'POST',
  ] as const
}

export function getPostV1ProductsSkuGroupPricesCustomerGroupIdTiersQtyPricePriceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1.products)[':sku']['group-prices'][':customerGroupId']['tiers'][':qty']['price'][':price']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsSkuGroupPricesCustomerGroupIdTiersQtyPricePriceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.products)[':sku']['group-prices'][':customerGroupId']['tiers'][':qty']['price'][':price']['$post']
      >,
    ) {
      return parseResponse(
        client.V1.products[':sku']['group-prices'][':customerGroupId'].tiers[':qty'].price[
          ':price'
        ].$post(args, options),
      )
    },
  })
}

export function createPostV1ProductsSkuGroupPricesCustomerGroupIdTiersQtyPricePrice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1.products)[':sku']['group-prices'][':customerGroupId']['tiers'][':qty']['price'][':price']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1ProductsSkuGroupPricesCustomerGroupIdTiersQtyPricePriceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1ProductsSkuLinksMutationKey() {
  return ['V1', '/V1/products/:sku/links', 'PUT'] as const
}

export function getPutV1ProductsSkuLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)[':sku']['links']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.products)[':sku']['links']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProductsSkuLinksMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.products)[':sku']['links']['$put']>) {
      return parseResponse(client.V1.products[':sku'].links.$put(args, options))
    },
  })
}

export function createPutV1ProductsSkuLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.products)[':sku']['links']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.products)[':sku']['links']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ProductsSkuLinksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ProductsSkuLinksMutationKey() {
  return ['V1', '/V1/products/:sku/links', 'POST'] as const
}

export function getPostV1ProductsSkuLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)[':sku']['links']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.products)[':sku']['links']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsSkuLinksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.products)[':sku']['links']['$post']>,
    ) {
      return parseResponse(client.V1.products[':sku'].links.$post(args, options))
    },
  })
}

export function createPostV1ProductsSkuLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.products)[':sku']['links']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.products)[':sku']['links']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProductsSkuLinksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ProductsSkuLinksTypeQueryKey(
  args: InferRequestType<(typeof client.V1.products)[':sku']['links'][':type']['$get']>,
) {
  return ['V1', '/V1/products/:sku/links/:type', args] as const
}

export function getV1ProductsSkuLinksTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.products)[':sku']['links'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.products)[':sku']['links'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)[':sku']['links'][':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsSkuLinksTypeQueryKey>
  >({
    queryKey: getV1ProductsSkuLinksTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.products[':sku'].links[':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProductsSkuLinksType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.products)[':sku']['links'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.products)[':sku']['links'][':type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.products)[':sku']['links'][':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsSkuLinksTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProductsSkuLinksTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV1ProductsSkuLinksTypeLinkedProductSkuMutationKey() {
  return ['V1', '/V1/products/:sku/links/:type/:linkedProductSku', 'DELETE'] as const
}

export function getDeleteV1ProductsSkuLinksTypeLinkedProductSkuMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1.products)[':sku']['links'][':type'][':linkedProductSku']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProductsSkuLinksTypeLinkedProductSkuMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.products)[':sku']['links'][':type'][':linkedProductSku']['$delete']
      >,
    ) {
      return parseResponse(
        client.V1.products[':sku'].links[':type'][':linkedProductSku'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1ProductsSkuLinksTypeLinkedProductSku<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1.products)[':sku']['links'][':type'][':linkedProductSku']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ProductsSkuLinksTypeLinkedProductSkuMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ProductsSkuMediaQueryKey(
  args: InferRequestType<(typeof client.V1.products)[':sku']['media']['$get']>,
) {
  return ['V1', '/V1/products/:sku/media', args] as const
}

export function getV1ProductsSkuMediaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.products)[':sku']['media']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.products)[':sku']['media']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)[':sku']['media']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsSkuMediaQueryKey>
  >({
    queryKey: getV1ProductsSkuMediaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.products[':sku'].media.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProductsSkuMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.products)[':sku']['media']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.products)[':sku']['media']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.products)[':sku']['media']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsSkuMediaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ProductsSkuMediaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ProductsSkuMediaMutationKey() {
  return ['V1', '/V1/products/:sku/media', 'POST'] as const
}

export function getPostV1ProductsSkuMediaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)[':sku']['media']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.products)[':sku']['media']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsSkuMediaMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.products)[':sku']['media']['$post']>,
    ) {
      return parseResponse(client.V1.products[':sku'].media.$post(args, options))
    },
  })
}

export function createPostV1ProductsSkuMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.products)[':sku']['media']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.products)[':sku']['media']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProductsSkuMediaMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ProductsSkuMediaEntryIdQueryKey(
  args: InferRequestType<(typeof client.V1.products)[':sku']['media'][':entryId']['$get']>,
) {
  return ['V1', '/V1/products/:sku/media/:entryId', args] as const
}

export function getV1ProductsSkuMediaEntryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.products)[':sku']['media'][':entryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.products)[':sku']['media'][':entryId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)[':sku']['media'][':entryId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsSkuMediaEntryIdQueryKey>
  >({
    queryKey: getV1ProductsSkuMediaEntryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.products[':sku'].media[':entryId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProductsSkuMediaEntryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.products)[':sku']['media'][':entryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.products)[':sku']['media'][':entryId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.products)[':sku']['media'][':entryId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsSkuMediaEntryIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProductsSkuMediaEntryIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1ProductsSkuMediaEntryIdMutationKey() {
  return ['V1', '/V1/products/:sku/media/:entryId', 'PUT'] as const
}

export function getPutV1ProductsSkuMediaEntryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)[':sku']['media'][':entryId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.products)[':sku']['media'][':entryId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProductsSkuMediaEntryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.products)[':sku']['media'][':entryId']['$put']>,
    ) {
      return parseResponse(client.V1.products[':sku'].media[':entryId'].$put(args, options))
    },
  })
}

export function createPutV1ProductsSkuMediaEntryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.products)[':sku']['media'][':entryId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.products)[':sku']['media'][':entryId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ProductsSkuMediaEntryIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1ProductsSkuMediaEntryIdMutationKey() {
  return ['V1', '/V1/products/:sku/media/:entryId', 'DELETE'] as const
}

export function getDeleteV1ProductsSkuMediaEntryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)[':sku']['media'][':entryId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.products)[':sku']['media'][':entryId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProductsSkuMediaEntryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.products)[':sku']['media'][':entryId']['$delete']>,
    ) {
      return parseResponse(client.V1.products[':sku'].media[':entryId'].$delete(args, options))
    },
  })
}

export function createDeleteV1ProductsSkuMediaEntryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.products)[':sku']['media'][':entryId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.products)[':sku']['media'][':entryId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ProductsSkuMediaEntryIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ProductsSkuOptionsQueryKey(
  args: InferRequestType<(typeof client.V1.products)[':sku']['options']['$get']>,
) {
  return ['V1', '/V1/products/:sku/options', args] as const
}

export function getV1ProductsSkuOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.products)[':sku']['options']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.products)[':sku']['options']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)[':sku']['options']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsSkuOptionsQueryKey>
  >({
    queryKey: getV1ProductsSkuOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.products[':sku'].options.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProductsSkuOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.products)[':sku']['options']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.products)[':sku']['options']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.products)[':sku']['options']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsSkuOptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProductsSkuOptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ProductsSkuOptionsOptionIdQueryKey(
  args: InferRequestType<(typeof client.V1.products)[':sku']['options'][':optionId']['$get']>,
) {
  return ['V1', '/V1/products/:sku/options/:optionId', args] as const
}

export function getV1ProductsSkuOptionsOptionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.products)[':sku']['options'][':optionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.products)[':sku']['options'][':optionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)[':sku']['options'][':optionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsSkuOptionsOptionIdQueryKey>
  >({
    queryKey: getV1ProductsSkuOptionsOptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.products[':sku'].options[':optionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProductsSkuOptionsOptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.products)[':sku']['options'][':optionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.products)[':sku']['options'][':optionId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.products)[':sku']['options'][':optionId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsSkuOptionsOptionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProductsSkuOptionsOptionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV1ProductsSkuOptionsOptionIdMutationKey() {
  return ['V1', '/V1/products/:sku/options/:optionId', 'DELETE'] as const
}

export function getDeleteV1ProductsSkuOptionsOptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1.products)[':sku']['options'][':optionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProductsSkuOptionsOptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.products)[':sku']['options'][':optionId']['$delete']
      >,
    ) {
      return parseResponse(client.V1.products[':sku'].options[':optionId'].$delete(args, options))
    },
  })
}

export function createDeleteV1ProductsSkuOptionsOptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.V1.products)[':sku']['options'][':optionId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ProductsSkuOptionsOptionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1ProductsSkuWebsitesMutationKey() {
  return ['V1', '/V1/products/:sku/websites', 'PUT'] as const
}

export function getPutV1ProductsSkuWebsitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)[':sku']['websites']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.products)[':sku']['websites']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProductsSkuWebsitesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.products)[':sku']['websites']['$put']>,
    ) {
      return parseResponse(client.V1.products[':sku'].websites.$put(args, options))
    },
  })
}

export function createPutV1ProductsSkuWebsites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.products)[':sku']['websites']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.products)[':sku']['websites']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ProductsSkuWebsitesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ProductsSkuWebsitesMutationKey() {
  return ['V1', '/V1/products/:sku/websites', 'POST'] as const
}

export function getPostV1ProductsSkuWebsitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.products)[':sku']['websites']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.products)[':sku']['websites']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsSkuWebsitesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.products)[':sku']['websites']['$post']>,
    ) {
      return parseResponse(client.V1.products[':sku'].websites.$post(args, options))
    },
  })
}

export function createPostV1ProductsSkuWebsites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.products)[':sku']['websites']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.products)[':sku']['websites']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProductsSkuWebsitesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1ProductsSkuWebsitesWebsiteIdMutationKey() {
  return ['V1', '/V1/products/:sku/websites/:websiteId', 'DELETE'] as const
}

export function getDeleteV1ProductsSkuWebsitesWebsiteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1.products)[':sku']['websites'][':websiteId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProductsSkuWebsitesWebsiteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.products)[':sku']['websites'][':websiteId']['$delete']
      >,
    ) {
      return parseResponse(client.V1.products[':sku'].websites[':websiteId'].$delete(args, options))
    },
  })
}

export function createDeleteV1ProductsSkuWebsitesWebsiteId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.V1.products)[':sku']['websites'][':websiteId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ProductsSkuWebsitesWebsiteIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1RequisitionListsMutationKey() {
  return ['V1', '/V1/requisition_lists', 'POST'] as const
}

export function getPostV1RequisitionListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.requisition_lists.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.V1.requisition_lists.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RequisitionListsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.requisition_lists.$post>) {
      return parseResponse(client.V1.requisition_lists.$post(args, options))
    },
  })
}

export function createPostV1RequisitionLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.requisition_lists.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.V1.requisition_lists.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1RequisitionListsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ReturnsQueryKey(args: InferRequestType<typeof client.V1.returns.$get>) {
  return ['V1', '/V1/returns', args] as const
}

export function getV1ReturnsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.returns.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.V1.returns.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.returns.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ReturnsQueryKey>
  >({
    queryKey: getV1ReturnsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.returns.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Returns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.returns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.returns.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.returns.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ReturnsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ReturnsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ReturnsMutationKey() {
  return ['V1', '/V1/returns', 'POST'] as const
}

export function getPostV1ReturnsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.returns.$post>>>>>,
    TError,
    InferRequestType<typeof client.V1.returns.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ReturnsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.returns.$post>) {
      return parseResponse(client.V1.returns.$post(args, options))
    },
  })
}

export function createPostV1Returns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.returns.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.V1.returns.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ReturnsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ReturnsIdQueryKey(
  args: InferRequestType<(typeof client.V1.returns)[':id']['$get']>,
) {
  return ['V1', '/V1/returns/:id', args] as const
}

export function getV1ReturnsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.V1.returns)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.returns)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.returns)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReturnsIdQueryKey>
  >({
    queryKey: getV1ReturnsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.returns[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ReturnsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.V1.returns)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.returns)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.V1.returns)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ReturnsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ReturnsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV1ReturnsIdMutationKey() {
  return ['V1', '/V1/returns/:id', 'PUT'] as const
}

export function getPutV1ReturnsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.returns)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.returns)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ReturnsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.returns)[':id']['$put']>) {
      return parseResponse(client.V1.returns[':id'].$put(args, options))
    },
  })
}

export function createPutV1ReturnsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.V1.returns)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.returns)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ReturnsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1ReturnsIdMutationKey() {
  return ['V1', '/V1/returns/:id', 'DELETE'] as const
}

export function getDeleteV1ReturnsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.returns)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.returns)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ReturnsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.returns)[':id']['$delete']>) {
      return parseResponse(client.V1.returns[':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1ReturnsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.V1.returns)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.returns)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ReturnsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ReturnsIdCommentsQueryKey(
  args: InferRequestType<(typeof client.V1.returns)[':id']['comments']['$get']>,
) {
  return ['V1', '/V1/returns/:id/comments', args] as const
}

export function getV1ReturnsIdCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.returns)[':id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.returns)[':id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.returns)[':id']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReturnsIdCommentsQueryKey>
  >({
    queryKey: getV1ReturnsIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.returns[':id'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ReturnsIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.returns)[':id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.returns)[':id']['comments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.returns)[':id']['comments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ReturnsIdCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ReturnsIdCommentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ReturnsIdCommentsMutationKey() {
  return ['V1', '/V1/returns/:id/comments', 'POST'] as const
}

export function getPostV1ReturnsIdCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.returns)[':id']['comments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.returns)[':id']['comments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ReturnsIdCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.returns)[':id']['comments']['$post']>,
    ) {
      return parseResponse(client.V1.returns[':id'].comments.$post(args, options))
    },
  })
}

export function createPostV1ReturnsIdComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.returns)[':id']['comments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.returns)[':id']['comments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ReturnsIdCommentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ReturnsIdLabelsQueryKey(
  args: InferRequestType<(typeof client.V1.returns)[':id']['labels']['$get']>,
) {
  return ['V1', '/V1/returns/:id/labels', args] as const
}

export function getV1ReturnsIdLabelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.returns)[':id']['labels']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.returns)[':id']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.returns)[':id']['labels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReturnsIdLabelsQueryKey>
  >({
    queryKey: getV1ReturnsIdLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.returns[':id'].labels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ReturnsIdLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.returns)[':id']['labels']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.returns)[':id']['labels']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.returns)[':id']['labels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ReturnsIdLabelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ReturnsIdLabelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1ReturnsIdTrackingNumbersQueryKey(
  args: InferRequestType<(typeof client.V1.returns)[':id']['tracking-numbers']['$get']>,
) {
  return ['V1', '/V1/returns/:id/tracking-numbers', args] as const
}

export function getV1ReturnsIdTrackingNumbersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.returns)[':id']['tracking-numbers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.returns)[':id']['tracking-numbers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.returns)[':id']['tracking-numbers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReturnsIdTrackingNumbersQueryKey>
  >({
    queryKey: getV1ReturnsIdTrackingNumbersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.returns[':id']['tracking-numbers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ReturnsIdTrackingNumbers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.returns)[':id']['tracking-numbers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.returns)[':id']['tracking-numbers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.returns)[':id']['tracking-numbers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ReturnsIdTrackingNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ReturnsIdTrackingNumbersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ReturnsIdTrackingNumbersMutationKey() {
  return ['V1', '/V1/returns/:id/tracking-numbers', 'POST'] as const
}

export function getPostV1ReturnsIdTrackingNumbersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.returns)[':id']['tracking-numbers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.returns)[':id']['tracking-numbers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ReturnsIdTrackingNumbersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.returns)[':id']['tracking-numbers']['$post']>,
    ) {
      return parseResponse(client.V1.returns[':id']['tracking-numbers'].$post(args, options))
    },
  })
}

export function createPostV1ReturnsIdTrackingNumbers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.returns)[':id']['tracking-numbers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.returns)[':id']['tracking-numbers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ReturnsIdTrackingNumbersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1ReturnsIdTrackingNumbersTrackIdMutationKey() {
  return ['V1', '/V1/returns/:id/tracking-numbers/:trackId', 'DELETE'] as const
}

export function getDeleteV1ReturnsIdTrackingNumbersTrackIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1.returns)[':id']['tracking-numbers'][':trackId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ReturnsIdTrackingNumbersTrackIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.returns)[':id']['tracking-numbers'][':trackId']['$delete']
      >,
    ) {
      return parseResponse(
        client.V1.returns[':id']['tracking-numbers'][':trackId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1ReturnsIdTrackingNumbersTrackId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.V1.returns)[':id']['tracking-numbers'][':trackId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.V1.returns)[':id']['tracking-numbers'][':trackId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ReturnsIdTrackingNumbersTrackIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ReturnsAttributeMetadataQueryKey() {
  return ['V1', '/V1/returnsAttributeMetadata'] as const
}

export function getV1ReturnsAttributeMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.V1.returnsAttributeMetadata.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.returnsAttributeMetadata.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReturnsAttributeMetadataQueryKey>
  >({
    queryKey: getV1ReturnsAttributeMetadataQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.returnsAttributeMetadata.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ReturnsAttributeMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.V1.returnsAttributeMetadata.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.V1.returnsAttributeMetadata.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ReturnsAttributeMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ReturnsAttributeMetadataQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1ReturnsAttributeMetadataCustomQueryKey(
  args: InferRequestType<typeof client.V1.returnsAttributeMetadata.custom.$get>,
) {
  return ['V1', '/V1/returnsAttributeMetadata/custom', args] as const
}

export function getV1ReturnsAttributeMetadataCustomQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.V1.returnsAttributeMetadata.custom.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.V1.returnsAttributeMetadata.custom.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.V1.returnsAttributeMetadata.custom.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReturnsAttributeMetadataCustomQueryKey>
  >({
    queryKey: getV1ReturnsAttributeMetadataCustomQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.returnsAttributeMetadata.custom.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ReturnsAttributeMetadataCustom<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.V1.returnsAttributeMetadata.custom.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.returnsAttributeMetadata.custom.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.V1.returnsAttributeMetadata.custom.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ReturnsAttributeMetadataCustomQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ReturnsAttributeMetadataCustomQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ReturnsAttributeMetadataFormFormCodeQueryKey(
  args: InferRequestType<(typeof client.V1.returnsAttributeMetadata.form)[':formCode']['$get']>,
) {
  return ['V1', '/V1/returnsAttributeMetadata/form/:formCode', args] as const
}

export function getV1ReturnsAttributeMetadataFormFormCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.returnsAttributeMetadata.form)[':formCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.returnsAttributeMetadata.form)[':formCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.returnsAttributeMetadata.form)[':formCode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReturnsAttributeMetadataFormFormCodeQueryKey>
  >({
    queryKey: getV1ReturnsAttributeMetadataFormFormCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.returnsAttributeMetadata.form[':formCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ReturnsAttributeMetadataFormFormCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.returnsAttributeMetadata.form)[':formCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1.returnsAttributeMetadata.form)[':formCode']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.returnsAttributeMetadata.form)[':formCode']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ReturnsAttributeMetadataFormFormCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ReturnsAttributeMetadataFormFormCodeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1ReturnsAttributeMetadataAttributeCodeQueryKey(
  args: InferRequestType<(typeof client.V1.returnsAttributeMetadata)[':attributeCode']['$get']>,
) {
  return ['V1', '/V1/returnsAttributeMetadata/:attributeCode', args] as const
}

export function getV1ReturnsAttributeMetadataAttributeCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.returnsAttributeMetadata)[':attributeCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.returnsAttributeMetadata)[':attributeCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.returnsAttributeMetadata)[':attributeCode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReturnsAttributeMetadataAttributeCodeQueryKey>
  >({
    queryKey: getV1ReturnsAttributeMetadataAttributeCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.returnsAttributeMetadata[':attributeCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ReturnsAttributeMetadataAttributeCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.returnsAttributeMetadata)[':attributeCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1.returnsAttributeMetadata)[':attributeCode']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.returnsAttributeMetadata)[':attributeCode']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ReturnsAttributeMetadataAttributeCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ReturnsAttributeMetadataAttributeCodeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostV1RewardMineUseRewardMutationKey() {
  return ['V1', '/V1/reward/mine/use-reward', 'POST'] as const
}

export function getPostV1RewardMineUseRewardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.reward.mine)['use-reward']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1RewardMineUseRewardMutationKey(),
    async mutationFn() {
      return parseResponse(client.V1.reward.mine['use-reward'].$post(undefined, options))
    },
  })
}

export function createPostV1RewardMineUseReward<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.reward.mine)['use-reward']['$post']>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1RewardMineUseRewardMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SalesRulesMutationKey() {
  return ['V1', '/V1/salesRules', 'POST'] as const
}

export function getPostV1SalesRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.salesRules.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.V1.salesRules.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SalesRulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.salesRules.$post>) {
      return parseResponse(client.V1.salesRules.$post(args, options))
    },
  })
}

export function createPostV1SalesRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.salesRules.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.V1.salesRules.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SalesRulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1SalesRulesSearchQueryKey(
  args: InferRequestType<typeof client.V1.salesRules.search.$get>,
) {
  return ['V1', '/V1/salesRules/search', args] as const
}

export function getV1SalesRulesSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.salesRules.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.V1.salesRules.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.salesRules.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1SalesRulesSearchQueryKey>
  >({
    queryKey: getV1SalesRulesSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.salesRules.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1SalesRulesSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.salesRules.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.salesRules.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.salesRules.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SalesRulesSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1SalesRulesSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1SalesRulesRuleIdQueryKey(
  args: InferRequestType<(typeof client.V1.salesRules)[':ruleId']['$get']>,
) {
  return ['V1', '/V1/salesRules/:ruleId', args] as const
}

export function getV1SalesRulesRuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.salesRules)[':ruleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.salesRules)[':ruleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.salesRules)[':ruleId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SalesRulesRuleIdQueryKey>
  >({
    queryKey: getV1SalesRulesRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.salesRules[':ruleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1SalesRulesRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.salesRules)[':ruleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.salesRules)[':ruleId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.salesRules)[':ruleId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SalesRulesRuleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1SalesRulesRuleIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV1SalesRulesRuleIdMutationKey() {
  return ['V1', '/V1/salesRules/:ruleId', 'PUT'] as const
}

export function getPutV1SalesRulesRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.salesRules)[':ruleId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.salesRules)[':ruleId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SalesRulesRuleIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.salesRules)[':ruleId']['$put']>) {
      return parseResponse(client.V1.salesRules[':ruleId'].$put(args, options))
    },
  })
}

export function createPutV1SalesRulesRuleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.salesRules)[':ruleId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.salesRules)[':ruleId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1SalesRulesRuleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1SalesRulesRuleIdMutationKey() {
  return ['V1', '/V1/salesRules/:ruleId', 'DELETE'] as const
}

export function getDeleteV1SalesRulesRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.salesRules)[':ruleId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.salesRules)[':ruleId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1SalesRulesRuleIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.salesRules)[':ruleId']['$delete']>) {
      return parseResponse(client.V1.salesRules[':ruleId'].$delete(args, options))
    },
  })
}

export function createDeleteV1SalesRulesRuleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.salesRules)[':ruleId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.salesRules)[':ruleId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1SalesRulesRuleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1SearchQueryKey(args: InferRequestType<typeof client.V1.search.$get>) {
  return ['V1', '/V1/search', args] as const
}

export function getV1SearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.V1.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1SearchQueryKey>
  >({
    queryKey: getV1SearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Search<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1SearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1SearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1SharedCatalogMutationKey() {
  return ['V1', '/V1/sharedCatalog', 'POST'] as const
}

export function getPostV1SharedCatalogMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.sharedCatalog.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.V1.sharedCatalog.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SharedCatalogMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.sharedCatalog.$post>) {
      return parseResponse(client.V1.sharedCatalog.$post(args, options))
    },
  })
}

export function createPostV1SharedCatalog<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.sharedCatalog.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.V1.sharedCatalog.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SharedCatalogMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1SharedCatalogIndexQueryKey(
  args: InferRequestType<typeof client.V1.sharedCatalog.index.$get>,
) {
  return ['V1', '/V1/sharedCatalog/', args] as const
}

export function getV1SharedCatalogIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.sharedCatalog.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.V1.sharedCatalog.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.sharedCatalog.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SharedCatalogIndexQueryKey>
  >({
    queryKey: getV1SharedCatalogIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.sharedCatalog.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1SharedCatalogIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.sharedCatalog.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.sharedCatalog.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.sharedCatalog.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SharedCatalogIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1SharedCatalogIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1SharedCatalogIdMutationKey() {
  return ['V1', '/V1/sharedCatalog/:id', 'PUT'] as const
}

export function getPutV1SharedCatalogIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.sharedCatalog)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SharedCatalogIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.sharedCatalog)[':id']['$put']>) {
      return parseResponse(client.V1.sharedCatalog[':id'].$put(args, options))
    },
  })
}

export function createPutV1SharedCatalogId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.sharedCatalog)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1SharedCatalogIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SharedCatalogIdAssignCategoriesMutationKey() {
  return ['V1', '/V1/sharedCatalog/:id/assignCategories', 'POST'] as const
}

export function getPostV1SharedCatalogIdAssignCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':id']['assignCategories']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.sharedCatalog)[':id']['assignCategories']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SharedCatalogIdAssignCategoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.sharedCatalog)[':id']['assignCategories']['$post']>,
    ) {
      return parseResponse(client.V1.sharedCatalog[':id'].assignCategories.$post(args, options))
    },
  })
}

export function createPostV1SharedCatalogIdAssignCategories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.sharedCatalog)[':id']['assignCategories']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.sharedCatalog)[':id']['assignCategories']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SharedCatalogIdAssignCategoriesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SharedCatalogIdAssignProductsMutationKey() {
  return ['V1', '/V1/sharedCatalog/:id/assignProducts', 'POST'] as const
}

export function getPostV1SharedCatalogIdAssignProductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':id']['assignProducts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.sharedCatalog)[':id']['assignProducts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SharedCatalogIdAssignProductsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.sharedCatalog)[':id']['assignProducts']['$post']>,
    ) {
      return parseResponse(client.V1.sharedCatalog[':id'].assignProducts.$post(args, options))
    },
  })
}

export function createPostV1SharedCatalogIdAssignProducts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.sharedCatalog)[':id']['assignProducts']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.sharedCatalog)[':id']['assignProducts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SharedCatalogIdAssignProductsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1SharedCatalogIdCategoriesQueryKey(
  args: InferRequestType<(typeof client.V1.sharedCatalog)[':id']['categories']['$get']>,
) {
  return ['V1', '/V1/sharedCatalog/:id/categories', args] as const
}

export function getV1SharedCatalogIdCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':id']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.sharedCatalog)[':id']['categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':id']['categories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SharedCatalogIdCategoriesQueryKey>
  >({
    queryKey: getV1SharedCatalogIdCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.sharedCatalog[':id'].categories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1SharedCatalogIdCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':id']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.sharedCatalog)[':id']['categories']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':id']['categories']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SharedCatalogIdCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1SharedCatalogIdCategoriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1SharedCatalogIdProductsQueryKey(
  args: InferRequestType<(typeof client.V1.sharedCatalog)[':id']['products']['$get']>,
) {
  return ['V1', '/V1/sharedCatalog/:id/products', args] as const
}

export function getV1SharedCatalogIdProductsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':id']['products']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.sharedCatalog)[':id']['products']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':id']['products']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SharedCatalogIdProductsQueryKey>
  >({
    queryKey: getV1SharedCatalogIdProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.sharedCatalog[':id'].products.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1SharedCatalogIdProducts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':id']['products']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.sharedCatalog)[':id']['products']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':id']['products']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SharedCatalogIdProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1SharedCatalogIdProductsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1SharedCatalogIdUnassignCategoriesMutationKey() {
  return ['V1', '/V1/sharedCatalog/:id/unassignCategories', 'POST'] as const
}

export function getPostV1SharedCatalogIdUnassignCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.V1.sharedCatalog)[':id']['unassignCategories']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SharedCatalogIdUnassignCategoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.sharedCatalog)[':id']['unassignCategories']['$post']
      >,
    ) {
      return parseResponse(client.V1.sharedCatalog[':id'].unassignCategories.$post(args, options))
    },
  })
}

export function createPostV1SharedCatalogIdUnassignCategories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.V1.sharedCatalog)[':id']['unassignCategories']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SharedCatalogIdUnassignCategoriesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SharedCatalogIdUnassignProductsMutationKey() {
  return ['V1', '/V1/sharedCatalog/:id/unassignProducts', 'POST'] as const
}

export function getPostV1SharedCatalogIdUnassignProductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':id']['unassignProducts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.sharedCatalog)[':id']['unassignProducts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SharedCatalogIdUnassignProductsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.sharedCatalog)[':id']['unassignProducts']['$post']>,
    ) {
      return parseResponse(client.V1.sharedCatalog[':id'].unassignProducts.$post(args, options))
    },
  })
}

export function createPostV1SharedCatalogIdUnassignProducts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.V1.sharedCatalog)[':id']['unassignProducts']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.sharedCatalog)[':id']['unassignProducts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SharedCatalogIdUnassignProductsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1SharedCatalogSharedCatalogIdQueryKey(
  args: InferRequestType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['$get']>,
) {
  return ['V1', '/V1/sharedCatalog/:sharedCatalogId', args] as const
}

export function getV1SharedCatalogSharedCatalogIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SharedCatalogSharedCatalogIdQueryKey>
  >({
    queryKey: getV1SharedCatalogSharedCatalogIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.sharedCatalog[':sharedCatalogId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1SharedCatalogSharedCatalogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SharedCatalogSharedCatalogIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1SharedCatalogSharedCatalogIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV1SharedCatalogSharedCatalogIdMutationKey() {
  return ['V1', '/V1/sharedCatalog/:sharedCatalogId', 'DELETE'] as const
}

export function getDeleteV1SharedCatalogSharedCatalogIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1SharedCatalogSharedCatalogIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['$delete']>,
    ) {
      return parseResponse(client.V1.sharedCatalog[':sharedCatalogId'].$delete(args, options))
    },
  })
}

export function createDeleteV1SharedCatalogSharedCatalogId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1SharedCatalogSharedCatalogIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SharedCatalogSharedCatalogIdAssignCompaniesMutationKey() {
  return ['V1', '/V1/sharedCatalog/:sharedCatalogId/assignCompanies', 'POST'] as const
}

export function getPostV1SharedCatalogSharedCatalogIdAssignCompaniesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1.sharedCatalog)[':sharedCatalogId']['assignCompanies']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1SharedCatalogSharedCatalogIdAssignCompaniesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.sharedCatalog)[':sharedCatalogId']['assignCompanies']['$post']
      >,
    ) {
      return parseResponse(
        client.V1.sharedCatalog[':sharedCatalogId'].assignCompanies.$post(args, options),
      )
    },
  })
}

export function createPostV1SharedCatalogSharedCatalogIdAssignCompanies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1.sharedCatalog)[':sharedCatalogId']['assignCompanies']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SharedCatalogSharedCatalogIdAssignCompaniesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1SharedCatalogSharedCatalogIdCompaniesQueryKey(
  args: InferRequestType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['companies']['$get']>,
) {
  return ['V1', '/V1/sharedCatalog/:sharedCatalogId/companies', args] as const
}

export function getV1SharedCatalogSharedCatalogIdCompaniesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['companies']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['companies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['companies']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SharedCatalogSharedCatalogIdCompaniesQueryKey>
  >({
    queryKey: getV1SharedCatalogSharedCatalogIdCompaniesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.sharedCatalog[':sharedCatalogId'].companies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1SharedCatalogSharedCatalogIdCompanies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.V1.sharedCatalog)[':sharedCatalogId']['companies']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.V1.sharedCatalog)[':sharedCatalogId']['companies']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.V1.sharedCatalog)[':sharedCatalogId']['companies']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SharedCatalogSharedCatalogIdCompaniesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1SharedCatalogSharedCatalogIdCompaniesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostV1SharedCatalogSharedCatalogIdUnassignCompaniesMutationKey() {
  return ['V1', '/V1/sharedCatalog/:sharedCatalogId/unassignCompanies', 'POST'] as const
}

export function getPostV1SharedCatalogSharedCatalogIdUnassignCompaniesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1.sharedCatalog)[':sharedCatalogId']['unassignCompanies']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1SharedCatalogSharedCatalogIdUnassignCompaniesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1.sharedCatalog)[':sharedCatalogId']['unassignCompanies']['$post']
      >,
    ) {
      return parseResponse(
        client.V1.sharedCatalog[':sharedCatalogId'].unassignCompanies.$post(args, options),
      )
    },
  })
}

export function createPostV1SharedCatalogSharedCatalogIdUnassignCompanies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1.sharedCatalog)[':sharedCatalogId']['unassignCompanies']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SharedCatalogSharedCatalogIdUnassignCompaniesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ShipmentIndexMutationKey() {
  return ['V1', '/V1/shipment/', 'POST'] as const
}

export function getPostV1ShipmentIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.shipment.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.V1.shipment.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ShipmentIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.shipment.index.$post>) {
      return parseResponse(client.V1.shipment.index.$post(args, options))
    },
  })
}

export function createPostV1ShipmentIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.shipment.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.V1.shipment.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ShipmentIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ShipmentTrackMutationKey() {
  return ['V1', '/V1/shipment/track', 'POST'] as const
}

export function getPostV1ShipmentTrackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.shipment.track.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.V1.shipment.track.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ShipmentTrackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.shipment.track.$post>) {
      return parseResponse(client.V1.shipment.track.$post(args, options))
    },
  })
}

export function createPostV1ShipmentTrack<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.shipment.track.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.V1.shipment.track.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ShipmentTrackMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1ShipmentTrackIdMutationKey() {
  return ['V1', '/V1/shipment/track/:id', 'DELETE'] as const
}

export function getDeleteV1ShipmentTrackIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.shipment.track)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.shipment.track)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ShipmentTrackIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.shipment.track)[':id']['$delete']>) {
      return parseResponse(client.V1.shipment.track[':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1ShipmentTrackId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.shipment.track)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.shipment.track)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ShipmentTrackIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ShipmentIdQueryKey(
  args: InferRequestType<(typeof client.V1.shipment)[':id']['$get']>,
) {
  return ['V1', '/V1/shipment/:id', args] as const
}

export function getV1ShipmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.shipment)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.shipment)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.shipment)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ShipmentIdQueryKey>
  >({
    queryKey: getV1ShipmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.shipment[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ShipmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.shipment)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.shipment)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.V1.shipment)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ShipmentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ShipmentIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1ShipmentIdCommentsQueryKey(
  args: InferRequestType<(typeof client.V1.shipment)[':id']['comments']['$get']>,
) {
  return ['V1', '/V1/shipment/:id/comments', args] as const
}

export function getV1ShipmentIdCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.shipment)[':id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.shipment)[':id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.shipment)[':id']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ShipmentIdCommentsQueryKey>
  >({
    queryKey: getV1ShipmentIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.shipment[':id'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ShipmentIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.shipment)[':id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.shipment)[':id']['comments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.shipment)[':id']['comments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ShipmentIdCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ShipmentIdCommentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ShipmentIdCommentsMutationKey() {
  return ['V1', '/V1/shipment/:id/comments', 'POST'] as const
}

export function getPostV1ShipmentIdCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.shipment)[':id']['comments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.shipment)[':id']['comments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ShipmentIdCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.shipment)[':id']['comments']['$post']>,
    ) {
      return parseResponse(client.V1.shipment[':id'].comments.$post(args, options))
    },
  })
}

export function createPostV1ShipmentIdComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.shipment)[':id']['comments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.shipment)[':id']['comments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ShipmentIdCommentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ShipmentIdEmailsMutationKey() {
  return ['V1', '/V1/shipment/:id/emails', 'POST'] as const
}

export function getPostV1ShipmentIdEmailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.shipment)[':id']['emails']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.shipment)[':id']['emails']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ShipmentIdEmailsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.shipment)[':id']['emails']['$post']>,
    ) {
      return parseResponse(client.V1.shipment[':id'].emails.$post(args, options))
    },
  })
}

export function createPostV1ShipmentIdEmails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.shipment)[':id']['emails']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.shipment)[':id']['emails']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ShipmentIdEmailsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ShipmentIdLabelQueryKey(
  args: InferRequestType<(typeof client.V1.shipment)[':id']['label']['$get']>,
) {
  return ['V1', '/V1/shipment/:id/label', args] as const
}

export function getV1ShipmentIdLabelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.shipment)[':id']['label']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.shipment)[':id']['label']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.shipment)[':id']['label']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ShipmentIdLabelQueryKey>
  >({
    queryKey: getV1ShipmentIdLabelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.shipment[':id'].label.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ShipmentIdLabel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.shipment)[':id']['label']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.shipment)[':id']['label']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.shipment)[':id']['label']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ShipmentIdLabelQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ShipmentIdLabelQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1ShipmentsQueryKey(args: InferRequestType<typeof client.V1.shipments.$get>) {
  return ['V1', '/V1/shipments', args] as const
}

export function getV1ShipmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.shipments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.V1.shipments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.shipments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ShipmentsQueryKey>
  >({
    queryKey: getV1ShipmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.shipments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Shipments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.shipments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.shipments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.shipments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ShipmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ShipmentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1StockItemsLowStockIndexQueryKey(
  args: InferRequestType<typeof client.V1.stockItems.lowStock.index.$get>,
) {
  return ['V1', '/V1/stockItems/lowStock/', args] as const
}

export function getV1StockItemsLowStockIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.V1.stockItems.lowStock.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.V1.stockItems.lowStock.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.stockItems.lowStock.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1StockItemsLowStockIndexQueryKey>
  >({
    queryKey: getV1StockItemsLowStockIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.stockItems.lowStock.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1StockItemsLowStockIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.V1.stockItems.lowStock.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.stockItems.lowStock.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.V1.stockItems.lowStock.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1StockItemsLowStockIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1StockItemsLowStockIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1StockItemsProductSkuQueryKey(
  args: InferRequestType<(typeof client.V1.stockItems)[':productSku']['$get']>,
) {
  return ['V1', '/V1/stockItems/:productSku', args] as const
}

export function getV1StockItemsProductSkuQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.stockItems)[':productSku']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.stockItems)[':productSku']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.stockItems)[':productSku']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1StockItemsProductSkuQueryKey>
  >({
    queryKey: getV1StockItemsProductSkuQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.stockItems[':productSku'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1StockItemsProductSku<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.stockItems)[':productSku']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.stockItems)[':productSku']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.stockItems)[':productSku']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1StockItemsProductSkuQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1StockItemsProductSkuQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1StockStatusesProductSkuQueryKey(
  args: InferRequestType<(typeof client.V1.stockStatuses)[':productSku']['$get']>,
) {
  return ['V1', '/V1/stockStatuses/:productSku', args] as const
}

export function getV1StockStatusesProductSkuQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.stockStatuses)[':productSku']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.stockStatuses)[':productSku']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.stockStatuses)[':productSku']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1StockStatusesProductSkuQueryKey>
  >({
    queryKey: getV1StockStatusesProductSkuQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.stockStatuses[':productSku'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1StockStatusesProductSku<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.stockStatuses)[':productSku']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.stockStatuses)[':productSku']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.stockStatuses)[':productSku']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1StockStatusesProductSkuQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1StockStatusesProductSkuQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1StoreStoreConfigsQueryKey(
  args: InferRequestType<typeof client.V1.store.storeConfigs.$get>,
) {
  return ['V1', '/V1/store/storeConfigs', args] as const
}

export function getV1StoreStoreConfigsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.storeConfigs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.V1.store.storeConfigs.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.storeConfigs.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1StoreStoreConfigsQueryKey>
  >({
    queryKey: getV1StoreStoreConfigsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.store.storeConfigs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1StoreStoreConfigs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.storeConfigs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.store.storeConfigs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.storeConfigs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1StoreStoreConfigsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1StoreStoreConfigsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1StoreStoreGroupsQueryKey() {
  return ['V1', '/V1/store/storeGroups'] as const
}

export function getV1StoreStoreGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.storeGroups.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.storeGroups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1StoreStoreGroupsQueryKey>
  >({
    queryKey: getV1StoreStoreGroupsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.store.storeGroups.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1StoreStoreGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.storeGroups.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.storeGroups.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1StoreStoreGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1StoreStoreGroupsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1StoreStoreViewsQueryKey() {
  return ['V1', '/V1/store/storeViews'] as const
}

export function getV1StoreStoreViewsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.storeViews.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.storeViews.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1StoreStoreViewsQueryKey>
  >({
    queryKey: getV1StoreStoreViewsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.store.storeViews.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1StoreStoreViews<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.storeViews.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.storeViews.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1StoreStoreViewsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1StoreStoreViewsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1StoreWebsitesQueryKey() {
  return ['V1', '/V1/store/websites'] as const
}

export function getV1StoreWebsitesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.websites.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.websites.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1StoreWebsitesQueryKey>
  >({
    queryKey: getV1StoreWebsitesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.store.websites.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1StoreWebsites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.websites.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.store.websites.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1StoreWebsitesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1StoreWebsitesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV1TaxClassesMutationKey() {
  return ['V1', '/V1/taxClasses', 'POST'] as const
}

export function getPostV1TaxClassesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxClasses.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.V1.taxClasses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TaxClassesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.taxClasses.$post>) {
      return parseResponse(client.V1.taxClasses.$post(args, options))
    },
  })
}

export function createPostV1TaxClasses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxClasses.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.V1.taxClasses.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TaxClassesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1TaxClassesSearchQueryKey(
  args: InferRequestType<typeof client.V1.taxClasses.search.$get>,
) {
  return ['V1', '/V1/taxClasses/search', args] as const
}

export function getV1TaxClassesSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxClasses.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.V1.taxClasses.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxClasses.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1TaxClassesSearchQueryKey>
  >({
    queryKey: getV1TaxClassesSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.taxClasses.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1TaxClassesSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxClasses.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.taxClasses.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxClasses.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TaxClassesSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TaxClassesSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV1TaxClassesClassIdMutationKey() {
  return ['V1', '/V1/taxClasses/:classId', 'PUT'] as const
}

export function getPutV1TaxClassesClassIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.taxClasses)[':classId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.taxClasses)[':classId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1TaxClassesClassIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.taxClasses)[':classId']['$put']>) {
      return parseResponse(client.V1.taxClasses[':classId'].$put(args, options))
    },
  })
}

export function createPutV1TaxClassesClassId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.taxClasses)[':classId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.taxClasses)[':classId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1TaxClassesClassIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1TaxClassesTaxClassIdQueryKey(
  args: InferRequestType<(typeof client.V1.taxClasses)[':taxClassId']['$get']>,
) {
  return ['V1', '/V1/taxClasses/:taxClassId', args] as const
}

export function getV1TaxClassesTaxClassIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.taxClasses)[':taxClassId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.taxClasses)[':taxClassId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.taxClasses)[':taxClassId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TaxClassesTaxClassIdQueryKey>
  >({
    queryKey: getV1TaxClassesTaxClassIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.taxClasses[':taxClassId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1TaxClassesTaxClassId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.V1.taxClasses)[':taxClassId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.taxClasses)[':taxClassId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.taxClasses)[':taxClassId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TaxClassesTaxClassIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1TaxClassesTaxClassIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV1TaxClassesTaxClassIdMutationKey() {
  return ['V1', '/V1/taxClasses/:taxClassId', 'DELETE'] as const
}

export function getDeleteV1TaxClassesTaxClassIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.taxClasses)[':taxClassId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.taxClasses)[':taxClassId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TaxClassesTaxClassIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.taxClasses)[':taxClassId']['$delete']>,
    ) {
      return parseResponse(client.V1.taxClasses[':taxClassId'].$delete(args, options))
    },
  })
}

export function createDeleteV1TaxClassesTaxClassId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.taxClasses)[':taxClassId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.taxClasses)[':taxClassId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1TaxClassesTaxClassIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1TaxRatesMutationKey() {
  return ['V1', '/V1/taxRates', 'PUT'] as const
}

export function getPutV1TaxRatesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxRates.$put>>>>>,
    TError,
    InferRequestType<typeof client.V1.taxRates.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1TaxRatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.taxRates.$put>) {
      return parseResponse(client.V1.taxRates.$put(args, options))
    },
  })
}

export function createPutV1TaxRates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxRates.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.V1.taxRates.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1TaxRatesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1TaxRatesMutationKey() {
  return ['V1', '/V1/taxRates', 'POST'] as const
}

export function getPostV1TaxRatesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxRates.$post>>>>>,
    TError,
    InferRequestType<typeof client.V1.taxRates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TaxRatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.taxRates.$post>) {
      return parseResponse(client.V1.taxRates.$post(args, options))
    },
  })
}

export function createPostV1TaxRates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxRates.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.V1.taxRates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TaxRatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1TaxRatesSearchQueryKey(
  args: InferRequestType<typeof client.V1.taxRates.search.$get>,
) {
  return ['V1', '/V1/taxRates/search', args] as const
}

export function getV1TaxRatesSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxRates.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.V1.taxRates.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxRates.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1TaxRatesSearchQueryKey>
  >({
    queryKey: getV1TaxRatesSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.taxRates.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1TaxRatesSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxRates.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.taxRates.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxRates.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TaxRatesSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TaxRatesSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1TaxRatesRateIdQueryKey(
  args: InferRequestType<(typeof client.V1.taxRates)[':rateId']['$get']>,
) {
  return ['V1', '/V1/taxRates/:rateId', args] as const
}

export function getV1TaxRatesRateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.taxRates)[':rateId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.taxRates)[':rateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.taxRates)[':rateId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TaxRatesRateIdQueryKey>
  >({
    queryKey: getV1TaxRatesRateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.taxRates[':rateId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1TaxRatesRateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.taxRates)[':rateId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.taxRates)[':rateId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.taxRates)[':rateId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TaxRatesRateIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TaxRatesRateIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV1TaxRatesRateIdMutationKey() {
  return ['V1', '/V1/taxRates/:rateId', 'DELETE'] as const
}

export function getDeleteV1TaxRatesRateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.taxRates)[':rateId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.taxRates)[':rateId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TaxRatesRateIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.taxRates)[':rateId']['$delete']>) {
      return parseResponse(client.V1.taxRates[':rateId'].$delete(args, options))
    },
  })
}

export function createDeleteV1TaxRatesRateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.taxRates)[':rateId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.taxRates)[':rateId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1TaxRatesRateIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1TaxRulesMutationKey() {
  return ['V1', '/V1/taxRules', 'PUT'] as const
}

export function getPutV1TaxRulesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxRules.$put>>>>>,
    TError,
    InferRequestType<typeof client.V1.taxRules.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1TaxRulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.taxRules.$put>) {
      return parseResponse(client.V1.taxRules.$put(args, options))
    },
  })
}

export function createPutV1TaxRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxRules.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.V1.taxRules.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1TaxRulesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1TaxRulesMutationKey() {
  return ['V1', '/V1/taxRules', 'POST'] as const
}

export function getPostV1TaxRulesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxRules.$post>>>>>,
    TError,
    InferRequestType<typeof client.V1.taxRules.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TaxRulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.V1.taxRules.$post>) {
      return parseResponse(client.V1.taxRules.$post(args, options))
    },
  })
}

export function createPostV1TaxRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxRules.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.V1.taxRules.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TaxRulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1TaxRulesSearchQueryKey(
  args: InferRequestType<typeof client.V1.taxRules.search.$get>,
) {
  return ['V1', '/V1/taxRules/search', args] as const
}

export function getV1TaxRulesSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxRules.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.V1.taxRules.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxRules.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1TaxRulesSearchQueryKey>
  >({
    queryKey: getV1TaxRulesSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.taxRules.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1TaxRulesSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxRules.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.taxRules.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.V1.taxRules.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TaxRulesSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TaxRulesSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1TaxRulesRuleIdQueryKey(
  args: InferRequestType<(typeof client.V1.taxRules)[':ruleId']['$get']>,
) {
  return ['V1', '/V1/taxRules/:ruleId', args] as const
}

export function getV1TaxRulesRuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.taxRules)[':ruleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.taxRules)[':ruleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.taxRules)[':ruleId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TaxRulesRuleIdQueryKey>
  >({
    queryKey: getV1TaxRulesRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.taxRules[':ruleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1TaxRulesRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.taxRules)[':ruleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.taxRules)[':ruleId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.taxRules)[':ruleId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TaxRulesRuleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TaxRulesRuleIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV1TaxRulesRuleIdMutationKey() {
  return ['V1', '/V1/taxRules/:ruleId', 'DELETE'] as const
}

export function getDeleteV1TaxRulesRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.taxRules)[':ruleId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.taxRules)[':ruleId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TaxRulesRuleIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.taxRules)[':ruleId']['$delete']>) {
      return parseResponse(client.V1.taxRules[':ruleId'].$delete(args, options))
    },
  })
}

export function createDeleteV1TaxRulesRuleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.taxRules)[':ruleId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.taxRules)[':ruleId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1TaxRulesRuleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1TeamIndexQueryKey(args: InferRequestType<typeof client.V1.team.index.$get>) {
  return ['V1', '/V1/team/', args] as const
}

export function getV1TeamIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.team.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.V1.team.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.team.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1TeamIndexQueryKey>
  >({
    queryKey: getV1TeamIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.team.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1TeamIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.team.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.team.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.team.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1TeamIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TeamIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1TeamCompanyIdMutationKey() {
  return ['V1', '/V1/team/:companyId', 'POST'] as const
}

export function getPostV1TeamCompanyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.team)[':companyId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.team)[':companyId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TeamCompanyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.team)[':companyId']['$post']>) {
      return parseResponse(client.V1.team[':companyId'].$post(args, options))
    },
  })
}

export function createPostV1TeamCompanyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.team)[':companyId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.team)[':companyId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TeamCompanyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1TeamTeamIdQueryKey(
  args: InferRequestType<(typeof client.V1.team)[':teamId']['$get']>,
) {
  return ['V1', '/V1/team/:teamId', args] as const
}

export function getV1TeamTeamIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.team)[':teamId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.team)[':teamId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.team)[':teamId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TeamTeamIdQueryKey>
  >({
    queryKey: getV1TeamTeamIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.team[':teamId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1TeamTeamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.team)[':teamId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.team)[':teamId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.V1.team)[':teamId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TeamTeamIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TeamTeamIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV1TeamTeamIdMutationKey() {
  return ['V1', '/V1/team/:teamId', 'PUT'] as const
}

export function getPutV1TeamTeamIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.team)[':teamId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.team)[':teamId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1TeamTeamIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.team)[':teamId']['$put']>) {
      return parseResponse(client.V1.team[':teamId'].$put(args, options))
    },
  })
}

export function createPutV1TeamTeamId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.V1.team)[':teamId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.team)[':teamId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1TeamTeamIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1TeamTeamIdMutationKey() {
  return ['V1', '/V1/team/:teamId', 'DELETE'] as const
}

export function getDeleteV1TeamTeamIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.team)[':teamId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.team)[':teamId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TeamTeamIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.V1.team)[':teamId']['$delete']>) {
      return parseResponse(client.V1.team[':teamId'].$delete(args, options))
    },
  })
}

export function createDeleteV1TeamTeamId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.V1.team)[':teamId']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.team)[':teamId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1TeamTeamIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1TemandoRmaRmaIdShipmentsMutationKey() {
  return ['V1', '/V1/temando/rma/:rmaId/shipments', 'PUT'] as const
}

export function getPutV1TemandoRmaRmaIdShipmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.V1.temando.rma)[':rmaId']['shipments']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.V1.temando.rma)[':rmaId']['shipments']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1TemandoRmaRmaIdShipmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.V1.temando.rma)[':rmaId']['shipments']['$put']>,
    ) {
      return parseResponse(client.V1.temando.rma[':rmaId'].shipments.$put(args, options))
    },
  })
}

export function createPutV1TemandoRmaRmaIdShipments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.temando.rma)[':rmaId']['shipments']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.V1.temando.rma)[':rmaId']['shipments']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1TemandoRmaRmaIdShipmentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1TransactionsQueryKey(
  args: InferRequestType<typeof client.V1.transactions.$get>,
) {
  return ['V1', '/V1/transactions', args] as const
}

export function getV1TransactionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.transactions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.V1.transactions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.transactions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransactionsQueryKey>
  >({
    queryKey: getV1TransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.transactions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Transactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.V1.transactions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.V1.transactions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1TransactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TransactionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1TransactionsIdQueryKey(
  args: InferRequestType<(typeof client.V1.transactions)[':id']['$get']>,
) {
  return ['V1', '/V1/transactions/:id', args] as const
}

export function getV1TransactionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.transactions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.V1.transactions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.V1.transactions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransactionsIdQueryKey>
  >({
    queryKey: getV1TransactionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.V1.transactions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1TransactionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.V1.transactions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.V1.transactions)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.V1.transactions)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TransactionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TransactionsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1WorldpayGuestCartsCartIdPaymentInformationMutationKey() {
  return ['V1', '/V1/worldpay-guest-carts/:cartId/payment-information', 'POST'] as const
}

export function getPostV1WorldpayGuestCartsCartIdPaymentInformationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.V1)['worldpay-guest-carts'][':cartId']['payment-information']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorldpayGuestCartsCartIdPaymentInformationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.V1)['worldpay-guest-carts'][':cartId']['payment-information']['$post']
      >,
    ) {
      return parseResponse(
        client.V1['worldpay-guest-carts'][':cartId']['payment-information'].$post(args, options),
      )
    },
  })
}

export function createPostV1WorldpayGuestCartsCartIdPaymentInformation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.V1)['worldpay-guest-carts'][':cartId']['payment-information']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorldpayGuestCartsCartIdPaymentInformationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
