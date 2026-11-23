import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getPortalVtexcommercestableComBrKey() {
  return ['portal.vtexcommercestable.com.br'] as const
}

export function getAccountNameVtexcommercestableComBrKey() {
  return ['{accountName}.vtexcommercestable.com.br'] as const
}

export function getAccountNameEnvironmentComBrKey() {
  return ['{accountName}.{environment}.com.br'] as const
}

export function getFulfillmentEndpointKey() {
  return ['{fulfillmentEndpoint}'] as const
}

export function getMarketplaceServicesEndpointKey() {
  return ['{marketplaceServicesEndpoint}'] as const
}

export function getPostApiCheckoutPubOrderFormsSimulationKey() {
  return ['api', '/api/checkout/pub/orderForms/simulation', 'POST'] as const
}

export function usePostApiCheckoutPubOrderFormsSimulation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.checkout.pub.orderForms.simulation.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.checkout.pub.orderForms.simulation.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCheckoutPubOrderFormsSimulationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api.checkout.pub.orderForms.simulation.$post> },
      ) => parseResponse(client.api.checkout.pub.orderForms.simulation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortalVtexcommercestableComBrApiMkpCategoryMapperCategoriesMarketplaceIdKey() {
  return [
    'portal.vtexcommercestable.com.br',
    '/portal.vtexcommercestable.com.br/api/mkp-category-mapper/categories/marketplace/:id',
    'POST',
  ] as const
}

export function usePostPortalVtexcommercestableComBrApiMkpCategoryMapperCategoriesMarketplaceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['portal.vtexcommercestable.com.br']['api']['mkp-category-mapper']['categories']['marketplace'][':id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['portal.vtexcommercestable.com.br']['api']['mkp-category-mapper']['categories']['marketplace'][':id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostPortalVtexcommercestableComBrApiMkpCategoryMapperCategoriesMarketplaceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['portal.vtexcommercestable.com.br']['api']['mkp-category-mapper']['categories']['marketplace'][':id']['$post']
          >
        },
      ) =>
        parseResponse(
          client['portal.vtexcommercestable.com.br'].api[
            'mkp-category-mapper'
          ].categories.marketplace[':id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortalVtexcommercestableComBrApiMkpCategoryMapperConnectorRegisterKey() {
  return [
    'portal.vtexcommercestable.com.br',
    '/portal.vtexcommercestable.com.br/api/mkp-category-mapper/connector/register',
    'POST',
  ] as const
}

export function usePostPortalVtexcommercestableComBrApiMkpCategoryMapperConnectorRegister<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['portal.vtexcommercestable.com.br']['api']['mkp-category-mapper']['connector']['register']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['portal.vtexcommercestable.com.br']['api']['mkp-category-mapper']['connector']['register']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostPortalVtexcommercestableComBrApiMkpCategoryMapperConnectorRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['portal.vtexcommercestable.com.br']['api']['mkp-category-mapper']['connector']['register']['$post']
          >
        },
      ) =>
        parseResponse(
          client['portal.vtexcommercestable.com.br'].api[
            'mkp-category-mapper'
          ].connector.register.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountNameVtexcommercestableComBrApiOrderIntegrationOrdersKey() {
  return [
    ':accountName.vtexcommercestable.com.br',
    '/:accountName.vtexcommercestable.com.br/api/order-integration/orders',
    'POST',
  ] as const
}

export function usePostAccountNameVtexcommercestableComBrApiOrderIntegrationOrders<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':accountName.vtexcommercestable.com.br']['api']['order-integration']['orders']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':accountName.vtexcommercestable.com.br']['api']['order-integration']['orders']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAccountNameVtexcommercestableComBrApiOrderIntegrationOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)[':accountName.vtexcommercestable.com.br']['api']['order-integration']['orders']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':accountName.vtexcommercestable.com.br'].api['order-integration'].orders.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAccountNameVtexcommercestableComBrApiOrderIntegrationOrdersStatusKey() {
  return [
    ':accountName.vtexcommercestable.com.br',
    '/:accountName.vtexcommercestable.com.br/api/order-integration/orders/status',
    'PUT',
  ] as const
}

