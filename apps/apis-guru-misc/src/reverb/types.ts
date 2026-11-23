declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/articles': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            offset?: number | undefined
            query?: string | undefined
            exclude_featured?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/articles/categories': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/categories': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/categories/flat': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/categories/taxonomy': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/categories/:product_type/:category': {
      $get: {
        input: { param: { product_type: string; category: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/categories/:uuid': {
      $get: { input: { param: { uuid: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/comparison_shopping_pages': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/comparison_shopping_pages/find': {
      $get: {
        input: { query: { id?: string | undefined; slug?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/comparison_shopping_pages/:id': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/comparison_shopping_pages/:id/listings': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            condition: string
            page?: number | undefined
            per_page?: number | undefined
            offset?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/comparison_shopping_pages/:id/reviews': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/conversations/:conversation_id/offer': {
      $post: {
        input: { param: { conversation_id: string } } & {
          json: {
            country_code?: string | undefined
            layaway_terms_slug?: string | undefined
            message?: string | undefined
            offer_items?:
              | { listing_id: string; price: string; shipping_price: string }[]
              | undefined
            price?:
              | {
                  amount: string
                  currency: 'USD' | 'CAD' | 'EUR' | 'GBP' | 'AUD' | 'JPY' | 'NZD' | 'MXN'
                }
              | undefined
            quantity?: string | undefined
            recipient_id?: string | undefined
            region_code?: string | undefined
            shipping_price?:
              | {
                  amount: string
                  currency: 'USD' | 'CAD' | 'EUR' | 'GBP' | 'AUD' | 'JPY' | 'NZD' | 'MXN'
                }
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/conversations/:id/offer': {
      $post: {
        input: { param: { id: string } } & {
          json: { message?: string | undefined; price: string; shipping_price?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & { '/countries': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/csps': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/csps/categories': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/csps/find': {
      $get: {
        input: { query: { id?: string | undefined; slug?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/csps/:id': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/curated_sets/:slug': {
      $get: { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/currencies/display': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/currencies/listing': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/feedback/:feedback_id': {
      $get: {
        input: { param: { feedback_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/handpicked/:slug': {
      $get: {
        input: { param: { slug: string } } & {
          query: {
            query?: string | undefined
            auction_price_max?: number | undefined
            category?: string | undefined
            product_type?: string | undefined
            conditions?: string[] | undefined
            decade?: string | undefined
            finish?: string | undefined
            handmade?: boolean | undefined
            item_city?: string | undefined
            item_country?: string | undefined
            item_region?: string | undefined
            item_state?: string | undefined
            make?: string[] | undefined
            model?: string | undefined
            must_not?: string | undefined
            price_max?: number | undefined
            price_min?: number | undefined
            currency?: string | undefined
            year_max?: number | undefined
            year_min?: number | undefined
            accepts_gift_cards?: boolean | undefined
            preferred_seller?: boolean | undefined
            shop?: string | undefined
            shop_id?: string | undefined
            listing_type?: string | undefined
            ships_to?: string | undefined
            exclude_auctions?: boolean | undefined
            accepts_payment_plans?: boolean | undefined
            watchers_count_min?: number | undefined
            not_ids?: string[] | undefined
            local_pickup?: boolean | undefined
            page?: number | undefined
            per_page?: number | undefined
            offset?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/listing_conditions': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/listings': {
      $get: {
        input: {
          query: {
            query?: string | undefined
            auction_price_max?: number | undefined
            category?: string | undefined
            product_type?: string | undefined
            conditions?: string[] | undefined
            decade?: string | undefined
            finish?: string | undefined
            handmade?: boolean | undefined
            item_city?: string | undefined
            item_country?: string | undefined
            item_region?: string | undefined
            item_state?: string | undefined
            make?: string[] | undefined
            model?: string | undefined
            must_not?: string | undefined
            price_max?: number | undefined
            price_min?: number | undefined
            currency?: string | undefined
            year_max?: number | undefined
            year_min?: number | undefined
            accepts_gift_cards?: boolean | undefined
            preferred_seller?: boolean | undefined
            shop?: string | undefined
            shop_id?: string | undefined
            listing_type?: string | undefined
            ships_to?: string | undefined
            exclude_auctions?: boolean | undefined
            accepts_payment_plans?: boolean | undefined
            watchers_count_min?: number | undefined
            not_ids?: string[] | undefined
            local_pickup?: boolean | undefined
            page?: number | undefined
            per_page?: number | undefined
            offset?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: {
          json: {
            categories?: { uuid?: string | undefined }[] | undefined
            condition?:
              | {
                  uuid:
                    | 'fbf35668-96a0-4baa-bcde-ab18d6b1b329'
                    | '6a9dfcad-600b-46c8-9e08-ce6e5057921e'
                    | '98777886-76d0-44c8-865e-bb40e669e934'
                    | 'f7a3f48c-972a-44c6-b01a-0cd27488d3f6'
                    | 'ae4d9114-1bd7-4ec5-a4ba-6653af5ac84d'
                    | 'df268ad1-c462-4ba6-b6db-e007e23922ea'
                    | 'ac5b9c1e-dc78-466d-b0b3-7cf712967a48'
                    | '6db7df88-293b-4017-a1c1-cdb5e599fa1a'
                    | '9225283f-60c2-4413-ad18-1f5eba7a856f'
                    | '7c3f45de-2ae0-4c81-8400-fdb6b1d74890'
                }
              | undefined
            description?: string | undefined
            exclusive_channel?: 'seller_site' | 'reverb' | 'none' | undefined
            finish?: string | undefined
            has_inventory?: boolean | undefined
            inventory?: number | undefined
            location?:
              | {
                  country_code?: string | undefined
                  locality?: string | undefined
                  region?: string | undefined
                }
              | undefined
            make?: string | undefined
            model?: string | undefined
            multi_item?: boolean | undefined
            offers_enabled?: boolean | undefined
            origin_country_code?: string | undefined
            photos?: string[] | undefined
            preorder_info?:
              | {
                  lead_time?: number | undefined
                  lead_time_unit: 'days' | 'weeks'
                  ship_date?: string | undefined
                }
              | undefined
            price?:
              | {
                  amount: string
                  currency: 'USD' | 'CAD' | 'EUR' | 'GBP' | 'AUD' | 'JPY' | 'NZD' | 'MXN'
                }
              | undefined
            prop_65_warning?: string | undefined
            publish?: boolean | undefined
            seller?: { paypal_email?: string | undefined } | undefined
            seller_cost?: string | undefined
            shipping?:
              | {
                  local?: boolean | undefined
                  rates?:
                    | {
                        rate?:
                          | {
                              amount: string
                              currency:
                                | 'USD'
                                | 'CAD'
                                | 'EUR'
                                | 'GBP'
                                | 'AUD'
                                | 'JPY'
                                | 'NZD'
                                | 'MXN'
                            }
                          | undefined
                        region_code?: string | undefined
                      }[]
                    | undefined
                }
              | undefined
            shipping_profile_id?: string | undefined
            shipping_profile_name?: string | undefined
            sku?: string | undefined
            sold_as_is?: boolean | undefined
            storage_location?: string | undefined
            tax_exempt?: boolean | undefined
            title?: string | undefined
            upc?: string | undefined
            upc_does_not_apply?: boolean | undefined
            videos?: { link: string }[] | undefined
            year?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/listings/all': {
      $get: {
        input: {
          query: {
            query?: string | undefined
            auction_price_max?: number | undefined
            category?: string | undefined
            product_type?: string | undefined
            conditions?: string[] | undefined
            decade?: string | undefined
            finish?: string | undefined
            handmade?: boolean | undefined
            item_city?: string | undefined
            item_country?: string | undefined
            item_region?: string | undefined
            item_state?: string | undefined
            make?: string[] | undefined
            model?: string | undefined
            must_not?: string | undefined
            price_max?: number | undefined
            price_min?: number | undefined
            currency?: string | undefined
            year_max?: number | undefined
            year_min?: number | undefined
            accepts_gift_cards?: boolean | undefined
            preferred_seller?: boolean | undefined
            shop?: string | undefined
            shop_id?: string | undefined
            listing_type?: string | undefined
            ships_to?: string | undefined
            exclude_auctions?: boolean | undefined
            accepts_payment_plans?: boolean | undefined
            watchers_count_min?: number | undefined
            not_ids?: string[] | undefined
            local_pickup?: boolean | undefined
            page?: number | undefined
            per_page?: number | undefined
            offset?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/listings/facets/seller_location': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/listings/:id/negotiation': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/listings/:id/offer': {
      $post: {
        input: { param: { id: string } } & {
          json: { message?: string | undefined; price: string; shipping_price?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/listings/:listing_id/bump': {
      $get: {
        input: { param: { listing_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/listings/:listing_id/bump/:budget_type': {
      $post: {
        input: { param: { listing_id: string; budget_type: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/listings/:listing_id/conversations': {
      $post: {
        input: { param: { listing_id: string } } & { json: { body: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/listings/:listing_id/images': {
      $get: {
        input: { param: { listing_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/listings/:listing_id/images/:image_id': {
      $delete: {
        input: { param: { listing_id: string; image_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/listings/:listing_id/sales': {
      $get: {
        input: { param: { listing_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/listings/:slug': {
      $delete: { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 200 }
      $get: { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 200 }
      $put: {
        input: { param: { slug: string } } & {
          json: {
            categories?: { uuid?: string | undefined }[] | undefined
            condition?:
              | {
                  uuid:
                    | 'fbf35668-96a0-4baa-bcde-ab18d6b1b329'
                    | '6a9dfcad-600b-46c8-9e08-ce6e5057921e'
                    | '98777886-76d0-44c8-865e-bb40e669e934'
                    | 'f7a3f48c-972a-44c6-b01a-0cd27488d3f6'
                    | 'ae4d9114-1bd7-4ec5-a4ba-6653af5ac84d'
                    | 'df268ad1-c462-4ba6-b6db-e007e23922ea'
                    | 'ac5b9c1e-dc78-466d-b0b3-7cf712967a48'
                    | '6db7df88-293b-4017-a1c1-cdb5e599fa1a'
                    | '9225283f-60c2-4413-ad18-1f5eba7a856f'
                    | '7c3f45de-2ae0-4c81-8400-fdb6b1d74890'
                }
              | undefined
            description?: string | undefined
            exclusive_channel?: 'seller_site' | 'reverb' | 'none' | undefined
            finish?: string | undefined
            has_inventory?: boolean | undefined
            inventory?: number | undefined
            location?:
              | {
                  country_code?: string | undefined
                  locality?: string | undefined
                  region?: string | undefined
                }
              | undefined
            make?: string | undefined
            model?: string | undefined
            multi_item?: boolean | undefined
            offers_enabled?: boolean | undefined
            origin_country_code?: string | undefined
            photos?: string[] | undefined
            preorder_info?:
              | {
                  lead_time?: number | undefined
                  lead_time_unit: 'days' | 'weeks'
                  ship_date?: string | undefined
                }
              | undefined
            price?:
              | {
                  amount: string
                  currency: 'USD' | 'CAD' | 'EUR' | 'GBP' | 'AUD' | 'JPY' | 'NZD' | 'MXN'
                }
              | undefined
            prop_65_warning?: string | undefined
            publish?: boolean | undefined
            seller?: { paypal_email?: string | undefined } | undefined
            seller_cost?: string | undefined
            shipping?:
              | {
                  local?: boolean | undefined
                  rates?:
                    | {
                        rate?:
                          | {
                              amount: string
                              currency:
                                | 'USD'
                                | 'CAD'
                                | 'EUR'
                                | 'GBP'
                                | 'AUD'
                                | 'JPY'
                                | 'NZD'
                                | 'MXN'
                            }
                          | undefined
                        region_code?: string | undefined
                      }[]
                    | undefined
                }
              | undefined
            shipping_profile_id?: string | undefined
            shipping_profile_name?: string | undefined
            sku?: string | undefined
            sold_as_is?: boolean | undefined
            storage_location?: string | undefined
            tax_exempt?: boolean | undefined
            title?: string | undefined
            upc?: string | undefined
            upc_does_not_apply?: boolean | undefined
            videos?: { link: string }[] | undefined
            year?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/listings/:slug/edit': {
      $get: { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/listings/:slug/flag': {
      $post: {
        input: { param: { slug: string } } & {
          json: { description?: string | undefined; reason: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/listings/:slug/reviews': {
      $get: { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 200 }
      $post: { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/listings/:slug/similar_listings': {
      $get: { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/my/account': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $put: {
        input: {
          json: {
            currency?: string | undefined
            first_name?: string | undefined
            last_name?: string | undefined
            locale_code?: string | undefined
            shipping_region_code?: string | undefined
            third_party_ad_data_consent?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/my/addresses': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/my/addresses/:address_id': {
      $delete: {
        input: { param: { address_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { address_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/my/conversations': {
      $get: {
        input: {
          query: {
            search?: string | undefined
            unread_only?: boolean | undefined
            page?: number | undefined
            per_page?: number | undefined
            offset?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: {
          json: {
            body: string
            cloudinary_photos?: string[] | undefined
            listing_id?: number | undefined
            recipient_id?: number | undefined
            recipient_uuid?: string | undefined
            shop_id?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/my/conversations/:conversation_id/messages': {
      $post: {
        input: { param: { conversation_id: string } } & { json: { body: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/my/conversations/:id': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $put: {
        input: { param: { id: string } } & { json: { read?: boolean | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & { '/my/counts': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/my/curated_set/product/:product_id': {
      $delete: {
        input: { param: { product_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { product_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & { '/my/feed': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/my/feed/customize': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/my/feed/grid': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/my/feedback/received': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/my/feedback/sent': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/my/follows': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/my/follows/articles': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { json: { category_uuids: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/my/follows/brands/:slug': {
      $delete: { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 200 }
      $get: { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 200 }
      $post: { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/my/follows/categories/:category/:subcategory': {
      $delete: {
        input: { param: { category: string; subcategory: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { category: string; subcategory: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { category: string; subcategory: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/my/follows/categories/:identifier': {
      $delete: {
        input: { param: { identifier: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { identifier: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { identifier: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/my/follows/categories/:uuid': {
      $post: { input: { param: { uuid: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/my/follows/collections/:slug': {
      $delete: { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 200 }
      $get: { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 200 }
      $post: { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/my/follows/handpicked/:slug': {
      $delete: { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 200 }
      $get: { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 200 }
      $post: { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/my/follows/search': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: {
          json: {
            accepts_gift_cards?: boolean | undefined
            accepts_payment_plans?: boolean | undefined
            auction_price_max?: number | undefined
            category?: string | undefined
            conditions?:
              | 'all'
              | 'new'
              | 'b-stock'
              | 'used'
              | 'non-functioning'
              | 'all-but-new'
              | 'poor'
              | 'fair'
              | 'good'
              | 'very-good'
              | 'excellent'
              | 'mint'
              | undefined
            currency?:
              | 'USD'
              | 'CAD'
              | 'EUR'
              | 'GBP'
              | 'AUD'
              | 'JPY'
              | 'NZD'
              | 'MXN'
              | 'DKK'
              | 'SEK'
              | 'CHF'
              | 'ARS'
              | 'BRL'
              | 'HKD'
              | 'NOK'
              | 'PHP'
              | 'PLN'
              | 'RUB'
              | undefined
            decade?: string | undefined
            exclude_auctions?: boolean | undefined
            finish?: string | undefined
            handmade?: boolean | undefined
            item_city?: string | undefined
            item_country?: string | undefined
            item_region?: string | undefined
            item_state?: string | undefined
            listing_type?: 'auctions' | 'offers' | undefined
            local_pickup?: boolean | undefined
            make?: string[] | undefined
            model?: string | undefined
            must_not?: string | undefined
            not_ids?: number[] | undefined
            preferred_seller?: boolean | undefined
            price_max?: number | undefined
            price_min?: number | undefined
            product_type?: string | undefined
            query?: string | undefined
            ships_to?: string | undefined
            shop?: string | undefined
            shop_id?: string | undefined
            watchers_count_min?: number | undefined
            year_max?: number | undefined
            year_min?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/my/follows/shops/:slug': {
      $delete: { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 200 }
      $get: { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 200 }
      $post: { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/my/follows/:follow_id': {
      $delete: {
        input: { param: { follow_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/my/follows/:follow_id/alert': {
      $delete: {
        input: { param: { follow_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { follow_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/my/listings': {
      $get: {
        input: {
          query: {
            query?: string | undefined
            auction_price_max?: number | undefined
            category?: string | undefined
            product_type?: string | undefined
            conditions?: string[] | undefined
            decade?: string | undefined
            finish?: string | undefined
            handmade?: boolean | undefined
            item_city?: string | undefined
            item_country?: string | undefined
            item_region?: string | undefined
            item_state?: string | undefined
            make?: string[] | undefined
            model?: string | undefined
            must_not?: string | undefined
            price_max?: number | undefined
            price_min?: number | undefined
            currency?: string | undefined
            year_max?: number | undefined
            year_min?: number | undefined
            accepts_gift_cards?: boolean | undefined
            preferred_seller?: boolean | undefined
            shop?: string | undefined
            shop_id?: string | undefined
            listing_type?: string | undefined
            ships_to?: string | undefined
            exclude_auctions?: boolean | undefined
            accepts_payment_plans?: boolean | undefined
            watchers_count_min?: number | undefined
            not_ids?: string[] | undefined
            local_pickup?: boolean | undefined
            state?: string | undefined
            sku?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/my/listings/drafts': {
      $get: {
        input: {
          query: {
            query?: string | undefined
            auction_price_max?: number | undefined
            category?: string | undefined
            product_type?: string | undefined
            conditions?: string[] | undefined
            decade?: string | undefined
            finish?: string | undefined
            handmade?: boolean | undefined
            item_city?: string | undefined
            item_country?: string | undefined
            item_region?: string | undefined
            item_state?: string | undefined
            make?: string[] | undefined
            model?: string | undefined
            must_not?: string | undefined
            price_max?: number | undefined
            price_min?: number | undefined
            currency?: string | undefined
            year_max?: number | undefined
            year_min?: number | undefined
            accepts_gift_cards?: boolean | undefined
            preferred_seller?: boolean | undefined
            shop?: string | undefined
            shop_id?: string | undefined
            listing_type?: string | undefined
            ships_to?: string | undefined
            exclude_auctions?: boolean | undefined
            accepts_payment_plans?: boolean | undefined
            watchers_count_min?: number | undefined
            not_ids?: string[] | undefined
            local_pickup?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/my/listings/negotiations': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            offset?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/my/listings/:slug/state/end': {
      $put: {
        input: { param: { slug: string } } & { json: { reason: 'not_sold' | 'reverb_sale' } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & { '/my/lists': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/my/negotiations/buying': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            offset?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/my/negotiations/:id': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/my/negotiations/:id/accept': {
      $post: {
        input: { param: { id: string } } & { json: { message?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/my/negotiations/:id/counter': {
      $post: {
        input: { param: { id: string } } & {
          json: {
            country_code?: string | undefined
            layaway_terms_slug?: string | undefined
            message?: string | undefined
            offer_items?:
              | { listing_id: string; price: string; shipping_price: string }[]
              | undefined
            price?:
              | {
                  amount: string
                  currency: 'USD' | 'CAD' | 'EUR' | 'GBP' | 'AUD' | 'JPY' | 'NZD' | 'MXN'
                }
              | undefined
            quantity?: string | undefined
            recipient_id?: string | undefined
            region_code?: string | undefined
            shipping_price?:
              | {
                  amount: string
                  currency: 'USD' | 'CAD' | 'EUR' | 'GBP' | 'AUD' | 'JPY' | 'NZD' | 'MXN'
                }
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/my/negotiations/:id/decline': {
      $post: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/my/orders/awaiting_feedback': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/my/orders/buying/all': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/my/orders/buying/by_uuid/:uuid': {
      $get: { input: { param: { uuid: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/my/orders/buying/unpaid': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/my/orders/buying/:id': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/my/orders/buying/:id/mark_received': {
      $post: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/my/orders/selling/all': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/my/orders/selling/awaiting_shipment': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/my/orders/selling/buyer_history/:buyer_id': {
      $get: {
        input: { param: { buyer_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/my/orders/selling/by_uuid/:uuid': {
      $get: { input: { param: { uuid: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/my/orders/selling/unpaid': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/my/orders/selling/:id': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/my/orders/selling/:id/mark_picked_up': {
      $post: {
        input: { param: { id: string } } & { json: { date?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/my/orders/selling/:id/ship': {
      $post: {
        input: { param: { id: string } } & {
          json: { provider: string; send_notification: boolean; tracking_number: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/my/orders/selling/:order_id/refund_requests': {
      $post: {
        input: { param: { order_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/my/payments/selling': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            offset?: number | undefined
            created_start_date?: string | undefined
            created_end_date?: string | undefined
            updated_start_date?: string | undefined
            updated_end_date?: string | undefined
            order_id?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/my/payments/selling/:id': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & { '/my/payouts': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/my/payouts/:id/line_items': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/my/refund_requests/selling': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/my/refund_requests/selling/:id': {
      $put: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/my/viewed_listings': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/my/wishlist': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/my/wishlist/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $put: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/orders/:order_id/feedback/buyer': {
      $get: {
        input: { param: { order_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { order_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/orders/:order_id/feedback/seller': {
      $get: {
        input: { param: { order_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { order_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/payment_methods': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/priceguide/:id/transactions/summary': {
      $get: {
        input: { param: { id: string } } & {
          query: { number_of_months?: number | undefined; condition?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/products/reviews/:id': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $put: {
        input: { param: { id: string } } & {
          json: {
            body?: string | undefined
            rating?: number | undefined
            title?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/products/:slug/reviews': {
      $get: { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 200 }
      $post: { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sales/reverb': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/sales/seller': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/sales/:sale_id/listings': {
      $delete: {
        input: { param: { sale_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { sale_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sales/:slug': {
      $get: { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/shipping/providers': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/shipping/regions': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/shop': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $put: {
        input: {
          json: {
            address?:
              | {
                  country_code?: string | undefined
                  extended_address?: string | undefined
                  locality?: string | undefined
                  name?: string | undefined
                  phone?: string | undefined
                  postal_code?: string | undefined
                  region?: string | undefined
                  street_address?: string | undefined
                }
              | undefined
            currency?: 'USD' | 'CAD' | 'EUR' | 'GBP' | 'AUD' | 'JPY' | 'NZD' | 'MXN' | undefined
            description?: string | undefined
            legal_country_code?:
              | 'AD'
              | 'AE'
              | 'AF'
              | 'AG'
              | 'AI'
              | 'AL'
              | 'AM'
              | 'AO'
              | 'AR'
              | 'AS'
              | 'AT'
              | 'AU'
              | 'AW'
              | 'AX'
              | 'AZ'
              | 'BA'
              | 'BB'
              | 'BD'
              | 'BE'
              | 'BF'
              | 'BG'
              | 'BH'
              | 'BI'
              | 'BJ'
              | 'BL'
              | 'BM'
              | 'BN'
              | 'BO'
              | 'BQ'
              | 'BR'
              | 'BS'
              | 'BT'
              | 'BV'
              | 'BW'
              | 'BY'
              | 'BZ'
              | 'CA'
              | 'CC'
              | 'CD'
              | 'CF'
              | 'CG'
              | 'CH'
              | 'CI'
              | 'CK'
              | 'CL'
              | 'CM'
              | 'CN'
              | 'CO'
              | 'CR'
              | 'CV'
              | 'CW'
              | 'CX'
              | 'CY'
              | 'CZ'
              | 'DE'
              | 'DJ'
              | 'DK'
              | 'DM'
              | 'DO'
              | 'DZ'
              | 'EC'
              | 'EE'
              | 'EG'
              | 'EH'
              | 'ER'
              | 'ES'
              | 'ET'
              | 'FI'
              | 'FJ'
              | 'FK'
              | 'FM'
              | 'FO'
              | 'FR'
              | 'GA'
              | 'GB'
              | 'GD'
              | 'GE'
              | 'GF'
              | 'GG'
              | 'GH'
              | 'GI'
              | 'GL'
              | 'GM'
              | 'GN'
              | 'GP'
              | 'GQ'
              | 'GR'
              | 'GS'
              | 'GT'
              | 'GU'
              | 'GW'
              | 'GY'
              | 'HK'
              | 'HM'
              | 'HN'
              | 'HR'
              | 'HT'
              | 'HU'
              | 'ID'
              | 'IE'
              | 'IL'
              | 'IM'
              | 'IN'
              | 'IO'
              | 'IQ'
              | 'IS'
              | 'IT'
              | 'JE'
              | 'JM'
              | 'JO'
              | 'JP'
              | 'KE'
              | 'KG'
              | 'KH'
              | 'KI'
              | 'KM'
              | 'KN'
              | 'KR'
              | 'KW'
              | 'KY'
              | 'KZ'
              | 'LA'
              | 'LB'
              | 'LC'
              | 'LI'
              | 'LK'
              | 'LR'
              | 'LS'
              | 'LT'
              | 'LU'
              | 'LV'
              | 'LY'
              | 'MA'
              | 'MC'
              | 'MD'
              | 'ME'
              | 'MF'
              | 'MG'
              | 'MH'
              | 'MK'
              | 'ML'
              | 'MM'
              | 'MN'
              | 'MO'
              | 'MP'
              | 'MQ'
              | 'MR'
              | 'MS'
              | 'MT'
              | 'MU'
              | 'MV'
              | 'MW'
              | 'MX'
              | 'MY'
              | 'MZ'
              | 'NA'
              | 'NC'
              | 'NE'
              | 'NF'
              | 'NG'
              | 'NI'
              | 'NL'
              | 'NO'
              | 'NP'
              | 'NR'
              | 'NU'
              | 'NZ'
              | 'OM'
              | 'PA'
              | 'PE'
              | 'PF'
              | 'PG'
              | 'PH'
              | 'PK'
              | 'PL'
              | 'PM'
              | 'PN'
              | 'PS'
              | 'PT'
              | 'PW'
              | 'PY'
              | 'QA'
              | 'RE'
              | 'RO'
              | 'RS'
              | 'RU'
              | 'RW'
              | 'SA'
              | 'SB'
              | 'SC'
              | 'SE'
              | 'SG'
              | 'SH'
              | 'SI'
              | 'SJ'
              | 'SK'
              | 'SL'
              | 'SM'
              | 'SN'
              | 'SO'
              | 'SR'
              | 'SS'
              | 'ST'
              | 'SV'
              | 'SX'
              | 'SZ'
              | 'TC'
              | 'TD'
              | 'TF'
              | 'TG'
              | 'TH'
              | 'TJ'
              | 'TK'
              | 'TL'
              | 'TM'
              | 'TN'
              | 'TO'
              | 'TR'
              | 'TT'
              | 'TV'
              | 'TW'
              | 'TZ'
              | 'UA'
              | 'UG'
              | 'UM'
              | 'US'
              | 'UY'
              | 'UZ'
              | 'VA'
              | 'VC'
              | 'VE'
              | 'VG'
              | 'VI'
              | 'VN'
              | 'VU'
              | 'WF'
              | 'WS'
              | 'YE'
              | 'YT'
              | 'ZA'
              | 'ZM'
              | 'ZW'
              | undefined
            legal_country_code_confirmed?: true | undefined
            name?: string | undefined
            payment_policy?: string | undefined
            return_policy?: string | undefined
            shipping_policy?: string | undefined
            shop_type?: 'individual' | 'business' | undefined
            website?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shop/listing_conditions': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/shop/payment_methods': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/shop/vacation': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/shops/:id/storefronts': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/shops/:shop_id/shipping_profiles': {
      $get: { input: { param: { shop_id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/shops/:slug': {
      $get: {
        input: { param: { slug: string } } & {
          query: { include_listing_count?: boolean | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shops/:slug/feedback': {
      $get: { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/shops/:slug/feedback/buyer': {
      $get: { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/shops/:slug/feedback/seller': {
      $get: { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & { '/wants': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/wants/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $put: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/webhooks/registrations': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: {
          json: {
            topic:
              | 'listings/update'
              | 'listings/publish'
              | 'listings/bumps-ran-out'
              | 'orders/create'
              | 'orders/update'
              | 'payments/create'
              | 'payments/update'
              | 'app/uninstalled'
            url: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/webhooks/registrations/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  },
  '/'
>
export default routes
