type NextPage = { after: string; link?: string | undefined }
type PreviousPage = { before: string; link?: string | undefined }
type Paging = { next?: NextPage | undefined; prev?: PreviousPage | undefined }
type PublicBusinessUnit = { id: bigint }
type PublicCampaign = {
  businessUnits: PublicBusinessUnit[]
  createdAt: string
  id: string
  properties: { [x: string]: string }
  updatedAt: string
}
type CollectionResponseWithTotalPublicCampaign = {
  paging?: Paging | undefined
  results: PublicCampaign[]
  total: number
}
type ErrorDetail = {
  code?: string | undefined
  context?: { [x: string]: string[] } | undefined
  in?: string | undefined
  message: string
  subCategory?: string | undefined
}
type Error = {
  category: string
  context?: { [x: string]: string[] } | undefined
  correlationId: string
  errors?: ErrorDetail[] | undefined
  links?: { [x: string]: string } | undefined
  message: string
  subCategory?: string | undefined
}
type PublicCampaignInput = { properties: { [x: string]: string } }
type CollectionResponseStringNoPaging = { results: string[] }
type PublicCampaignDeleteInput = { id: string }
type BatchInputPublicCampaignDeleteInput = { inputs: PublicCampaignDeleteInput[] }
type BatchInputPublicCampaignInput = { inputs: PublicCampaignInput[] }
type BatchResponsePublicCampaign = {
  completedAt: string
  links?: { [x: string]: string } | undefined
  requestedAt?: string | undefined
  results: PublicCampaign[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type StandardError = {
  category: string
  context: { [x: string]: string[] }
  errors: ErrorDetail[]
  id?: string | undefined
  links: { [x: string]: string }
  message: string
  status: string
  subCategory?: { [x: string]: unknown } | undefined
}
type BatchResponsePublicCampaignWithErrors = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: PublicCampaign[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type PublicCampaignReadInput = { id: string }
type BatchInputPublicCampaignReadInput = { inputs: PublicCampaignReadInput[] }
type PublicCampaignAsset = {
  id: string
  metrics?: { [x: string]: number } | undefined
  name?: string | undefined
}
type CollectionResponsePublicCampaignAsset = {
  paging?: Paging | undefined
  results: PublicCampaignAsset[]
}
type PublicCampaignWithAssets = {
  assets: { [x: string]: CollectionResponsePublicCampaignAsset }
  businessUnits: PublicBusinessUnit[]
  createdAt: string
  id: string
  properties: { [x: string]: string }
  updatedAt: string
}
type BatchResponsePublicCampaignWithAssets = {
  completedAt: string
  links?: { [x: string]: string } | undefined
  requestedAt?: string | undefined
  results: PublicCampaignWithAssets[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type BatchResponsePublicCampaignWithAssetsWithErrors = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: PublicCampaignWithAssets[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type PublicCampaignBatchUpdateItem = { id: string; properties: { [x: string]: string } }
type BatchInputPublicCampaignBatchUpdateItem = { inputs: PublicCampaignBatchUpdateItem[] }
type PublicCampaignCloneInput = {
  assetsToClone: { [x: string]: string[] }
  audience?: string | undefined
  currencyCode?: string | undefined
  endDate?: string | undefined
  name: string
  notes?: string | undefined
  shouldCloneDraftNodes: boolean
  shouldCloneEdges: boolean
  shouldCloneStickyNotes: boolean
  shouldCloneTasks: boolean
  shouldCloneTrackingUrls: boolean
  sourceCampaignGuid: string
  startDate?: string | undefined
}
type PublicCampaignCloneResponse = {
  campaignGuid: string
  status: 'COMPLETE' | 'FAILED' | 'PARTIAL_FAILURE' | 'PENDING'
}
type ForwardPaging = { next?: NextPage | undefined }
type CollectionResponsePublicCampaignAssetForwardPaging = {
  paging?: ForwardPaging | undefined
  results: PublicCampaignAsset[]
}
type PublicBudgetItemInput = {
  amount: number
  description?: string | undefined
  name: string
  order: number
}
type PublicBudgetItem = {
  amount: number
  createdAt: bigint
  description?: string | undefined
  id: string
  name: string
  order: number
  updatedAt: bigint
}
type PublicSpendItem = {
  amount: number
  createdAt: bigint
  description?: string | undefined
  id: string
  name: string
  order: number
  updatedAt: bigint
}
type PublicBudgetTotals = {
  budgetItems: PublicBudgetItem[]
  budgetTotal?: number | undefined
  currencyCode:
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BOV'
    | 'BRL'
    | 'BSD'
    | 'BTN'
    | 'BWP'
    | 'BYN'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHE'
    | 'CHF'
    | 'CHW'
    | 'CLF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'COU'
    | 'CRC'
    | 'CUC'
    | 'CUP'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'ISK'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRU'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MXV'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLL'
    | 'SOS'
    | 'SRD'
    | 'SSP'
    | 'STN'
    | 'SVC'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TMT'
    | 'TND'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'USN'
    | 'UYI'
    | 'UYU'
    | 'UZS'
    | 'VEF'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XAG'
    | 'XAU'
    | 'XBA'
    | 'XBB'
    | 'XBC'
    | 'XBD'
    | 'XCD'
    | 'XDR'
    | 'XOF'
    | 'XPD'
    | 'XPF'
    | 'XPT'
    | 'XSU'
    | 'XUA'
    | 'YER'
    | 'ZAR'
    | 'ZMW'
    | 'ZWL'
  remainingBudget?: number | undefined
  spendItems: PublicSpendItem[]
  spendTotal?: number | undefined
}
type ContactReference = { id: string }
type CollectionResponseContactReferenceForwardPaging = {
  paging?: ForwardPaging | undefined
  results: ContactReference[]
}
type MetricsCounters = {
  influencedContacts: number
  newContactsFirstTouch: number
  newContactsLastTouch: number
  sessions: number
}
type RevenueAttributionAggregate = {
  contactsNumber?: number | undefined
  currencyCode?:
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BOV'
    | 'BRL'
    | 'BSD'
    | 'BTN'
    | 'BWP'
    | 'BYN'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHE'
    | 'CHF'
    | 'CHW'
    | 'CLF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'COU'
    | 'CRC'
    | 'CUC'
    | 'CUP'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'ISK'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRU'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MXV'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLL'
    | 'SOS'
    | 'SRD'
    | 'SSP'
    | 'STN'
    | 'SVC'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TMT'
    | 'TND'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'USN'
    | 'UYI'
    | 'UYU'
    | 'UZS'
    | 'VEF'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XAG'
    | 'XAU'
    | 'XBA'
    | 'XBB'
    | 'XBC'
    | 'XBD'
    | 'XCD'
    | 'XDR'
    | 'XOF'
    | 'XPD'
    | 'XPF'
    | 'XPT'
    | 'XSU'
    | 'XUA'
    | 'YER'
    | 'ZAR'
    | 'ZMW'
    | 'ZWL'
    | undefined
  dealAmount?: number | undefined
  dealsNumber?: number | undefined
  revenueAmount?: number | undefined
}
type PublicSpendItemInput = {
  amount: number
  description?: string | undefined
  name: string
  order: number
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/marketing/campaigns/2026-09': {
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                limit?: number | undefined
                name?: string | undefined
                properties?: string[] | undefined
                sort?: string | undefined
              }
            }
            output: CollectionResponseWithTotalPublicCampaign
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                limit?: number | undefined
                name?: string | undefined
                properties?: string[] | undefined
                sort?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: PublicCampaignInput }
            output: PublicCampaign
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: PublicCampaignInput }; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/marketing/campaigns/2026-09/asset-types': {
      $get:
        | { input: {}; output: CollectionResponseStringNoPaging; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/marketing/campaigns/2026-09/batch/archive': {
      $post:
        | {
            input: { json: BatchInputPublicCampaignDeleteInput }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: BatchInputPublicCampaignDeleteInput }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/campaigns/2026-09/batch/create': {
      $post:
        | {
            input: { json: BatchInputPublicCampaignInput }
            output: BatchResponsePublicCampaign
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: BatchInputPublicCampaignInput }
            output: BatchResponsePublicCampaignWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { json: BatchInputPublicCampaignInput }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/campaigns/2026-09/batch/read': {
      $post:
        | {
            input: {
              query: {
                endDate?: string | undefined
                properties?: string[] | undefined
                startDate?: string | undefined
              }
            } & { json: BatchInputPublicCampaignReadInput }
            output: BatchResponsePublicCampaignWithAssets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                endDate?: string | undefined
                properties?: string[] | undefined
                startDate?: string | undefined
              }
            } & { json: BatchInputPublicCampaignReadInput }
            output: BatchResponsePublicCampaignWithAssetsWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: {
              query: {
                endDate?: string | undefined
                properties?: string[] | undefined
                startDate?: string | undefined
              }
            } & { json: BatchInputPublicCampaignReadInput }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/campaigns/2026-09/batch/update': {
      $post:
        | {
            input: { json: BatchInputPublicCampaignBatchUpdateItem }
            output: BatchResponsePublicCampaign
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchInputPublicCampaignBatchUpdateItem }
            output: BatchResponsePublicCampaignWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { json: BatchInputPublicCampaignBatchUpdateItem }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/campaigns/2026-09/clone': {
      $post:
        | {
            input: { json: PublicCampaignCloneInput }
            output: PublicCampaignCloneResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: PublicCampaignCloneInput }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/campaigns/2026-09/clone/asset-types': {
      $get:
        | { input: {}; output: CollectionResponseStringNoPaging; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/marketing/campaigns/2026-09/clone/:campaignGuid/status': {
      $get:
        | {
            input: { param: { campaignGuid: string } }
            output: PublicCampaignCloneResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaignGuid: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/campaigns/2026-09/:campaignGuid': {
      $get:
        | {
            input: { param: { campaignGuid: string } } & {
              query: {
                endDate?: string | undefined
                properties?: string[] | undefined
                startDate?: string | undefined
              }
            }
            output: PublicCampaignWithAssets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaignGuid: string } } & {
              query: {
                endDate?: string | undefined
                properties?: string[] | undefined
                startDate?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete:
        | {
            input: { param: { campaignGuid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { campaignGuid: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { campaignGuid: string } } & { json: PublicCampaignInput }
            output: PublicCampaign
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaignGuid: string } } & { json: PublicCampaignInput }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/campaigns/2026-09/:campaignGuid/assets/:assetType': {
      $get:
        | {
            input: { param: { assetType: string; campaignGuid: string } } & {
              query: {
                after?: string | undefined
                endDate?: string | undefined
                limit?: string | undefined
                startDate?: string | undefined
              }
            }
            output: CollectionResponsePublicCampaignAssetForwardPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { assetType: string; campaignGuid: string } } & {
              query: {
                after?: string | undefined
                endDate?: string | undefined
                limit?: string | undefined
                startDate?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/campaigns/2026-09/:campaignGuid/assets/:assetType/:assetId': {
      $put:
        | {
            input: { param: { assetId: string; assetType: string; campaignGuid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { assetId: string; assetType: string; campaignGuid: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete:
        | {
            input: { param: { assetId: string; assetType: string; campaignGuid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { assetId: string; assetType: string; campaignGuid: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/campaigns/2026-09/:campaignGuid/budget': {
      $post:
        | {
            input: { param: { campaignGuid: string } } & { json: PublicBudgetItemInput }
            output: PublicBudgetItem
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { campaignGuid: string } } & { json: PublicBudgetItemInput }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/campaigns/2026-09/:campaignGuid/budget/totals': {
      $get:
        | {
            input: { param: { campaignGuid: string } }
            output: PublicBudgetTotals
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaignGuid: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/campaigns/2026-09/:campaignGuid/budget/:budgetId': {
      $get:
        | {
            input: { param: { budgetId: bigint; campaignGuid: string } }
            output: PublicBudgetItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { budgetId: bigint; campaignGuid: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { budgetId: bigint; campaignGuid: string } } & {
              json: PublicBudgetItemInput
            }
            output: PublicBudgetItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { budgetId: bigint; campaignGuid: string } } & {
              json: PublicBudgetItemInput
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete:
        | {
            input: { param: { budgetId: bigint; campaignGuid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { budgetId: bigint; campaignGuid: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/campaigns/2026-09/:campaignGuid/reports/contacts/:contactType': {
      $get:
        | {
            input: { param: { campaignGuid: string; contactType: string } } & {
              query: {
                after?: string | undefined
                endDate?: string | undefined
                limit?: number | undefined
                startDate?: string | undefined
              }
            }
            output: CollectionResponseContactReferenceForwardPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaignGuid: string; contactType: string } } & {
              query: {
                after?: string | undefined
                endDate?: string | undefined
                limit?: number | undefined
                startDate?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/campaigns/2026-09/:campaignGuid/reports/metrics': {
      $get:
        | {
            input: { param: { campaignGuid: string } } & {
              query: { endDate?: string | undefined; startDate?: string | undefined }
            }
            output: MetricsCounters
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaignGuid: string } } & {
              query: { endDate?: string | undefined; startDate?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/campaigns/2026-09/:campaignGuid/reports/revenue': {
      $get:
        | {
            input: { param: { campaignGuid: string } } & {
              query: {
                attributionModel?: string | undefined
                endDate?: string | undefined
                startDate?: string | undefined
              }
            }
            output: RevenueAttributionAggregate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaignGuid: string } } & {
              query: {
                attributionModel?: string | undefined
                endDate?: string | undefined
                startDate?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/campaigns/2026-09/:campaignGuid/spend': {
      $post:
        | {
            input: { param: { campaignGuid: string } } & { json: PublicSpendItemInput }
            output: PublicSpendItem
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { campaignGuid: string } } & { json: PublicSpendItemInput }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/marketing/campaigns/2026-09/:campaignGuid/spend/:spendId': {
      $get:
        | {
            input: { param: { campaignGuid: string; spendId: bigint } }
            output: PublicSpendItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaignGuid: string; spendId: bigint } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { campaignGuid: string; spendId: bigint } } & {
              json: PublicSpendItemInput
            }
            output: PublicSpendItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaignGuid: string; spendId: bigint } } & {
              json: PublicSpendItemInput
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete:
        | {
            input: { param: { campaignGuid: string; spendId: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { campaignGuid: string; spendId: bigint } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
