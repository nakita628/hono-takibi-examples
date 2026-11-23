type SendCategoryMappingToVtexMapper = {
  categories: {
    children?:
      | {
          children: { [x: string]: unknown }[] | null
          id: string
          name: string
          specifications: {
            attributeName: string
            attributeValues: { valueName: string }[]
            required: boolean
          }[]
        }[]
      | undefined
    id?: string | undefined
    name?: string | undefined
  }[]
}
type VtexMapperRegistration = {
  CategoryTreeProcessingNotificationEndpoint?: string | undefined
  categoryTreeEndPoint: string
  displayName: string
  mappingEndPoint: string
  properties: { [x: string]: unknown }
}
type ClientProfileData = {
  corporateDocument: string | null
  corporateName: string | null
  corporatePhone: string | null
  document: string
  email: string
  firstName: string
  lastName: string
  phone: string
  stateInscription: string | null
  tradeName: string | null
}
type Fields = { marketplacePaymentMethod: string }
type CustomApp = { fields: Fields; id: string; major: number }
type CustomData = { customApps: CustomApp[] }
type UserPaymentInfo = { paymentMethods: string[] }
type InvoiceData = { userPaymentInfo: UserPaymentInfo }
type Item = { id: string; price: number; quantity: number }
type DeliveryIds = { warehouseId: string }
type LogisticsInfo = {
  deliveryIds: DeliveryIds
  lockTTL: string
  price: number
  selectedDeliveryChannel: string
  selectedSla: string
  shippingEstimate: string
}
type GeoCoordinates = { latitude: string; longitude: string }
type SelectedAddress = {
  addressId: string
  addressType: string
  city?: string | undefined
  complement?: string | undefined
  country: string
  geoCoordinates?: GeoCoordinates | undefined
  neighborhood?: string | undefined
  number?: string | undefined
  postalCode: string
  receiverName: string
  state?: string | undefined
  street?: string | undefined
}
type ShippingData = {
  isFob: boolean
  isMarketplaceFulfillment: boolean
  logisticsInfo: LogisticsInfo[]
  selectedAddresses: SelectedAddress[]
}
type EnqueueNewOrderRequest = {
  allowFranchises: boolean
  clientProfileData: ClientProfileData
  connectorEndpoint?: string | undefined
  connectorName?: string | undefined
  customData?: CustomData | undefined
  invoiceData: InvoiceData
  items: Item[]
  marketplaceOrderId: string
  marketplaceOrderStatus: string
  marketplacePaymentValue: number
  pickupAccountName?: string | undefined
  shippingData: ShippingData
}
type Deliverybyseller = {
  accountName: string
  code: string
  errors: { code: string; description: string; source: string }[] | null
  fields: {
    fields?: { franchiseOrderId?: string | undefined; mainOrderId: string } | undefined
  } | null
  flow: string
  marketplaceOrderId: string | null
  message: string
  operationId: string | null
  success: boolean
}
type Deliverybyfranchiseseller = {
  accountName: string
  code: string
  errors: { code: string; description: string; source: string }[] | null
  fields: {
    fields?: { franchiseOrderId?: string | undefined; mainOrderId: string } | undefined
  } | null
  flow: string
  marketplaceOrderId: string | null
  message: string | null
  operationId: string | null
  success: boolean
}
type UpdateOrderStatusRequest = {
  connectorEndpoint: string
  connectorName: string
  marketplaceOrderId: string
  marketplaceOrderStatus: string
}
type Approveorder = {
  accountName: string | null
  code: string
  errors: { code: string; description: string; source: string }[] | null
  fields: {
    fields?: { franchiseOrderId?: string | undefined; mainOrderId: string } | undefined
  } | null
  flow: string
  marketplaceOrderId: string | null
  message: string
  operationId: string | null
  success: boolean
}
type FulfillmentItem = { id: string; quantity: number; seller: string }
type BundleItemsItem = {
  id?: number | undefined
  name?: string | undefined
  price?: number | undefined
  type?: string | undefined
}
type ItemAttachment = { content?: string | undefined; name?: string | undefined }
type OrderPlacement = {
  clientProfileData?:
    | {
        corporateDocument?: (string | null) | undefined
        corporateName?: (string | null) | undefined
        corporatePhone?: (string | null) | undefined
        document: string
        documentType: string
        email: string
        firstName: string
        isCorporate: boolean | null
        lastName: string
        phone?: string | undefined
        stateInscription?: (string | null) | undefined
        tradeName?: (string | null) | undefined
      }
    | undefined
  items?:
    | {
        attachments?: { [x: string]: unknown }[] | undefined
        bundleItems?: BundleItemsItem[] | undefined
        commission?: number | undefined
        freightCommission?: number | undefined
        id?: string | undefined
        isGift?: boolean | undefined
        itemsAttachment?: ItemAttachment[] | undefined
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
        quantity?: number | undefined
        seller?: string | undefined
        unitMultiplier?: number | undefined
      }[]
    | undefined
  marketingData?:
    | {
        utmCampaign?: string | undefined
        utmMedium?: string | undefined
        utmSource?: string | undefined
        utmiCampaign?: string | undefined
        utmiPage?: string | undefined
        utmiPart?: string | undefined
      }
    | undefined
  marketplaceOrderId?: string | undefined
  marketplacePaymentValue?: number | undefined
  marketplaceServicesEndpoint?: string | undefined
  openTextField?: string | undefined
  paymentData?: ({ [x: string]: unknown } | null) | undefined
  shippingData?:
    | {
        address?:
          | {
              addressId?: string | undefined
              addressType: string
              city: string
              complement?: string | undefined
              country: string
              geoCoordinates?: string[] | undefined
              neighborhood: string
              number: string
              postalCode: string
              receiverName: string
              reference?: string | undefined
              state: string
              street: string
            }
          | undefined
        logisticsInfo?:
          | {
              deliveryWindow?:
                | {
                    endDateUtc?: string | undefined
                    listPrice?: number | undefined
                    startDateUtc?: string | undefined
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
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/checkout/pub/orderForms/simulation': {
      $post: {
        input: { query: { affiliateId?: string | undefined; sc?: number | undefined } } & {
          header: { 'Content-Type': string; Accept: string }
        } & {
          json: {
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
            country?: string | undefined
            geoCoordinates?: number[] | undefined
            isCheckedIn?: boolean | undefined
            items?:
              | {
                  id?: string | undefined
                  quantity?: number | undefined
                  seller?: string | undefined
                }[]
              | undefined
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
            postalCode?: string | undefined
            selectedSla?: string | undefined
            storeId?: (string | null) | undefined
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
    '/portal.vtexcommercestable.com.br/api/mkp-category-mapper/categories/marketplace/:id': {
      $post: {
        input: { param: { id: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: SendCategoryMappingToVtexMapper }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/portal.vtexcommercestable.com.br/api/mkp-category-mapper/connector/register': {
      $post: {
        input: { query: { an: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: VtexMapperRegistration }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:accountName.vtexcommercestable.com.br/api/order-integration/orders': {
      $post:
        | {
            input: { param: { accountName: string } } & {
              query: { an?: string | undefined; affiliateId: string }
            } & { header: { 'Content-Type': string; Accept: string } } & {
              json: EnqueueNewOrderRequest
            }
            output: Deliverybyseller
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountName: string } } & {
              query: { an?: string | undefined; affiliateId: string }
            } & { header: { 'Content-Type': string; Accept: string } } & {
              json: EnqueueNewOrderRequest
            }
            output: Deliverybyfranchiseseller
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:accountName.vtexcommercestable.com.br/api/order-integration/orders/status': {
      $put: {
        input: { param: { accountName: string } } & { query: { an?: string | undefined } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: UpdateOrderStatusRequest }
        output: Approveorder
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:accountName.{environment}.com.br/api/fulfillment/pvt/orders': {
      $post: {
        input: { param: { accountName: string; environment: string } } & {
          query: { sc?: string | undefined; affiliateId: string }
        } & { header: { 'Content-Type': string; Accept: string } } & {
          json: {
            clientProfileData: {
              corporateDocument?: (string | null) | undefined
              corporateName?: (string | null) | undefined
              corporatePhone?: (string | null) | undefined
              document: string
              documentType: string
              email: string
              firstName: string
              isCorporate?: (boolean | null) | undefined
              lastName: string
              phone?: string | undefined
              stateInscription?: (string | null) | undefined
              tradeName?: (string | null) | undefined
            }
            isCreatedAsync?: boolean | undefined
            items: {
              attachments?: string[] | undefined
              bundleItems?:
                | {
                    id?: number | undefined
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
                  utmCampaign?: string | undefined
                  utmMedium?: string | undefined
                  utmSource?: string | undefined
                  utmiCampaign?: string | undefined
                  utmiPage?: string | undefined
                  utmiPart?: string | undefined
                }
              | undefined
            marketplaceOrderId: string
            marketplacePaymentValue: number
            marketplaceServicesEndpoint: string
            openTextField?: string | undefined
            paymentData?: ({ [x: string]: unknown } | null) | undefined
            shippingData: {
              address?:
                | {
                    addressId?: string | undefined
                    addressType: string
                    city: string
                    complement?: string | undefined
                    country: string
                    geoCoordinates?: string[] | undefined
                    neighborhood?: string | undefined
                    number: string
                    postalCode: string
                    receiverName: string
                    reference?: string | undefined
                    state: string
                    street: string
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
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:accountName.{environment}.com.br/api/fulfillment/pvt/orders/:orderId/fulfill': {
      $post: {
        input: { param: { accountName: string; environment: string; orderId: string } } & {
          query: { sc?: string | undefined; affiliateId: string }
        } & { header: { 'Content-Type': string; Accept: string } } & {
          json: { marketplaceOrderId?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:fulfillmentEndpoint/pvt/orderForms/simulation': {
      $post: {
        input: { param: { fulfillmentEndpoint: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & {
          json: {
            country?: string | undefined
            geoCoordinates?: string[] | undefined
            items?: FulfillmentItem[] | undefined
            postalCode: string
            sc?: string | undefined
          }
        }
        output: {
          country: string
          items: {
            id: string
            listPrice: number
            measurementUnit: string
            merchantName: string
            offerings: { id: string; name: string; price: number; type: string }[]
            price: number
            priceTags: string[]
            priceValidUntil: string | null
            quantity: number
            requestIndex: number
            seller: string
            unitMultiplier: number
          }[]
          logisticsInfo: {
            deliveryChannels: { id: string; stockBalance: number }[]
            itemIndex: number
            quantity: number
            shipsTo: string[]
            slas: {
              availableDeliveryWindows: {
                endDateUtc: string
                price: number
                startDateUtc: string
              }[]
              deliveryChannel: string
              id: string
              name: string
              pickupStoreInfo: {
                additionalInfo: string
                address: {
                  addressId: string
                  addressType: string
                  city: string
                  complement: string
                  country: string
                  geoCoordinates: number[]
                  neighborhood: string
                  number: string
                  postalCode: string
                  receiverName: string | null
                  reference: string | null
                  state: string
                  street: string
                }
                friendlyName: string
                isPickupStore: boolean
              } | null
              price: number
              shippingEstimate: string
            }[]
            stockBalance: number
          }[]
          postalCode: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:fulfillmentEndpoint/pvt/orders': {
      $post: {
        input: { param: { fulfillmentEndpoint: string } } & {
          header: {
            'content-length': string
            authorization: string
            'x-vtex-api-appkey': string
            'x-vtex-api-apptoken': string
            accept: string
            'accept-enconding': string
            'x-vtex-operation-id': string
            'x-forwarded-proto': string
            'x-forwarded-for': string
            'x-vtex-cache-client-bypass': string
            'content-type': string
            traceparent: string
          }
        } & { json: OrderPlacement }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:fulfillmentEndpoint/pvt/orders/:orderId/cancel': {
      $post: {
        input: { param: { fulfillmentEndpoint: string; orderId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & { json: { marketplaceOrderId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:fulfillmentEndpoint/pvt/orders/:sellerOrderId/fulfill': {
      $post: {
        input: { param: { fulfillmentEndpoint: string; sellerOrderId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & { json: { marketplaceOrderId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:marketplaceServicesEndpoint/pvt/orders/:marketplaceOrderId/cancel': {
      $post: {
        input: { param: { marketplaceServicesEndpoint: string; marketplaceOrderId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & { json: { reason: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:marketplaceServicesEndpoint/pvt/orders/:marketplaceOrderId/invoice': {
      $post: {
        input: { param: { marketplaceServicesEndpoint: string; marketplaceOrderId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & {
          json: {
            courier?: string | undefined
            invoiceNumber: string
            invoiceValue?: number | undefined
            issuanceDate?: string | undefined
            items: { id: string; price: number; quantity: number }[]
            trackingNumber?: string | undefined
            trackingUrl?: string | undefined
            type: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:marketplaceServicesEndpoint/pvt/orders/:marketplaceOrderId/invoice/:invoiceNumber': {
      $post: {
        input: {
          param: {
            marketplaceServicesEndpoint: string
            marketplaceOrderId: string
            invoiceNumber: string
          }
        } & { header: { Accept: string; 'Content-Type': string } } & {
          json: {
            courier?: string | undefined
            dispatchedDate?: string | undefined
            trackingNumber?: string | undefined
            trackingUrl?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:marketplaceServicesEndpoint/pvt/orders/:marketplaceOrderId/invoice/:invoiceNumber/tracking': {
      $post: {
        input: {
          param: {
            marketplaceServicesEndpoint: string
            marketplaceOrderId: string
            invoiceNumber: string
          }
        } & { header: { Accept: string; 'Content-Type': string } } & {
          json: {
            events?:
              | {
                  city?: string | undefined
                  date?: string | undefined
                  description?: string | undefined
                  state?: string | undefined
                }[]
              | undefined
            isDelivered: boolean
          }
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
