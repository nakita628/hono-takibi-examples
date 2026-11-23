import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountCartAddJsonKey() {
  return ['account.cart.add.json'] as const
}

export function getAccountCartListJsonKey() {
  return ['account.cart.list.json'] as const
}

export function getAccountConfigUpdateJsonKey() {
  return ['account.config.update.json'] as const
}

export function getAccountFailedWebhooksJsonKey() {
  return ['account.failed_webhooks.json'] as const
}

export function getAccountSupportedPlatformsJsonKey() {
  return ['account.supported_platforms.json'] as const
}

export function getAttributeAddJsonKey() {
  return ['attribute.add.json'] as const
}

export function getAttributeAssignGroupJsonKey() {
  return ['attribute.assign.group.json'] as const
}

export function getAttributeAssignSetJsonKey() {
  return ['attribute.assign.set.json'] as const
}

export function getAttributeAttributesetListJsonKey() {
  return ['attribute.attributeset.list.json'] as const
}

export function getAttributeCountJsonKey() {
  return ['attribute.count.json'] as const
}

export function getAttributeDeleteJsonKey() {
  return ['attribute.delete.json'] as const
}

export function getAttributeGroupListJsonKey() {
  return ['attribute.group.list.json'] as const
}

export function getAttributeInfoJsonKey() {
  return ['attribute.info.json'] as const
}

export function getAttributeListJsonKey() {
  return ['attribute.list.json'] as const
}

export function getAttributeTypeListJsonKey() {
  return ['attribute.type.list.json'] as const
}

export function getAttributeUnassignGroupJsonKey() {
  return ['attribute.unassign.group.json'] as const
}

export function getAttributeUnassignSetJsonKey() {
  return ['attribute.unassign.set.json'] as const
}

export function getAttributeUpdateJsonKey() {
  return ['attribute.update.json'] as const
}

export function getBasketInfoJsonKey() {
  return ['basket.info.json'] as const
}

export function getBasketItemAddJsonKey() {
  return ['basket.item.add.json'] as const
}

export function getBasketLiveShippingServiceCreateJsonKey() {
  return ['basket.live_shipping_service.create.json'] as const
}

export function getBasketLiveShippingServiceDeleteJsonKey() {
  return ['basket.live_shipping_service.delete.json'] as const
}

export function getBasketLiveShippingServiceListJsonKey() {
  return ['basket.live_shipping_service.list.json'] as const
}

export function getBridgeDeleteJsonKey() {
  return ['bridge.delete.json'] as const
}

export function getBridgeDownloadFileKey() {
  return ['bridge.download.file'] as const
}

export function getBridgeUpdateJsonKey() {
  return ['bridge.update.json'] as const
}

export function getCartBridgeJsonKey() {
  return ['cart.bridge.json'] as const
}

export function getCartCatalogPriceRulesCountJsonKey() {
  return ['cart.catalog_price_rules.count.json'] as const
}

export function getCartCatalogPriceRulesListJsonKey() {
  return ['cart.catalog_price_rules.list.json'] as const
}

export function getCartClearCacheJsonKey() {
  return ['cart.clear_cache.json'] as const
}

export function getCartConfigJsonKey() {
  return ['cart.config.json'] as const
}

export function getCartConfigUpdateJsonKey() {
  return ['cart.config.update.json'] as const
}

export function getCartCouponAddJsonKey() {
  return ['cart.coupon.add.json'] as const
}

export function getCartCouponConditionAddJsonKey() {
  return ['cart.coupon.condition.add.json'] as const
}

export function getCartCouponCountJsonKey() {
  return ['cart.coupon.count.json'] as const
}

export function getCartCouponDeleteJsonKey() {
  return ['cart.coupon.delete.json'] as const
}

export function getCartCouponListJsonKey() {
  return ['cart.coupon.list.json'] as const
}

export function getCartCreateJsonKey() {
  return ['cart.create.json'] as const
}

export function getCartDeleteJsonKey() {
  return ['cart.delete.json'] as const
}

export function getCartDisconnectJsonKey() {
  return ['cart.disconnect.json'] as const
}

export function getCartGiftcardAddJsonKey() {
  return ['cart.giftcard.add.json'] as const
}

export function getCartGiftcardCountJsonKey() {
  return ['cart.giftcard.count.json'] as const
}

export function getCartGiftcardListJsonKey() {
  return ['cart.giftcard.list.json'] as const
}

export function getCartInfoJsonKey() {
  return ['cart.info.json'] as const
}

export function getCartListJsonKey() {
  return ['cart.list.json'] as const
}

export function getCartMetaDataListJsonKey() {
  return ['cart.meta_data.list.json'] as const
}

export function getCartMetaDataSetJsonKey() {
  return ['cart.meta_data.set.json'] as const
}

export function getCartMetaDataUnsetJsonKey() {
  return ['cart.meta_data.unset.json'] as const
}

export function getCartMethodsJsonKey() {
  return ['cart.methods.json'] as const
}

export function getCartPluginListJsonKey() {
  return ['cart.plugin.list.json'] as const
}

export function getCartScriptAddJsonKey() {
  return ['cart.script.add.json'] as const
}

export function getCartScriptDeleteJsonKey() {
  return ['cart.script.delete.json'] as const
}

export function getCartScriptListJsonKey() {
  return ['cart.script.list.json'] as const
}

export function getCartShippingZonesListJsonKey() {
  return ['cart.shipping_zones.list.json'] as const
}

export function getCartValidateJsonKey() {
  return ['cart.validate.json'] as const
}

export function getCategoryAddJsonKey() {
  return ['category.add.json'] as const
}

export function getCategoryAssignJsonKey() {
  return ['category.assign.json'] as const
}

export function getCategoryCountJsonKey() {
  return ['category.count.json'] as const
}

export function getCategoryDeleteJsonKey() {
  return ['category.delete.json'] as const
}

export function getCategoryFindJsonKey() {
  return ['category.find.json'] as const
}

export function getCategoryImageAddJsonKey() {
  return ['category.image.add.json'] as const
}

export function getCategoryImageDeleteJsonKey() {
  return ['category.image.delete.json'] as const
}

export function getCategoryInfoJsonKey() {
  return ['category.info.json'] as const
}

export function getCategoryListJsonKey() {
  return ['category.list.json'] as const
}

export function getCategoryUnassignJsonKey() {
  return ['category.unassign.json'] as const
}

export function getCategoryUpdateJsonKey() {
  return ['category.update.json'] as const
}

export function getCustomerAddJsonKey() {
  return ['customer.add.json'] as const
}

export function getCustomerAttributeListJsonKey() {
  return ['customer.attribute.list.json'] as const
}

export function getCustomerCountJsonKey() {
  return ['customer.count.json'] as const
}

export function getCustomerFindJsonKey() {
  return ['customer.find.json'] as const
}

export function getCustomerGroupAddJsonKey() {
  return ['customer.group.add.json'] as const
}

export function getCustomerGroupListJsonKey() {
  return ['customer.group.list.json'] as const
}

export function getCustomerInfoJsonKey() {
  return ['customer.info.json'] as const
}

export function getCustomerListJsonKey() {
  return ['customer.list.json'] as const
}

export function getCustomerUpdateJsonKey() {
  return ['customer.update.json'] as const
}

export function getOrderAbandonedListJsonKey() {
  return ['order.abandoned.list.json'] as const
}

export function getOrderAddJsonKey() {
  return ['order.add.json'] as const
}

export function getOrderCountJsonKey() {
  return ['order.count.json'] as const
}

export function getOrderFinancialStatusListJsonKey() {
  return ['order.financial_status.list.json'] as const
}

export function getOrderFindJsonKey() {
  return ['order.find.json'] as const
}

export function getOrderFulfillmentStatusListJsonKey() {
  return ['order.fulfillment_status.list.json'] as const
}

export function getOrderInfoJsonKey() {
  return ['order.info.json'] as const
}

export function getOrderListJsonKey() {
  return ['order.list.json'] as const
}

export function getOrderPreestimateShippingListJsonKey() {
  return ['order.preestimate_shipping.list.json'] as const
}

export function getOrderRefundAddJsonKey() {
  return ['order.refund.add.json'] as const
}

export function getOrderShipmentAddJsonKey() {
  return ['order.shipment.add.json'] as const
}

export function getOrderShipmentDeleteJsonKey() {
  return ['order.shipment.delete.json'] as const
}

export function getOrderShipmentInfoJsonKey() {
  return ['order.shipment.info.json'] as const
}

export function getOrderShipmentListJsonKey() {
  return ['order.shipment.list.json'] as const
}

export function getOrderShipmentTrackingAddJsonKey() {
  return ['order.shipment.tracking.add.json'] as const
}

export function getOrderShipmentUpdateJsonKey() {
  return ['order.shipment.update.json'] as const
}

export function getOrderStatusListJsonKey() {
  return ['order.status.list.json'] as const
}

export function getOrderTransactionListJsonKey() {
  return ['order.transaction.list.json'] as const
}

export function getOrderUpdateJsonKey() {
  return ['order.update.json'] as const
}

export function getProductAddJsonKey() {
  return ['product.add.json'] as const
}

export function getProductAttributeListJsonKey() {
  return ['product.attribute.list.json'] as const
}

export function getProductAttributeValueSetJsonKey() {
  return ['product.attribute.value.set.json'] as const
}

export function getProductAttributeValueUnsetJsonKey() {
  return ['product.attribute.value.unset.json'] as const
}

export function getProductBrandListJsonKey() {
  return ['product.brand.list.json'] as const
}

export function getProductChildItemFindJsonKey() {
  return ['product.child_item.find.json'] as const
}

export function getProductChildItemInfoJsonKey() {
  return ['product.child_item.info.json'] as const
}

export function getProductChildItemListJsonKey() {
  return ['product.child_item.list.json'] as const
}

export function getProductCountJsonKey() {
  return ['product.count.json'] as const
}

export function getProductCurrencyAddJsonKey() {
  return ['product.currency.add.json'] as const
}

export function getProductCurrencyListJsonKey() {
  return ['product.currency.list.json'] as const
}

export function getProductDeleteJsonKey() {
  return ['product.delete.json'] as const
}

export function getProductFieldsJsonKey() {
  return ['product.fields.json'] as const
}

export function getProductFindJsonKey() {
  return ['product.find.json'] as const
}

export function getProductImageAddJsonKey() {
  return ['product.image.add.json'] as const
}

export function getProductImageDeleteJsonKey() {
  return ['product.image.delete.json'] as const
}

export function getProductImageUpdateJsonKey() {
  return ['product.image.update.json'] as const
}

export function getProductInfoJsonKey() {
  return ['product.info.json'] as const
}

export function getProductListJsonKey() {
  return ['product.list.json'] as const
}

export function getProductManufacturerAddJsonKey() {
  return ['product.manufacturer.add.json'] as const
}

export function getProductOptionAddJsonKey() {
  return ['product.option.add.json'] as const
}

export function getProductOptionAssignJsonKey() {
  return ['product.option.assign.json'] as const
}

export function getProductOptionListJsonKey() {
  return ['product.option.list.json'] as const
}

export function getProductOptionValueAddJsonKey() {
  return ['product.option.value.add.json'] as const
}

export function getProductOptionValueAssignJsonKey() {
  return ['product.option.value.assign.json'] as const
}

export function getProductOptionValueUpdateJsonKey() {
  return ['product.option.value.update.json'] as const
}

export function getProductPriceAddJsonKey() {
  return ['product.price.add.json'] as const
}

export function getProductPriceDeleteJsonKey() {
  return ['product.price.delete.json'] as const
}

