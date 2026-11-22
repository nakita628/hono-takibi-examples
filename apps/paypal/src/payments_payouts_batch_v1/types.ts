type SenderBatchHeader = {
  sender_batch_id?: string | undefined
  recipient_type?: string | undefined
  email_subject?: string | undefined
  email_message?: string | undefined
  note?: string | undefined
}
type Currency = { currency: string; value: string }
type Phone = {
  country_code: string
  national_number: string
  extension_number?: string | undefined
}
type AlternateNotificationMethod = { phone?: Phone | undefined }
type Language = string
type ApplicationContext = {
  social_feed_privacy?: string | undefined
  holler_url?: string | undefined
  logo_url?: string | undefined
}
type PurposeEnum =
  | 'AWARDS'
  | 'PRIZES'
  | 'DONATIONS'
  | 'GOODS'
  | 'SERVICES'
  | 'REBATES'
  | 'CASHBACK'
  | 'DISCOUNTS'
  | 'NON_GOODS_OR_SERVICES'
type PayoutItemRequest = {
  recipient_type?: string | undefined
  amount: Currency
  note?: string | undefined
  receiver: string
  sender_item_id?: string | undefined
  recipient_wallet?: string | undefined
  alternate_notification_method?: AlternateNotificationMethod | undefined
  notification_language?: Language | undefined
  application_context?: ApplicationContext | undefined
  purpose?: PurposeEnum | undefined
}
type PayoutItemRequestList = PayoutItemRequest[]
type CreatePayoutRequest = { sender_batch_header: SenderBatchHeader; items: PayoutItemRequestList }
type BatchEnum = 'DENIED' | 'PENDING' | 'PROCESSING' | 'SUCCESS' | 'CANCELED'
type RecipientEnum = 'EMAIL' | 'PHONE' | 'PAYPAL_ID'
type PayoutSenderBatchHeader = {
  sender_batch_id?: string | undefined
  recipient_type?: RecipientEnum | undefined
  email_subject?: string | undefined
  email_message?: string | undefined
}
type PayoutHeader = {
  payout_batch_id: string
  batch_status: BatchEnum
  time_created?: string | undefined
  sender_batch_header: PayoutSenderBatchHeader
}
type LinkDescription = {
  href: string
  rel: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'CONNECT' | 'OPTIONS' | 'PATCH' | undefined
}
type DefinitionsLinkDescriptionList = LinkDescription[]
type Payout = {
  batch_header?: PayoutHeader | undefined
  links?: DefinitionsLinkDescriptionList | undefined
}
type ErrorDetails_2 = {
  field?: string | undefined
  value?: string | undefined
  location?: string | undefined
  issue: string
  description?: string | undefined
}
type ErrorDetailsList = ErrorDetails_2[]
type LinkDescriptionList = LinkDescription[]
type Error = {
  name: string
  message: string
  debug_id: string
  information_link?: string | undefined
  details?: ErrorDetailsList | undefined
  links?: LinkDescriptionList | undefined
}
type FundingSource = 'BALANCE'
type PayoutBatchHeader = {
  payout_batch_id: string
  batch_status: BatchEnum
  time_created?: string | undefined
  time_completed?: string | undefined
  time_closed?: string | undefined
  sender_batch_header: PayoutSenderBatchHeader
  funding_source?: FundingSource | undefined
  amount?: Currency | undefined
  fees?: Currency | undefined
}
type TransactionEnum =
  | 'SUCCESS'
  | 'FAILED'
  | 'PENDING'
  | 'UNCLAIMED'
  | 'RETURNED'
  | 'ONHOLD'
  | 'BLOCKED'
  | 'REFUNDED'
  | 'REVERSED'
type Name = {
  prefix?: string | undefined
  given_name?: string | undefined
  surname?: string | undefined
  middle_name?: string | undefined
  suffix?: string | undefined
  alternate_full_name?: string | undefined
  full_name?: string | undefined
}
type RecipientWalletEnum = 'PAYPAL' | 'VENMO'
type PayoutItemDetail = {
  recipient_type?: RecipientEnum | undefined
  amount: Currency
  note?: string | undefined
  receiver: string
  sender_item_id?: string | undefined
  recipient_name?: Name | undefined
  recipient_wallet?: RecipientWalletEnum | undefined
  purpose?: PurposeEnum | undefined
}
type PayoutCurrencyConversion = {
  from_amount?: Currency | undefined
  to_amount?: Currency | undefined
  exchange_rate?: string | undefined
}
type PayoutBatchItemsDefinitionsLinkDescriptionList = LinkDescription[]
type PayoutBatchItems = {
  payout_item_id: string
  transaction_id?: string | undefined
  activity_id?: string | undefined
  transaction_status?: TransactionEnum | undefined
  payout_item_fee?: Currency | undefined
  payout_batch_id: string
  payout_item: PayoutItemDetail
  currency_conversion?: PayoutCurrencyConversion | undefined
  time_processed?: string | undefined
  errors?: Error | undefined
  links?: PayoutBatchItemsDefinitionsLinkDescriptionList | undefined
}
type PayoutBatchItemsList = PayoutBatchItems[]
type PayoutBatchDefinitionsLinkDescriptionList = LinkDescription[]
type PayoutBatch = {
  total_items?: number | undefined
  total_pages?: number | undefined
  batch_header?: PayoutBatchHeader | undefined
  items?: PayoutBatchItemsList | undefined
  links?: PayoutBatchDefinitionsLinkDescriptionList | undefined
}
type PayoutItemDefinitionsLinkDescriptionList = LinkDescription[]
type PayoutItem = {
  payout_item_id: string
  transaction_id?: string | undefined
  activity_id?: string | undefined
  transaction_status?: TransactionEnum | undefined
  payout_item_fee?: Currency | undefined
  payout_batch_id: string
  sender_batch_id?: string | undefined
  payout_item: PayoutItemDetail
  currency_conversion?: PayoutCurrencyConversion | undefined
  time_processed?: string | undefined
  errors?: Error | undefined
  links?: PayoutItemDefinitionsLinkDescriptionList | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/payments/payouts': {
      $post:
        | {
            input: { header: { 'PayPal-Request-Id'?: string | undefined } } & {
              json: CreatePayoutRequest
            }
            output: Payout
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'PayPal-Request-Id'?: string | undefined } } & {
              json: CreatePayoutRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'PayPal-Request-Id'?: string | undefined } } & {
              json: CreatePayoutRequest
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'PayPal-Request-Id'?: string | undefined } } & {
              json: CreatePayoutRequest
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'PayPal-Request-Id'?: string | undefined } } & {
              json: CreatePayoutRequest
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/payments/payouts/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                fields?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                total_required?: boolean | undefined
              }
            }
            output: PayoutBatch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                fields?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                total_required?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                fields?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                total_required?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              query: {
                fields?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                total_required?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/payments/payouts-item/:payout_item_id': {
      $get:
        | {
            input: { param: { payout_item_id: string } }
            output: PayoutItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payout_item_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { payout_item_id: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { payout_item_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/payments/payouts-item/:payout_item_id/cancel': {
      $post:
        | {
            input: { param: { payout_item_id: string } }
            output: PayoutItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payout_item_id: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payout_item_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { payout_item_id: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { payout_item_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
