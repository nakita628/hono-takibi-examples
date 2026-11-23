type AssetStatusQueryParam = 'DRAFT' | 'REGISTERED' | 'DISPOSED'
type Pagination = {
  page?: number | undefined
  pageSize?: number | undefined
  pageCount?: number | undefined
  itemCount?: number | undefined
}
type AssetStatus = 'Draft' | 'Registered' | 'Disposed'
type BookDepreciationSetting = {
  depreciationMethod?:
    | 'NoDepreciation'
    | 'StraightLine'
    | 'DiminishingValue100'
    | 'DiminishingValue150'
    | 'DiminishingValue200'
    | 'FullDepreciation'
    | undefined
  averagingMethod?: 'FullMonth' | 'ActualDays' | undefined
  depreciationRate?: number | undefined
  effectiveLifeYears?: number | undefined
  depreciationCalculationMethod?: 'Rate' | 'Life' | 'None' | undefined
  depreciableObjectId?: string | undefined
  depreciableObjectType?: string | undefined
  bookEffectiveDateOfChangeId?: string | undefined
}
type BookDepreciationDetail = {
  currentCapitalGain?: number | undefined
  currentGainLoss?: number | undefined
  depreciationStartDate?: string | undefined
  costLimit?: number | undefined
  residualValue?: number | undefined
  priorAccumDepreciationAmount?: number | undefined
  currentAccumDepreciationAmount?: number | undefined
  businessUseCapitalGain?: number | undefined
  businessUseCurrentGainLoss?: number | undefined
  privateUseCapitalGain?: number | undefined
  privateUseCurrentGainLoss?: number | undefined
  initialDeductionPercentage?: number | undefined
}
type Asset = {
  assetId?: string | undefined
  assetName: string
  assetTypeId?: string | undefined
  assetNumber?: string | undefined
  purchaseDate?: string | undefined
  purchasePrice?: number | undefined
  disposalDate?: string | undefined
  disposalPrice?: number | undefined
  assetStatus?: AssetStatus | undefined
  warrantyExpiryDate?: string | undefined
  serialNumber?: string | undefined
  bookDepreciationSetting?: BookDepreciationSetting | undefined
  bookDepreciationDetail?: BookDepreciationDetail | undefined
  canRollback?: boolean | undefined
  accountingBookValue?: number | undefined
  isDeleteEnabledForDate?: boolean | undefined
}
type Assets = { pagination?: Pagination | undefined; items?: Asset[] | undefined }
type AssetType = {
  assetTypeId?: string | undefined
  assetTypeName: string
  fixedAssetAccountId?: string | undefined
  depreciationExpenseAccountId?: string | undefined
  accumulatedDepreciationAccountId?: string | undefined
  bookDepreciationSetting: BookDepreciationSetting
  locks?: number | undefined
}
type Setting = {
  assetNumberPrefix?: string | undefined
  assetNumberSequence?: string | undefined
  assetStartDate?: string | undefined
  lastDepreciationDate?: string | undefined
  defaultGainOnDisposalAccountId?: string | undefined
  defaultLossOnDisposalAccountId?: string | undefined
  defaultCapitalGainOnDisposalAccountId?: string | undefined
  optInForTax?: boolean | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/Assets': {
      $get:
        | {
            input: {
              query: {
                status: AssetStatusQueryParam
                page?: number | undefined
                pageSize?: number | undefined
                orderBy?:
                  | 'AssetType'
                  | 'AssetName'
                  | 'AssetNumber'
                  | 'PurchaseDate'
                  | 'PurchasePrice'
                  | 'DisposalDate'
                  | 'DisposalPrice'
                  | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                filterBy?: string | undefined
              }
            } & { header: { 'xero-tenant-id': string } }
            output: Assets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                status: AssetStatusQueryParam
                page?: number | undefined
                pageSize?: number | undefined
                orderBy?:
                  | 'AssetType'
                  | 'AssetName'
                  | 'AssetNumber'
                  | 'PurchaseDate'
                  | 'PurchasePrice'
                  | 'DisposalDate'
                  | 'DisposalPrice'
                  | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                filterBy?: string | undefined
              }
            } & { header: { 'xero-tenant-id': string } }
            output: {}
            outputFormat: string
            status: 400
          }
      $post: {
        input: { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
          json: Asset
        }
        output: Asset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Assets/:id': {
      $get:
        | {
            input: { param: { id: string } } & { header: { 'xero-tenant-id': string } }
            output: Asset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'xero-tenant-id': string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/AssetTypes': {
      $get:
        | {
            input: { header: { 'xero-tenant-id': string } }
            output: AssetType[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'xero-tenant-id': string } }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: AssetType }
            output: AssetType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: AssetType }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/Settings': {
      $get:
        | {
            input: { header: { 'xero-tenant-id': string } }
            output: Setting
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'xero-tenant-id': string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  },
  '/'
>
export default routes