export function getProductPriceUpdateJsonKey() {
  return ['product.price.update.json'] as const
}

export function getProductReviewListJsonKey() {
  return ['product.review.list.json'] as const
}

export function getProductStoreAssignJsonKey() {
  return ['product.store.assign.json'] as const
}

export function getProductTaxAddJsonKey() {
  return ['product.tax.add.json'] as const
}

export function getProductUpdateJsonKey() {
  return ['product.update.json'] as const
}

export function getProductVariantAddJsonKey() {
  return ['product.variant.add.json'] as const
}

export function getProductVariantCountJsonKey() {
  return ['product.variant.count.json'] as const
}

export function getProductVariantDeleteJsonKey() {
  return ['product.variant.delete.json'] as const
}

export function getProductVariantImageAddJsonKey() {
  return ['product.variant.image.add.json'] as const
}

export function getProductVariantImageDeleteJsonKey() {
  return ['product.variant.image.delete.json'] as const
}

export function getProductVariantInfoJsonKey() {
  return ['product.variant.info.json'] as const
}

export function getProductVariantListJsonKey() {
  return ['product.variant.list.json'] as const
}

export function getProductVariantPriceAddJsonKey() {
  return ['product.variant.price.add.json'] as const
}

export function getProductVariantPriceDeleteJsonKey() {
  return ['product.variant.price.delete.json'] as const
}

export function getProductVariantPriceUpdateJsonKey() {
  return ['product.variant.price.update.json'] as const
}

export function getProductVariantUpdateJsonKey() {
  return ['product.variant.update.json'] as const
}

export function getSubscriberListJsonKey() {
  return ['subscriber.list.json'] as const
}

export function getTaxClassInfoJsonKey() {
  return ['tax.class.info.json'] as const
}

export function getWebhookCountJsonKey() {
  return ['webhook.count.json'] as const
}

export function getWebhookCreateJsonKey() {
  return ['webhook.create.json'] as const
}

export function getWebhookDeleteJsonKey() {
  return ['webhook.delete.json'] as const
}

export function getWebhookEventsJsonKey() {
  return ['webhook.events.json'] as const
}

export function getWebhookListJsonKey() {
  return ['webhook.list.json'] as const
}

export function getWebhookUpdateJsonKey() {
  return ['webhook.update.json'] as const
}

export function getPostAccountCartAddJsonMutationKey() {
  return ['account.cart.add.json', '/account.cart.add.json', 'POST'] as const
}

export function getPostAccountCartAddJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['account.cart.add.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['account.cart.add.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountCartAddJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['account.cart.add.json']['$post']>) {
      return parseResponse(client['account.cart.add.json'].$post(args, options))
    },
  })
}

