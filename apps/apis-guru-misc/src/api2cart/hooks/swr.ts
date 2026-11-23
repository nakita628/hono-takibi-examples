import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostAccountCartAddJsonKey() {
  return ['account.cart.add.json', '/account.cart.add.json', 'POST'] as const
}

export function usePostAccountCartAddJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['account.cart.add.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['account.cart.add.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountCartAddJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['account.cart.add.json']['$post']> },
      ) => parseResponse(client['account.cart.add.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountCartListJsonKey(
  args: InferRequestType<(typeof client)['account.cart.list.json']['$get']>,
) {
  return ['account.cart.list.json', '/account.cart.list.json', args] as const
}

export function useGetAccountCartListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['account.cart.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['account.cart.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountCartListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['account.cart.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['account.cart.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountCartListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['account.cart.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['account.cart.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountCartListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['account.cart.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['account.cart.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountConfigUpdateJsonKey() {
  return ['account.config.update.json', '/account.config.update.json', 'PUT'] as const
}

export function usePutAccountConfigUpdateJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['account.config.update.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['account.config.update.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountConfigUpdateJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['account.config.update.json']['$put']> },
      ) => parseResponse(client['account.config.update.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountFailedWebhooksJsonKey(
  args: InferRequestType<(typeof client)['account.failed_webhooks.json']['$get']>,
) {
  return ['account.failed_webhooks.json', '/account.failed_webhooks.json', args] as const
}

export function useGetAccountFailedWebhooksJson<TError = unknown>(
  args: InferRequestType<(typeof client)['account.failed_webhooks.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['account.failed_webhooks.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountFailedWebhooksJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['account.failed_webhooks.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['account.failed_webhooks.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountFailedWebhooksJson<TError = unknown>(
  args: InferRequestType<(typeof client)['account.failed_webhooks.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['account.failed_webhooks.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountFailedWebhooksJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['account.failed_webhooks.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['account.failed_webhooks.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountSupportedPlatformsJsonKey() {
  return ['account.supported_platforms.json', '/account.supported_platforms.json'] as const
}

export function useGetAccountSupportedPlatformsJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['account.supported_platforms.json']['$get']>>
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
        ? getGetAccountSupportedPlatformsJsonKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['account.supported_platforms.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['account.supported_platforms.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountSupportedPlatformsJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['account.supported_platforms.json']['$get']>>
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
        ? getGetAccountSupportedPlatformsJsonKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['account.supported_platforms.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['account.supported_platforms.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAttributeAddJsonKey() {
  return ['attribute.add.json', '/attribute.add.json', 'POST'] as const
}

export function usePostAttributeAddJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.add.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['attribute.add.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAttributeAddJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['attribute.add.json']['$post']> },
      ) => parseResponse(client['attribute.add.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAttributeAssignGroupJsonKey() {
  return ['attribute.assign.group.json', '/attribute.assign.group.json', 'POST'] as const
}

export function usePostAttributeAssignGroupJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['attribute.assign.group.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['attribute.assign.group.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAttributeAssignGroupJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['attribute.assign.group.json']['$post']> },
      ) => parseResponse(client['attribute.assign.group.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAttributeAssignSetJsonKey() {
  return ['attribute.assign.set.json', '/attribute.assign.set.json', 'POST'] as const
}

export function usePostAttributeAssignSetJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['attribute.assign.set.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['attribute.assign.set.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAttributeAssignSetJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['attribute.assign.set.json']['$post']> },
      ) => parseResponse(client['attribute.assign.set.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAttributeAttributesetListJsonKey(
  args: InferRequestType<(typeof client)['attribute.attributeset.list.json']['$get']>,
) {
  return ['attribute.attributeset.list.json', '/attribute.attributeset.list.json', args] as const
}

export function useGetAttributeAttributesetListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['attribute.attributeset.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['attribute.attributeset.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAttributeAttributesetListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['attribute.attributeset.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['attribute.attributeset.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAttributeAttributesetListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['attribute.attributeset.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['attribute.attributeset.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAttributeAttributesetListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['attribute.attributeset.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['attribute.attributeset.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAttributeCountJsonKey(
  args: InferRequestType<(typeof client)['attribute.count.json']['$get']>,
) {
  return ['attribute.count.json', '/attribute.count.json', args] as const
}

export function useGetAttributeCountJson<TError = unknown>(
  args: InferRequestType<(typeof client)['attribute.count.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.count.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAttributeCountJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.count.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['attribute.count.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAttributeCountJson<TError = unknown>(
  args: InferRequestType<(typeof client)['attribute.count.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.count.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAttributeCountJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.count.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['attribute.count.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAttributeDeleteJsonKey() {
  return ['attribute.delete.json', '/attribute.delete.json', 'DELETE'] as const
}

export function useDeleteAttributeDeleteJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['attribute.delete.json']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['attribute.delete.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAttributeDeleteJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['attribute.delete.json']['$delete']> },
      ) => parseResponse(client['attribute.delete.json'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAttributeGroupListJsonKey(
  args: InferRequestType<(typeof client)['attribute.group.list.json']['$get']>,
) {
  return ['attribute.group.list.json', '/attribute.group.list.json', args] as const
}

export function useGetAttributeGroupListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['attribute.group.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['attribute.group.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAttributeGroupListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['attribute.group.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['attribute.group.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAttributeGroupListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['attribute.group.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['attribute.group.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAttributeGroupListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['attribute.group.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['attribute.group.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAttributeInfoJsonKey(
  args: InferRequestType<(typeof client)['attribute.info.json']['$get']>,
) {
  return ['attribute.info.json', '/attribute.info.json', args] as const
}

export function useGetAttributeInfoJson<TError = unknown>(
  args: InferRequestType<(typeof client)['attribute.info.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.info.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAttributeInfoJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.info.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['attribute.info.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAttributeInfoJson<TError = unknown>(
  args: InferRequestType<(typeof client)['attribute.info.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.info.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAttributeInfoJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.info.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['attribute.info.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAttributeListJsonKey(
  args: InferRequestType<(typeof client)['attribute.list.json']['$get']>,
) {
  return ['attribute.list.json', '/attribute.list.json', args] as const
}

export function useGetAttributeListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['attribute.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.list.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAttributeListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.list.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['attribute.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAttributeListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['attribute.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.list.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAttributeListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.list.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['attribute.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAttributeTypeListJsonKey() {
  return ['attribute.type.list.json', '/attribute.type.list.json'] as const
}

export function useGetAttributeTypeListJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['attribute.type.list.json']['$get']>>
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
        ? getGetAttributeTypeListJsonKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['attribute.type.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['attribute.type.list.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAttributeTypeListJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['attribute.type.list.json']['$get']>>
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
        ? getGetAttributeTypeListJsonKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['attribute.type.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['attribute.type.list.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAttributeUnassignGroupJsonKey() {
  return ['attribute.unassign.group.json', '/attribute.unassign.group.json', 'POST'] as const
}

export function usePostAttributeUnassignGroupJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['attribute.unassign.group.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['attribute.unassign.group.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAttributeUnassignGroupJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['attribute.unassign.group.json']['$post']> },
      ) => parseResponse(client['attribute.unassign.group.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAttributeUnassignSetJsonKey() {
  return ['attribute.unassign.set.json', '/attribute.unassign.set.json', 'POST'] as const
}

export function usePostAttributeUnassignSetJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['attribute.unassign.set.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['attribute.unassign.set.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAttributeUnassignSetJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['attribute.unassign.set.json']['$post']> },
      ) => parseResponse(client['attribute.unassign.set.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAttributeUpdateJsonKey() {
  return ['attribute.update.json', '/attribute.update.json', 'POST'] as const
}

export function usePostAttributeUpdateJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.update.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['attribute.update.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAttributeUpdateJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['attribute.update.json']['$post']> },
      ) => parseResponse(client['attribute.update.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBasketInfoJsonKey(
  args: InferRequestType<(typeof client)['basket.info.json']['$get']>,
) {
  return ['basket.info.json', '/basket.info.json', args] as const
}

export function useGetBasketInfoJson<TError = unknown>(
  args: InferRequestType<(typeof client)['basket.info.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['basket.info.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBasketInfoJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['basket.info.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['basket.info.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBasketInfoJson<TError = unknown>(
  args: InferRequestType<(typeof client)['basket.info.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['basket.info.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBasketInfoJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['basket.info.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['basket.info.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBasketItemAddJsonKey() {
  return ['basket.item.add.json', '/basket.item.add.json', 'POST'] as const
}

export function usePostBasketItemAddJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['basket.item.add.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['basket.item.add.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBasketItemAddJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['basket.item.add.json']['$post']> },
      ) => parseResponse(client['basket.item.add.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBasketLiveShippingServiceCreateJsonKey() {
  return [
    'basket.live_shipping_service.create.json',
    '/basket.live_shipping_service.create.json',
    'POST',
  ] as const
}

export function usePostBasketLiveShippingServiceCreateJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['basket.live_shipping_service.create.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['basket.live_shipping_service.create.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBasketLiveShippingServiceCreateJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['basket.live_shipping_service.create.json']['$post']
          >
        },
      ) =>
        parseResponse(client['basket.live_shipping_service.create.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBasketLiveShippingServiceDeleteJsonKey() {
  return [
    'basket.live_shipping_service.delete.json',
    '/basket.live_shipping_service.delete.json',
    'DELETE',
  ] as const
}

export function useDeleteBasketLiveShippingServiceDeleteJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['basket.live_shipping_service.delete.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBasketLiveShippingServiceDeleteJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['basket.live_shipping_service.delete.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['basket.live_shipping_service.delete.json'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBasketLiveShippingServiceListJsonKey(
  args: InferRequestType<(typeof client)['basket.live_shipping_service.list.json']['$get']>,
) {
  return [
    'basket.live_shipping_service.list.json',
    '/basket.live_shipping_service.list.json',
    args,
  ] as const
}

export function useGetBasketLiveShippingServiceListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['basket.live_shipping_service.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['basket.live_shipping_service.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBasketLiveShippingServiceListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['basket.live_shipping_service.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['basket.live_shipping_service.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBasketLiveShippingServiceListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['basket.live_shipping_service.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['basket.live_shipping_service.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBasketLiveShippingServiceListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['basket.live_shipping_service.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['basket.live_shipping_service.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBridgeDeleteJsonKey() {
  return ['bridge.delete.json', '/bridge.delete.json', 'POST'] as const
}

export function usePostBridgeDeleteJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['bridge.delete.json']['$post']>>>
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
  const swrKey = customKey ?? getPostBridgeDeleteJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['bridge.delete.json'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBridgeDownloadFileKey(
  args: InferRequestType<(typeof client)['bridge.download.file']['$get']>,
) {
  return ['bridge.download.file', '/bridge.download.file', args] as const
}

export function useGetBridgeDownloadFile<TError = unknown>(
  args: InferRequestType<(typeof client)['bridge.download.file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['bridge.download.file']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBridgeDownloadFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['bridge.download.file']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['bridge.download.file'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBridgeDownloadFile<TError = unknown>(
  args: InferRequestType<(typeof client)['bridge.download.file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['bridge.download.file']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBridgeDownloadFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['bridge.download.file']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['bridge.download.file'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBridgeUpdateJsonKey() {
  return ['bridge.update.json', '/bridge.update.json', 'POST'] as const
}

export function usePostBridgeUpdateJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['bridge.update.json']['$post']>>>
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
  const swrKey = customKey ?? getPostBridgeUpdateJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['bridge.update.json'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCartBridgeJsonKey() {
  return ['cart.bridge.json', '/cart.bridge.json'] as const
}

export function useGetCartBridgeJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.bridge.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCartBridgeJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.bridge.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cart.bridge.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCartBridgeJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.bridge.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCartBridgeJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.bridge.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cart.bridge.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCartCatalogPriceRulesCountJsonKey() {
  return ['cart.catalog_price_rules.count.json', '/cart.catalog_price_rules.count.json'] as const
}

export function useGetCartCatalogPriceRulesCountJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['cart.catalog_price_rules.count.json']['$get']>>
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
        ? getGetCartCatalogPriceRulesCountJsonKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.catalog_price_rules.count.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['cart.catalog_price_rules.count.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCartCatalogPriceRulesCountJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['cart.catalog_price_rules.count.json']['$get']>>
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
        ? getGetCartCatalogPriceRulesCountJsonKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.catalog_price_rules.count.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['cart.catalog_price_rules.count.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCartCatalogPriceRulesListJsonKey(
  args: InferRequestType<(typeof client)['cart.catalog_price_rules.list.json']['$get']>,
) {
  return [
    'cart.catalog_price_rules.list.json',
    '/cart.catalog_price_rules.list.json',
    args,
  ] as const
}

export function useGetCartCatalogPriceRulesListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['cart.catalog_price_rules.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.catalog_price_rules.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCartCatalogPriceRulesListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.catalog_price_rules.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['cart.catalog_price_rules.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCartCatalogPriceRulesListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['cart.catalog_price_rules.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.catalog_price_rules.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCartCatalogPriceRulesListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.catalog_price_rules.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['cart.catalog_price_rules.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCartClearCacheJsonKey() {
  return ['cart.clear_cache.json', '/cart.clear_cache.json', 'POST'] as const
}

export function usePostCartClearCacheJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.clear_cache.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['cart.clear_cache.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCartClearCacheJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['cart.clear_cache.json']['$post']> },
      ) => parseResponse(client['cart.clear_cache.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCartConfigJsonKey(
  args: InferRequestType<(typeof client)['cart.config.json']['$get']>,
) {
  return ['cart.config.json', '/cart.config.json', args] as const
}

export function useGetCartConfigJson<TError = unknown>(
  args: InferRequestType<(typeof client)['cart.config.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.config.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCartConfigJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.config.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cart.config.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCartConfigJson<TError = unknown>(
  args: InferRequestType<(typeof client)['cart.config.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.config.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCartConfigJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.config.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cart.config.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCartConfigUpdateJsonKey() {
  return ['cart.config.update.json', '/cart.config.update.json', 'PUT'] as const
}

export function usePutCartConfigUpdateJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['cart.config.update.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['cart.config.update.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCartConfigUpdateJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['cart.config.update.json']['$put']> },
      ) => parseResponse(client['cart.config.update.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCartCouponAddJsonKey() {
  return ['cart.coupon.add.json', '/cart.coupon.add.json', 'POST'] as const
}

export function usePostCartCouponAddJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.coupon.add.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['cart.coupon.add.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCartCouponAddJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['cart.coupon.add.json']['$post']> },
      ) => parseResponse(client['cart.coupon.add.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCartCouponConditionAddJsonKey() {
  return ['cart.coupon.condition.add.json', '/cart.coupon.condition.add.json', 'POST'] as const
}

export function usePostCartCouponConditionAddJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['cart.coupon.condition.add.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['cart.coupon.condition.add.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCartCouponConditionAddJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['cart.coupon.condition.add.json']['$post']> },
      ) => parseResponse(client['cart.coupon.condition.add.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCartCouponCountJsonKey(
  args: InferRequestType<(typeof client)['cart.coupon.count.json']['$get']>,
) {
  return ['cart.coupon.count.json', '/cart.coupon.count.json', args] as const
}

export function useGetCartCouponCountJson<TError = unknown>(
  args: InferRequestType<(typeof client)['cart.coupon.count.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.coupon.count.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCartCouponCountJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.coupon.count.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cart.coupon.count.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCartCouponCountJson<TError = unknown>(
  args: InferRequestType<(typeof client)['cart.coupon.count.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.coupon.count.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCartCouponCountJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.coupon.count.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cart.coupon.count.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCartCouponDeleteJsonKey() {
  return ['cart.coupon.delete.json', '/cart.coupon.delete.json', 'DELETE'] as const
}

export function useDeleteCartCouponDeleteJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['cart.coupon.delete.json']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['cart.coupon.delete.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCartCouponDeleteJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['cart.coupon.delete.json']['$delete']> },
      ) => parseResponse(client['cart.coupon.delete.json'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCartCouponListJsonKey(
  args: InferRequestType<(typeof client)['cart.coupon.list.json']['$get']>,
) {
  return ['cart.coupon.list.json', '/cart.coupon.list.json', args] as const
}

export function useGetCartCouponListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['cart.coupon.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.coupon.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCartCouponListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.coupon.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cart.coupon.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCartCouponListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['cart.coupon.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.coupon.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCartCouponListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.coupon.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cart.coupon.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCartCreateJsonKey() {
  return ['cart.create.json', '/cart.create.json', 'POST'] as const
}

export function usePostCartCreateJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.create.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['cart.create.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCartCreateJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['cart.create.json']['$post']> },
      ) => parseResponse(client['cart.create.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCartDeleteJsonKey() {
  return ['cart.delete.json', '/cart.delete.json', 'DELETE'] as const
}

export function useDeleteCartDeleteJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.delete.json']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['cart.delete.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCartDeleteJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['cart.delete.json']['$delete']> },
      ) => parseResponse(client['cart.delete.json'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCartDisconnectJsonKey(
  args: InferRequestType<(typeof client)['cart.disconnect.json']['$get']>,
) {
  return ['cart.disconnect.json', '/cart.disconnect.json', args] as const
}

export function useGetCartDisconnectJson<TError = unknown>(
  args: InferRequestType<(typeof client)['cart.disconnect.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.disconnect.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCartDisconnectJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.disconnect.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cart.disconnect.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCartDisconnectJson<TError = unknown>(
  args: InferRequestType<(typeof client)['cart.disconnect.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.disconnect.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCartDisconnectJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.disconnect.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cart.disconnect.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCartGiftcardAddJsonKey() {
  return ['cart.giftcard.add.json', '/cart.giftcard.add.json', 'POST'] as const
}

export function usePostCartGiftcardAddJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['cart.giftcard.add.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['cart.giftcard.add.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCartGiftcardAddJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['cart.giftcard.add.json']['$post']> },
      ) => parseResponse(client['cart.giftcard.add.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCartGiftcardCountJsonKey(
  args: InferRequestType<(typeof client)['cart.giftcard.count.json']['$get']>,
) {
  return ['cart.giftcard.count.json', '/cart.giftcard.count.json', args] as const
}

export function useGetCartGiftcardCountJson<TError = unknown>(
  args: InferRequestType<(typeof client)['cart.giftcard.count.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.giftcard.count.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCartGiftcardCountJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.giftcard.count.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cart.giftcard.count.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCartGiftcardCountJson<TError = unknown>(
  args: InferRequestType<(typeof client)['cart.giftcard.count.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.giftcard.count.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCartGiftcardCountJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.giftcard.count.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cart.giftcard.count.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCartGiftcardListJsonKey(
  args: InferRequestType<(typeof client)['cart.giftcard.list.json']['$get']>,
) {
  return ['cart.giftcard.list.json', '/cart.giftcard.list.json', args] as const
}

export function useGetCartGiftcardListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['cart.giftcard.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.giftcard.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCartGiftcardListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.giftcard.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cart.giftcard.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCartGiftcardListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['cart.giftcard.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.giftcard.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCartGiftcardListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.giftcard.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cart.giftcard.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCartInfoJsonKey(
  args: InferRequestType<(typeof client)['cart.info.json']['$get']>,
) {
  return ['cart.info.json', '/cart.info.json', args] as const
}

export function useGetCartInfoJson<TError = unknown>(
  args: InferRequestType<(typeof client)['cart.info.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.info.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCartInfoJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.info.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cart.info.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCartInfoJson<TError = unknown>(
  args: InferRequestType<(typeof client)['cart.info.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.info.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCartInfoJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.info.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cart.info.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCartListJsonKey() {
  return ['cart.list.json', '/cart.list.json'] as const
}

export function useGetCartListJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.list.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCartListJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.list.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cart.list.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCartListJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.list.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCartListJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.list.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cart.list.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCartMetaDataListJsonKey(
  args: InferRequestType<(typeof client)['cart.meta_data.list.json']['$get']>,
) {
  return ['cart.meta_data.list.json', '/cart.meta_data.list.json', args] as const
}

export function useGetCartMetaDataListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['cart.meta_data.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.meta_data.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCartMetaDataListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.meta_data.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cart.meta_data.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCartMetaDataListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['cart.meta_data.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.meta_data.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCartMetaDataListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.meta_data.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cart.meta_data.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCartMetaDataSetJsonKey() {
  return ['cart.meta_data.set.json', '/cart.meta_data.set.json', 'POST'] as const
}

export function usePostCartMetaDataSetJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['cart.meta_data.set.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['cart.meta_data.set.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCartMetaDataSetJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['cart.meta_data.set.json']['$post']> },
      ) => parseResponse(client['cart.meta_data.set.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCartMetaDataUnsetJsonKey() {
  return ['cart.meta_data.unset.json', '/cart.meta_data.unset.json', 'DELETE'] as const
}

export function useDeleteCartMetaDataUnsetJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['cart.meta_data.unset.json']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['cart.meta_data.unset.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCartMetaDataUnsetJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['cart.meta_data.unset.json']['$delete']> },
      ) => parseResponse(client['cart.meta_data.unset.json'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCartMethodsJsonKey() {
  return ['cart.methods.json', '/cart.methods.json'] as const
}

export function useGetCartMethodsJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.methods.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCartMethodsJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.methods.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cart.methods.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCartMethodsJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.methods.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCartMethodsJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.methods.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cart.methods.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCartPluginListJsonKey(
  args: InferRequestType<(typeof client)['cart.plugin.list.json']['$get']>,
) {
  return ['cart.plugin.list.json', '/cart.plugin.list.json', args] as const
}

export function useGetCartPluginListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['cart.plugin.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.plugin.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCartPluginListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.plugin.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cart.plugin.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCartPluginListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['cart.plugin.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.plugin.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCartPluginListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.plugin.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cart.plugin.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCartScriptAddJsonKey() {
  return ['cart.script.add.json', '/cart.script.add.json', 'POST'] as const
}

export function usePostCartScriptAddJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.script.add.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['cart.script.add.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCartScriptAddJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['cart.script.add.json']['$post']> },
      ) => parseResponse(client['cart.script.add.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCartScriptDeleteJsonKey() {
  return ['cart.script.delete.json', '/cart.script.delete.json', 'DELETE'] as const
}

export function useDeleteCartScriptDeleteJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['cart.script.delete.json']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['cart.script.delete.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCartScriptDeleteJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['cart.script.delete.json']['$delete']> },
      ) => parseResponse(client['cart.script.delete.json'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCartScriptListJsonKey(
  args: InferRequestType<(typeof client)['cart.script.list.json']['$get']>,
) {
  return ['cart.script.list.json', '/cart.script.list.json', args] as const
}

export function useGetCartScriptListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['cart.script.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.script.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCartScriptListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.script.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cart.script.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCartScriptListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['cart.script.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.script.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCartScriptListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.script.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cart.script.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCartShippingZonesListJsonKey(
  args: InferRequestType<(typeof client)['cart.shipping_zones.list.json']['$get']>,
) {
  return ['cart.shipping_zones.list.json', '/cart.shipping_zones.list.json', args] as const
}

export function useGetCartShippingZonesListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['cart.shipping_zones.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.shipping_zones.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCartShippingZonesListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.shipping_zones.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cart.shipping_zones.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCartShippingZonesListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['cart.shipping_zones.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.shipping_zones.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCartShippingZonesListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cart.shipping_zones.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cart.shipping_zones.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCartValidateJsonKey(
  args: InferRequestType<(typeof client)['cart.validate.json']['$get']>,
) {
  return ['cart.validate.json', '/cart.validate.json', args] as const
}

export function useGetCartValidateJson<TError = unknown>(
  args: InferRequestType<(typeof client)['cart.validate.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.validate.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCartValidateJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.validate.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cart.validate.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCartValidateJson<TError = unknown>(
  args: InferRequestType<(typeof client)['cart.validate.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.validate.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCartValidateJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.validate.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cart.validate.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCategoryAddJsonKey() {
  return ['category.add.json', '/category.add.json', 'POST'] as const
}

export function usePostCategoryAddJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['category.add.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['category.add.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCategoryAddJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['category.add.json']['$post']> },
      ) => parseResponse(client['category.add.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCategoryAssignJsonKey() {
  return ['category.assign.json', '/category.assign.json', 'POST'] as const
}

export function usePostCategoryAssignJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['category.assign.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['category.assign.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCategoryAssignJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['category.assign.json']['$post']> },
      ) => parseResponse(client['category.assign.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCategoryCountJsonKey(
  args: InferRequestType<(typeof client)['category.count.json']['$get']>,
) {
  return ['category.count.json', '/category.count.json', args] as const
}

export function useGetCategoryCountJson<TError = unknown>(
  args: InferRequestType<(typeof client)['category.count.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['category.count.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCategoryCountJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['category.count.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['category.count.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategoryCountJson<TError = unknown>(
  args: InferRequestType<(typeof client)['category.count.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['category.count.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCategoryCountJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['category.count.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['category.count.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCategoryDeleteJsonKey() {
  return ['category.delete.json', '/category.delete.json', 'DELETE'] as const
}

export function useDeleteCategoryDeleteJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['category.delete.json']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['category.delete.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCategoryDeleteJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['category.delete.json']['$delete']> },
      ) => parseResponse(client['category.delete.json'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCategoryFindJsonKey(
  args: InferRequestType<(typeof client)['category.find.json']['$get']>,
) {
  return ['category.find.json', '/category.find.json', args] as const
}

export function useGetCategoryFindJson<TError = unknown>(
  args: InferRequestType<(typeof client)['category.find.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['category.find.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCategoryFindJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['category.find.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['category.find.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategoryFindJson<TError = unknown>(
  args: InferRequestType<(typeof client)['category.find.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['category.find.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCategoryFindJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['category.find.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['category.find.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCategoryImageAddJsonKey() {
  return ['category.image.add.json', '/category.image.add.json', 'POST'] as const
}

export function usePostCategoryImageAddJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['category.image.add.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['category.image.add.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCategoryImageAddJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['category.image.add.json']['$post']> },
      ) => parseResponse(client['category.image.add.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCategoryImageDeleteJsonKey() {
  return ['category.image.delete.json', '/category.image.delete.json', 'DELETE'] as const
}

export function useDeleteCategoryImageDeleteJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['category.image.delete.json']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['category.image.delete.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCategoryImageDeleteJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['category.image.delete.json']['$delete']> },
      ) => parseResponse(client['category.image.delete.json'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCategoryInfoJsonKey(
  args: InferRequestType<(typeof client)['category.info.json']['$get']>,
) {
  return ['category.info.json', '/category.info.json', args] as const
}

export function useGetCategoryInfoJson<TError = unknown>(
  args: InferRequestType<(typeof client)['category.info.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['category.info.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCategoryInfoJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['category.info.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['category.info.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategoryInfoJson<TError = unknown>(
  args: InferRequestType<(typeof client)['category.info.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['category.info.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCategoryInfoJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['category.info.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['category.info.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCategoryListJsonKey(
  args: InferRequestType<(typeof client)['category.list.json']['$get']>,
) {
  return ['category.list.json', '/category.list.json', args] as const
}

export function useGetCategoryListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['category.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['category.list.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCategoryListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['category.list.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['category.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategoryListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['category.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['category.list.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCategoryListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['category.list.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['category.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCategoryUnassignJsonKey() {
  return ['category.unassign.json', '/category.unassign.json', 'POST'] as const
}

export function usePostCategoryUnassignJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['category.unassign.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['category.unassign.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCategoryUnassignJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['category.unassign.json']['$post']> },
      ) => parseResponse(client['category.unassign.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCategoryUpdateJsonKey() {
  return ['category.update.json', '/category.update.json', 'PUT'] as const
}

export function usePutCategoryUpdateJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['category.update.json']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['category.update.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCategoryUpdateJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['category.update.json']['$put']> },
      ) => parseResponse(client['category.update.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCustomerAddJsonKey() {
  return ['customer.add.json', '/customer.add.json', 'POST'] as const
}

export function usePostCustomerAddJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.add.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['customer.add.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomerAddJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['customer.add.json']['$post']> },
      ) => parseResponse(client['customer.add.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomerAttributeListJsonKey(
  args: InferRequestType<(typeof client)['customer.attribute.list.json']['$get']>,
) {
  return ['customer.attribute.list.json', '/customer.attribute.list.json', args] as const
}

export function useGetCustomerAttributeListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['customer.attribute.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['customer.attribute.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomerAttributeListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['customer.attribute.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['customer.attribute.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomerAttributeListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['customer.attribute.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['customer.attribute.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomerAttributeListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['customer.attribute.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['customer.attribute.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCustomerCountJsonKey(
  args: InferRequestType<(typeof client)['customer.count.json']['$get']>,
) {
  return ['customer.count.json', '/customer.count.json', args] as const
}

export function useGetCustomerCountJson<TError = unknown>(
  args: InferRequestType<(typeof client)['customer.count.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.count.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomerCountJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.count.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['customer.count.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomerCountJson<TError = unknown>(
  args: InferRequestType<(typeof client)['customer.count.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.count.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomerCountJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.count.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['customer.count.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCustomerFindJsonKey(
  args: InferRequestType<(typeof client)['customer.find.json']['$get']>,
) {
  return ['customer.find.json', '/customer.find.json', args] as const
}

export function useGetCustomerFindJson<TError = unknown>(
  args: InferRequestType<(typeof client)['customer.find.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.find.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomerFindJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.find.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['customer.find.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomerFindJson<TError = unknown>(
  args: InferRequestType<(typeof client)['customer.find.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.find.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomerFindJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.find.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['customer.find.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCustomerGroupAddJsonKey() {
  return ['customer.group.add.json', '/customer.group.add.json', 'POST'] as const
}

export function usePostCustomerGroupAddJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['customer.group.add.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['customer.group.add.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomerGroupAddJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['customer.group.add.json']['$post']> },
      ) => parseResponse(client['customer.group.add.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomerGroupListJsonKey(
  args: InferRequestType<(typeof client)['customer.group.list.json']['$get']>,
) {
  return ['customer.group.list.json', '/customer.group.list.json', args] as const
}

export function useGetCustomerGroupListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['customer.group.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['customer.group.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomerGroupListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['customer.group.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['customer.group.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomerGroupListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['customer.group.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['customer.group.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomerGroupListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['customer.group.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['customer.group.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCustomerInfoJsonKey(
  args: InferRequestType<(typeof client)['customer.info.json']['$get']>,
) {
  return ['customer.info.json', '/customer.info.json', args] as const
}

export function useGetCustomerInfoJson<TError = unknown>(
  args: InferRequestType<(typeof client)['customer.info.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.info.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomerInfoJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.info.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['customer.info.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomerInfoJson<TError = unknown>(
  args: InferRequestType<(typeof client)['customer.info.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.info.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomerInfoJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.info.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['customer.info.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCustomerListJsonKey(
  args: InferRequestType<(typeof client)['customer.list.json']['$get']>,
) {
  return ['customer.list.json', '/customer.list.json', args] as const
}

export function useGetCustomerListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['customer.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.list.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomerListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.list.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['customer.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomerListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['customer.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.list.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomerListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.list.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['customer.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCustomerUpdateJsonKey() {
  return ['customer.update.json', '/customer.update.json', 'PUT'] as const
}

export function usePutCustomerUpdateJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.update.json']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['customer.update.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCustomerUpdateJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['customer.update.json']['$put']> },
      ) => parseResponse(client['customer.update.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrderAbandonedListJsonKey(
  args: InferRequestType<(typeof client)['order.abandoned.list.json']['$get']>,
) {
  return ['order.abandoned.list.json', '/order.abandoned.list.json', args] as const
}

export function useGetOrderAbandonedListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['order.abandoned.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['order.abandoned.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrderAbandonedListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['order.abandoned.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['order.abandoned.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrderAbandonedListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['order.abandoned.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['order.abandoned.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrderAbandonedListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['order.abandoned.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['order.abandoned.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrderAddJsonKey() {
  return ['order.add.json', '/order.add.json', 'POST'] as const
}

export function usePostOrderAddJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['order.add.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['order.add.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrderAddJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['order.add.json']['$post']> },
      ) => parseResponse(client['order.add.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrderCountJsonKey(
  args: InferRequestType<(typeof client)['order.count.json']['$get']>,
) {
  return ['order.count.json', '/order.count.json', args] as const
}

export function useGetOrderCountJson<TError = unknown>(
  args: InferRequestType<(typeof client)['order.count.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['order.count.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrderCountJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['order.count.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['order.count.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrderCountJson<TError = unknown>(
  args: InferRequestType<(typeof client)['order.count.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['order.count.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrderCountJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['order.count.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['order.count.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrderFinancialStatusListJsonKey() {
  return ['order.financial_status.list.json', '/order.financial_status.list.json'] as const
}

export function useGetOrderFinancialStatusListJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['order.financial_status.list.json']['$get']>>
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
        ? getGetOrderFinancialStatusListJsonKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['order.financial_status.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['order.financial_status.list.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrderFinancialStatusListJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['order.financial_status.list.json']['$get']>>
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
        ? getGetOrderFinancialStatusListJsonKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['order.financial_status.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['order.financial_status.list.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrderFindJsonKey(
  args: InferRequestType<(typeof client)['order.find.json']['$get']>,
) {
  return ['order.find.json', '/order.find.json', args] as const
}

export function useGetOrderFindJson<TError = unknown>(
  args: InferRequestType<(typeof client)['order.find.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['order.find.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrderFindJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['order.find.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['order.find.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrderFindJson<TError = unknown>(
  args: InferRequestType<(typeof client)['order.find.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['order.find.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrderFindJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['order.find.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['order.find.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrderFulfillmentStatusListJsonKey() {
  return ['order.fulfillment_status.list.json', '/order.fulfillment_status.list.json'] as const
}

export function useGetOrderFulfillmentStatusListJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['order.fulfillment_status.list.json']['$get']>>
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
        ? getGetOrderFulfillmentStatusListJsonKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['order.fulfillment_status.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['order.fulfillment_status.list.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrderFulfillmentStatusListJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['order.fulfillment_status.list.json']['$get']>>
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
        ? getGetOrderFulfillmentStatusListJsonKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['order.fulfillment_status.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['order.fulfillment_status.list.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrderInfoJsonKey(
  args: InferRequestType<(typeof client)['order.info.json']['$get']>,
) {
  return ['order.info.json', '/order.info.json', args] as const
}

export function useGetOrderInfoJson<TError = unknown>(
  args: InferRequestType<(typeof client)['order.info.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['order.info.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrderInfoJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['order.info.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['order.info.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrderInfoJson<TError = unknown>(
  args: InferRequestType<(typeof client)['order.info.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['order.info.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrderInfoJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['order.info.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['order.info.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrderListJsonKey(
  args: InferRequestType<(typeof client)['order.list.json']['$get']>,
) {
  return ['order.list.json', '/order.list.json', args] as const
}

export function useGetOrderListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['order.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['order.list.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrderListJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['order.list.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['order.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrderListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['order.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['order.list.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrderListJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['order.list.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['order.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrderPreestimateShippingListJsonKey() {
  return [
    'order.preestimate_shipping.list.json',
    '/order.preestimate_shipping.list.json',
    'POST',
  ] as const
}

export function usePostOrderPreestimateShippingListJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['order.preestimate_shipping.list.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['order.preestimate_shipping.list.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrderPreestimateShippingListJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['order.preestimate_shipping.list.json']['$post']>
        },
      ) => parseResponse(client['order.preestimate_shipping.list.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrderRefundAddJsonKey() {
  return ['order.refund.add.json', '/order.refund.add.json', 'POST'] as const
}

export function usePostOrderRefundAddJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['order.refund.add.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['order.refund.add.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrderRefundAddJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['order.refund.add.json']['$post']> },
      ) => parseResponse(client['order.refund.add.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrderShipmentAddJsonKey() {
  return ['order.shipment.add.json', '/order.shipment.add.json', 'POST'] as const
}

export function usePostOrderShipmentAddJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['order.shipment.add.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['order.shipment.add.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrderShipmentAddJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['order.shipment.add.json']['$post']> },
      ) => parseResponse(client['order.shipment.add.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrderShipmentDeleteJsonKey() {
  return ['order.shipment.delete.json', '/order.shipment.delete.json', 'DELETE'] as const
}

export function useDeleteOrderShipmentDeleteJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['order.shipment.delete.json']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['order.shipment.delete.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrderShipmentDeleteJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['order.shipment.delete.json']['$delete']> },
      ) => parseResponse(client['order.shipment.delete.json'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrderShipmentInfoJsonKey(
  args: InferRequestType<(typeof client)['order.shipment.info.json']['$get']>,
) {
  return ['order.shipment.info.json', '/order.shipment.info.json', args] as const
}

export function useGetOrderShipmentInfoJson<TError = unknown>(
  args: InferRequestType<(typeof client)['order.shipment.info.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['order.shipment.info.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrderShipmentInfoJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['order.shipment.info.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['order.shipment.info.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrderShipmentInfoJson<TError = unknown>(
  args: InferRequestType<(typeof client)['order.shipment.info.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['order.shipment.info.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrderShipmentInfoJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['order.shipment.info.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['order.shipment.info.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrderShipmentListJsonKey(
  args: InferRequestType<(typeof client)['order.shipment.list.json']['$get']>,
) {
  return ['order.shipment.list.json', '/order.shipment.list.json', args] as const
}

export function useGetOrderShipmentListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['order.shipment.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['order.shipment.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrderShipmentListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['order.shipment.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['order.shipment.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrderShipmentListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['order.shipment.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['order.shipment.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrderShipmentListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['order.shipment.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['order.shipment.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrderShipmentTrackingAddJsonKey() {
  return ['order.shipment.tracking.add.json', '/order.shipment.tracking.add.json', 'POST'] as const
}

export function usePostOrderShipmentTrackingAddJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['order.shipment.tracking.add.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['order.shipment.tracking.add.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrderShipmentTrackingAddJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['order.shipment.tracking.add.json']['$post']> },
      ) => parseResponse(client['order.shipment.tracking.add.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOrderShipmentUpdateJsonKey() {
  return ['order.shipment.update.json', '/order.shipment.update.json', 'PUT'] as const
}

export function usePutOrderShipmentUpdateJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['order.shipment.update.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['order.shipment.update.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrderShipmentUpdateJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['order.shipment.update.json']['$put']> },
      ) => parseResponse(client['order.shipment.update.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrderStatusListJsonKey(
  args: InferRequestType<(typeof client)['order.status.list.json']['$get']>,
) {
  return ['order.status.list.json', '/order.status.list.json', args] as const
}

export function useGetOrderStatusListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['order.status.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['order.status.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrderStatusListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['order.status.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['order.status.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrderStatusListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['order.status.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['order.status.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrderStatusListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['order.status.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['order.status.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrderTransactionListJsonKey(
  args: InferRequestType<(typeof client)['order.transaction.list.json']['$get']>,
) {
  return ['order.transaction.list.json', '/order.transaction.list.json', args] as const
}

export function useGetOrderTransactionListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['order.transaction.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['order.transaction.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrderTransactionListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['order.transaction.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['order.transaction.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrderTransactionListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['order.transaction.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['order.transaction.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrderTransactionListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['order.transaction.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['order.transaction.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOrderUpdateJsonKey() {
  return ['order.update.json', '/order.update.json', 'PUT'] as const
}

export function usePutOrderUpdateJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['order.update.json']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['order.update.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrderUpdateJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['order.update.json']['$put']> },
      ) => parseResponse(client['order.update.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProductAddJsonKey() {
  return ['product.add.json', '/product.add.json', 'POST'] as const
}

export function usePostProductAddJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['product.add.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['product.add.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductAddJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['product.add.json']['$post']> },
      ) => parseResponse(client['product.add.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProductAttributeListJsonKey(
  args: InferRequestType<(typeof client)['product.attribute.list.json']['$get']>,
) {
  return ['product.attribute.list.json', '/product.attribute.list.json', args] as const
}

export function useGetProductAttributeListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['product.attribute.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.attribute.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductAttributeListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.attribute.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.attribute.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductAttributeListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['product.attribute.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.attribute.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductAttributeListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.attribute.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.attribute.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProductAttributeValueSetJsonKey() {
  return ['product.attribute.value.set.json', '/product.attribute.value.set.json', 'POST'] as const
}

export function usePostProductAttributeValueSetJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.attribute.value.set.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['product.attribute.value.set.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductAttributeValueSetJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['product.attribute.value.set.json']['$post']> },
      ) => parseResponse(client['product.attribute.value.set.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProductAttributeValueUnsetJsonKey() {
  return [
    'product.attribute.value.unset.json',
    '/product.attribute.value.unset.json',
    'POST',
  ] as const
}

export function usePostProductAttributeValueUnsetJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.attribute.value.unset.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['product.attribute.value.unset.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductAttributeValueUnsetJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['product.attribute.value.unset.json']['$post']>
        },
      ) => parseResponse(client['product.attribute.value.unset.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProductBrandListJsonKey(
  args: InferRequestType<(typeof client)['product.brand.list.json']['$get']>,
) {
  return ['product.brand.list.json', '/product.brand.list.json', args] as const
}

export function useGetProductBrandListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['product.brand.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.brand.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductBrandListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.brand.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.brand.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductBrandListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['product.brand.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.brand.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductBrandListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.brand.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.brand.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProductChildItemFindJsonKey(
  args: InferRequestType<(typeof client)['product.child_item.find.json']['$get']>,
) {
  return ['product.child_item.find.json', '/product.child_item.find.json', args] as const
}

export function useGetProductChildItemFindJson<TError = unknown>(
  args: InferRequestType<(typeof client)['product.child_item.find.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.child_item.find.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductChildItemFindJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.child_item.find.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.child_item.find.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductChildItemFindJson<TError = unknown>(
  args: InferRequestType<(typeof client)['product.child_item.find.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.child_item.find.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductChildItemFindJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.child_item.find.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.child_item.find.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProductChildItemInfoJsonKey(
  args: InferRequestType<(typeof client)['product.child_item.info.json']['$get']>,
) {
  return ['product.child_item.info.json', '/product.child_item.info.json', args] as const
}

export function useGetProductChildItemInfoJson<TError = unknown>(
  args: InferRequestType<(typeof client)['product.child_item.info.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.child_item.info.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductChildItemInfoJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.child_item.info.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.child_item.info.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductChildItemInfoJson<TError = unknown>(
  args: InferRequestType<(typeof client)['product.child_item.info.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.child_item.info.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductChildItemInfoJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.child_item.info.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.child_item.info.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProductChildItemListJsonKey(
  args: InferRequestType<(typeof client)['product.child_item.list.json']['$get']>,
) {
  return ['product.child_item.list.json', '/product.child_item.list.json', args] as const
}

export function useGetProductChildItemListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['product.child_item.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.child_item.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductChildItemListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.child_item.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.child_item.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductChildItemListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['product.child_item.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.child_item.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductChildItemListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.child_item.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.child_item.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProductCountJsonKey(
  args: InferRequestType<(typeof client)['product.count.json']['$get']>,
) {
  return ['product.count.json', '/product.count.json', args] as const
}

export function useGetProductCountJson<TError = unknown>(
  args: InferRequestType<(typeof client)['product.count.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['product.count.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductCountJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['product.count.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.count.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductCountJson<TError = unknown>(
  args: InferRequestType<(typeof client)['product.count.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['product.count.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductCountJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['product.count.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.count.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProductCurrencyAddJsonKey() {
  return ['product.currency.add.json', '/product.currency.add.json', 'POST'] as const
}

export function usePostProductCurrencyAddJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.currency.add.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['product.currency.add.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductCurrencyAddJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['product.currency.add.json']['$post']> },
      ) => parseResponse(client['product.currency.add.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProductCurrencyListJsonKey(
  args: InferRequestType<(typeof client)['product.currency.list.json']['$get']>,
) {
  return ['product.currency.list.json', '/product.currency.list.json', args] as const
}

export function useGetProductCurrencyListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['product.currency.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.currency.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductCurrencyListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.currency.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.currency.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductCurrencyListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['product.currency.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.currency.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductCurrencyListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.currency.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.currency.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteProductDeleteJsonKey() {
  return ['product.delete.json', '/product.delete.json', 'DELETE'] as const
}

export function useDeleteProductDeleteJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['product.delete.json']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['product.delete.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProductDeleteJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['product.delete.json']['$delete']> },
      ) => parseResponse(client['product.delete.json'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProductFieldsJsonKey() {
  return ['product.fields.json', '/product.fields.json'] as const
}

export function useGetProductFieldsJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['product.fields.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductFieldsJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['product.fields.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.fields.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductFieldsJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['product.fields.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductFieldsJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['product.fields.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.fields.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProductFindJsonKey(
  args: InferRequestType<(typeof client)['product.find.json']['$get']>,
) {
  return ['product.find.json', '/product.find.json', args] as const
}

export function useGetProductFindJson<TError = unknown>(
  args: InferRequestType<(typeof client)['product.find.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['product.find.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductFindJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['product.find.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.find.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductFindJson<TError = unknown>(
  args: InferRequestType<(typeof client)['product.find.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['product.find.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductFindJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['product.find.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.find.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProductImageAddJsonKey() {
  return ['product.image.add.json', '/product.image.add.json', 'POST'] as const
}

export function usePostProductImageAddJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.image.add.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['product.image.add.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductImageAddJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['product.image.add.json']['$post']> },
      ) => parseResponse(client['product.image.add.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteProductImageDeleteJsonKey() {
  return ['product.image.delete.json', '/product.image.delete.json', 'DELETE'] as const
}

export function useDeleteProductImageDeleteJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.image.delete.json']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['product.image.delete.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProductImageDeleteJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['product.image.delete.json']['$delete']> },
      ) => parseResponse(client['product.image.delete.json'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutProductImageUpdateJsonKey() {
  return ['product.image.update.json', '/product.image.update.json', 'PUT'] as const
}

export function usePutProductImageUpdateJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.image.update.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['product.image.update.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProductImageUpdateJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['product.image.update.json']['$put']> },
      ) => parseResponse(client['product.image.update.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProductInfoJsonKey(
  args: InferRequestType<(typeof client)['product.info.json']['$get']>,
) {
  return ['product.info.json', '/product.info.json', args] as const
}

export function useGetProductInfoJson<TError = unknown>(
  args: InferRequestType<(typeof client)['product.info.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['product.info.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductInfoJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['product.info.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.info.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductInfoJson<TError = unknown>(
  args: InferRequestType<(typeof client)['product.info.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['product.info.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductInfoJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['product.info.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.info.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProductListJsonKey(
  args: InferRequestType<(typeof client)['product.list.json']['$get']>,
) {
  return ['product.list.json', '/product.list.json', args] as const
}

export function useGetProductListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['product.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['product.list.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['product.list.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['product.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['product.list.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['product.list.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProductManufacturerAddJsonKey() {
  return ['product.manufacturer.add.json', '/product.manufacturer.add.json', 'POST'] as const
}

export function usePostProductManufacturerAddJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.manufacturer.add.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['product.manufacturer.add.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductManufacturerAddJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['product.manufacturer.add.json']['$post']> },
      ) => parseResponse(client['product.manufacturer.add.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProductOptionAddJsonKey() {
  return ['product.option.add.json', '/product.option.add.json', 'POST'] as const
}

export function usePostProductOptionAddJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.option.add.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['product.option.add.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductOptionAddJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['product.option.add.json']['$post']> },
      ) => parseResponse(client['product.option.add.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProductOptionAssignJsonKey() {
  return ['product.option.assign.json', '/product.option.assign.json', 'POST'] as const
}

export function usePostProductOptionAssignJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.option.assign.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['product.option.assign.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductOptionAssignJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['product.option.assign.json']['$post']> },
      ) => parseResponse(client['product.option.assign.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProductOptionListJsonKey(
  args: InferRequestType<(typeof client)['product.option.list.json']['$get']>,
) {
  return ['product.option.list.json', '/product.option.list.json', args] as const
}

export function useGetProductOptionListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['product.option.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.option.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductOptionListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.option.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.option.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductOptionListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['product.option.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.option.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductOptionListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.option.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.option.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProductOptionValueAddJsonKey() {
  return ['product.option.value.add.json', '/product.option.value.add.json', 'POST'] as const
}

export function usePostProductOptionValueAddJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.option.value.add.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['product.option.value.add.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductOptionValueAddJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['product.option.value.add.json']['$post']> },
      ) => parseResponse(client['product.option.value.add.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProductOptionValueAssignJsonKey() {
  return ['product.option.value.assign.json', '/product.option.value.assign.json', 'POST'] as const
}

export function usePostProductOptionValueAssignJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.option.value.assign.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['product.option.value.assign.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductOptionValueAssignJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['product.option.value.assign.json']['$post']> },
      ) => parseResponse(client['product.option.value.assign.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutProductOptionValueUpdateJsonKey() {
  return ['product.option.value.update.json', '/product.option.value.update.json', 'PUT'] as const
}

export function usePutProductOptionValueUpdateJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.option.value.update.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['product.option.value.update.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProductOptionValueUpdateJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['product.option.value.update.json']['$put']> },
      ) => parseResponse(client['product.option.value.update.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProductPriceAddJsonKey() {
  return ['product.price.add.json', '/product.price.add.json', 'POST'] as const
}

export function usePostProductPriceAddJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.price.add.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['product.price.add.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductPriceAddJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['product.price.add.json']['$post']> },
      ) => parseResponse(client['product.price.add.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteProductPriceDeleteJsonKey() {
  return ['product.price.delete.json', '/product.price.delete.json', 'DELETE'] as const
}

export function useDeleteProductPriceDeleteJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.price.delete.json']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['product.price.delete.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProductPriceDeleteJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['product.price.delete.json']['$delete']> },
      ) => parseResponse(client['product.price.delete.json'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutProductPriceUpdateJsonKey() {
  return ['product.price.update.json', '/product.price.update.json', 'PUT'] as const
}

export function usePutProductPriceUpdateJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.price.update.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['product.price.update.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProductPriceUpdateJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['product.price.update.json']['$put']> },
      ) => parseResponse(client['product.price.update.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProductReviewListJsonKey(
  args: InferRequestType<(typeof client)['product.review.list.json']['$get']>,
) {
  return ['product.review.list.json', '/product.review.list.json', args] as const
}

export function useGetProductReviewListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['product.review.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.review.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductReviewListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.review.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.review.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductReviewListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['product.review.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.review.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductReviewListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.review.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.review.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProductStoreAssignJsonKey() {
  return ['product.store.assign.json', '/product.store.assign.json', 'POST'] as const
}

export function usePostProductStoreAssignJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.store.assign.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['product.store.assign.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductStoreAssignJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['product.store.assign.json']['$post']> },
      ) => parseResponse(client['product.store.assign.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProductTaxAddJsonKey() {
  return ['product.tax.add.json', '/product.tax.add.json', 'POST'] as const
}

export function usePostProductTaxAddJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['product.tax.add.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['product.tax.add.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductTaxAddJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['product.tax.add.json']['$post']> },
      ) => parseResponse(client['product.tax.add.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutProductUpdateJsonKey() {
  return ['product.update.json', '/product.update.json', 'PUT'] as const
}

export function usePutProductUpdateJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['product.update.json']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['product.update.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProductUpdateJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['product.update.json']['$put']> },
      ) => parseResponse(client['product.update.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProductVariantAddJsonKey() {
  return ['product.variant.add.json', '/product.variant.add.json', 'POST'] as const
}

export function usePostProductVariantAddJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.variant.add.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['product.variant.add.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductVariantAddJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['product.variant.add.json']['$post']> },
      ) => parseResponse(client['product.variant.add.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProductVariantCountJsonKey(
  args: InferRequestType<(typeof client)['product.variant.count.json']['$get']>,
) {
  return ['product.variant.count.json', '/product.variant.count.json', args] as const
}

export function useGetProductVariantCountJson<TError = unknown>(
  args: InferRequestType<(typeof client)['product.variant.count.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.variant.count.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductVariantCountJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.variant.count.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.variant.count.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductVariantCountJson<TError = unknown>(
  args: InferRequestType<(typeof client)['product.variant.count.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.variant.count.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductVariantCountJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.variant.count.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.variant.count.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteProductVariantDeleteJsonKey() {
  return ['product.variant.delete.json', '/product.variant.delete.json', 'DELETE'] as const
}

export function useDeleteProductVariantDeleteJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.variant.delete.json']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['product.variant.delete.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProductVariantDeleteJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['product.variant.delete.json']['$delete']> },
      ) => parseResponse(client['product.variant.delete.json'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProductVariantImageAddJsonKey() {
  return ['product.variant.image.add.json', '/product.variant.image.add.json', 'POST'] as const
}

export function usePostProductVariantImageAddJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.variant.image.add.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['product.variant.image.add.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductVariantImageAddJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['product.variant.image.add.json']['$post']> },
      ) => parseResponse(client['product.variant.image.add.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteProductVariantImageDeleteJsonKey() {
  return [
    'product.variant.image.delete.json',
    '/product.variant.image.delete.json',
    'DELETE',
  ] as const
}

export function useDeleteProductVariantImageDeleteJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.variant.image.delete.json']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['product.variant.image.delete.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProductVariantImageDeleteJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['product.variant.image.delete.json']['$delete']>
        },
      ) => parseResponse(client['product.variant.image.delete.json'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProductVariantInfoJsonKey(
  args: InferRequestType<(typeof client)['product.variant.info.json']['$get']>,
) {
  return ['product.variant.info.json', '/product.variant.info.json', args] as const
}

export function useGetProductVariantInfoJson<TError = unknown>(
  args: InferRequestType<(typeof client)['product.variant.info.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.variant.info.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductVariantInfoJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.variant.info.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.variant.info.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductVariantInfoJson<TError = unknown>(
  args: InferRequestType<(typeof client)['product.variant.info.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.variant.info.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductVariantInfoJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.variant.info.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.variant.info.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProductVariantListJsonKey(
  args: InferRequestType<(typeof client)['product.variant.list.json']['$get']>,
) {
  return ['product.variant.list.json', '/product.variant.list.json', args] as const
}

export function useGetProductVariantListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['product.variant.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.variant.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductVariantListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.variant.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.variant.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductVariantListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['product.variant.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.variant.list.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductVariantListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product.variant.list.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product.variant.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProductVariantPriceAddJsonKey() {
  return ['product.variant.price.add.json', '/product.variant.price.add.json', 'POST'] as const
}

export function usePostProductVariantPriceAddJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.variant.price.add.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['product.variant.price.add.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductVariantPriceAddJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['product.variant.price.add.json']['$post']> },
      ) => parseResponse(client['product.variant.price.add.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteProductVariantPriceDeleteJsonKey() {
  return [
    'product.variant.price.delete.json',
    '/product.variant.price.delete.json',
    'DELETE',
  ] as const
}

export function useDeleteProductVariantPriceDeleteJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.variant.price.delete.json']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['product.variant.price.delete.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProductVariantPriceDeleteJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['product.variant.price.delete.json']['$delete']>
        },
      ) => parseResponse(client['product.variant.price.delete.json'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutProductVariantPriceUpdateJsonKey() {
  return ['product.variant.price.update.json', '/product.variant.price.update.json', 'PUT'] as const
}

export function usePutProductVariantPriceUpdateJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.variant.price.update.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['product.variant.price.update.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProductVariantPriceUpdateJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['product.variant.price.update.json']['$put']> },
      ) => parseResponse(client['product.variant.price.update.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutProductVariantUpdateJsonKey() {
  return ['product.variant.update.json', '/product.variant.update.json', 'PUT'] as const
}

export function usePutProductVariantUpdateJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product.variant.update.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['product.variant.update.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProductVariantUpdateJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['product.variant.update.json']['$put']> },
      ) => parseResponse(client['product.variant.update.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriberListJsonKey(
  args: InferRequestType<(typeof client)['subscriber.list.json']['$get']>,
) {
  return ['subscriber.list.json', '/subscriber.list.json', args] as const
}

export function useGetSubscriberListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['subscriber.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['subscriber.list.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSubscriberListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['subscriber.list.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['subscriber.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriberListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['subscriber.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['subscriber.list.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSubscriberListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['subscriber.list.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['subscriber.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTaxClassInfoJsonKey(
  args: InferRequestType<(typeof client)['tax.class.info.json']['$get']>,
) {
  return ['tax.class.info.json', '/tax.class.info.json', args] as const
}

export function useGetTaxClassInfoJson<TError = unknown>(
  args: InferRequestType<(typeof client)['tax.class.info.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['tax.class.info.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaxClassInfoJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['tax.class.info.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['tax.class.info.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaxClassInfoJson<TError = unknown>(
  args: InferRequestType<(typeof client)['tax.class.info.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['tax.class.info.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaxClassInfoJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['tax.class.info.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['tax.class.info.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWebhookCountJsonKey(
  args: InferRequestType<(typeof client)['webhook.count.json']['$get']>,
) {
  return ['webhook.count.json', '/webhook.count.json', args] as const
}

export function useGetWebhookCountJson<TError = unknown>(
  args: InferRequestType<(typeof client)['webhook.count.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.count.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhookCountJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.count.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['webhook.count.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhookCountJson<TError = unknown>(
  args: InferRequestType<(typeof client)['webhook.count.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.count.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhookCountJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.count.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['webhook.count.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWebhookCreateJsonKey() {
  return ['webhook.create.json', '/webhook.create.json', 'POST'] as const
}

export function usePostWebhookCreateJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.create.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['webhook.create.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhookCreateJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['webhook.create.json']['$post']> },
      ) => parseResponse(client['webhook.create.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWebhookDeleteJsonKey() {
  return ['webhook.delete.json', '/webhook.delete.json', 'DELETE'] as const
}

export function useDeleteWebhookDeleteJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.delete.json']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['webhook.delete.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhookDeleteJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['webhook.delete.json']['$delete']> },
      ) => parseResponse(client['webhook.delete.json'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhookEventsJsonKey() {
  return ['webhook.events.json', '/webhook.events.json'] as const
}

export function useGetWebhookEventsJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.events.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhookEventsJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.events.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['webhook.events.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhookEventsJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.events.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhookEventsJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.events.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['webhook.events.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWebhookListJsonKey(
  args: InferRequestType<(typeof client)['webhook.list.json']['$get']>,
) {
  return ['webhook.list.json', '/webhook.list.json', args] as const
}

export function useGetWebhookListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['webhook.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.list.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhookListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.list.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['webhook.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhookListJson<TError = unknown>(
  args: InferRequestType<(typeof client)['webhook.list.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.list.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhookListJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.list.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['webhook.list.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWebhookUpdateJsonKey() {
  return ['webhook.update.json', '/webhook.update.json', 'PUT'] as const
}

export function usePutWebhookUpdateJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.update.json']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['webhook.update.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWebhookUpdateJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['webhook.update.json']['$put']> },
      ) => parseResponse(client['webhook.update.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
