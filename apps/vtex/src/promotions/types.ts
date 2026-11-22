type UsagenotificationRequest = {
  accountId: string
  calculatorIds: string[]
  coupon: string
  itemsCount: number
  orderId: string
  profileId: string
  used: boolean
}
type GetPromotions = {
  Campaigns?: string[] | undefined
  activateGiftsMultiplier?: boolean | undefined
  areSalesChannelIdsExclusive?: boolean | undefined
  beginDate?: string | undefined
  description?: string | undefined
  endDate?: string | undefined
  hasMaxPricePerItem?: boolean | undefined
  idCalculatorConfiguration?: string | undefined
  idsSalesChannel?: string[] | undefined
  isActive?: boolean | undefined
  isArchived?: boolean | undefined
  isTax?: boolean | undefined
  lastModifiedUtc?: string | undefined
  maxUsage?: number | undefined
  name?: string | undefined
  percentualTax?: number | undefined
  scope?:
    | {
        allCatalog?: boolean | undefined
        brands?: number | undefined
        brandsAreInclusive?: boolean | undefined
        categories?: number | undefined
        categoriesAreInclusive?: boolean | undefined
        collections?: number | undefined
        collectionsAreInclusive?: boolean | undefined
        products?: number | undefined
        productsAreInclusive?: boolean | undefined
        sellers?: number | undefined
        sellersAreInclusive?: boolean | undefined
        skus?: number | undefined
        skusAreInclusive?: boolean | undefined
      }
    | undefined
  status?: string | undefined
  type?: string | undefined
  utmCampain?: string | undefined
  utmSource?: string | undefined
  utmiCampaign?: string | undefined
}[]
type GetTaxes = {
  Campaigns?: string[] | undefined
  activateGiftsMultiplier?: boolean | undefined
  areSalesChannelIdsExclusive?: boolean | undefined
  beginDate?: string | undefined
  description?: string | undefined
  endDate?: string | undefined
  hasMaxPricePerItem?: boolean | undefined
  idCalculatorConfiguration?: string | undefined
  idsSalesChannel?: string[] | undefined
  isActive?: boolean | undefined
  isArchived?: boolean | undefined
  isTax?: boolean | undefined
  lastModifiedUtc?: string | undefined
  maxUsage?: number | undefined
  name?: string | undefined
  percentualTax?: number | undefined
  scope?:
    | {
        allCatalog?: boolean | undefined
        brands?: number | undefined
        brandsAreInclusive?: boolean | undefined
        categories?: number | undefined
        categoriesAreInclusive?: boolean | undefined
        collections?: number | undefined
        collectionsAreInclusive?: boolean | undefined
        products?: number | undefined
        productsAreInclusive?: boolean | undefined
        sellers?: number | undefined
        sellersAreInclusive?: boolean | undefined
        skus?: number | undefined
        skusAreInclusive?: boolean | undefined
      }
    | undefined
  status?: string | undefined
  type?: string | undefined
  utmCampain?: string | undefined
  utmSource?: string | undefined
  utmiCampaign?: string | undefined
}[]
type SavepriceRequest = {
  itemId: number
  listPrice: number
  price: number
  salesChannel: number
  sellerId: number
  validFrom: string
  validTo: string
}
type PricebycontextRequest = {
  id: number
  itemId: number
  salesChannel: number
  sellerId: string
  validFrom: string
  validTo: string
}
type Param = { name: string; value: string }
type Item = {
  id: string
  index: number
  isGift: boolean
  logisticsInfos: string[]
  measurementUnit: string
  params: Param[]
  priceSheet: string[]
  priceTags: string[]
  productSpecifications: string[]
  quantity: number
  sellerId: string
  unitMultiplier: number
}
type CalculatediscountsandtaxesBundlesRequest = {
  isShoppingCart: boolean
  items: Item[]
  origin: string
  params: Param[]
  profileId: string
  salesChannel: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/rnb/pub/notifications': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: UsagenotificationRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/rnb/pvt/archive/benefits/calculatorConfiguration': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: { items?: GetPromotions | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/rnb/pvt/archive/calculatorConfiguration/:idCalculatorConfiguration': {
      $post: {
        input: { param: { idCalculatorConfiguration: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/rnb/pvt/archive/coupon/:couponCode': {
      $get: {
        input: { param: { couponCode: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          couponCode?: string | undefined
          expirationIntervalPerUse?: string | undefined
          isArchived?: boolean | undefined
          lastModifiedUtc?: string | undefined
          maxItemsPerClient?: number | undefined
          utmCampaign?: string | undefined
          utmSource?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { couponCode: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/rnb/pvt/archive/taxes/calculatorConfiguration': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: { items?: GetTaxes | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/rnb/pvt/benefits/calculatorconfiguration': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: {
          archivedItems?: string[] | undefined
          disabledItems?: { [x: string]: unknown }[] | undefined
          items?: GetPromotions | undefined
          limitConfiguration?:
            | { activesCount?: number | undefined; limit?: number | undefined }
            | undefined
          limitConfigurationMaxPrice?:
            | { activesCount?: number | undefined; limit?: number | undefined }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/rnb/pvt/calculatorconfiguration': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: {
            absoluteShippingDiscountValue?: number | undefined
            accumulateWithManualPrice?: boolean | undefined
            activateGiftsMultiplier?: boolean | undefined
            activeDaysOfWeek?: string[] | undefined
            affiliates?: { id?: string | undefined; name?: string | undefined }[] | undefined
            applyToAllShippings?: boolean | undefined
            areSalesChannelIdsExclusive?: boolean | undefined
            beginDateUtc?: string | undefined
            brands?: { id?: string | undefined; name?: string | undefined }[] | undefined
            brandsAreInclusive?: boolean | undefined
            campaigns?: { [x: string]: unknown }[] | undefined
            cardIssuers?: { [x: string]: unknown }[] | undefined
            categories?: { id?: string | undefined; name?: string | undefined }[] | undefined
            categoriesAreInclusive?: boolean | undefined
            clusterExpressions?: string[] | undefined
            collections?: { id?: string | undefined; name?: string | undefined }[] | undefined
            collections1BuyTogether?: string[] | undefined
            collections2BuyTogether?: { [x: string]: unknown }[] | undefined
            collectionsIsInclusive?: boolean | undefined
            compareListPriceAndPrice?: boolean | undefined
            conditionsIds?: string[] | undefined
            coupon?: { [x: string]: unknown }[] | undefined
            cumulative?: boolean | undefined
            daysAgoOfPurchases?: number | undefined
            description?: string | undefined
            disableDeal?: boolean | undefined
            discountType?: string | undefined
            enableBuyTogetherPerSku?: boolean | undefined
            endDateUtc?: string | undefined
            firstBuyIsProfileOptimistic?: boolean | undefined
            giftListTypes?: string[] | undefined
            idCalculatorConfiguration?: string | undefined
            idSeller?: string | undefined
            idSellerIsInclusive?: boolean | undefined
            idsSalesChannel?: string[] | undefined
            installment?: number | undefined
            isActive?: boolean | undefined
            isArchived?: boolean | undefined
            isDifferentListPriceAndPrice?: boolean | undefined
            isFeatured?: boolean | undefined
            isFirstBuy?: boolean | undefined
            isMinMaxInstallments?: boolean | undefined
            isSlaSelected?: boolean | undefined
            itemMaxPrice?: number | undefined
            itemMinPrice?: number | undefined
            lastModified?: string | undefined
            listSku1BuyTogether?: { [x: string]: unknown }[] | undefined
            listSku2BuyTogether?: { [x: string]: unknown }[] | undefined
            marketingTags?: string[] | undefined
            marketingTagsAreNotInclusive?: boolean | undefined
            maxInstallment?: number | undefined
            maxNumberOfAffectedItems?: number | undefined
            maxNumberOfAffectedItemsGroupKey?: string | undefined
            maxPricesPerItems?: { [x: string]: unknown }[] | undefined
            maxUsage?: number | undefined
            maxUsagePerClient?: number | undefined
            maximumUnitPriceDiscount?: number | undefined
            merchants?: { [x: string]: unknown }[] | undefined
            minInstallment?: number | undefined
            minimumQuantityBuyTogether?: number | undefined
            multipleUsePerClient?: boolean | undefined
            name?: string | undefined
            newOffset?: number | undefined
            nominalDiscountValue?: number | undefined
            nominalRewardValue?: number | undefined
            nominalShippingDiscountValue?: number | undefined
            nominalTax?: number | undefined
            offset?: number | undefined
            orderStatusRewardValue?: string | undefined
            origin?: string | undefined
            paymentsMethods?: { id?: string | undefined; name?: string | undefined }[] | undefined
            paymentsRules?: { [x: string]: unknown }[] | undefined
            percentualDiscountValue?: number | undefined
            percentualDiscountValueList?: number[] | undefined
            percentualDiscountValueList1?: number | undefined
            percentualDiscountValueList2?: number | undefined
            percentualRewardValue?: number | undefined
            percentualShippingDiscountValue?: number | undefined
            percentualTax?: number | undefined
            products?: { id?: string | undefined; name?: string | undefined }[] | undefined
            productsAreInclusive?: boolean | undefined
            productsSpecifications?: { [x: string]: unknown }[] | undefined
            quantityToAffectBuyTogether?: number | undefined
            rebatePercentualDiscountValue?: number | undefined
            restrictionsBins?: string[] | undefined
            shippingPercentualTax?: number | undefined
            shouldDistributeDiscountAmongMatchedItems?: boolean | undefined
            skus?: { id?: string | undefined; name?: string | undefined }[] | undefined
            skusAreInclusive?: boolean | undefined
            skusGift?:
              | {
                  gifts?: { [x: string]: unknown }[] | undefined
                  quantitySelectable?: number | undefined
                }
              | undefined
            slasIds?: string[] | undefined
            stores?: { [x: string]: unknown }[] | undefined
            storesAreInclusive?: boolean | undefined
            totalValueCeling?: number | undefined
            totalValueFloor?: number | undefined
            totalValueIncludeAllItems?: boolean | undefined
            totalValueMode?: string | undefined
            totalValuePurchase?: number | undefined
            type?: string | undefined
            useNewProgressiveAlgorithm?: boolean | undefined
            utmCampaign?: string | undefined
            utmSource?: string | undefined
            zipCodeRanges?: { inclusive?: boolean | undefined }[] | undefined
          }
        }
        output: {
          absoluteShippingDiscountValue?: number | undefined
          accumulateWithManualPrice?: boolean | undefined
          activateGiftsMultiplier?: boolean | undefined
          activeDaysOfWeek?: string[] | undefined
          affiliates?: { id?: string | undefined; name?: string | undefined }[] | undefined
          applyToAllShippings?: boolean | undefined
          areSalesChannelIdsExclusive?: boolean | undefined
          beginDateUtc?: string | undefined
          brands?: { id?: string | undefined; name?: string | undefined }[] | undefined
          brandsAreInclusive?: boolean | undefined
          campaigns?: { [x: string]: unknown }[] | undefined
          cardIssuers?: { [x: string]: unknown }[] | undefined
          categories?: { id?: string | undefined; name?: string | undefined }[] | undefined
          categoriesAreInclusive?: boolean | undefined
          clusterExpressions?: string[] | undefined
          collections?: { id?: string | undefined; name?: string | undefined }[] | undefined
          collections1BuyTogether?: string[] | undefined
          collections2BuyTogether?: { [x: string]: unknown }[] | undefined
          collectionsIsInclusive?: boolean | undefined
          compareListPriceAndPrice?: boolean | undefined
          conditionsIds?: string[] | undefined
          coupon?: { [x: string]: unknown }[] | undefined
          cumulative?: boolean | undefined
          daysAgoOfPurchases?: number | undefined
          description?: string | undefined
          disableDeal?: boolean | undefined
          discountType?: string | undefined
          enableBuyTogetherPerSku?: boolean | undefined
          endDateUtc?: string | undefined
          firstBuyIsProfileOptimistic?: boolean | undefined
          giftListTypes?: string[] | undefined
          idCalculatorConfiguration?: string | undefined
          idSeller?: string | undefined
          idSellerIsInclusive?: boolean | undefined
          idsSalesChannel?: string[] | undefined
          installment?: number | undefined
          isActive?: boolean | undefined
          isArchived?: boolean | undefined
          isDifferentListPriceAndPrice?: boolean | undefined
          isFeatured?: boolean | undefined
          isFirstBuy?: boolean | undefined
          isMinMaxInstallments?: boolean | undefined
          isSlaSelected?: boolean | undefined
          itemMaxPrice?: number | undefined
          itemMinPrice?: number | undefined
          lastModified?: string | undefined
          listSku1BuyTogether?: { [x: string]: unknown }[] | undefined
          listSku2BuyTogether?: { [x: string]: unknown }[] | undefined
          marketingTags?: string[] | undefined
          marketingTagsAreNotInclusive?: boolean | undefined
          maxInstallment?: number | undefined
          maxNumberOfAffectedItems?: number | undefined
          maxNumberOfAffectedItemsGroupKey?: string | undefined
          maxPricesPerItems?: { [x: string]: unknown }[] | undefined
          maxUsage?: number | undefined
          maxUsagePerClient?: number | undefined
          maximumUnitPriceDiscount?: number | undefined
          merchants?: { [x: string]: unknown }[] | undefined
          minInstallment?: number | undefined
          minimumQuantityBuyTogether?: number | undefined
          multipleUsePerClient?: boolean | undefined
          name?: string | undefined
          newOffset?: number | undefined
          nominalDiscountValue?: number | undefined
          nominalRewardValue?: number | undefined
          nominalShippingDiscountValue?: number | undefined
          nominalTax?: number | undefined
          offset?: number | undefined
          orderStatusRewardValue?: string | undefined
          origin?: string | undefined
          paymentsMethods?: { id?: string | undefined; name?: string | undefined }[] | undefined
          paymentsRules?: { [x: string]: unknown }[] | undefined
          percentualDiscountValue?: number | undefined
          percentualDiscountValueList?: number[] | undefined
          percentualDiscountValueList1?: number | undefined
          percentualDiscountValueList2?: number | undefined
          percentualRewardValue?: number | undefined
          percentualShippingDiscountValue?: number | undefined
          percentualTax?: number | undefined
          products?: { id?: string | undefined; name?: string | undefined }[] | undefined
          productsAreInclusive?: boolean | undefined
          productsSpecifications?: { [x: string]: unknown }[] | undefined
          quantityToAffectBuyTogether?: number | undefined
          rebatePercentualDiscountValue?: number | undefined
          restrictionsBins?: string[] | undefined
          shippingPercentualTax?: number | undefined
          shouldDistributeDiscountAmongMatchedItems?: boolean | undefined
          skus?: { id?: string | undefined; name?: string | undefined }[] | undefined
          skusAreInclusive?: boolean | undefined
          skusGift?:
            | { gifts?: number | undefined; quantitySelectable?: number | undefined }
            | undefined
          slasIds?: string[] | undefined
          stores?: { [x: string]: unknown }[] | undefined
          storesAreInclusive?: boolean | undefined
          totalValueCeling?: number | undefined
          totalValueFloor?: number | undefined
          totalValueIncludeAllItems?: boolean | undefined
          totalValueMode?: string | undefined
          totalValuePurchase?: number | undefined
          type?: string | undefined
          useNewProgressiveAlgorithm?: boolean | undefined
          utmCampaign?: string | undefined
          utmSource?: string | undefined
          zipCodeRanges?: { [x: string]: unknown }[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/rnb/pvt/calculatorconfiguration/:idCalculatorConfiguration': {
      $get:
        | {
            input: { param: { idCalculatorConfiguration: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: {
              absoluteShippingDiscountValue?: number | undefined
              accumulateWithManualPrice?: boolean | undefined
              activateGiftsMultiplier?: boolean | undefined
              activeDaysOfWeek?: string[] | undefined
              affiliates?: { id?: string | undefined; name?: string | undefined }[] | undefined
              applyToAllShippings?: boolean | undefined
              areSalesChannelIdsExclusive?: boolean | undefined
              beginDateUtc?: string | undefined
              brands?: { id?: string | undefined; name?: string | undefined }[] | undefined
              brandsAreInclusive?: boolean | undefined
              campaigns?: { [x: string]: unknown }[] | undefined
              cardIssuers?: { [x: string]: unknown }[] | undefined
              categories?: { id?: string | undefined; name?: string | undefined }[] | undefined
              categoriesAreInclusive?: boolean | undefined
              clusterExpressions?: string[] | undefined
              collections?: { id?: string | undefined; name?: string | undefined }[] | undefined
              collections1BuyTogether?: string[] | undefined
              collections2BuyTogether?: { [x: string]: unknown }[] | undefined
              collectionsIsInclusive?: boolean | undefined
              compareListPriceAndPrice?: boolean | undefined
              conditionsIds?: string[] | undefined
              coupon?: { [x: string]: unknown }[] | undefined
              cumulative?: boolean | undefined
              daysAgoOfPurchases?: number | undefined
              description?: string | undefined
              disableDeal?: boolean | undefined
              discountType?: string | undefined
              enableBuyTogetherPerSku?: boolean | undefined
              endDateUtc?: string | undefined
              firstBuyIsProfileOptimistic?: boolean | undefined
              giftListTypes?: string[] | undefined
              idCalculatorConfiguration?: string | undefined
              idSeller?: string | undefined
              idSellerIsInclusive?: boolean | undefined
              idsSalesChannel?: string[] | undefined
              installment?: number | undefined
              isActive?: boolean | undefined
              isArchived?: boolean | undefined
              isDifferentListPriceAndPrice?: boolean | undefined
              isFeatured?: boolean | undefined
              isFirstBuy?: boolean | undefined
              isMinMaxInstallments?: boolean | undefined
              isSlaSelected?: boolean | undefined
              itemMaxPrice?: number | undefined
              itemMinPrice?: number | undefined
              lastModified?: string | undefined
              listSku1BuyTogether?: { [x: string]: unknown }[] | undefined
              listSku2BuyTogether?: { [x: string]: unknown }[] | undefined
              marketingTags?: string[] | undefined
              marketingTagsAreNotInclusive?: boolean | undefined
              maxInstallment?: number | undefined
              maxNumberOfAffectedItems?: number | undefined
              maxNumberOfAffectedItemsGroupKey?: string | undefined
              maxPricesPerItems?: { [x: string]: unknown }[] | undefined
              maxUsage?: number | undefined
              maxUsagePerClient?: number | undefined
              maximumUnitPriceDiscount?: number | undefined
              merchants?: { [x: string]: unknown }[] | undefined
              minInstallment?: number | undefined
              minimumQuantityBuyTogether?: number | undefined
              multipleSkusCause?: { [x: string]: string } | undefined
              multipleUsePerClient?: boolean | undefined
              name?: string | undefined
              newOffset?: number | undefined
              nominalDiscountValue?: number | undefined
              nominalRewardValue?: number | undefined
              nominalShippingDiscountValue?: number | undefined
              nominalTax?: number | undefined
              offset?: number | undefined
              orderStatusRewardValue?: string | undefined
              origin?: string | undefined
              paymentsMethods?: { id?: string | undefined; name?: string | undefined }[] | undefined
              paymentsRules?: { [x: string]: unknown }[] | undefined
              percentualDiscountValue?: number | undefined
              percentualDiscountValueList?: number[] | undefined
              percentualDiscountValueList1?: number | undefined
              percentualDiscountValueList2?: number | undefined
              percentualRewardValue?: number | undefined
              percentualShippingDiscountValue?: number | undefined
              percentualTax?: number | undefined
              products?: { id?: string | undefined; name?: string | undefined }[] | undefined
              productsAreInclusive?: boolean | undefined
              productsSpecifications?: { [x: string]: unknown }[] | undefined
              quantityToAffectBuyTogether?: number | undefined
              rebatePercentualDiscountValue?: number | undefined
              restrictionsBins?: string[] | undefined
              shippingPercentualTax?: number | undefined
              shouldDistributeDiscountAmongMatchedItems?: boolean | undefined
              skus?: { id?: string | undefined; name?: string | undefined }[] | undefined
              skusAreInclusive?: boolean | undefined
              skusGift?:
                | { gifts?: number | undefined; quantitySelectable?: number | undefined }
                | undefined
              slasIds?: string[] | undefined
              stores?: { [x: string]: unknown }[] | undefined
              storesAreInclusive?: boolean | undefined
              totalValueCeling?: number | undefined
              totalValueFloor?: number | undefined
              totalValueIncludeAllItems?: boolean | undefined
              totalValueMode?: string | undefined
              totalValuePurchase?: number | undefined
              type?: string | undefined
              useNewProgressiveAlgorithm?: boolean | undefined
              utmCampaign?: string | undefined
              utmSource?: string | undefined
              zipCodeRanges?:
                | {
                    inclusive?: boolean | undefined
                    zipCodeFrom?: string | undefined
                    zipCodeTo?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { idCalculatorConfiguration: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: {
              absoluteShippingDiscountValue?: number | undefined
              activateGiftsMultiplier?: boolean | undefined
              activeDaysOfWeek?: string[] | undefined
              affiliates?: { id?: string | undefined; name?: string | undefined }[] | undefined
              applyToAllShippings?: boolean | undefined
              areSalesChannelIdsExclusive?: boolean | undefined
              beginDateUtc?: string | undefined
              brands?: { id?: string | undefined; name?: string | undefined }[] | undefined
              brandsAreInclusive?: boolean | undefined
              campaigns?: string[] | undefined
              cardIssuers?: { [x: string]: unknown }[] | undefined
              categories?: { id?: string | undefined; name?: string | undefined }[] | undefined
              categoriesAreInclusive?: boolean | undefined
              clusterExpressions?: string[] | undefined
              collections?: { id?: string | undefined; name?: string | undefined }[] | undefined
              collections1BuyTogether?: string[] | undefined
              collections2BuyTogether?: { [x: string]: unknown }[] | undefined
              collectionsIsInclusive?: boolean | undefined
              compareListPriceAndPrice?: boolean | undefined
              coupon?: { [x: string]: unknown }[] | undefined
              cumulative?: boolean | undefined
              daysAgoOfPurchases?: number | undefined
              description?: string | undefined
              disableDeal?: boolean | undefined
              enableBuyTogetherPerSku?: boolean | undefined
              endDateUtc?: string | undefined
              firstBuyIsProfileOptimistic?: boolean | undefined
              giftListTypes?: string[] | undefined
              idCalculatorConfiguration?: string | undefined
              idSeller?: string | undefined
              idSellerIsInclusive?: boolean | undefined
              idsSalesChannel?: string[] | undefined
              installment?: number | undefined
              isActive?: boolean | undefined
              isArchived?: boolean | undefined
              isDifferentListPriceAndPrice?: boolean | undefined
              isFeatured?: boolean | undefined
              isFirstBuy?: boolean | undefined
              isMinMaxInstallments?: boolean | undefined
              isSlaSelected?: boolean | undefined
              itemMaxPrice?: number | undefined
              itemMinPrice?: number | undefined
              lastModified?: string | undefined
              listSku1BuyTogether?: number[] | undefined
              listSku2BuyTogether?: number[] | undefined
              marketingTags?: string[] | undefined
              marketingTagsAreNotInclusive?: boolean | undefined
              maxInstallment?: number | undefined
              maxNumberOfAffectedItems?: number | undefined
              maxNumberOfAffectedItemsGroupKey?: string | undefined
              maxPricesPerItems?: { [x: string]: unknown }[] | undefined
              maxUsage?: number | undefined
              maxUsagePerClient?: number | undefined
              maximumUnitPriceDiscount?: number | undefined
              merchants?: { [x: string]: unknown }[] | undefined
              minInstallment?: number | undefined
              minimumQuantityBuyTogether?: number | undefined
              multipleUsePerClient?: boolean | undefined
              name?: string | undefined
              newOffset?: number | undefined
              nominalDiscountValue?: number | undefined
              nominalRewardValue?: number | undefined
              nominalShippingDiscountValue?: number | undefined
              nominalTax?: number | undefined
              offset?: number | undefined
              orderStatusRewardValue?: string | undefined
              origin?: string | undefined
              paymentsMethods?: { id?: string | undefined; name?: string | undefined }[] | undefined
              paymentsRules?: { [x: string]: unknown }[] | undefined
              percentualDiscountValue?: number | undefined
              percentualDiscountValueList?: number[] | undefined
              percentualDiscountValueList1?: number | undefined
              percentualDiscountValueList2?: number | undefined
              percentualRewardValue?: number | undefined
              percentualShippingDiscountValue?: number | undefined
              percentualTax?: number | undefined
              products?: { id?: string | undefined; name?: string | undefined }[] | undefined
              productsAreInclusive?: boolean | undefined
              productsSpecifications?: { [x: string]: unknown }[] | undefined
              quantityToAffectBuyTogether?: number | undefined
              rebatePercentualDiscountValue?: number | undefined
              restrictionsBins?: string[] | undefined
              shippingPercentualTax?: number | undefined
              shouldDistributeDiscountAmongMatchedItems?: boolean | undefined
              skus?: { id?: string | undefined; name?: string | undefined }[] | undefined
              skusAreInclusive?: boolean | undefined
              skusGift?:
                | { gifts?: number | undefined; quantitySelectable?: number | undefined }
                | undefined
              slasIds?: string[] | undefined
              stores?: { [x: string]: unknown }[] | undefined
              storesAreInclusive?: boolean | undefined
              totalValueCeling?: number | undefined
              totalValueFloor?: number | undefined
              totalValueIncludeAllItems?: boolean | undefined
              totalValueMode?: string | undefined
              totalValuePurchase?: number | undefined
              type?: string | undefined
              useNewProgressiveAlgorithm?: boolean | undefined
              zipCodeRanges?:
                | {
                    inclusive?: boolean | undefined
                    zipCodeFrom?: string | undefined
                    zipCodeTo?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/rnb/pvt/campaignConfiguration': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: {
          beginDateUtc?: string | undefined
          endDateUtc?: string | undefined
          id?: string | undefined
          isActive?: boolean | undefined
          isAndOperator?: boolean | undefined
          isArchived?: boolean | undefined
          lastModified?: { dateUtc?: string | undefined; user?: string | undefined } | undefined
          name?: string | undefined
          targetConfigurations?:
            | {
                affiliates?: { id?: string | undefined; name?: string | undefined }[] | undefined
                areSalesChannelIdsExclusive?: boolean | undefined
                brands?: { id?: string | undefined; name?: string | undefined }[] | undefined
                brandsAreInclusive?: boolean | undefined
                campaigns?: { [x: string]: unknown }[] | undefined
                cardIssuers?: { [x: string]: unknown }[] | undefined
                categories?: { id?: string | undefined; name?: string | undefined }[] | undefined
                categoriesAreInclusive?: boolean | undefined
                clusterExpressions?: string[] | undefined
                clusterOperator?: string | undefined
                collections?: { id?: string | undefined; name?: string | undefined }[] | undefined
                collections1BuyTogether?: string[] | undefined
                collections2BuyTogether?: { [x: string]: unknown }[] | undefined
                collectionsIsInclusive?: boolean | undefined
                compareListPriceAndPrice?: boolean | undefined
                coupon?: { [x: string]: unknown }[] | undefined
                daysAgoOfPurchases?: number | undefined
                enableBuyTogetherPerSku?: boolean | undefined
                featured?: boolean | undefined
                firstBuyIsProfileOptimistic?: boolean | undefined
                giftListTypes?: string[] | undefined
                id?: string | undefined
                idSellerIsInclusive?: boolean | undefined
                idsSalesChannel?: string[] | undefined
                installment?: number | undefined
                isDifferentListPriceAndPrice?: boolean | undefined
                isFirstBuy?: boolean | undefined
                isMinMaxInstallments?: boolean | undefined
                isSlaSelected?: boolean | undefined
                itemMaxPrice?: number | undefined
                itemMinPrice?: number | undefined
                listBrand1BuyTogether?: { [x: string]: unknown }[] | undefined
                listCategory1BuyTogether?: { [x: string]: unknown }[] | undefined
                listSku1BuyTogether?: { [x: string]: unknown }[] | undefined
                listSku2BuyTogether?: { [x: string]: unknown }[] | undefined
                marketingTags?: string[] | undefined
                marketingTagsAreNotInclusive?: boolean | undefined
                maxInstallment?: number | undefined
                maxUsage?: number | undefined
                maxUsagePerClient?: number | undefined
                merchants?: { [x: string]: unknown }[] | undefined
                minInstallment?: number | undefined
                minimumQuantityBuyTogether?: number | undefined
                multipleUsePerClient?: boolean | undefined
                name?: string | undefined
                origin?: string | undefined
                paymentsMethods?:
                  | { id?: string | undefined; name?: string | undefined }[]
                  | undefined
                paymentsRules?: { [x: string]: unknown }[] | undefined
                percentualDiscountValueList?: number[] | undefined
                products?: { id?: string | undefined; name?: string | undefined }[] | undefined
                productsAreInclusive?: boolean | undefined
                productsSpecifications?: { [x: string]: unknown }[] | undefined
                quantityToAffectBuyTogether?: number | undefined
                restrictionsBins?: string[] | undefined
                shouldDistributeDiscountAmongMatchedItems?: boolean | undefined
                skus?: { id?: string | undefined; name?: string | undefined }[] | undefined
                skusAreInclusive?: boolean | undefined
                slasIds?: string[] | undefined
                stores?: { [x: string]: unknown }[] | undefined
                storesAreInclusive?: boolean | undefined
                totalValueCeling?: number | undefined
                totalValueFloor?: number | undefined
                totalValueIncludeAllItems?: boolean | undefined
                totalValueMode?: string | undefined
                totalValuePurchase?: number | undefined
                useNewProgressiveAlgorithm?: boolean | undefined
                zipCodeRanges?: { inclusive?: boolean | undefined }[] | undefined
              }[]
            | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: {
            beginDateUtc?: string | undefined
            endDateUtc?: string | undefined
            id?: string | undefined
            isActive?: boolean | undefined
            isAndOperator?: boolean | undefined
            isArchived?: boolean | undefined
            lastModified?: { dateUtc?: string | undefined; user?: string | undefined } | undefined
            name?: string | undefined
            targetConfigurations?:
              | {
                  affiliates?: { id?: string | undefined; name?: string | undefined }[] | undefined
                  areSalesChannelIdsExclusive?: boolean | undefined
                  brands?: { id?: string | undefined; name?: string | undefined }[] | undefined
                  brandsAreInclusive?: boolean | undefined
                  campaigns?: { [x: string]: unknown }[] | undefined
                  cardIssuers?: { [x: string]: unknown }[] | undefined
                  categories?: { id?: string | undefined; name?: string | undefined }[] | undefined
                  categoriesAreInclusive?: boolean | undefined
                  clusterExpressions?: string[] | undefined
                  clusterOperator?: string | undefined
                  collections?: { id?: string | undefined; name?: string | undefined }[] | undefined
                  collections1BuyTogether?: string[] | undefined
                  collections2BuyTogether?: { [x: string]: unknown }[] | undefined
                  collectionsIsInclusive?: boolean | undefined
                  compareListPriceAndPrice?: boolean | undefined
                  coupon?: { [x: string]: unknown }[] | undefined
                  daysAgoOfPurchases?: number | undefined
                  enableBuyTogetherPerSku?: boolean | undefined
                  featured?: boolean | undefined
                  firstBuyIsProfileOptimistic?: boolean | undefined
                  giftListTypes?: string[] | undefined
                  id?: string | undefined
                  idSellerIsInclusive?: boolean | undefined
                  idsSalesChannel?: string[] | undefined
                  installment?: number | undefined
                  isDifferentListPriceAndPrice?: boolean | undefined
                  isFirstBuy?: boolean | undefined
                  isMinMaxInstallments?: boolean | undefined
                  isSlaSelected?: boolean | undefined
                  itemMaxPrice?: number | undefined
                  itemMinPrice?: number | undefined
                  listBrand1BuyTogether?: { [x: string]: unknown }[] | undefined
                  listCategory1BuyTogether?:
                    | { id?: string | undefined; name?: string | undefined }[]
                    | undefined
                  listSku1BuyTogether?: { [x: string]: unknown }[] | undefined
                  listSku2BuyTogether?: { [x: string]: unknown }[] | undefined
                  marketingTags?: string[] | undefined
                  marketingTagsAreNotInclusive?: boolean | undefined
                  maxInstallment?: number | undefined
                  maxUsage?: number | undefined
                  maxUsagePerClient?: number | undefined
                  merchants?: { [x: string]: unknown }[] | undefined
                  minInstallment?: number | undefined
                  minimumQuantityBuyTogether?: number | undefined
                  multipleUsePerClient?: boolean | undefined
                  name?: string | undefined
                  origin?: string | undefined
                  paymentsMethods?:
                    | { id?: string | undefined; name?: string | undefined }[]
                    | undefined
                  paymentsRules?: { [x: string]: unknown }[] | undefined
                  percentualDiscountValueList?: number[] | undefined
                  products?: { id?: string | undefined; name?: string | undefined }[] | undefined
                  productsAreInclusive?: boolean | undefined
                  productsSpecifications?: { [x: string]: unknown }[] | undefined
                  quantityToAffectBuyTogether?: number | undefined
                  restrictionsBins?: string[] | undefined
                  shouldDistributeDiscountAmongMatchedItems?: boolean | undefined
                  skus?: { id?: string | undefined; name?: string | undefined }[] | undefined
                  skusAreInclusive?: boolean | undefined
                  slasIds?: string[] | undefined
                  stores?: { [x: string]: unknown }[] | undefined
                  storesAreInclusive?: boolean | undefined
                  totalValueCeling?: number | undefined
                  totalValueFloor?: number | undefined
                  totalValueIncludeAllItems?: boolean | undefined
                  totalValueMode?: string | undefined
                  totalValuePurchase?: number | undefined
                  useNewProgressiveAlgorithm?: boolean | undefined
                  zipCodeRanges?: { inclusive?: boolean | undefined }[] | undefined
                }[]
              | undefined
          }
        }
        output: {
          beginDateUtc?: string | undefined
          endDateUtc?: string | undefined
          id?: string | undefined
          isActive?: boolean | undefined
          isAndOperator?: boolean | undefined
          isArchived?: boolean | undefined
          lastModified?: { dateUtc?: string | undefined; user?: string | undefined } | undefined
          name?: string | undefined
          targetConfigurations?:
            | {
                affiliates?: { id?: string | undefined; name?: string | undefined }[] | undefined
                areSalesChannelIdsExclusive?: boolean | undefined
                brands?: { id?: string | undefined; name?: string | undefined }[] | undefined
                brandsAreInclusive?: boolean | undefined
                campaigns?: { [x: string]: unknown }[] | undefined
                cardIssuers?: { [x: string]: unknown }[] | undefined
                categories?: { id?: string | undefined; name?: string | undefined }[] | undefined
                categoriesAreInclusive?: boolean | undefined
                clusterExpressions?: string[] | undefined
                clusterOperator?: string | undefined
                collections?: { id?: string | undefined; name?: string | undefined }[] | undefined
                collections1BuyTogether?: string[] | undefined
                collections2BuyTogether?: { [x: string]: unknown }[] | undefined
                collectionsIsInclusive?: boolean | undefined
                compareListPriceAndPrice?: boolean | undefined
                coupon?: { [x: string]: unknown }[] | undefined
                daysAgoOfPurchases?: number | undefined
                enableBuyTogetherPerSku?: boolean | undefined
                featured?: boolean | undefined
                firstBuyIsProfileOptimistic?: boolean | undefined
                giftListTypes?: string[] | undefined
                id?: string | undefined
                idSellerIsInclusive?: boolean | undefined
                idsSalesChannel?: string[] | undefined
                installment?: number | undefined
                isDifferentListPriceAndPrice?: boolean | undefined
                isFirstBuy?: boolean | undefined
                isMinMaxInstallments?: boolean | undefined
                isSlaSelected?: boolean | undefined
                itemMaxPrice?: number | undefined
                itemMinPrice?: number | undefined
                listBrand1BuyTogether?: { [x: string]: unknown }[] | undefined
                listCategory1BuyTogether?: { [x: string]: unknown }[] | undefined
                listSku1BuyTogether?: { [x: string]: unknown }[] | undefined
                listSku2BuyTogether?: { [x: string]: unknown }[] | undefined
                marketingTags?: string[] | undefined
                marketingTagsAreNotInclusive?: boolean | undefined
                maxInstallment?: number | undefined
                maxUsage?: number | undefined
                maxUsagePerClient?: number | undefined
                merchants?: { [x: string]: unknown }[] | undefined
                minInstallment?: number | undefined
                minimumQuantityBuyTogether?: number | undefined
                multipleUsePerClient?: boolean | undefined
                name?: string | undefined
                origin?: string | undefined
                paymentsMethods?:
                  | { id?: string | undefined; name?: string | undefined }[]
                  | undefined
                paymentsRules?: { [x: string]: unknown }[] | undefined
                percentualDiscountValueList?: number[] | undefined
                products?: { id?: string | undefined; name?: string | undefined }[] | undefined
                productsAreInclusive?: boolean | undefined
                productsSpecifications?: { [x: string]: unknown }[] | undefined
                quantityToAffectBuyTogether?: number | undefined
                restrictionsBins?: string[] | undefined
                shouldDistributeDiscountAmongMatchedItems?: boolean | undefined
                skus?: { id?: string | undefined; name?: string | undefined }[] | undefined
                skusAreInclusive?: boolean | undefined
                slasIds?: string[] | undefined
                stores?: { [x: string]: unknown }[] | undefined
                storesAreInclusive?: boolean | undefined
                totalValueCeling?: number | undefined
                totalValueFloor?: number | undefined
                totalValueIncludeAllItems?: boolean | undefined
                totalValueMode?: string | undefined
                totalValuePurchase?: number | undefined
                useNewProgressiveAlgorithm?: boolean | undefined
                zipCodeRanges?: { inclusive?: boolean | undefined }[] | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/rnb/pvt/campaignConfiguration/:campaignId': {
      $get: {
        input: { param: { campaignId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          beginDateUtc?: string | undefined
          endDateUtc?: string | undefined
          id?: string | undefined
          isActive?: boolean | undefined
          isAndOperator?: boolean | undefined
          isArchived?: boolean | undefined
          lastModified?: { dateUtc?: string | undefined; user?: string | undefined } | undefined
          name?: string | undefined
          targetConfigurations?:
            | {
                affiliates?: { id?: string | undefined; name?: string | undefined }[] | undefined
                areSalesChannelIdsExclusive?: boolean | undefined
                brands?: { id?: string | undefined; name?: string | undefined }[] | undefined
                brandsAreInclusive?: boolean | undefined
                campaigns?: { [x: string]: unknown }[] | undefined
                cardIssuers?: { [x: string]: unknown }[] | undefined
                categories?: { id?: string | undefined; name?: string | undefined }[] | undefined
                categoriesAreInclusive?: boolean | undefined
                clusterExpressions?: string[] | undefined
                collections?: { id?: string | undefined; name?: string | undefined }[] | undefined
                collections1BuyTogether?: string[] | undefined
                collections2BuyTogether?: { [x: string]: unknown }[] | undefined
                collectionsIsInclusive?: boolean | undefined
                compareListPriceAndPrice?: boolean | undefined
                coupon?: { [x: string]: unknown }[] | undefined
                daysAgoOfPurchases?: number | undefined
                enableBuyTogetherPerSku?: boolean | undefined
                featured?: boolean | undefined
                firstBuyIsProfileOptimistic?: boolean | undefined
                giftListTypes?: string[] | undefined
                id?: string | undefined
                idSellerIsInclusive?: boolean | undefined
                idsSalesChannel?: string[] | undefined
                installment?: number | undefined
                isDifferentListPriceAndPrice?: boolean | undefined
                isFirstBuy?: boolean | undefined
                isMinMaxInstallments?: boolean | undefined
                isSlaSelected?: boolean | undefined
                itemMaxPrice?: number | undefined
                itemMinPrice?: number | undefined
                listBrand1BuyTogether?: { [x: string]: unknown }[] | undefined
                listCategory1BuyTogether?: { [x: string]: unknown }[] | undefined
                listSku1BuyTogether?: { [x: string]: unknown }[] | undefined
                listSku2BuyTogether?: { [x: string]: unknown }[] | undefined
                marketingTags?: string[] | undefined
                marketingTagsAreNotInclusive?: boolean | undefined
                maxInstallment?: number | undefined
                maxUsage?: number | undefined
                maxUsagePerClient?: number | undefined
                merchants?: { [x: string]: unknown }[] | undefined
                minInstallment?: number | undefined
                minimumQuantityBuyTogether?: number | undefined
                multipleUsePerClient?: boolean | undefined
                name?: string | undefined
                origin?: string | undefined
                paymentsMethods?:
                  | { id?: string | undefined; name?: string | undefined }[]
                  | undefined
                paymentsRules?: { [x: string]: unknown }[] | undefined
                percentualDiscountValueList?: number[] | undefined
                products?: { id?: string | undefined; name?: string | undefined }[] | undefined
                productsAreInclusive?: boolean | undefined
                productsSpecifications?: { [x: string]: unknown }[] | undefined
                quantityToAffectBuyTogether?: number | undefined
                restrictionsBins?: string[] | undefined
                shouldDistributeDiscountAmongMatchedItems?: boolean | undefined
                skus?: { id?: string | undefined; name?: string | undefined }[] | undefined
                skusAreInclusive?: boolean | undefined
                slasIds?: string[] | undefined
                stores?: { [x: string]: unknown }[] | undefined
                storesAreInclusive?: boolean | undefined
                totalValueCeling?: number | undefined
                totalValueFloor?: number | undefined
                totalValueIncludeAllItems?: boolean | undefined
                totalValueMode?: string | undefined
                totalValuePurchase?: number | undefined
                useNewProgressiveAlgorithm?: boolean | undefined
                zipCodeRanges?: { inclusive?: boolean | undefined }[] | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/rnb/pvt/coupon': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: {
          couponCode?: string | undefined
          expirationIntervalPerUse?: string | undefined
          isArchived?: boolean | undefined
          lastModifiedUtc?: string | undefined
          maxItemsPerClient?: number | undefined
          utmCampaign?: string | undefined
          utmSource?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: {
            couponCode: string
            expirationIntervalPerUse: string
            isArchived: boolean
            maxItemsPerClient: number
            utmCampaign: string
            utmSource: string
          }
        }
        output: {
          couponCode?: string | undefined
          expirationIntervalPerUse?: string | undefined
          isArchived?: boolean | undefined
          lastModifiedUtc?: string | undefined
          maxItemsPerClient?: number | undefined
          utmCampaign?: string | undefined
          utmSource?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/rnb/pvt/coupon/': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: {
            couponCode: string
            expirationIntervalPerUse: string
            maxItemsPerClient: number
            utmCampaign?: string | undefined
            utmSource: string
          }
        }
        output: {
          couponCode?: string | undefined
          expirationIntervalPerUse?: string | undefined
          isArchived?: boolean | undefined
          lastModifiedUtc?: string | undefined
          maxItemsPerClient?: number | undefined
          utmCampaign?: string | undefined
          utmSource?: string | undefined
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/rnb/pvt/coupon/usage/:couponCode': {
      $get: {
        input: { param: { couponCode: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          couponCode?: string | undefined
          hostName?: string | undefined
          profileUsages?:
            | {
                profileId?:
                  | {
                      orderUsage?:
                        | { orderId?: string | undefined; usageDateUtc?: string | undefined }[]
                        | undefined
                    }
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/rnb/pvt/coupon/:couponCode': {
      $get: {
        input: { param: { couponCode: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          couponCode?: string | undefined
          expirationIntervalPerUse?: string | undefined
          isArchived?: boolean | undefined
          lastModifiedUtc?: string | undefined
          maxItemsPerClient?: number | undefined
          utmCampaign?: string | undefined
          utmSource?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/rnb/pvt/coupons': {
      $post: {
        input: { query: { quantity: number } } & {
          header: { 'Content-Type': string; Accept: string }
        } & {
          json: {
            couponCode: string
            expirationIntervalPerUse: string
            maxItemsPerClient: number
            utmCampaign: string
            utmSource: string
          }
        }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/rnb/pvt/import/calculatorConfiguration': {
      $post: {
        input: {
          header: {
            'Content-Type': string
            Accept: string
            'X-VTEX-calculator-name': string
            'X-VTEX-cumulative'?: boolean | undefined
            'X-VTEX-cluster-operator'?: string | undefined
            'X-VTEX-cluster-expression'?: string | undefined
            'X-VTEX-start-date': string
            'X-VTEX-end-date': string
            'X-VTEX-accumulate-with-manual-prices': boolean
          }
        } & { json: File }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/rnb/pvt/import/calculatorConfiguration/:promotionId': {
      $put: {
        input: { param: { promotionId: string } } & {
          header: {
            'Content-Type': string
            Accept: string
            'X-VTEX-calculator-name': string
            'X-VTEX-cumulative'?: boolean | undefined
            'X-VTEX-cluster-operator'?: string | undefined
            'X-VTEX-cluster-expression'?: string | undefined
            'X-VTEX-start-date': string
            'X-VTEX-end-date': string
            'X-VTEX-accumulate-with-manual-prices': boolean
          }
        } & { json: File }
        output: {}
        outputFormat: string
        status: 202
      }
    }
  } & {
    '/api/rnb/pvt/multiple-coupons': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: {
            couponConfiguration: {
              couponCode: string
              expirationIntervalPerUse: string
              isArchived?: boolean | undefined
              maxItemsPerClient: number
              utmCampaign: string
              utmSource: string
            }
            quantity: number
          }[]
        }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/rnb/pvt/taxes/calculatorconfiguration': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: {
          archivedItems?: string[] | undefined
          disabledItems?: string[] | undefined
          items?: GetTaxes | undefined
          limitConfiguration?:
            | { activesCount?: number | undefined; limit?: number | undefined }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/rnb/pvt/unarchive/calculatorConfiguration/:idCalculatorConfiguration': {
      $post: {
        input: { param: { idCalculatorConfiguration: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/rnb/pvt/unarchive/coupon/:couponCode': {
      $post: {
        input: { param: { couponCode: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/price-sheet': {
      $post: {
        input: { query: { an: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: SavepriceRequest[] }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/price-sheet/all/:page/:pageSize': {
      $get: {
        input: { param: { page: string; pageSize: string } } & { query: { an: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/price-sheet/context': {
      $post: {
        input: { query: { an: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: PricebycontextRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/price-sheet/:skuId': {
      $delete: {
        input: { param: { skuId: string } } & { query: { an: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { skuId: string } } & { query: { an: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/price-sheet/:skuId/:tradePolicy': {
      $get: {
        input: { param: { skuId: string; tradePolicy: string } } & { query: { an: string } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/pub/bundles': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: CalculatediscountsandtaxesBundlesRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
