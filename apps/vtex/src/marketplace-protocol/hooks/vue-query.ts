import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
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

export function getPostApiCheckoutPubOrderFormsSimulationMutationKey() {
  return ['api', '/api/checkout/pub/orderForms/simulation', 'POST'] as const
}

export function getPostApiCheckoutPubOrderFormsSimulationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.checkout.pub.orderForms.simulation.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.checkout.pub.orderForms.simulation.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCheckoutPubOrderFormsSimulationMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.checkout.pub.orderForms.simulation.$post>,
    ) {
      return parseResponse(client.api.checkout.pub.orderForms.simulation.$post(args, options))
    },
  })
}

export function usePostApiCheckoutPubOrderFormsSimulation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.checkout.pub.orderForms.simulation.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.checkout.pub.orderForms.simulation.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCheckoutPubOrderFormsSimulationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPortalVtexcommercestableComBrApiMkpCategoryMapperCategoriesMarketplaceIdMutationKey() {
  return [
    'portal.vtexcommercestable.com.br',
    '/portal.vtexcommercestable.com.br/api/mkp-category-mapper/categories/marketplace/:id',
    'POST',
  ] as const
}

export function getPostPortalVtexcommercestableComBrApiMkpCategoryMapperCategoriesMarketplaceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['portal.vtexcommercestable.com.br']['api']['mkp-category-mapper']['categories']['marketplace'][':id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostPortalVtexcommercestableComBrApiMkpCategoryMapperCategoriesMarketplaceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['portal.vtexcommercestable.com.br']['api']['mkp-category-mapper']['categories']['marketplace'][':id']['$post']
      >,
    ) {
      return parseResponse(
        client['portal.vtexcommercestable.com.br'].api[
          'mkp-category-mapper'
        ].categories.marketplace[':id'].$post(args, options),
      )
    },
  })
}

export function usePostPortalVtexcommercestableComBrApiMkpCategoryMapperCategoriesMarketplaceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['portal.vtexcommercestable.com.br']['api']['mkp-category-mapper']['categories']['marketplace'][':id']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostPortalVtexcommercestableComBrApiMkpCategoryMapperCategoriesMarketplaceIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPortalVtexcommercestableComBrApiMkpCategoryMapperConnectorRegisterMutationKey() {
  return [
    'portal.vtexcommercestable.com.br',
    '/portal.vtexcommercestable.com.br/api/mkp-category-mapper/connector/register',
    'POST',
  ] as const
}

export function getPostPortalVtexcommercestableComBrApiMkpCategoryMapperConnectorRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['portal.vtexcommercestable.com.br']['api']['mkp-category-mapper']['connector']['register']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostPortalVtexcommercestableComBrApiMkpCategoryMapperConnectorRegisterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['portal.vtexcommercestable.com.br']['api']['mkp-category-mapper']['connector']['register']['$post']
      >,
    ) {
      return parseResponse(
        client['portal.vtexcommercestable.com.br'].api[
          'mkp-category-mapper'
        ].connector.register.$post(args, options),
      )
    },
  })
}

export function usePostPortalVtexcommercestableComBrApiMkpCategoryMapperConnectorRegister<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['portal.vtexcommercestable.com.br']['api']['mkp-category-mapper']['connector']['register']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostPortalVtexcommercestableComBrApiMkpCategoryMapperConnectorRegisterMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAccountNameVtexcommercestableComBrApiOrderIntegrationOrdersMutationKey() {
  return [
    ':accountName.vtexcommercestable.com.br',
    '/:accountName.vtexcommercestable.com.br/api/order-integration/orders',
    'POST',
  ] as const
}

export function getPostAccountNameVtexcommercestableComBrApiOrderIntegrationOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':accountName.vtexcommercestable.com.br']['api']['order-integration']['orders']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountNameVtexcommercestableComBrApiOrderIntegrationOrdersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':accountName.vtexcommercestable.com.br']['api']['order-integration']['orders']['$post']
      >,
    ) {
      return parseResponse(
        client[':accountName.vtexcommercestable.com.br'].api['order-integration'].orders.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAccountNameVtexcommercestableComBrApiOrderIntegrationOrders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)[':accountName.vtexcommercestable.com.br']['api']['order-integration']['orders']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAccountNameVtexcommercestableComBrApiOrderIntegrationOrdersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutAccountNameVtexcommercestableComBrApiOrderIntegrationOrdersStatusMutationKey() {
  return [
    ':accountName.vtexcommercestable.com.br',
    '/:accountName.vtexcommercestable.com.br/api/order-integration/orders/status',
    'PUT',
  ] as const
}

export function getPutAccountNameVtexcommercestableComBrApiOrderIntegrationOrdersStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':accountName.vtexcommercestable.com.br']['api']['order-integration']['orders']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutAccountNameVtexcommercestableComBrApiOrderIntegrationOrdersStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':accountName.vtexcommercestable.com.br']['api']['order-integration']['orders']['status']['$put']
      >,
    ) {
      return parseResponse(
        client[':accountName.vtexcommercestable.com.br'].api[
          'order-integration'
        ].orders.status.$put(args, options),
      )
    },
  })
}

