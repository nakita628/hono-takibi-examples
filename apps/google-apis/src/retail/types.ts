type GoogleCloudRetailV2alphaCatalogAttribute = {
  dynamicFacetableOption?:
    | 'DYNAMIC_FACETABLE_OPTION_UNSPECIFIED'
    | 'DYNAMIC_FACETABLE_ENABLED'
    | 'DYNAMIC_FACETABLE_DISABLED'
    | undefined
  exactSearchableOption?:
    | 'EXACT_SEARCHABLE_OPTION_UNSPECIFIED'
    | 'EXACT_SEARCHABLE_ENABLED'
    | 'EXACT_SEARCHABLE_DISABLED'
    | undefined
  inUse?: boolean | undefined
  indexableOption?:
    | 'INDEXABLE_OPTION_UNSPECIFIED'
    | 'INDEXABLE_ENABLED'
    | 'INDEXABLE_DISABLED'
    | undefined
  key?: string | undefined
  recommendationsFilteringOption?:
    | 'RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED'
    | 'RECOMMENDATIONS_FILTERING_DISABLED'
    | 'RECOMMENDATIONS_FILTERING_ENABLED'
    | undefined
  retrievableOption?:
    | 'RETRIEVABLE_OPTION_UNSPECIFIED'
    | 'RETRIEVABLE_ENABLED'
    | 'RETRIEVABLE_DISABLED'
    | undefined
  searchableOption?:
    | 'SEARCHABLE_OPTION_UNSPECIFIED'
    | 'SEARCHABLE_ENABLED'
    | 'SEARCHABLE_DISABLED'
    | undefined
  type?: 'UNKNOWN' | 'TEXTUAL' | 'NUMERICAL' | undefined
}
type GoogleCloudRetailV2alphaAddCatalogAttributeRequest = {
  catalogAttribute?: GoogleCloudRetailV2alphaCatalogAttribute | undefined
}
type GoogleCloudRetailV2alphaAttributesConfig = {
  attributeConfigLevel?:
    | 'ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED'
    | 'PRODUCT_LEVEL_ATTRIBUTE_CONFIG'
    | 'CATALOG_LEVEL_ATTRIBUTE_CONFIG'
    | undefined
  catalogAttributes?: { [x: string]: GoogleCloudRetailV2alphaCatalogAttribute } | undefined
  name?: string | undefined
}
type GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesRequest = {
  attributeKeys?: string[] | undefined
}
type GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesResponse = {
  deletedCatalogAttributes?: string[] | undefined
  resetCatalogAttributes?: string[] | undefined
}
type GoogleCloudRetailV2alphaRemoveCatalogAttributeRequest = { key?: string | undefined }
type GoogleCloudRetailV2alphaReplaceCatalogAttributeRequest = {
  catalogAttribute?: GoogleCloudRetailV2alphaCatalogAttribute | undefined
  updateMask?: string | undefined
}
type GoogleCloudRetailV2alphaCompleteQueryResponseAttributeResult = {
  suggestions?: string[] | undefined
}
type GoogleCloudRetailV2alphaCustomAttribute = {
  indexable?: boolean | undefined
  numbers?: number[] | undefined
  searchable?: boolean | undefined
  text?: string[] | undefined
}
type GoogleCloudRetailV2alphaInterval = {
  exclusiveMaximum?: number | undefined
  exclusiveMinimum?: number | undefined
  maximum?: number | undefined
  minimum?: number | undefined
}
type GoogleCloudRetailV2alphaSearchResponseFacetFacetValue = {
  count?: string | undefined
  interval?: GoogleCloudRetailV2alphaInterval | undefined
  maxValue?: number | undefined
  minValue?: number | undefined
  value?: string | undefined
}
type GoogleCloudRetailV2alphaSearchResponseFacet = {
  dynamicFacet?: boolean | undefined
  key?: string | undefined
  values?: GoogleCloudRetailV2alphaSearchResponseFacetFacetValue[] | undefined
}
type GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResult = {
  attributes?: { [x: string]: GoogleCloudRetailV2alphaCustomAttribute } | undefined
  facets?: GoogleCloudRetailV2alphaSearchResponseFacet[] | undefined
  suggestion?: string | undefined
  totalProductCount?: number | undefined
}
type GoogleCloudRetailV2alphaCompleteQueryResponseRecentSearchResult = {
  recentSearch?: string | undefined
}
type GoogleCloudRetailV2alphaCompleteQueryResponse = {
  attributeResults?:
    | { [x: string]: GoogleCloudRetailV2alphaCompleteQueryResponseAttributeResult }
    | undefined
  attributionToken?: string | undefined
  completionResults?: GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResult[] | undefined
  recentSearchResults?:
    | GoogleCloudRetailV2alphaCompleteQueryResponseRecentSearchResult[]
    | undefined
}
type GoogleCloudRetailV2alphaGetDefaultBranchResponse = {
  branch?: string | undefined
  note?: string | undefined
  setTime?: string | undefined
}
type GoogleCloudRetailV2alphaSetDefaultBranchRequest = {
  branchId?: string | undefined
  force?: boolean | undefined
  note?: string | undefined
}
type GoogleProtobufEmpty = { [x: string]: unknown }
type GoogleRpcStatus = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type GoogleLongrunningOperation = {
  done?: boolean | undefined
  error?: GoogleRpcStatus | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec = {
  mode?: 'MODE_UNSPECIFIED' | 'DISABLED' | 'ENABLED' | undefined
}
type GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec = {
  mode?: 'MODE_UNSPECIFIED' | 'AUTO' | 'DISABLED' | undefined
}
type GoogleCloudRetailV2alphaServingConfig = {
  boostControlIds?: string[] | undefined
  displayName?: string | undefined
  diversityLevel?: string | undefined
  diversityType?:
    | 'DIVERSITY_TYPE_UNSPECIFIED'
    | 'RULE_BASED_DIVERSITY'
    | 'DATA_DRIVEN_DIVERSITY'
    | undefined
  doNotAssociateControlIds?: string[] | undefined
  dynamicFacetSpec?: GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec | undefined
  enableCategoryFilterLevel?: string | undefined
  facetControlIds?: string[] | undefined
  filterControlIds?: string[] | undefined
  ignoreControlIds?: string[] | undefined
  modelId?: string | undefined
  name?: string | undefined
  onewaySynonymsControlIds?: string[] | undefined
  personalizationSpec?: GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec | undefined
  priceRerankingLevel?: string | undefined
  redirectControlIds?: string[] | undefined
  replacementControlIds?: string[] | undefined
  solutionTypes?:
    | ('SOLUTION_TYPE_UNSPECIFIED' | 'SOLUTION_TYPE_RECOMMENDATION' | 'SOLUTION_TYPE_SEARCH')[]
    | undefined
  twowaySynonymsControlIds?: string[] | undefined
}
type GoogleCloudRetailV2alphaMerchantCenterAccountLinkMerchantCenterFeedFilter = {
  primaryFeedId?: string | undefined
  primaryFeedName?: string | undefined
}
type GoogleCloudRetailV2alphaMerchantCenterAccountLink = {
  branchId?: string | undefined
  feedFilters?:
    | GoogleCloudRetailV2alphaMerchantCenterAccountLinkMerchantCenterFeedFilter[]
    | undefined
  feedLabel?: string | undefined
  id?: string | undefined
  languageCode?: string | undefined
  merchantCenterAccountId?: string | undefined
  name?: string | undefined
  projectId?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'PENDING' | 'ACTIVE' | 'FAILED' | undefined
}
type GoogleLongrunningListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: GoogleLongrunningOperation[] | undefined
}
type GoogleCloudRetailV2alphaPauseModelRequest = { [x: string]: unknown }
type GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate = {
  servingConfigId?: string | undefined
}
type GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel = {
  candidates?: GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate[] | undefined
  defaultCandidate?: GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate | undefined
  displayName?: string | undefined
}
type GoogleCloudRetailV2alphaModelPageOptimizationConfig = {
  pageOptimizationEventType?: string | undefined
  panels?: GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel[] | undefined
  restriction?:
    | 'RESTRICTION_UNSPECIFIED'
    | 'NO_RESTRICTION'
    | 'UNIQUE_SERVING_CONFIG_RESTRICTION'
    | 'UNIQUE_MODEL_RESTRICTION'
    | 'UNIQUE_MODEL_TYPE_RESTRICTION'
    | undefined
}
type GoogleCloudRetailV2alphaModelServingConfigList = { servingConfigIds?: string[] | undefined }
type GoogleCloudRetailV2alphaModel = {
  createTime?: string | undefined
  dataState?: 'DATA_STATE_UNSPECIFIED' | 'DATA_OK' | 'DATA_ERROR' | undefined
  displayName?: string | undefined
  filteringOption?:
    | 'RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED'
    | 'RECOMMENDATIONS_FILTERING_DISABLED'
    | 'RECOMMENDATIONS_FILTERING_ENABLED'
    | undefined
  lastTuneTime?: string | undefined
  name?: string | undefined
  optimizationObjective?: string | undefined
  pageOptimizationConfig?: GoogleCloudRetailV2alphaModelPageOptimizationConfig | undefined
  periodicTuningState?:
    | 'PERIODIC_TUNING_STATE_UNSPECIFIED'
    | 'PERIODIC_TUNING_DISABLED'
    | 'ALL_TUNING_DISABLED'
    | 'PERIODIC_TUNING_ENABLED'
    | undefined
  servingConfigLists?: GoogleCloudRetailV2alphaModelServingConfigList[] | undefined
  servingState?: 'SERVING_STATE_UNSPECIFIED' | 'INACTIVE' | 'ACTIVE' | 'TUNED' | undefined
  trainingState?: 'TRAINING_STATE_UNSPECIFIED' | 'PAUSED' | 'TRAINING' | undefined
  tuningOperation?: string | undefined
  type?: string | undefined
  updateTime?: string | undefined
}
type GoogleCloudRetailV2alphaResumeModelRequest = { [x: string]: unknown }
type GoogleCloudRetailV2alphaAudience = {
  ageGroups?: string[] | undefined
  genders?: string[] | undefined
}
type GoogleCloudRetailV2alphaColorInfo = {
  colorFamilies?: string[] | undefined
  colors?: string[] | undefined
}
type GoogleCloudRetailV2alphaFulfillmentInfo = {
  placeIds?: string[] | undefined
  type?: string | undefined
}
type GoogleCloudRetailV2alphaImage = {
  height?: number | undefined
  uri?: string | undefined
  width?: number | undefined
}
type GoogleCloudRetailV2alphaPriceInfoPriceRange = {
  originalPrice?: GoogleCloudRetailV2alphaInterval | undefined
  price?: GoogleCloudRetailV2alphaInterval | undefined
}
type GoogleCloudRetailV2alphaPriceInfo = {
  cost?: number | undefined
  currencyCode?: string | undefined
  originalPrice?: number | undefined
  price?: number | undefined
  priceEffectiveTime?: string | undefined
  priceExpireTime?: string | undefined
  priceRange?: GoogleCloudRetailV2alphaPriceInfoPriceRange | undefined
}
type GoogleCloudRetailV2alphaLocalInventory = {
  attributes?: { [x: string]: GoogleCloudRetailV2alphaCustomAttribute } | undefined
  fulfillmentTypes?: string[] | undefined
  placeId?: string | undefined
  priceInfo?: GoogleCloudRetailV2alphaPriceInfo | undefined
}
type GoogleCloudRetailV2alphaPromotion = { promotionId?: string | undefined }
type GoogleCloudRetailV2alphaRating = {
  averageRating?: number | undefined
  ratingCount?: number | undefined
  ratingHistogram?: number[] | undefined
}
type GoogleCloudRetailV2alphaProduct = {
  attributes?: { [x: string]: GoogleCloudRetailV2alphaCustomAttribute } | undefined
  audience?: GoogleCloudRetailV2alphaAudience | undefined
  availability?:
    | 'AVAILABILITY_UNSPECIFIED'
    | 'IN_STOCK'
    | 'OUT_OF_STOCK'
    | 'PREORDER'
    | 'BACKORDER'
    | undefined
  availableQuantity?: number | undefined
  availableTime?: string | undefined
  brands?: string[] | undefined
  categories?: string[] | undefined
  collectionMemberIds?: string[] | undefined
  colorInfo?: GoogleCloudRetailV2alphaColorInfo | undefined
  conditions?: string[] | undefined
  description?: string | undefined
  expireTime?: string | undefined
  fulfillmentInfo?: GoogleCloudRetailV2alphaFulfillmentInfo[] | undefined
  gtin?: string | undefined
  id?: string | undefined
  images?: GoogleCloudRetailV2alphaImage[] | undefined
  languageCode?: string | undefined
  localInventories?: GoogleCloudRetailV2alphaLocalInventory[] | undefined
  materials?: string[] | undefined
  name?: string | undefined
  patterns?: string[] | undefined
  priceInfo?: GoogleCloudRetailV2alphaPriceInfo | undefined
  primaryProductId?: string | undefined
  promotions?: GoogleCloudRetailV2alphaPromotion[] | undefined
  publishTime?: string | undefined
  rating?: GoogleCloudRetailV2alphaRating | undefined
  retrievableFields?: string | undefined
  sizes?: string[] | undefined
  tags?: string[] | undefined
  title?: string | undefined
  ttl?: string | undefined
  type?: 'TYPE_UNSPECIFIED' | 'PRIMARY' | 'VARIANT' | 'COLLECTION' | undefined
  uri?: string | undefined
  variants?: GoogleCloudRetailV2alphaProduct[] | undefined
}
type GoogleCloudRetailV2alphaSetInventoryRequest = {
  allowMissing?: boolean | undefined
  inventory?: GoogleCloudRetailV2alphaProduct | undefined
  setMask?: string | undefined
  setTime?: string | undefined
}
type GoogleCloudRetailV2alphaTuneModelRequest = { [x: string]: unknown }
type GoogleCloudRetailV2alphaMerchantCenterFeedFilter = {
  primaryFeedId?: string | undefined
  primaryFeedName?: string | undefined
}
type GoogleCloudRetailV2alphaMerchantCenterLink = {
  branchId?: string | undefined
  destinations?: string[] | undefined
  feeds?: GoogleCloudRetailV2alphaMerchantCenterFeedFilter[] | undefined
  languageCode?: string | undefined
  merchantCenterAccountId?: string | undefined
  regionCode?: string | undefined
}
type GoogleCloudRetailV2alphaMerchantCenterLinkingConfig = {
  links?: GoogleCloudRetailV2alphaMerchantCenterLink[] | undefined
}
type GoogleCloudRetailV2alphaProductLevelConfig = {
  ingestionProductType?: string | undefined
  merchantCenterProductIdField?: string | undefined
}
type GoogleCloudRetailV2alphaCatalog = {
  displayName?: string | undefined
  merchantCenterLinkingConfig?: GoogleCloudRetailV2alphaMerchantCenterLinkingConfig | undefined
  name?: string | undefined
  productLevelConfig?: GoogleCloudRetailV2alphaProductLevelConfig | undefined
}
type GoogleCloudRetailV2alphaListCatalogsResponse = {
  catalogs?: GoogleCloudRetailV2alphaCatalog[] | undefined
  nextPageToken?: string | undefined
}
type GoogleTypeDate = {
  day?: number | undefined
  month?: number | undefined
  year?: number | undefined
}
type GoogleCloudRetailV2alphaBigQuerySource = {
  dataSchema?: string | undefined
  datasetId?: string | undefined
  gcsStagingDir?: string | undefined
  partitionDate?: GoogleTypeDate | undefined
  projectId?: string | undefined
  tableId?: string | undefined
}
type GoogleCloudRetailV2alphaCompletionDataInputConfig = {
  bigQuerySource?: GoogleCloudRetailV2alphaBigQuerySource | undefined
}
type GoogleCloudRetailV2alphaImportCompletionDataRequest = {
  inputConfig?: GoogleCloudRetailV2alphaCompletionDataInputConfig | undefined
  notificationPubsubTopic?: string | undefined
}
type GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey = {
  caseInsensitive?: boolean | undefined
  contains?: string[] | undefined
  intervals?: GoogleCloudRetailV2alphaInterval[] | undefined
  key?: string | undefined
  orderBy?: string | undefined
  prefixes?: string[] | undefined
  query?: string | undefined
  restrictedValues?: string[] | undefined
  returnMinMax?: boolean | undefined
}
type GoogleCloudRetailV2alphaSearchRequestFacetSpec = {
  enableDynamicPosition?: boolean | undefined
  excludedFilterKeys?: string[] | undefined
  facetKey?: GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey | undefined
  limit?: number | undefined
}
type GoogleCloudRetailV2alphaRuleBoostAction = {
  boost?: number | undefined
  productsFilter?: string | undefined
}
type GoogleCloudRetailV2alphaConditionTimeRange = {
  endTime?: string | undefined
  startTime?: string | undefined
}
type GoogleCloudRetailV2alphaConditionQueryTerm = {
  fullMatch?: boolean | undefined
  value?: string | undefined
}
type GoogleCloudRetailV2alphaCondition = {
  activeTimeRange?: GoogleCloudRetailV2alphaConditionTimeRange[] | undefined
  queryTerms?: GoogleCloudRetailV2alphaConditionQueryTerm[] | undefined
}
type GoogleCloudRetailV2alphaRuleDoNotAssociateAction = {
  doNotAssociateTerms?: string[] | undefined
  queryTerms?: string[] | undefined
  terms?: string[] | undefined
}
type GoogleCloudRetailV2alphaRuleFilterAction = { filter?: string | undefined }
type GoogleCloudRetailV2alphaRuleIgnoreAction = { ignoreTerms?: string[] | undefined }
type GoogleCloudRetailV2alphaRuleOnewaySynonymsAction = {
  onewayTerms?: string[] | undefined
  queryTerms?: string[] | undefined
  synonyms?: string[] | undefined
}
type GoogleCloudRetailV2alphaRuleRedirectAction = { redirectUri?: string | undefined }
type GoogleCloudRetailV2alphaRuleReplacementAction = {
  queryTerms?: string[] | undefined
  replacementTerm?: string | undefined
  term?: string | undefined
}
type GoogleCloudRetailV2alphaRuleTwowaySynonymsAction = { synonyms?: string[] | undefined }
type GoogleCloudRetailV2alphaRule = {
  boostAction?: GoogleCloudRetailV2alphaRuleBoostAction | undefined
  condition?: GoogleCloudRetailV2alphaCondition | undefined
  doNotAssociateAction?: GoogleCloudRetailV2alphaRuleDoNotAssociateAction | undefined
  filterAction?: GoogleCloudRetailV2alphaRuleFilterAction | undefined
  ignoreAction?: GoogleCloudRetailV2alphaRuleIgnoreAction | undefined
  onewaySynonymsAction?: GoogleCloudRetailV2alphaRuleOnewaySynonymsAction | undefined
  redirectAction?: GoogleCloudRetailV2alphaRuleRedirectAction | undefined
  replacementAction?: GoogleCloudRetailV2alphaRuleReplacementAction | undefined
  twowaySynonymsAction?: GoogleCloudRetailV2alphaRuleTwowaySynonymsAction | undefined
}
type GoogleCloudRetailV2alphaControl = {
  associatedServingConfigIds?: string[] | undefined
  displayName?: string | undefined
  facetSpec?: GoogleCloudRetailV2alphaSearchRequestFacetSpec | undefined
  name?: string | undefined
  rule?: GoogleCloudRetailV2alphaRule | undefined
  searchSolutionUseCase?:
    | (
        | 'SEARCH_SOLUTION_USE_CASE_UNSPECIFIED'
        | 'SEARCH_SOLUTION_USE_CASE_SEARCH'
        | 'SEARCH_SOLUTION_USE_CASE_BROWSE'
      )[]
    | undefined
  solutionTypes?:
    | ('SOLUTION_TYPE_UNSPECIFIED' | 'SOLUTION_TYPE_RECOMMENDATION' | 'SOLUTION_TYPE_SEARCH')[]
    | undefined
}
type GoogleCloudRetailV2alphaListControlsResponse = {
  controls?: GoogleCloudRetailV2alphaControl[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudRetailV2alphaListMerchantCenterAccountLinksResponse = {
  merchantCenterAccountLinks?: GoogleCloudRetailV2alphaMerchantCenterAccountLink[] | undefined
}
type GoogleCloudRetailV2alphaListModelsResponse = {
  models?: GoogleCloudRetailV2alphaModel[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudRetailV2alphaListProductsResponse = {
  nextPageToken?: string | undefined
  products?: GoogleCloudRetailV2alphaProduct[] | undefined
  totalSize?: number | undefined
}
type GoogleCloudRetailV2alphaImportErrorsConfig = { gcsPrefix?: string | undefined }
type GoogleCloudRetailV2alphaGcsSource = {
  dataSchema?: string | undefined
  inputUris?: string[] | undefined
}
type GoogleCloudRetailV2alphaProductInlineSource = {
  products?: GoogleCloudRetailV2alphaProduct[] | undefined
}
type GoogleCloudRetailV2alphaProductInputConfig = {
  bigQuerySource?: GoogleCloudRetailV2alphaBigQuerySource | undefined
  gcsSource?: GoogleCloudRetailV2alphaGcsSource | undefined
  productInlineSource?: GoogleCloudRetailV2alphaProductInlineSource | undefined
}
type GoogleCloudRetailV2alphaImportProductsRequest = {
  errorsConfig?: GoogleCloudRetailV2alphaImportErrorsConfig | undefined
  inputConfig?: GoogleCloudRetailV2alphaProductInputConfig | undefined
  notificationPubsubTopic?: string | undefined
  reconciliationMode?: 'RECONCILIATION_MODE_UNSPECIFIED' | 'INCREMENTAL' | 'FULL' | undefined
  requestId?: string | undefined
  skipDefaultBranchProtection?: boolean | undefined
  updateMask?: string | undefined
}
type GoogleCloudRetailV2alphaPurgeProductsRequest = {
  filter?: string | undefined
  force?: boolean | undefined
}
type GoogleCloudRetailV2alphaListServingConfigsResponse = {
  nextPageToken?: string | undefined
  servingConfigs?: GoogleCloudRetailV2alphaServingConfig[] | undefined
}
type GoogleApiHttpBody = {
  contentType?: string | undefined
  data?: string | undefined
  extensions?: { [x: string]: { [x: string]: unknown } }[] | undefined
}
type GoogleCloudRetailV2alphaCompletionDetail = {
  completionAttributionToken?: string | undefined
  selectedPosition?: number | undefined
  selectedSuggestion?: string | undefined
}
type GoogleCloudRetailV2alphaProductDetail = {
  product?: GoogleCloudRetailV2alphaProduct | undefined
  quantity?: number | undefined
}
type GoogleCloudRetailV2alphaPurchaseTransaction = {
  cost?: number | undefined
  currencyCode?: string | undefined
  id?: string | undefined
  revenue?: number | undefined
  tax?: number | undefined
}
type GoogleCloudRetailV2alphaUserInfo = {
  directUserRequest?: boolean | undefined
  ipAddress?: string | undefined
  userAgent?: string | undefined
  userId?: string | undefined
}
type GoogleCloudRetailV2alphaUserEvent = {
  attributes?: { [x: string]: GoogleCloudRetailV2alphaCustomAttribute } | undefined
  attributionToken?: string | undefined
  cartId?: string | undefined
  completionDetail?: GoogleCloudRetailV2alphaCompletionDetail | undefined
  entity?: string | undefined
  eventTime?: string | undefined
  eventType?: string | undefined
  experimentIds?: string[] | undefined
  filter?: string | undefined
  offset?: number | undefined
  orderBy?: string | undefined
  pageCategories?: string[] | undefined
  pageViewId?: string | undefined
  productDetails?: GoogleCloudRetailV2alphaProductDetail[] | undefined
  purchaseTransaction?: GoogleCloudRetailV2alphaPurchaseTransaction | undefined
  referrerUri?: string | undefined
  searchQuery?: string | undefined
  sessionId?: string | undefined
  uri?: string | undefined
  userInfo?: GoogleCloudRetailV2alphaUserInfo | undefined
  visitorId?: string | undefined
}
type GoogleCloudRetailV2alphaUserEventInlineSource = {
  userEvents?: GoogleCloudRetailV2alphaUserEvent[] | undefined
}
type GoogleCloudRetailV2alphaUserEventInputConfig = {
  bigQuerySource?: GoogleCloudRetailV2alphaBigQuerySource | undefined
  gcsSource?: GoogleCloudRetailV2alphaGcsSource | undefined
  userEventInlineSource?: GoogleCloudRetailV2alphaUserEventInlineSource | undefined
}
type GoogleCloudRetailV2alphaImportUserEventsRequest = {
  errorsConfig?: GoogleCloudRetailV2alphaImportErrorsConfig | undefined
  inputConfig?: GoogleCloudRetailV2alphaUserEventInputConfig | undefined
}
type GoogleCloudRetailV2alphaPurgeUserEventsRequest = {
  filter?: string | undefined
  force?: boolean | undefined
}
type GoogleCloudRetailV2alphaRejoinUserEventsRequest = {
  userEventRejoinScope?:
    | 'USER_EVENT_REJOIN_SCOPE_UNSPECIFIED'
    | 'JOINED_EVENTS'
    | 'UNJOINED_EVENTS'
    | undefined
}
type GoogleCloudRetailV2alphaPredictRequest = {
  filter?: string | undefined
  labels?: { [x: string]: string } | undefined
  pageSize?: number | undefined
  pageToken?: string | undefined
  params?: { [x: string]: { [x: string]: unknown } } | undefined
  userEvent?: GoogleCloudRetailV2alphaUserEvent | undefined
  validateOnly?: boolean | undefined
}
type GoogleCloudRetailV2alphaPredictResponsePredictionResult = {
  id?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleCloudRetailV2alphaPredictResponse = {
  attributionToken?: string | undefined
  missingIds?: string[] | undefined
  results?: GoogleCloudRetailV2alphaPredictResponsePredictionResult[] | undefined
  validateOnly?: boolean | undefined
}
type GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec = {
  boost?: number | undefined
  condition?: string | undefined
}
type GoogleCloudRetailV2alphaSearchRequestBoostSpec = {
  conditionBoostSpecs?:
    | GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec[]
    | undefined
  skipBoostSpecValidation?: boolean | undefined
}
type GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec = {
  condition?: 'CONDITION_UNSPECIFIED' | 'DISABLED' | 'AUTO' | undefined
  pinUnexpandedResults?: boolean | undefined
}
type GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec = {
  mode?: 'MODE_UNSPECIFIED' | 'SUGGESTION_ONLY' | 'AUTO' | undefined
}
type GoogleCloudRetailV2alphaSearchRequest = {
  boostSpec?: GoogleCloudRetailV2alphaSearchRequestBoostSpec | undefined
  branch?: string | undefined
  canonicalFilter?: string | undefined
  dynamicFacetSpec?: GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec | undefined
  entity?: string | undefined
  facetSpecs?: GoogleCloudRetailV2alphaSearchRequestFacetSpec[] | undefined
  filter?: string | undefined
  labels?: { [x: string]: string } | undefined
  offset?: number | undefined
  orderBy?: string | undefined
  pageCategories?: string[] | undefined
  pageSize?: number | undefined
  pageToken?: string | undefined
  personalizationSpec?: GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec | undefined
  query?: string | undefined
  queryExpansionSpec?: GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec | undefined
  relevanceThreshold?:
    | 'RELEVANCE_THRESHOLD_UNSPECIFIED'
    | 'HIGH'
    | 'MEDIUM'
    | 'LOW'
    | 'LOWEST'
    | undefined
  searchMode?: 'SEARCH_MODE_UNSPECIFIED' | 'PRODUCT_SEARCH_ONLY' | 'FACETED_SEARCH_ONLY' | undefined
  spellCorrectionSpec?: GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec | undefined
  userInfo?: GoogleCloudRetailV2alphaUserInfo | undefined
  variantRollupKeys?: string[] | undefined
  visitorId?: string | undefined
}
type GoogleCloudRetailV2alphaExperimentInfoServingConfigExperiment = {
  experimentServingConfig?: string | undefined
  originalServingConfig?: string | undefined
}
type GoogleCloudRetailV2alphaExperimentInfo = {
  experiment?: string | undefined
  servingConfigExperiment?:
    | GoogleCloudRetailV2alphaExperimentInfoServingConfigExperiment
    | undefined
}
type GoogleCloudRetailV2alphaSearchResponseQueryExpansionInfo = {
  expandedQuery?: boolean | undefined
  pinnedResultCount?: string | undefined
}
type GoogleCloudRetailV2alphaSearchResponseSearchResult = {
  id?: string | undefined
  matchingVariantCount?: number | undefined
  matchingVariantFields?: { [x: string]: string } | undefined
  personalLabels?: string[] | undefined
  product?: GoogleCloudRetailV2alphaProduct | undefined
  variantRollupValues?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleCloudRetailV2alphaSearchResponse = {
  appliedControls?: string[] | undefined
  attributionToken?: string | undefined
  correctedQuery?: string | undefined
  experimentInfo?: GoogleCloudRetailV2alphaExperimentInfo[] | undefined
  facets?: GoogleCloudRetailV2alphaSearchResponseFacet[] | undefined
  invalidConditionBoostSpecs?:
    | GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec[]
    | undefined
  nextPageToken?: string | undefined
  queryExpansionInfo?: GoogleCloudRetailV2alphaSearchResponseQueryExpansionInfo | undefined
  redirectUri?: string | undefined
  results?: GoogleCloudRetailV2alphaSearchResponseSearchResult[] | undefined
  totalSize?: number | undefined
}
type GoogleCloudRetailV2alphaAddFulfillmentPlacesRequest = {
  addTime?: string | undefined
  allowMissing?: boolean | undefined
  placeIds?: string[] | undefined
  type?: string | undefined
}
type GoogleCloudRetailV2alphaAddLocalInventoriesRequest = {
  addMask?: string | undefined
  addTime?: string | undefined
  allowMissing?: boolean | undefined
  localInventories?: GoogleCloudRetailV2alphaLocalInventory[] | undefined
}
type GoogleCloudRetailV2alphaRemoveFulfillmentPlacesRequest = {
  allowMissing?: boolean | undefined
  placeIds?: string[] | undefined
  removeTime?: string | undefined
  type?: string | undefined
}
type GoogleCloudRetailV2alphaRemoveLocalInventoriesRequest = {
  allowMissing?: boolean | undefined
  placeIds?: string[] | undefined
  removeTime?: string | undefined
}
type GoogleCloudRetailV2alphaAddControlRequest = { controlId?: string | undefined }
type GoogleCloudRetailV2alphaRemoveControlRequest = { controlId?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2alpha/:attributesConfig:addCatalogAttribute': {
      $post: {
        input: { param: { attributesConfig: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRetailV2alphaAddCatalogAttributeRequest }
        output: GoogleCloudRetailV2alphaAttributesConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:attributesConfig:batchRemoveCatalogAttributes': {
      $post: {
        input: { param: { attributesConfig: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesRequest }
        output: GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:attributesConfig:removeCatalogAttribute': {
      $post: {
        input: { param: { attributesConfig: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRetailV2alphaRemoveCatalogAttributeRequest }
        output: GoogleCloudRetailV2alphaAttributesConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:attributesConfig:replaceCatalogAttribute': {
      $post: {
        input: { param: { attributesConfig: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRetailV2alphaReplaceCatalogAttributeRequest }
        output: GoogleCloudRetailV2alphaAttributesConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:catalog:completeQuery': {
      $get: {
        input: { param: { catalog: string } } & {
          query: {
            dataset?: string | undefined
            deviceType?: string | undefined
            enableAttributeSuggestions?: boolean | undefined
            entity?: string | undefined
            languageCodes?: string[] | undefined
            maxSuggestions?: number | undefined
            query?: string | undefined
            visitorId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudRetailV2alphaCompleteQueryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:catalog:getDefaultBranch': {
      $get: {
        input: { param: { catalog: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudRetailV2alphaGetDefaultBranchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:catalog:setDefaultBranch': {
      $post: {
        input: { param: { catalog: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRetailV2alphaSetDefaultBranchRequest }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            force?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRetailV2alphaServingConfig }
        output: GoogleCloudRetailV2alphaServingConfig
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { name: string } } & {
          query: {
            parent?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRetailV2alphaMerchantCenterAccountLink }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:name/operations': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleLongrunningListOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:name:pause': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRetailV2alphaPauseModelRequest }
        output: GoogleCloudRetailV2alphaModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:name:resume': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRetailV2alphaResumeModelRequest }
        output: GoogleCloudRetailV2alphaModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:name:setInventory': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRetailV2alphaSetInventoryRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:name:tune': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRetailV2alphaTuneModelRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:parent/catalogs': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudRetailV2alphaListCatalogsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:parent/completionData:import': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRetailV2alphaImportCompletionDataRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:parent/controls': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudRetailV2alphaListControlsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            controlId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRetailV2alphaControl }
        output: GoogleCloudRetailV2alphaControl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:parent/merchantCenterAccountLinks': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudRetailV2alphaListMerchantCenterAccountLinksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:parent/models': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudRetailV2alphaListModelsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            dryRun?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRetailV2alphaModel }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:parent/products': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            readMask?: string | undefined
            requireTotalSize?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudRetailV2alphaListProductsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            productId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRetailV2alphaProduct }
        output: GoogleCloudRetailV2alphaProduct
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:parent/products:import': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRetailV2alphaImportProductsRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:parent/products:purge': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRetailV2alphaPurgeProductsRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:parent/servingConfigs': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudRetailV2alphaListServingConfigsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            servingConfigId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRetailV2alphaServingConfig }
        output: GoogleCloudRetailV2alphaServingConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:parent/userEvents:collect': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            ets?: string | undefined
            prebuiltRule?: string | undefined
            rawJson?: string | undefined
            uri?: string | undefined
            userEvent?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleApiHttpBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:parent/userEvents:import': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRetailV2alphaImportUserEventsRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:parent/userEvents:purge': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRetailV2alphaPurgeUserEventsRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:parent/userEvents:rejoin': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRetailV2alphaRejoinUserEventsRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:parent/userEvents:write': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            writeAsync?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRetailV2alphaUserEvent }
        output: GoogleCloudRetailV2alphaUserEvent
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:placement:predict': {
      $post: {
        input: { param: { placement: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRetailV2alphaPredictRequest }
        output: GoogleCloudRetailV2alphaPredictResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:placement:search': {
      $post: {
        input: { param: { placement: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRetailV2alphaSearchRequest }
        output: GoogleCloudRetailV2alphaSearchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:product:addFulfillmentPlaces': {
      $post: {
        input: { param: { product: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRetailV2alphaAddFulfillmentPlacesRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:product:addLocalInventories': {
      $post: {
        input: { param: { product: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRetailV2alphaAddLocalInventoriesRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:product:removeFulfillmentPlaces': {
      $post: {
        input: { param: { product: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRetailV2alphaRemoveFulfillmentPlacesRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:product:removeLocalInventories': {
      $post: {
        input: { param: { product: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRetailV2alphaRemoveLocalInventoriesRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:servingConfig:addControl': {
      $post: {
        input: { param: { servingConfig: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRetailV2alphaAddControlRequest }
        output: GoogleCloudRetailV2alphaServingConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha/:servingConfig:removeControl': {
      $post: {
        input: { param: { servingConfig: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRetailV2alphaRemoveControlRequest }
        output: GoogleCloudRetailV2alphaServingConfig
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
