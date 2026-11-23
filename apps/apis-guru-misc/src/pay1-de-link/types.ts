type AddressDataDto = {
  addressAddition?: string | undefined
  city?: string | undefined
  company?: string | undefined
  country?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  state?: string | undefined
  street?: string | undefined
  zip?: string | undefined
}
type InvoiceInformationDto = { invoiceId?: string | undefined; invoiceText?: string | undefined }
type CartItemDto = {
  deliveryDateEnd?: string | undefined
  deliveryDateStart?: string | undefined
  description?: string | undefined
  number: string
  price: bigint
  quantity: bigint
  type: 'goods' | 'shipment' | 'handling' | 'voucher'
  vatRate?: bigint | undefined
}
type LinkResponse = {
  accountId?: string | undefined
  active?: boolean | undefined
  amount?: bigint | undefined
  backgroundImage?: string | undefined
  billing?: AddressDataDto | undefined
  created?: bigint | undefined
  currency?:
    | 'ALL'
    | 'DZD'
    | 'ARS'
    | 'AUD'
    | 'BSD'
    | 'BHD'
    | 'BDT'
    | 'AMD'
    | 'BBD'
    | 'BMD'
    | 'BTN'
    | 'BOB'
    | 'BWP'
    | 'BZD'
    | 'SBD'
    | 'BND'
    | 'MMK'
    | 'BIF'
    | 'KHR'
    | 'CAD'
    | 'CVE'
    | 'KYD'
    | 'LKR'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'KMF'
    | 'CRC'
    | 'HRK'
    | 'CUP'
    | 'CZK'
    | 'DKK'
    | 'DOP'
    | 'SVC'
    | 'ETB'
    | 'ERN'
    | 'FKP'
    | 'FJD'
    | 'DJF'
    | 'GMD'
    | 'GIP'
    | 'GTQ'
    | 'GNF'
    | 'GYD'
    | 'HTG'
    | 'HNL'
    | 'HKD'
    | 'HUF'
    | 'ISK'
    | 'INR'
    | 'IDR'
    | 'IRR'
    | 'IQD'
    | 'ILS'
    | 'JMD'
    | 'JPY'
    | 'KZT'
    | 'JOD'
    | 'KES'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KGS'
    | 'LAK'
    | 'LBP'
    | 'LSL'
    | 'LRD'
    | 'LYD'
    | 'MOP'
    | 'MWK'
    | 'MYR'
    | 'MVR'
    | 'MUR'
    | 'MXN'
    | 'MNT'
    | 'MDL'
    | 'MAD'
    | 'OMR'
    | 'NAD'
    | 'NPR'
    | 'ANG'
    | 'AWG'
    | 'VUV'
    | 'NZD'
    | 'NIO'
    | 'NGN'
    | 'NOK'
    | 'PKR'
    | 'PAB'
    | 'PGK'
    | 'PYG'
    | 'PEN'
    | 'PHP'
    | 'QAR'
    | 'RUB'
    | 'RWF'
    | 'SHP'
    | 'SAR'
    | 'SCR'
    | 'SLL'
    | 'SGD'
    | 'VND'
    | 'SOS'
    | 'ZAR'
    | 'SSP'
    | 'SZL'
    | 'SEK'
    | 'CHF'
    | 'SYP'
    | 'THB'
    | 'TOP'
    | 'TTD'
    | 'AED'
    | 'TND'
    | 'UGX'
    | 'MKD'
    | 'EGP'
    | 'GBP'
    | 'TZS'
    | 'USD'
    | 'UYU'
    | 'UZS'
    | 'WST'
    | 'YER'
    | 'TWD'
    | 'UYW'
    | 'VES'
    | 'MRU'
    | 'STN'
    | 'CUC'
    | 'ZWL'
    | 'BYN'
    | 'TMT'
    | 'GHS'
    | 'SDG'
    | 'UYI'
    | 'RSD'
    | 'MZN'
    | 'AZN'
    | 'RON'
    | 'CHE'
    | 'CHW'
    | 'TRY'
    | 'XAF'
    | 'XCD'
    | 'XOF'
    | 'XPF'
    | 'XBA'
    | 'XBB'
    | 'XBC'
    | 'XBD'
    | 'XAU'
    | 'XDR'
    | 'XAG'
    | 'XPT'
    | 'XTS'
    | 'XPD'
    | 'XUA'
    | 'ZMW'
    | 'SRD'
    | 'MGA'
    | 'COU'
    | 'AFN'
    | 'TJS'
    | 'AOA'
    | 'BGN'
    | 'CDF'
    | 'BAM'
    | 'EUR'
    | 'MXV'
    | 'UAH'
    | 'GEL'
    | 'BOV'
    | 'PLN'
    | 'BRL'
    | 'CLF'
    | 'XSU'
    | 'USN'
    | undefined
  description?: string | undefined
  email?: string | undefined
  errorUrl?: string | undefined
  expiration?: string | undefined
  hash?: string | undefined
  id?: string | undefined
  intent?: 'authorization' | 'preauthorization' | undefined
  invoiceInformation?: InvoiceInformationDto | undefined
  language?: 'de_DE' | 'en_US' | undefined
  link?: string | undefined
  logo?: string | undefined
  merchantId?: string | undefined
  mode?: 'live' | 'test' | undefined
  modified?: bigint | undefined
  notifyUrl?: string | undefined
  paymentMethod?:
    | 'visa'
    | 'mastercard'
    | 'amex'
    | 'paypal'
    | 'sofort'
    | 'paydirekt'
    | 'postfinance-e'
    | 'postfinance-card'
    | 'bancontact'
    | 'przelewy24'
    | 'alipay'
    | 'ideal'
    | 'eps'
    | 'giropay'
    | 'sepa'
    | undefined
  paymentMethods?:
    | (
        | 'visa'
        | 'mastercard'
        | 'amex'
        | 'paypal'
        | 'sofort'
        | 'paydirekt'
        | 'postfinance-e'
        | 'postfinance-card'
        | 'bancontact'
        | 'przelewy24'
        | 'alipay'
        | 'ideal'
        | 'eps'
        | 'giropay'
        | 'sepa'
      )[]
    | undefined
  paymentProcess?: string | undefined
  portalId?: string | undefined
  redirectUrl?: string | undefined
  reference?: string | undefined
  shipping?: AddressDataDto | undefined
  shoppingCart?: CartItemDto[] | undefined
  status?: 'ready' | 'created' | 'executed' | 'expired' | 'deactivated' | undefined
  successUrl?: string | undefined
  userId?: string | undefined
}
type Sort = {
  empty?: boolean | undefined
  sorted?: boolean | undefined
  unsorted?: boolean | undefined
}
type Pageable = {
  offset?: bigint | undefined
  pageNumber?: number | undefined
  pageSize?: number | undefined
  paged?: boolean | undefined
  sort?: Sort | undefined
  unpaged?: boolean | undefined
}
type PageLinkResponse = {
  content?: LinkResponse[] | undefined
  empty?: boolean | undefined
  first?: boolean | undefined
  last?: boolean | undefined
  number?: number | undefined
  numberOfElements?: number | undefined
  pageable?: Pageable | undefined
  size?: number | undefined
  sort?: Sort | undefined
  totalElements?: bigint | undefined
  totalPages?: number | undefined
}
type LinkCreateRequest = {
  accountId: string
  active?: boolean | undefined
  backgroundImage?: string | undefined
  billing?: AddressDataDto | undefined
  currency:
    | 'ALL'
    | 'DZD'
    | 'ARS'
    | 'AUD'
    | 'BSD'
    | 'BHD'
    | 'BDT'
    | 'AMD'
    | 'BBD'
    | 'BMD'
    | 'BTN'
    | 'BOB'
    | 'BWP'
    | 'BZD'
    | 'SBD'
    | 'BND'
    | 'MMK'
    | 'BIF'
    | 'KHR'
    | 'CAD'
    | 'CVE'
    | 'KYD'
    | 'LKR'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'KMF'
    | 'CRC'
    | 'HRK'
    | 'CUP'
    | 'CZK'
    | 'DKK'
    | 'DOP'
    | 'SVC'
    | 'ETB'
    | 'ERN'
    | 'FKP'
    | 'FJD'
    | 'DJF'
    | 'GMD'
    | 'GIP'
    | 'GTQ'
    | 'GNF'
    | 'GYD'
    | 'HTG'
    | 'HNL'
    | 'HKD'
    | 'HUF'
    | 'ISK'
    | 'INR'
    | 'IDR'
    | 'IRR'
    | 'IQD'
    | 'ILS'
    | 'JMD'
    | 'JPY'
    | 'KZT'
    | 'JOD'
    | 'KES'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KGS'
    | 'LAK'
    | 'LBP'
    | 'LSL'
    | 'LRD'
    | 'LYD'
    | 'MOP'
    | 'MWK'
    | 'MYR'
    | 'MVR'
    | 'MUR'
    | 'MXN'
    | 'MNT'
    | 'MDL'
    | 'MAD'
    | 'OMR'
    | 'NAD'
    | 'NPR'
    | 'ANG'
    | 'AWG'
    | 'VUV'
    | 'NZD'
    | 'NIO'
    | 'NGN'
    | 'NOK'
    | 'PKR'
    | 'PAB'
    | 'PGK'
    | 'PYG'
    | 'PEN'
    | 'PHP'
    | 'QAR'
    | 'RUB'
    | 'RWF'
    | 'SHP'
    | 'SAR'
    | 'SCR'
    | 'SLL'
    | 'SGD'
    | 'VND'
    | 'SOS'
    | 'ZAR'
    | 'SSP'
    | 'SZL'
    | 'SEK'
    | 'CHF'
    | 'SYP'
    | 'THB'
    | 'TOP'
    | 'TTD'
    | 'AED'
    | 'TND'
    | 'UGX'
    | 'MKD'
    | 'EGP'
    | 'GBP'
    | 'TZS'
    | 'USD'
    | 'UYU'
    | 'UZS'
    | 'WST'
    | 'YER'
    | 'TWD'
    | 'UYW'
    | 'VES'
    | 'MRU'
    | 'STN'
    | 'CUC'
    | 'ZWL'
    | 'BYN'
    | 'TMT'
    | 'GHS'
    | 'SDG'
    | 'UYI'
    | 'RSD'
    | 'MZN'
    | 'AZN'
    | 'RON'
    | 'CHE'
    | 'CHW'
    | 'TRY'
    | 'XAF'
    | 'XCD'
    | 'XOF'
    | 'XPF'
    | 'XBA'
    | 'XBB'
    | 'XBC'
    | 'XBD'
    | 'XAU'
    | 'XDR'
    | 'XAG'
    | 'XPT'
    | 'XTS'
    | 'XPD'
    | 'XUA'
    | 'ZMW'
    | 'SRD'
    | 'MGA'
    | 'COU'
    | 'AFN'
    | 'TJS'
    | 'AOA'
    | 'BGN'
    | 'CDF'
    | 'BAM'
    | 'EUR'
    | 'MXV'
    | 'UAH'
    | 'GEL'
    | 'BOV'
    | 'PLN'
    | 'BRL'
    | 'CLF'
    | 'XSU'
    | 'USN'
  description?: string | undefined
  email?: string | undefined
  errorUrl?: string | undefined
  expiration?: string | undefined
  intent?: 'authorization' | 'preauthorization' | undefined
  invoiceInformation?: InvoiceInformationDto | undefined
  language?: 'de_DE' | 'en_US' | undefined
  logo?: string | undefined
  merchantId: string
  mode: 'live' | 'test'
  notifyUrl?: string | undefined
  paymentMethods?:
    | (
        | 'visa'
        | 'mastercard'
        | 'amex'
        | 'paypal'
        | 'sofort'
        | 'paydirekt'
        | 'postfinance-e'
        | 'postfinance-card'
        | 'bancontact'
        | 'przelewy24'
        | 'alipay'
        | 'ideal'
        | 'eps'
        | 'giropay'
        | 'sepa'
      )[]
    | undefined
  portalId: string
  reference: string
  shipping?: AddressDataDto | undefined
  shoppingCart: CartItemDto[]
  successUrl?: string | undefined
  userId?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/payment-links': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            limit?: number | undefined
            merchantId: string
            accountId: string
            portalId: string
            mode: string
          }
        }
        output: PageLinkResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: LinkCreateRequest }
        output: LinkResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/payment-links/:linkId': {
      $get: {
        input: { param: { linkId: string } }
        output: LinkResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { linkId: string } } & { json: LinkCreateRequest }
        output: LinkResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