export function usePutAccountNameVtexcommercestableComBrApiOrderIntegrationOrdersStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)[':accountName.vtexcommercestable.com.br']['api']['order-integration']['orders']['status']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutAccountNameVtexcommercestableComBrApiOrderIntegrationOrdersStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAccountNameEnvironmentComBrApiFulfillmentPvtOrdersMutationKey() {
  return [
    ':accountName.:environment.com.br',
    '/:accountName.:environment.com.br/api/fulfillment/pvt/orders',
    'POST',
  ] as const
}

export function getPostAccountNameEnvironmentComBrApiFulfillmentPvtOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':accountName.:environment.com.br']['api']['fulfillment']['pvt']['orders']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':accountName.:environment.com.br']['api']['fulfillment']['pvt']['orders']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountNameEnvironmentComBrApiFulfillmentPvtOrdersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':accountName.:environment.com.br']['api']['fulfillment']['pvt']['orders']['$post']
      >,
    ) {
      return parseResponse(
        client[':accountName.:environment.com.br'].api.fulfillment.pvt.orders.$post(args, options),
      )
    },
  })
}

export function usePostAccountNameEnvironmentComBrApiFulfillmentPvtOrders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':accountName.:environment.com.br']['api']['fulfillment']['pvt']['orders']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':accountName.:environment.com.br']['api']['fulfillment']['pvt']['orders']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountNameEnvironmentComBrApiFulfillmentPvtOrdersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAccountNameEnvironmentComBrApiFulfillmentPvtOrdersOrderIdFulfillMutationKey() {
  return [
    ':accountName.:environment.com.br',
    '/:accountName.:environment.com.br/api/fulfillment/pvt/orders/:orderId/fulfill',
    'POST',
  ] as const
}

export function getPostAccountNameEnvironmentComBrApiFulfillmentPvtOrdersOrderIdFulfillMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':accountName.:environment.com.br']['api']['fulfillment']['pvt']['orders'][':orderId']['fulfill']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':accountName.:environment.com.br']['api']['fulfillment']['pvt']['orders'][':orderId']['fulfill']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAccountNameEnvironmentComBrApiFulfillmentPvtOrdersOrderIdFulfillMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':accountName.:environment.com.br']['api']['fulfillment']['pvt']['orders'][':orderId']['fulfill']['$post']
      >,
    ) {
      return parseResponse(
        client[':accountName.:environment.com.br'].api.fulfillment.pvt.orders[
          ':orderId'
        ].fulfill.$post(args, options),
      )
    },
  })
}

export function usePostAccountNameEnvironmentComBrApiFulfillmentPvtOrdersOrderIdFulfill<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':accountName.:environment.com.br']['api']['fulfillment']['pvt']['orders'][':orderId']['fulfill']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':accountName.:environment.com.br']['api']['fulfillment']['pvt']['orders'][':orderId']['fulfill']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAccountNameEnvironmentComBrApiFulfillmentPvtOrdersOrderIdFulfillMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFulfillmentEndpointPvtOrderFormsSimulationMutationKey() {
  return [
    ':fulfillmentEndpoint',
    '/:fulfillmentEndpoint/pvt/orderForms/simulation',
    'POST',
  ] as const
}

export function getPostFulfillmentEndpointPvtOrderFormsSimulationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':fulfillmentEndpoint']['pvt']['orderForms']['simulation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostFulfillmentEndpointPvtOrderFormsSimulationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':fulfillmentEndpoint']['pvt']['orderForms']['simulation']['$post']
      >,
    ) {
      return parseResponse(
        client[':fulfillmentEndpoint'].pvt.orderForms.simulation.$post(args, options),
      )
    },
  })
}

export function usePostFulfillmentEndpointPvtOrderFormsSimulation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)[':fulfillmentEndpoint']['pvt']['orderForms']['simulation']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFulfillmentEndpointPvtOrderFormsSimulationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFulfillmentEndpointPvtOrdersMutationKey() {
  return [':fulfillmentEndpoint', '/:fulfillmentEndpoint/pvt/orders', 'POST'] as const
}

export function getPostFulfillmentEndpointPvtOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':fulfillmentEndpoint']['pvt']['orders']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':fulfillmentEndpoint']['pvt']['orders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFulfillmentEndpointPvtOrdersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':fulfillmentEndpoint']['pvt']['orders']['$post']>,
    ) {
      return parseResponse(client[':fulfillmentEndpoint'].pvt.orders.$post(args, options))
    },
  })
}

export function usePostFulfillmentEndpointPvtOrders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':fulfillmentEndpoint']['pvt']['orders']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':fulfillmentEndpoint']['pvt']['orders']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFulfillmentEndpointPvtOrdersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFulfillmentEndpointPvtOrdersOrderIdCancelMutationKey() {
  return [
    ':fulfillmentEndpoint',
    '/:fulfillmentEndpoint/pvt/orders/:orderId/cancel',
    'POST',
  ] as const
}

