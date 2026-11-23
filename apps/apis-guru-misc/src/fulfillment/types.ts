declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/accounting': {
      $get: {
        input: {
          query: {
            fromDate: string
            toDate: string
            page?: number | undefined
            limit?: number | undefined
            warehouseIds?: number[] | undefined
            orderIds?: number[] | undefined
            hydrate: 'items'[]
          }
        }
        output: {
          data?:
            | {
                fees?:
                  | {
                      box?: number | undefined
                      envelope?: number | undefined
                      fulfillment?: number | undefined
                      insert?: number | undefined
                      kitting?: number | undefined
                      picking?: number | undefined
                      postage?: number | undefined
                      print?: number | undefined
                      total?: number | undefined
                    }
                  | undefined
                itemCount?: number | undefined
                items?:
                  | {
                      id?: number | undefined
                      name?: string | undefined
                      quantity?: number | undefined
                      wmsItemId?: string | undefined
                    }[]
                  | undefined
                merchant?: { id?: number | undefined; name?: string | undefined } | undefined
                order?:
                  | {
                      id?: number | undefined
                      invoiceDate?: string | undefined
                      merchantOrderId?: number | undefined
                      recordedDate?: string | undefined
                    }
                  | undefined
                warehouse?: { id?: number | undefined; shortName?: string | undefined } | undefined
              }[]
            | undefined
          meta?:
            | {
                pagination?:
                  | {
                      count?: number | undefined
                      currentPage?: number | undefined
                      total?: number | undefined
                      totalPages?: number | undefined
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
    '/inventory': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                limit?: number | undefined
                merchantIds?: number[] | undefined
                warehouseIds?: number[] | undefined
                externalSkuNames?: string[] | undefined
              }
            }
            output: {
              data?:
                | {
                    item?:
                      | { id?: number | undefined; skuReference?: string | undefined }
                      | undefined
                    merchant?: { name?: string | undefined } | undefined
                    quantity?:
                      | { total?: { availableToPromise?: number | undefined } | undefined }
                      | undefined
                  }[]
                | undefined
              meta?:
                | {
                    pagination?:
                      | {
                          count?: number | undefined
                          currentPage?: number | undefined
                          total?: number | undefined
                          totalPages?: number | undefined
                        }
                      | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                limit?: number | undefined
                merchantIds?: number[] | undefined
                warehouseIds?: number[] | undefined
                externalSkuNames?: string[] | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page?: number | undefined
                limit?: number | undefined
                merchantIds?: number[] | undefined
                warehouseIds?: number[] | undefined
                externalSkuNames?: string[] | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                limit?: number | undefined
                merchantIds?: number[] | undefined
                warehouseIds?: number[] | undefined
                externalSkuNames?: string[] | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                limit?: number | undefined
                merchantIds?: number[] | undefined
                warehouseIds?: number[] | undefined
                externalSkuNames?: string[] | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/oauth/access_token': {
      $post:
        | {
            input: {
              json:
                | {
                    password: string
                    username: string
                    client_id: string
                    client_secret: string
                    grant_type: 'password' | 'refresh_token'
                    scope: 'oms'
                  }
                | {
                    refresh_token: string
                    client_id: string
                    client_secret: string
                    grant_type: 'password' | 'refresh_token'
                    scope: 'oms'
                  }
            }
            output: {
              access_token?: string | undefined
              expires_in?: number | undefined
              refresh_token?: string | undefined
              token_type?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json:
                | {
                    password: string
                    username: string
                    client_id: string
                    client_secret: string
                    grant_type: 'password' | 'refresh_token'
                    scope: 'oms'
                  }
                | {
                    refresh_token: string
                    client_id: string
                    client_secret: string
                    grant_type: 'password' | 'refresh_token'
                    scope: 'oms'
                  }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/orders': {
      $get:
        | {
            input: {
              query: {
                fromDate: string
                toDate: string
                merchantIds?: number[] | undefined
                warehouseIds?: number[] | undefined
                page?: number | undefined
                limit?: number | undefined
                hydrate?: ('integrator' | 'lineItems' | 'trackingNumbers.carrier')[] | undefined
              }
            }
            output:
              | {
                  currentStatus: {
                    createdBy?: { id: number } | undefined
                    date?: string | undefined
                    id: number
                    reason?: string | undefined
                    status?:
                      | {
                          actionRequiredBy?:
                            | { id?: number | undefined; name?: string | undefined }
                            | undefined
                          code: string
                          detail?: string | undefined
                          detailCode: string
                          id?: number | undefined
                          isClosed?: boolean | undefined
                          name?: string | undefined
                          reason?: string | undefined
                          stage: { code?: string | undefined; name?: string | undefined }
                          state: { code?: string | undefined; name?: string | undefined }
                        }
                      | undefined
                  }
                  departDate?: string | undefined
                  dispatchDate?: string | undefined
                  id: number
                  merchant: { id: number; name: string }
                  merchantOrderId: string
                  merchantShippingMethod: string
                  originalConsignee: {
                    address1: string
                    address2?: string | undefined
                    addressLocality: string
                    addressRegion: string
                    companyName?: string | undefined
                    country: string
                    email?: string | undefined
                    firstName: string
                    id: number
                    iso?:
                      | {
                          id?: number | undefined
                          iso2?: string | undefined
                          name?: string | undefined
                        }
                      | undefined
                    lastName: string
                    phone?: string | undefined
                    postalCode: string
                    updatedAt?: string | undefined
                    updatedBy?: { id: number } | undefined
                  }
                  parentOrder?: { id?: number | undefined } | undefined
                  purchaseOrderNum?: string | undefined
                  recordedOn: string
                  trackingNumbers?:
                    | {
                        barcodeScanValue?: string | undefined
                        carrier?: { id: number } | undefined
                        value?: string | undefined
                      }[]
                    | undefined
                  validatedConsignee: {
                    address1: string
                    address2?: string | undefined
                    addressLocality: string
                    addressRegion: string
                    companyName?: string | undefined
                    country: string
                    email?: string | undefined
                    firstName: string
                    id: number
                    iso?:
                      | {
                          id?: number | undefined
                          iso2?: string | undefined
                          name?: string | undefined
                        }
                      | undefined
                    lastName: string
                    phone?: string | undefined
                    postalCode: string
                    updatedAt?: string | undefined
                    updatedBy?: { id: number } | undefined
                  }
                  warehouse?: { id: number } | undefined
                }
              | {
                  currentStatus: {
                    createdBy?: { id: number } | undefined
                    date?: string | undefined
                    id: number
                    reason?: string | undefined
                    status?:
                      | {
                          actionRequiredBy?:
                            | { id?: number | undefined; name?: string | undefined }
                            | undefined
                          code: string
                          detail?: string | undefined
                          detailCode: string
                          id?: number | undefined
                          isClosed?: boolean | undefined
                          name?: string | undefined
                          reason?: string | undefined
                          stage: { code?: string | undefined; name?: string | undefined }
                          state: { code?: string | undefined; name?: string | undefined }
                        }
                      | undefined
                  }
                  departDate?: string | undefined
                  dispatchDate?: string | undefined
                  id: number
                  merchant: { id: number; name: string }
                  merchantOrderId: string
                  merchantShippingMethod: string
                  originalConsignee: {
                    address1: string
                    address2?: string | undefined
                    addressLocality: string
                    addressRegion: string
                    companyName?: string | undefined
                    country: string
                    email?: string | undefined
                    firstName: string
                    id: number
                    iso?:
                      | {
                          id?: number | undefined
                          iso2?: string | undefined
                          name?: string | undefined
                        }
                      | undefined
                    lastName: string
                    phone?: string | undefined
                    postalCode: string
                    updatedAt?: string | undefined
                    updatedBy?: { id: number } | undefined
                  }
                  parentOrder?: { id?: number | undefined } | undefined
                  purchaseOrderNum?: string | undefined
                  recordedOn: string
                  trackingNumbers?:
                    | {
                        carrier?:
                          | {
                              canReprintPostage?: boolean | undefined
                              enabled?: boolean | undefined
                              id: number
                              includePeripherals?: boolean | undefined
                              internalRatesOnly?: boolean | undefined
                              name: string
                              requiresDimensions?: boolean | undefined
                              symbol: string
                            }
                          | undefined
                      }[]
                    | undefined
                  validatedConsignee: {
                    address1: string
                    address2?: string | undefined
                    addressLocality: string
                    addressRegion: string
                    companyName?: string | undefined
                    country: string
                    email?: string | undefined
                    firstName: string
                    id: number
                    iso?:
                      | {
                          id?: number | undefined
                          iso2?: string | undefined
                          name?: string | undefined
                        }
                      | undefined
                    lastName: string
                    phone?: string | undefined
                    postalCode: string
                    updatedAt?: string | undefined
                    updatedBy?: { id: number } | undefined
                  }
                  warehouse?: { id: number } | undefined
                  integrator?: string | undefined
                  lineItems?:
                    | {
                        id?: number | undefined
                        inventoryDetails?:
                          | {
                              expirationDate?: string | undefined
                              lotNum?: string | undefined
                              quantity?: number | undefined
                              serialNum?: string | undefined
                            }[]
                          | undefined
                        lineDetails?:
                          | {
                              description?: string | undefined
                              externalSku?: string | undefined
                              id?: number | undefined
                              name?: string | undefined
                              totalQuantity?: number | undefined
                            }
                          | undefined
                        requestedSkuData?:
                          | {
                              declaredValue?: string | undefined
                              id?: number | undefined
                              quantity?: number | undefined
                              sku?: string | undefined
                            }
                          | undefined
                      }[]
                    | undefined
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fromDate: string
                toDate: string
                merchantIds?: number[] | undefined
                warehouseIds?: number[] | undefined
                page?: number | undefined
                limit?: number | undefined
                hydrate?: ('integrator' | 'lineItems' | 'trackingNumbers.carrier')[] | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: {
              json: {
                integrator?:
                  | '1ShoppingCart'
                  | '3dCart'
                  | 'AdobeBC'
                  | 'AmazonAU'
                  | 'AmazonEU'
                  | 'AmazonNA'
                  | 'BigCommerce'
                  | 'BrandBoom'
                  | 'BrightPearl'
                  | 'BuyGoods'
                  | 'Celery'
                  | 'ChannelAdvisor'
                  | 'Clickbank'
                  | 'CommerceHub'
                  | 'Custom'
                  | 'Demandware'
                  | 'Ebay'
                  | 'Ecwid'
                  | 'Etsy'
                  | 'FoxyCart'
                  | 'Goodsie'
                  | 'Infusionsoft'
                  | 'Konnektive'
                  | 'LimeLight'
                  | 'Linio'
                  | 'Linnworks'
                  | 'Magento'
                  | 'Netsuite'
                  | 'NewEgg'
                  | 'Nexternal'
                  | 'NuOrder'
                  | 'Opencart'
                  | 'OrderWave'
                  | 'osCommerce1'
                  | 'Overstock'
                  | 'PayPal'
                  | 'PrestaShop'
                  | 'Pricefalls'
                  | 'Quickbooks'
                  | 'Rakuten'
                  | 'Sears'
                  | 'Sellbrite'
                  | 'SellerCloud'
                  | 'Shipstation'
                  | 'Shopify'
                  | 'Skubana'
                  | 'SolidCommerce'
                  | 'SparkPay'
                  | 'SpreeCommerce'
                  | 'spsCommerce'
                  | 'StitchLabs'
                  | 'StoneEdge'
                  | 'TradeGecko'
                  | 'UltraCart'
                  | 'Volusion'
                  | 'VTEX'
                  | 'Walmart'
                  | 'WooCommerce'
                  | 'Yahoo'
                  | undefined
                items: { declaredValue: string; quantity: number; sku: string }[]
                merchantId?: number | undefined
                merchantOrderId: string
                notes?: string | undefined
                recipient: {
                  address1: string
                  address2?: string | undefined
                  addressLocality: string
                  addressRegion: string
                  companyName?: string | undefined
                  country: string
                  email: string
                  firstName: string
                  lastName: string
                  phone: string
                  postalCode?: string | undefined
                }
                shippingMethod: string
                warehouse?: { id?: number | undefined } | undefined
              }
            }
            output: {
              currentStatus: {
                createdBy?: { id: number } | undefined
                date?: string | undefined
                id: number
                reason?: string | undefined
                status?:
                  | {
                      actionRequiredBy?:
                        | { id?: number | undefined; name?: string | undefined }
                        | undefined
                      code: string
                      detail?: string | undefined
                      detailCode: string
                      id?: number | undefined
                      isClosed?: boolean | undefined
                      name?: string | undefined
                      reason?: string | undefined
                      stage: { code?: string | undefined; name?: string | undefined }
                      state: { code?: string | undefined; name?: string | undefined }
                    }
                  | undefined
              }
              departDate?: string | undefined
              dispatchDate?: string | undefined
              id: number
              merchant: { id: number; name: string }
              merchantOrderId: string
              merchantShippingMethod: string
              originalConsignee: {
                address1: string
                address2?: string | undefined
                addressLocality: string
                addressRegion: string
                companyName?: string | undefined
                country: string
                email?: string | undefined
                firstName: string
                id: number
                iso?:
                  | {
                      id?: number | undefined
                      iso2?: string | undefined
                      name?: string | undefined
                    }
                  | undefined
                lastName: string
                phone?: string | undefined
                postalCode: string
                updatedAt?: string | undefined
                updatedBy?: { id: number } | undefined
              }
              parentOrder?: { id?: number | undefined } | undefined
              purchaseOrderNum?: string | undefined
              recordedOn: string
              trackingNumbers?:
                | {
                    barcodeScanValue?: string | undefined
                    carrier?: { id: number } | undefined
                    value?: string | undefined
                  }[]
                | undefined
              validatedConsignee: {
                address1: string
                address2?: string | undefined
                addressLocality: string
                addressRegion: string
                companyName?: string | undefined
                country: string
                email?: string | undefined
                firstName: string
                id: number
                iso?:
                  | {
                      id?: number | undefined
                      iso2?: string | undefined
                      name?: string | undefined
                    }
                  | undefined
                lastName: string
                phone?: string | undefined
                postalCode: string
                updatedAt?: string | undefined
                updatedBy?: { id: number } | undefined
              }
              warehouse?: { id: number } | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                integrator?:
                  | '1ShoppingCart'
                  | '3dCart'
                  | 'AdobeBC'
                  | 'AmazonAU'
                  | 'AmazonEU'
                  | 'AmazonNA'
                  | 'BigCommerce'
                  | 'BrandBoom'
                  | 'BrightPearl'
                  | 'BuyGoods'
                  | 'Celery'
                  | 'ChannelAdvisor'
                  | 'Clickbank'
                  | 'CommerceHub'
                  | 'Custom'
                  | 'Demandware'
                  | 'Ebay'
                  | 'Ecwid'
                  | 'Etsy'
                  | 'FoxyCart'
                  | 'Goodsie'
                  | 'Infusionsoft'
                  | 'Konnektive'
                  | 'LimeLight'
                  | 'Linio'
                  | 'Linnworks'
                  | 'Magento'
                  | 'Netsuite'
                  | 'NewEgg'
                  | 'Nexternal'
                  | 'NuOrder'
                  | 'Opencart'
                  | 'OrderWave'
                  | 'osCommerce1'
                  | 'Overstock'
                  | 'PayPal'
                  | 'PrestaShop'
                  | 'Pricefalls'
                  | 'Quickbooks'
                  | 'Rakuten'
                  | 'Sears'
                  | 'Sellbrite'
                  | 'SellerCloud'
                  | 'Shipstation'
                  | 'Shopify'
                  | 'Skubana'
                  | 'SolidCommerce'
                  | 'SparkPay'
                  | 'SpreeCommerce'
                  | 'spsCommerce'
                  | 'StitchLabs'
                  | 'StoneEdge'
                  | 'TradeGecko'
                  | 'UltraCart'
                  | 'Volusion'
                  | 'VTEX'
                  | 'Walmart'
                  | 'WooCommerce'
                  | 'Yahoo'
                  | undefined
                items: { declaredValue: string; quantity: number; sku: string }[]
                merchantId?: number | undefined
                merchantOrderId: string
                notes?: string | undefined
                recipient: {
                  address1: string
                  address2?: string | undefined
                  addressLocality: string
                  addressRegion: string
                  companyName?: string | undefined
                  country: string
                  email: string
                  firstName: string
                  lastName: string
                  phone: string
                  postalCode?: string | undefined
                }
                shippingMethod: string
                warehouse?: { id?: number | undefined } | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                integrator?:
                  | '1ShoppingCart'
                  | '3dCart'
                  | 'AdobeBC'
                  | 'AmazonAU'
                  | 'AmazonEU'
                  | 'AmazonNA'
                  | 'BigCommerce'
                  | 'BrandBoom'
                  | 'BrightPearl'
                  | 'BuyGoods'
                  | 'Celery'
                  | 'ChannelAdvisor'
                  | 'Clickbank'
                  | 'CommerceHub'
                  | 'Custom'
                  | 'Demandware'
                  | 'Ebay'
                  | 'Ecwid'
                  | 'Etsy'
                  | 'FoxyCart'
                  | 'Goodsie'
                  | 'Infusionsoft'
                  | 'Konnektive'
                  | 'LimeLight'
                  | 'Linio'
                  | 'Linnworks'
                  | 'Magento'
                  | 'Netsuite'
                  | 'NewEgg'
                  | 'Nexternal'
                  | 'NuOrder'
                  | 'Opencart'
                  | 'OrderWave'
                  | 'osCommerce1'
                  | 'Overstock'
                  | 'PayPal'
                  | 'PrestaShop'
                  | 'Pricefalls'
                  | 'Quickbooks'
                  | 'Rakuten'
                  | 'Sears'
                  | 'Sellbrite'
                  | 'SellerCloud'
                  | 'Shipstation'
                  | 'Shopify'
                  | 'Skubana'
                  | 'SolidCommerce'
                  | 'SparkPay'
                  | 'SpreeCommerce'
                  | 'spsCommerce'
                  | 'StitchLabs'
                  | 'StoneEdge'
                  | 'TradeGecko'
                  | 'UltraCart'
                  | 'Volusion'
                  | 'VTEX'
                  | 'Walmart'
                  | 'WooCommerce'
                  | 'Yahoo'
                  | undefined
                items: { declaredValue: string; quantity: number; sku: string }[]
                merchantId?: number | undefined
                merchantOrderId: string
                notes?: string | undefined
                recipient: {
                  address1: string
                  address2?: string | undefined
                  addressLocality: string
                  addressRegion: string
                  companyName?: string | undefined
                  country: string
                  email: string
                  firstName: string
                  lastName: string
                  phone: string
                  postalCode?: string | undefined
                }
                shippingMethod: string
                warehouse?: { id?: number | undefined } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              json: {
                integrator?:
                  | '1ShoppingCart'
                  | '3dCart'
                  | 'AdobeBC'
                  | 'AmazonAU'
                  | 'AmazonEU'
                  | 'AmazonNA'
                  | 'BigCommerce'
                  | 'BrandBoom'
                  | 'BrightPearl'
                  | 'BuyGoods'
                  | 'Celery'
                  | 'ChannelAdvisor'
                  | 'Clickbank'
                  | 'CommerceHub'
                  | 'Custom'
                  | 'Demandware'
                  | 'Ebay'
                  | 'Ecwid'
                  | 'Etsy'
                  | 'FoxyCart'
                  | 'Goodsie'
                  | 'Infusionsoft'
                  | 'Konnektive'
                  | 'LimeLight'
                  | 'Linio'
                  | 'Linnworks'
                  | 'Magento'
                  | 'Netsuite'
                  | 'NewEgg'
                  | 'Nexternal'
                  | 'NuOrder'
                  | 'Opencart'
                  | 'OrderWave'
                  | 'osCommerce1'
                  | 'Overstock'
                  | 'PayPal'
                  | 'PrestaShop'
                  | 'Pricefalls'
                  | 'Quickbooks'
                  | 'Rakuten'
                  | 'Sears'
                  | 'Sellbrite'
                  | 'SellerCloud'
                  | 'Shipstation'
                  | 'Shopify'
                  | 'Skubana'
                  | 'SolidCommerce'
                  | 'SparkPay'
                  | 'SpreeCommerce'
                  | 'spsCommerce'
                  | 'StitchLabs'
                  | 'StoneEdge'
                  | 'TradeGecko'
                  | 'UltraCart'
                  | 'Volusion'
                  | 'VTEX'
                  | 'Walmart'
                  | 'WooCommerce'
                  | 'Yahoo'
                  | undefined
                items: { declaredValue: string; quantity: number; sku: string }[]
                merchantId?: number | undefined
                merchantOrderId: string
                notes?: string | undefined
                recipient: {
                  address1: string
                  address2?: string | undefined
                  addressLocality: string
                  addressRegion: string
                  companyName?: string | undefined
                  country: string
                  email: string
                  firstName: string
                  lastName: string
                  phone: string
                  postalCode?: string | undefined
                }
                shippingMethod: string
                warehouse?: { id?: number | undefined } | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                integrator?:
                  | '1ShoppingCart'
                  | '3dCart'
                  | 'AdobeBC'
                  | 'AmazonAU'
                  | 'AmazonEU'
                  | 'AmazonNA'
                  | 'BigCommerce'
                  | 'BrandBoom'
                  | 'BrightPearl'
                  | 'BuyGoods'
                  | 'Celery'
                  | 'ChannelAdvisor'
                  | 'Clickbank'
                  | 'CommerceHub'
                  | 'Custom'
                  | 'Demandware'
                  | 'Ebay'
                  | 'Ecwid'
                  | 'Etsy'
                  | 'FoxyCart'
                  | 'Goodsie'
                  | 'Infusionsoft'
                  | 'Konnektive'
                  | 'LimeLight'
                  | 'Linio'
                  | 'Linnworks'
                  | 'Magento'
                  | 'Netsuite'
                  | 'NewEgg'
                  | 'Nexternal'
                  | 'NuOrder'
                  | 'Opencart'
                  | 'OrderWave'
                  | 'osCommerce1'
                  | 'Overstock'
                  | 'PayPal'
                  | 'PrestaShop'
                  | 'Pricefalls'
                  | 'Quickbooks'
                  | 'Rakuten'
                  | 'Sears'
                  | 'Sellbrite'
                  | 'SellerCloud'
                  | 'Shipstation'
                  | 'Shopify'
                  | 'Skubana'
                  | 'SolidCommerce'
                  | 'SparkPay'
                  | 'SpreeCommerce'
                  | 'spsCommerce'
                  | 'StitchLabs'
                  | 'StoneEdge'
                  | 'TradeGecko'
                  | 'UltraCart'
                  | 'Volusion'
                  | 'VTEX'
                  | 'Walmart'
                  | 'WooCommerce'
                  | 'Yahoo'
                  | undefined
                items: { declaredValue: string; quantity: number; sku: string }[]
                merchantId?: number | undefined
                merchantOrderId: string
                notes?: string | undefined
                recipient: {
                  address1: string
                  address2?: string | undefined
                  addressLocality: string
                  addressRegion: string
                  companyName?: string | undefined
                  country: string
                  email: string
                  firstName: string
                  lastName: string
                  phone: string
                  postalCode?: string | undefined
                }
                shippingMethod: string
                warehouse?: { id?: number | undefined } | undefined
              }
            }
            output: {
              context?: { [x: string]: unknown }[] | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                integrator?:
                  | '1ShoppingCart'
                  | '3dCart'
                  | 'AdobeBC'
                  | 'AmazonAU'
                  | 'AmazonEU'
                  | 'AmazonNA'
                  | 'BigCommerce'
                  | 'BrandBoom'
                  | 'BrightPearl'
                  | 'BuyGoods'
                  | 'Celery'
                  | 'ChannelAdvisor'
                  | 'Clickbank'
                  | 'CommerceHub'
                  | 'Custom'
                  | 'Demandware'
                  | 'Ebay'
                  | 'Ecwid'
                  | 'Etsy'
                  | 'FoxyCart'
                  | 'Goodsie'
                  | 'Infusionsoft'
                  | 'Konnektive'
                  | 'LimeLight'
                  | 'Linio'
                  | 'Linnworks'
                  | 'Magento'
                  | 'Netsuite'
                  | 'NewEgg'
                  | 'Nexternal'
                  | 'NuOrder'
                  | 'Opencart'
                  | 'OrderWave'
                  | 'osCommerce1'
                  | 'Overstock'
                  | 'PayPal'
                  | 'PrestaShop'
                  | 'Pricefalls'
                  | 'Quickbooks'
                  | 'Rakuten'
                  | 'Sears'
                  | 'Sellbrite'
                  | 'SellerCloud'
                  | 'Shipstation'
                  | 'Shopify'
                  | 'Skubana'
                  | 'SolidCommerce'
                  | 'SparkPay'
                  | 'SpreeCommerce'
                  | 'spsCommerce'
                  | 'StitchLabs'
                  | 'StoneEdge'
                  | 'TradeGecko'
                  | 'UltraCart'
                  | 'Volusion'
                  | 'VTEX'
                  | 'Walmart'
                  | 'WooCommerce'
                  | 'Yahoo'
                  | undefined
                items: { declaredValue: string; quantity: number; sku: string }[]
                merchantId?: number | undefined
                merchantOrderId: string
                notes?: string | undefined
                recipient: {
                  address1: string
                  address2?: string | undefined
                  addressLocality: string
                  addressRegion: string
                  companyName?: string | undefined
                  country: string
                  email: string
                  firstName: string
                  lastName: string
                  phone: string
                  postalCode?: string | undefined
                }
                shippingMethod: string
                warehouse?: { id?: number | undefined } | undefined
              }
            }
            output: {
              context?: { [x: string]: unknown }[] | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/orders/:id': {
      $delete:
        | {
            input: { param: { id: number } }
            output: {
              currentStatus: {
                createdBy?: { id: number } | undefined
                date?: string | undefined
                id: number
                reason?: string | undefined
                status?:
                  | {
                      actionRequiredBy?:
                        | { id?: number | undefined; name?: string | undefined }
                        | undefined
                      code: string
                      detail?: string | undefined
                      detailCode: string
                      id?: number | undefined
                      isClosed?: boolean | undefined
                      name?: string | undefined
                      reason?: string | undefined
                      stage: { code?: string | undefined; name?: string | undefined }
                      state: { code?: string | undefined; name?: string | undefined }
                    }
                  | undefined
              }
              departDate?: string | undefined
              dispatchDate?: string | undefined
              id: number
              merchant: { id: number; name: string }
              merchantOrderId: string
              merchantShippingMethod: string
              originalConsignee: {
                address1: string
                address2?: string | undefined
                addressLocality: string
                addressRegion: string
                companyName?: string | undefined
                country: string
                email?: string | undefined
                firstName: string
                id: number
                iso?:
                  | {
                      id?: number | undefined
                      iso2?: string | undefined
                      name?: string | undefined
                    }
                  | undefined
                lastName: string
                phone?: string | undefined
                postalCode: string
                updatedAt?: string | undefined
                updatedBy?: { id: number } | undefined
              }
              parentOrder?: { id?: number | undefined } | undefined
              purchaseOrderNum?: string | undefined
              recordedOn: string
              trackingNumbers?:
                | {
                    barcodeScanValue?: string | undefined
                    carrier?: { id: number } | undefined
                    value?: string | undefined
                  }[]
                | undefined
              validatedConsignee: {
                address1: string
                address2?: string | undefined
                addressLocality: string
                addressRegion: string
                companyName?: string | undefined
                country: string
                email?: string | undefined
                firstName: string
                id: number
                iso?:
                  | {
                      id?: number | undefined
                      iso2?: string | undefined
                      name?: string | undefined
                    }
                  | undefined
                lastName: string
                phone?: string | undefined
                postalCode: string
                updatedAt?: string | undefined
                updatedBy?: { id: number } | undefined
              }
              warehouse?: { id: number } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | {
            input: { param: { id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 405
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                merchantId?: number | undefined
                hydrate?: ('integrator' | 'lineItems' | 'trackingNumbers.carrier')[] | undefined
              }
            }
            output:
              | {
                  currentStatus: {
                    createdBy?: { id: number } | undefined
                    date?: string | undefined
                    id: number
                    reason?: string | undefined
                    status?:
                      | {
                          actionRequiredBy?:
                            | { id?: number | undefined; name?: string | undefined }
                            | undefined
                          code: string
                          detail?: string | undefined
                          detailCode: string
                          id?: number | undefined
                          isClosed?: boolean | undefined
                          name?: string | undefined
                          reason?: string | undefined
                          stage: { code?: string | undefined; name?: string | undefined }
                          state: { code?: string | undefined; name?: string | undefined }
                        }
                      | undefined
                  }
                  departDate?: string | undefined
                  dispatchDate?: string | undefined
                  id: number
                  merchant: { id: number; name: string }
                  merchantOrderId: string
                  merchantShippingMethod: string
                  originalConsignee: {
                    address1: string
                    address2?: string | undefined
                    addressLocality: string
                    addressRegion: string
                    companyName?: string | undefined
                    country: string
                    email?: string | undefined
                    firstName: string
                    id: number
                    iso?:
                      | {
                          id?: number | undefined
                          iso2?: string | undefined
                          name?: string | undefined
                        }
                      | undefined
                    lastName: string
                    phone?: string | undefined
                    postalCode: string
                    updatedAt?: string | undefined
                    updatedBy?: { id: number } | undefined
                  }
                  parentOrder?: { id?: number | undefined } | undefined
                  purchaseOrderNum?: string | undefined
                  recordedOn: string
                  trackingNumbers?:
                    | {
                        barcodeScanValue?: string | undefined
                        carrier?: { id: number } | undefined
                        value?: string | undefined
                      }[]
                    | undefined
                  validatedConsignee: {
                    address1: string
                    address2?: string | undefined
                    addressLocality: string
                    addressRegion: string
                    companyName?: string | undefined
                    country: string
                    email?: string | undefined
                    firstName: string
                    id: number
                    iso?:
                      | {
                          id?: number | undefined
                          iso2?: string | undefined
                          name?: string | undefined
                        }
                      | undefined
                    lastName: string
                    phone?: string | undefined
                    postalCode: string
                    updatedAt?: string | undefined
                    updatedBy?: { id: number } | undefined
                  }
                  warehouse?: { id: number } | undefined
                }
              | {
                  currentStatus: {
                    createdBy?: { id: number } | undefined
                    date?: string | undefined
                    id: number
                    reason?: string | undefined
                    status?:
                      | {
                          actionRequiredBy?:
                            | { id?: number | undefined; name?: string | undefined }
                            | undefined
                          code: string
                          detail?: string | undefined
                          detailCode: string
                          id?: number | undefined
                          isClosed?: boolean | undefined
                          name?: string | undefined
                          reason?: string | undefined
                          stage: { code?: string | undefined; name?: string | undefined }
                          state: { code?: string | undefined; name?: string | undefined }
                        }
                      | undefined
                  }
                  departDate?: string | undefined
                  dispatchDate?: string | undefined
                  id: number
                  merchant: { id: number; name: string }
                  merchantOrderId: string
                  merchantShippingMethod: string
                  originalConsignee: {
                    address1: string
                    address2?: string | undefined
                    addressLocality: string
                    addressRegion: string
                    companyName?: string | undefined
                    country: string
                    email?: string | undefined
                    firstName: string
                    id: number
                    iso?:
                      | {
                          id?: number | undefined
                          iso2?: string | undefined
                          name?: string | undefined
                        }
                      | undefined
                    lastName: string
                    phone?: string | undefined
                    postalCode: string
                    updatedAt?: string | undefined
                    updatedBy?: { id: number } | undefined
                  }
                  parentOrder?: { id?: number | undefined } | undefined
                  purchaseOrderNum?: string | undefined
                  recordedOn: string
                  trackingNumbers?:
                    | {
                        carrier?:
                          | {
                              canReprintPostage?: boolean | undefined
                              enabled?: boolean | undefined
                              id: number
                              includePeripherals?: boolean | undefined
                              internalRatesOnly?: boolean | undefined
                              name: string
                              requiresDimensions?: boolean | undefined
                              symbol: string
                            }
                          | undefined
                      }[]
                    | undefined
                  validatedConsignee: {
                    address1: string
                    address2?: string | undefined
                    addressLocality: string
                    addressRegion: string
                    companyName?: string | undefined
                    country: string
                    email?: string | undefined
                    firstName: string
                    id: number
                    iso?:
                      | {
                          id?: number | undefined
                          iso2?: string | undefined
                          name?: string | undefined
                        }
                      | undefined
                    lastName: string
                    phone?: string | undefined
                    postalCode: string
                    updatedAt?: string | undefined
                    updatedBy?: { id: number } | undefined
                  }
                  warehouse?: { id: number } | undefined
                  integrator?: string | undefined
                  lineItems?:
                    | {
                        id?: number | undefined
                        inventoryDetails?:
                          | {
                              expirationDate?: string | undefined
                              lotNum?: string | undefined
                              quantity?: number | undefined
                              serialNum?: string | undefined
                            }[]
                          | undefined
                        lineDetails?:
                          | {
                              description?: string | undefined
                              externalSku?: string | undefined
                              id?: number | undefined
                              name?: string | undefined
                              totalQuantity?: number | undefined
                            }
                          | undefined
                        requestedSkuData?:
                          | {
                              declaredValue?: string | undefined
                              id?: number | undefined
                              quantity?: number | undefined
                              sku?: string | undefined
                            }
                          | undefined
                      }[]
                    | undefined
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                merchantId?: number | undefined
                hydrate?: ('integrator' | 'lineItems' | 'trackingNumbers.carrier')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/orders/:id/ship': {
      $put:
        | {
            input: { param: { id: number } } & {
              json: { trackingNumber: string; weightOverride?: number | undefined }
            }
            output: {
              currentStatus: {
                createdBy?: { id: number } | undefined
                date?: string | undefined
                id: number
                reason?: string | undefined
                status?:
                  | {
                      actionRequiredBy?:
                        | { id?: number | undefined; name?: string | undefined }
                        | undefined
                      code: string
                      detail?: string | undefined
                      detailCode: string
                      id?: number | undefined
                      isClosed?: boolean | undefined
                      name?: string | undefined
                      reason?: string | undefined
                      stage: { code?: string | undefined; name?: string | undefined }
                      state: { code?: string | undefined; name?: string | undefined }
                    }
                  | undefined
              }
              departDate?: string | undefined
              dispatchDate?: string | undefined
              id: number
              merchant: { id: number; name: string }
              merchantOrderId: string
              merchantShippingMethod: string
              originalConsignee: {
                address1: string
                address2?: string | undefined
                addressLocality: string
                addressRegion: string
                companyName?: string | undefined
                country: string
                email?: string | undefined
                firstName: string
                id: number
                iso?:
                  | {
                      id?: number | undefined
                      iso2?: string | undefined
                      name?: string | undefined
                    }
                  | undefined
                lastName: string
                phone?: string | undefined
                postalCode: string
                updatedAt?: string | undefined
                updatedBy?: { id: number } | undefined
              }
              parentOrder?: { id?: number | undefined } | undefined
              purchaseOrderNum?: string | undefined
              recordedOn: string
              trackingNumbers?:
                | {
                    barcodeScanValue?: string | undefined
                    carrier?: { id: number } | undefined
                    value?: string | undefined
                  }[]
                | undefined
              validatedConsignee: {
                address1: string
                address2?: string | undefined
                addressLocality: string
                addressRegion: string
                companyName?: string | undefined
                country: string
                email?: string | undefined
                firstName: string
                id: number
                iso?:
                  | {
                      id?: number | undefined
                      iso2?: string | undefined
                      name?: string | undefined
                    }
                  | undefined
                lastName: string
                phone?: string | undefined
                postalCode: string
                updatedAt?: string | undefined
                updatedBy?: { id: number } | undefined
              }
              warehouse?: { id: number } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              json: { trackingNumber: string; weightOverride?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/orders/:id/status': {
      $put:
        | {
            input: { param: { id: number } } & {
              json: { reason: string; status: { code: string } }
            }
            output: {
              currentStatus: {
                createdBy?: { id: number } | undefined
                date?: string | undefined
                id: number
                reason?: string | undefined
                status?:
                  | {
                      actionRequiredBy?:
                        | { id?: number | undefined; name?: string | undefined }
                        | undefined
                      code: string
                      detail?: string | undefined
                      detailCode: string
                      id?: number | undefined
                      isClosed?: boolean | undefined
                      name?: string | undefined
                      reason?: string | undefined
                      stage: { code?: string | undefined; name?: string | undefined }
                      state: { code?: string | undefined; name?: string | undefined }
                    }
                  | undefined
              }
              departDate?: string | undefined
              dispatchDate?: string | undefined
              id: number
              merchant: { id: number; name: string }
              merchantOrderId: string
              merchantShippingMethod: string
              originalConsignee: {
                address1: string
                address2?: string | undefined
                addressLocality: string
                addressRegion: string
                companyName?: string | undefined
                country: string
                email?: string | undefined
                firstName: string
                id: number
                iso?:
                  | {
                      id?: number | undefined
                      iso2?: string | undefined
                      name?: string | undefined
                    }
                  | undefined
                lastName: string
                phone?: string | undefined
                postalCode: string
                updatedAt?: string | undefined
                updatedBy?: { id: number } | undefined
              }
              parentOrder?: { id?: number | undefined } | undefined
              purchaseOrderNum?: string | undefined
              recordedOn: string
              trackingNumbers?:
                | {
                    barcodeScanValue?: string | undefined
                    carrier?: { id: number } | undefined
                    value?: string | undefined
                  }[]
                | undefined
              validatedConsignee: {
                address1: string
                address2?: string | undefined
                addressLocality: string
                addressRegion: string
                companyName?: string | undefined
                country: string
                email?: string | undefined
                firstName: string
                id: number
                iso?:
                  | {
                      id?: number | undefined
                      iso2?: string | undefined
                      name?: string | undefined
                    }
                  | undefined
                lastName: string
                phone?: string | undefined
                postalCode: string
                updatedAt?: string | undefined
                updatedBy?: { id: number } | undefined
              }
              warehouse?: { id: number } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              json: { reason: string; status: { code: string } }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/returns': {
      $get: {
        input: {
          query: {
            fromDate: string
            toDate: string
            page?: number | undefined
            limit?: number | undefined
          }
        }
        output: {
          data?:
            | {
                comments?: (string | null) | undefined
                createdAt: string
                createdBy: { id: number }
                id: number
                order?:
                  | ({
                      id?: number | undefined
                      merchantId?: number | undefined
                      merchantOrderId?: string | undefined
                    } | null)
                  | undefined
                reason: { id: number; title: string }
                returnedBy?: string | undefined
                rmaItems?:
                  | {
                      comments?: (string | null) | undefined
                      id?: number | undefined
                      item?: { id?: number | undefined; sku?: string | undefined } | undefined
                      nonRestockedReason?:
                        | ({ id?: number | undefined; title?: string | undefined } | null)
                        | undefined
                      quantityExpected?: (number | null) | undefined
                      quantityRestocked?: number | undefined
                      quantityReturned?: number | undefined
                      quantityShipped?: number | undefined
                    }[]
                  | undefined
                rmaNumber?: (string | null) | undefined
                status: { id: number; title: string }
                updatedAt: string
                updatedBy: { id: number }
              }[]
            | undefined
          meta?:
            | {
                pagination?:
                  | {
                      count?: number | undefined
                      currentPage?: number | undefined
                      total?: number | undefined
                      totalPages?: number | undefined
                    }
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: {
              json: {
                items: { quantityExpected: number; sku: string }[]
                merchantOrderId?: string | undefined
                recipient: {
                  address1: string
                  address2?: string | undefined
                  addressLocality: string
                  addressRegion: string
                  companyName?: string | undefined
                  country: string
                  email: string
                  firstName: string
                  lastName: string
                  phone: string
                  postalCode?: string | undefined
                }
                rmaNumber: string
              }
            }
            output: {
              items: { quantityExpected: number; sku: string }[]
              merchantOrderId?: string | undefined
              recipient: {
                address1: string
                address2?: string | undefined
                addressLocality: string
                addressRegion: string
                companyName?: string | undefined
                country: string
                email?: string | undefined
                firstName: string
                id: number
                iso?:
                  | {
                      id?: number | undefined
                      iso2?: string | undefined
                      name?: string | undefined
                    }
                  | undefined
                lastName: string
                phone?: string | undefined
                postalCode: string
                updatedAt?: string | undefined
                updatedBy?: { id: number } | undefined
              }
              rmaNumber: string
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                items: { quantityExpected: number; sku: string }[]
                merchantOrderId?: string | undefined
                recipient: {
                  address1: string
                  address2?: string | undefined
                  addressLocality: string
                  addressRegion: string
                  companyName?: string | undefined
                  country: string
                  email: string
                  firstName: string
                  lastName: string
                  phone: string
                  postalCode?: string | undefined
                }
                rmaNumber: string
              }
            }
            output: {
              items: { quantityExpected: number; sku: string }[]
              merchantOrderId?: string | undefined
              recipient: {
                address1: string
                address2?: string | undefined
                addressLocality: string
                addressRegion: string
                companyName?: string | undefined
                country: string
                email?: string | undefined
                firstName: string
                id: number
                iso?:
                  | {
                      id?: number | undefined
                      iso2?: string | undefined
                      name?: string | undefined
                    }
                  | undefined
                lastName: string
                phone?: string | undefined
                postalCode: string
                updatedAt?: string | undefined
                updatedBy?: { id: number } | undefined
              }
              rmaNumber: string
            }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              json: {
                items: { quantityExpected: number; sku: string }[]
                merchantOrderId?: string | undefined
                recipient: {
                  address1: string
                  address2?: string | undefined
                  addressLocality: string
                  addressRegion: string
                  companyName?: string | undefined
                  country: string
                  email: string
                  firstName: string
                  lastName: string
                  phone: string
                  postalCode?: string | undefined
                }
                rmaNumber: string
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                items: { quantityExpected: number; sku: string }[]
                merchantOrderId?: string | undefined
                recipient: {
                  address1: string
                  address2?: string | undefined
                  addressLocality: string
                  addressRegion: string
                  companyName?: string | undefined
                  country: string
                  email: string
                  firstName: string
                  lastName: string
                  phone: string
                  postalCode?: string | undefined
                }
                rmaNumber: string
              }
            }
            output: {
              items: { quantityExpected: number; sku: string }[]
              merchantOrderId?: string | undefined
              recipient: {
                address1: string
                address2?: string | undefined
                addressLocality: string
                addressRegion: string
                companyName?: string | undefined
                country: string
                email?: string | undefined
                firstName: string
                id: number
                iso?:
                  | {
                      id?: number | undefined
                      iso2?: string | undefined
                      name?: string | undefined
                    }
                  | undefined
                lastName: string
                phone?: string | undefined
                postalCode: string
                updatedAt?: string | undefined
                updatedBy?: { id: number } | undefined
              }
              rmaNumber: string
            }
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/track': {
      $get:
        | {
            input: { query: { trackingNumber?: string | undefined } }
            output: {
              destination?:
                | {
                    bbox?: { [x: string]: unknown }[] | undefined
                    centerline?:
                      | {
                          coordinates: number[][] | number[]
                          type:
                            | 'Point'
                            | 'LineString'
                            | 'Polygon'
                            | 'MultiPoint'
                            | 'MultiLineString'
                            | 'MultiPolygon'
                        }
                      | undefined
                    geometry: {
                      coordinates: number[][] | number[]
                      type:
                        | 'Point'
                        | 'LineString'
                        | 'Polygon'
                        | 'MultiPoint'
                        | 'MultiLineString'
                        | 'MultiPolygon'
                    }
                    id?: number | undefined
                    properties: { name?: string | undefined }
                    title?: string | undefined
                    type: 'Feature'
                  }
                | undefined
              fdcOrderId?: number | undefined
              firstCheckedDateTime?: string | undefined
              firstTransitEvent?: string | undefined
              lastCheckedDateTime?: string | undefined
              lastUpdatedDateTime?: string | undefined
              origin?:
                | {
                    bbox?: { [x: string]: unknown }[] | undefined
                    centerline?:
                      | {
                          coordinates: number[][] | number[]
                          type:
                            | 'Point'
                            | 'LineString'
                            | 'Polygon'
                            | 'MultiPoint'
                            | 'MultiLineString'
                            | 'MultiPolygon'
                        }
                      | undefined
                    geometry: {
                      coordinates: number[][] | number[]
                      type:
                        | 'Point'
                        | 'LineString'
                        | 'Polygon'
                        | 'MultiPoint'
                        | 'MultiLineString'
                        | 'MultiPolygon'
                    }
                    id?: number | undefined
                    properties: { name?: string | undefined }
                    title?: string | undefined
                    type: 'Feature'
                  }
                | undefined
              status?: string | undefined
              statusCategoryCode?: number | undefined
              statusDateTime?: string | undefined
              statusMessage?: string | undefined
              trackedEvents?:
                | {
                    eventCategory?: string | undefined
                    eventCategoryCode?: number | undefined
                    eventDateTime?: string | undefined
                    eventLocation?:
                      | {
                          bbox?: { [x: string]: unknown }[] | undefined
                          centerline?:
                            | {
                                coordinates: number[][] | number[]
                                type:
                                  | 'Point'
                                  | 'LineString'
                                  | 'Polygon'
                                  | 'MultiPoint'
                                  | 'MultiLineString'
                                  | 'MultiPolygon'
                              }
                            | undefined
                          geometry: {
                            coordinates: number[][] | number[]
                            type:
                              | 'Point'
                              | 'LineString'
                              | 'Polygon'
                              | 'MultiPoint'
                              | 'MultiLineString'
                              | 'MultiPolygon'
                          }
                          id?: number | undefined
                          properties: { name?: string | undefined }
                          title?: string | undefined
                          type: 'Feature'
                        }
                      | undefined
                    eventSource?: 'carrier' | 'internal' | undefined
                    eventStatus?: string | undefined
                  }[]
                | undefined
              trackingNumber?:
                | {
                    barcodeScanValue?: string | undefined
                    carrier?: { id: number } | undefined
                    value?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { trackingNumber?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { trackingNumber?: string | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/users/me': {
      $get: {
        input: {}
        output: {
          apiKey?: string | undefined
          contactInfo?:
            | {
                apiKey?: string | undefined
                contactInfo?:
                  | {
                      address1: string
                      address2?: string | undefined
                      addressLocality: string
                      addressRegion: string
                      companyName?: string | undefined
                      country: string
                      email?: string | undefined
                      firstName: string
                      id: number
                      iso?:
                        | {
                            id?: number | undefined
                            iso2?: string | undefined
                            name?: string | undefined
                          }
                        | undefined
                      lastName: string
                      phone?: string | undefined
                      postalCode: string
                      updatedAt?: string | undefined
                      updatedBy?: { id: number } | undefined
                    }
                  | undefined
                createDate?: string | undefined
                deptLeader?: boolean | undefined
                id: number
                merchant?: { id?: number | undefined } | undefined
                name?: string | undefined
                status?: boolean | undefined
                updatedAt?: string | undefined
                updatedBy?: string | undefined
                username?: string | undefined
              }
            | undefined
          createDate?: string | undefined
          deptLeader?: boolean | undefined
          id: number
          merchant?: { id?: number | undefined } | undefined
          name?: string | undefined
          status?: boolean | undefined
          updatedAt?: string | undefined
          updatedBy?: string | undefined
          username?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