export function createPostAccountCartAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['account.cart.add.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['account.cart.add.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountCartAddJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountCartListJsonQueryKey(
  args: InferRequestType<(typeof client)['account.cart.list.json']['$get']>,
) {
  return ['account.cart.list.json', '/account.cart.list.json', args] as const
}

export function getAccountCartListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['account.cart.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['account.cart.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['account.cart.list.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountCartListJsonQueryKey>
  >({
    queryKey: getAccountCartListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['account.cart.list.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountCartListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['account.cart.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['account.cart.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['account.cart.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountCartListJsonQueryKey>
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
    return { ...getAccountCartListJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutAccountConfigUpdateJsonMutationKey() {
  return ['account.config.update.json', '/account.config.update.json', 'PUT'] as const
}

export function getPutAccountConfigUpdateJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['account.config.update.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['account.config.update.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountConfigUpdateJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['account.config.update.json']['$put']>,
    ) {
      return parseResponse(client['account.config.update.json'].$put(args, options))
    },
  })
}

export function createPutAccountConfigUpdateJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['account.config.update.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['account.config.update.json']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountConfigUpdateJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountFailedWebhooksJsonQueryKey(
  args: InferRequestType<(typeof client)['account.failed_webhooks.json']['$get']>,
) {
  return ['account.failed_webhooks.json', '/account.failed_webhooks.json', args] as const
}

export function getAccountFailedWebhooksJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['account.failed_webhooks.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['account.failed_webhooks.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['account.failed_webhooks.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountFailedWebhooksJsonQueryKey>
  >({
    queryKey: getAccountFailedWebhooksJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['account.failed_webhooks.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountFailedWebhooksJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['account.failed_webhooks.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['account.failed_webhooks.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['account.failed_webhooks.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountFailedWebhooksJsonQueryKey>
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
      ...getAccountFailedWebhooksJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountSupportedPlatformsJsonQueryKey() {
  return ['account.supported_platforms.json', '/account.supported_platforms.json'] as const
}

export function getAccountSupportedPlatformsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['account.supported_platforms.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['account.supported_platforms.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountSupportedPlatformsJsonQueryKey>
  >({
    queryKey: getAccountSupportedPlatformsJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['account.supported_platforms.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountSupportedPlatformsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['account.supported_platforms.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['account.supported_platforms.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountSupportedPlatformsJsonQueryKey>
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
      ...getAccountSupportedPlatformsJsonQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAttributeAddJsonMutationKey() {
  return ['attribute.add.json', '/attribute.add.json', 'POST'] as const
}

export function getPostAttributeAddJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.add.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['attribute.add.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAttributeAddJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['attribute.add.json']['$post']>) {
      return parseResponse(client['attribute.add.json'].$post(args, options))
    },
  })
}

export function createPostAttributeAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['attribute.add.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['attribute.add.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAttributeAddJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAttributeAssignGroupJsonMutationKey() {
  return ['attribute.assign.group.json', '/attribute.assign.group.json', 'POST'] as const
}

export function getPostAttributeAssignGroupJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['attribute.assign.group.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['attribute.assign.group.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAttributeAssignGroupJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['attribute.assign.group.json']['$post']>,
    ) {
      return parseResponse(client['attribute.assign.group.json'].$post(args, options))
    },
  })
}

export function createPostAttributeAssignGroupJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['attribute.assign.group.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['attribute.assign.group.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAttributeAssignGroupJsonMutationOptions<
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

export function getPostAttributeAssignSetJsonMutationKey() {
  return ['attribute.assign.set.json', '/attribute.assign.set.json', 'POST'] as const
}

export function getPostAttributeAssignSetJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['attribute.assign.set.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['attribute.assign.set.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAttributeAssignSetJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['attribute.assign.set.json']['$post']>,
    ) {
      return parseResponse(client['attribute.assign.set.json'].$post(args, options))
    },
  })
}

export function createPostAttributeAssignSetJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['attribute.assign.set.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['attribute.assign.set.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAttributeAssignSetJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAttributeAttributesetListJsonQueryKey(
  args: InferRequestType<(typeof client)['attribute.attributeset.list.json']['$get']>,
) {
  return ['attribute.attributeset.list.json', '/attribute.attributeset.list.json', args] as const
}

export function getAttributeAttributesetListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['attribute.attributeset.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['attribute.attributeset.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['attribute.attributeset.list.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAttributeAttributesetListJsonQueryKey>
  >({
    queryKey: getAttributeAttributesetListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['attribute.attributeset.list.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAttributeAttributesetListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['attribute.attributeset.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['attribute.attributeset.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['attribute.attributeset.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAttributeAttributesetListJsonQueryKey>
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
      ...getAttributeAttributesetListJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAttributeCountJsonQueryKey(
  args: InferRequestType<(typeof client)['attribute.count.json']['$get']>,
) {
  return ['attribute.count.json', '/attribute.count.json', args] as const
}

export function getAttributeCountJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.count.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['attribute.count.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.count.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAttributeCountJsonQueryKey>
  >({
    queryKey: getAttributeCountJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['attribute.count.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAttributeCountJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.count.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['attribute.count.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['attribute.count.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAttributeCountJsonQueryKey>
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
    return { ...getAttributeCountJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteAttributeDeleteJsonMutationKey() {
  return ['attribute.delete.json', '/attribute.delete.json', 'DELETE'] as const
}

export function getDeleteAttributeDeleteJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['attribute.delete.json']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['attribute.delete.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAttributeDeleteJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['attribute.delete.json']['$delete']>) {
      return parseResponse(client['attribute.delete.json'].$delete(args, options))
    },
  })
}

export function createDeleteAttributeDeleteJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['attribute.delete.json']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['attribute.delete.json']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAttributeDeleteJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAttributeGroupListJsonQueryKey(
  args: InferRequestType<(typeof client)['attribute.group.list.json']['$get']>,
) {
  return ['attribute.group.list.json', '/attribute.group.list.json', args] as const
}

export function getAttributeGroupListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['attribute.group.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['attribute.group.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['attribute.group.list.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAttributeGroupListJsonQueryKey>
  >({
    queryKey: getAttributeGroupListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['attribute.group.list.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAttributeGroupListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['attribute.group.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['attribute.group.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['attribute.group.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAttributeGroupListJsonQueryKey>
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
      ...getAttributeGroupListJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAttributeInfoJsonQueryKey(
  args: InferRequestType<(typeof client)['attribute.info.json']['$get']>,
) {
  return ['attribute.info.json', '/attribute.info.json', args] as const
}

export function getAttributeInfoJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.info.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['attribute.info.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.info.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAttributeInfoJsonQueryKey>
  >({
    queryKey: getAttributeInfoJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['attribute.info.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAttributeInfoJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.info.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['attribute.info.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['attribute.info.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAttributeInfoJsonQueryKey>
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
    return { ...getAttributeInfoJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAttributeListJsonQueryKey(
  args: InferRequestType<(typeof client)['attribute.list.json']['$get']>,
) {
  return ['attribute.list.json', '/attribute.list.json', args] as const
}

export function getAttributeListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['attribute.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.list.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAttributeListJsonQueryKey>
  >({
    queryKey: getAttributeListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['attribute.list.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAttributeListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['attribute.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['attribute.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAttributeListJsonQueryKey>
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
    return { ...getAttributeListJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAttributeTypeListJsonQueryKey() {
  return ['attribute.type.list.json', '/attribute.type.list.json'] as const
}

export function getAttributeTypeListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.type.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['attribute.type.list.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAttributeTypeListJsonQueryKey>
  >({
    queryKey: getAttributeTypeListJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['attribute.type.list.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAttributeTypeListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.type.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['attribute.type.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAttributeTypeListJsonQueryKey>
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
    return { ...getAttributeTypeListJsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostAttributeUnassignGroupJsonMutationKey() {
  return ['attribute.unassign.group.json', '/attribute.unassign.group.json', 'POST'] as const
}

export function getPostAttributeUnassignGroupJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['attribute.unassign.group.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['attribute.unassign.group.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAttributeUnassignGroupJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['attribute.unassign.group.json']['$post']>,
    ) {
      return parseResponse(client['attribute.unassign.group.json'].$post(args, options))
    },
  })
}

export function createPostAttributeUnassignGroupJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['attribute.unassign.group.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['attribute.unassign.group.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAttributeUnassignGroupJsonMutationOptions<
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

export function getPostAttributeUnassignSetJsonMutationKey() {
  return ['attribute.unassign.set.json', '/attribute.unassign.set.json', 'POST'] as const
}

export function getPostAttributeUnassignSetJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['attribute.unassign.set.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['attribute.unassign.set.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAttributeUnassignSetJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['attribute.unassign.set.json']['$post']>,
    ) {
      return parseResponse(client['attribute.unassign.set.json'].$post(args, options))
    },
  })
}

export function createPostAttributeUnassignSetJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['attribute.unassign.set.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['attribute.unassign.set.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAttributeUnassignSetJsonMutationOptions<
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

export function getPostAttributeUpdateJsonMutationKey() {
  return ['attribute.update.json', '/attribute.update.json', 'POST'] as const
}

export function getPostAttributeUpdateJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.update.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['attribute.update.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAttributeUpdateJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['attribute.update.json']['$post']>) {
      return parseResponse(client['attribute.update.json'].$post(args, options))
    },
  })
}

export function createPostAttributeUpdateJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['attribute.update.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['attribute.update.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAttributeUpdateJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBasketInfoJsonQueryKey(
  args: InferRequestType<(typeof client)['basket.info.json']['$get']>,
) {
  return ['basket.info.json', '/basket.info.json', args] as const
}

export function getBasketInfoJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['basket.info.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['basket.info.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['basket.info.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBasketInfoJsonQueryKey>
  >({
    queryKey: getBasketInfoJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['basket.info.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBasketInfoJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['basket.info.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['basket.info.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['basket.info.json']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBasketInfoJsonQueryKey>
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
    return { ...getBasketInfoJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostBasketItemAddJsonMutationKey() {
  return ['basket.item.add.json', '/basket.item.add.json', 'POST'] as const
}

export function getPostBasketItemAddJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['basket.item.add.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['basket.item.add.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBasketItemAddJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['basket.item.add.json']['$post']>) {
      return parseResponse(client['basket.item.add.json'].$post(args, options))
    },
  })
}

export function createPostBasketItemAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['basket.item.add.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['basket.item.add.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBasketItemAddJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBasketLiveShippingServiceCreateJsonMutationKey() {
  return [
    'basket.live_shipping_service.create.json',
    '/basket.live_shipping_service.create.json',
    'POST',
  ] as const
}

export function getPostBasketLiveShippingServiceCreateJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['basket.live_shipping_service.create.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['basket.live_shipping_service.create.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBasketLiveShippingServiceCreateJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['basket.live_shipping_service.create.json']['$post']>,
    ) {
      return parseResponse(client['basket.live_shipping_service.create.json'].$post(args, options))
    },
  })
}

export function createPostBasketLiveShippingServiceCreateJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['basket.live_shipping_service.create.json']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['basket.live_shipping_service.create.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBasketLiveShippingServiceCreateJsonMutationOptions<
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

export function getDeleteBasketLiveShippingServiceDeleteJsonMutationKey() {
  return [
    'basket.live_shipping_service.delete.json',
    '/basket.live_shipping_service.delete.json',
    'DELETE',
  ] as const
}

export function getDeleteBasketLiveShippingServiceDeleteJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['basket.live_shipping_service.delete.json']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['basket.live_shipping_service.delete.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBasketLiveShippingServiceDeleteJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['basket.live_shipping_service.delete.json']['$delete']
      >,
    ) {
      return parseResponse(
        client['basket.live_shipping_service.delete.json'].$delete(args, options),
      )
    },
  })
}

export function createDeleteBasketLiveShippingServiceDeleteJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['basket.live_shipping_service.delete.json']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['basket.live_shipping_service.delete.json']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBasketLiveShippingServiceDeleteJsonMutationOptions<
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

export function getBasketLiveShippingServiceListJsonQueryKey(
  args: InferRequestType<(typeof client)['basket.live_shipping_service.list.json']['$get']>,
) {
  return [
    'basket.live_shipping_service.list.json',
    '/basket.live_shipping_service.list.json',
    args,
  ] as const
}

export function getBasketLiveShippingServiceListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['basket.live_shipping_service.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['basket.live_shipping_service.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['basket.live_shipping_service.list.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBasketLiveShippingServiceListJsonQueryKey>
  >({
    queryKey: getBasketLiveShippingServiceListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['basket.live_shipping_service.list.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBasketLiveShippingServiceListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['basket.live_shipping_service.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['basket.live_shipping_service.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['basket.live_shipping_service.list.json']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBasketLiveShippingServiceListJsonQueryKey>
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
      ...getBasketLiveShippingServiceListJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostBridgeDeleteJsonMutationKey() {
  return ['bridge.delete.json', '/bridge.delete.json', 'POST'] as const
}

export function getPostBridgeDeleteJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['bridge.delete.json']['$post']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostBridgeDeleteJsonMutationKey(),
    async mutationFn() {
      return parseResponse(client['bridge.delete.json'].$post(undefined, options))
    },
  })
}

export function createPostBridgeDeleteJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['bridge.delete.json']['$post']>>
              >
            >
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBridgeDeleteJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBridgeDownloadFileQueryKey(
  args: InferRequestType<(typeof client)['bridge.download.file']['$get']>,
) {
  return ['bridge.download.file', '/bridge.download.file', args] as const
}

export function getBridgeDownloadFileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['bridge.download.file']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['bridge.download.file']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['bridge.download.file']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBridgeDownloadFileQueryKey>
  >({
    queryKey: getBridgeDownloadFileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['bridge.download.file'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBridgeDownloadFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['bridge.download.file']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['bridge.download.file']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['bridge.download.file']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBridgeDownloadFileQueryKey>
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
    return { ...getBridgeDownloadFileQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostBridgeUpdateJsonMutationKey() {
  return ['bridge.update.json', '/bridge.update.json', 'POST'] as const
}

export function getPostBridgeUpdateJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['bridge.update.json']['$post']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostBridgeUpdateJsonMutationKey(),
    async mutationFn() {
      return parseResponse(client['bridge.update.json'].$post(undefined, options))
    },
  })
}

export function createPostBridgeUpdateJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['bridge.update.json']['$post']>>
              >
            >
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBridgeUpdateJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCartBridgeJsonQueryKey() {
  return ['cart.bridge.json', '/cart.bridge.json'] as const
}

export function getCartBridgeJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.bridge.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.bridge.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCartBridgeJsonQueryKey>
  >({
    queryKey: getCartBridgeJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['cart.bridge.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCartBridgeJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.bridge.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.bridge.json']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCartBridgeJsonQueryKey>
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
    return { ...getCartBridgeJsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getCartCatalogPriceRulesCountJsonQueryKey() {
  return ['cart.catalog_price_rules.count.json', '/cart.catalog_price_rules.count.json'] as const
}

export function getCartCatalogPriceRulesCountJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['cart.catalog_price_rules.count.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['cart.catalog_price_rules.count.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCartCatalogPriceRulesCountJsonQueryKey>
  >({
    queryKey: getCartCatalogPriceRulesCountJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['cart.catalog_price_rules.count.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCartCatalogPriceRulesCountJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['cart.catalog_price_rules.count.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.catalog_price_rules.count.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCartCatalogPriceRulesCountJsonQueryKey>
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
      ...getCartCatalogPriceRulesCountJsonQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCartCatalogPriceRulesListJsonQueryKey(
  args: InferRequestType<(typeof client)['cart.catalog_price_rules.list.json']['$get']>,
) {
  return [
    'cart.catalog_price_rules.list.json',
    '/cart.catalog_price_rules.list.json',
    args,
  ] as const
}

export function getCartCatalogPriceRulesListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['cart.catalog_price_rules.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['cart.catalog_price_rules.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['cart.catalog_price_rules.list.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCartCatalogPriceRulesListJsonQueryKey>
  >({
    queryKey: getCartCatalogPriceRulesListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['cart.catalog_price_rules.list.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCartCatalogPriceRulesListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['cart.catalog_price_rules.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['cart.catalog_price_rules.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.catalog_price_rules.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCartCatalogPriceRulesListJsonQueryKey>
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
      ...getCartCatalogPriceRulesListJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostCartClearCacheJsonMutationKey() {
  return ['cart.clear_cache.json', '/cart.clear_cache.json', 'POST'] as const
}

export function getPostCartClearCacheJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.clear_cache.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['cart.clear_cache.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCartClearCacheJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['cart.clear_cache.json']['$post']>) {
      return parseResponse(client['cart.clear_cache.json'].$post(args, options))
    },
  })
}

export function createPostCartClearCacheJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.clear_cache.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['cart.clear_cache.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCartClearCacheJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCartConfigJsonQueryKey(
  args: InferRequestType<(typeof client)['cart.config.json']['$get']>,
) {
  return ['cart.config.json', '/cart.config.json', args] as const
}

export function getCartConfigJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.config.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['cart.config.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.config.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCartConfigJsonQueryKey>
  >({
    queryKey: getCartConfigJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['cart.config.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCartConfigJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.config.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['cart.config.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.config.json']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCartConfigJsonQueryKey>
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
    return { ...getCartConfigJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutCartConfigUpdateJsonMutationKey() {
  return ['cart.config.update.json', '/cart.config.update.json', 'PUT'] as const
}

export function getPutCartConfigUpdateJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['cart.config.update.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['cart.config.update.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCartConfigUpdateJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['cart.config.update.json']['$put']>) {
      return parseResponse(client['cart.config.update.json'].$put(args, options))
    },
  })
}

export function createPutCartConfigUpdateJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.config.update.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['cart.config.update.json']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCartConfigUpdateJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCartCouponAddJsonMutationKey() {
  return ['cart.coupon.add.json', '/cart.coupon.add.json', 'POST'] as const
}

export function getPostCartCouponAddJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.coupon.add.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['cart.coupon.add.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCartCouponAddJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['cart.coupon.add.json']['$post']>) {
      return parseResponse(client['cart.coupon.add.json'].$post(args, options))
    },
  })
}

export function createPostCartCouponAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.coupon.add.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['cart.coupon.add.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCartCouponAddJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCartCouponConditionAddJsonMutationKey() {
  return ['cart.coupon.condition.add.json', '/cart.coupon.condition.add.json', 'POST'] as const
}

export function getPostCartCouponConditionAddJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['cart.coupon.condition.add.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['cart.coupon.condition.add.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCartCouponConditionAddJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['cart.coupon.condition.add.json']['$post']>,
    ) {
      return parseResponse(client['cart.coupon.condition.add.json'].$post(args, options))
    },
  })
}

export function createPostCartCouponConditionAddJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.coupon.condition.add.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['cart.coupon.condition.add.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCartCouponConditionAddJsonMutationOptions<
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

export function getCartCouponCountJsonQueryKey(
  args: InferRequestType<(typeof client)['cart.coupon.count.json']['$get']>,
) {
  return ['cart.coupon.count.json', '/cart.coupon.count.json', args] as const
}

export function getCartCouponCountJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.coupon.count.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['cart.coupon.count.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.coupon.count.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCartCouponCountJsonQueryKey>
  >({
    queryKey: getCartCouponCountJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['cart.coupon.count.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCartCouponCountJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.coupon.count.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['cart.coupon.count.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.coupon.count.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCartCouponCountJsonQueryKey>
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
    return { ...getCartCouponCountJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteCartCouponDeleteJsonMutationKey() {
  return ['cart.coupon.delete.json', '/cart.coupon.delete.json', 'DELETE'] as const
}

export function getDeleteCartCouponDeleteJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['cart.coupon.delete.json']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['cart.coupon.delete.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCartCouponDeleteJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['cart.coupon.delete.json']['$delete']>,
    ) {
      return parseResponse(client['cart.coupon.delete.json'].$delete(args, options))
    },
  })
}

export function createDeleteCartCouponDeleteJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.coupon.delete.json']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['cart.coupon.delete.json']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCartCouponDeleteJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCartCouponListJsonQueryKey(
  args: InferRequestType<(typeof client)['cart.coupon.list.json']['$get']>,
) {
  return ['cart.coupon.list.json', '/cart.coupon.list.json', args] as const
}

export function getCartCouponListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.coupon.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['cart.coupon.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.coupon.list.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCartCouponListJsonQueryKey>
  >({
    queryKey: getCartCouponListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['cart.coupon.list.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCartCouponListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.coupon.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['cart.coupon.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.coupon.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCartCouponListJsonQueryKey>
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
    return { ...getCartCouponListJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostCartCreateJsonMutationKey() {
  return ['cart.create.json', '/cart.create.json', 'POST'] as const
}

export function getPostCartCreateJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.create.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['cart.create.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCartCreateJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['cart.create.json']['$post']>) {
      return parseResponse(client['cart.create.json'].$post(args, options))
    },
  })
}

export function createPostCartCreateJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.create.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['cart.create.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCartCreateJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteCartDeleteJsonMutationKey() {
  return ['cart.delete.json', '/cart.delete.json', 'DELETE'] as const
}

export function getDeleteCartDeleteJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.delete.json']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['cart.delete.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCartDeleteJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['cart.delete.json']['$delete']>) {
      return parseResponse(client['cart.delete.json'].$delete(args, options))
    },
  })
}

export function createDeleteCartDeleteJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.delete.json']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['cart.delete.json']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCartDeleteJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCartDisconnectJsonQueryKey(
  args: InferRequestType<(typeof client)['cart.disconnect.json']['$get']>,
) {
  return ['cart.disconnect.json', '/cart.disconnect.json', args] as const
}

export function getCartDisconnectJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.disconnect.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['cart.disconnect.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.disconnect.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCartDisconnectJsonQueryKey>
  >({
    queryKey: getCartDisconnectJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['cart.disconnect.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCartDisconnectJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.disconnect.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['cart.disconnect.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.disconnect.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCartDisconnectJsonQueryKey>
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
    return { ...getCartDisconnectJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostCartGiftcardAddJsonMutationKey() {
  return ['cart.giftcard.add.json', '/cart.giftcard.add.json', 'POST'] as const
}

export function getPostCartGiftcardAddJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['cart.giftcard.add.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['cart.giftcard.add.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCartGiftcardAddJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['cart.giftcard.add.json']['$post']>) {
      return parseResponse(client['cart.giftcard.add.json'].$post(args, options))
    },
  })
}

export function createPostCartGiftcardAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.giftcard.add.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['cart.giftcard.add.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCartGiftcardAddJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCartGiftcardCountJsonQueryKey(
  args: InferRequestType<(typeof client)['cart.giftcard.count.json']['$get']>,
) {
  return ['cart.giftcard.count.json', '/cart.giftcard.count.json', args] as const
}

export function getCartGiftcardCountJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.giftcard.count.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['cart.giftcard.count.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['cart.giftcard.count.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCartGiftcardCountJsonQueryKey>
  >({
    queryKey: getCartGiftcardCountJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['cart.giftcard.count.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCartGiftcardCountJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.giftcard.count.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['cart.giftcard.count.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.giftcard.count.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCartGiftcardCountJsonQueryKey>
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
      ...getCartGiftcardCountJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCartGiftcardListJsonQueryKey(
  args: InferRequestType<(typeof client)['cart.giftcard.list.json']['$get']>,
) {
  return ['cart.giftcard.list.json', '/cart.giftcard.list.json', args] as const
}

export function getCartGiftcardListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.giftcard.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['cart.giftcard.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['cart.giftcard.list.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCartGiftcardListJsonQueryKey>
  >({
    queryKey: getCartGiftcardListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['cart.giftcard.list.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCartGiftcardListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.giftcard.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['cart.giftcard.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.giftcard.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCartGiftcardListJsonQueryKey>
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
      ...getCartGiftcardListJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCartInfoJsonQueryKey(
  args: InferRequestType<(typeof client)['cart.info.json']['$get']>,
) {
  return ['cart.info.json', '/cart.info.json', args] as const
}

export function getCartInfoJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.info.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['cart.info.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.info.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCartInfoJsonQueryKey>
  >({
    queryKey: getCartInfoJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['cart.info.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCartInfoJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.info.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['cart.info.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.info.json']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCartInfoJsonQueryKey>
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
    return { ...getCartInfoJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCartListJsonQueryKey() {
  return ['cart.list.json', '/cart.list.json'] as const
}

export function getCartListJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.list.json']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.list.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCartListJsonQueryKey>
  >({
    queryKey: getCartListJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['cart.list.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCartListJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.list.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.list.json']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCartListJsonQueryKey>
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
    return { ...getCartListJsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getCartMetaDataListJsonQueryKey(
  args: InferRequestType<(typeof client)['cart.meta_data.list.json']['$get']>,
) {
  return ['cart.meta_data.list.json', '/cart.meta_data.list.json', args] as const
}

export function getCartMetaDataListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.meta_data.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['cart.meta_data.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['cart.meta_data.list.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCartMetaDataListJsonQueryKey>
  >({
    queryKey: getCartMetaDataListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['cart.meta_data.list.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCartMetaDataListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.meta_data.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['cart.meta_data.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.meta_data.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCartMetaDataListJsonQueryKey>
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
      ...getCartMetaDataListJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostCartMetaDataSetJsonMutationKey() {
  return ['cart.meta_data.set.json', '/cart.meta_data.set.json', 'POST'] as const
}

export function getPostCartMetaDataSetJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['cart.meta_data.set.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['cart.meta_data.set.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCartMetaDataSetJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['cart.meta_data.set.json']['$post']>) {
      return parseResponse(client['cart.meta_data.set.json'].$post(args, options))
    },
  })
}

export function createPostCartMetaDataSetJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.meta_data.set.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['cart.meta_data.set.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCartMetaDataSetJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteCartMetaDataUnsetJsonMutationKey() {
  return ['cart.meta_data.unset.json', '/cart.meta_data.unset.json', 'DELETE'] as const
}

export function getDeleteCartMetaDataUnsetJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['cart.meta_data.unset.json']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['cart.meta_data.unset.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCartMetaDataUnsetJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['cart.meta_data.unset.json']['$delete']>,
    ) {
      return parseResponse(client['cart.meta_data.unset.json'].$delete(args, options))
    },
  })
}

export function createDeleteCartMetaDataUnsetJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.meta_data.unset.json']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['cart.meta_data.unset.json']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCartMetaDataUnsetJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCartMethodsJsonQueryKey() {
  return ['cart.methods.json', '/cart.methods.json'] as const
}

export function getCartMethodsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.methods.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.methods.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCartMethodsJsonQueryKey>
  >({
    queryKey: getCartMethodsJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['cart.methods.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCartMethodsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.methods.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.methods.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCartMethodsJsonQueryKey>
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
    return { ...getCartMethodsJsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getCartPluginListJsonQueryKey(
  args: InferRequestType<(typeof client)['cart.plugin.list.json']['$get']>,
) {
  return ['cart.plugin.list.json', '/cart.plugin.list.json', args] as const
}

export function getCartPluginListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.plugin.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['cart.plugin.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.plugin.list.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCartPluginListJsonQueryKey>
  >({
    queryKey: getCartPluginListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['cart.plugin.list.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCartPluginListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.plugin.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['cart.plugin.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.plugin.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCartPluginListJsonQueryKey>
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
    return { ...getCartPluginListJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostCartScriptAddJsonMutationKey() {
  return ['cart.script.add.json', '/cart.script.add.json', 'POST'] as const
}

export function getPostCartScriptAddJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.script.add.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['cart.script.add.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCartScriptAddJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['cart.script.add.json']['$post']>) {
      return parseResponse(client['cart.script.add.json'].$post(args, options))
    },
  })
}

export function createPostCartScriptAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.script.add.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['cart.script.add.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCartScriptAddJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteCartScriptDeleteJsonMutationKey() {
  return ['cart.script.delete.json', '/cart.script.delete.json', 'DELETE'] as const
}

export function getDeleteCartScriptDeleteJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['cart.script.delete.json']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['cart.script.delete.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCartScriptDeleteJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['cart.script.delete.json']['$delete']>,
    ) {
      return parseResponse(client['cart.script.delete.json'].$delete(args, options))
    },
  })
}

export function createDeleteCartScriptDeleteJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.script.delete.json']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['cart.script.delete.json']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCartScriptDeleteJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCartScriptListJsonQueryKey(
  args: InferRequestType<(typeof client)['cart.script.list.json']['$get']>,
) {
  return ['cart.script.list.json', '/cart.script.list.json', args] as const
}

export function getCartScriptListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.script.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['cart.script.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.script.list.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCartScriptListJsonQueryKey>
  >({
    queryKey: getCartScriptListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['cart.script.list.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCartScriptListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.script.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['cart.script.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.script.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCartScriptListJsonQueryKey>
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
    return { ...getCartScriptListJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCartShippingZonesListJsonQueryKey(
  args: InferRequestType<(typeof client)['cart.shipping_zones.list.json']['$get']>,
) {
  return ['cart.shipping_zones.list.json', '/cart.shipping_zones.list.json', args] as const
}

export function getCartShippingZonesListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['cart.shipping_zones.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['cart.shipping_zones.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['cart.shipping_zones.list.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCartShippingZonesListJsonQueryKey>
  >({
    queryKey: getCartShippingZonesListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['cart.shipping_zones.list.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCartShippingZonesListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['cart.shipping_zones.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['cart.shipping_zones.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.shipping_zones.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCartShippingZonesListJsonQueryKey>
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
      ...getCartShippingZonesListJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCartValidateJsonQueryKey(
  args: InferRequestType<(typeof client)['cart.validate.json']['$get']>,
) {
  return ['cart.validate.json', '/cart.validate.json', args] as const
}

export function getCartValidateJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.validate.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['cart.validate.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.validate.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCartValidateJsonQueryKey>
  >({
    queryKey: getCartValidateJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['cart.validate.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCartValidateJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.validate.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['cart.validate.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.validate.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCartValidateJsonQueryKey>
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
    return { ...getCartValidateJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostCategoryAddJsonMutationKey() {
  return ['category.add.json', '/category.add.json', 'POST'] as const
}

export function getPostCategoryAddJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['category.add.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['category.add.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCategoryAddJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['category.add.json']['$post']>) {
      return parseResponse(client['category.add.json'].$post(args, options))
    },
  })
}

export function createPostCategoryAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['category.add.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['category.add.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCategoryAddJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCategoryAssignJsonMutationKey() {
  return ['category.assign.json', '/category.assign.json', 'POST'] as const
}

export function getPostCategoryAssignJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['category.assign.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['category.assign.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCategoryAssignJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['category.assign.json']['$post']>) {
      return parseResponse(client['category.assign.json'].$post(args, options))
    },
  })
}

export function createPostCategoryAssignJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['category.assign.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['category.assign.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCategoryAssignJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCategoryCountJsonQueryKey(
  args: InferRequestType<(typeof client)['category.count.json']['$get']>,
) {
  return ['category.count.json', '/category.count.json', args] as const
}

export function getCategoryCountJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['category.count.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['category.count.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['category.count.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoryCountJsonQueryKey>
  >({
    queryKey: getCategoryCountJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['category.count.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCategoryCountJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['category.count.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['category.count.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['category.count.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCategoryCountJsonQueryKey>
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
    return { ...getCategoryCountJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteCategoryDeleteJsonMutationKey() {
  return ['category.delete.json', '/category.delete.json', 'DELETE'] as const
}

export function getDeleteCategoryDeleteJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['category.delete.json']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['category.delete.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCategoryDeleteJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['category.delete.json']['$delete']>) {
      return parseResponse(client['category.delete.json'].$delete(args, options))
    },
  })
}

export function createDeleteCategoryDeleteJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['category.delete.json']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['category.delete.json']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCategoryDeleteJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCategoryFindJsonQueryKey(
  args: InferRequestType<(typeof client)['category.find.json']['$get']>,
) {
  return ['category.find.json', '/category.find.json', args] as const
}

export function getCategoryFindJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['category.find.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['category.find.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['category.find.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoryFindJsonQueryKey>
  >({
    queryKey: getCategoryFindJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['category.find.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCategoryFindJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['category.find.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['category.find.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['category.find.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCategoryFindJsonQueryKey>
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
    return { ...getCategoryFindJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostCategoryImageAddJsonMutationKey() {
  return ['category.image.add.json', '/category.image.add.json', 'POST'] as const
}

export function getPostCategoryImageAddJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['category.image.add.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['category.image.add.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCategoryImageAddJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['category.image.add.json']['$post']>) {
      return parseResponse(client['category.image.add.json'].$post(args, options))
    },
  })
}

export function createPostCategoryImageAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['category.image.add.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['category.image.add.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCategoryImageAddJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteCategoryImageDeleteJsonMutationKey() {
  return ['category.image.delete.json', '/category.image.delete.json', 'DELETE'] as const
}

export function getDeleteCategoryImageDeleteJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['category.image.delete.json']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['category.image.delete.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCategoryImageDeleteJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['category.image.delete.json']['$delete']>,
    ) {
      return parseResponse(client['category.image.delete.json'].$delete(args, options))
    },
  })
}

export function createDeleteCategoryImageDeleteJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['category.image.delete.json']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['category.image.delete.json']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCategoryImageDeleteJsonMutationOptions<
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

export function getCategoryInfoJsonQueryKey(
  args: InferRequestType<(typeof client)['category.info.json']['$get']>,
) {
  return ['category.info.json', '/category.info.json', args] as const
}

export function getCategoryInfoJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['category.info.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['category.info.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['category.info.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoryInfoJsonQueryKey>
  >({
    queryKey: getCategoryInfoJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['category.info.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCategoryInfoJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['category.info.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['category.info.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['category.info.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCategoryInfoJsonQueryKey>
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
    return { ...getCategoryInfoJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCategoryListJsonQueryKey(
  args: InferRequestType<(typeof client)['category.list.json']['$get']>,
) {
  return ['category.list.json', '/category.list.json', args] as const
}

export function getCategoryListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['category.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['category.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['category.list.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoryListJsonQueryKey>
  >({
    queryKey: getCategoryListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['category.list.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCategoryListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['category.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['category.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['category.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCategoryListJsonQueryKey>
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
    return { ...getCategoryListJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostCategoryUnassignJsonMutationKey() {
  return ['category.unassign.json', '/category.unassign.json', 'POST'] as const
}

export function getPostCategoryUnassignJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['category.unassign.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['category.unassign.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCategoryUnassignJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['category.unassign.json']['$post']>) {
      return parseResponse(client['category.unassign.json'].$post(args, options))
    },
  })
}

export function createPostCategoryUnassignJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['category.unassign.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['category.unassign.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCategoryUnassignJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutCategoryUpdateJsonMutationKey() {
  return ['category.update.json', '/category.update.json', 'PUT'] as const
}

export function getPutCategoryUpdateJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['category.update.json']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['category.update.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCategoryUpdateJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['category.update.json']['$put']>) {
      return parseResponse(client['category.update.json'].$put(args, options))
    },
  })
}

export function createPutCategoryUpdateJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['category.update.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['category.update.json']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCategoryUpdateJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCustomerAddJsonMutationKey() {
  return ['customer.add.json', '/customer.add.json', 'POST'] as const
}

export function getPostCustomerAddJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.add.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['customer.add.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomerAddJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['customer.add.json']['$post']>) {
      return parseResponse(client['customer.add.json'].$post(args, options))
    },
  })
}

export function createPostCustomerAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['customer.add.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['customer.add.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCustomerAddJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCustomerAttributeListJsonQueryKey(
  args: InferRequestType<(typeof client)['customer.attribute.list.json']['$get']>,
) {
  return ['customer.attribute.list.json', '/customer.attribute.list.json', args] as const
}

export function getCustomerAttributeListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['customer.attribute.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['customer.attribute.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['customer.attribute.list.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomerAttributeListJsonQueryKey>
  >({
    queryKey: getCustomerAttributeListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['customer.attribute.list.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomerAttributeListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['customer.attribute.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['customer.attribute.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['customer.attribute.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomerAttributeListJsonQueryKey>
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
      ...getCustomerAttributeListJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCustomerCountJsonQueryKey(
  args: InferRequestType<(typeof client)['customer.count.json']['$get']>,
) {
  return ['customer.count.json', '/customer.count.json', args] as const
}

export function getCustomerCountJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.count.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['customer.count.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.count.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomerCountJsonQueryKey>
  >({
    queryKey: getCustomerCountJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['customer.count.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomerCountJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.count.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['customer.count.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['customer.count.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomerCountJsonQueryKey>
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
    return { ...getCustomerCountJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCustomerFindJsonQueryKey(
  args: InferRequestType<(typeof client)['customer.find.json']['$get']>,
) {
  return ['customer.find.json', '/customer.find.json', args] as const
}

export function getCustomerFindJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.find.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['customer.find.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.find.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomerFindJsonQueryKey>
  >({
    queryKey: getCustomerFindJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['customer.find.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCustomerFindJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.find.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['customer.find.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['customer.find.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomerFindJsonQueryKey>
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
    return { ...getCustomerFindJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostCustomerGroupAddJsonMutationKey() {
  return ['customer.group.add.json', '/customer.group.add.json', 'POST'] as const
}

export function getPostCustomerGroupAddJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['customer.group.add.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['customer.group.add.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomerGroupAddJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['customer.group.add.json']['$post']>) {
      return parseResponse(client['customer.group.add.json'].$post(args, options))
    },
  })
}

export function createPostCustomerGroupAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['customer.group.add.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['customer.group.add.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCustomerGroupAddJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCustomerGroupListJsonQueryKey(
  args: InferRequestType<(typeof client)['customer.group.list.json']['$get']>,
) {
  return ['customer.group.list.json', '/customer.group.list.json', args] as const
}

export function getCustomerGroupListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.group.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['customer.group.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['customer.group.list.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomerGroupListJsonQueryKey>
  >({
    queryKey: getCustomerGroupListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['customer.group.list.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomerGroupListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.group.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['customer.group.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['customer.group.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomerGroupListJsonQueryKey>
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
      ...getCustomerGroupListJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCustomerInfoJsonQueryKey(
  args: InferRequestType<(typeof client)['customer.info.json']['$get']>,
) {
  return ['customer.info.json', '/customer.info.json', args] as const
}

export function getCustomerInfoJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.info.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['customer.info.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.info.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomerInfoJsonQueryKey>
  >({
    queryKey: getCustomerInfoJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['customer.info.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCustomerInfoJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.info.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['customer.info.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['customer.info.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomerInfoJsonQueryKey>
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
    return { ...getCustomerInfoJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCustomerListJsonQueryKey(
  args: InferRequestType<(typeof client)['customer.list.json']['$get']>,
) {
  return ['customer.list.json', '/customer.list.json', args] as const
}

export function getCustomerListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['customer.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.list.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomerListJsonQueryKey>
  >({
    queryKey: getCustomerListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['customer.list.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCustomerListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['customer.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['customer.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomerListJsonQueryKey>
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
    return { ...getCustomerListJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutCustomerUpdateJsonMutationKey() {
  return ['customer.update.json', '/customer.update.json', 'PUT'] as const
}

export function getPutCustomerUpdateJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.update.json']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['customer.update.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCustomerUpdateJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['customer.update.json']['$put']>) {
      return parseResponse(client['customer.update.json'].$put(args, options))
    },
  })
}

export function createPutCustomerUpdateJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['customer.update.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['customer.update.json']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCustomerUpdateJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrderAbandonedListJsonQueryKey(
  args: InferRequestType<(typeof client)['order.abandoned.list.json']['$get']>,
) {
  return ['order.abandoned.list.json', '/order.abandoned.list.json', args] as const
}

export function getOrderAbandonedListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['order.abandoned.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['order.abandoned.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['order.abandoned.list.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrderAbandonedListJsonQueryKey>
  >({
    queryKey: getOrderAbandonedListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['order.abandoned.list.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrderAbandonedListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['order.abandoned.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['order.abandoned.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['order.abandoned.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrderAbandonedListJsonQueryKey>
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
      ...getOrderAbandonedListJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOrderAddJsonMutationKey() {
  return ['order.add.json', '/order.add.json', 'POST'] as const
}

export function getPostOrderAddJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['order.add.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['order.add.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrderAddJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['order.add.json']['$post']>) {
      return parseResponse(client['order.add.json'].$post(args, options))
    },
  })
}

export function createPostOrderAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['order.add.json']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['order.add.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrderAddJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrderCountJsonQueryKey(
  args: InferRequestType<(typeof client)['order.count.json']['$get']>,
) {
  return ['order.count.json', '/order.count.json', args] as const
}

export function getOrderCountJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['order.count.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['order.count.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['order.count.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrderCountJsonQueryKey>
  >({
    queryKey: getOrderCountJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['order.count.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrderCountJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['order.count.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['order.count.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['order.count.json']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrderCountJsonQueryKey>
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
    return { ...getOrderCountJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOrderFinancialStatusListJsonQueryKey() {
  return ['order.financial_status.list.json', '/order.financial_status.list.json'] as const
}

export function getOrderFinancialStatusListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['order.financial_status.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['order.financial_status.list.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrderFinancialStatusListJsonQueryKey>
  >({
    queryKey: getOrderFinancialStatusListJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['order.financial_status.list.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrderFinancialStatusListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['order.financial_status.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['order.financial_status.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrderFinancialStatusListJsonQueryKey>
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
      ...getOrderFinancialStatusListJsonQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrderFindJsonQueryKey(
  args: InferRequestType<(typeof client)['order.find.json']['$get']>,
) {
  return ['order.find.json', '/order.find.json', args] as const
}

export function getOrderFindJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['order.find.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['order.find.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['order.find.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrderFindJsonQueryKey>
  >({
    queryKey: getOrderFindJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['order.find.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrderFindJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['order.find.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['order.find.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['order.find.json']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrderFindJsonQueryKey>
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
    return { ...getOrderFindJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOrderFulfillmentStatusListJsonQueryKey() {
  return ['order.fulfillment_status.list.json', '/order.fulfillment_status.list.json'] as const
}

export function getOrderFulfillmentStatusListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['order.fulfillment_status.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['order.fulfillment_status.list.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrderFulfillmentStatusListJsonQueryKey>
  >({
    queryKey: getOrderFulfillmentStatusListJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['order.fulfillment_status.list.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrderFulfillmentStatusListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['order.fulfillment_status.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['order.fulfillment_status.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrderFulfillmentStatusListJsonQueryKey>
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
      ...getOrderFulfillmentStatusListJsonQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrderInfoJsonQueryKey(
  args: InferRequestType<(typeof client)['order.info.json']['$get']>,
) {
  return ['order.info.json', '/order.info.json', args] as const
}

export function getOrderInfoJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['order.info.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['order.info.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['order.info.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrderInfoJsonQueryKey>
  >({
    queryKey: getOrderInfoJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['order.info.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrderInfoJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['order.info.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['order.info.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['order.info.json']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrderInfoJsonQueryKey>
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
    return { ...getOrderInfoJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOrderListJsonQueryKey(
  args: InferRequestType<(typeof client)['order.list.json']['$get']>,
) {
  return ['order.list.json', '/order.list.json', args] as const
}

export function getOrderListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['order.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['order.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['order.list.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrderListJsonQueryKey>
  >({
    queryKey: getOrderListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['order.list.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrderListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['order.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['order.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['order.list.json']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrderListJsonQueryKey>
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
    return { ...getOrderListJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostOrderPreestimateShippingListJsonMutationKey() {
  return [
    'order.preestimate_shipping.list.json',
    '/order.preestimate_shipping.list.json',
    'POST',
  ] as const
}

export function getPostOrderPreestimateShippingListJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['order.preestimate_shipping.list.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['order.preestimate_shipping.list.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrderPreestimateShippingListJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['order.preestimate_shipping.list.json']['$post']>,
    ) {
      return parseResponse(client['order.preestimate_shipping.list.json'].$post(args, options))
    },
  })
}

export function createPostOrderPreestimateShippingListJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['order.preestimate_shipping.list.json']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['order.preestimate_shipping.list.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrderPreestimateShippingListJsonMutationOptions<
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

export function getPostOrderRefundAddJsonMutationKey() {
  return ['order.refund.add.json', '/order.refund.add.json', 'POST'] as const
}

export function getPostOrderRefundAddJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['order.refund.add.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['order.refund.add.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrderRefundAddJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['order.refund.add.json']['$post']>) {
      return parseResponse(client['order.refund.add.json'].$post(args, options))
    },
  })
}

export function createPostOrderRefundAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['order.refund.add.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['order.refund.add.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrderRefundAddJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOrderShipmentAddJsonMutationKey() {
  return ['order.shipment.add.json', '/order.shipment.add.json', 'POST'] as const
}

export function getPostOrderShipmentAddJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['order.shipment.add.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['order.shipment.add.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrderShipmentAddJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['order.shipment.add.json']['$post']>) {
      return parseResponse(client['order.shipment.add.json'].$post(args, options))
    },
  })
}

export function createPostOrderShipmentAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['order.shipment.add.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['order.shipment.add.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrderShipmentAddJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOrderShipmentDeleteJsonMutationKey() {
  return ['order.shipment.delete.json', '/order.shipment.delete.json', 'DELETE'] as const
}

export function getDeleteOrderShipmentDeleteJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['order.shipment.delete.json']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['order.shipment.delete.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrderShipmentDeleteJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['order.shipment.delete.json']['$delete']>,
    ) {
      return parseResponse(client['order.shipment.delete.json'].$delete(args, options))
    },
  })
}

export function createDeleteOrderShipmentDeleteJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['order.shipment.delete.json']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['order.shipment.delete.json']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrderShipmentDeleteJsonMutationOptions<
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

export function getOrderShipmentInfoJsonQueryKey(
  args: InferRequestType<(typeof client)['order.shipment.info.json']['$get']>,
) {
  return ['order.shipment.info.json', '/order.shipment.info.json', args] as const
}

export function getOrderShipmentInfoJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['order.shipment.info.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['order.shipment.info.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['order.shipment.info.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrderShipmentInfoJsonQueryKey>
  >({
    queryKey: getOrderShipmentInfoJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['order.shipment.info.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrderShipmentInfoJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['order.shipment.info.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['order.shipment.info.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['order.shipment.info.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrderShipmentInfoJsonQueryKey>
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
      ...getOrderShipmentInfoJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrderShipmentListJsonQueryKey(
  args: InferRequestType<(typeof client)['order.shipment.list.json']['$get']>,
) {
  return ['order.shipment.list.json', '/order.shipment.list.json', args] as const
}

export function getOrderShipmentListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['order.shipment.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['order.shipment.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['order.shipment.list.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrderShipmentListJsonQueryKey>
  >({
    queryKey: getOrderShipmentListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['order.shipment.list.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrderShipmentListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['order.shipment.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['order.shipment.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['order.shipment.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrderShipmentListJsonQueryKey>
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
      ...getOrderShipmentListJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOrderShipmentTrackingAddJsonMutationKey() {
  return ['order.shipment.tracking.add.json', '/order.shipment.tracking.add.json', 'POST'] as const
}

export function getPostOrderShipmentTrackingAddJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['order.shipment.tracking.add.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['order.shipment.tracking.add.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrderShipmentTrackingAddJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['order.shipment.tracking.add.json']['$post']>,
    ) {
      return parseResponse(client['order.shipment.tracking.add.json'].$post(args, options))
    },
  })
}

export function createPostOrderShipmentTrackingAddJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['order.shipment.tracking.add.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['order.shipment.tracking.add.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrderShipmentTrackingAddJsonMutationOptions<
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

export function getPutOrderShipmentUpdateJsonMutationKey() {
  return ['order.shipment.update.json', '/order.shipment.update.json', 'PUT'] as const
}

export function getPutOrderShipmentUpdateJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['order.shipment.update.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['order.shipment.update.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrderShipmentUpdateJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['order.shipment.update.json']['$put']>,
    ) {
      return parseResponse(client['order.shipment.update.json'].$put(args, options))
    },
  })
}

export function createPutOrderShipmentUpdateJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['order.shipment.update.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['order.shipment.update.json']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrderShipmentUpdateJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrderStatusListJsonQueryKey(
  args: InferRequestType<(typeof client)['order.status.list.json']['$get']>,
) {
  return ['order.status.list.json', '/order.status.list.json', args] as const
}

export function getOrderStatusListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['order.status.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['order.status.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['order.status.list.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrderStatusListJsonQueryKey>
  >({
    queryKey: getOrderStatusListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['order.status.list.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrderStatusListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['order.status.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['order.status.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['order.status.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrderStatusListJsonQueryKey>
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
    return { ...getOrderStatusListJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOrderTransactionListJsonQueryKey(
  args: InferRequestType<(typeof client)['order.transaction.list.json']['$get']>,
) {
  return ['order.transaction.list.json', '/order.transaction.list.json', args] as const
}

export function getOrderTransactionListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['order.transaction.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['order.transaction.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['order.transaction.list.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrderTransactionListJsonQueryKey>
  >({
    queryKey: getOrderTransactionListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['order.transaction.list.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrderTransactionListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['order.transaction.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['order.transaction.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['order.transaction.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrderTransactionListJsonQueryKey>
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
      ...getOrderTransactionListJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutOrderUpdateJsonMutationKey() {
  return ['order.update.json', '/order.update.json', 'PUT'] as const
}

export function getPutOrderUpdateJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['order.update.json']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['order.update.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrderUpdateJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['order.update.json']['$put']>) {
      return parseResponse(client['order.update.json'].$put(args, options))
    },
  })
}

export function createPutOrderUpdateJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['order.update.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['order.update.json']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrderUpdateJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostProductAddJsonMutationKey() {
  return ['product.add.json', '/product.add.json', 'POST'] as const
}

export function getPostProductAddJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['product.add.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['product.add.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProductAddJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['product.add.json']['$post']>) {
      return parseResponse(client['product.add.json'].$post(args, options))
    },
  })
}

export function createPostProductAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.add.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.add.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProductAddJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProductAttributeListJsonQueryKey(
  args: InferRequestType<(typeof client)['product.attribute.list.json']['$get']>,
) {
  return ['product.attribute.list.json', '/product.attribute.list.json', args] as const
}

export function getProductAttributeListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['product.attribute.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['product.attribute.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.attribute.list.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductAttributeListJsonQueryKey>
  >({
    queryKey: getProductAttributeListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['product.attribute.list.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProductAttributeListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['product.attribute.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['product.attribute.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.attribute.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProductAttributeListJsonQueryKey>
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
      ...getProductAttributeListJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProductAttributeValueSetJsonMutationKey() {
  return ['product.attribute.value.set.json', '/product.attribute.value.set.json', 'POST'] as const
}

export function getPostProductAttributeValueSetJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.attribute.value.set.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['product.attribute.value.set.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProductAttributeValueSetJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['product.attribute.value.set.json']['$post']>,
    ) {
      return parseResponse(client['product.attribute.value.set.json'].$post(args, options))
    },
  })
}

export function createPostProductAttributeValueSetJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.attribute.value.set.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.attribute.value.set.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProductAttributeValueSetJsonMutationOptions<
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

export function getPostProductAttributeValueUnsetJsonMutationKey() {
  return [
    'product.attribute.value.unset.json',
    '/product.attribute.value.unset.json',
    'POST',
  ] as const
}

export function getPostProductAttributeValueUnsetJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.attribute.value.unset.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['product.attribute.value.unset.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProductAttributeValueUnsetJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['product.attribute.value.unset.json']['$post']>,
    ) {
      return parseResponse(client['product.attribute.value.unset.json'].$post(args, options))
    },
  })
}

export function createPostProductAttributeValueUnsetJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.attribute.value.unset.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.attribute.value.unset.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProductAttributeValueUnsetJsonMutationOptions<
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

export function getProductBrandListJsonQueryKey(
  args: InferRequestType<(typeof client)['product.brand.list.json']['$get']>,
) {
  return ['product.brand.list.json', '/product.brand.list.json', args] as const
}

export function getProductBrandListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['product.brand.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['product.brand.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.brand.list.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductBrandListJsonQueryKey>
  >({
    queryKey: getProductBrandListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['product.brand.list.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProductBrandListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['product.brand.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['product.brand.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.brand.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProductBrandListJsonQueryKey>
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
      ...getProductBrandListJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProductChildItemFindJsonQueryKey(
  args: InferRequestType<(typeof client)['product.child_item.find.json']['$get']>,
) {
  return ['product.child_item.find.json', '/product.child_item.find.json', args] as const
}

export function getProductChildItemFindJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['product.child_item.find.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['product.child_item.find.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.child_item.find.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductChildItemFindJsonQueryKey>
  >({
    queryKey: getProductChildItemFindJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['product.child_item.find.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProductChildItemFindJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['product.child_item.find.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['product.child_item.find.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.child_item.find.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProductChildItemFindJsonQueryKey>
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
      ...getProductChildItemFindJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProductChildItemInfoJsonQueryKey(
  args: InferRequestType<(typeof client)['product.child_item.info.json']['$get']>,
) {
  return ['product.child_item.info.json', '/product.child_item.info.json', args] as const
}

export function getProductChildItemInfoJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['product.child_item.info.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['product.child_item.info.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.child_item.info.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductChildItemInfoJsonQueryKey>
  >({
    queryKey: getProductChildItemInfoJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['product.child_item.info.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProductChildItemInfoJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['product.child_item.info.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['product.child_item.info.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.child_item.info.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProductChildItemInfoJsonQueryKey>
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
      ...getProductChildItemInfoJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProductChildItemListJsonQueryKey(
  args: InferRequestType<(typeof client)['product.child_item.list.json']['$get']>,
) {
  return ['product.child_item.list.json', '/product.child_item.list.json', args] as const
}

export function getProductChildItemListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['product.child_item.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['product.child_item.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.child_item.list.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductChildItemListJsonQueryKey>
  >({
    queryKey: getProductChildItemListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['product.child_item.list.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProductChildItemListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['product.child_item.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['product.child_item.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.child_item.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProductChildItemListJsonQueryKey>
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
      ...getProductChildItemListJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProductCountJsonQueryKey(
  args: InferRequestType<(typeof client)['product.count.json']['$get']>,
) {
  return ['product.count.json', '/product.count.json', args] as const
}

export function getProductCountJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['product.count.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['product.count.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['product.count.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductCountJsonQueryKey>
  >({
    queryKey: getProductCountJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['product.count.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProductCountJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['product.count.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['product.count.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.count.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProductCountJsonQueryKey>
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
    return { ...getProductCountJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostProductCurrencyAddJsonMutationKey() {
  return ['product.currency.add.json', '/product.currency.add.json', 'POST'] as const
}

export function getPostProductCurrencyAddJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.currency.add.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['product.currency.add.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProductCurrencyAddJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['product.currency.add.json']['$post']>,
    ) {
      return parseResponse(client['product.currency.add.json'].$post(args, options))
    },
  })
}

export function createPostProductCurrencyAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.currency.add.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.currency.add.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProductCurrencyAddJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProductCurrencyListJsonQueryKey(
  args: InferRequestType<(typeof client)['product.currency.list.json']['$get']>,
) {
  return ['product.currency.list.json', '/product.currency.list.json', args] as const
}

export function getProductCurrencyListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['product.currency.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['product.currency.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.currency.list.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductCurrencyListJsonQueryKey>
  >({
    queryKey: getProductCurrencyListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['product.currency.list.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProductCurrencyListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['product.currency.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['product.currency.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.currency.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProductCurrencyListJsonQueryKey>
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
      ...getProductCurrencyListJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteProductDeleteJsonMutationKey() {
  return ['product.delete.json', '/product.delete.json', 'DELETE'] as const
}

export function getDeleteProductDeleteJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['product.delete.json']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['product.delete.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProductDeleteJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['product.delete.json']['$delete']>) {
      return parseResponse(client['product.delete.json'].$delete(args, options))
    },
  })
}

export function createDeleteProductDeleteJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.delete.json']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.delete.json']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProductDeleteJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProductFieldsJsonQueryKey() {
  return ['product.fields.json', '/product.fields.json'] as const
}

export function getProductFieldsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['product.fields.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['product.fields.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductFieldsJsonQueryKey>
  >({
    queryKey: getProductFieldsJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['product.fields.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProductFieldsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['product.fields.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.fields.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProductFieldsJsonQueryKey>
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
    return { ...getProductFieldsJsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getProductFindJsonQueryKey(
  args: InferRequestType<(typeof client)['product.find.json']['$get']>,
) {
  return ['product.find.json', '/product.find.json', args] as const
}

export function getProductFindJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['product.find.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['product.find.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['product.find.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductFindJsonQueryKey>
  >({
    queryKey: getProductFindJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['product.find.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProductFindJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['product.find.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['product.find.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.find.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProductFindJsonQueryKey>
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
    return { ...getProductFindJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostProductImageAddJsonMutationKey() {
  return ['product.image.add.json', '/product.image.add.json', 'POST'] as const
}

export function getPostProductImageAddJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.image.add.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['product.image.add.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProductImageAddJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['product.image.add.json']['$post']>) {
      return parseResponse(client['product.image.add.json'].$post(args, options))
    },
  })
}

export function createPostProductImageAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.image.add.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.image.add.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProductImageAddJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteProductImageDeleteJsonMutationKey() {
  return ['product.image.delete.json', '/product.image.delete.json', 'DELETE'] as const
}

export function getDeleteProductImageDeleteJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.image.delete.json']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['product.image.delete.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProductImageDeleteJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['product.image.delete.json']['$delete']>,
    ) {
      return parseResponse(client['product.image.delete.json'].$delete(args, options))
    },
  })
}

export function createDeleteProductImageDeleteJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.image.delete.json']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.image.delete.json']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProductImageDeleteJsonMutationOptions<
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

export function getPutProductImageUpdateJsonMutationKey() {
  return ['product.image.update.json', '/product.image.update.json', 'PUT'] as const
}

export function getPutProductImageUpdateJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.image.update.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['product.image.update.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProductImageUpdateJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['product.image.update.json']['$put']>) {
      return parseResponse(client['product.image.update.json'].$put(args, options))
    },
  })
}

export function createPutProductImageUpdateJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.image.update.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.image.update.json']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutProductImageUpdateJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProductInfoJsonQueryKey(
  args: InferRequestType<(typeof client)['product.info.json']['$get']>,
) {
  return ['product.info.json', '/product.info.json', args] as const
}

export function getProductInfoJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['product.info.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['product.info.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['product.info.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductInfoJsonQueryKey>
  >({
    queryKey: getProductInfoJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['product.info.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProductInfoJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['product.info.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['product.info.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.info.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProductInfoJsonQueryKey>
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
    return { ...getProductInfoJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getProductListJsonQueryKey(
  args: InferRequestType<(typeof client)['product.list.json']['$get']>,
) {
  return ['product.list.json', '/product.list.json', args] as const
}

export function getProductListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['product.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['product.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['product.list.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductListJsonQueryKey>
  >({
    queryKey: getProductListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['product.list.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProductListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['product.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['product.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProductListJsonQueryKey>
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
    return { ...getProductListJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostProductManufacturerAddJsonMutationKey() {
  return ['product.manufacturer.add.json', '/product.manufacturer.add.json', 'POST'] as const
}

export function getPostProductManufacturerAddJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.manufacturer.add.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['product.manufacturer.add.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProductManufacturerAddJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['product.manufacturer.add.json']['$post']>,
    ) {
      return parseResponse(client['product.manufacturer.add.json'].$post(args, options))
    },
  })
}

export function createPostProductManufacturerAddJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.manufacturer.add.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.manufacturer.add.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProductManufacturerAddJsonMutationOptions<
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

export function getPostProductOptionAddJsonMutationKey() {
  return ['product.option.add.json', '/product.option.add.json', 'POST'] as const
}

export function getPostProductOptionAddJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.option.add.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['product.option.add.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProductOptionAddJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['product.option.add.json']['$post']>) {
      return parseResponse(client['product.option.add.json'].$post(args, options))
    },
  })
}

export function createPostProductOptionAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.option.add.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.option.add.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProductOptionAddJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostProductOptionAssignJsonMutationKey() {
  return ['product.option.assign.json', '/product.option.assign.json', 'POST'] as const
}

export function getPostProductOptionAssignJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.option.assign.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['product.option.assign.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProductOptionAssignJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['product.option.assign.json']['$post']>,
    ) {
      return parseResponse(client['product.option.assign.json'].$post(args, options))
    },
  })
}

export function createPostProductOptionAssignJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.option.assign.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.option.assign.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProductOptionAssignJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProductOptionListJsonQueryKey(
  args: InferRequestType<(typeof client)['product.option.list.json']['$get']>,
) {
  return ['product.option.list.json', '/product.option.list.json', args] as const
}

export function getProductOptionListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['product.option.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['product.option.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.option.list.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductOptionListJsonQueryKey>
  >({
    queryKey: getProductOptionListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['product.option.list.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProductOptionListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['product.option.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['product.option.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.option.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProductOptionListJsonQueryKey>
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
      ...getProductOptionListJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProductOptionValueAddJsonMutationKey() {
  return ['product.option.value.add.json', '/product.option.value.add.json', 'POST'] as const
}

export function getPostProductOptionValueAddJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.option.value.add.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['product.option.value.add.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProductOptionValueAddJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['product.option.value.add.json']['$post']>,
    ) {
      return parseResponse(client['product.option.value.add.json'].$post(args, options))
    },
  })
}

export function createPostProductOptionValueAddJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.option.value.add.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.option.value.add.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProductOptionValueAddJsonMutationOptions<
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

export function getPostProductOptionValueAssignJsonMutationKey() {
  return ['product.option.value.assign.json', '/product.option.value.assign.json', 'POST'] as const
}

export function getPostProductOptionValueAssignJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.option.value.assign.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['product.option.value.assign.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProductOptionValueAssignJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['product.option.value.assign.json']['$post']>,
    ) {
      return parseResponse(client['product.option.value.assign.json'].$post(args, options))
    },
  })
}

export function createPostProductOptionValueAssignJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.option.value.assign.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.option.value.assign.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProductOptionValueAssignJsonMutationOptions<
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

export function getPutProductOptionValueUpdateJsonMutationKey() {
  return ['product.option.value.update.json', '/product.option.value.update.json', 'PUT'] as const
}

export function getPutProductOptionValueUpdateJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.option.value.update.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['product.option.value.update.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProductOptionValueUpdateJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['product.option.value.update.json']['$put']>,
    ) {
      return parseResponse(client['product.option.value.update.json'].$put(args, options))
    },
  })
}

export function createPutProductOptionValueUpdateJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.option.value.update.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.option.value.update.json']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutProductOptionValueUpdateJsonMutationOptions<
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

export function getPostProductPriceAddJsonMutationKey() {
  return ['product.price.add.json', '/product.price.add.json', 'POST'] as const
}

export function getPostProductPriceAddJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.price.add.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['product.price.add.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProductPriceAddJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['product.price.add.json']['$post']>) {
      return parseResponse(client['product.price.add.json'].$post(args, options))
    },
  })
}

export function createPostProductPriceAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.price.add.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.price.add.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProductPriceAddJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteProductPriceDeleteJsonMutationKey() {
  return ['product.price.delete.json', '/product.price.delete.json', 'DELETE'] as const
}

export function getDeleteProductPriceDeleteJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.price.delete.json']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['product.price.delete.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProductPriceDeleteJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['product.price.delete.json']['$delete']>,
    ) {
      return parseResponse(client['product.price.delete.json'].$delete(args, options))
    },
  })
}

export function createDeleteProductPriceDeleteJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.price.delete.json']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.price.delete.json']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProductPriceDeleteJsonMutationOptions<
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

export function getPutProductPriceUpdateJsonMutationKey() {
  return ['product.price.update.json', '/product.price.update.json', 'PUT'] as const
}

export function getPutProductPriceUpdateJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.price.update.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['product.price.update.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProductPriceUpdateJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['product.price.update.json']['$put']>) {
      return parseResponse(client['product.price.update.json'].$put(args, options))
    },
  })
}

export function createPutProductPriceUpdateJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.price.update.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.price.update.json']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutProductPriceUpdateJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProductReviewListJsonQueryKey(
  args: InferRequestType<(typeof client)['product.review.list.json']['$get']>,
) {
  return ['product.review.list.json', '/product.review.list.json', args] as const
}

export function getProductReviewListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['product.review.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['product.review.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.review.list.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductReviewListJsonQueryKey>
  >({
    queryKey: getProductReviewListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['product.review.list.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProductReviewListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['product.review.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['product.review.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.review.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProductReviewListJsonQueryKey>
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
      ...getProductReviewListJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProductStoreAssignJsonMutationKey() {
  return ['product.store.assign.json', '/product.store.assign.json', 'POST'] as const
}

export function getPostProductStoreAssignJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.store.assign.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['product.store.assign.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProductStoreAssignJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['product.store.assign.json']['$post']>,
    ) {
      return parseResponse(client['product.store.assign.json'].$post(args, options))
    },
  })
}

export function createPostProductStoreAssignJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.store.assign.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.store.assign.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProductStoreAssignJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostProductTaxAddJsonMutationKey() {
  return ['product.tax.add.json', '/product.tax.add.json', 'POST'] as const
}

export function getPostProductTaxAddJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['product.tax.add.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['product.tax.add.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProductTaxAddJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['product.tax.add.json']['$post']>) {
      return parseResponse(client['product.tax.add.json'].$post(args, options))
    },
  })
}

export function createPostProductTaxAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.tax.add.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.tax.add.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProductTaxAddJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutProductUpdateJsonMutationKey() {
  return ['product.update.json', '/product.update.json', 'PUT'] as const
}

export function getPutProductUpdateJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['product.update.json']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['product.update.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProductUpdateJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['product.update.json']['$put']>) {
      return parseResponse(client['product.update.json'].$put(args, options))
    },
  })
}

export function createPutProductUpdateJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.update.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.update.json']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutProductUpdateJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostProductVariantAddJsonMutationKey() {
  return ['product.variant.add.json', '/product.variant.add.json', 'POST'] as const
}

export function getPostProductVariantAddJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.variant.add.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['product.variant.add.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProductVariantAddJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['product.variant.add.json']['$post']>) {
      return parseResponse(client['product.variant.add.json'].$post(args, options))
    },
  })
}

export function createPostProductVariantAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.variant.add.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.variant.add.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProductVariantAddJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProductVariantCountJsonQueryKey(
  args: InferRequestType<(typeof client)['product.variant.count.json']['$get']>,
) {
  return ['product.variant.count.json', '/product.variant.count.json', args] as const
}

export function getProductVariantCountJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['product.variant.count.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['product.variant.count.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.variant.count.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductVariantCountJsonQueryKey>
  >({
    queryKey: getProductVariantCountJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['product.variant.count.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProductVariantCountJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['product.variant.count.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['product.variant.count.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.variant.count.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProductVariantCountJsonQueryKey>
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
      ...getProductVariantCountJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteProductVariantDeleteJsonMutationKey() {
  return ['product.variant.delete.json', '/product.variant.delete.json', 'DELETE'] as const
}

export function getDeleteProductVariantDeleteJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.variant.delete.json']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['product.variant.delete.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProductVariantDeleteJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['product.variant.delete.json']['$delete']>,
    ) {
      return parseResponse(client['product.variant.delete.json'].$delete(args, options))
    },
  })
}

export function createDeleteProductVariantDeleteJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.variant.delete.json']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.variant.delete.json']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProductVariantDeleteJsonMutationOptions<
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

export function getPostProductVariantImageAddJsonMutationKey() {
  return ['product.variant.image.add.json', '/product.variant.image.add.json', 'POST'] as const
}

export function getPostProductVariantImageAddJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.variant.image.add.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['product.variant.image.add.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProductVariantImageAddJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['product.variant.image.add.json']['$post']>,
    ) {
      return parseResponse(client['product.variant.image.add.json'].$post(args, options))
    },
  })
}

export function createPostProductVariantImageAddJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.variant.image.add.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.variant.image.add.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProductVariantImageAddJsonMutationOptions<
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

export function getDeleteProductVariantImageDeleteJsonMutationKey() {
  return [
    'product.variant.image.delete.json',
    '/product.variant.image.delete.json',
    'DELETE',
  ] as const
}

export function getDeleteProductVariantImageDeleteJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.variant.image.delete.json']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['product.variant.image.delete.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProductVariantImageDeleteJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['product.variant.image.delete.json']['$delete']>,
    ) {
      return parseResponse(client['product.variant.image.delete.json'].$delete(args, options))
    },
  })
}

export function createDeleteProductVariantImageDeleteJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.variant.image.delete.json']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.variant.image.delete.json']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProductVariantImageDeleteJsonMutationOptions<
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

export function getProductVariantInfoJsonQueryKey(
  args: InferRequestType<(typeof client)['product.variant.info.json']['$get']>,
) {
  return ['product.variant.info.json', '/product.variant.info.json', args] as const
}

export function getProductVariantInfoJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['product.variant.info.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['product.variant.info.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.variant.info.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductVariantInfoJsonQueryKey>
  >({
    queryKey: getProductVariantInfoJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['product.variant.info.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProductVariantInfoJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['product.variant.info.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['product.variant.info.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.variant.info.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProductVariantInfoJsonQueryKey>
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
      ...getProductVariantInfoJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProductVariantListJsonQueryKey(
  args: InferRequestType<(typeof client)['product.variant.list.json']['$get']>,
) {
  return ['product.variant.list.json', '/product.variant.list.json', args] as const
}

export function getProductVariantListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['product.variant.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['product.variant.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.variant.list.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductVariantListJsonQueryKey>
  >({
    queryKey: getProductVariantListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['product.variant.list.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProductVariantListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['product.variant.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['product.variant.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.variant.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProductVariantListJsonQueryKey>
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
      ...getProductVariantListJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProductVariantPriceAddJsonMutationKey() {
  return ['product.variant.price.add.json', '/product.variant.price.add.json', 'POST'] as const
}

export function getPostProductVariantPriceAddJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.variant.price.add.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['product.variant.price.add.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProductVariantPriceAddJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['product.variant.price.add.json']['$post']>,
    ) {
      return parseResponse(client['product.variant.price.add.json'].$post(args, options))
    },
  })
}

export function createPostProductVariantPriceAddJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.variant.price.add.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.variant.price.add.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProductVariantPriceAddJsonMutationOptions<
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

export function getDeleteProductVariantPriceDeleteJsonMutationKey() {
  return [
    'product.variant.price.delete.json',
    '/product.variant.price.delete.json',
    'DELETE',
  ] as const
}

export function getDeleteProductVariantPriceDeleteJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.variant.price.delete.json']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['product.variant.price.delete.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProductVariantPriceDeleteJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['product.variant.price.delete.json']['$delete']>,
    ) {
      return parseResponse(client['product.variant.price.delete.json'].$delete(args, options))
    },
  })
}

export function createDeleteProductVariantPriceDeleteJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.variant.price.delete.json']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.variant.price.delete.json']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProductVariantPriceDeleteJsonMutationOptions<
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

export function getPutProductVariantPriceUpdateJsonMutationKey() {
  return ['product.variant.price.update.json', '/product.variant.price.update.json', 'PUT'] as const
}

export function getPutProductVariantPriceUpdateJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.variant.price.update.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['product.variant.price.update.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProductVariantPriceUpdateJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['product.variant.price.update.json']['$put']>,
    ) {
      return parseResponse(client['product.variant.price.update.json'].$put(args, options))
    },
  })
}

export function createPutProductVariantPriceUpdateJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.variant.price.update.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.variant.price.update.json']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutProductVariantPriceUpdateJsonMutationOptions<
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

export function getPutProductVariantUpdateJsonMutationKey() {
  return ['product.variant.update.json', '/product.variant.update.json', 'PUT'] as const
}

export function getPutProductVariantUpdateJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.variant.update.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['product.variant.update.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProductVariantUpdateJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['product.variant.update.json']['$put']>,
    ) {
      return parseResponse(client['product.variant.update.json'].$put(args, options))
    },
  })
}

export function createPutProductVariantUpdateJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.variant.update.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.variant.update.json']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutProductVariantUpdateJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSubscriberListJsonQueryKey(
  args: InferRequestType<(typeof client)['subscriber.list.json']['$get']>,
) {
  return ['subscriber.list.json', '/subscriber.list.json', args] as const
}

export function getSubscriberListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['subscriber.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['subscriber.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['subscriber.list.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriberListJsonQueryKey>
  >({
    queryKey: getSubscriberListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['subscriber.list.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubscriberListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['subscriber.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['subscriber.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['subscriber.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSubscriberListJsonQueryKey>
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
    return { ...getSubscriberListJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTaxClassInfoJsonQueryKey(
  args: InferRequestType<(typeof client)['tax.class.info.json']['$get']>,
) {
  return ['tax.class.info.json', '/tax.class.info.json', args] as const
}

export function getTaxClassInfoJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['tax.class.info.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['tax.class.info.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['tax.class.info.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaxClassInfoJsonQueryKey>
  >({
    queryKey: getTaxClassInfoJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['tax.class.info.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTaxClassInfoJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['tax.class.info.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['tax.class.info.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['tax.class.info.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTaxClassInfoJsonQueryKey>
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
    return { ...getTaxClassInfoJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getWebhookCountJsonQueryKey(
  args: InferRequestType<(typeof client)['webhook.count.json']['$get']>,
) {
  return ['webhook.count.json', '/webhook.count.json', args] as const
}

export function getWebhookCountJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.count.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['webhook.count.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.count.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhookCountJsonQueryKey>
  >({
    queryKey: getWebhookCountJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['webhook.count.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWebhookCountJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.count.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['webhook.count.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['webhook.count.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWebhookCountJsonQueryKey>
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
    return { ...getWebhookCountJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostWebhookCreateJsonMutationKey() {
  return ['webhook.create.json', '/webhook.create.json', 'POST'] as const
}

export function getPostWebhookCreateJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.create.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['webhook.create.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhookCreateJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['webhook.create.json']['$post']>) {
      return parseResponse(client['webhook.create.json'].$post(args, options))
    },
  })
}

export function createPostWebhookCreateJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['webhook.create.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['webhook.create.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWebhookCreateJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteWebhookDeleteJsonMutationKey() {
  return ['webhook.delete.json', '/webhook.delete.json', 'DELETE'] as const
}

export function getDeleteWebhookDeleteJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.delete.json']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['webhook.delete.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhookDeleteJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['webhook.delete.json']['$delete']>) {
      return parseResponse(client['webhook.delete.json'].$delete(args, options))
    },
  })
}

export function createDeleteWebhookDeleteJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['webhook.delete.json']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['webhook.delete.json']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWebhookDeleteJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWebhookEventsJsonQueryKey() {
  return ['webhook.events.json', '/webhook.events.json'] as const
}

export function getWebhookEventsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.events.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.events.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhookEventsJsonQueryKey>
  >({
    queryKey: getWebhookEventsJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['webhook.events.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWebhookEventsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.events.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['webhook.events.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWebhookEventsJsonQueryKey>
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
    return { ...getWebhookEventsJsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getWebhookListJsonQueryKey(
  args: InferRequestType<(typeof client)['webhook.list.json']['$get']>,
) {
  return ['webhook.list.json', '/webhook.list.json', args] as const
}

export function getWebhookListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['webhook.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.list.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhookListJsonQueryKey>
  >({
    queryKey: getWebhookListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['webhook.list.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWebhookListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['webhook.list.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['webhook.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWebhookListJsonQueryKey>
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
    return { ...getWebhookListJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutWebhookUpdateJsonMutationKey() {
  return ['webhook.update.json', '/webhook.update.json', 'PUT'] as const
}

export function getPutWebhookUpdateJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.update.json']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['webhook.update.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebhookUpdateJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['webhook.update.json']['$put']>) {
      return parseResponse(client['webhook.update.json'].$put(args, options))
    },
  })
}

export function createPutWebhookUpdateJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['webhook.update.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['webhook.update.json']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWebhookUpdateJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