export function getPostFulfillmentEndpointPvtOrdersOrderIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':fulfillmentEndpoint']['pvt']['orders'][':orderId']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostFulfillmentEndpointPvtOrdersOrderIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':fulfillmentEndpoint']['pvt']['orders'][':orderId']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client[':fulfillmentEndpoint'].pvt.orders[':orderId'].cancel.$post(args, options),
      )
    },
  })
}

export function usePostFulfillmentEndpointPvtOrdersOrderIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)[':fulfillmentEndpoint']['pvt']['orders'][':orderId']['cancel']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFulfillmentEndpointPvtOrdersOrderIdCancelMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFulfillmentEndpointPvtOrdersSellerOrderIdFulfillMutationKey() {
  return [
    ':fulfillmentEndpoint',
    '/:fulfillmentEndpoint/pvt/orders/:sellerOrderId/fulfill',
    'POST',
  ] as const
}

export function getPostFulfillmentEndpointPvtOrdersSellerOrderIdFulfillMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':fulfillmentEndpoint']['pvt']['orders'][':sellerOrderId']['fulfill']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostFulfillmentEndpointPvtOrdersSellerOrderIdFulfillMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':fulfillmentEndpoint']['pvt']['orders'][':sellerOrderId']['fulfill']['$post']
      >,
    ) {
      return parseResponse(
        client[':fulfillmentEndpoint'].pvt.orders[':sellerOrderId'].fulfill.$post(args, options),
      )
    },
  })
}

export function usePostFulfillmentEndpointPvtOrdersSellerOrderIdFulfill<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)[':fulfillmentEndpoint']['pvt']['orders'][':sellerOrderId']['fulfill']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFulfillmentEndpointPvtOrdersSellerOrderIdFulfillMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdCancelMutationKey() {
  return [
    ':marketplaceServicesEndpoint',
    '/:marketplaceServicesEndpoint/pvt/orders/:marketplaceOrderId/cancel',
    'POST',
  ] as const
}

export function getPostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':marketplaceServicesEndpoint']['pvt']['orders'][':marketplaceOrderId']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':marketplaceServicesEndpoint']['pvt']['orders'][':marketplaceOrderId']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client[':marketplaceServicesEndpoint'].pvt.orders[':marketplaceOrderId'].cancel.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)[':marketplaceServicesEndpoint']['pvt']['orders'][':marketplaceOrderId']['cancel']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdCancelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceMutationKey() {
  return [
    ':marketplaceServicesEndpoint',
    '/:marketplaceServicesEndpoint/pvt/orders/:marketplaceOrderId/invoice',
    'POST',
  ] as const
}

export function getPostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':marketplaceServicesEndpoint']['pvt']['orders'][':marketplaceOrderId']['invoice']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':marketplaceServicesEndpoint']['pvt']['orders'][':marketplaceOrderId']['invoice']['$post']
      >,
    ) {
      return parseResponse(
        client[':marketplaceServicesEndpoint'].pvt.orders[':marketplaceOrderId'].invoice.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)[':marketplaceServicesEndpoint']['pvt']['orders'][':marketplaceOrderId']['invoice']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceInvoiceNumberMutationKey() {
  return [
    ':marketplaceServicesEndpoint',
    '/:marketplaceServicesEndpoint/pvt/orders/:marketplaceOrderId/invoice/:invoiceNumber',
    'POST',
  ] as const
}

export function getPostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceInvoiceNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':marketplaceServicesEndpoint']['pvt']['orders'][':marketplaceOrderId']['invoice'][':invoiceNumber']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceInvoiceNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':marketplaceServicesEndpoint']['pvt']['orders'][':marketplaceOrderId']['invoice'][':invoiceNumber']['$post']
      >,
    ) {
      return parseResponse(
        client[':marketplaceServicesEndpoint'].pvt.orders[':marketplaceOrderId'].invoice[
          ':invoiceNumber'
        ].$post(args, options),
      )
    },
  })
}

export function usePostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceInvoiceNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)[':marketplaceServicesEndpoint']['pvt']['orders'][':marketplaceOrderId']['invoice'][':invoiceNumber']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceInvoiceNumberMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceInvoiceNumberTrackingMutationKey() {
  return [
    ':marketplaceServicesEndpoint',
    '/:marketplaceServicesEndpoint/pvt/orders/:marketplaceOrderId/invoice/:invoiceNumber/tracking',
    'POST',
  ] as const
}

export function getPostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceInvoiceNumberTrackingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':marketplaceServicesEndpoint']['pvt']['orders'][':marketplaceOrderId']['invoice'][':invoiceNumber']['tracking']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceInvoiceNumberTrackingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':marketplaceServicesEndpoint']['pvt']['orders'][':marketplaceOrderId']['invoice'][':invoiceNumber']['tracking']['$post']
      >,
    ) {
      return parseResponse(
        client[':marketplaceServicesEndpoint'].pvt.orders[':marketplaceOrderId'].invoice[
          ':invoiceNumber'
        ].tracking.$post(args, options),
      )
    },
  })
}

export function usePostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceInvoiceNumberTracking<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)[':marketplaceServicesEndpoint']['pvt']['orders'][':marketplaceOrderId']['invoice'][':invoiceNumber']['tracking']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceInvoiceNumberTrackingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
