type SetsinglecustomfieldvalueRequest = { value: string }
type PriceChangeRequest = { price: number }
type PaymentConfiguration = {
  allowInstallmentsMerge?: boolean | undefined
  requiresAuthenticationForPreAuthorizedPaymentOption: boolean
}
type UpdateorderFormconfigurationRequest = {
  allowManualPrice: boolean | null
  allowMultipleDeliveries: boolean | null
  apps:
    | { fields?: string[] | undefined; id?: string | undefined; major?: number | undefined }[]
    | null
  decimalDigitsPrecision: number
  maskFirstPurchaseData?: boolean | undefined
  maxNumberOfWhiteLabelSellers?: number | undefined
  minimumQuantityAccumulatedForItems: number
  minimumValueAccumulated: number | null
  paymentConfiguration: PaymentConfiguration
  paymentSystemToCheckFirstInstallment?: string | undefined
  recaptchaValidation?: string | undefined
  taxConfiguration: {
    appId?: string | undefined
    authorizationHeader?: (string | null) | undefined
    url?: (string | null) | undefined
  } | null
}
type WaitingTime = { waitingTime: number }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/checkout/pub/gatewayCallback/:orderGroup': {
      $post:
        | {
            input: { param: { orderGroup: string } } & {
              header: { 'Content-Type': string; Accept: string; Cookie: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { orderGroup: string } } & {
              header: { 'Content-Type': string; Accept: string; Cookie: string }
            }
            output: {
              error?:
                | {
                    code?: string | undefined
                    exception?: (string | null) | undefined
                    message?: string | undefined
                  }
                | undefined
              operationId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/checkout/pub/orderForm': {
      $get: {
        input: { query: { forceNewCart?: boolean | undefined } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/checkout/pub/orderForm/:orderFormId': {
      $get: {
        input: { param: { orderFormId: string } } & {
          query: { refreshOutdatedData?: boolean | undefined }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/checkout/pub/orderForm/:orderFormId/attachments/clientPreferencesData': {
      $post: {
        input: { param: { orderFormId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: { locale?: string | undefined; optinNewsLetter?: boolean | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/checkout/pub/orderForm/:orderFormId/attachments/clientProfileData': {
      $post: {
        input: { param: { orderFormId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & {
          json: {
            corporateDocument?: string | undefined
            corporateName?: string | undefined
            corporatePhone?: string | undefined
            document: string
            documentType: string
            email: string
            firstName: string
            isCorporate?: boolean | undefined
            lastName: string
            phone?: string | undefined
            stateInscription?: string | undefined
            tradeName?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/checkout/pub/orderForm/:orderFormId/attachments/marketingData': {
      $post: {
        input: { param: { orderFormId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & {
          json: {
            coupon?: string | undefined
            marketingTags?: string[] | undefined
            utmCampaign?: string | undefined
            utmMedium?: string | undefined
            utmSource?: string | undefined
            utmiCampaign?: string | undefined
            utmiPage?: string | undefined
            utmiPart?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/checkout/pub/orderForm/:orderFormId/attachments/merchantContextData': {
      $post: {
        input: { param: { orderFormId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: { salesAssociateData: { salesAssociateId?: string | undefined } } }
        output: { salesAssociateId?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/checkout/pub/orderForm/:orderFormId/attachments/paymentData': {
      $post: {
        input: { param: { orderFormId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & {
          json: {
            payments?:
              | {
                  group?: string | undefined
                  hasDefaultBillingAddress?: boolean | undefined
                  installments?: number | undefined
                  installmentsInterestRate?: number | undefined
                  installmentsValue?: number | undefined
                  paymentSystem?: number | undefined
                  paymentSystemName?: string | undefined
                  referenceValue?: number | undefined
                  value?: number | undefined
                }[]
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/checkout/pub/orderForm/:orderFormId/attachments/shippingData': {
      $post: {
        input: { param: { orderFormId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & {
          json: {
            clearAddressIfPostalCodeNotFound?: boolean | undefined
            logisticsInfo?:
              | {
                  itemIndex?: number | undefined
                  selectedDeliveryChannel?: string | undefined
                  selectedSla?: string | undefined
                }[]
              | undefined
            selectedAddresses?:
              | {
                  addressType?: string | undefined
                  city?: string | undefined
                  complement?: string | undefined
                  country?: string | undefined
                  geoCoordinates?: number[] | undefined
                  neighborhood?: string | undefined
                  number?: string | undefined
                  postalCode?: string | undefined
                  receiverName?: string | undefined
                  reference?: string | undefined
                  state?: string | undefined
                  street?: string | undefined
                }[]
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/checkout/pub/orderForm/:orderFormId/coupons': {
      $post: {
        input: { param: { orderFormId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: { text?: string | undefined } }
        output: {
          allowManualPrice?: boolean | undefined
          availableAccounts?: string[] | undefined
          availableAddresses?:
            | {
                addressId?: string | undefined
                addressType?: string | undefined
                city?: string | undefined
                complement?: (string | null) | undefined
                country?: string | undefined
                geoCoordinates?: number[] | undefined
                isDisposable?: boolean | undefined
                neighborhood?: string | undefined
                number?: string | undefined
                receiverName?: string | undefined
                reference?: (string | null) | undefined
                state?: string | undefined
                street?: string | undefined
              }[]
            | undefined
          canEditData?: boolean | undefined
          clientPreferencesData?:
            | { locale?: string | undefined; optinNewsLetter?: boolean | undefined }
            | undefined
          clientProfileData?:
            | {
                corporateDocument?: (string | null) | undefined
                corporateName?: (string | null) | undefined
                corporatePhone?: (string | null) | undefined
                customerClass?: (string | null) | undefined
                document?: string | undefined
                documentType?: string | undefined
                email?: string | undefined
                firstName?: string | undefined
                isCorporate?: boolean | undefined
                lastName?: string | undefined
                phone?: string | undefined
                profileCompleteOnLoading?: boolean | undefined
                profileErrorOnLoading?: (boolean | null) | undefined
                stateInscription?: (string | null) | undefined
                tradeName?: (string | null) | undefined
              }
            | undefined
          commercialConditionData?: ({ [x: string]: unknown } | null) | undefined
          customData?: ({ [x: string]: unknown } | null) | undefined
          giftRegistryData?: ({ [x: string]: unknown } | null) | undefined
          hooksData?: ({ [x: string]: unknown } | null) | undefined
          ignoreProfileData?: boolean | undefined
          invoiceData?: ({ [x: string]: unknown } | null) | undefined
          isCheckedIn?: boolean | undefined
          itemMetadata?:
            | {
                items?:
                  | {
                      detailUrl?: string | undefined
                      ean?: (string | null) | undefined
                      id?: string | undefined
                      imageUrl?: string | undefined
                      name?: string | undefined
                      productId?: string | undefined
                      refId?: string | undefined
                      seller?: string | undefined
                      skuName?: string | undefined
                    }[]
                  | undefined
              }
            | undefined
          items?:
            | {
                additionalInfo?:
                  | {
                      brandId?: string | undefined
                      brandName?: string | undefined
                      dimension?: (string | null) | undefined
                      offeringInfo?: (string | null) | undefined
                      offeringType?: (string | null) | undefined
                      offeringTypeId?: (string | null) | undefined
                    }
                  | undefined
                attachments?: string[] | undefined
                availability?: string | undefined
                bundleItems?:
                  | {
                      id?: number | undefined
                      name?: string | undefined
                      price?: number | undefined
                      type?: string | undefined
                    }[]
                  | undefined
                detailUrl?: string | undefined
                ean?: (string | null) | undefined
                id?: string | undefined
                imageUrl?: string | undefined
                isGift?: boolean | undefined
                listPrice?: number | undefined
                manualPrice?: (number | null) | undefined
                manualPriceAppliedBy?: (string | null) | undefined
                manufacturerCode?: (string | null) | undefined
                measurementUnit?: string | undefined
                modalType?: (string | null) | undefined
                name?: string | undefined
                parentAssemblyBinding?: (string | null) | undefined
                parentItemIndex?: (number | null) | undefined
                preSaleDate?: (string | null) | undefined
                price?: number | undefined
                priceDefinition?:
                  | {
                      calculatedSellingPrice?: number | undefined
                      sellingPrices?:
                        | { quantity?: number | undefined; value?: number | undefined }[]
                        | undefined
                      total?: number | undefined
                    }
                  | undefined
                priceTags?:
                  | {
                      identifier?: string | undefined
                      isPercentual?: boolean | undefined
                      name?: string | undefined
                      rawValue?: number | undefined
                      value?: number | undefined
                    }[]
                  | undefined
                priceValidUntil?: string | undefined
                productCategories?: { '{ID}'?: string | undefined } | undefined
                productCategoryIds?: string | undefined
                productId?: string | undefined
                productRefId?: string | undefined
                quantity?: number | undefined
                refId?: string | undefined
                rewardValue?: number | undefined
                seller?: string | undefined
                sellerChain?: string[] | undefined
                sellingPrice?: number | undefined
                skuName?: string | undefined
                tax?: number | undefined
                uniqueId?: string | undefined
                unitMultiplier?: number | undefined
              }[]
            | undefined
          itemsOrdination?:
            | { ascending?: boolean | undefined; criteria?: string | undefined }
            | undefined
          loggedIn?: boolean | undefined
          marketingData?:
            | {
                coupon?: string | undefined
                utmCampaign?: (string | null) | undefined
                utmMedium?: (string | null) | undefined
                utmSource?: (string | null) | undefined
                utmiCampaign?: (string | null) | undefined
                utmiPage?: (string | null) | undefined
                utmiPart?: (string | null) | undefined
              }
            | undefined
          messages?: { [x: string]: unknown }[] | undefined
          openTextField?: (string | null) | undefined
          orderFormId?: string | undefined
          paymentData?:
            | {
                giftCards?:
                  | {
                      balance?: number | undefined
                      id?: string | undefined
                      inUse?: boolean | undefined
                      isSpecialCard?: boolean | undefined
                      name?: string | undefined
                      redemptionCode?: string | undefined
                      value?: number | undefined
                    }[]
                  | undefined
                transactions?:
                  | {
                      isActive?: boolean | undefined
                      merchantName?: string | undefined
                      payments?:
                        | {
                            accountId?: string | undefined
                            bin?: string | undefined
                            installments?: number | undefined
                            paymentSystem?: string | undefined
                            referenceValue?: number | undefined
                            value?: number | undefined
                          }[]
                        | undefined
                      sharedTransaction?: boolean | undefined
                      transactionId?: string | undefined
                    }[]
                  | undefined
              }
            | undefined
          profileProvider?: string | undefined
          ratesAndBenefitsData?:
            | { rateAndBenefitsIdentifiers?: string[] | undefined; teaser?: string[] | undefined }
            | undefined
          salesChannel?: string | undefined
          selectableGifts?: { [x: string]: unknown }[] | undefined
          sellers?:
            | {
                id?: string | undefined
                logo?: (string | null) | undefined
                name?: string | undefined
              }[]
            | undefined
          shippingData?:
            | {
                address?:
                  | {
                      addressId?: string | undefined
                      addressType?: string | undefined
                      city?: string | undefined
                      complement?: (string | null) | undefined
                      country?: string | undefined
                      geoCoordinates?: number[] | undefined
                      isDisposable?: boolean | undefined
                      neighborhood?: string | undefined
                      number?: string | undefined
                      postalCode?: string | undefined
                      receiverName?: string | undefined
                      reference?: (string | null) | undefined
                      state?: string | undefined
                      street?: string | undefined
                    }
                  | undefined
                availableAddresses?:
                  | {
                      addressId?: string | undefined
                      addressType?: string | undefined
                      city?: string | undefined
                      complement?: string | undefined
                      country?: string | undefined
                      geoCoordinates?: number[] | undefined
                      isDisposable?: boolean | undefined
                      neighborhood?: string | undefined
                      number?: string | undefined
                      postalCode?: string | undefined
                      receiverName?: string | undefined
                      reference?: (string | null) | undefined
                      state?: string | undefined
                      street?: string | undefined
                    }[]
                  | undefined
                logisticsInfo?:
                  | {
                      addressId?: string | undefined
                      deliveryChannels?: { id?: string | undefined }[] | undefined
                      itemId?: string | undefined
                      itemIndex?: number | undefined
                      selectedDeliveryChannel?: string | undefined
                      selectedSla?: string | undefined
                      shipsTo?: string[] | undefined
                      slas?:
                        | {
                            deliveryChannel?: string | undefined
                            deliveryIds?:
                              | {
                                  courierId?: string | undefined
                                  courierName?: string | undefined
                                  dockId?: string | undefined
                                  quantity?: number | undefined
                                  warehouseId?: string | undefined
                                }[]
                              | undefined
                            id?: string | undefined
                            listPrice?: number | undefined
                            lockTTL?: string | undefined
                            name?: string | undefined
                            pickupDistance?: number | undefined
                            pickupPointId?: (string | null) | undefined
                            pickupStoreInfo?:
                              | {
                                  additionalInfo?: (string | null) | undefined
                                  address?:
                                    | ({
                                        addressType?: string | undefined
                                        city?: string | undefined
                                        complement?: (string | null) | undefined
                                        country?: string | undefined
                                        geoCoordinates?: number[] | undefined
                                        neighborhood?: string | undefined
                                        number?: string | undefined
                                        postalCode?: string | undefined
                                        reference?: (string | null) | undefined
                                        state?: string | undefined
                                        street?: string | undefined
                                      } | null)
                                    | undefined
                                  dockId?: (string | null) | undefined
                                  friendlyName?: (string | null) | undefined
                                  isPickupStore?: boolean | undefined
                                }
                              | undefined
                            polygonName?: (string | null) | undefined
                            price?: number | undefined
                            shippingEstimate?: string | undefined
                            shippingEstimateDate?: (string | null) | undefined
                            tax?: number | undefined
                            transitTime?: string | undefined
                          }[]
                        | undefined
                    }[]
                  | undefined
                selectedAddresses?:
                  | {
                      addressId?: string | undefined
                      addressType?: string | undefined
                      city?: string | undefined
                      complement?: string | undefined
                      country?: string | undefined
                      geoCoordinates?: number[] | undefined
                      isDisposable?: boolean | undefined
                      neighborhood?: string | undefined
                      number?: string | undefined
                      postalCode?: string | undefined
                      receiverName?: string | undefined
                      reference?: (string | null) | undefined
                      state?: string | undefined
                      street?: string | undefined
                    }[]
                  | undefined
              }
            | undefined
          storeId?: (string | null) | undefined
          storePreferencesData?: { [x: string]: unknown } | undefined
          subscriptionData?: ({ [x: string]: unknown } | null) | undefined
          totalizers?: { [x: string]: unknown }[] | undefined
          userProfileId?: string | undefined
          userType?: (string | null) | undefined
          value?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/checkout/pub/orderForm/:orderFormId/customData/:appId': {
      $put: {
        input: { param: { orderFormId: string; appId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: { [x: string]: unknown } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/checkout/pub/orderForm/:orderFormId/customData/:appId/:appFieldName': {
      $delete: {
        input: { param: { orderFormId: string; appId: string; appFieldName: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { orderFormId: string; appId: string; appFieldName: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: SetsinglecustomfieldvalueRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/checkout/pub/orderForm/:orderFormId/installments': {
      $get: {
        input: { param: { orderFormId: string } } & { query: { paymentSystem: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/checkout/pub/orderForm/:orderFormId/items': {
      $post: {
        input: { param: { orderFormId: string } } & {
          query: { allowedOutdatedData?: { [x: string]: unknown }[] | undefined }
        } & { header: { 'Content-Type': string; Accept: string } } & {
          json: {
            orderItems?:
              | {
                  id: string
                  index: number
                  price?: number | undefined
                  quantity: number
                  seller: string
                }[]
              | undefined
          }
        }
        output: {
          allowManualPrice?: boolean | undefined
          availableAccounts?: string[] | undefined
          availableAddresses?:
            | {
                addressId?: string | undefined
                addressType?: string | undefined
                city?: string | undefined
                complement?: (string | null) | undefined
                country?: string | undefined
                geoCoordinates?: number[] | undefined
                isDisposable?: boolean | undefined
                neighborhood?: string | undefined
                number?: string | undefined
                receiverName?: string | undefined
                reference?: (string | null) | undefined
                state?: string | undefined
                street?: string | undefined
              }[]
            | undefined
          canEditData?: boolean | undefined
          clientPreferencesData?:
            | { locale?: string | undefined; optinNewsLetter?: boolean | undefined }
            | undefined
          clientProfileData?:
            | {
                corporateDocument?: (string | null) | undefined
                corporateName?: (string | null) | undefined
                corporatePhone?: (string | null) | undefined
                customerClass?: (string | null) | undefined
                document?: string | undefined
                documentType?: string | undefined
                email?: string | undefined
                firstName?: string | undefined
                isCorporate?: boolean | undefined
                lastName?: string | undefined
                phone?: string | undefined
                profileCompleteOnLoading?: boolean | undefined
                profileErrorOnLoading?: (boolean | null) | undefined
                stateInscription?: (string | null) | undefined
                tradeName?: (string | null) | undefined
              }
            | undefined
          commercialConditionData?: ({ [x: string]: unknown } | null) | undefined
          customData?: ({ [x: string]: unknown } | null) | undefined
          giftRegistryData?: ({ [x: string]: unknown } | null) | undefined
          hooksData?: ({ [x: string]: unknown } | null) | undefined
          ignoreProfileData?: boolean | undefined
          invoiceData?: ({ [x: string]: unknown } | null) | undefined
          isCheckedIn?: boolean | undefined
          itemMetadata?:
            | {
                items?:
                  | {
                      detailUrl?: string | undefined
                      ean?: (string | null) | undefined
                      id?: string | undefined
                      imageUrl?: string | undefined
                      name?: string | undefined
                      productId?: string | undefined
                      refId?: string | undefined
                      seller?: string | undefined
                      skuName?: string | undefined
                    }[]
                  | undefined
              }
            | undefined
          items?:
            | {
                additionalInfo?:
                  | {
                      brandId?: string | undefined
                      brandName?: string | undefined
                      dimension?: (string | null) | undefined
                      offeringInfo?: (string | null) | undefined
                      offeringType?: (string | null) | undefined
                      offeringTypeId?: (string | null) | undefined
                    }
                  | undefined
                attachments?: string[] | undefined
                availability?: string | undefined
                bundleItems?:
                  | {
                      id?: number | undefined
                      name?: string | undefined
                      price?: number | undefined
                      type?: string | undefined
                    }[]
                  | undefined
                detailUrl?: string | undefined
                ean?: (string | null) | undefined
                id?: string | undefined
                imageUrl?: string | undefined
                isGift?: boolean | undefined
                listPrice?: number | undefined
                manualPrice?: (number | null) | undefined
                manualPriceAppliedBy?: (string | null) | undefined
                manufacturerCode?: (string | null) | undefined
                measurementUnit?: string | undefined
                modalType?: (string | null) | undefined
                name?: string | undefined
                parentAssemblyBinding?: (string | null) | undefined
                parentItemIndex?: (number | null) | undefined
                preSaleDate?: (string | null) | undefined
                price?: number | undefined
                priceDefinition?:
                  | {
                      calculatedSellingPrice?: number | undefined
                      sellingPrices?:
                        | { quantity?: number | undefined; value?: number | undefined }[]
                        | undefined
                      total?: number | undefined
                    }
                  | undefined
                priceTags?:
                  | {
                      identifier?: string | undefined
                      isPercentual?: boolean | undefined
                      name?: string | undefined
                      rawValue?: number | undefined
                      value?: number | undefined
                    }[]
                  | undefined
                priceValidUntil?: string | undefined
                productCategories?: { '{ID}'?: string | undefined } | undefined
                productCategoryIds?: string | undefined
                productId?: string | undefined
                productRefId?: string | undefined
                quantity?: number | undefined
                refId?: string | undefined
                rewardValue?: number | undefined
                seller?: string | undefined
                sellerChain?: string[] | undefined
                sellingPrice?: number | undefined
                skuName?: string | undefined
                tax?: number | undefined
                uniqueId?: string | undefined
                unitMultiplier?: number | undefined
              }[]
            | undefined
          itemsOrdination?:
            | { ascending?: boolean | undefined; criteria?: string | undefined }
            | undefined
          loggedIn?: boolean | undefined
          marketingData?:
            | {
                coupon?: string | undefined
                utmCampaign?: string | undefined
                utmMedium?: string | undefined
                utmSource?: string | undefined
                utmiCampaign?: (string | null) | undefined
                utmiPage?: (string | null) | undefined
                utmiPart?: (string | null) | undefined
              }
            | undefined
          messages?: { [x: string]: unknown }[] | undefined
          openTextField?: (string | null) | undefined
          orderFormId?: string | undefined
          paymentData?:
            | {
                giftCards?:
                  | {
                      balance?: number | undefined
                      id?: string | undefined
                      inUse?: boolean | undefined
                      isSpecialCard?: boolean | undefined
                      name?: string | undefined
                      redemptionCode?: string | undefined
                      value?: number | undefined
                    }[]
                  | undefined
                transactions?:
                  | {
                      isActive?: boolean | undefined
                      merchantName?: string | undefined
                      payments?:
                        | {
                            accountId?: string | undefined
                            bin?: string | undefined
                            installments?: number | undefined
                            paymentSystem?: string | undefined
                            referenceValue?: number | undefined
                            value?: number | undefined
                          }[]
                        | undefined
                      sharedTransaction?: boolean | undefined
                      transactionId?: string | undefined
                    }[]
                  | undefined
              }
            | undefined
          profileProvider?: string | undefined
          ratesAndBenefitsData?:
            | { rateAndBenefitsIdentifiers?: string[] | undefined; teaser?: string[] | undefined }
            | undefined
          salesChannel?: string | undefined
          selectableGifts?: { [x: string]: unknown }[] | undefined
          sellers?:
            | {
                id?: string | undefined
                logo?: (string | null) | undefined
                name?: string | undefined
              }[]
            | undefined
          shippingData?:
            | {
                address?:
                  | {
                      addressId?: string | undefined
                      addressType?: string | undefined
                      city?: string | undefined
                      complement?: (string | null) | undefined
                      country?: string | undefined
                      geoCoordinates?: number[] | undefined
                      isDisposable?: boolean | undefined
                      neighborhood?: string | undefined
                      number?: string | undefined
                      postalCode?: string | undefined
                      receiverName?: string | undefined
                      reference?: (string | null) | undefined
                      state?: string | undefined
                      street?: string | undefined
                    }
                  | undefined
                availableAddresses?:
                  | {
                      addressId?: string | undefined
                      addressType?: string | undefined
                      city?: string | undefined
                      complement?: string | undefined
                      country?: string | undefined
                      geoCoordinates?: number[] | undefined
                      isDisposable?: boolean | undefined
                      neighborhood?: string | undefined
                      number?: string | undefined
                      postalCode?: string | undefined
                      receiverName?: string | undefined
                      reference?: (string | null) | undefined
                      state?: string | undefined
                      street?: string | undefined
                    }[]
                  | undefined
                logisticsInfo?:
                  | {
                      addressId?: string | undefined
                      deliveryChannels?: { id?: string | undefined }[] | undefined
                      itemId?: string | undefined
                      itemIndex?: number | undefined
                      selectedDeliveryChannel?: string | undefined
                      selectedSla?: string | undefined
                      shipsTo?: string[] | undefined
                      slas?:
                        | {
                            deliveryChannel?: string | undefined
                            deliveryIds?:
                              | {
                                  courierId?: string | undefined
                                  courierName?: string | undefined
                                  dockId?: string | undefined
                                  quantity?: number | undefined
                                  warehouseId?: string | undefined
                                }[]
                              | undefined
                            id?: string | undefined
                            listPrice?: number | undefined
                            lockTTL?: string | undefined
                            name?: string | undefined
                            pickupDistance?: number | undefined
                            pickupPointId?: (string | null) | undefined
                            pickupStoreInfo?:
                              | {
                                  additionalInfo?: (string | null) | undefined
                                  address?:
                                    | ({
                                        addressType?: string | undefined
                                        city?: string | undefined
                                        complement?: (string | null) | undefined
                                        country?: string | undefined
                                        geoCoordinates?: number[] | undefined
                                        neighborhood?: string | undefined
                                        number?: string | undefined
                                        postalCode?: string | undefined
                                        reference?: (string | null) | undefined
                                        state?: string | undefined
                                        street?: string | undefined
                                      } | null)
                                    | undefined
                                  dockId?: (string | null) | undefined
                                  friendlyName?: (string | null) | undefined
                                  isPickupStore?: boolean | undefined
                                }
                              | undefined
                            polygonName?: (string | null) | undefined
                            price?: number | undefined
                            shippingEstimate?: string | undefined
                            shippingEstimateDate?: (string | null) | undefined
                            tax?: number | undefined
                            transitTime?: string | undefined
                          }[]
                        | undefined
                    }[]
                  | undefined
                selectedAddresses?:
                  | {
                      addressId?: string | undefined
                      addressType?: string | undefined
                      city?: string | undefined
                      complement?: string | undefined
                      country?: string | undefined
                      geoCoordinates?: number[] | undefined
                      isDisposable?: boolean | undefined
                      neighborhood?: string | undefined
                      number?: string | undefined
                      postalCode?: string | undefined
                      receiverName?: string | undefined
                      reference?: (string | null) | undefined
                      state?: string | undefined
                      street?: string | undefined
                    }[]
                  | undefined
              }
            | undefined
          storeId?: (string | null) | undefined
          storePreferencesData?: { [x: string]: unknown } | undefined
          subscriptionData?: ({ [x: string]: unknown } | null) | undefined
          totalizers?: { [x: string]: unknown }[] | undefined
          userProfileId?: string | undefined
          userType?: (string | null) | undefined
          value?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/checkout/pub/orderForm/:orderFormId/items/removeAll': {
      $post: {
        input: { param: { orderFormId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: { [x: string]: unknown } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/checkout/pub/orderForm/:orderFormId/items/update': {
      $post: {
        input: { param: { orderFormId: string } } & {
          query: { allowedOutdatedData?: { [x: string]: unknown }[] | undefined }
        } & { header: { 'Content-Type': string; Accept: string } } & {
          json: { orderItems?: { index: number; quantity: number }[] | undefined }
        }
        output: {
          allowManualPrice?: boolean | undefined
          availableAccounts?: string[] | undefined
          availableAddresses?:
            | {
                addressId?: string | undefined
                addressType?: string | undefined
                city?: string | undefined
                complement?: (string | null) | undefined
                country?: string | undefined
                geoCoordinates?: string[] | undefined
                isDisposable?: boolean | undefined
                neighborhood?: string | undefined
                number?: string | undefined
                receiverName?: string | undefined
                reference?: (string | null) | undefined
                state?: string | undefined
                street?: string | undefined
              }[]
            | undefined
          canEditData?: boolean | undefined
          clientPreferencesData?:
            | { locale?: string | undefined; optinNewsLetter?: boolean | undefined }
            | undefined
          clientProfileData?:
            | {
                corporateDocument?: (string | null) | undefined
                corporateName?: (string | null) | undefined
                corporatePhone?: (string | null) | undefined
                customerClass?: (string | null) | undefined
                document?: string | undefined
                documentType?: string | undefined
                email?: string | undefined
                firstName?: string | undefined
                isCorporate?: boolean | undefined
                lastName?: string | undefined
                phone?: string | undefined
                profileCompleteOnLoading?: boolean | undefined
                profileErrorOnLoading?: (boolean | null) | undefined
                stateInscription?: (string | null) | undefined
                tradeName?: (string | null) | undefined
              }
            | undefined
          commercialConditionData?: ({ [x: string]: unknown } | null) | undefined
          customData?: ({ [x: string]: unknown } | null) | undefined
          giftRegistryData?: ({ [x: string]: unknown } | null) | undefined
          hooksData?: ({ [x: string]: unknown } | null) | undefined
          ignoreProfileData?: boolean | undefined
          invoiceData?: ({ [x: string]: unknown } | null) | undefined
          isCheckedIn?: boolean | undefined
          itemMetadata?:
            | {
                items?:
                  | {
                      detailUrl?: string | undefined
                      ean?: (string | null) | undefined
                      id?: string | undefined
                      imageUrl?: string | undefined
                      name?: string | undefined
                      productId?: string | undefined
                      refId?: string | undefined
                      seller?: string | undefined
                      skuName?: string | undefined
                    }[]
                  | undefined
              }
            | undefined
          items?:
            | {
                additionalInfo?:
                  | {
                      brandId?: string | undefined
                      brandName?: string | undefined
                      dimension?: (string | null) | undefined
                      offeringInfo?: (string | null) | undefined
                      offeringType?: (string | null) | undefined
                      offeringTypeId?: (string | null) | undefined
                    }
                  | undefined
                attachments?: string[] | undefined
                availability?: string | undefined
                bundleItems?:
                  | {
                      id?: number | undefined
                      name?: string | undefined
                      price?: number | undefined
                      type?: string | undefined
                    }[]
                  | undefined
                detailUrl?: string | undefined
                ean?: (string | null) | undefined
                id?: string | undefined
                imageUrl?: string | undefined
                isGift?: boolean | undefined
                listPrice?: number | undefined
                manualPrice?: (number | null) | undefined
                manualPriceAppliedBy?: (string | null) | undefined
                manufacturerCode?: (string | null) | undefined
                measurementUnit?: string | undefined
                modalType?: (string | null) | undefined
                name?: string | undefined
                parentAssemblyBinding?: (string | null) | undefined
                parentItemIndex?: (number | null) | undefined
                preSaleDate?: (string | null) | undefined
                price?: number | undefined
                priceDefinition?:
                  | {
                      calculatedSellingPrice?: number | undefined
                      sellingPrices?:
                        | { quantity?: number | undefined; value?: number | undefined }[]
                        | undefined
                      total?: number | undefined
                    }
                  | undefined
                priceTags?:
                  | {
                      identifier?: string | undefined
                      isPercentual?: boolean | undefined
                      name?: string | undefined
                      rawValue?: number | undefined
                      value?: number | undefined
                    }[]
                  | undefined
                priceValidUntil?: string | undefined
                productCategories?: { '{ID}'?: string | undefined } | undefined
                productCategoryIds?: string | undefined
                productId?: string | undefined
                productRefId?: string | undefined
                quantity?: number | undefined
                refId?: string | undefined
                rewardValue?: number | undefined
                seller?: string | undefined
                sellerChain?: string[] | undefined
                sellingPrice?: number | undefined
                skuName?: string | undefined
                tax?: number | undefined
                uniqueId?: string | undefined
                unitMultiplier?: number | undefined
              }[]
            | undefined
          itemsOrdination?:
            | { ascending?: boolean | undefined; criteria?: string | undefined }
            | undefined
          loggedIn?: boolean | undefined
          marketingData?:
            | {
                coupon?: string | undefined
                utmCampaign?: string | undefined
                utmMedium?: string | undefined
                utmSource?: string | undefined
                utmiCampaign?: (string | null) | undefined
                utmiPage?: (string | null) | undefined
                utmiPart?: (string | null) | undefined
              }
            | undefined
          messages?: { [x: string]: unknown }[] | undefined
          openTextField?: (string | null) | undefined
          orderFormId?: string | undefined
          paymentData?:
            | {
                giftCards?:
                  | {
                      balance?: number | undefined
                      id?: string | undefined
                      inUse?: boolean | undefined
                      isSpecialCard?: boolean | undefined
                      name?: string | undefined
                      redemptionCode?: string | undefined
                      value?: number | undefined
                    }[]
                  | undefined
                transactions?:
                  | {
                      isActive?: boolean | undefined
                      merchantName?: string | undefined
                      payments?:
                        | {
                            accountId?: string | undefined
                            bin?: string | undefined
                            installments?: number | undefined
                            paymentSystem?: string | undefined
                            referenceValue?: number | undefined
                            value?: number | undefined
                          }[]
                        | undefined
                      sharedTransaction?: boolean | undefined
                      transactionId?: string | undefined
                    }[]
                  | undefined
              }
            | undefined
          profileProvider?: string | undefined
          ratesAndBenefitsData?:
            | { rateAndBenefitsIdentifiers?: string[] | undefined; teaser?: string[] | undefined }
            | undefined
          salesChannel?: string | undefined
          selectableGifts?: { [x: string]: unknown }[] | undefined
          sellers?:
            | {
                id?: string | undefined
                logo?: (string | null) | undefined
                name?: string | undefined
              }[]
            | undefined
          shippingData?:
            | {
                address?:
                  | {
                      addressId?: string | undefined
                      addressType?: string | undefined
                      city?: string | undefined
                      complement?: (string | null) | undefined
                      country?: string | undefined
                      geoCoordinates?: string[] | undefined
                      isDisposable?: boolean | undefined
                      neighborhood?: string | undefined
                      number?: string | undefined
                      postalCode?: string | undefined
                      receiverName?: string | undefined
                      reference?: (string | null) | undefined
                      state?: string | undefined
                      street?: string | undefined
                    }
                  | undefined
                availableAddresses?:
                  | {
                      addressId?: string | undefined
                      addressType?: string | undefined
                      city?: string | undefined
                      complement?: string | undefined
                      country?: string | undefined
                      geoCoordinates?: string[] | undefined
                      isDisposable?: boolean | undefined
                      neighborhood?: string | undefined
                      number?: string | undefined
                      postalCode?: string | undefined
                      receiverName?: string | undefined
                      reference?: (string | null) | undefined
                      state?: string | undefined
                      street?: string | undefined
                    }[]
                  | undefined
                logisticsInfo?:
                  | {
                      addressId?: string | undefined
                      deliveryChannels?: { id?: string | undefined }[] | undefined
                      itemId?: string | undefined
                      itemIndex?: number | undefined
                      selectedDeliveryChannel?: string | undefined
                      selectedSla?: string | undefined
                      shipsTo?: string[] | undefined
                      slas?:
                        | {
                            deliveryChannel?: string | undefined
                            deliveryIds?:
                              | {
                                  courierId?: string | undefined
                                  courierName?: string | undefined
                                  dockId?: string | undefined
                                  quantity?: number | undefined
                                  warehouseId?: string | undefined
                                }[]
                              | undefined
                            id?: string | undefined
                            listPrice?: number | undefined
                            lockTTL?: string | undefined
                            name?: string | undefined
                            pickupDistance?: number | undefined
                            pickupPointId?: (string | null) | undefined
                            pickupStoreInfo?:
                              | {
                                  additionalInfo?: (string | null) | undefined
                                  address?:
                                    | ({
                                        addressType?: string | undefined
                                        city?: string | undefined
                                        complement?: (string | null) | undefined
                                        country?: string | undefined
                                        geoCoordinates?: string[] | undefined
                                        neighborhood?: string | undefined
                                        number?: string | undefined
                                        postalCode?: string | undefined
                                        reference?: (string | null) | undefined
                                        state?: string | undefined
                                        street?: string | undefined
                                      } | null)
                                    | undefined
                                  dockId?: (string | null) | undefined
                                  friendlyName?: (string | null) | undefined
                                  isPickupStore?: boolean | undefined
                                }
                              | undefined
                            polygonName?: (string | null) | undefined
                            price?: number | undefined
                            shippingEstimate?: string | undefined
                            shippingEstimateDate?: (string | null) | undefined
                            tax?: number | undefined
                            transitTime?: string | undefined
                          }[]
                        | undefined
                    }[]
                  | undefined
                selectedAddresses?:
                  | {
                      addressId?: string | undefined
                      addressType?: string | undefined
                      city?: string | undefined
                      complement?: string | undefined
                      country?: string | undefined
                      geoCoordinates?: string[] | undefined
                      isDisposable?: boolean | undefined
                      neighborhood?: string | undefined
                      number?: string | undefined
                      postalCode?: string | undefined
                      receiverName?: string | undefined
                      reference?: (string | null) | undefined
                      state?: string | undefined
                      street?: string | undefined
                    }[]
                  | undefined
              }
            | undefined
          storeId?: (string | null) | undefined
          storePreferencesData?: { [x: string]: unknown } | undefined
          subscriptionData?: ({ [x: string]: unknown } | null) | undefined
          totalizers?: { [x: string]: unknown }[] | undefined
          userProfileId?: string | undefined
          userType?: (string | null) | undefined
          value?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/checkout/pub/orderForm/:orderFormId/items/:itemIndex/price': {
      $put: {
        input: { param: { orderFormId: string; itemIndex: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: PriceChangeRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/checkout/pub/orderForm/:orderFormId/messages/clear': {
      $post: {
        input: { param: { orderFormId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: { [x: string]: unknown } }
        output: {
          allowManualPrice?: boolean | undefined
          availableAccounts?: string[] | undefined
          availableAddresses?:
            | {
                addressId?: string | undefined
                addressType?: string | undefined
                city?: string | undefined
                complement?: (string | null) | undefined
                country?: string | undefined
                geoCoordinates?: number[] | undefined
                isDisposable?: boolean | undefined
                neighborhood?: string | undefined
                number?: string | undefined
                receiverName?: string | undefined
                reference?: (string | null) | undefined
                state?: string | undefined
                street?: string | undefined
              }[]
            | undefined
          canEditData?: boolean | undefined
          clientPreferencesData?:
            | { locale?: string | undefined; optinNewsLetter?: boolean | undefined }
            | undefined
          clientProfileData?:
            | {
                corporateDocument?: (string | null) | undefined
                corporateName?: (string | null) | undefined
                corporatePhone?: (string | null) | undefined
                customerClass?: (string | null) | undefined
                document?: string | undefined
                documentType?: string | undefined
                email?: string | undefined
                firstName?: string | undefined
                isCorporate?: boolean | undefined
                lastName?: string | undefined
                phone?: string | undefined
                profileCompleteOnLoading?: boolean | undefined
                profileErrorOnLoading?: (boolean | null) | undefined
                stateInscription?: (string | null) | undefined
                tradeName?: (string | null) | undefined
              }
            | undefined
          commercialConditionData?: ({ [x: string]: unknown } | null) | undefined
          customData?: ({ [x: string]: unknown } | null) | undefined
          giftRegistryData?: ({ [x: string]: unknown } | null) | undefined
          hooksData?: ({ [x: string]: unknown } | null) | undefined
          ignoreProfileData?: boolean | undefined
          invoiceData?: ({ [x: string]: unknown } | null) | undefined
          isCheckedIn?: boolean | undefined
          itemMetadata?:
            | {
                items?:
                  | {
                      detailUrl?: string | undefined
                      ean?: (string | null) | undefined
                      id?: string | undefined
                      imageUrl?: string | undefined
                      name?: string | undefined
                      productId?: string | undefined
                      refId?: string | undefined
                      seller?: string | undefined
                      skuName?: string | undefined
                    }[]
                  | undefined
              }
            | undefined
          items?:
            | {
                additionalInfo?:
                  | {
                      brandId?: string | undefined
                      brandName?: string | undefined
                      dimension?: (string | null) | undefined
                      offeringInfo?: (string | null) | undefined
                      offeringType?: (string | null) | undefined
                      offeringTypeId?: (string | null) | undefined
                    }
                  | undefined
                attachments?: string[] | undefined
                availability?: string | undefined
                bundleItems?:
                  | {
                      id?: number | undefined
                      name?: string | undefined
                      price?: number | undefined
                      type?: string | undefined
                    }[]
                  | undefined
                detailUrl?: string | undefined
                ean?: (string | null) | undefined
                id?: string | undefined
                imageUrl?: string | undefined
                isGift?: boolean | undefined
                listPrice?: number | undefined
                manualPrice?: (number | null) | undefined
                manualPriceAppliedBy?: (string | null) | undefined
                manufacturerCode?: (string | null) | undefined
                measurementUnit?: string | undefined
                modalType?: (string | null) | undefined
                name?: string | undefined
                parentAssemblyBinding?: (string | null) | undefined
                parentItemIndex?: (number | null) | undefined
                preSaleDate?: (string | null) | undefined
                price?: number | undefined
                priceDefinition?:
                  | {
                      calculatedSellingPrice?: number | undefined
                      sellingPrices?:
                        | { quantity?: number | undefined; value?: number | undefined }[]
                        | undefined
                      total?: number | undefined
                    }
                  | undefined
                priceTags?:
                  | {
                      identifier?: string | undefined
                      isPercentual?: boolean | undefined
                      name?: string | undefined
                      rawValue?: number | undefined
                      value?: number | undefined
                    }[]
                  | undefined
                priceValidUntil?: string | undefined
                productCategories?: { '{ID}'?: string | undefined } | undefined
                productCategoryIds?: string | undefined
                productId?: string | undefined
                productRefId?: string | undefined
                quantity?: number | undefined
                refId?: string | undefined
                rewardValue?: number | undefined
                seller?: string | undefined
                sellerChain?: string[] | undefined
                sellingPrice?: number | undefined
                skuName?: string | undefined
                tax?: number | undefined
                uniqueId?: string | undefined
                unitMultiplier?: number | undefined
              }[]
            | undefined
          itemsOrdination?:
            | { ascending?: boolean | undefined; criteria?: string | undefined }
            | undefined
          loggedIn?: boolean | undefined
          marketingData?:
            | {
                coupon?: string | undefined
                utmCampaign?: string | undefined
                utmMedium?: string | undefined
                utmSource?: string | undefined
                utmiCampaign?: (string | null) | undefined
                utmiPage?: (string | null) | undefined
                utmiPart?: (string | null) | undefined
              }
            | undefined
          messages?: { [x: string]: unknown }[] | undefined
          openTextField?: (string | null) | undefined
          orderFormId?: string | undefined
          paymentData?:
            | {
                giftCards?:
                  | {
                      balance?: number | undefined
                      id?: string | undefined
                      inUse?: boolean | undefined
                      isSpecialCard?: boolean | undefined
                      name?: string | undefined
                      redemptionCode?: string | undefined
                      value?: number | undefined
                    }[]
                  | undefined
                transactions?:
                  | {
                      isActive?: boolean | undefined
                      merchantName?: string | undefined
                      payments?:
                        | {
                            accountId?: string | undefined
                            bin?: string | undefined
                            installments?: number | undefined
                            paymentSystem?: string | undefined
                            referenceValue?: number | undefined
                            value?: number | undefined
                          }[]
                        | undefined
                      sharedTransaction?: boolean | undefined
                      transactionId?: string | undefined
                    }[]
                  | undefined
              }
            | undefined
          profileProvider?: string | undefined
          ratesAndBenefitsData?:
            | { rateAndBenefitsIdentifiers?: string[] | undefined; teaser?: string[] | undefined }
            | undefined
          salesChannel?: string | undefined
          selectableGifts?: { [x: string]: unknown }[] | undefined
          sellers?:
            | {
                id?: string | undefined
                logo?: (string | null) | undefined
                name?: string | undefined
              }[]
            | undefined
          shippingData?:
            | {
                address?:
                  | {
                      addressId?: string | undefined
                      addressType?: string | undefined
                      city?: string | undefined
                      complement?: (string | null) | undefined
                      country?: string | undefined
                      geoCoordinates?: number[] | undefined
                      isDisposable?: boolean | undefined
                      neighborhood?: string | undefined
                      number?: string | undefined
                      postalCode?: string | undefined
                      receiverName?: string | undefined
                      reference?: (string | null) | undefined
                      state?: string | undefined
                      street?: string | undefined
                    }
                  | undefined
                availableAddresses?:
                  | {
                      addressId?: string | undefined
                      addressType?: string | undefined
                      city?: string | undefined
                      complement?: string | undefined
                      country?: string | undefined
                      geoCoordinates?: number[] | undefined
                      isDisposable?: boolean | undefined
                      neighborhood?: string | undefined
                      number?: string | undefined
                      postalCode?: string | undefined
                      receiverName?: string | undefined
                      reference?: (string | null) | undefined
                      state?: string | undefined
                      street?: string | undefined
                    }[]
                  | undefined
                logisticsInfo?:
                  | {
                      addressId?: string | undefined
                      deliveryChannels?: { id?: string | undefined }[] | undefined
                      itemId?: string | undefined
                      itemIndex?: number | undefined
                      selectedDeliveryChannel?: string | undefined
                      selectedSla?: string | undefined
                      shipsTo?: string[] | undefined
                      slas?:
                        | {
                            deliveryChannel?: string | undefined
                            deliveryIds?:
                              | {
                                  courierId?: string | undefined
                                  courierName?: string | undefined
                                  dockId?: string | undefined
                                  quantity?: number | undefined
                                  warehouseId?: string | undefined
                                }[]
                              | undefined
                            id?: string | undefined
                            listPrice?: number | undefined
                            lockTTL?: string | undefined
                            name?: string | undefined
                            pickupDistance?: number | undefined
                            pickupPointId?: (string | null) | undefined
                            pickupStoreInfo?:
                              | {
                                  additionalInfo?: (string | null) | undefined
                                  address?:
                                    | ({
                                        addressType?: string | undefined
                                        city?: string | undefined
                                        complement?: (string | null) | undefined
                                        country?: string | undefined
                                        geoCoordinates?: number[] | undefined
                                        neighborhood?: string | undefined
                                        number?: string | undefined
                                        postalCode?: string | undefined
                                        reference?: (string | null) | undefined
                                        state?: string | undefined
                                        street?: string | undefined
                                      } | null)
                                    | undefined
                                  dockId?: (string | null) | undefined
                                  friendlyName?: (string | null) | undefined
                                  isPickupStore?: boolean | undefined
                                }
                              | undefined
                            polygonName?: (string | null) | undefined
                            price?: number | undefined
                            shippingEstimate?: string | undefined
                            shippingEstimateDate?: (string | null) | undefined
                            tax?: number | undefined
                            transitTime?: string | undefined
                          }[]
                        | undefined
                    }[]
                  | undefined
                selectedAddresses?:
                  | {
                      addressId?: string | undefined
                      addressType?: string | undefined
                      city?: string | undefined
                      complement?: string | undefined
                      country?: string | undefined
                      geoCoordinates?: number[] | undefined
                      isDisposable?: boolean | undefined
                      neighborhood?: string | undefined
                      number?: string | undefined
                      postalCode?: string | undefined
                      receiverName?: string | undefined
                      reference?: (string | null) | undefined
                      state?: string | undefined
                      street?: string | undefined
                    }[]
                  | undefined
              }
            | undefined
          storeId?: (string | null) | undefined
          storePreferencesData?: { [x: string]: unknown } | undefined
          subscriptionData?: ({ [x: string]: unknown } | null) | undefined
          totalizers?: { [x: string]: unknown }[] | undefined
          userProfileId?: string | undefined
          userType?: (string | null) | undefined
          value?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/checkout/pub/orderForm/:orderFormId/profile': {
      $patch: {
        input: { param: { orderFormId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: { ignoreProfileData?: boolean | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/checkout/pub/orderForm/:orderFormId/transaction': {
      $post: {
        input: { param: { orderFormId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & {
          json: {
            interestValue: number
            optinNewsLetter?: boolean | undefined
            referenceId: string
            referenceValue: number
            savePersonalData?: boolean | undefined
            value: number
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/checkout/pub/orderForms/simulation': {
      $post: {
        input: { query: { RnbBehavior?: number | undefined; sc?: number | undefined } } & {
          header: { 'Content-Type': string; Accept: string }
        } & {
          json: {
            country?: string | undefined
            geoCoordinates?: number[] | undefined
            items?:
              | {
                  id?: string | undefined
                  quantity?: number | undefined
                  seller?: string | undefined
                }[]
              | undefined
            postalCode?: string | undefined
          }
        }
        output: {
          country?: string | undefined
          items?:
            | {
                availability?: string | undefined
                id?: string | undefined
                listPrice?: number | undefined
                measurementUnit?: string | undefined
                offerings?: { [x: string]: unknown }[] | undefined
                parentAssemblyBinding?: (string | null) | undefined
                parentItemIndex?: (number | null) | undefined
                price?: number | undefined
                priceDefinition?:
                  | {
                      calculatedSellingPrice?: number | undefined
                      sellingPrices?:
                        | { quantity?: number | undefined; value?: number | undefined }[]
                        | undefined
                      total?: number | undefined
                    }
                  | undefined
                priceTags?:
                  | {
                      identifier?: string | undefined
                      isPercentual?: boolean | undefined
                      name?: string | undefined
                      owner?: string | undefined
                      rawValue?: number | undefined
                      value?: number | undefined
                    }[]
                  | undefined
                priceValidUntil?: string | undefined
                quantity?: number | undefined
                requestIndex?: number | undefined
                rewardValue?: number | undefined
                seller?: string | undefined
                sellerChain?: string[] | undefined
                sellingPrice?: number | undefined
                tax?: number | undefined
                unitMultiplier?: number | undefined
              }[]
            | undefined
          logisticsInfo?:
            | {
                addressId?: (string | null) | undefined
                deliveryChannels?: { id?: string | undefined }[] | undefined
                itemIndex?: number | undefined
                itemMetadata?:
                  | {
                      items?:
                        | {
                            assemblyOptions?: { [x: string]: unknown }[] | undefined
                            id?: string | undefined
                            seller?: string | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                messages?: { [x: string]: unknown }[] | undefined
                pickupPoints?: { [x: string]: unknown }[] | undefined
                purchaseConditions?:
                  | {
                      itemPurchaseConditions?:
                        | {
                            id?: string | undefined
                            listPrice?: number | undefined
                            price?: number | undefined
                            seller?: string | undefined
                            sellerChain?: { [x: string]: unknown }[] | undefined
                            slas?:
                              | {
                                  availableDeliveryWindows?:
                                    | {
                                        endDateUtc?: string | undefined
                                        lisPrice?: number | undefined
                                        price?: number | undefined
                                        startDateUtc?: string | undefined
                                        tax?: number | undefined
                                      }
                                    | undefined
                                  deliveryChannel?: string | undefined
                                  deliveryIds?:
                                    | {
                                        courierId?: string | undefined
                                        courierName?: string | undefined
                                        dockId?: string | undefined
                                        quantity?: number | undefined
                                        warehouseId?: string | undefined
                                      }[]
                                    | undefined
                                  deliveryWindow?:
                                    | {
                                        endDateUtc?: string | undefined
                                        lisPrice?: number | undefined
                                        price?: number | undefined
                                        startDateUtc?: string | undefined
                                        tax?: number | undefined
                                      }
                                    | undefined
                                  id?: string | undefined
                                  listPrice?: number | undefined
                                  lockTTL?: string | undefined
                                  name?: string | undefined
                                  pickupDistance?: number | undefined
                                  pickupPointId?: (string | null) | undefined
                                  pickupStoreInfo?:
                                    | {
                                        additionalInfo?: (string | null) | undefined
                                        address?: ({ [x: string]: unknown } | null) | undefined
                                        dockId?: (string | null) | undefined
                                        friendlyName?: (string | null) | undefined
                                        isPickupStore?: boolean | undefined
                                      }
                                    | undefined
                                  polygonName?: (string | null) | undefined
                                  price?: number | undefined
                                  shippingEstimate?: string | undefined
                                  shippingEstimateDate?: (string | null) | undefined
                                  tax?: number | undefined
                                  transitTime?: string | undefined
                                }[]
                              | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                quantity?: number | undefined
                selectedDeliveryChannel?: (string | null) | undefined
                selectedSla?: (string | null) | undefined
                shipsTo?: { [x: string]: unknown }[] | undefined
                slas?:
                  | {
                      availableDeliveryWindows?:
                        | {
                            endDateUtc?: string | undefined
                            lisPrice?: number | undefined
                            price?: number | undefined
                            startDateUtc?: string | undefined
                            tax?: number | undefined
                          }
                        | undefined
                      deliveryChannel?: string | undefined
                      deliveryIds?:
                        | {
                            courierId?: string | undefined
                            courierName?: string | undefined
                            dockId?: string | undefined
                            quantity?: number | undefined
                            warehouseId?: string | undefined
                          }[]
                        | undefined
                      deliveryWindow?:
                        | {
                            endDateUtc?: string | undefined
                            lisPrice?: number | undefined
                            price?: number | undefined
                            startDateUtc?: string | undefined
                            tax?: number | undefined
                          }
                        | undefined
                      id?: string | undefined
                      listPrice?: number | undefined
                      lockTTL?: string | undefined
                      name?: string | undefined
                      pickupDistance?: number | undefined
                      pickupPointId?: (string | null) | undefined
                      pickupStoreInfo?:
                        | {
                            additionalInfo?: (string | null) | undefined
                            address?: ({ [x: string]: unknown } | null) | undefined
                            dockId?: (string | null) | undefined
                            friendlyName?: (string | null) | undefined
                            isPickupStore?: boolean | undefined
                          }
                        | undefined
                      polygonName?: (string | null) | undefined
                      price?: number | undefined
                      shippingEstimate?: string | undefined
                      shippingEstimateDate?: (string | null) | undefined
                      tax?: number | undefined
                      transitTime?: string | undefined
                    }[]
                  | undefined
                subscriptionData?: ({ [x: string]: unknown } | null) | undefined
                totals?:
                  | {
                      id?: string | undefined
                      name?: string | undefined
                      value?: number | undefined
                    }[]
                  | undefined
              }[]
            | undefined
          marketingData?: ({ [x: string]: unknown } | null) | undefined
          paymentData?:
            | {
                availableAccounts?: { [x: string]: unknown }[] | undefined
                availableAssociations?: { [x: string]: unknown } | undefined
                availableTokens?: { [x: string]: unknown }[] | undefined
                giftCardMessages?: { [x: string]: unknown }[] | undefined
                giftCards?: { [x: string]: unknown }[] | undefined
                installmentOptions?: { [x: string]: unknown }[] | undefined
                paymentSystems?:
                  | {
                      availablePayments?: (string | null) | undefined
                      description?: string | undefined
                      displayDocument?: boolean | undefined
                      dueDate?: string | undefined
                      groupName?: string | undefined
                      id?: number | undefined
                      isCustom?: boolean | undefined
                      name?: string | undefined
                      requiresAuthentication?: boolean | undefined
                      requiresDocument?: boolean | undefined
                      stringId?: string | undefined
                      template?: string | undefined
                      validator?: ({ [x: string]: unknown } | null) | undefined
                    }[]
                  | undefined
                payments?: { [x: string]: unknown }[] | undefined
              }
            | undefined
          postalCode?: (string | null) | undefined
          ratesAndBenefitsData?:
            | {
                rateAndBenefitsIdentifiers?: { [x: string]: unknown }[] | undefined
                teaser?: { [x: string]: unknown }[] | undefined
              }
            | undefined
          selectableGifts?: { [x: string]: unknown }[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/checkout/pub/orders': {
      $put: {
        input: { query: { sc?: number | undefined } } & {
          header: { 'Content-Type': string; Accept: string }
        } & {
          json: {
            clientProfileData: {
              corporateDocument?: string | undefined
              corporateName?: string | undefined
              corporatePhone?: string | undefined
              document?: string | undefined
              documentType?: string | undefined
              email: string
              firstName?: string | undefined
              isCorporate?: boolean | undefined
              lastName?: string | undefined
              phone?: string | undefined
              stateInscription?: string | undefined
              tradeName?: string | undefined
            }
            items: {
              attachments?: string[] | undefined
              bundleItems?:
                | {
                    id?: string | undefined
                    name?: string | undefined
                    price?: number | undefined
                    type?: string | undefined
                  }[]
                | undefined
              commission?: number | undefined
              freightCommission?: number | undefined
              id: string
              isGift?: boolean | undefined
              itemAttachment?:
                | { content?: string | undefined; name?: string | undefined }
                | undefined
              measurementUnit?: string | undefined
              price?: number | undefined
              priceTags?:
                | {
                    identifier?: string | undefined
                    isPercentual?: boolean | undefined
                    name?: string | undefined
                    rawValue?: number | undefined
                    value?: number | undefined
                  }[]
                | undefined
              quantity: number
              seller: string
              unitMultiplier?: number | undefined
            }[]
            marketingData?:
              | {
                  coupon?: string | undefined
                  utmCampaign?: string | undefined
                  utmMedium?: string | undefined
                  utmSource?: string | undefined
                  utmiCampaign?: string | undefined
                  utmiPage?: string | undefined
                  utmiPart?: string | undefined
                }
              | undefined
            openTextField?: string | undefined
            paymentData: {
              giftCardMessages?: { [x: string]: unknown }[] | undefined
              giftCards?:
                | {
                    balance?: number | undefined
                    id?: string | undefined
                    inUse?: boolean | undefined
                    isSpecialCard?: boolean | undefined
                    name?: string | undefined
                    redemptionCode: string
                    value: number
                  }[]
                | undefined
              paymentSystems?:
                | {
                    description?: string | undefined
                    groupName?: string | undefined
                    id?: number | undefined
                    isCustom?: boolean | undefined
                    name?: string | undefined
                    requiresDocument?: boolean | undefined
                    selected?: boolean | undefined
                    stringId?: string | undefined
                    template?: string | undefined
                    validator?:
                      | {
                          cardCodeMask?: string | undefined
                          cardCodeRegex?: string | undefined
                          mask?: string | undefined
                          regex?: string | undefined
                          weights?: number[] | undefined
                        }
                      | undefined
                  }[]
                | undefined
              payments: {
                accountId?: string | undefined
                bin?: string | undefined
                installments: number
                paymentSystem: string
                referenceValue: number
                value: number
              }[]
              updateStatus?: string | undefined
            }
            salesAssociateData?: { salesAssociateId?: string | undefined } | undefined
            shippingData: {
              address?:
                | {
                    addressId?: string | undefined
                    addressType?: string | undefined
                    city?: string | undefined
                    complement?: string | undefined
                    country?: string | undefined
                    geoCoordinates?: number[] | undefined
                    neighborhood?: string | undefined
                    number?: string | undefined
                    postalCode?: string | undefined
                    receiverName?: string | undefined
                    reference?: string | undefined
                    state?: string | undefined
                    street?: string | undefined
                  }
                | undefined
              logisticsInfo?:
                | {
                    deliveryWindow?:
                      | {
                          endDateUtc?: string | undefined
                          lisPrice?: number | undefined
                          price?: number | undefined
                          startDateUtc?: string | undefined
                          tax?: number | undefined
                        }
                      | undefined
                    itemIndex: number
                    lockTTL?: string | undefined
                    price: number
                    selectedSla: string
                    shippingEstimate?: string | undefined
                  }[]
                | undefined
              updateStatus?: string | undefined
            }
          }
        }
        output: {
          orderForm?: (string | null) | undefined
          orders?:
            | {
                allowCancelation?: boolean | undefined
                allowChangeSeller?: boolean | undefined
                allowEdition?: boolean | undefined
                checkedInPickupPointId?: (string | null) | undefined
                clientProfileData?:
                  | {
                      corporateDocument?: (string | null) | undefined
                      corporateName?: (string | null) | undefined
                      corporatePhone?: (string | null) | undefined
                      customerClass?: (string | null) | undefined
                      document?: string | undefined
                      documentType?: string | undefined
                      email?: string | undefined
                      firstName?: string | undefined
                      isCorporate?: boolean | undefined
                      lastName?: string | undefined
                      phone?: string | undefined
                      profileCompleteOnLoading?: boolean | undefined
                      profileErrorOnLoading?: (boolean | null) | undefined
                      stateInscription?: (string | null) | undefined
                      tradeName?: (string | null) | undefined
                    }
                  | undefined
                creationDate?: string | undefined
                followUpEmail?: string | undefined
                hostName?: string | undefined
                isCheckedIn?: boolean | undefined
                isCompleted?: boolean | undefined
                isUserDataVisible?: boolean | undefined
                itemMetadata?:
                  | {
                      items?:
                        | {
                            detailUrl?: string | undefined
                            ean?: (string | null) | undefined
                            id?: string | undefined
                            imageUrl?: string | undefined
                            name?: string | undefined
                            productId?: string | undefined
                            refId?: string | undefined
                            seller?: string | undefined
                            skuName?: string | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                items?:
                  | {
                      additionalInfo?:
                        | {
                            brandId?: string | undefined
                            brandName?: string | undefined
                            dimension?: (string | null) | undefined
                            offeringInfo?: (string | null) | undefined
                            offeringType?: (string | null) | undefined
                            offeringTypeId?: (string | null) | undefined
                          }
                        | undefined
                      attachments?: string[] | undefined
                      availability?: string | undefined
                      bundleItems?:
                        | {
                            id?: number | undefined
                            name?: string | undefined
                            price?: number | undefined
                            type?: string | undefined
                          }[]
                        | undefined
                      detailUrl?: string | undefined
                      ean?: (string | null) | undefined
                      id?: string | undefined
                      imageUrl?: string | undefined
                      isGift?: boolean | undefined
                      listPrice?: number | undefined
                      manualPrice?: (number | null) | undefined
                      manualPriceAppliedBy?: (string | null) | undefined
                      manufacturerCode?: (string | null) | undefined
                      measurementUnit?: string | undefined
                      modalType?: (string | null) | undefined
                      name?: string | undefined
                      parentAssemblyBinding?: (string | null) | undefined
                      parentItemIndex?: (number | null) | undefined
                      preSaleDate?: (string | null) | undefined
                      price?: number | undefined
                      priceDefinition?:
                        | {
                            calculatedSellingPrice?: number | undefined
                            sellingPrices?:
                              | { quantity?: number | undefined; value?: number | undefined }[]
                              | undefined
                            total?: number | undefined
                          }
                        | undefined
                      priceTags?:
                        | {
                            identifier?: string | undefined
                            isPercentual?: boolean | undefined
                            name?: string | undefined
                            rawValue?: number | undefined
                            value?: number | undefined
                          }[]
                        | undefined
                      priceValidUntil?: string | undefined
                      productCategories?: { '{ID}'?: string | undefined } | undefined
                      productCategoryIds?: string | undefined
                      productId?: string | undefined
                      productRefId?: string | undefined
                      quantity?: number | undefined
                      refId?: string | undefined
                      rewardValue?: number | undefined
                      seller?: string | undefined
                      sellerChain?: string[] | undefined
                      sellingPrice?: number | undefined
                      skuName?: string | undefined
                      tax?: number | undefined
                      uniqueId?: string | undefined
                      unitMultiplier?: number | undefined
                    }[]
                  | undefined
                lastChange?: string | undefined
                merchantName?: (string | null) | undefined
                orderFormCreationDate?: string | undefined
                orderGroup?: string | undefined
                orderId?: string | undefined
                paymentData?:
                  | {
                      giftCards?:
                        | {
                            balance?: number | undefined
                            id?: string | undefined
                            inUse?: boolean | undefined
                            isSpecialCard?: boolean | undefined
                            name?: string | undefined
                            redemptionCode?: string | undefined
                            value?: number | undefined
                          }[]
                        | undefined
                      transactions?:
                        | {
                            isActive?: boolean | undefined
                            merchantName?: string | undefined
                            payments?:
                              | {
                                  accountId?: string | undefined
                                  bin?: string | undefined
                                  installments?: number | undefined
                                  paymentSystem?: string | undefined
                                  referenceValue?: number | undefined
                                  value?: number | undefined
                                }[]
                              | undefined
                            sharedTransaction?: boolean | undefined
                            transactionId?: string | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                ratesAndBenefitsData?:
                  | {
                      rateAndBenefitsIdentifiers?: string[] | undefined
                      teaser?: string[] | undefined
                    }
                  | undefined
                roundingError?: number | undefined
                salesAssociateId?: string | undefined
                salesChannel?: string | undefined
                sellerOrderId?: (string | null) | undefined
                sellers?:
                  | {
                      id?: string | undefined
                      logo?: (string | null) | undefined
                      name?: string | undefined
                    }[]
                  | undefined
                shippingData?:
                  | {
                      address?:
                        | {
                            addressId?: string | undefined
                            addressType?: string | undefined
                            city?: string | undefined
                            complement?: (string | null) | undefined
                            country?: string | undefined
                            geoCoordinates?: number[] | undefined
                            isDisposable?: boolean | undefined
                            neighborhood?: string | undefined
                            number?: string | undefined
                            postalCode?: string | undefined
                            receiverName?: string | undefined
                            reference?: (string | null) | undefined
                            state?: string | undefined
                            street?: string | undefined
                          }
                        | undefined
                      availableAddresses?:
                        | {
                            addressId?: string | undefined
                            addressType?: string | undefined
                            city?: string | undefined
                            complement?: string | undefined
                            country?: string | undefined
                            geoCoordinates?: number[] | undefined
                            isDisposable?: boolean | undefined
                            neighborhood?: string | undefined
                            number?: string | undefined
                            postalCode?: string | undefined
                            receiverName?: string | undefined
                            reference?: (string | null) | undefined
                            state?: string | undefined
                            street?: string | undefined
                          }[]
                        | undefined
                      logisticsInfo?:
                        | {
                            addressId?: string | undefined
                            deliveryChannels?: { id?: string | undefined }[] | undefined
                            itemId?: string | undefined
                            itemIndex?: number | undefined
                            selectedDeliveryChannel?: string | undefined
                            selectedSla?: string | undefined
                            shipsTo?: string[] | undefined
                            slas?:
                              | {
                                  deliveryChannel?: string | undefined
                                  deliveryIds?:
                                    | {
                                        courierId?: string | undefined
                                        courierName?: string | undefined
                                        dockId?: string | undefined
                                        quantity?: number | undefined
                                        warehouseId?: string | undefined
                                      }[]
                                    | undefined
                                  id?: string | undefined
                                  listPrice?: number | undefined
                                  lockTTL?: string | undefined
                                  name?: string | undefined
                                  pickupDistance?: number | undefined
                                  pickupPointId?: (string | null) | undefined
                                  pickupStoreInfo?:
                                    | {
                                        additionalInfo?: (string | null) | undefined
                                        address?:
                                          | ({
                                              addressType?: string | undefined
                                              city?: string | undefined
                                              complement?: (string | null) | undefined
                                              country?: string | undefined
                                              geoCoordinates?: number[] | undefined
                                              neighborhood?: string | undefined
                                              number?: string | undefined
                                              postalCode?: string | undefined
                                              reference?: (string | null) | undefined
                                              state?: string | undefined
                                              street?: string | undefined
                                            } | null)
                                          | undefined
                                        dockId?: (string | null) | undefined
                                        friendlyName?: (string | null) | undefined
                                        isPickupStore?: boolean | undefined
                                      }
                                    | undefined
                                  polygonName?: (string | null) | undefined
                                  price?: number | undefined
                                  shippingEstimate?: string | undefined
                                  shippingEstimateDate?: (string | null) | undefined
                                  tax?: number | undefined
                                  transitTime?: string | undefined
                                }[]
                              | undefined
                          }[]
                        | undefined
                      selectedAddresses?:
                        | {
                            addressId?: string | undefined
                            addressType?: string | undefined
                            city?: string | undefined
                            complement?: string | undefined
                            country?: string | undefined
                            geoCoordinates?: number[] | undefined
                            isDisposable?: boolean | undefined
                            neighborhood?: string | undefined
                            number?: string | undefined
                            postalCode?: string | undefined
                            receiverName?: string | undefined
                            reference?: (string | null) | undefined
                            state?: string | undefined
                            street?: string | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                state?: (string | null) | undefined
                storeId?: (string | null) | undefined
                timeZoneCreationDate?: string | undefined
                timeZoneLastChange?: string | undefined
                totals?:
                  | {
                      id?: string | undefined
                      name?: string | undefined
                      value?: number | undefined
                    }[]
                  | undefined
                userType?: string | undefined
                value?: number | undefined
              }[]
            | undefined
          transactionData?:
            | {
                gatewayCallbackTemplatePath?: string | undefined
                merchantTransactions?:
                  | {
                      id?: string | undefined
                      merchantName?: string | undefined
                      payments?:
                        | {
                            accountId?: (string | null) | undefined
                            bin?: (string | null) | undefined
                            giftCardId?: (string | null) | undefined
                            giftCardProvider?: (string | null) | undefined
                            giftCardRedemptionCode?: (string | null) | undefined
                            paymentSystem?: string | undefined
                            referenceValue?: number | undefined
                            tokenId?: (string | null) | undefined
                            value?: number | undefined
                          }[]
                        | undefined
                      transactionId?: string | undefined
                    }[]
                  | undefined
                receiverUri?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/checkout/pub/pickup-points': {
      $get: {
        input: {
          query: {
            geoCoordinates?: number[] | undefined
            postalCode?: string | undefined
            countryCode?: string | undefined
          }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/checkout/pub/postal-code/:countryCode/:postalCode': {
      $get: {
        input: { param: { countryCode: string; postalCode: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/checkout/pub/profiles': {
      $get: {
        input: { query: { email: string } } & { header: { 'Content-Type': string; Accept: string } }
        output: {
          availableAccounts?: string[] | undefined
          availableAddresses?:
            | {
                addressId?: string | undefined
                addressType?: string | undefined
                city?: string | undefined
                complement?: (string | null) | undefined
                country?: string | undefined
                geoCoordinates?: number[] | undefined
                isDisposable?: boolean | undefined
                neighborhood?: string | undefined
                number?: string | undefined
                receiverName?: string | undefined
                reference?: (string | null) | undefined
                state?: string | undefined
                street?: string | undefined
              }[]
            | undefined
          isComplete?: boolean | undefined
          profileProvider?: string | undefined
          userProfile?:
            | {
                corporateDocument?: (string | null) | undefined
                corporateName?: (string | null) | undefined
                corporatePhone?: (string | null) | undefined
                customerClass?: (string | null) | undefined
                document?: string | undefined
                documentType?: string | undefined
                email?: string | undefined
                firstName?: string | undefined
                isCorporate?: boolean | undefined
                lastName?: string | undefined
                phone?: string | undefined
                profileCompleteOnLoading?: (string | null) | undefined
                profileErrorOnLoading?: (string | null) | undefined
                stateInscription?: (string | null) | undefined
                tradeName?: (string | null) | undefined
              }
            | undefined
          userProfileId?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/checkout/pub/regions/:regionId': {
      $get: {
        input: { param: { regionId: string } } & {
          query: {
            country: string
            postalCode?: string | undefined
            geoCoordinates?: number[] | undefined
          }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: {
          id?: string | undefined
          sellers?:
            | {
                id?: string | undefined
                logo?: (string | null) | undefined
                name?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/checkout/pvt/configuration/orderForm': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: UpdateorderFormconfigurationRequest
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/checkout/pvt/configuration/window-to-change-seller': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & { json: WaitingTime }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/checkout/changeToAnonymousUser/:orderFormId': {
      $get: {
        input: { param: { orderFormId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