export function usePutAccountNameVtexcommercestableComBrApiOrderIntegrationOrdersStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':accountName.vtexcommercestable.com.br']['api']['order-integration']['orders']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':accountName.vtexcommercestable.com.br']['api']['order-integration']['orders']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutAccountNameVtexcommercestableComBrApiOrderIntegrationOrdersStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)[':accountName.vtexcommercestable.com.br']['api']['order-integration']['orders']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':accountName.vtexcommercestable.com.br'].api[
            'order-integration'
          ].orders.status.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountNameEnvironmentComBrApiFulfillmentPvtOrdersKey() {
  return [
    ':accountName.{environment}.com.br',
    '/:accountName.{environment}.com.br/api/fulfillment/pvt/orders',
    'POST',
  ] as const
}

export function usePostAccountNameEnvironmentComBrApiFulfillmentPvtOrders<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':accountName.{environment}.com.br']['api']['fulfillment']['pvt']['orders']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':accountName.{environment}.com.br']['api']['fulfillment']['pvt']['orders']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountNameEnvironmentComBrApiFulfillmentPvtOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)[':accountName.{environment}.com.br']['api']['fulfillment']['pvt']['orders']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':accountName.{environment}.com.br'].api.fulfillment.pvt.orders.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountNameEnvironmentComBrApiFulfillmentPvtOrdersOrderIdFulfillKey() {
  return [
    ':accountName.{environment}.com.br',
    '/:accountName.{environment}.com.br/api/fulfillment/pvt/orders/:orderId/fulfill',
    'POST',
  ] as const
}

export function usePostAccountNameEnvironmentComBrApiFulfillmentPvtOrdersOrderIdFulfill<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':accountName.{environment}.com.br']['api']['fulfillment']['pvt']['orders'][':orderId']['fulfill']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':accountName.{environment}.com.br']['api']['fulfillment']['pvt']['orders'][':orderId']['fulfill']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAccountNameEnvironmentComBrApiFulfillmentPvtOrdersOrderIdFulfillKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)[':accountName.{environment}.com.br']['api']['fulfillment']['pvt']['orders'][':orderId']['fulfill']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':accountName.{environment}.com.br'].api.fulfillment.pvt.orders[
            ':orderId'
          ].fulfill.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostFulfillmentEndpointPvtOrderFormsSimulationKey() {
  return [
    ':fulfillmentEndpoint',
    '/:fulfillmentEndpoint/pvt/orderForms/simulation',
    'POST',
  ] as const
}

export function usePostFulfillmentEndpointPvtOrderFormsSimulation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':fulfillmentEndpoint']['pvt']['orderForms']['simulation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':fulfillmentEndpoint']['pvt']['orderForms']['simulation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFulfillmentEndpointPvtOrderFormsSimulationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)[':fulfillmentEndpoint']['pvt']['orderForms']['simulation']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':fulfillmentEndpoint'].pvt.orderForms.simulation.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostFulfillmentEndpointPvtOrdersKey() {
  return [':fulfillmentEndpoint', '/:fulfillmentEndpoint/pvt/orders', 'POST'] as const
}

export function usePostFulfillmentEndpointPvtOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':fulfillmentEndpoint']['pvt']['orders']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':fulfillmentEndpoint']['pvt']['orders']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFulfillmentEndpointPvtOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':fulfillmentEndpoint']['pvt']['orders']['$post']>
        },
      ) => parseResponse(client[':fulfillmentEndpoint'].pvt.orders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFulfillmentEndpointPvtOrdersOrderIdCancelKey() {
  return [
    ':fulfillmentEndpoint',
    '/:fulfillmentEndpoint/pvt/orders/:orderId/cancel',
    'POST',
  ] as const
}

export function usePostFulfillmentEndpointPvtOrdersOrderIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':fulfillmentEndpoint']['pvt']['orders'][':orderId']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':fulfillmentEndpoint']['pvt']['orders'][':orderId']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFulfillmentEndpointPvtOrdersOrderIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)[':fulfillmentEndpoint']['pvt']['orders'][':orderId']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':fulfillmentEndpoint'].pvt.orders[':orderId'].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostFulfillmentEndpointPvtOrdersSellerOrderIdFulfillKey() {
  return [
    ':fulfillmentEndpoint',
    '/:fulfillmentEndpoint/pvt/orders/:sellerOrderId/fulfill',
    'POST',
  ] as const
}

