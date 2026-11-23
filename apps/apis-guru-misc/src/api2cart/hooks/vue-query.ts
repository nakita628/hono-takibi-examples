import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function usePostAccountCartAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostAccountCartAddJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountCartListJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['account.cart.list.json']['$get']>>,
) {
  return ['account.cart.list.json', '/account.cart.list.json', toValue(args)] as const
}

export function getAccountCartListJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['account.cart.list.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountCartListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['account.cart.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountCartListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['account.cart.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['account.cart.list.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['account.cart.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['account.cart.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountCartListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['account.cart.list.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountCartListJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountCartListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['account.cart.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAccountConfigUpdateJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutAccountConfigUpdateJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountFailedWebhooksJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['account.failed_webhooks.json']['$get']>>,
) {
  return ['account.failed_webhooks.json', '/account.failed_webhooks.json', toValue(args)] as const
}

export function getAccountFailedWebhooksJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['account.failed_webhooks.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountFailedWebhooksJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['account.failed_webhooks.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountFailedWebhooksJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['account.failed_webhooks.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['account.failed_webhooks.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['account.failed_webhooks.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['account.failed_webhooks.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountFailedWebhooksJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountFailedWebhooksJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['account.failed_webhooks.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountSupportedPlatformsJsonQueryKey() {
  return ['account.supported_platforms.json', '/account.supported_platforms.json'] as const
}

export function getAccountSupportedPlatformsJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountSupportedPlatformsJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['account.supported_platforms.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountSupportedPlatformsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['account.supported_platforms.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['account.supported_platforms.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['account.supported_platforms.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountSupportedPlatformsJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: getAccountSupportedPlatformsJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['account.supported_platforms.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAttributeAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostAttributeAddJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAttributeAssignGroupJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostAttributeAssignGroupJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAttributeAssignSetJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostAttributeAssignSetJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAttributeAttributesetListJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['attribute.attributeset.list.json']['$get']>
  >,
) {
  return [
    'attribute.attributeset.list.json',
    '/attribute.attributeset.list.json',
    toValue(args),
  ] as const
}

export function getAttributeAttributesetListJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['attribute.attributeset.list.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAttributeAttributesetListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['attribute.attributeset.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAttributeAttributesetListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['attribute.attributeset.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['attribute.attributeset.list.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['attribute.attributeset.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['attribute.attributeset.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAttributeAttributesetListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAttributeAttributesetListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['attribute.attributeset.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAttributeCountJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['attribute.count.json']['$get']>>,
) {
  return ['attribute.count.json', '/attribute.count.json', toValue(args)] as const
}

export function getAttributeCountJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['attribute.count.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAttributeCountJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['attribute.count.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAttributeCountJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.count.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['attribute.count.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['attribute.count.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['attribute.count.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAttributeCountJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.count.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAttributeCountJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAttributeCountJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['attribute.count.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteAttributeDeleteJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteAttributeDeleteJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAttributeGroupListJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['attribute.group.list.json']['$get']>>,
) {
  return ['attribute.group.list.json', '/attribute.group.list.json', toValue(args)] as const
}

export function getAttributeGroupListJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['attribute.group.list.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAttributeGroupListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['attribute.group.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAttributeGroupListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['attribute.group.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['attribute.group.list.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['attribute.group.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['attribute.group.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAttributeGroupListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAttributeGroupListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['attribute.group.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAttributeInfoJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['attribute.info.json']['$get']>>,
) {
  return ['attribute.info.json', '/attribute.info.json', toValue(args)] as const
}

export function getAttributeInfoJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['attribute.info.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAttributeInfoJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['attribute.info.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAttributeInfoJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.info.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['attribute.info.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['attribute.info.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['attribute.info.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAttributeInfoJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.info.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAttributeInfoJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAttributeInfoJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['attribute.info.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAttributeListJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['attribute.list.json']['$get']>>,
) {
  return ['attribute.list.json', '/attribute.list.json', toValue(args)] as const
}

export function getAttributeListJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['attribute.list.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAttributeListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['attribute.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAttributeListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['attribute.list.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['attribute.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['attribute.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAttributeListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.list.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAttributeListJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAttributeListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['attribute.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAttributeTypeListJsonQueryKey() {
  return ['attribute.type.list.json', '/attribute.type.list.json'] as const
}

export function getAttributeTypeListJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAttributeTypeListJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['attribute.type.list.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAttributeTypeListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['attribute.type.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['attribute.type.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['attribute.type.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAttributeTypeListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: getAttributeTypeListJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['attribute.type.list.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAttributeUnassignGroupJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostAttributeUnassignGroupJsonMutationOptions<
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

export function usePostAttributeUnassignSetJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostAttributeUnassignSetJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAttributeUpdateJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostAttributeUpdateJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBasketInfoJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['basket.info.json']['$get']>>,
) {
  return ['basket.info.json', '/basket.info.json', toValue(args)] as const
}

export function getBasketInfoJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['basket.info.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBasketInfoJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['basket.info.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBasketInfoJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['basket.info.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['basket.info.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['basket.info.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['basket.info.json']['$get']>>>
            >
          >,
          ReturnType<typeof getBasketInfoJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['basket.info.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBasketInfoJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBasketInfoJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['basket.info.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBasketItemAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostBasketItemAddJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostBasketLiveShippingServiceCreateJson<
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
                  ReturnType<(typeof client)['basket.live_shipping_service.create.json']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['basket.live_shipping_service.create.json']['$post']>,
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
  const mutationDefaults = getPostBasketLiveShippingServiceCreateJsonMutationOptions<
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

export function useDeleteBasketLiveShippingServiceDeleteJson<
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
                  ReturnType<(typeof client)['basket.live_shipping_service.delete.json']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['basket.live_shipping_service.delete.json']['$delete']>,
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
  const mutationDefaults = getDeleteBasketLiveShippingServiceDeleteJsonMutationOptions<
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

export function getBasketLiveShippingServiceListJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['basket.live_shipping_service.list.json']['$get']>
  >,
) {
  return [
    'basket.live_shipping_service.list.json',
    '/basket.live_shipping_service.list.json',
    toValue(args),
  ] as const
}

export function getBasketLiveShippingServiceListJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['basket.live_shipping_service.list.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBasketLiveShippingServiceListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['basket.live_shipping_service.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBasketLiveShippingServiceListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['basket.live_shipping_service.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['basket.live_shipping_service.list.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['basket.live_shipping_service.list.json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBasketLiveShippingServiceListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBasketLiveShippingServiceListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['basket.live_shipping_service.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBridgeDeleteJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostBridgeDeleteJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBridgeDownloadFileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['bridge.download.file']['$get']>>,
) {
  return ['bridge.download.file', '/bridge.download.file', toValue(args)] as const
}

export function getBridgeDownloadFileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['bridge.download.file']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBridgeDownloadFileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['bridge.download.file'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBridgeDownloadFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['bridge.download.file']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['bridge.download.file']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['bridge.download.file']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['bridge.download.file']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBridgeDownloadFileQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['bridge.download.file']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBridgeDownloadFileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBridgeDownloadFileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['bridge.download.file'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBridgeUpdateJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostBridgeUpdateJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCartBridgeJsonQueryKey() {
  return ['cart.bridge.json', '/cart.bridge.json'] as const
}

export function getCartBridgeJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCartBridgeJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['cart.bridge.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCartBridgeJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.bridge.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.bridge.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.bridge.json']['$get']>>>
            >
          >,
          ReturnType<typeof getCartBridgeJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.bridge.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCartBridgeJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCartBridgeJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['cart.bridge.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCartCatalogPriceRulesCountJsonQueryKey() {
  return ['cart.catalog_price_rules.count.json', '/cart.catalog_price_rules.count.json'] as const
}

export function getCartCatalogPriceRulesCountJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCartCatalogPriceRulesCountJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['cart.catalog_price_rules.count.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCartCatalogPriceRulesCountJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['cart.catalog_price_rules.count.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.catalog_price_rules.count.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.catalog_price_rules.count.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCartCatalogPriceRulesCountJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: getCartCatalogPriceRulesCountJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['cart.catalog_price_rules.count.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCartCatalogPriceRulesListJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['cart.catalog_price_rules.list.json']['$get']>
  >,
) {
  return [
    'cart.catalog_price_rules.list.json',
    '/cart.catalog_price_rules.list.json',
    toValue(args),
  ] as const
}

export function getCartCatalogPriceRulesListJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['cart.catalog_price_rules.list.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCartCatalogPriceRulesListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['cart.catalog_price_rules.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCartCatalogPriceRulesListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['cart.catalog_price_rules.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['cart.catalog_price_rules.list.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.catalog_price_rules.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.catalog_price_rules.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCartCatalogPriceRulesListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCartCatalogPriceRulesListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['cart.catalog_price_rules.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCartClearCacheJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostCartClearCacheJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCartConfigJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.config.json']['$get']>>,
) {
  return ['cart.config.json', '/cart.config.json', toValue(args)] as const
}

export function getCartConfigJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.config.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCartConfigJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['cart.config.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCartConfigJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.config.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.config.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.config.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.config.json']['$get']>>>
            >
          >,
          ReturnType<typeof getCartConfigJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.config.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCartConfigJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCartConfigJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['cart.config.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutCartConfigUpdateJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutCartConfigUpdateJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostCartCouponAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostCartCouponAddJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostCartCouponConditionAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostCartCouponConditionAddJsonMutationOptions<
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

export function getCartCouponCountJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.coupon.count.json']['$get']>>,
) {
  return ['cart.coupon.count.json', '/cart.coupon.count.json', toValue(args)] as const
}

export function getCartCouponCountJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.coupon.count.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCartCouponCountJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['cart.coupon.count.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCartCouponCountJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.coupon.count.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.coupon.count.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.coupon.count.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.coupon.count.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCartCouponCountJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.coupon.count.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCartCouponCountJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCartCouponCountJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['cart.coupon.count.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteCartCouponDeleteJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteCartCouponDeleteJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCartCouponListJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.coupon.list.json']['$get']>>,
) {
  return ['cart.coupon.list.json', '/cart.coupon.list.json', toValue(args)] as const
}

export function getCartCouponListJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.coupon.list.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCartCouponListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['cart.coupon.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCartCouponListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.coupon.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.coupon.list.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.coupon.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.coupon.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCartCouponListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.coupon.list.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCartCouponListJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCartCouponListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['cart.coupon.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCartCreateJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostCartCreateJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteCartDeleteJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteCartDeleteJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCartDisconnectJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.disconnect.json']['$get']>>,
) {
  return ['cart.disconnect.json', '/cart.disconnect.json', toValue(args)] as const
}

export function getCartDisconnectJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.disconnect.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCartDisconnectJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['cart.disconnect.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCartDisconnectJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.disconnect.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.disconnect.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.disconnect.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.disconnect.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCartDisconnectJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.disconnect.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCartDisconnectJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCartDisconnectJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['cart.disconnect.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCartGiftcardAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostCartGiftcardAddJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCartGiftcardCountJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.giftcard.count.json']['$get']>>,
) {
  return ['cart.giftcard.count.json', '/cart.giftcard.count.json', toValue(args)] as const
}

export function getCartGiftcardCountJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.giftcard.count.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCartGiftcardCountJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['cart.giftcard.count.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCartGiftcardCountJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.giftcard.count.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.giftcard.count.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.giftcard.count.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.giftcard.count.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCartGiftcardCountJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCartGiftcardCountJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['cart.giftcard.count.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCartGiftcardListJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.giftcard.list.json']['$get']>>,
) {
  return ['cart.giftcard.list.json', '/cart.giftcard.list.json', toValue(args)] as const
}

export function getCartGiftcardListJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.giftcard.list.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCartGiftcardListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['cart.giftcard.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCartGiftcardListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.giftcard.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.giftcard.list.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.giftcard.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.giftcard.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCartGiftcardListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCartGiftcardListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['cart.giftcard.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCartInfoJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.info.json']['$get']>>,
) {
  return ['cart.info.json', '/cart.info.json', toValue(args)] as const
}

export function getCartInfoJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.info.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCartInfoJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['cart.info.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCartInfoJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.info.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.info.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.info.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.info.json']['$get']>>>
            >
          >,
          ReturnType<typeof getCartInfoJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.info.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCartInfoJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCartInfoJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['cart.info.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCartListJsonQueryKey() {
  return ['cart.list.json', '/cart.list.json'] as const
}

export function getCartListJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCartListJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['cart.list.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCartListJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.list.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.list.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.list.json']['$get']>>>
            >
          >,
          ReturnType<typeof getCartListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.list.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCartListJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCartListJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['cart.list.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCartMetaDataListJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.meta_data.list.json']['$get']>>,
) {
  return ['cart.meta_data.list.json', '/cart.meta_data.list.json', toValue(args)] as const
}

export function getCartMetaDataListJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.meta_data.list.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCartMetaDataListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['cart.meta_data.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCartMetaDataListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.meta_data.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.meta_data.list.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.meta_data.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.meta_data.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCartMetaDataListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCartMetaDataListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['cart.meta_data.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCartMetaDataSetJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostCartMetaDataSetJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteCartMetaDataUnsetJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteCartMetaDataUnsetJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCartMethodsJsonQueryKey() {
  return ['cart.methods.json', '/cart.methods.json'] as const
}

export function getCartMethodsJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCartMethodsJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['cart.methods.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCartMethodsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.methods.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.methods.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.methods.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCartMethodsJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.methods.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCartMethodsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCartMethodsJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['cart.methods.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCartPluginListJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.plugin.list.json']['$get']>>,
) {
  return ['cart.plugin.list.json', '/cart.plugin.list.json', toValue(args)] as const
}

export function getCartPluginListJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.plugin.list.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCartPluginListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['cart.plugin.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCartPluginListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.plugin.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.plugin.list.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.plugin.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.plugin.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCartPluginListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.plugin.list.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCartPluginListJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCartPluginListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['cart.plugin.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCartScriptAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostCartScriptAddJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteCartScriptDeleteJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteCartScriptDeleteJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCartScriptListJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.script.list.json']['$get']>>,
) {
  return ['cart.script.list.json', '/cart.script.list.json', toValue(args)] as const
}

export function getCartScriptListJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.script.list.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCartScriptListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['cart.script.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCartScriptListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.script.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.script.list.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.script.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.script.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCartScriptListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.script.list.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCartScriptListJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCartScriptListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['cart.script.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCartShippingZonesListJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['cart.shipping_zones.list.json']['$get']>
  >,
) {
  return ['cart.shipping_zones.list.json', '/cart.shipping_zones.list.json', toValue(args)] as const
}

export function getCartShippingZonesListJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['cart.shipping_zones.list.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCartShippingZonesListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['cart.shipping_zones.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCartShippingZonesListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['cart.shipping_zones.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['cart.shipping_zones.list.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.shipping_zones.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.shipping_zones.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCartShippingZonesListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCartShippingZonesListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['cart.shipping_zones.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCartValidateJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.validate.json']['$get']>>,
) {
  return ['cart.validate.json', '/cart.validate.json', toValue(args)] as const
}

export function getCartValidateJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.validate.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCartValidateJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['cart.validate.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCartValidateJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.validate.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cart.validate.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.validate.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cart.validate.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCartValidateJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cart.validate.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCartValidateJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCartValidateJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['cart.validate.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCategoryAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostCategoryAddJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostCategoryAssignJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostCategoryAssignJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCategoryCountJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['category.count.json']['$get']>>,
) {
  return ['category.count.json', '/category.count.json', toValue(args)] as const
}

export function getCategoryCountJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['category.count.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoryCountJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['category.count.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCategoryCountJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['category.count.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['category.count.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['category.count.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['category.count.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCategoryCountJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['category.count.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoryCountJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoryCountJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['category.count.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteCategoryDeleteJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteCategoryDeleteJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCategoryFindJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['category.find.json']['$get']>>,
) {
  return ['category.find.json', '/category.find.json', toValue(args)] as const
}

export function getCategoryFindJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['category.find.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoryFindJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['category.find.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCategoryFindJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['category.find.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['category.find.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['category.find.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['category.find.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCategoryFindJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['category.find.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoryFindJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoryFindJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['category.find.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCategoryImageAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostCategoryImageAddJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteCategoryImageDeleteJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteCategoryImageDeleteJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCategoryInfoJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['category.info.json']['$get']>>,
) {
  return ['category.info.json', '/category.info.json', toValue(args)] as const
}

export function getCategoryInfoJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['category.info.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoryInfoJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['category.info.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCategoryInfoJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['category.info.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['category.info.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['category.info.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['category.info.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCategoryInfoJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['category.info.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoryInfoJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoryInfoJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['category.info.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCategoryListJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['category.list.json']['$get']>>,
) {
  return ['category.list.json', '/category.list.json', toValue(args)] as const
}

export function getCategoryListJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['category.list.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoryListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['category.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCategoryListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['category.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['category.list.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['category.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['category.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCategoryListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['category.list.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoryListJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoryListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['category.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCategoryUnassignJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostCategoryUnassignJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutCategoryUpdateJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutCategoryUpdateJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostCustomerAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostCustomerAddJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCustomerAttributeListJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['customer.attribute.list.json']['$get']>>,
) {
  return ['customer.attribute.list.json', '/customer.attribute.list.json', toValue(args)] as const
}

export function getCustomerAttributeListJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['customer.attribute.list.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomerAttributeListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['customer.attribute.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomerAttributeListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['customer.attribute.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['customer.attribute.list.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['customer.attribute.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['customer.attribute.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomerAttributeListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomerAttributeListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['customer.attribute.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCustomerCountJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['customer.count.json']['$get']>>,
) {
  return ['customer.count.json', '/customer.count.json', toValue(args)] as const
}

export function getCustomerCountJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['customer.count.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomerCountJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['customer.count.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomerCountJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.count.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['customer.count.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['customer.count.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['customer.count.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomerCountJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.count.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomerCountJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomerCountJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['customer.count.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCustomerFindJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['customer.find.json']['$get']>>,
) {
  return ['customer.find.json', '/customer.find.json', toValue(args)] as const
}

export function getCustomerFindJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['customer.find.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomerFindJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['customer.find.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomerFindJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.find.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['customer.find.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['customer.find.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['customer.find.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomerFindJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.find.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomerFindJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomerFindJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['customer.find.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCustomerGroupAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostCustomerGroupAddJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCustomerGroupListJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['customer.group.list.json']['$get']>>,
) {
  return ['customer.group.list.json', '/customer.group.list.json', toValue(args)] as const
}

export function getCustomerGroupListJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['customer.group.list.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomerGroupListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['customer.group.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomerGroupListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.group.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['customer.group.list.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['customer.group.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['customer.group.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomerGroupListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomerGroupListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['customer.group.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCustomerInfoJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['customer.info.json']['$get']>>,
) {
  return ['customer.info.json', '/customer.info.json', toValue(args)] as const
}

export function getCustomerInfoJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['customer.info.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomerInfoJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['customer.info.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomerInfoJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.info.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['customer.info.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['customer.info.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['customer.info.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomerInfoJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.info.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomerInfoJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomerInfoJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['customer.info.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCustomerListJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['customer.list.json']['$get']>>,
) {
  return ['customer.list.json', '/customer.list.json', toValue(args)] as const
}

export function getCustomerListJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['customer.list.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomerListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['customer.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomerListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['customer.list.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['customer.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['customer.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomerListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['customer.list.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomerListJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomerListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['customer.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutCustomerUpdateJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutCustomerUpdateJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOrderAbandonedListJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['order.abandoned.list.json']['$get']>>,
) {
  return ['order.abandoned.list.json', '/order.abandoned.list.json', toValue(args)] as const
}

export function getOrderAbandonedListJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['order.abandoned.list.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrderAbandonedListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['order.abandoned.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrderAbandonedListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['order.abandoned.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['order.abandoned.list.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['order.abandoned.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['order.abandoned.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrderAbandonedListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrderAbandonedListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['order.abandoned.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrderAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['order.add.json']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['order.add.json']['$post']>,
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
  const mutationDefaults = getPostOrderAddJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOrderCountJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['order.count.json']['$get']>>,
) {
  return ['order.count.json', '/order.count.json', toValue(args)] as const
}

export function getOrderCountJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['order.count.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrderCountJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['order.count.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrderCountJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['order.count.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['order.count.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['order.count.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['order.count.json']['$get']>>>
            >
          >,
          ReturnType<typeof getOrderCountJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['order.count.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrderCountJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrderCountJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['order.count.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrderFinancialStatusListJsonQueryKey() {
  return ['order.financial_status.list.json', '/order.financial_status.list.json'] as const
}

export function getOrderFinancialStatusListJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOrderFinancialStatusListJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['order.financial_status.list.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrderFinancialStatusListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['order.financial_status.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['order.financial_status.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['order.financial_status.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrderFinancialStatusListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: getOrderFinancialStatusListJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['order.financial_status.list.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrderFindJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['order.find.json']['$get']>>,
) {
  return ['order.find.json', '/order.find.json', toValue(args)] as const
}

export function getOrderFindJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['order.find.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrderFindJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['order.find.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrderFindJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['order.find.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['order.find.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['order.find.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['order.find.json']['$get']>>>
            >
          >,
          ReturnType<typeof getOrderFindJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['order.find.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrderFindJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrderFindJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['order.find.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrderFulfillmentStatusListJsonQueryKey() {
  return ['order.fulfillment_status.list.json', '/order.fulfillment_status.list.json'] as const
}

export function getOrderFulfillmentStatusListJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOrderFulfillmentStatusListJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['order.fulfillment_status.list.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrderFulfillmentStatusListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['order.fulfillment_status.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['order.fulfillment_status.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['order.fulfillment_status.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrderFulfillmentStatusListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: getOrderFulfillmentStatusListJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['order.fulfillment_status.list.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrderInfoJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['order.info.json']['$get']>>,
) {
  return ['order.info.json', '/order.info.json', toValue(args)] as const
}

export function getOrderInfoJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['order.info.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrderInfoJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['order.info.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrderInfoJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['order.info.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['order.info.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['order.info.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['order.info.json']['$get']>>>
            >
          >,
          ReturnType<typeof getOrderInfoJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['order.info.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrderInfoJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrderInfoJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['order.info.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrderListJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['order.list.json']['$get']>>,
) {
  return ['order.list.json', '/order.list.json', toValue(args)] as const
}

export function getOrderListJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['order.list.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrderListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['order.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrderListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['order.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['order.list.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['order.list.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['order.list.json']['$get']>>>
            >
          >,
          ReturnType<typeof getOrderListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['order.list.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrderListJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrderListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['order.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrderPreestimateShippingListJson<
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
                  ReturnType<(typeof client)['order.preestimate_shipping.list.json']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['order.preestimate_shipping.list.json']['$post']>,
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
  const mutationDefaults = getPostOrderPreestimateShippingListJsonMutationOptions<
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

export function usePostOrderRefundAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostOrderRefundAddJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostOrderShipmentAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostOrderShipmentAddJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteOrderShipmentDeleteJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteOrderShipmentDeleteJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOrderShipmentInfoJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['order.shipment.info.json']['$get']>>,
) {
  return ['order.shipment.info.json', '/order.shipment.info.json', toValue(args)] as const
}

export function getOrderShipmentInfoJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['order.shipment.info.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrderShipmentInfoJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['order.shipment.info.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrderShipmentInfoJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['order.shipment.info.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['order.shipment.info.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['order.shipment.info.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['order.shipment.info.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrderShipmentInfoJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrderShipmentInfoJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['order.shipment.info.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrderShipmentListJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['order.shipment.list.json']['$get']>>,
) {
  return ['order.shipment.list.json', '/order.shipment.list.json', toValue(args)] as const
}

export function getOrderShipmentListJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['order.shipment.list.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrderShipmentListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['order.shipment.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrderShipmentListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['order.shipment.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['order.shipment.list.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['order.shipment.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['order.shipment.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrderShipmentListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrderShipmentListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['order.shipment.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrderShipmentTrackingAddJson<
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
                Awaited<ReturnType<(typeof client)['order.shipment.tracking.add.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['order.shipment.tracking.add.json']['$post']>,
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
  const mutationDefaults = getPostOrderShipmentTrackingAddJsonMutationOptions<
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

export function usePutOrderShipmentUpdateJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutOrderShipmentUpdateJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOrderStatusListJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['order.status.list.json']['$get']>>,
) {
  return ['order.status.list.json', '/order.status.list.json', toValue(args)] as const
}

export function getOrderStatusListJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['order.status.list.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrderStatusListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['order.status.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrderStatusListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['order.status.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['order.status.list.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['order.status.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['order.status.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrderStatusListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['order.status.list.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrderStatusListJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrderStatusListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['order.status.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrderTransactionListJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['order.transaction.list.json']['$get']>>,
) {
  return ['order.transaction.list.json', '/order.transaction.list.json', toValue(args)] as const
}

export function getOrderTransactionListJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['order.transaction.list.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrderTransactionListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['order.transaction.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrderTransactionListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['order.transaction.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['order.transaction.list.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['order.transaction.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['order.transaction.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrderTransactionListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrderTransactionListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['order.transaction.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutOrderUpdateJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutOrderUpdateJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostProductAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostProductAddJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProductAttributeListJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.attribute.list.json']['$get']>>,
) {
  return ['product.attribute.list.json', '/product.attribute.list.json', toValue(args)] as const
}

export function getProductAttributeListJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.attribute.list.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductAttributeListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['product.attribute.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductAttributeListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['product.attribute.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.attribute.list.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.attribute.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.attribute.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProductAttributeListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductAttributeListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['product.attribute.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProductAttributeValueSetJson<
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
                Awaited<ReturnType<(typeof client)['product.attribute.value.set.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.attribute.value.set.json']['$post']>,
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
  const mutationDefaults = getPostProductAttributeValueSetJsonMutationOptions<
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

export function usePostProductAttributeValueUnsetJson<
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
                Awaited<ReturnType<(typeof client)['product.attribute.value.unset.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.attribute.value.unset.json']['$post']>,
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
  const mutationDefaults = getPostProductAttributeValueUnsetJsonMutationOptions<
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

export function getProductBrandListJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.brand.list.json']['$get']>>,
) {
  return ['product.brand.list.json', '/product.brand.list.json', toValue(args)] as const
}

export function getProductBrandListJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.brand.list.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductBrandListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['product.brand.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductBrandListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['product.brand.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.brand.list.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.brand.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.brand.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProductBrandListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductBrandListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['product.brand.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductChildItemFindJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.child_item.find.json']['$get']>>,
) {
  return ['product.child_item.find.json', '/product.child_item.find.json', toValue(args)] as const
}

export function getProductChildItemFindJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.child_item.find.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductChildItemFindJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['product.child_item.find.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductChildItemFindJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['product.child_item.find.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.child_item.find.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.child_item.find.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.child_item.find.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProductChildItemFindJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductChildItemFindJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['product.child_item.find.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductChildItemInfoJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.child_item.info.json']['$get']>>,
) {
  return ['product.child_item.info.json', '/product.child_item.info.json', toValue(args)] as const
}

export function getProductChildItemInfoJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.child_item.info.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductChildItemInfoJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['product.child_item.info.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductChildItemInfoJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['product.child_item.info.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.child_item.info.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.child_item.info.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.child_item.info.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProductChildItemInfoJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductChildItemInfoJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['product.child_item.info.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductChildItemListJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.child_item.list.json']['$get']>>,
) {
  return ['product.child_item.list.json', '/product.child_item.list.json', toValue(args)] as const
}

export function getProductChildItemListJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.child_item.list.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductChildItemListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['product.child_item.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductChildItemListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['product.child_item.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.child_item.list.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.child_item.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.child_item.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProductChildItemListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductChildItemListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['product.child_item.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductCountJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.count.json']['$get']>>,
) {
  return ['product.count.json', '/product.count.json', toValue(args)] as const
}

export function getProductCountJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.count.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductCountJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['product.count.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductCountJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['product.count.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.count.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.count.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.count.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProductCountJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['product.count.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductCountJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductCountJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['product.count.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProductCurrencyAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostProductCurrencyAddJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProductCurrencyListJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.currency.list.json']['$get']>>,
) {
  return ['product.currency.list.json', '/product.currency.list.json', toValue(args)] as const
}

export function getProductCurrencyListJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.currency.list.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductCurrencyListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['product.currency.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductCurrencyListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['product.currency.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.currency.list.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.currency.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.currency.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProductCurrencyListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductCurrencyListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['product.currency.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteProductDeleteJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteProductDeleteJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProductFieldsJsonQueryKey() {
  return ['product.fields.json', '/product.fields.json'] as const
}

export function getProductFieldsJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getProductFieldsJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['product.fields.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductFieldsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['product.fields.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.fields.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.fields.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProductFieldsJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['product.fields.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductFieldsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getProductFieldsJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['product.fields.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductFindJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.find.json']['$get']>>,
) {
  return ['product.find.json', '/product.find.json', toValue(args)] as const
}

export function getProductFindJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.find.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductFindJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['product.find.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductFindJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['product.find.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.find.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.find.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.find.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProductFindJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['product.find.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductFindJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductFindJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['product.find.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProductImageAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostProductImageAddJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteProductImageDeleteJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteProductImageDeleteJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutProductImageUpdateJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutProductImageUpdateJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProductInfoJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.info.json']['$get']>>,
) {
  return ['product.info.json', '/product.info.json', toValue(args)] as const
}

export function getProductInfoJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.info.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductInfoJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['product.info.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductInfoJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['product.info.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.info.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.info.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.info.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProductInfoJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['product.info.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductInfoJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductInfoJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['product.info.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductListJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.list.json']['$get']>>,
) {
  return ['product.list.json', '/product.list.json', toValue(args)] as const
}

export function getProductListJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.list.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['product.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['product.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.list.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProductListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['product.list.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductListJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['product.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProductManufacturerAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostProductManufacturerAddJsonMutationOptions<
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

export function usePostProductOptionAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostProductOptionAddJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostProductOptionAssignJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostProductOptionAssignJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProductOptionListJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.option.list.json']['$get']>>,
) {
  return ['product.option.list.json', '/product.option.list.json', toValue(args)] as const
}

export function getProductOptionListJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.option.list.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductOptionListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['product.option.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductOptionListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['product.option.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.option.list.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.option.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.option.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProductOptionListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductOptionListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['product.option.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProductOptionValueAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostProductOptionValueAddJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostProductOptionValueAssignJson<
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
                Awaited<ReturnType<(typeof client)['product.option.value.assign.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.option.value.assign.json']['$post']>,
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
  const mutationDefaults = getPostProductOptionValueAssignJsonMutationOptions<
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

export function usePutProductOptionValueUpdateJson<
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
                Awaited<ReturnType<(typeof client)['product.option.value.update.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.option.value.update.json']['$put']>,
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
  const mutationDefaults = getPutProductOptionValueUpdateJsonMutationOptions<
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

export function usePostProductPriceAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostProductPriceAddJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteProductPriceDeleteJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteProductPriceDeleteJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutProductPriceUpdateJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutProductPriceUpdateJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProductReviewListJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.review.list.json']['$get']>>,
) {
  return ['product.review.list.json', '/product.review.list.json', toValue(args)] as const
}

export function getProductReviewListJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.review.list.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductReviewListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['product.review.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductReviewListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['product.review.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.review.list.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.review.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.review.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProductReviewListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductReviewListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['product.review.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProductStoreAssignJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostProductStoreAssignJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostProductTaxAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostProductTaxAddJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutProductUpdateJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutProductUpdateJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostProductVariantAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostProductVariantAddJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProductVariantCountJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.variant.count.json']['$get']>>,
) {
  return ['product.variant.count.json', '/product.variant.count.json', toValue(args)] as const
}

export function getProductVariantCountJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.variant.count.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductVariantCountJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['product.variant.count.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductVariantCountJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['product.variant.count.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.variant.count.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.variant.count.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.variant.count.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProductVariantCountJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductVariantCountJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['product.variant.count.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteProductVariantDeleteJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteProductVariantDeleteJsonMutationOptions<
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

export function usePostProductVariantImageAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostProductVariantImageAddJsonMutationOptions<
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

export function useDeleteProductVariantImageDeleteJson<
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
                Awaited<ReturnType<(typeof client)['product.variant.image.delete.json']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.variant.image.delete.json']['$delete']>,
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
  const mutationDefaults = getDeleteProductVariantImageDeleteJsonMutationOptions<
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

export function getProductVariantInfoJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.variant.info.json']['$get']>>,
) {
  return ['product.variant.info.json', '/product.variant.info.json', toValue(args)] as const
}

export function getProductVariantInfoJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.variant.info.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductVariantInfoJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['product.variant.info.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductVariantInfoJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['product.variant.info.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.variant.info.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.variant.info.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.variant.info.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProductVariantInfoJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductVariantInfoJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['product.variant.info.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductVariantListJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.variant.list.json']['$get']>>,
) {
  return ['product.variant.list.json', '/product.variant.list.json', toValue(args)] as const
}

export function getProductVariantListJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.variant.list.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductVariantListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['product.variant.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductVariantListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['product.variant.list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product.variant.list.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.variant.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product.variant.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProductVariantListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductVariantListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['product.variant.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProductVariantPriceAddJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostProductVariantPriceAddJsonMutationOptions<
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

export function useDeleteProductVariantPriceDeleteJson<
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
                Awaited<ReturnType<(typeof client)['product.variant.price.delete.json']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.variant.price.delete.json']['$delete']>,
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
  const mutationDefaults = getDeleteProductVariantPriceDeleteJsonMutationOptions<
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

export function usePutProductVariantPriceUpdateJson<
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
                Awaited<ReturnType<(typeof client)['product.variant.price.update.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['product.variant.price.update.json']['$put']>,
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
  const mutationDefaults = getPutProductVariantPriceUpdateJsonMutationOptions<
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

export function usePutProductVariantUpdateJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutProductVariantUpdateJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSubscriberListJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['subscriber.list.json']['$get']>>,
) {
  return ['subscriber.list.json', '/subscriber.list.json', toValue(args)] as const
}

export function getSubscriberListJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['subscriber.list.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriberListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['subscriber.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriberListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['subscriber.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['subscriber.list.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['subscriber.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['subscriber.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSubscriberListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['subscriber.list.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriberListJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriberListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['subscriber.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTaxClassInfoJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['tax.class.info.json']['$get']>>,
) {
  return ['tax.class.info.json', '/tax.class.info.json', toValue(args)] as const
}

export function getTaxClassInfoJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['tax.class.info.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaxClassInfoJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['tax.class.info.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTaxClassInfoJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['tax.class.info.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['tax.class.info.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['tax.class.info.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['tax.class.info.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTaxClassInfoJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['tax.class.info.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaxClassInfoJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaxClassInfoJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['tax.class.info.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebhookCountJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['webhook.count.json']['$get']>>,
) {
  return ['webhook.count.json', '/webhook.count.json', toValue(args)] as const
}

export function getWebhookCountJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['webhook.count.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhookCountJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['webhook.count.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhookCountJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.count.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['webhook.count.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['webhook.count.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['webhook.count.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebhookCountJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.count.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhookCountJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhookCountJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['webhook.count.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostWebhookCreateJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostWebhookCreateJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteWebhookDeleteJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteWebhookDeleteJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWebhookEventsJsonQueryKey() {
  return ['webhook.events.json', '/webhook.events.json'] as const
}

export function getWebhookEventsJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWebhookEventsJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['webhook.events.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhookEventsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.events.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['webhook.events.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['webhook.events.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebhookEventsJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.events.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhookEventsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWebhookEventsJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['webhook.events.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebhookListJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['webhook.list.json']['$get']>>,
) {
  return ['webhook.list.json', '/webhook.list.json', toValue(args)] as const
}

export function getWebhookListJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['webhook.list.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhookListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['webhook.list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhookListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.list.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['webhook.list.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['webhook.list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['webhook.list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebhookListJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['webhook.list.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhookListJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhookListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['webhook.list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutWebhookUpdateJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutWebhookUpdateJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
