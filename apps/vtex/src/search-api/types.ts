declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/catalog_system/pub/facets/category/:categoryId': {
      $get: {
        input: { param: { categoryId: string } } & {
          query: { _from?: string | undefined; _to?: string | undefined }
        } & { header: { Accept: string; 'Content-Type': string } }
        output: { Id: number; Name: string }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pub/facets/search/:term': {
      $get: {
        input: { param: { term: string } } & {
          query: { map: string; _from?: string | undefined; _to?: string | undefined }
        } & { header: { Accept: string; 'Content-Type': string } }
        output: {
          Brands: {
            Link: string
            LinkEncoded: string
            Map: string
            Name: string
            Position: number | null
            Quantity: number
            Value: string
          }[]
          CategoriesTrees: {
            Children: {
              Children: { [x: string]: unknown }[]
              Id: number
              Link: string
              LinkEncoded: string
              Map: string
              Name: string
              Position: number | null
              Quantity: number
              Value: string
            }[]
            Id: number
            Link: string
            LinkEncoded: string
            Map: string
            Name: string
            Position: number | null
            Quantity: number
            Value: string
          }[]
          Departments: {
            Link: string
            LinkEncoded: string
            Map: string
            Name: string
            Position: number | null
            Quantity: number
            Value: string
          }[]
          PriceRanges: { [x: string]: unknown }[]
          SpecificationFilters: { [x: string]: unknown }
          Summary: {
            Brands: { DisplayedItems: number; TotalItems: number }
            CategoriesTrees: { DisplayedItems: number; TotalItems: number }
            Departments: { DisplayedItems: number; TotalItems: number }
            PriceRanges: { DisplayedItems: number; TotalItems: number }
            SpecificationFilters: { [x: string]: unknown }
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pub/products/crossselling/accessories/:productId': {
      $get: {
        input: { param: { productId: number } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pub/products/crossselling/showtogether/:productId': {
      $get: {
        input: { param: { productId: number } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pub/products/crossselling/similars/:productId': {
      $get: {
        input: { param: { productId: number } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pub/products/crossselling/suggestions/:productId': {
      $get: {
        input: { param: { productId: number } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pub/products/crossselling/whoboughtalsobought/:productId': {
      $get: {
        input: { param: { productId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: {
          allSpecifications: string[]
          allSpecificationsGroups: string[]
          brand: string
          brandId: number
          brandImageUrl: string
          categories: { [x: string]: unknown }[]
          categoriesIds: { [x: string]: unknown }[]
          categoryId: string
          clusterHighlights: { [x: string]: unknown }
          description: string | null
          items: {
            Videos: { [x: string]: unknown }[]
            complementName: string
            ean: string
            estimatedDateArrival: string | null
            images: {
              imageId: string
              imageLabel: string
              imageLastModified: string
              imageTag: string
              imageText: string | null
              imageUrl: string
            }[]
            isKit: boolean
            itemId: string
            kitItems: { amount: number; itemId: string }[]
            measurementUnit: string
            modalType: string | null
            name: string
            nameComplete: string
            referenceId: { Key: string; Value: string }[]
            sellers: {
              addToCartLink: string
              commertialOffer: {
                AvailableQuantity: number
                BuyTogether: { [x: string]: unknown }[]
                CacheVersionUsedToCallCheckout: string
                DeliverySlaSamples: {
                  DeliverySlaPerTypes: { [x: string]: unknown }[]
                  Region: string | null
                }[]
                DeliverySlaSamplesPerRegion: {
                  '0'?:
                    | { DeliverySlaPerTypes: { [x: string]: unknown }[]; Region: string | null }
                    | undefined
                }
                DiscountHighLight: { [x: string]: unknown }[]
                GetInfoErrorMessage: string | null
                GiftSkuIds: { [x: string]: unknown }[]
                Installments: {
                  InterestRate: number
                  Name: string
                  NumberOfInstallments: number
                  PaymentSystemGroupName: string
                  PaymentSystemName: string
                  TotalValuePlusInterestRate: number
                  Value: number
                }[]
                IsAvailable: boolean
                ItemMetadataAttachment: { [x: string]: unknown }[]
                ListPrice: number
                PaymentOptions: {
                  availableAccounts: { [x: string]: unknown }[]
                  availableTokens: { [x: string]: unknown }[]
                  giftCardMessages: { [x: string]: unknown }[]
                  giftCards: { [x: string]: unknown }[]
                  installmentOptions: {
                    bin: string | null
                    installments: {
                      count: number
                      hasInterestRate: boolean
                      interestRate: number
                      sellerMerchantInstallments: {
                        count: number
                        hasInterestRate: boolean
                        id: string
                        interestRate: number
                        total: number
                        value: number
                      }[]
                      total: number
                      value: number
                    }[]
                    paymentGroupName: string
                    paymentName: string
                    paymentSystem: string
                    value: number
                  }[]
                  paymentSystems: {
                    availablePayments: string | null
                    description: string | null
                    dueDate: string
                    groupName: string
                    id: number
                    isCustom: boolean
                    name: string
                    requiresAuthentication: boolean
                    requiresDocument: boolean
                    stringId: string
                    template: string
                    validator: string | null
                  }[]
                  payments: { [x: string]: unknown }[]
                }
                Price: number
                PriceValidUntil: string
                PriceWithoutDiscount: number
                RewardValue: number
                SaleChannel: number
                Tax: number
                Teasers: { [x: string]: unknown }[]
              }
              sellerDefault: boolean
              sellerId: string
              sellerName: string
            }[]
            unitMultiplier: number
          }[]
          link: string
          linkText: string
          metaTagDescription: string
          productClusters: { [x: string]: unknown }
          productId: string
          productName: string
          productReference: string
          productReferenceCode: number | null
          productTitle: string
          releaseDate: string
          searchableClusters: { [x: string]: unknown }
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pub/products/crossselling/whosawalsobought/:productId': {
      $get: {
        input: { param: { productId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: {
          allSpecifications: string[]
          allSpecificationsGroups: string[]
          brand: string
          brandId: number
          brandImageUrl: string
          categories: { [x: string]: unknown }[]
          categoriesIds: { [x: string]: unknown }[]
          categoryId: string
          clusterHighlights: { [x: string]: unknown }
          description: string | null
          items: {
            Videos: { [x: string]: unknown }[]
            complementName: string
            ean: string
            estimatedDateArrival: string | null
            images: {
              imageId: string
              imageLabel: string
              imageLastModified: string
              imageTag: string
              imageText: string | null
              imageUrl: string
            }[]
            isKit: boolean
            itemId: string
            kitItems: { amount: number; itemId: string }[]
            measurementUnit: string
            modalType: string | null
            name: string
            nameComplete: string
            referenceId: { Key: string; Value: string }[]
            sellers: {
              addToCartLink: string
              commertialOffer: {
                AvailableQuantity: number
                BuyTogether: { [x: string]: unknown }[]
                CacheVersionUsedToCallCheckout: string
                DeliverySlaSamples: {
                  DeliverySlaPerTypes: { [x: string]: unknown }[]
                  Region: string | null
                }[]
                DeliverySlaSamplesPerRegion: {
                  '0'?:
                    | { DeliverySlaPerTypes: { [x: string]: unknown }[]; Region: string | null }
                    | undefined
                }
                DiscountHighLight: { [x: string]: unknown }[]
                GetInfoErrorMessage: string | null
                GiftSkuIds: { [x: string]: unknown }[]
                Installments: {
                  InterestRate: number
                  Name: string
                  NumberOfInstallments: number
                  PaymentSystemGroupName: string
                  PaymentSystemName: string
                  TotalValuePlusInterestRate: number
                  Value: number
                }[]
                IsAvailable: boolean
                ItemMetadataAttachment: { [x: string]: unknown }[]
                ListPrice: number
                PaymentOptions: {
                  availableAccounts: { [x: string]: unknown }[]
                  availableTokens: { [x: string]: unknown }[]
                  giftCardMessages: { [x: string]: unknown }[]
                  giftCards: { [x: string]: unknown }[]
                  installmentOptions: {
                    bin: string | null
                    installments: {
                      count: number
                      hasInterestRate: boolean
                      interestRate: number
                      sellerMerchantInstallments: {
                        count: number
                        hasInterestRate: boolean
                        id: string
                        interestRate: number
                        total: number
                        value: number
                      }[]
                      total: number
                      value: number
                    }[]
                    paymentGroupName: string
                    paymentName: string
                    paymentSystem: string
                    value: number
                  }[]
                  paymentSystems: {
                    availablePayments: string | null
                    description: string | null
                    dueDate: string
                    groupName: string
                    id: number
                    isCustom: boolean
                    name: string
                    requiresAuthentication: boolean
                    requiresDocument: boolean
                    stringId: string
                    template: string
                    validator: string | null
                  }[]
                  payments: { [x: string]: unknown }[]
                }
                Price: number
                PriceValidUntil: string
                PriceWithoutDiscount: number
                RewardValue: number
                SaleChannel: number
                Tax: number
                Teasers: { [x: string]: unknown }[]
              }
              sellerDefault: boolean
              sellerId: string
              sellerName: string
            }[]
            unitMultiplier: number
          }[]
          link: string
          linkText: string
          metaTagDescription: string
          productClusters: { [x: string]: unknown }
          productId: string
          productName: string
          productReference: string
          productReferenceCode: number | null
          productTitle: string
          releaseDate: string
          searchableClusters: { [x: string]: unknown }
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pub/products/crossselling/whosawalsosaw/:productId': {
      $get: {
        input: { param: { productId: number } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: {
          allSpecifications: string[]
          allSpecificationsGroups: string[]
          brand: string
          brandId: number
          brandImageUrl: string
          categories: { [x: string]: unknown }[]
          categoriesIds: { [x: string]: unknown }[]
          categoryId: string
          clusterHighlights: { [x: string]: unknown }
          description: string | null
          items: {
            Videos: { [x: string]: unknown }[]
            complementName: string
            ean: string
            estimatedDateArrival: string | null
            images: {
              imageId: string
              imageLabel: string
              imageLastModified: string
              imageTag: string
              imageText: string | null
              imageUrl: string
            }[]
            isKit: boolean
            itemId: string
            kitItems: { amount: number; itemId: string }[]
            measurementUnit: string
            modalType: string | null
            name: string
            nameComplete: string
            referenceId: { Key: string; Value: string }[]
            sellers: {
              addToCartLink: string
              commertialOffer: {
                AvailableQuantity: number
                BuyTogether: { [x: string]: unknown }[]
                CacheVersionUsedToCallCheckout: string
                DeliverySlaSamples: {
                  DeliverySlaPerTypes: { [x: string]: unknown }[]
                  Region: string | null
                }[]
                DeliverySlaSamplesPerRegion: {
                  '0'?:
                    | { DeliverySlaPerTypes: { [x: string]: unknown }[]; Region: string | null }
                    | undefined
                }
                DiscountHighLight: { [x: string]: unknown }[]
                GetInfoErrorMessage: string | null
                GiftSkuIds: { [x: string]: unknown }[]
                Installments: {
                  InterestRate: number
                  Name: string
                  NumberOfInstallments: number
                  PaymentSystemGroupName: string
                  PaymentSystemName: string
                  TotalValuePlusInterestRate: number
                  Value: number
                }[]
                IsAvailable: boolean
                ItemMetadataAttachment: { [x: string]: unknown }[]
                ListPrice: number
                PaymentOptions: {
                  availableAccounts: { [x: string]: unknown }[]
                  availableTokens: { [x: string]: unknown }[]
                  giftCardMessages: { [x: string]: unknown }[]
                  giftCards: { [x: string]: unknown }[]
                  installmentOptions: {
                    bin: string | null
                    installments: {
                      count: number
                      hasInterestRate: boolean
                      interestRate: number
                      sellerMerchantInstallments: {
                        count: number
                        hasInterestRate: boolean
                        id: string
                        interestRate: number
                        total: number
                        value: number
                      }[]
                      total: number
                      value: number
                    }[]
                    paymentGroupName: string
                    paymentName: string
                    paymentSystem: string
                    value: number
                  }[]
                  paymentSystems: {
                    availablePayments: string | null
                    description: string | null
                    dueDate: string
                    groupName: string
                    id: number
                    isCustom: boolean
                    name: string
                    requiresAuthentication: boolean
                    requiresDocument: boolean
                    stringId: string
                    template: string
                    validator: string | null
                  }[]
                  payments: { [x: string]: unknown }[]
                }
                Price: number
                PriceValidUntil: string
                PriceWithoutDiscount: number
                RewardValue: number
                SaleChannel: number
                Tax: number
                Teasers: { [x: string]: unknown }[]
              }
              sellerDefault: boolean
              sellerId: string
              sellerName: string
            }[]
            unitMultiplier: number
          }[]
          link: string
          linkText: string
          metaTagDescription: string
          productClusters: { [x: string]: unknown }
          productId: string
          productName: string
          productReference: string
          productReferenceCode: number | null
          productTitle: string
          releaseDate: string
          searchableClusters: { [x: string]: unknown }
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pub/products/offers/:productId': {
      $get: {
        input: { param: { productId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: {
          EanId: string
          IsActive: boolean
          LastModified: string
          MainImage: {
            ImageId: string
            ImageLabel: string | null
            ImagePath: string
            ImageTag: string
            ImageText: string | null
            IsMain: boolean
            IsZoomSize: boolean
            LastModified: string
          }
          Name: string
          NameComplete: string
          Offers: {
            AvailableSalesChannels: string | null
            OffersPerSalesChannel: {
              AvailableQuantity: number
              IsAvailable: boolean
              ListPrice: number
              Price: number
              PriceWithoutDiscount: number
              SaleChannel: number
            }[]
            SellerId: string
            SellerSkuId: string
          }[]
          ProductId: string
          RefId: string
          SkuId: string
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pub/products/offers/:productId/sku/:skuId': {
      $get: {
        input: { param: { productId: string; skuId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: {
          EanId: string
          IsActive: boolean
          LastModified: string
          MainImage: {
            ImageId: string
            ImageLabel: string | null
            ImagePath: string
            ImageTag: string
            ImageText: string | null
            IsMain: boolean
            IsZoomSize: boolean
            LastModified: string
          }
          Name: string
          NameComplete: string
          Offers: {
            AvailableSalesChannels: string | null
            OffersPerSalesChannel: {
              AvailableQuantity: number
              IsAvailable: boolean
              ListPrice: number
              Price: number
              PriceWithoutDiscount: number
              SaleChannel: number
            }[]
            SellerId: string
            SellerSkuId: string
          }[]
          ProductId: string
          RefId: string
          SkuId: string
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pub/products/search': {
      $get: {
        input: {
          query: {
            _from?: string | undefined
            _to?: string | undefined
            ft?: string | undefined
            fq?: string | undefined
            O?: string | undefined
          }
        } & { header: { Accept: string; 'Content-Type': string } }
        output: {
          allSpecifications: string[]
          allSpecificationsGroups: string[]
          brand: string
          brandId: number
          brandImageUrl: string
          categories: { [x: string]: unknown }[]
          categoriesIds: { [x: string]: unknown }[]
          categoryId: string
          clusterHighlights: { [x: string]: unknown }
          description: string | null
          items: {
            Videos: { [x: string]: unknown }[]
            complementName: string
            ean: string
            estimatedDateArrival: string | null
            images: {
              imageId: string
              imageLabel: string
              imageLastModified: string
              imageTag: string
              imageText: string | null
              imageUrl: string
            }[]
            isKit: boolean
            itemId: string
            kitItems: { amount: number; itemId: string }[]
            measurementUnit: string
            modalType: string | null
            name: string
            nameComplete: string
            referenceId: { Key: string; Value: string }[]
            sellers: {
              addToCartLink: string
              commertialOffer: {
                AvailableQuantity: number
                BuyTogether: { [x: string]: unknown }[]
                CacheVersionUsedToCallCheckout: string
                DeliverySlaSamples: {
                  DeliverySlaPerTypes: { [x: string]: unknown }[]
                  Region: string | null
                }[]
                DeliverySlaSamplesPerRegion: {
                  '0'?:
                    | { DeliverySlaPerTypes: { [x: string]: unknown }[]; Region: string | null }
                    | undefined
                }
                DiscountHighLight: { [x: string]: unknown }[]
                GetInfoErrorMessage: string | null
                GiftSkuIds: { [x: string]: unknown }[]
                Installments: {
                  InterestRate: number
                  Name: string
                  NumberOfInstallments: number
                  PaymentSystemGroupName: string
                  PaymentSystemName: string
                  TotalValuePlusInterestRate: number
                  Value: number
                }[]
                IsAvailable: boolean
                ItemMetadataAttachment: { [x: string]: unknown }[]
                ListPrice: number
                PaymentOptions: {
                  availableAccounts: { [x: string]: unknown }[]
                  availableTokens: { [x: string]: unknown }[]
                  giftCardMessages: { [x: string]: unknown }[]
                  giftCards: { [x: string]: unknown }[]
                  installmentOptions: {
                    bin: string | null
                    installments: {
                      count: number
                      hasInterestRate: boolean
                      interestRate: number
                      sellerMerchantInstallments: {
                        count: number
                        hasInterestRate: boolean
                        id: string
                        interestRate: number
                        total: number
                        value: number
                      }[]
                      total: number
                      value: number
                    }[]
                    paymentGroupName: string
                    paymentName: string
                    paymentSystem: string
                    value: number
                  }[]
                  paymentSystems: {
                    availablePayments: string | null
                    description: string | null
                    dueDate: string
                    groupName: string
                    id: number
                    isCustom: boolean
                    name: string
                    requiresAuthentication: boolean
                    requiresDocument: boolean
                    stringId: string
                    template: string
                    validator: string | null
                  }[]
                  payments: { [x: string]: unknown }[]
                }
                Price: number
                PriceValidUntil: string
                PriceWithoutDiscount: number
                RewardValue: number
                SaleChannel: number
                Tax: number
                Teasers: { [x: string]: unknown }[]
              }
              sellerDefault: boolean
              sellerId: string
              sellerName: string
            }[]
            unitMultiplier: number
          }[]
          link: string
          linkText: string
          metaTagDescription: string
          productClusters: { [x: string]: unknown }
          productId: string
          productName: string
          productReference: string
          productReferenceCode: number | null
          productTitle: string
          releaseDate: string
          searchableClusters: { [x: string]: unknown }
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pub/products/search/:product-text-link/p': {
      $get: {
        input: { param: { 'product-text-link': string } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: {
          allSpecifications: string[]
          allSpecificationsGroups: string[]
          brand: string
          brandId: number
          brandImageUrl: string
          categories: { [x: string]: unknown }[]
          categoriesIds: { [x: string]: unknown }[]
          categoryId: string
          clusterHighlights: { [x: string]: unknown }
          description: string | null
          items: {
            Videos: { [x: string]: unknown }[]
            complementName: string
            ean: string
            estimatedDateArrival: string | null
            images: {
              imageId: string
              imageLabel: string
              imageLastModified: string
              imageTag: string
              imageText: string | null
              imageUrl: string
            }[]
            isKit: boolean
            itemId: string
            kitItems: { amount: number; itemId: string }[]
            measurementUnit: string
            modalType: string | null
            name: string
            nameComplete: string
            referenceId: { Key: string; Value: string }[]
            sellers: {
              addToCartLink: string
              commertialOffer: {
                AvailableQuantity: number
                BuyTogether: { [x: string]: unknown }[]
                CacheVersionUsedToCallCheckout: string
                DeliverySlaSamples: {
                  DeliverySlaPerTypes: { [x: string]: unknown }[]
                  Region: string | null
                }[]
                DeliverySlaSamplesPerRegion: {
                  '0'?:
                    | { DeliverySlaPerTypes: { [x: string]: unknown }[]; Region: string | null }
                    | undefined
                }
                DiscountHighLight: { [x: string]: unknown }[]
                GetInfoErrorMessage: string | null
                GiftSkuIds: { [x: string]: unknown }[]
                Installments: {
                  InterestRate: number
                  Name: string
                  NumberOfInstallments: number
                  PaymentSystemGroupName: string
                  PaymentSystemName: string
                  TotalValuePlusInterestRate: number
                  Value: number
                }[]
                IsAvailable: boolean
                ItemMetadataAttachment: { [x: string]: unknown }[]
                ListPrice: number
                PaymentOptions: {
                  availableAccounts: { [x: string]: unknown }[]
                  availableTokens: { [x: string]: unknown }[]
                  giftCardMessages: { [x: string]: unknown }[]
                  giftCards: { [x: string]: unknown }[]
                  installmentOptions: {
                    bin: string | null
                    installments: {
                      count: number
                      hasInterestRate: boolean
                      interestRate: number
                      sellerMerchantInstallments: {
                        count: number
                        hasInterestRate: boolean
                        id: string
                        interestRate: number
                        total: number
                        value: number
                      }[]
                      total: number
                      value: number
                    }[]
                    paymentGroupName: string
                    paymentName: string
                    paymentSystem: string
                    value: number
                  }[]
                  paymentSystems: {
                    availablePayments: string | null
                    description: string | null
                    dueDate: string
                    groupName: string
                    id: number
                    isCustom: boolean
                    name: string
                    requiresAuthentication: boolean
                    requiresDocument: boolean
                    stringId: string
                    template: string
                    validator: string | null
                  }[]
                  payments: { [x: string]: unknown }[]
                }
                Price: number
                PriceValidUntil: string
                PriceWithoutDiscount: number
                RewardValue: number
                SaleChannel: number
                Tax: number
                Teasers: { [x: string]: unknown }[]
              }
              sellerDefault: boolean
              sellerId: string
              sellerName: string
            }[]
            unitMultiplier: number
          }[]
          link: string
          linkText: string
          metaTagDescription: string
          productClusters: { [x: string]: unknown }
          productId: string
          productName: string
          productReference: string
          productReferenceCode: number | null
          productTitle: string
          releaseDate: string
          searchableClusters: { [x: string]: unknown }
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pub/products/search/:search': {
      $get: {
        input: { param: { search: string } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: {
          allSpecifications: string[]
          allSpecificationsGroups: string[]
          brand: string
          brandId: number
          brandImageUrl: string
          categories: { [x: string]: unknown }[]
          categoriesIds: { [x: string]: unknown }[]
          categoryId: string
          clusterHighlights: { [x: string]: unknown }
          description: string | null
          items: {
            Videos: { [x: string]: unknown }[]
            complementName: string
            ean: string
            estimatedDateArrival: string | null
            images: {
              imageId: string
              imageLabel: string
              imageLastModified: string
              imageTag: string
              imageText: string | null
              imageUrl: string
            }[]
            isKit: boolean
            itemId: string
            kitItems: { amount: number; itemId: string }[]
            measurementUnit: string
            modalType: string | null
            name: string
            nameComplete: string
            referenceId: { Key: string; Value: string }[]
            sellers: {
              addToCartLink: string
              commertialOffer: {
                AvailableQuantity: number
                BuyTogether: { [x: string]: unknown }[]
                CacheVersionUsedToCallCheckout: string
                DeliverySlaSamples: {
                  DeliverySlaPerTypes: { [x: string]: unknown }[]
                  Region: string | null
                }[]
                DeliverySlaSamplesPerRegion: {
                  '0'?:
                    | { DeliverySlaPerTypes: { [x: string]: unknown }[]; Region: string | null }
                    | undefined
                }
                DiscountHighLight: { [x: string]: unknown }[]
                GetInfoErrorMessage: string | null
                GiftSkuIds: { [x: string]: unknown }[]
                Installments: {
                  InterestRate: number
                  Name: string
                  NumberOfInstallments: number
                  PaymentSystemGroupName: string
                  PaymentSystemName: string
                  TotalValuePlusInterestRate: number
                  Value: number
                }[]
                IsAvailable: boolean
                ItemMetadataAttachment: { [x: string]: unknown }[]
                ListPrice: number
                PaymentOptions: {
                  availableAccounts: { [x: string]: unknown }[]
                  availableTokens: { [x: string]: unknown }[]
                  giftCardMessages: { [x: string]: unknown }[]
                  giftCards: { [x: string]: unknown }[]
                  installmentOptions: {
                    bin: string | null
                    installments: {
                      count: number
                      hasInterestRate: boolean
                      interestRate: number
                      sellerMerchantInstallments: {
                        count: number
                        hasInterestRate: boolean
                        id: string
                        interestRate: number
                        total: number
                        value: number
                      }[]
                      total: number
                      value: number
                    }[]
                    paymentGroupName: string
                    paymentName: string
                    paymentSystem: string
                    value: number
                  }[]
                  paymentSystems: {
                    availablePayments: string | null
                    description: string | null
                    dueDate: string
                    groupName: string
                    id: number
                    isCustom: boolean
                    name: string
                    requiresAuthentication: boolean
                    requiresDocument: boolean
                    stringId: string
                    template: string
                    validator: string | null
                  }[]
                  payments: { [x: string]: unknown }[]
                }
                Price: number
                PriceValidUntil: string
                PriceWithoutDiscount: number
                RewardValue: number
                SaleChannel: number
                Tax: number
                Teasers: { [x: string]: unknown }[]
              }
              sellerDefault: boolean
              sellerId: string
              sellerName: string
            }[]
            unitMultiplier: number
          }[]
          link: string
          linkText: string
          metaTagDescription: string
          productClusters: { [x: string]: unknown }
          productId: string
          productName: string
          productReference: string
          productReferenceCode: number | null
          productTitle: string
          releaseDate: string
          searchableClusters: { [x: string]: unknown }
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/buscaautocomplete': {
      $get: {
        input: { query: { productNameContains: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          itemsReturned: {
            criteria: string | null
            href: string
            items: { [x: string]: unknown }[]
            name: string
            thumb: string
            thumbUrl: string | null
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
