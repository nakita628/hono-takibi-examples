type Aspect = { key?: string | undefined; value?: string | undefined }
type AlertDimension = { key?: string | undefined; value?: string | undefined }
type AlertDetails = { aspect?: Aspect | undefined; dimension?: AlertDimension | undefined }
type Alert = { alertType?: string | undefined; details?: AlertDetails[] | undefined }
type Amount = { currency?: string | undefined; value?: string | undefined }
type Budget = { amount?: Amount | undefined; budgetStatus?: string | undefined }
type CampaignBudget = { daily?: Budget | undefined }
type SelectionRule = {
  brands?: string[] | undefined
  categoryIds?: string[] | undefined
  categoryScope?: string | undefined
  listingConditionIds?: string[] | undefined
  maxPrice?: Amount | undefined
  minPrice?: Amount | undefined
}
type CampaignCriterion = {
  autoSelectFutureInventory?: boolean | undefined
  criterionType?: string | undefined
  selectionRules?: SelectionRule[] | undefined
}
type DynamicAdRatePreference = {
  adRateAdjustmentPercent?: string | undefined
  adRateCapPercent?: string | undefined
}
type FundingStrategy = {
  adRateStrategy?: string | undefined
  bidPercentage?: string | undefined
  dynamicAdRatePreferences?: DynamicAdRatePreference[] | undefined
  fundingModel?: string | undefined
}
type Campaign = {
  alerts?: Alert[] | undefined
  budget?: CampaignBudget | undefined
  campaignCriterion?: CampaignCriterion | undefined
  campaignId?: string | undefined
  campaignName?: string | undefined
  campaignStatus?: string | undefined
  endDate?: string | undefined
  fundingStrategy?: FundingStrategy | undefined
  marketplaceId?: string | undefined
  startDate?: string | undefined
}
type CampaignPagedCollectionResponse = {
  campaigns?: Campaign[] | undefined
  href?: string | undefined
  limit?: number | undefined
  next?: string | undefined
  offset?: number | undefined
  prev?: string | undefined
  total?: number | undefined
}
type BudgetRequest = { amount?: Amount | undefined }
type CampaignBudgetRequest = { daily?: BudgetRequest | undefined }
type CreateCampaignRequest = {
  budget?: CampaignBudgetRequest | undefined
  campaignCriterion?: CampaignCriterion | undefined
  campaignName?: string | undefined
  endDate?: string | undefined
  fundingStrategy?: FundingStrategy | undefined
  marketplaceId?: string | undefined
  startDate?: string | undefined
}
type Campaigns = { campaigns?: Campaign[] | undefined }
type Ad = {
  adGroupId?: string | undefined
  adId?: string | undefined
  adStatus?: string | undefined
  alerts?: Alert[] | undefined
  bidPercentage?: string | undefined
  inventoryReferenceId?: string | undefined
  inventoryReferenceType?: string | undefined
  listingId?: string | undefined
}
type AdPagedCollectionResponse = {
  ads?: Ad[] | undefined
  href?: string | undefined
  limit?: number | undefined
  next?: string | undefined
  offset?: number | undefined
  prev?: string | undefined
  total?: number | undefined
}
type CreateAdRequest = {
  adGroupId?: string | undefined
  bidPercentage?: string | undefined
  listingId?: string | undefined
}
type UpdateBidPercentageRequest = { bidPercentage?: string | undefined }
type AdGroup = {
  adGroupId?: string | undefined
  adGroupStatus?: string | undefined
  defaultBid?: Amount | undefined
  name?: string | undefined
}
type AdGroupPagedCollectionResponse = {
  adGroups?: AdGroup[] | undefined
  href?: string | undefined
  limit?: number | undefined
  next?: string | undefined
  offset?: number | undefined
  prev?: string | undefined
  total?: number | undefined
}
type CreateAdGroupRequest = { defaultBid?: Amount | undefined; name?: string | undefined }
type UpdateAdGroupRequest = {
  adGroupStatus?: string | undefined
  defaultBid?: Amount | undefined
  name?: string | undefined
}
type KeywordRequest = { keywordText?: string | undefined; matchType?: string | undefined }
type TargetedBidRequest = { keywords?: KeywordRequest[] | undefined }
type ProposedBid = {
  currency?: string | undefined
  rangeEnd?: string | undefined
  rangeStart?: string | undefined
  value?: string | undefined
}
type SuggestedBids = {
  keywordText?: string | undefined
  matchType?: string | undefined
  proposedBid?: ProposedBid | undefined
}
type TargetedBidsPagedCollection = { suggestedBids?: SuggestedBids[] | undefined }
type TargetedKeywordRequest = {
  additionalInfo?: string[] | undefined
  exclusions?: string[] | undefined
  listingIds?: string[] | undefined
  matchType?: string | undefined
}
type AdditionalInfoData = { metricKey?: string | undefined; value?: string | undefined }
type AdditionalInfo = { infoType?: string | undefined; metrics?: AdditionalInfoData[] | undefined }
type SuggestedKeywords = {
  additionalInfo?: AdditionalInfo[] | undefined
  keywordText?: string | undefined
  matchType?: string | undefined
}
type TargetedKeywordsPagedCollection = { suggestedKeywords?: SuggestedKeywords[] | undefined }
type CreateAdsByInventoryReferenceRequest = {
  adGroupId?: string | undefined
  bidPercentage?: string | undefined
  inventoryReferenceId?: string | undefined
  inventoryReferenceType?: string | undefined
}
type BulkCreateAdsByInventoryReferenceRequest = {
  requests?: CreateAdsByInventoryReferenceRequest[] | undefined
}
type AdReference = { adId?: string | undefined; href?: string | undefined }
type ErrorParameter = { name?: string | undefined; value?: string | undefined }
type Error = {
  category?: string | undefined
  domain?: string | undefined
  errorId?: number | undefined
  inputRefIds?: string[] | undefined
  longMessage?: string | undefined
  message?: string | undefined
  outputRefIds?: string[] | undefined
  parameters?: ErrorParameter[] | undefined
  subdomain?: string | undefined
}
type CreateAdsByInventoryReferenceResponse = {
  adGroupId?: string | undefined
  ads?: AdReference[] | undefined
  errors?: Error[] | undefined
  inventoryReferenceId?: string | undefined
  inventoryReferenceType?: string | undefined
  statusCode?: number | undefined
}
type BulkCreateAdsByInventoryReferenceResponse = {
  responses?: CreateAdsByInventoryReferenceResponse[] | undefined
}
type BulkCreateAdRequest = { requests?: CreateAdRequest[] | undefined }
type AdResponse = {
  adGroupId?: string | undefined
  adId?: string | undefined
  errors?: Error[] | undefined
  href?: string | undefined
  listingId?: string | undefined
  statusCode?: number | undefined
}
type BulkAdResponse = { responses?: AdResponse[] | undefined }
type CreateKeywordRequest = {
  adGroupId?: string | undefined
  bid?: Amount | undefined
  keywordText?: string | undefined
  matchType?: string | undefined
}
type BulkCreateKeywordRequest = { requests?: CreateKeywordRequest[] | undefined }
type KeywordResponse = {
  adGroupId?: string | undefined
  errors?: Error[] | undefined
  href?: string | undefined
  keywordId?: string | undefined
  keywordText?: string | undefined
  matchType?: string | undefined
  statusCode?: number | undefined
}
type BulkCreateKeywordResponse = { responses?: KeywordResponse[] | undefined }
type DeleteAdsByInventoryReferenceRequest = {
  inventoryReferenceId?: string | undefined
  inventoryReferenceType?: string | undefined
}
type BulkDeleteAdsByInventoryReferenceRequest = {
  requests?: DeleteAdsByInventoryReferenceRequest[] | undefined
}
type DeleteAdsByInventoryReferenceResponse = {
  adIds?: string[] | undefined
  errors?: Error[] | undefined
  inventoryReferenceId?: string | undefined
  inventoryReferenceType?: string | undefined
  statusCode?: number | undefined
}
type BulkDeleteAdsByInventoryReferenceResponse = {
  responses?: DeleteAdsByInventoryReferenceResponse[] | undefined
}
type DeleteAdRequest = { listingId?: string | undefined }
type BulkDeleteAdRequest = { requests?: DeleteAdRequest[] | undefined }
type DeleteAdResponse = {
  adId?: string | undefined
  errors?: Error[] | undefined
  listingId?: string | undefined
  statusCode?: number | undefined
}
type BulkDeleteAdResponse = { responses?: DeleteAdResponse[] | undefined }
type UpdateAdsByInventoryReferenceResponse = {
  ads?: AdReference[] | undefined
  errors?: Error[] | undefined
  inventoryReferenceId?: string | undefined
  inventoryReferenceType?: string | undefined
  statusCode?: number | undefined
}
type BulkUpdateAdsByInventoryReferenceResponse = {
  responses?: UpdateAdsByInventoryReferenceResponse[] | undefined
}
type AdUpdateResponse = {
  adId?: string | undefined
  errors?: Error[] | undefined
  href?: string | undefined
  listingId?: string | undefined
  statusCode?: number | undefined
}
type BulkAdUpdateResponse = { responses?: AdUpdateResponse[] | undefined }
type UpdateAdStatusRequest = { adId?: string | undefined; adStatus?: string | undefined }
type BulkUpdateAdStatusRequest = { requests?: UpdateAdStatusRequest[] | undefined }
type AdUpdateStatusResponse = {
  adId?: string | undefined
  errors?: Error[] | undefined
  href?: string | undefined
  statusCode?: number | undefined
}
type BulkAdUpdateStatusResponse = { responses?: AdUpdateStatusResponse[] | undefined }
type UpdateAdStatusByListingIdRequest = {
  adGroupId?: string | undefined
  adStatus?: string | undefined
  listingId?: string | undefined
}
type BulkUpdateAdStatusByListingIdRequest = {
  requests?: UpdateAdStatusByListingIdRequest[] | undefined
}
type AdUpdateStatusByListingIdResponse = {
  adGroupId?: string | undefined
  errors?: Error[] | undefined
  href?: string | undefined
  listingId?: string | undefined
  statusCode?: number | undefined
}
type BulkAdUpdateStatusByListingIdResponse = {
  responses?: AdUpdateStatusByListingIdResponse[] | undefined
}
type UpdateKeywordByKeywordIdRequest = {
  bid?: Amount | undefined
  keywordId?: string | undefined
  keywordStatus?: string | undefined
}
type BulkUpdateKeywordRequest = { requests?: UpdateKeywordByKeywordIdRequest[] | undefined }
type UpdateKeywordResponse = {
  errors?: Error[] | undefined
  keywordId?: string | undefined
  statusCode?: number | undefined
}
type BulkUpdateKeywordResponse = { responses?: UpdateKeywordResponse[] | undefined }
type CloneCampaignRequest = {
  campaignName?: string | undefined
  endDate?: string | undefined
  fundingStrategy?: FundingStrategy | undefined
  startDate?: string | undefined
}
type AdReferences = { ads?: AdReference[] | undefined }
type AdIds = { adIds?: string[] | undefined }
type Ads = { ads?: Ad[] | undefined }
type Keyword = {
  adGroupId?: string | undefined
  bid?: Amount | undefined
  keywordId?: string | undefined
  keywordStatus?: string | undefined
  keywordText?: string | undefined
  matchType?: string | undefined
}
type KeywordPagedCollectionResponse = {
  href?: string | undefined
  keywords?: Keyword[] | undefined
  limit?: number | undefined
  next?: string | undefined
  offset?: number | undefined
  prev?: string | undefined
  total?: number | undefined
}
type UpdateKeywordRequest = { bid?: Amount | undefined; keywordStatus?: string | undefined }
type ItemBasis = { estimatedValue?: number | undefined; metric?: string | undefined }
type TargetingItems = { bases?: ItemBasis[] | undefined; listingId?: string | undefined }
type TargetedAdsPagedCollection = {
  href?: string | undefined
  limit?: number | undefined
  next?: string | undefined
  offset?: number | undefined
  prev?: string | undefined
  suggestedItems?: TargetingItems[] | undefined
  total?: number | undefined
}
type UpdateAdrateStrategyRequest = {
  adRateStrategy?: string | undefined
  bidPercentage?: string | undefined
  dynamicAdRatePreferences?: DynamicAdRatePreference[] | undefined
}
type UpdateCampaignBudgetRequest = { daily?: BudgetRequest | undefined }
type UpdateCampaignIdentificationRequest = {
  campaignName?: string | undefined
  endDate?: string | undefined
  startDate?: string | undefined
}
type DimensionKeyAnnotation = { annotationKey?: string | undefined; dataType?: string | undefined }
type DimensionMetadata = {
  dataType?: string | undefined
  dimensionKey?: string | undefined
  dimensionKeyAnnotations?: DimensionKeyAnnotation[] | undefined
}
type MetricMetadata = { dataType?: string | undefined; metricKey?: string | undefined }
type ReportMetadata = {
  dimensionMetadata?: DimensionMetadata[] | undefined
  maxNumberOfDimensionsToRequest?: number | undefined
  maxNumberOfMetricsToRequest?: number | undefined
  metricMetadata?: MetricMetadata[] | undefined
  reportType?: string | undefined
}
type ReportMetadatas = { reportMetadata?: ReportMetadata[] | undefined }
type Dimension = { annotationKeys?: string[] | undefined; dimensionKey?: string | undefined }
type InventoryReference = {
  inventoryReferenceId?: string | undefined
  inventoryReferenceType?: string | undefined
}
type ReportTask = {
  campaignIds?: string[] | undefined
  dateFrom?: string | undefined
  dateTo?: string | undefined
  dimensions?: Dimension[] | undefined
  fundingModels?: string[] | undefined
  inventoryReferences?: InventoryReference[] | undefined
  listingIds?: string[] | undefined
  marketplaceId?: string | undefined
  metricKeys?: string[] | undefined
  reportExpirationDate?: string | undefined
  reportFormat?: string | undefined
  reportHref?: string | undefined
  reportId?: string | undefined
  reportName?: string | undefined
  reportTaskCompletionDate?: string | undefined
  reportTaskCreationDate?: string | undefined
  reportTaskExpectedCompletionDate?: string | undefined
  reportTaskId?: string | undefined
  reportTaskStatus?: string | undefined
  reportTaskStatusMessage?: string | undefined
  reportType?: string | undefined
}
type ReportTaskPagedCollection = {
  href?: string | undefined
  limit?: number | undefined
  next?: string | undefined
  offset?: number | undefined
  prev?: string | undefined
  reportTasks?: ReportTask[] | undefined
  total?: number | undefined
}
type CreateReportTask = {
  additionalRecords?: string[] | undefined
  campaignIds?: string[] | undefined
  dateFrom?: string | undefined
  dateTo?: string | undefined
  dimensions?: Dimension[] | undefined
  fundingModels?: string[] | undefined
  inventoryReferences?: InventoryReference[] | undefined
  listingIds?: string[] | undefined
  marketplaceId?: string | undefined
  metricKeys?: string[] | undefined
  reportFormat?: string | undefined
  reportType?: string | undefined
}
type CreateNegativeKeywordRequest = {
  adGroupId?: string | undefined
  campaignId?: string | undefined
  negativeKeywordMatchType?: string | undefined
  negativeKeywordText?: string | undefined
}
type BulkCreateNegativeKeywordRequest = { requests?: CreateNegativeKeywordRequest[] | undefined }
type NegativeKeywordResponse = {
  adGroupId?: string | undefined
  campaignId?: string | undefined
  errors?: Error[] | undefined
  href?: string | undefined
  negativeKeywordId?: string | undefined
  negativeKeywordMatchType?: string | undefined
  negativeKeywordText?: string | undefined
  statusCode?: number | undefined
}
type BulkCreateNegativeKeywordResponse = { responses?: NegativeKeywordResponse[] | undefined }
type UpdateNegativeKeywordIdRequest = {
  negativeKeywordId?: string | undefined
  negativeKeywordStatus?: string | undefined
}
type BulkUpdateNegativeKeywordRequest = { requests?: UpdateNegativeKeywordIdRequest[] | undefined }
type UpdateNegativeKeywordResponse = {
  errors?: Error[] | undefined
  negativeKeywordId?: string | undefined
  statusCode?: number | undefined
}
type BulkUpdateNegativeKeywordResponse = { responses?: UpdateNegativeKeywordResponse[] | undefined }
type DiscountBenefit = {
  amountOffItem?: Amount | undefined
  amountOffOrder?: Amount | undefined
  percentageOffItem?: string | undefined
  percentageOffOrder?: string | undefined
}
type InventoryItem = { inventoryReferenceId?: string | undefined }
type RuleCriteria = {
  excludeInventoryItems?: InventoryItem[] | undefined
  excludeListingIds?: string[] | undefined
  markupInventoryItems?: InventoryItem[] | undefined
  markupListingIds?: string[] | undefined
  selectionRules?: SelectionRule[] | undefined
}
type InventoryCriterion = {
  inventoryCriterionType?: string | undefined
  inventoryItems?: InventoryItem[] | undefined
  listingIds?: string[] | undefined
  ruleCriteria?: RuleCriteria | undefined
}
type SelectedInventoryDiscount = {
  discountBenefit?: DiscountBenefit | undefined
  discountId?: string | undefined
  inventoryCriterion?: InventoryCriterion | undefined
  ruleOrder?: number | undefined
}
type ItemPriceMarkdown = {
  applyFreeShipping?: boolean | undefined
  autoSelectFutureInventory?: boolean | undefined
  blockPriceIncreaseInItemRevision?: boolean | undefined
  description?: string | undefined
  endDate?: string | undefined
  marketplaceId?: string | undefined
  name?: string | undefined
  priority?: string | undefined
  promotionImageUrl?: string | undefined
  promotionStatus?: string | undefined
  selectedInventoryDiscounts?: SelectedInventoryDiscount[] | undefined
  startDate?: string | undefined
}
type CouponConfiguration = {
  couponCode?: string | undefined
  couponType?: string | undefined
  maxCouponRedemptionPerUser?: number | undefined
}
type DiscountSpecification = {
  forEachAmount?: Amount | undefined
  forEachQuantity?: number | undefined
  minAmount?: Amount | undefined
  minQuantity?: number | undefined
  numberOfDiscountedItems?: number | undefined
}
type DiscountRule = {
  discountBenefit?: DiscountBenefit | undefined
  discountSpecification?: DiscountSpecification | undefined
  maxDiscountAmount?: Amount | undefined
  ruleOrder?: number | undefined
}
type ItemPromotion = {
  applyDiscountToSingleItemOnly?: boolean | undefined
  budget?: Amount | undefined
  couponConfiguration?: CouponConfiguration | undefined
  description?: string | undefined
  discountRules?: DiscountRule[] | undefined
  endDate?: string | undefined
  inventoryCriterion?: InventoryCriterion | undefined
  marketplaceId?: string | undefined
  name?: string | undefined
  priority?: string | undefined
  promotionImageUrl?: string | undefined
  promotionStatus?: string | undefined
  promotionType?: string | undefined
  startDate?: string | undefined
}
type BaseResponse = { warnings?: Error[] | undefined }
type ItemPromotionResponse = {
  applyDiscountToSingleItemOnly?: boolean | undefined
  budget?: Amount | undefined
  couponConfiguration?: CouponConfiguration | undefined
  description?: string | undefined
  discountRules?: DiscountRule[] | undefined
  endDate?: string | undefined
  inventoryCriterion?: InventoryCriterion | undefined
  marketplaceId?: string | undefined
  name?: string | undefined
  priority?: string | undefined
  promotionId?: string | undefined
  promotionImageUrl?: string | undefined
  promotionStatus?: string | undefined
  promotionType?: string | undefined
  startDate?: string | undefined
}
type NegativeKeyword = {
  adGroupId?: string | undefined
  campaignId?: string | undefined
  negativeKeywordId?: string | undefined
  negativeKeywordMatchType?: string | undefined
  negativeKeywordStatus?: string | undefined
  negativeKeywordText?: string | undefined
}
type NegativeKeywordPagedCollectionResponse = {
  href?: string | undefined
  limit?: number | undefined
  negativeKeywords?: NegativeKeyword[] | undefined
  next?: string | undefined
  offset?: number | undefined
  prev?: string | undefined
  total?: number | undefined
}
type UpdateNegativeKeywordRequest = { negativeKeywordStatus?: string | undefined }
type PromotionDetail = {
  couponCode?: string | undefined
  description?: string | undefined
  endDate?: string | undefined
  marketplaceId?: string | undefined
  name?: string | undefined
  priority?: string | undefined
  promotionHref?: string | undefined
  promotionId?: string | undefined
  promotionImageUrl?: string | undefined
  promotionStatus?: string | undefined
  promotionType?: string | undefined
  startDate?: string | undefined
}
type PromotionsPagedCollection = {
  href?: string | undefined
  limit?: number | undefined
  next?: string | undefined
  offset?: number | undefined
  prev?: string | undefined
  promotions?: PromotionDetail[] | undefined
  total?: number | undefined
}
type ItemMarkdownStatus = {
  listingMarkdownStatus?: string | undefined
  statusChangedDate?: string | undefined
  statusMessage?: string | undefined
}
type ListingDetail = {
  currentPrice?: Amount | undefined
  freeShipping?: boolean | undefined
  inventoryReferenceId?: string | undefined
  inventoryReferenceType?: string | undefined
  listingCategoryId?: string | undefined
  listingCondition?: string | undefined
  listingConditionId?: string | undefined
  listingId?: string | undefined
  listingPromotionStatuses?: ItemMarkdownStatus[] | undefined
  quantity?: number | undefined
  storeCategoryId?: string | undefined
  title?: string | undefined
}
type ItemsPagedCollection = {
  href?: string | undefined
  limit?: number | undefined
  listings?: ListingDetail[] | undefined
  next?: string | undefined
  offset?: number | undefined
  prev?: string | undefined
  total?: number | undefined
  warnings?: Error[] | undefined
}
type PromotionReportDetail = {
  averageItemDiscount?: Amount | undefined
  averageItemRevenue?: Amount | undefined
  averageOrderDiscount?: Amount | undefined
  averageOrderRevenue?: Amount | undefined
  averageOrderSize?: string | undefined
  baseSale?: Amount | undefined
  itemsSoldQuantity?: number | undefined
  numberOfOrdersSold?: number | undefined
  percentageSalesLift?: string | undefined
  promotionHref?: string | undefined
  promotionId?: string | undefined
  promotionReportId?: string | undefined
  promotionSale?: Amount | undefined
  promotionType?: string | undefined
  totalDiscount?: Amount | undefined
  totalSale?: Amount | undefined
}
type PromotionsReportPagedCollection = {
  href?: string | undefined
  limit?: number | undefined
  next?: string | undefined
  offset?: number | undefined
  prev?: string | undefined
  promotionReports?: PromotionReportDetail[] | undefined
  total?: number | undefined
}
type SummaryReportResponse = {
  baseSale?: Amount | undefined
  lastUpdated?: string | undefined
  percentageSalesLift?: string | undefined
  promotionSale?: Amount | undefined
  totalSale?: Amount | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/ad_campaign': {
      $get:
        | {
            input: {
              query: {
                campaign_name?: string | undefined
                campaign_status?: string | undefined
                end_date_range?: string | undefined
                funding_strategy?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
                start_date_range?: string | undefined
              }
            }
            output: CampaignPagedCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                campaign_name?: string | undefined
                campaign_status?: string | undefined
                end_date_range?: string | undefined
                funding_strategy?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
                start_date_range?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                campaign_name?: string | undefined
                campaign_status?: string | undefined
                end_date_range?: string | undefined
                funding_strategy?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
                start_date_range?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: {
              query: {
                campaign_name?: string | undefined
                campaign_status?: string | undefined
                end_date_range?: string | undefined
                funding_strategy?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
                start_date_range?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { json: CreateCampaignRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: CreateCampaignRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: CreateCampaignRequest }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: CreateCampaignRequest }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/ad_campaign/find_campaign_by_ad_reference': {
      $get:
        | {
            input: {
              query: {
                inventory_reference_id?: string | undefined
                inventory_reference_type?: string | undefined
                listing_id?: string | undefined
              }
            }
            output: Campaigns
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                inventory_reference_id?: string | undefined
                inventory_reference_type?: string | undefined
                listing_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                inventory_reference_id?: string | undefined
                inventory_reference_type?: string | undefined
                listing_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                inventory_reference_id?: string | undefined
                inventory_reference_type?: string | undefined
                listing_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: {
              query: {
                inventory_reference_id?: string | undefined
                inventory_reference_type?: string | undefined
                listing_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/get_campaign_by_name': {
      $get:
        | {
            input: { query: { campaign_name: string } }
            output: Campaign
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { campaign_name: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { campaign_name: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { campaign_name: string } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { query: { campaign_name: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id': {
      $delete:
        | {
            input: { param: { campaign_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { campaign_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { campaign_id: string } }
            output: Campaign
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaign_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id/ad': {
      $get:
        | {
            input: { param: { campaign_id: string } } & {
              query: {
                ad_group_ids?: string | undefined
                ad_status?: string | undefined
                limit?: string | undefined
                listing_ids?: string | undefined
                offset?: string | undefined
              }
            }
            output: AdPagedCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaign_id: string } } & {
              query: {
                ad_group_ids?: string | undefined
                ad_status?: string | undefined
                limit?: string | undefined
                listing_ids?: string | undefined
                offset?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string } } & {
              query: {
                ad_group_ids?: string | undefined
                ad_status?: string | undefined
                limit?: string | undefined
                listing_ids?: string | undefined
                offset?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string } } & {
              query: {
                ad_group_ids?: string | undefined
                ad_status?: string | undefined
                limit?: string | undefined
                listing_ids?: string | undefined
                offset?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string } } & {
              query: {
                ad_group_ids?: string | undefined
                ad_status?: string | undefined
                limit?: string | undefined
                listing_ids?: string | undefined
                offset?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { campaign_id: string } } & { json: CreateAdRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { campaign_id: string } } & { json: CreateAdRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string } } & { json: CreateAdRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string } } & { json: CreateAdRequest }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string } } & { json: CreateAdRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id/ad/:ad_id': {
      $delete:
        | {
            input: { param: { ad_id: string; campaign_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ad_id: string; campaign_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ad_id: string; campaign_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ad_id: string; campaign_id: string } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { ad_id: string; campaign_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { ad_id: string; campaign_id: string } }
            output: Ad
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ad_id: string; campaign_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ad_id: string; campaign_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ad_id: string; campaign_id: string } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { ad_id: string; campaign_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id/ad/:ad_id/update_bid': {
      $post:
        | {
            input: { param: { ad_id: string; campaign_id: string } } & {
              json: UpdateBidPercentageRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ad_id: string; campaign_id: string } } & {
              json: UpdateBidPercentageRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ad_id: string; campaign_id: string } } & {
              json: UpdateBidPercentageRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ad_id: string; campaign_id: string } } & {
              json: UpdateBidPercentageRequest
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { ad_id: string; campaign_id: string } } & {
              json: UpdateBidPercentageRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id/ad_group': {
      $get:
        | {
            input: { param: { campaign_id: string } } & {
              query: {
                ad_group_status?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            }
            output: AdGroupPagedCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaign_id: string } } & {
              query: {
                ad_group_status?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string } } & {
              query: {
                ad_group_status?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string } } & {
              query: {
                ad_group_status?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string } } & {
              query: {
                ad_group_status?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { campaign_id: string } } & { json: CreateAdGroupRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { campaign_id: string } } & { json: CreateAdGroupRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string } } & { json: CreateAdGroupRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string } } & { json: CreateAdGroupRequest }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string } } & { json: CreateAdGroupRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id/ad_group/:ad_group_id': {
      $get:
        | {
            input: { param: { ad_group_id: string; campaign_id: string } }
            output: AdGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ad_group_id: string; campaign_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ad_group_id: string; campaign_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ad_group_id: string; campaign_id: string } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { ad_group_id: string; campaign_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { ad_group_id: string; campaign_id: string } } & {
              json: UpdateAdGroupRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ad_group_id: string; campaign_id: string } } & {
              json: UpdateAdGroupRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ad_group_id: string; campaign_id: string } } & {
              json: UpdateAdGroupRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ad_group_id: string; campaign_id: string } } & {
              json: UpdateAdGroupRequest
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { ad_group_id: string; campaign_id: string } } & {
              json: UpdateAdGroupRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id/ad_group/:ad_group_id/suggest_bids': {
      $post:
        | {
            input: { param: { ad_group_id: string; campaign_id: string } } & {
              json: TargetedBidRequest
            }
            output: TargetedBidsPagedCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ad_group_id: string; campaign_id: string } } & {
              json: TargetedBidRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ad_group_id: string; campaign_id: string } } & {
              json: TargetedBidRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ad_group_id: string; campaign_id: string } } & {
              json: TargetedBidRequest
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { ad_group_id: string; campaign_id: string } } & {
              json: TargetedBidRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id/ad_group/:ad_group_id/suggest_keywords': {
      $post:
        | {
            input: { param: { ad_group_id: string; campaign_id: string } } & {
              json: TargetedKeywordRequest
            }
            output: TargetedKeywordsPagedCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ad_group_id: string; campaign_id: string } } & {
              json: TargetedKeywordRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ad_group_id: string; campaign_id: string } } & {
              json: TargetedKeywordRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ad_group_id: string; campaign_id: string } } & {
              json: TargetedKeywordRequest
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { ad_group_id: string; campaign_id: string } } & {
              json: TargetedKeywordRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id/bulk_create_ads_by_inventory_reference': {
      $post:
        | {
            input: { param: { campaign_id: string } } & {
              json: BulkCreateAdsByInventoryReferenceRequest
            }
            output: BulkCreateAdsByInventoryReferenceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: BulkCreateAdsByInventoryReferenceRequest
            }
            output: {}
            outputFormat: string
            status: 207
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: BulkCreateAdsByInventoryReferenceRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: BulkCreateAdsByInventoryReferenceRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: BulkCreateAdsByInventoryReferenceRequest
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: BulkCreateAdsByInventoryReferenceRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id/bulk_create_ads_by_listing_id': {
      $post:
        | {
            input: { param: { campaign_id: string } } & { json: BulkCreateAdRequest }
            output: BulkAdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaign_id: string } } & { json: BulkCreateAdRequest }
            output: {}
            outputFormat: string
            status: 207
          }
        | {
            input: { param: { campaign_id: string } } & { json: BulkCreateAdRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string } } & { json: BulkCreateAdRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string } } & { json: BulkCreateAdRequest }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string } } & { json: BulkCreateAdRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id/bulk_create_keyword': {
      $post:
        | {
            input: { param: { campaign_id: string } } & { json: BulkCreateKeywordRequest }
            output: BulkCreateKeywordResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaign_id: string } } & { json: BulkCreateKeywordRequest }
            output: {}
            outputFormat: string
            status: 207
          }
        | {
            input: { param: { campaign_id: string } } & { json: BulkCreateKeywordRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string } } & { json: BulkCreateKeywordRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string } } & { json: BulkCreateKeywordRequest }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string } } & { json: BulkCreateKeywordRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id/bulk_delete_ads_by_inventory_reference': {
      $post:
        | {
            input: { param: { campaign_id: string } } & {
              json: BulkDeleteAdsByInventoryReferenceRequest
            }
            output: BulkDeleteAdsByInventoryReferenceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: BulkDeleteAdsByInventoryReferenceRequest
            }
            output: {}
            outputFormat: string
            status: 207
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: BulkDeleteAdsByInventoryReferenceRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: BulkDeleteAdsByInventoryReferenceRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: BulkDeleteAdsByInventoryReferenceRequest
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: BulkDeleteAdsByInventoryReferenceRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id/bulk_delete_ads_by_listing_id': {
      $post:
        | {
            input: { param: { campaign_id: string } } & { json: BulkDeleteAdRequest }
            output: BulkDeleteAdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaign_id: string } } & { json: BulkDeleteAdRequest }
            output: {}
            outputFormat: string
            status: 207
          }
        | {
            input: { param: { campaign_id: string } } & { json: BulkDeleteAdRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string } } & { json: BulkDeleteAdRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string } } & { json: BulkDeleteAdRequest }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string } } & { json: BulkDeleteAdRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id/bulk_update_ads_bid_by_inventory_reference': {
      $post:
        | {
            input: { param: { campaign_id: string } } & {
              json: BulkCreateAdsByInventoryReferenceRequest
            }
            output: BulkUpdateAdsByInventoryReferenceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: BulkCreateAdsByInventoryReferenceRequest
            }
            output: {}
            outputFormat: string
            status: 207
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: BulkCreateAdsByInventoryReferenceRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: BulkCreateAdsByInventoryReferenceRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: BulkCreateAdsByInventoryReferenceRequest
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: BulkCreateAdsByInventoryReferenceRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id/bulk_update_ads_bid_by_listing_id': {
      $post:
        | {
            input: { param: { campaign_id: string } } & { json: BulkCreateAdRequest }
            output: BulkAdUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaign_id: string } } & { json: BulkCreateAdRequest }
            output: {}
            outputFormat: string
            status: 207
          }
        | {
            input: { param: { campaign_id: string } } & { json: BulkCreateAdRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string } } & { json: BulkCreateAdRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string } } & { json: BulkCreateAdRequest }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string } } & { json: BulkCreateAdRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id/bulk_update_ads_status': {
      $post:
        | {
            input: { param: { campaign_id: string } } & { json: BulkUpdateAdStatusRequest }
            output: BulkAdUpdateStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaign_id: string } } & { json: BulkUpdateAdStatusRequest }
            output: {}
            outputFormat: string
            status: 207
          }
        | {
            input: { param: { campaign_id: string } } & { json: BulkUpdateAdStatusRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string } } & { json: BulkUpdateAdStatusRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string } } & { json: BulkUpdateAdStatusRequest }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string } } & { json: BulkUpdateAdStatusRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id/bulk_update_ads_status_by_listing_id': {
      $post:
        | {
            input: { param: { campaign_id: string } } & {
              json: BulkUpdateAdStatusByListingIdRequest
            }
            output: BulkAdUpdateStatusByListingIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: BulkUpdateAdStatusByListingIdRequest
            }
            output: {}
            outputFormat: string
            status: 207
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: BulkUpdateAdStatusByListingIdRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: BulkUpdateAdStatusByListingIdRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: BulkUpdateAdStatusByListingIdRequest
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: BulkUpdateAdStatusByListingIdRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id/bulk_update_keyword': {
      $post:
        | {
            input: { param: { campaign_id: string } } & { json: BulkUpdateKeywordRequest }
            output: BulkUpdateKeywordResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaign_id: string } } & { json: BulkUpdateKeywordRequest }
            output: {}
            outputFormat: string
            status: 207
          }
        | {
            input: { param: { campaign_id: string } } & { json: BulkUpdateKeywordRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string } } & { json: BulkUpdateKeywordRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string } } & { json: BulkUpdateKeywordRequest }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string } } & { json: BulkUpdateKeywordRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id/clone': {
      $post:
        | {
            input: { param: { campaign_id: string } } & { json: CloneCampaignRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { campaign_id: string } } & { json: CloneCampaignRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string } } & { json: CloneCampaignRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string } } & { json: CloneCampaignRequest }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string } } & { json: CloneCampaignRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id/create_ads_by_inventory_reference': {
      $post:
        | {
            input: { param: { campaign_id: string } } & {
              json: CreateAdsByInventoryReferenceRequest
            }
            output: AdReferences
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: CreateAdsByInventoryReferenceRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: CreateAdsByInventoryReferenceRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: CreateAdsByInventoryReferenceRequest
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: CreateAdsByInventoryReferenceRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id/delete_ads_by_inventory_reference': {
      $post:
        | {
            input: { param: { campaign_id: string } } & {
              json: DeleteAdsByInventoryReferenceRequest
            }
            output: AdIds
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: DeleteAdsByInventoryReferenceRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: DeleteAdsByInventoryReferenceRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: DeleteAdsByInventoryReferenceRequest
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: DeleteAdsByInventoryReferenceRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id/end': {
      $post:
        | {
            input: { param: { campaign_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { campaign_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id/get_ads_by_inventory_reference': {
      $get:
        | {
            input: { param: { campaign_id: string } } & {
              query: { inventory_reference_id: string; inventory_reference_type: string }
            }
            output: Ads
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaign_id: string } } & {
              query: { inventory_reference_id: string; inventory_reference_type: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string } } & {
              query: { inventory_reference_id: string; inventory_reference_type: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string } } & {
              query: { inventory_reference_id: string; inventory_reference_type: string }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string } } & {
              query: { inventory_reference_id: string; inventory_reference_type: string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id/keyword': {
      $get:
        | {
            input: { param: { campaign_id: string } } & {
              query: {
                ad_group_ids?: string | undefined
                keyword_status?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            }
            output: KeywordPagedCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaign_id: string } } & {
              query: {
                ad_group_ids?: string | undefined
                keyword_status?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string } } & {
              query: {
                ad_group_ids?: string | undefined
                keyword_status?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string } } & {
              query: {
                ad_group_ids?: string | undefined
                keyword_status?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string } } & {
              query: {
                ad_group_ids?: string | undefined
                keyword_status?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { campaign_id: string } } & { json: CreateKeywordRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { campaign_id: string } } & { json: CreateKeywordRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string } } & { json: CreateKeywordRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string } } & { json: CreateKeywordRequest }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string } } & { json: CreateKeywordRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id/keyword/:keyword_id': {
      $get:
        | {
            input: { param: { campaign_id: string; keyword_id: string } }
            output: Keyword
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaign_id: string; keyword_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string; keyword_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string; keyword_id: string } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string; keyword_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { campaign_id: string; keyword_id: string } } & {
              json: UpdateKeywordRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { campaign_id: string; keyword_id: string } } & {
              json: UpdateKeywordRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string; keyword_id: string } } & {
              json: UpdateKeywordRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string; keyword_id: string } } & {
              json: UpdateKeywordRequest
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string; keyword_id: string } } & {
              json: UpdateKeywordRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id/pause': {
      $post:
        | {
            input: { param: { campaign_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { campaign_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id/resume': {
      $post:
        | {
            input: { param: { campaign_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { campaign_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id/suggest_items': {
      $get:
        | {
            input: { param: { campaign_id: string } } & {
              query: {
                category_ids?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            }
            output: TargetedAdsPagedCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaign_id: string } } & {
              query: {
                category_ids?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string } } & {
              query: {
                category_ids?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string } } & {
              query: {
                category_ids?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string } } & {
              query: {
                category_ids?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id/update_ad_rate_strategy': {
      $post:
        | {
            input: { param: { campaign_id: string } } & { json: UpdateAdrateStrategyRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { campaign_id: string } } & { json: UpdateAdrateStrategyRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string } } & { json: UpdateAdrateStrategyRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string } } & { json: UpdateAdrateStrategyRequest }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string } } & { json: UpdateAdrateStrategyRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id/update_campaign_budget': {
      $post:
        | {
            input: { param: { campaign_id: string } } & { json: UpdateCampaignBudgetRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { campaign_id: string } } & { json: UpdateCampaignBudgetRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string } } & { json: UpdateCampaignBudgetRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string } } & { json: UpdateCampaignBudgetRequest }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string } } & { json: UpdateCampaignBudgetRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_campaign/:campaign_id/update_campaign_identification': {
      $post:
        | {
            input: { param: { campaign_id: string } } & {
              json: UpdateCampaignIdentificationRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: UpdateCampaignIdentificationRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: UpdateCampaignIdentificationRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: UpdateCampaignIdentificationRequest
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { campaign_id: string } } & {
              json: UpdateCampaignIdentificationRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_report/:report_id': {
      $get:
        | {
            input: { param: { report_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { report_id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { report_id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { report_id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/ad_report_metadata': {
      $get:
        | { input: {}; output: ReportMetadatas; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/ad_report_metadata/:report_type': {
      $get:
        | {
            input: { param: { report_type: string } }
            output: ReportMetadata
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { report_type: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { report_type: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { report_type: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { report_type: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ad_report_task': {
      $get:
        | {
            input: {
              query: {
                limit?: string | undefined
                offset?: string | undefined
                report_task_statuses?: string | undefined
              }
            }
            output: ReportTaskPagedCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: string | undefined
                offset?: string | undefined
                report_task_statuses?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                limit?: string | undefined
                offset?: string | undefined
                report_task_statuses?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | { input: { json: CreateReportTask }; output: {}; outputFormat: string; status: 202 }
        | { input: { json: CreateReportTask }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: CreateReportTask }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: CreateReportTask }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: CreateReportTask }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/ad_report_task/:report_task_id': {
      $delete:
        | {
            input: { param: { report_task_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { report_task_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { report_task_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { report_task_id: string } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { report_task_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { report_task_id: string } }
            output: ReportTask
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { report_task_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { report_task_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { report_task_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/bulk_create_negative_keyword': {
      $post:
        | {
            input: { json: BulkCreateNegativeKeywordRequest }
            output: BulkCreateNegativeKeywordResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BulkCreateNegativeKeywordRequest }
            output: {}
            outputFormat: string
            status: 207
          }
        | {
            input: { json: BulkCreateNegativeKeywordRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: BulkCreateNegativeKeywordRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: BulkCreateNegativeKeywordRequest }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { json: BulkCreateNegativeKeywordRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/bulk_update_negative_keyword': {
      $post:
        | {
            input: { json: BulkUpdateNegativeKeywordRequest }
            output: BulkUpdateNegativeKeywordResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BulkUpdateNegativeKeywordRequest }
            output: {}
            outputFormat: string
            status: 207
          }
        | {
            input: { json: BulkUpdateNegativeKeywordRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: BulkUpdateNegativeKeywordRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: BulkUpdateNegativeKeywordRequest }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { json: BulkUpdateNegativeKeywordRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/item_price_markdown': {
      $post:
        | {
            input: { json: ItemPriceMarkdown }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: ItemPriceMarkdown }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: ItemPriceMarkdown }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: ItemPriceMarkdown }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/item_price_markdown/:promotion_id': {
      $delete:
        | {
            input: { param: { promotion_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { promotion_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { promotion_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { promotion_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { promotion_id: string } }
            output: ItemPriceMarkdown
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { promotion_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { promotion_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { promotion_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { promotion_id: string } } & { json: ItemPriceMarkdown }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { promotion_id: string } } & { json: ItemPriceMarkdown }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { promotion_id: string } } & { json: ItemPriceMarkdown }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { promotion_id: string } } & { json: ItemPriceMarkdown }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { promotion_id: string } } & { json: ItemPriceMarkdown }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { promotion_id: string } } & { json: ItemPriceMarkdown }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/item_promotion': {
      $post:
        | {
            input: { json: ItemPromotion }
            output: BaseResponse
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: ItemPromotion }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: ItemPromotion }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: ItemPromotion }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/item_promotion/:promotion_id': {
      $delete:
        | {
            input: { param: { promotion_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { promotion_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { promotion_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { promotion_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { promotion_id: string } }
            output: ItemPromotionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { promotion_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { promotion_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { promotion_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { promotion_id: string } } & { json: ItemPromotion }
            output: BaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { promotion_id: string } } & { json: ItemPromotion }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { promotion_id: string } } & { json: ItemPromotion }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { promotion_id: string } } & { json: ItemPromotion }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { promotion_id: string } } & { json: ItemPromotion }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { promotion_id: string } } & { json: ItemPromotion }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/negative_keyword': {
      $get:
        | {
            input: {
              query: {
                ad_group_ids?: string | undefined
                campaign_ids?: string | undefined
                limit?: string | undefined
                negative_keyword_status?: string | undefined
                offset?: string | undefined
              }
            }
            output: NegativeKeywordPagedCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ad_group_ids?: string | undefined
                campaign_ids?: string | undefined
                limit?: string | undefined
                negative_keyword_status?: string | undefined
                offset?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                ad_group_ids?: string | undefined
                campaign_ids?: string | undefined
                limit?: string | undefined
                negative_keyword_status?: string | undefined
                offset?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                ad_group_ids?: string | undefined
                campaign_ids?: string | undefined
                limit?: string | undefined
                negative_keyword_status?: string | undefined
                offset?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                ad_group_ids?: string | undefined
                campaign_ids?: string | undefined
                limit?: string | undefined
                negative_keyword_status?: string | undefined
                offset?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: {
              query: {
                ad_group_ids?: string | undefined
                campaign_ids?: string | undefined
                limit?: string | undefined
                negative_keyword_status?: string | undefined
                offset?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { json: CreateNegativeKeywordRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateNegativeKeywordRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: CreateNegativeKeywordRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: CreateNegativeKeywordRequest }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { json: CreateNegativeKeywordRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/negative_keyword/:negative_keyword_id': {
      $get:
        | {
            input: { param: { negative_keyword_id: string } }
            output: NegativeKeyword
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { negative_keyword_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { negative_keyword_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { negative_keyword_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { negative_keyword_id: string } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { negative_keyword_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { negative_keyword_id: string } } & {
              json: UpdateNegativeKeywordRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { negative_keyword_id: string } } & {
              json: UpdateNegativeKeywordRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { negative_keyword_id: string } } & {
              json: UpdateNegativeKeywordRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { negative_keyword_id: string } } & {
              json: UpdateNegativeKeywordRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { negative_keyword_id: string } } & {
              json: UpdateNegativeKeywordRequest
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { negative_keyword_id: string } } & {
              json: UpdateNegativeKeywordRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/promotion': {
      $get:
        | {
            input: {
              query: {
                limit?: string | undefined
                marketplace_id: string
                offset?: string | undefined
                promotion_status?: string | undefined
                promotion_type?: string | undefined
                q?: string | undefined
                sort?: string | undefined
              }
            }
            output: PromotionsPagedCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: string | undefined
                marketplace_id: string
                offset?: string | undefined
                promotion_status?: string | undefined
                promotion_type?: string | undefined
                q?: string | undefined
                sort?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                limit?: string | undefined
                marketplace_id: string
                offset?: string | undefined
                promotion_status?: string | undefined
                promotion_type?: string | undefined
                q?: string | undefined
                sort?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/promotion/:promotion_id/get_listing_set': {
      $get:
        | {
            input: { param: { promotion_id: string } } & {
              query: {
                limit?: string | undefined
                offset?: string | undefined
                q?: string | undefined
                sort?: string | undefined
                status?: string | undefined
              }
            }
            output: ItemsPagedCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { promotion_id: string } } & {
              query: {
                limit?: string | undefined
                offset?: string | undefined
                q?: string | undefined
                sort?: string | undefined
                status?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { promotion_id: string } } & {
              query: {
                limit?: string | undefined
                offset?: string | undefined
                q?: string | undefined
                sort?: string | undefined
                status?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { promotion_id: string } } & {
              query: {
                limit?: string | undefined
                offset?: string | undefined
                q?: string | undefined
                sort?: string | undefined
                status?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/promotion/:promotion_id/pause': {
      $post:
        | {
            input: { param: { promotion_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { promotion_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { promotion_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { promotion_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/promotion/:promotion_id/resume': {
      $post:
        | {
            input: { param: { promotion_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { promotion_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { promotion_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { promotion_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/promotion_report': {
      $get:
        | {
            input: {
              query: {
                limit?: string | undefined
                marketplace_id: string
                offset?: string | undefined
                promotion_status?: string | undefined
                promotion_type?: string | undefined
                q?: string | undefined
              }
            }
            output: PromotionsReportPagedCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: string | undefined
                marketplace_id: string
                offset?: string | undefined
                promotion_status?: string | undefined
                promotion_type?: string | undefined
                q?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                limit?: string | undefined
                marketplace_id: string
                offset?: string | undefined
                promotion_status?: string | undefined
                promotion_type?: string | undefined
                q?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/promotion_summary_report': {
      $get:
        | {
            input: { query: { marketplace_id: string } }
            output: SummaryReportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { marketplace_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { marketplace_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { marketplace_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