export function usePostFulfillmentEndpointPvtOrdersSellerOrderIdFulfill<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':fulfillmentEndpoint']['pvt']['orders'][':sellerOrderId']['fulfill']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':fulfillmentEndpoint']['pvt']['orders'][':sellerOrderId']['fulfill']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFulfillmentEndpointPvtOrdersSellerOrderIdFulfillKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)[':fulfillmentEndpoint']['pvt']['orders'][':sellerOrderId']['fulfill']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':fulfillmentEndpoint'].pvt.orders[':sellerOrderId'].fulfill.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdCancelKey() {
  return [
    ':marketplaceServicesEndpoint',
    '/:marketplaceServicesEndpoint/pvt/orders/:marketplaceOrderId/cancel',
    'POST',
  ] as const
}

export function usePostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdCancel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':marketplaceServicesEndpoint']['pvt']['orders'][':marketplaceOrderId']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':marketplaceServicesEndpoint']['pvt']['orders'][':marketplaceOrderId']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)[':marketplaceServicesEndpoint']['pvt']['orders'][':marketplaceOrderId']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':marketplaceServicesEndpoint'].pvt.orders[':marketplaceOrderId'].cancel.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceKey() {
  return [
    ':marketplaceServicesEndpoint',
    '/:marketplaceServicesEndpoint/pvt/orders/:marketplaceOrderId/invoice',
    'POST',
  ] as const
}

export function usePostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoice<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':marketplaceServicesEndpoint']['pvt']['orders'][':marketplaceOrderId']['invoice']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':marketplaceServicesEndpoint']['pvt']['orders'][':marketplaceOrderId']['invoice']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)[':marketplaceServicesEndpoint']['pvt']['orders'][':marketplaceOrderId']['invoice']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':marketplaceServicesEndpoint'].pvt.orders[':marketplaceOrderId'].invoice.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceInvoiceNumberKey() {
  return [
    ':marketplaceServicesEndpoint',
    '/:marketplaceServicesEndpoint/pvt/orders/:marketplaceOrderId/invoice/:invoiceNumber',
    'POST',
  ] as const
}

export function usePostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceInvoiceNumber<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':marketplaceServicesEndpoint']['pvt']['orders'][':marketplaceOrderId']['invoice'][':invoiceNumber']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':marketplaceServicesEndpoint']['pvt']['orders'][':marketplaceOrderId']['invoice'][':invoiceNumber']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceInvoiceNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)[':marketplaceServicesEndpoint']['pvt']['orders'][':marketplaceOrderId']['invoice'][':invoiceNumber']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':marketplaceServicesEndpoint'].pvt.orders[':marketplaceOrderId'].invoice[
            ':invoiceNumber'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceInvoiceNumberTrackingKey() {
  return [
    ':marketplaceServicesEndpoint',
    '/:marketplaceServicesEndpoint/pvt/orders/:marketplaceOrderId/invoice/:invoiceNumber/tracking',
    'POST',
  ] as const
}

export function usePostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceInvoiceNumberTracking<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':marketplaceServicesEndpoint']['pvt']['orders'][':marketplaceOrderId']['invoice'][':invoiceNumber']['tracking']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':marketplaceServicesEndpoint']['pvt']['orders'][':marketplaceOrderId']['invoice'][':invoiceNumber']['tracking']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceInvoiceNumberTrackingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)[':marketplaceServicesEndpoint']['pvt']['orders'][':marketplaceOrderId']['invoice'][':invoiceNumber']['tracking']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':marketplaceServicesEndpoint'].pvt.orders[':marketplaceOrderId'].invoice[
            ':invoiceNumber'
          ].tracking.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
