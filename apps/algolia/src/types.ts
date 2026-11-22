type ErrorBase = { message?: string | undefined }
type ParamsAsString = string
type SearchParamsString = { params?: ParamsAsString | undefined }
type Query = string
type SimilarQuery = string
type Filters = string
type FacetFilters = FacetFilters[] | string
type OptionalFilters = OptionalFilters[] | string
type NumericFilters = NumericFilters[] | string
type TagFilters = TagFilters[] | string
type SumOrFiltersScores = boolean
type RestrictSearchableAttributes = string[]
type FacetingAfterDistinct = boolean
type Page = number
type Length = number
type AroundLatLng = string
type AroundLatLngViaIP = boolean
type AroundRadiusAll = 'all'
type AroundRadius = number | AroundRadiusAll
type AroundPrecisionFromValue = { from?: number | undefined; value?: number | undefined }[]
type AroundPrecision = number | AroundPrecisionFromValue
type MinimumAroundRadius = number
type InsideBoundingBoxArray = number[][]
type InsideBoundingBox = string | ({ [x: string]: unknown } | null) | InsideBoundingBoxArray
type InsidePolygon = number[][]
type SupportedLanguage =
  | 'af'
  | 'ar'
  | 'az'
  | 'bg'
  | 'bn'
  | 'ca'
  | 'cs'
  | 'cy'
  | 'da'
  | 'de'
  | 'el'
  | 'en'
  | 'eo'
  | 'es'
  | 'et'
  | 'eu'
  | 'fa'
  | 'fi'
  | 'fo'
  | 'fr'
  | 'ga'
  | 'gl'
  | 'he'
  | 'hi'
  | 'hu'
  | 'hy'
  | 'id'
  | 'is'
  | 'it'
  | 'ja'
  | 'ka'
  | 'kk'
  | 'ko'
  | 'ku'
  | 'ky'
  | 'lt'
  | 'lv'
  | 'mi'
  | 'mn'
  | 'mr'
  | 'ms'
  | 'mt'
  | 'nb'
  | 'nl'
  | 'no'
  | 'ns'
  | 'pl'
  | 'ps'
  | 'pt'
  | 'pt-br'
  | 'qu'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sq'
  | 'sv'
  | 'sw'
  | 'ta'
  | 'te'
  | 'th'
  | 'tl'
  | 'tn'
  | 'tr'
  | 'tt'
  | 'uk'
  | 'ur'
  | 'uz'
  | 'zh'
type NaturalLanguages = SupportedLanguage[]
type RuleContexts = string[]
type PersonalizationImpact = number
type UserToken = string
type GetRankingInfo = boolean
type Synonyms = boolean
type ClickAnalytics = boolean
type Analytics = boolean
type AnalyticsTags = string[]
type PercentileComputation = boolean
type EnableABTest = boolean
type AttributesToRetrieve = string[]
type RelevancyStrictness = number
type AttributesToHighlight = string[]
type AttributesToSnippet = string[]
type HighlightPreTag = string
type HighlightPostTag = string
type SnippetEllipsisText = string
type RestrictHighlightAndSnippetArrays = boolean
type HitsPerPage = number
type MinWordSizefor1Typo = number
type MinWordSizefor2Typos = number
type TypoToleranceEnum = 'min' | 'strict' | 'true' | 'false'
type TypoTolerance = boolean | TypoToleranceEnum
type AllowTyposOnNumericTokens = boolean
type DisableTypoToleranceOnAttributes = string[]
type BooleanString = 'true' | 'false'
type IgnorePlurals = SupportedLanguage[] | BooleanString | boolean
type RemoveStopWords = SupportedLanguage[] | boolean
type QueryLanguages = SupportedLanguage[]
type DecompoundQuery = boolean
type EnableRules = boolean
type EnablePersonalization = boolean
type QueryType = 'prefixLast' | 'prefixAll' | 'prefixNone'
type RemoveWordsIfNoResults = 'none' | 'lastWords' | 'firstWords' | 'allOptional'
type Mode = 'neuralSearch' | 'keywordSearch'
type SemanticSearch = { eventSources?: string[] | ({ [x: string]: unknown } | null) | undefined }
type AdvancedSyntax = boolean
type OptionalWordsArray = string[]
type OptionalWords = string | ({ [x: string]: unknown } | null) | OptionalWordsArray
type DisableExactOnAttributes = string[]
type ExactOnSingleWordQuery = 'attribute' | 'none' | 'word'
type AlternativesAsExact =
  | 'ignorePlurals'
  | 'singleWordSynonym'
  | 'multiWordsSynonym'
  | 'ignoreConjugations'
type IndexSettingsAlternativesAsExact = AlternativesAsExact[]
type AdvancedSyntaxFeatures = 'exactPhrase' | 'excludeWords'
type IndexSettingsAdvancedSyntaxFeatures = AdvancedSyntaxFeatures[]
type Distinct = boolean | number
type ReplaceSynonymsInHighlight = boolean
type MinProximity = number
type ResponseFields = string[]
type MaxValuesPerFacet = number
type SortFacetValuesBy = string
type AttributeCriteriaComputedByMinProximity = boolean
type AttributeCriteriaComputedBy = 'minProximity' | 'best' | 'sum'
type Order = string[]
type Facets = { order?: Order | undefined }
type SortRemainingBy = 'count' | 'alpha' | 'hidden'
type Hide = string[]
type Value = {
  order?: Order | undefined
  sortRemainingBy?: SortRemainingBy | undefined
  hide?: Hide | undefined
}
type Values = { [x: string]: Value }
type FacetOrdering = { facets?: Facets | undefined; values?: Values | undefined }
type RedirectURL = { url?: string | undefined }
type BannerImageUrl = { url?: string | undefined }
type BannerImage = { urls?: BannerImageUrl[] | undefined; title?: string | undefined }
type BannerLink = { url?: string | undefined }
type Banner = { image?: BannerImage | undefined; link?: BannerLink | undefined }
type Banners = Banner[]
type ResultCard = { enabled?: boolean | undefined }
type Widgets = { banners?: Banners | undefined; resultCard?: ResultCard | undefined }
type RenderingContent = {
  facetOrdering?: FacetOrdering | undefined
  redirect?: RedirectURL | undefined
  widgets?: Widgets | undefined
}
type EnableReRanking = boolean
type ReRankingApplyFilter = ReRankingApplyFilter[] | string
type AllowReRankingOnPersonalization = boolean
type SearchParamsObject = {
  query?: Query | undefined
  similarQuery?: SimilarQuery | undefined
  filters?: Filters | undefined
  facetFilters?: FacetFilters | undefined
  optionalFilters?: OptionalFilters | undefined
  numericFilters?: NumericFilters | undefined
  tagFilters?: TagFilters | undefined
  sumOrFiltersScores?: SumOrFiltersScores | undefined
  restrictSearchableAttributes?: RestrictSearchableAttributes | undefined
  facets?: string[] | undefined
  facetingAfterDistinct?: FacetingAfterDistinct | undefined
  page?: Page | undefined
  offset?: number | undefined
  length?: Length | undefined
  aroundLatLng?: AroundLatLng | undefined
  aroundLatLngViaIP?: AroundLatLngViaIP | undefined
  aroundRadius?: AroundRadius | undefined
  aroundPrecision?: AroundPrecision | undefined
  minimumAroundRadius?: MinimumAroundRadius | undefined
  insideBoundingBox?: InsideBoundingBox | undefined
  insidePolygon?: InsidePolygon | undefined
  naturalLanguages?: NaturalLanguages | undefined
  ruleContexts?: RuleContexts | undefined
  personalizationImpact?: PersonalizationImpact | undefined
  userToken?: UserToken | undefined
  getRankingInfo?: GetRankingInfo | undefined
  synonyms?: Synonyms | undefined
  clickAnalytics?: ClickAnalytics | undefined
  analytics?: Analytics | undefined
  analyticsTags?: AnalyticsTags | undefined
  percentileComputation?: PercentileComputation | undefined
  enableABTest?: EnableABTest | undefined
  attributesToRetrieve?: AttributesToRetrieve | undefined
  ranking?: string[] | undefined
  relevancyStrictness?: RelevancyStrictness | undefined
  attributesToHighlight?: AttributesToHighlight | undefined
  attributesToSnippet?: AttributesToSnippet | undefined
  highlightPreTag?: HighlightPreTag | undefined
  highlightPostTag?: HighlightPostTag | undefined
  snippetEllipsisText?: SnippetEllipsisText | undefined
  restrictHighlightAndSnippetArrays?: RestrictHighlightAndSnippetArrays | undefined
  hitsPerPage?: HitsPerPage | undefined
  minWordSizefor1Typo?: MinWordSizefor1Typo | undefined
  minWordSizefor2Typos?: MinWordSizefor2Typos | undefined
  typoTolerance?: TypoTolerance | undefined
  allowTyposOnNumericTokens?: AllowTyposOnNumericTokens | undefined
  disableTypoToleranceOnAttributes?: DisableTypoToleranceOnAttributes | undefined
  ignorePlurals?: IgnorePlurals | undefined
  removeStopWords?: RemoveStopWords | undefined
  queryLanguages?: QueryLanguages | undefined
  decompoundQuery?: DecompoundQuery | undefined
  enableRules?: EnableRules | undefined
  enablePersonalization?: EnablePersonalization | undefined
  queryType?: QueryType | undefined
  removeWordsIfNoResults?: RemoveWordsIfNoResults | undefined
  mode?: Mode | undefined
  semanticSearch?: SemanticSearch | undefined
  advancedSyntax?: AdvancedSyntax | undefined
  optionalWords?: OptionalWords | undefined
  disableExactOnAttributes?: DisableExactOnAttributes | undefined
  exactOnSingleWordQuery?: ExactOnSingleWordQuery | undefined
  alternativesAsExact?: IndexSettingsAlternativesAsExact | undefined
  advancedSyntaxFeatures?: IndexSettingsAdvancedSyntaxFeatures | undefined
  distinct?: Distinct | undefined
  replaceSynonymsInHighlight?: ReplaceSynonymsInHighlight | undefined
  minProximity?: MinProximity | undefined
  responseFields?: ResponseFields | undefined
  maxValuesPerFacet?: MaxValuesPerFacet | undefined
  sortFacetValuesBy?: SortFacetValuesBy | undefined
  attributeCriteriaComputedByMinProximity?: AttributeCriteriaComputedByMinProximity | undefined
  attributeCriteriaComputedBy?: AttributeCriteriaComputedBy | undefined
  renderingContent?: RenderingContent | undefined
  enableReRanking?: EnableReRanking | undefined
  reRankingApplyFilter?: ReRankingApplyFilter | ({ [x: string]: unknown } | null) | undefined
  allowReRankingOnPersonalization?: AllowReRankingOnPersonalization | undefined
}
type SearchParams = SearchParamsString | SearchParamsObject
type ProcessingTimeMS = number
type RedirectRuleIndexMetadata = {
  source: string
  dest: string
  reason: string
  succeed: boolean
  data: { ruleObjectID: string }
}
type UserData = { [x: string]: unknown }
type NbHits = number
type NbPages = number
type ObjectID = string
type HighlightedValue = string
type MatchLevel = 'none' | 'partial' | 'full'
type HighlightResultOption = {
  value: HighlightedValue
  matchLevel: MatchLevel
  matchedWords: string[]
  fullyHighlighted?: boolean | undefined
}
type HighlightResultArray = HighlightResult[]
type HighlightResult = HighlightResultOption | HighlightResultMap | HighlightResultArray
type HighlightResultMap = { [x: string]: HighlightResult }
type SnippetResultOption = { value: HighlightedValue; matchLevel: MatchLevel }
type SnippetResultArray = SnippetResult[]
type SnippetResult = SnippetResultOption | SnippetResultMap | SnippetResultArray
type SnippetResultMap = { [x: string]: SnippetResult }
type MatchedGeoLocation = {
  lat?: number | undefined
  lng?: number | undefined
  distance?: number | undefined
}
type Personalization = {
  filtersScore?: number | undefined
  rankingScore?: number | undefined
  score?: number | undefined
}
type RankingInfo = {
  filters?: number | undefined
  firstMatchedWord: number
  geoDistance: number
  geoPrecision?: number | undefined
  matchedGeoLocation?: MatchedGeoLocation | undefined
  personalization?: Personalization | undefined
  nbExactWords: number
  nbTypos: number
  promoted?: boolean | undefined
  proximityDistance?: number | undefined
  userScore: number
  words?: number | undefined
  promotedByReRanking?: boolean | undefined
}
type DistinctSeqID = number
type Hit = {
  objectID: ObjectID
  _highlightResult?: HighlightResultMap | undefined
  _snippetResult?: SnippetResultMap | undefined
  _rankingInfo?: RankingInfo | undefined
  _distinctSeqID?: DistinctSeqID | undefined
}
type QueryCategorizationType = 'narrow' | 'broad' | 'ambiguous' | 'none'
type CategoryPredictionBin = 'certain' | 'very high' | 'high' | 'low' | 'very low'
type HierarchyPathEntry = {
  facetName?: string | undefined
  facetValue?: string | undefined
  depth?: number | undefined
}
type CategoryPrediction = {
  bin?: CategoryPredictionBin | undefined
  hierarchyPath?: HierarchyPathEntry[] | undefined
}
type AutoFilteringFilterEntry = string | string[]
type AutoFilteringResult = {
  enabled?: boolean | undefined
  maxDepth?: number | undefined
  facetFilters?: AutoFilteringFilterEntry[] | undefined
  optionalFilters?: AutoFilteringFilterEntry[] | undefined
}
type QueryCategorization = {
  normalizedQuery?: string | undefined
  count?: number | undefined
  type?: QueryCategorizationType | undefined
  categories?: CategoryPrediction[] | undefined
  autofiltering?: AutoFilteringResult | undefined
}
type ResponseExtensions = { queryCategorization?: QueryCategorization | undefined }
type SearchResponse = {
  abTestID?: number | undefined
  abTestVariantID?: number | undefined
  aroundLatLng?: string | undefined
  automaticRadius?: string | undefined
  exhaustive?:
    | {
        facetsCount?: boolean | undefined
        facetValues?: boolean | undefined
        nbHits?: boolean | undefined
        rulesMatch?: boolean | undefined
        typo?: boolean | undefined
      }
    | undefined
  appliedRules?: { [x: string]: unknown }[] | undefined
  exhaustiveFacetsCount?: boolean | undefined
  exhaustiveNbHits?: boolean | undefined
  exhaustiveTypo?: boolean | undefined
  facets?: { [x: string]: { [x: string]: number } } | undefined
  facets_stats?:
    | {
        [x: string]: {
          min?: number | undefined
          max?: number | undefined
          avg?: number | undefined
          sum?: number | undefined
        }
      }
    | undefined
  index?: string | undefined
  indexUsed?: string | undefined
  message?: string | undefined
  nbSortedHits?: number | undefined
  parsedQuery?: string | undefined
  processingTimeMS?: ProcessingTimeMS | undefined
  processingTimingsMS?: { [x: string]: unknown } | undefined
  queryAfterRemoval?: string | undefined
  redirect?: { index?: RedirectRuleIndexMetadata[] | undefined } | undefined
  renderingContent?: RenderingContent | undefined
  serverTimeMS?: number | undefined
  serverUsed?: string | undefined
  userData?: UserData | undefined
  queryID?: string | undefined
  _automaticInsights?: boolean | undefined
  page?: Page | undefined
  nbHits?: NbHits | undefined
  nbPages?: NbPages | undefined
  hitsPerPage?: HitsPerPage | undefined
  hits: Hit[]
  query?: Query | undefined
  params?: string | undefined
  extensions?: ResponseExtensions | undefined
}
type IndexName = string
type SearchTypeDefault = 'default'
type SearchExtensionsQueryCategorization = {
  enableCategoriesRetrieval?: boolean | undefined
  enableAutoFiltering?: boolean | undefined
}
type SearchExtensions = { queryCategorization?: SearchExtensionsQueryCategorization | undefined }
type SearchForHits = {
  indexName: IndexName
  type?: SearchTypeDefault | undefined
  extensions?: SearchExtensions | undefined
}
type FacetQuery = string
type MaxFacetHits = number
type SearchTypeFacet = 'facet'
type SearchForFacets = {
  facet: string
  indexName: IndexName
  facetQuery?: FacetQuery | undefined
  maxFacetHits?: MaxFacetHits | undefined
  type: SearchTypeFacet
}
type SearchQuery = SearchForHits | SearchForFacets
type SearchStrategy = 'none' | 'stopIfEnoughMatches'
type SearchForFacetValuesResponse = {
  facetHits: { value: string; highlighted: HighlightedValue; count: number }[]
  exhaustiveFacetsCount: boolean
  processingTimeMS?: ProcessingTimeMS | undefined
}
type SearchResponsePartial = {
  abTestID?: number | undefined
  abTestVariantID?: number | undefined
  aroundLatLng?: string | undefined
  automaticRadius?: string | undefined
  exhaustive?:
    | {
        facetsCount?: boolean | undefined
        facetValues?: boolean | undefined
        nbHits?: boolean | undefined
        rulesMatch?: boolean | undefined
        typo?: boolean | undefined
      }
    | undefined
  appliedRules?: { [x: string]: unknown }[] | undefined
  exhaustiveFacetsCount?: boolean | undefined
  exhaustiveNbHits?: boolean | undefined
  exhaustiveTypo?: boolean | undefined
  facets?: { [x: string]: { [x: string]: number } } | undefined
  facets_stats?:
    | {
        [x: string]: {
          min?: number | undefined
          max?: number | undefined
          avg?: number | undefined
          sum?: number | undefined
        }
      }
    | undefined
  index?: string | undefined
  indexUsed?: string | undefined
  message?: string | undefined
  nbSortedHits?: number | undefined
  parsedQuery?: string | undefined
  processingTimeMS?: ProcessingTimeMS | undefined
  processingTimingsMS?: { [x: string]: unknown } | undefined
  queryAfterRemoval?: string | undefined
  redirect?: { index?: RedirectRuleIndexMetadata[] | undefined } | undefined
  renderingContent?: RenderingContent | undefined
  serverTimeMS?: number | undefined
  serverUsed?: string | undefined
  userData?: UserData | undefined
  queryID?: string | undefined
  _automaticInsights?: boolean | undefined
  page?: Page | undefined
  nbHits?: NbHits | undefined
  nbPages?: NbPages | undefined
  hitsPerPage?: HitsPerPage | undefined
  hits?: Hit[] | undefined
  query?: Query | undefined
  params?: string | undefined
  extensions?: ResponseExtensions | undefined
}
type SearchResult = SearchResponse | SearchForFacetValuesResponse | SearchResponsePartial
type BrowseParamsObject = {
  query?: Query | undefined
  similarQuery?: SimilarQuery | undefined
  filters?: Filters | undefined
  facetFilters?: FacetFilters | undefined
  optionalFilters?: OptionalFilters | undefined
  numericFilters?: NumericFilters | undefined
  tagFilters?: TagFilters | undefined
  sumOrFiltersScores?: SumOrFiltersScores | undefined
  restrictSearchableAttributes?: RestrictSearchableAttributes | undefined
  facets?: string[] | undefined
  facetingAfterDistinct?: FacetingAfterDistinct | undefined
  page?: Page | undefined
  offset?: number | undefined
  length?: Length | undefined
  aroundLatLng?: AroundLatLng | undefined
  aroundLatLngViaIP?: AroundLatLngViaIP | undefined
  aroundRadius?: AroundRadius | undefined
  aroundPrecision?: AroundPrecision | undefined
  minimumAroundRadius?: MinimumAroundRadius | undefined
  insideBoundingBox?: InsideBoundingBox | undefined
  insidePolygon?: InsidePolygon | undefined
  naturalLanguages?: NaturalLanguages | undefined
  ruleContexts?: RuleContexts | undefined
  personalizationImpact?: PersonalizationImpact | undefined
  userToken?: UserToken | undefined
  getRankingInfo?: GetRankingInfo | undefined
  synonyms?: Synonyms | undefined
  clickAnalytics?: ClickAnalytics | undefined
  analytics?: Analytics | undefined
  analyticsTags?: AnalyticsTags | undefined
  percentileComputation?: PercentileComputation | undefined
  enableABTest?: EnableABTest | undefined
  attributesToRetrieve?: AttributesToRetrieve | undefined
  ranking?: string[] | undefined
  relevancyStrictness?: RelevancyStrictness | undefined
  attributesToHighlight?: AttributesToHighlight | undefined
  attributesToSnippet?: AttributesToSnippet | undefined
  highlightPreTag?: HighlightPreTag | undefined
  highlightPostTag?: HighlightPostTag | undefined
  snippetEllipsisText?: SnippetEllipsisText | undefined
  restrictHighlightAndSnippetArrays?: RestrictHighlightAndSnippetArrays | undefined
  hitsPerPage?: HitsPerPage | undefined
  minWordSizefor1Typo?: MinWordSizefor1Typo | undefined
  minWordSizefor2Typos?: MinWordSizefor2Typos | undefined
  typoTolerance?: TypoTolerance | undefined
  allowTyposOnNumericTokens?: AllowTyposOnNumericTokens | undefined
  disableTypoToleranceOnAttributes?: DisableTypoToleranceOnAttributes | undefined
  ignorePlurals?: IgnorePlurals | undefined
  removeStopWords?: RemoveStopWords | undefined
  queryLanguages?: QueryLanguages | undefined
  decompoundQuery?: DecompoundQuery | undefined
  enableRules?: EnableRules | undefined
  enablePersonalization?: EnablePersonalization | undefined
  queryType?: QueryType | undefined
  removeWordsIfNoResults?: RemoveWordsIfNoResults | undefined
  mode?: Mode | undefined
  semanticSearch?: SemanticSearch | undefined
  advancedSyntax?: AdvancedSyntax | undefined
  optionalWords?: OptionalWords | undefined
  disableExactOnAttributes?: DisableExactOnAttributes | undefined
  exactOnSingleWordQuery?: ExactOnSingleWordQuery | undefined
  alternativesAsExact?: IndexSettingsAlternativesAsExact | undefined
  advancedSyntaxFeatures?: IndexSettingsAdvancedSyntaxFeatures | undefined
  distinct?: Distinct | undefined
  replaceSynonymsInHighlight?: ReplaceSynonymsInHighlight | undefined
  minProximity?: MinProximity | undefined
  responseFields?: ResponseFields | undefined
  maxValuesPerFacet?: MaxValuesPerFacet | undefined
  sortFacetValuesBy?: SortFacetValuesBy | undefined
  attributeCriteriaComputedByMinProximity?: AttributeCriteriaComputedByMinProximity | undefined
  attributeCriteriaComputedBy?: AttributeCriteriaComputedBy | undefined
  renderingContent?: RenderingContent | undefined
  enableReRanking?: EnableReRanking | undefined
  reRankingApplyFilter?: ReRankingApplyFilter | ({ [x: string]: unknown } | null) | undefined
  allowReRankingOnPersonalization?: AllowReRankingOnPersonalization | undefined
  cursor?: string | undefined
}
type BrowseParams = BrowseParamsObject | SearchParamsString
type BrowseResponse = {
  abTestID?: number | undefined
  abTestVariantID?: number | undefined
  aroundLatLng?: string | undefined
  automaticRadius?: string | undefined
  exhaustive?:
    | {
        facetsCount?: boolean | undefined
        facetValues?: boolean | undefined
        nbHits?: boolean | undefined
        rulesMatch?: boolean | undefined
        typo?: boolean | undefined
      }
    | undefined
  appliedRules?: { [x: string]: unknown }[] | undefined
  exhaustiveFacetsCount?: boolean | undefined
  exhaustiveNbHits?: boolean | undefined
  exhaustiveTypo?: boolean | undefined
  facets?: { [x: string]: { [x: string]: number } } | undefined
  facets_stats?:
    | {
        [x: string]: {
          min?: number | undefined
          max?: number | undefined
          avg?: number | undefined
          sum?: number | undefined
        }
      }
    | undefined
  index?: string | undefined
  indexUsed?: string | undefined
  message?: string | undefined
  nbSortedHits?: number | undefined
  parsedQuery?: string | undefined
  processingTimeMS?: ProcessingTimeMS | undefined
  processingTimingsMS?: { [x: string]: unknown } | undefined
  queryAfterRemoval?: string | undefined
  redirect?: { index?: RedirectRuleIndexMetadata[] | undefined } | undefined
  renderingContent?: RenderingContent | undefined
  serverTimeMS?: number | undefined
  serverUsed?: string | undefined
  userData?: UserData | undefined
  queryID?: string | undefined
  _automaticInsights?: boolean | undefined
  page?: Page | undefined
  nbHits?: NbHits | undefined
  nbPages?: NbPages | undefined
  hitsPerPage?: HitsPerPage | undefined
  hits: Hit[]
  query?: Query | undefined
  params?: string | undefined
  extensions?: ResponseExtensions | undefined
  cursor?: string | undefined
}
type CreatedAt = string
type TaskID = bigint
type DeletedAt = string
type UpdatedAt = string
type DeleteByParams = {
  facetFilters?: FacetFilters | undefined
  filters?: Filters | undefined
  numericFilters?: NumericFilters | undefined
  tagFilters?: TagFilters | undefined
  aroundLatLng?: AroundLatLng | undefined
  aroundRadius?: AroundRadius | undefined
  insideBoundingBox?: InsideBoundingBox | undefined
  insidePolygon?: InsidePolygon | undefined
}
type UpdatedAtResponse = { taskID: TaskID; updatedAt: UpdatedAt }
type Action =
  | 'addObject'
  | 'updateObject'
  | 'partialUpdateObject'
  | 'partialUpdateObjectNoCreate'
  | 'deleteObject'
  | 'delete'
  | 'clear'
type BatchWriteParams = { requests: { action: Action; body: { [x: string]: unknown } }[] }
type ObjectIDs = string[]
type BatchResponse = { taskID: TaskID; objectIDs: ObjectIDs }
type SettingsResponse = {
  attributesForFaceting?: string[] | undefined
  replicas?: string[] | undefined
  paginationLimitedTo?: bigint | undefined
  unretrievableAttributes?: string[] | undefined
  disableTypoToleranceOnWords?: string[] | undefined
  attributesToTransliterate?: string[] | undefined
  camelCaseAttributes?: string[] | undefined
  decompoundedAttributes?: { [x: string]: unknown } | undefined
  indexLanguages?: SupportedLanguage[] | undefined
  disablePrefixOnAttributes?: string[] | undefined
  allowCompressionOfIntegerArray?: boolean | undefined
  numericAttributesForFiltering?: string[] | undefined
  separatorsToIndex?: string | undefined
  searchableAttributes?: string[] | undefined
  userData?: UserData | undefined
  customNormalization?: { [x: string]: { [x: string]: string } } | undefined
  attributeForDistinct?: string | undefined
  maxFacetHits?: MaxFacetHits | undefined
  keepDiacriticsOnCharacters?: string | undefined
  customRanking?: string[] | undefined
  attributesToRetrieve?: AttributesToRetrieve | undefined
  ranking?: string[] | undefined
  relevancyStrictness?: RelevancyStrictness | undefined
  attributesToHighlight?: AttributesToHighlight | undefined
  attributesToSnippet?: AttributesToSnippet | undefined
  highlightPreTag?: HighlightPreTag | undefined
  highlightPostTag?: HighlightPostTag | undefined
  snippetEllipsisText?: SnippetEllipsisText | undefined
  restrictHighlightAndSnippetArrays?: RestrictHighlightAndSnippetArrays | undefined
  hitsPerPage?: HitsPerPage | undefined
  minWordSizefor1Typo?: MinWordSizefor1Typo | undefined
  minWordSizefor2Typos?: MinWordSizefor2Typos | undefined
  typoTolerance?: TypoTolerance | undefined
  allowTyposOnNumericTokens?: AllowTyposOnNumericTokens | undefined
  disableTypoToleranceOnAttributes?: DisableTypoToleranceOnAttributes | undefined
  ignorePlurals?: IgnorePlurals | undefined
  removeStopWords?: RemoveStopWords | undefined
  queryLanguages?: QueryLanguages | undefined
  decompoundQuery?: DecompoundQuery | undefined
  enableRules?: EnableRules | undefined
  enablePersonalization?: EnablePersonalization | undefined
  queryType?: QueryType | undefined
  removeWordsIfNoResults?: RemoveWordsIfNoResults | undefined
  mode?: Mode | undefined
  semanticSearch?: SemanticSearch | undefined
  advancedSyntax?: AdvancedSyntax | undefined
  optionalWords?: OptionalWords | undefined
  disableExactOnAttributes?: DisableExactOnAttributes | undefined
  exactOnSingleWordQuery?: ExactOnSingleWordQuery | undefined
  alternativesAsExact?: IndexSettingsAlternativesAsExact | undefined
  advancedSyntaxFeatures?: IndexSettingsAdvancedSyntaxFeatures | undefined
  distinct?: Distinct | undefined
  replaceSynonymsInHighlight?: ReplaceSynonymsInHighlight | undefined
  minProximity?: MinProximity | undefined
  responseFields?: ResponseFields | undefined
  maxValuesPerFacet?: MaxValuesPerFacet | undefined
  sortFacetValuesBy?: SortFacetValuesBy | undefined
  attributeCriteriaComputedByMinProximity?: AttributeCriteriaComputedByMinProximity | undefined
  attributeCriteriaComputedBy?: AttributeCriteriaComputedBy | undefined
  renderingContent?: RenderingContent | undefined
  enableReRanking?: EnableReRanking | undefined
  reRankingApplyFilter?: ReRankingApplyFilter | ({ [x: string]: unknown } | null) | undefined
  primary?: string | undefined
}
type IndexSettings = {
  attributesForFaceting?: string[] | undefined
  replicas?: string[] | undefined
  paginationLimitedTo?: bigint | undefined
  unretrievableAttributes?: string[] | undefined
  disableTypoToleranceOnWords?: string[] | undefined
  attributesToTransliterate?: string[] | undefined
  camelCaseAttributes?: string[] | undefined
  decompoundedAttributes?: { [x: string]: unknown } | undefined
  indexLanguages?: SupportedLanguage[] | undefined
  disablePrefixOnAttributes?: string[] | undefined
  allowCompressionOfIntegerArray?: boolean | undefined
  numericAttributesForFiltering?: string[] | undefined
  separatorsToIndex?: string | undefined
  searchableAttributes?: string[] | undefined
  userData?: UserData | undefined
  customNormalization?: { [x: string]: { [x: string]: string } } | undefined
  attributeForDistinct?: string | undefined
  maxFacetHits?: MaxFacetHits | undefined
  keepDiacriticsOnCharacters?: string | undefined
  customRanking?: string[] | undefined
  attributesToRetrieve?: AttributesToRetrieve | undefined
  ranking?: string[] | undefined
  relevancyStrictness?: RelevancyStrictness | undefined
  attributesToHighlight?: AttributesToHighlight | undefined
  attributesToSnippet?: AttributesToSnippet | undefined
  highlightPreTag?: HighlightPreTag | undefined
  highlightPostTag?: HighlightPostTag | undefined
  snippetEllipsisText?: SnippetEllipsisText | undefined
  restrictHighlightAndSnippetArrays?: RestrictHighlightAndSnippetArrays | undefined
  hitsPerPage?: HitsPerPage | undefined
  minWordSizefor1Typo?: MinWordSizefor1Typo | undefined
  minWordSizefor2Typos?: MinWordSizefor2Typos | undefined
  typoTolerance?: TypoTolerance | undefined
  allowTyposOnNumericTokens?: AllowTyposOnNumericTokens | undefined
  disableTypoToleranceOnAttributes?: DisableTypoToleranceOnAttributes | undefined
  ignorePlurals?: IgnorePlurals | undefined
  removeStopWords?: RemoveStopWords | undefined
  queryLanguages?: QueryLanguages | undefined
  decompoundQuery?: DecompoundQuery | undefined
  enableRules?: EnableRules | undefined
  enablePersonalization?: EnablePersonalization | undefined
  queryType?: QueryType | undefined
  removeWordsIfNoResults?: RemoveWordsIfNoResults | undefined
  mode?: Mode | undefined
  semanticSearch?: SemanticSearch | undefined
  advancedSyntax?: AdvancedSyntax | undefined
  optionalWords?: OptionalWords | undefined
  disableExactOnAttributes?: DisableExactOnAttributes | undefined
  exactOnSingleWordQuery?: ExactOnSingleWordQuery | undefined
  alternativesAsExact?: IndexSettingsAlternativesAsExact | undefined
  advancedSyntaxFeatures?: IndexSettingsAdvancedSyntaxFeatures | undefined
  distinct?: Distinct | undefined
  replaceSynonymsInHighlight?: ReplaceSynonymsInHighlight | undefined
  minProximity?: MinProximity | undefined
  responseFields?: ResponseFields | undefined
  maxValuesPerFacet?: MaxValuesPerFacet | undefined
  sortFacetValuesBy?: SortFacetValuesBy | undefined
  attributeCriteriaComputedByMinProximity?: AttributeCriteriaComputedByMinProximity | undefined
  attributeCriteriaComputedBy?: AttributeCriteriaComputedBy | undefined
  renderingContent?: RenderingContent | undefined
  enableReRanking?: EnableReRanking | undefined
  reRankingApplyFilter?: ReRankingApplyFilter | ({ [x: string]: unknown } | null) | undefined
}
type SynonymType =
  | 'synonym'
  | 'onewaysynonym'
  | 'altcorrection1'
  | 'altcorrection2'
  | 'placeholder'
  | 'oneWaySynonym'
  | 'altCorrection1'
  | 'altCorrection2'
type SynonymHit = {
  objectID: string
  type: SynonymType
  synonyms?: string[] | undefined
  input?: string | undefined
  word?: string | undefined
  corrections?: string[] | undefined
  placeholder?: string | undefined
  replacements?: string[] | undefined
}
type Id = string
type SynonymHits = SynonymHit[]
type SearchSynonymsResponse = { hits: SynonymHits; nbHits: NbHits }
type KeyString = string
type CreatedAtTimestamp = bigint
type Acl =
  | 'addObject'
  | 'analytics'
  | 'browse'
  | 'deleteObject'
  | 'deleteIndex'
  | 'editSettings'
  | 'inference'
  | 'listIndexes'
  | 'logs'
  | 'personalization'
  | 'recommendation'
  | 'search'
  | 'seeUnretrievableAttributes'
  | 'settings'
  | 'usage'
  | 'nluWriteProject'
  | 'nluReadProject'
  | 'nluWriteEntity'
  | 'nluReadEntity'
  | 'nluWriteIntent'
  | 'nluReadIntent'
  | 'nluPrediction'
  | 'nluReadAnswers'
type GetApiKeyResponse = {
  value: KeyString
  createdAt: CreatedAtTimestamp
  acl: Acl[]
  description?: string | undefined
  indexes?: string[] | undefined
  maxHitsPerQuery?: number | undefined
  maxQueriesPerIPPerHour?: number | undefined
  queryParameters?: string | undefined
  referers?: string[] | undefined
  validity?: number | undefined
}
type ApiKey = {
  acl: Acl[]
  description?: string | undefined
  indexes?: string[] | undefined
  maxHitsPerQuery?: number | undefined
  maxQueriesPerIPPerHour?: number | undefined
  queryParameters?: string | undefined
  referers?: string[] | undefined
  validity?: number | undefined
}
type AddApiKeyResponse = { key: KeyString; createdAt: CreatedAt }
type RuleID = string
type Anchoring = 'is' | 'startsWith' | 'endsWith' | 'contains'
type Context = string
type Condition = {
  pattern?: string | undefined
  anchoring?: Anchoring | undefined
  alternatives?: boolean | undefined
  context?: Context | undefined
  filters?: string | undefined
}
type EditType = 'remove' | 'replace'
type Edit = {
  type?: EditType | undefined
  delete?: string | undefined
  insert?: string | undefined
}
type ConsequenceQueryObject = { remove?: string[] | undefined; edits?: Edit[] | undefined }
type ConsequenceQuery = ConsequenceQueryObject | string
type AutomaticFacetFilter = {
  facet: string
  score?: number | undefined
  disjunctive?: boolean | undefined
}
type AutomaticFacetFilters = AutomaticFacetFilter[] | string[]
type ConsequenceParams = {
  similarQuery?: SimilarQuery | undefined
  filters?: Filters | undefined
  facetFilters?: FacetFilters | undefined
  optionalFilters?: OptionalFilters | undefined
  numericFilters?: NumericFilters | undefined
  tagFilters?: TagFilters | undefined
  sumOrFiltersScores?: SumOrFiltersScores | undefined
  restrictSearchableAttributes?: RestrictSearchableAttributes | undefined
  facets?: string[] | undefined
  facetingAfterDistinct?: FacetingAfterDistinct | undefined
  page?: Page | undefined
  offset?: number | undefined
  length?: Length | undefined
  aroundLatLng?: AroundLatLng | undefined
  aroundLatLngViaIP?: AroundLatLngViaIP | undefined
  aroundRadius?: AroundRadius | undefined
  aroundPrecision?: AroundPrecision | undefined
  minimumAroundRadius?: MinimumAroundRadius | undefined
  insideBoundingBox?: InsideBoundingBox | undefined
  insidePolygon?: InsidePolygon | undefined
  naturalLanguages?: NaturalLanguages | undefined
  ruleContexts?: RuleContexts | undefined
  personalizationImpact?: PersonalizationImpact | undefined
  userToken?: UserToken | undefined
  getRankingInfo?: GetRankingInfo | undefined
  synonyms?: Synonyms | undefined
  clickAnalytics?: ClickAnalytics | undefined
  analytics?: Analytics | undefined
  analyticsTags?: AnalyticsTags | undefined
  percentileComputation?: PercentileComputation | undefined
  enableABTest?: EnableABTest | undefined
  attributesToRetrieve?: AttributesToRetrieve | undefined
  ranking?: string[] | undefined
  relevancyStrictness?: RelevancyStrictness | undefined
  attributesToHighlight?: AttributesToHighlight | undefined
  attributesToSnippet?: AttributesToSnippet | undefined
  highlightPreTag?: HighlightPreTag | undefined
  highlightPostTag?: HighlightPostTag | undefined
  snippetEllipsisText?: SnippetEllipsisText | undefined
  restrictHighlightAndSnippetArrays?: RestrictHighlightAndSnippetArrays | undefined
  hitsPerPage?: HitsPerPage | undefined
  minWordSizefor1Typo?: MinWordSizefor1Typo | undefined
  minWordSizefor2Typos?: MinWordSizefor2Typos | undefined
  typoTolerance?: TypoTolerance | undefined
  allowTyposOnNumericTokens?: AllowTyposOnNumericTokens | undefined
  disableTypoToleranceOnAttributes?: DisableTypoToleranceOnAttributes | undefined
  ignorePlurals?: IgnorePlurals | undefined
  removeStopWords?: RemoveStopWords | undefined
  queryLanguages?: QueryLanguages | undefined
  decompoundQuery?: DecompoundQuery | undefined
  enableRules?: EnableRules | undefined
  enablePersonalization?: EnablePersonalization | undefined
  queryType?: QueryType | undefined
  removeWordsIfNoResults?: RemoveWordsIfNoResults | undefined
  mode?: Mode | undefined
  semanticSearch?: SemanticSearch | undefined
  advancedSyntax?: AdvancedSyntax | undefined
  optionalWords?: OptionalWords | undefined
  disableExactOnAttributes?: DisableExactOnAttributes | undefined
  exactOnSingleWordQuery?: ExactOnSingleWordQuery | undefined
  alternativesAsExact?: IndexSettingsAlternativesAsExact | undefined
  advancedSyntaxFeatures?: IndexSettingsAdvancedSyntaxFeatures | undefined
  distinct?: Distinct | undefined
  replaceSynonymsInHighlight?: ReplaceSynonymsInHighlight | undefined
  minProximity?: MinProximity | undefined
  responseFields?: ResponseFields | undefined
  maxValuesPerFacet?: MaxValuesPerFacet | undefined
  sortFacetValuesBy?: SortFacetValuesBy | undefined
  attributeCriteriaComputedByMinProximity?: AttributeCriteriaComputedByMinProximity | undefined
  attributeCriteriaComputedBy?: AttributeCriteriaComputedBy | undefined
  renderingContent?: RenderingContent | undefined
  enableReRanking?: EnableReRanking | undefined
  reRankingApplyFilter?: ReRankingApplyFilter | ({ [x: string]: unknown } | null) | undefined
  query?: ConsequenceQuery | undefined
  automaticFacetFilters?: AutomaticFacetFilters | undefined
  automaticOptionalFacetFilters?: AutomaticFacetFilters | undefined
  allowReRankingOnPersonalization?: AllowReRankingOnPersonalization | undefined
}
type PromotePosition = number
type PromoteObjectIDs = { objectIDs: ObjectID[]; position: PromotePosition }
type PromoteObjectID = { objectID: ObjectID; position: PromotePosition }
type Promote = PromoteObjectIDs | PromoteObjectID
type Consequence = {
  params?: ConsequenceParams | undefined
  promote?: Promote[] | undefined
  filterPromotes?: boolean | undefined
  hide?: { objectID: ObjectID }[] | undefined
  redirect?: { indexName: string } | undefined
  userData?: { [x: string]: unknown } | undefined
}
type TimeRange = { from?: bigint | undefined; until?: bigint | undefined }
type Rule = {
  objectID: RuleID
  conditions?: Condition[] | undefined
  consequence: Consequence
  description?: string | undefined
  enabled?: boolean | undefined
  validity?: TimeRange[] | undefined
  tags?: string[] | undefined
  scope?: string | undefined
  condition?: Condition | undefined
}
type ParametersQuery = string
type ParametersPage = number
type ParametersHitsPerPage = number
type DictionaryType = 'plurals' | 'stopwords' | 'compounds'
type DictionaryAction = 'addEntry' | 'deleteEntry'
type DictionaryEntryState = 'enabled' | 'disabled'
type DictionaryEntryType = 'custom' | 'standard'
type DictionaryEntry = {
  objectID: string
  language?: SupportedLanguage | undefined
  word?: string | undefined
  words?: string[] | undefined
  decomposition?: string[] | undefined
  state?: DictionaryEntryState | undefined
  type?: DictionaryEntryType | undefined
}
type SearchDictionaryEntriesResponse = {
  hits: DictionaryEntry[]
  page: ParametersPage
  nbHits: NbHits
  nbPages: NbPages
}
type StandardEntry = { [x: string]: boolean } | ({ [x: string]: unknown } | null)
type StandardEntries = {
  plurals?: StandardEntry | undefined
  stopwords?: StandardEntry | undefined
  compounds?: StandardEntry | undefined
}
type DictionaryLanguage =
  | { nbCustomEntries?: number | undefined }
  | ({ [x: string]: unknown } | null)
type Languages = {
  plurals: DictionaryLanguage
  stopwords: DictionaryLanguage
  compounds: DictionaryLanguage
}
type UserID = string
type ClusterName = string
type UserId = { userID: UserID; clusterName: string; nbRecords: number; dataSize: number }
type NbRecords = number
type DataSize = number
type Source = { source: string; description?: string | undefined }
type Sources = Source[]
type LogType = 'all' | 'query' | 'build' | 'error'
type TaskStatus = 'published' | 'notPublished'
type GetTaskResponse = { status: TaskStatus }
type OperationType = 'move' | 'copy'
type ScopeType = 'settings' | 'synonyms' | 'rules'
type FetchedIndexAbTestTarget = { indexName: string }
type FetchedIndexAbTestVariant = {
  indexName?: string | undefined
  percentage: number
  customSearchParameters?: string | undefined
  payload?: { [x: string]: unknown } | undefined
}
type FetchedIndexAbTest = {
  id: number
  version?: number | undefined
  type?: string | undefined
  target?: FetchedIndexAbTestTarget | undefined
  variants: FetchedIndexAbTestVariant[]
}
type FetchedIndex = {
  name: string
  createdAt: string
  updatedAt: UpdatedAt
  entries: number
  dataSize: bigint
  fileSize: bigint
  lastBuildTimeS: number
  numberOfPendingTasks: number
  pendingTask: boolean
  primary?: string | undefined
  replicas?: string[] | undefined
  virtual?: boolean | undefined
  abTest?: FetchedIndexAbTest | undefined
  sourceABTest?: string | undefined
}
type ListIndicesResponse = { items: FetchedIndex[]; nbPages?: number | undefined }
type ApiKeyOperation = 'add' | 'delete' | 'update'
type SecuredApiKeyRestrictions = {
  searchParams?: SearchParamsObject | undefined
  filters?: string | undefined
  validUntil?: bigint | undefined
  restrictIndices?: string[] | undefined
  restrictSources?: string | undefined
  userToken?: string | undefined
}
type ReplaceAllObjectsResponse = {
  copyOperationResponse: UpdatedAtResponse
  batchResponses: BatchResponse[]
  moveOperationResponse: UpdatedAtResponse
}
type RunID = string
type EventID = string
type EventStatus =
  | 'created'
  | 'started'
  | 'retried'
  | 'failed'
  | 'succeeded'
  | 'critical'
  | ({ [x: string]: unknown } | null)
type EventType = 'fetch' | 'record' | 'log' | 'transform'
type PublishedAt = string
type Event = {
  eventID: EventID
  runID: RunID
  status: EventStatus
  type: EventType
  batchSize: number
  data?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  publishedAt: PublishedAt
}
type CreatedAt2 = string
type WatchResponse = {
  runID: RunID
  eventID?: EventID | undefined
  data?: { [x: string]: unknown }[] | undefined
  events?: Event[] | undefined
  message?: string | undefined
  createdAt?: CreatedAt2 | undefined
}
type ReplaceAllObjectsWithTransformationResponse = {
  copyOperationResponse: UpdatedAtResponse
  watchResponses: WatchResponse[]
  moveOperationResponse: UpdatedAtResponse
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:path': {
      $get:
        | {
            input: { param: { path: string } } & {
              query: { parameters?: { [x: string]: unknown } | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { path: string } } & {
              query: { parameters?: { [x: string]: unknown } | undefined }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { path: string } } & {
              query: { parameters?: { [x: string]: unknown } | undefined }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { path: string } } & {
              query: { parameters?: { [x: string]: unknown } | undefined }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { path: string } } & {
              query: { parameters?: { [x: string]: unknown } | undefined }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { path: string } } & {
              query: { parameters?: { [x: string]: unknown } | undefined }
            } & { json: { [x: string]: unknown } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { path: string } } & {
              query: { parameters?: { [x: string]: unknown } | undefined }
            } & { json: { [x: string]: unknown } }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { path: string } } & {
              query: { parameters?: { [x: string]: unknown } | undefined }
            } & { json: { [x: string]: unknown } }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { path: string } } & {
              query: { parameters?: { [x: string]: unknown } | undefined }
            } & { json: { [x: string]: unknown } }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { path: string } } & {
              query: { parameters?: { [x: string]: unknown } | undefined }
            } & { json: { [x: string]: unknown } }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { path: string } } & {
              query: { parameters?: { [x: string]: unknown } | undefined }
            } & { json: { [x: string]: unknown } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { path: string } } & {
              query: { parameters?: { [x: string]: unknown } | undefined }
            } & { json: { [x: string]: unknown } }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { path: string } } & {
              query: { parameters?: { [x: string]: unknown } | undefined }
            } & { json: { [x: string]: unknown } }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { path: string } } & {
              query: { parameters?: { [x: string]: unknown } | undefined }
            } & { json: { [x: string]: unknown } }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { path: string } } & {
              query: { parameters?: { [x: string]: unknown } | undefined }
            } & { json: { [x: string]: unknown } }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { path: string } } & {
              query: { parameters?: { [x: string]: unknown } | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { path: string } } & {
              query: { parameters?: { [x: string]: unknown } | undefined }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { path: string } } & {
              query: { parameters?: { [x: string]: unknown } | undefined }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { path: string } } & {
              query: { parameters?: { [x: string]: unknown } | undefined }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { path: string } } & {
              query: { parameters?: { [x: string]: unknown } | undefined }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/indexes/:indexName/query': {
      $post:
        | {
            input: { param: { indexName: string } } & { json: SearchParams }
            output: SearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexName: string } } & { json: SearchParams }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { indexName: string } } & { json: SearchParams }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { indexName: string } } & { json: SearchParams }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { indexName: string } } & { json: SearchParams }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/indexes/*/queries': {
      $post:
        | {
            input: { json: { requests: SearchQuery[]; strategy?: SearchStrategy | undefined } }
            output: { results: SearchResult[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { requests: SearchQuery[]; strategy?: SearchStrategy | undefined } }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { requests: SearchQuery[]; strategy?: SearchStrategy | undefined } }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: { requests: SearchQuery[]; strategy?: SearchStrategy | undefined } }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { requests: SearchQuery[]; strategy?: SearchStrategy | undefined } }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/indexes/:indexName/facets/:facetName/query': {
      $post:
        | {
            input: { param: { indexName: string; facetName: string } } & {
              json: {
                params?: ParamsAsString | undefined
                facetQuery?: FacetQuery | undefined
                maxFacetHits?: MaxFacetHits | undefined
              }
            }
            output: SearchForFacetValuesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexName: string; facetName: string } } & {
              json: {
                params?: ParamsAsString | undefined
                facetQuery?: FacetQuery | undefined
                maxFacetHits?: MaxFacetHits | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { indexName: string; facetName: string } } & {
              json: {
                params?: ParamsAsString | undefined
                facetQuery?: FacetQuery | undefined
                maxFacetHits?: MaxFacetHits | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { indexName: string; facetName: string } } & {
              json: {
                params?: ParamsAsString | undefined
                facetQuery?: FacetQuery | undefined
                maxFacetHits?: MaxFacetHits | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { indexName: string; facetName: string } } & {
              json: {
                params?: ParamsAsString | undefined
                facetQuery?: FacetQuery | undefined
                maxFacetHits?: MaxFacetHits | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/indexes/:indexName/browse': {
      $post:
        | {
            input: { param: { indexName: string } } & { json: BrowseParams }
            output: BrowseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexName: string } } & { json: BrowseParams }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { indexName: string } } & { json: BrowseParams }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { indexName: string } } & { json: BrowseParams }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { indexName: string } } & { json: BrowseParams }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/indexes/:indexName': {
      $post:
        | {
            input: { param: { indexName: string } } & { json: { [x: string]: unknown } }
            output: { createdAt: CreatedAt; taskID: TaskID; objectID?: ObjectID | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { indexName: string } } & { json: { [x: string]: unknown } }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { indexName: string } } & { json: { [x: string]: unknown } }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { indexName: string } } & { json: { [x: string]: unknown } }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { indexName: string } } & { json: { [x: string]: unknown } }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { indexName: string } }
            output: { taskID: TaskID; deletedAt: DeletedAt }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexName: string } }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { indexName: string } }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { indexName: string } }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { indexName: string } }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/indexes/:indexName/:objectID': {
      $get:
        | {
            input: { param: { indexName: string; objectID: ObjectID } } & {
              query: { attributesToRetrieve?: string[] | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexName: string; objectID: ObjectID } } & {
              query: { attributesToRetrieve?: string[] | undefined }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { indexName: string; objectID: ObjectID } } & {
              query: { attributesToRetrieve?: string[] | undefined }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { indexName: string; objectID: ObjectID } } & {
              query: { attributesToRetrieve?: string[] | undefined }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { indexName: string; objectID: ObjectID } } & {
              query: { attributesToRetrieve?: string[] | undefined }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { indexName: string; objectID: ObjectID } } & {
              json: { [x: string]: unknown }
            }
            output: {
              taskID?: TaskID | undefined
              updatedAt?: UpdatedAt | undefined
              objectID?: ObjectID | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexName: string; objectID: ObjectID } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { indexName: string; objectID: ObjectID } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { indexName: string; objectID: ObjectID } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { indexName: string; objectID: ObjectID } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { indexName: string; objectID: ObjectID } }
            output: { taskID: TaskID; deletedAt: DeletedAt }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexName: string; objectID: ObjectID } }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { indexName: string; objectID: ObjectID } }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { indexName: string; objectID: ObjectID } }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { indexName: string; objectID: ObjectID } }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/indexes/:indexName/deleteByQuery': {
      $post:
        | {
            input: { param: { indexName: string } } & { json: DeleteByParams }
            output: UpdatedAtResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexName: string } } & { json: DeleteByParams }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { indexName: string } } & { json: DeleteByParams }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { indexName: string } } & { json: DeleteByParams }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { indexName: string } } & { json: DeleteByParams }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/indexes/:indexName/clear': {
      $post:
        | {
            input: { param: { indexName: string } }
            output: UpdatedAtResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexName: string } }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { indexName: string } }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { indexName: string } }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { indexName: string } }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/indexes/:indexName/:objectID/partial': {
      $post:
        | {
            input: { param: { indexName: string; objectID: ObjectID } } & {
              query: { createIfNotExists?: boolean | undefined }
            } & { json: { [x: string]: unknown } }
            output: {
              taskID?: TaskID | undefined
              updatedAt?: UpdatedAt | undefined
              objectID?: ObjectID | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexName: string; objectID: ObjectID } } & {
              query: { createIfNotExists?: boolean | undefined }
            } & { json: { [x: string]: unknown } }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { indexName: string; objectID: ObjectID } } & {
              query: { createIfNotExists?: boolean | undefined }
            } & { json: { [x: string]: unknown } }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { indexName: string; objectID: ObjectID } } & {
              query: { createIfNotExists?: boolean | undefined }
            } & { json: { [x: string]: unknown } }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { indexName: string; objectID: ObjectID } } & {
              query: { createIfNotExists?: boolean | undefined }
            } & { json: { [x: string]: unknown } }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/indexes/:indexName/batch': {
      $post:
        | {
            input: { param: { indexName: string } } & { json: BatchWriteParams }
            output: BatchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexName: string } } & { json: BatchWriteParams }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { indexName: string } } & { json: BatchWriteParams }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { indexName: string } } & { json: BatchWriteParams }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { indexName: string } } & { json: BatchWriteParams }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/indexes/*/batch': {
      $post:
        | {
            input: {
              json: {
                requests: {
                  action: Action
                  body?: { [x: string]: unknown } | undefined
                  indexName: IndexName
                }[]
              }
            }
            output: { taskID: { [x: string]: TaskID }; objectIDs: ObjectIDs }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                requests: {
                  action: Action
                  body?: { [x: string]: unknown } | undefined
                  indexName: IndexName
                }[]
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                requests: {
                  action: Action
                  body?: { [x: string]: unknown } | undefined
                  indexName: IndexName
                }[]
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              json: {
                requests: {
                  action: Action
                  body?: { [x: string]: unknown } | undefined
                  indexName: IndexName
                }[]
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                requests: {
                  action: Action
                  body?: { [x: string]: unknown } | undefined
                  indexName: IndexName
                }[]
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/indexes/*/objects': {
      $post:
        | {
            input: {
              json: {
                requests: {
                  attributesToRetrieve?: string[] | undefined
                  objectID: string
                  indexName: string
                }[]
              }
            }
            output: { message?: string | undefined; results: ({ [x: string]: unknown } | null)[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                requests: {
                  attributesToRetrieve?: string[] | undefined
                  objectID: string
                  indexName: string
                }[]
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                requests: {
                  attributesToRetrieve?: string[] | undefined
                  objectID: string
                  indexName: string
                }[]
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              json: {
                requests: {
                  attributesToRetrieve?: string[] | undefined
                  objectID: string
                  indexName: string
                }[]
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                requests: {
                  attributesToRetrieve?: string[] | undefined
                  objectID: string
                  indexName: string
                }[]
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/indexes/:indexName/settings': {
      $get:
        | {
            input: { param: { indexName: string } } & { query: { getVersion?: number | undefined } }
            output: SettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexName: string } } & { query: { getVersion?: number | undefined } }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { indexName: string } } & { query: { getVersion?: number | undefined } }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { indexName: string } } & { query: { getVersion?: number | undefined } }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { indexName: string } } & { query: { getVersion?: number | undefined } }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { indexName: string } } & {
              query: { forwardToReplicas?: boolean | undefined }
            } & { json: IndexSettings }
            output: UpdatedAtResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexName: string } } & {
              query: { forwardToReplicas?: boolean | undefined }
            } & { json: IndexSettings }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { indexName: string } } & {
              query: { forwardToReplicas?: boolean | undefined }
            } & { json: IndexSettings }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { indexName: string } } & {
              query: { forwardToReplicas?: boolean | undefined }
            } & { json: IndexSettings }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { indexName: string } } & {
              query: { forwardToReplicas?: boolean | undefined }
            } & { json: IndexSettings }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/indexes/:indexName/synonyms/:objectID': {
      $get:
        | {
            input: { param: { indexName: string; objectID: string } }
            output: SynonymHit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexName: string; objectID: string } }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { indexName: string; objectID: string } }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { indexName: string; objectID: string } }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { indexName: string; objectID: string } }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { indexName: string; objectID: string } } & {
              query: { forwardToReplicas?: boolean | undefined }
            } & { json: SynonymHit }
            output: { taskID: TaskID; updatedAt: UpdatedAt; id: Id }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexName: string; objectID: string } } & {
              query: { forwardToReplicas?: boolean | undefined }
            } & { json: SynonymHit }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { indexName: string; objectID: string } } & {
              query: { forwardToReplicas?: boolean | undefined }
            } & { json: SynonymHit }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { indexName: string; objectID: string } } & {
              query: { forwardToReplicas?: boolean | undefined }
            } & { json: SynonymHit }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { indexName: string; objectID: string } } & {
              query: { forwardToReplicas?: boolean | undefined }
            } & { json: SynonymHit }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { indexName: string; objectID: string } } & {
              query: { forwardToReplicas?: boolean | undefined }
            }
            output: { taskID: TaskID; deletedAt: DeletedAt }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexName: string; objectID: string } } & {
              query: { forwardToReplicas?: boolean | undefined }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { indexName: string; objectID: string } } & {
              query: { forwardToReplicas?: boolean | undefined }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { indexName: string; objectID: string } } & {
              query: { forwardToReplicas?: boolean | undefined }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { indexName: string; objectID: string } } & {
              query: { forwardToReplicas?: boolean | undefined }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/indexes/:indexName/synonyms/batch': {
      $post:
        | {
            input: { param: { indexName: string } } & {
              query: {
                forwardToReplicas?: boolean | undefined
                replaceExistingSynonyms?: boolean | undefined
              }
            } & { json: SynonymHits }
            output: UpdatedAtResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexName: string } } & {
              query: {
                forwardToReplicas?: boolean | undefined
                replaceExistingSynonyms?: boolean | undefined
              }
            } & { json: SynonymHits }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { indexName: string } } & {
              query: {
                forwardToReplicas?: boolean | undefined
                replaceExistingSynonyms?: boolean | undefined
              }
            } & { json: SynonymHits }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { indexName: string } } & {
              query: {
                forwardToReplicas?: boolean | undefined
                replaceExistingSynonyms?: boolean | undefined
              }
            } & { json: SynonymHits }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { indexName: string } } & {
              query: {
                forwardToReplicas?: boolean | undefined
                replaceExistingSynonyms?: boolean | undefined
              }
            } & { json: SynonymHits }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/indexes/:indexName/synonyms/clear': {
      $post:
        | {
            input: { param: { indexName: string } } & {
              query: { forwardToReplicas?: boolean | undefined }
            }
            output: UpdatedAtResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexName: string } } & {
              query: { forwardToReplicas?: boolean | undefined }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { indexName: string } } & {
              query: { forwardToReplicas?: boolean | undefined }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { indexName: string } } & {
              query: { forwardToReplicas?: boolean | undefined }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { indexName: string } } & {
              query: { forwardToReplicas?: boolean | undefined }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/indexes/:indexName/synonyms/search': {
      $post:
        | {
            input: { param: { indexName: string } } & {
              json: {
                query?: Query | undefined
                type?: SynonymType | undefined
                page?: Page | undefined
                hitsPerPage?: HitsPerPage | undefined
              }
            }
            output: SearchSynonymsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexName: string } } & {
              json: {
                query?: Query | undefined
                type?: SynonymType | undefined
                page?: Page | undefined
                hitsPerPage?: HitsPerPage | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { indexName: string } } & {
              json: {
                query?: Query | undefined
                type?: SynonymType | undefined
                page?: Page | undefined
                hitsPerPage?: HitsPerPage | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { indexName: string } } & {
              json: {
                query?: Query | undefined
                type?: SynonymType | undefined
                page?: Page | undefined
                hitsPerPage?: HitsPerPage | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { indexName: string } } & {
              json: {
                query?: Query | undefined
                type?: SynonymType | undefined
                page?: Page | undefined
                hitsPerPage?: HitsPerPage | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/keys': {
      $get:
        | { input: {}; output: { keys: GetApiKeyResponse[] }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorBase; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorBase; outputFormat: 'json'; status: 402 }
        | { input: {}; output: ErrorBase; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorBase; outputFormat: 'json'; status: 404 }
      $post:
        | { input: { json: ApiKey }; output: AddApiKeyResponse; outputFormat: 'json'; status: 200 }
        | { input: { json: ApiKey }; output: ErrorBase; outputFormat: 'json'; status: 400 }
        | { input: { json: ApiKey }; output: ErrorBase; outputFormat: 'json'; status: 402 }
        | { input: { json: ApiKey }; output: ErrorBase; outputFormat: 'json'; status: 403 }
        | { input: { json: ApiKey }; output: ErrorBase; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/1/keys/:key': {
      $get:
        | {
            input: { param: { key: string } }
            output: GetApiKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string } }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: string } }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { key: string } }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { key: string } }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { key: string } } & { json: ApiKey }
            output: { key: KeyString; updatedAt: UpdatedAt }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string } } & { json: ApiKey }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: string } } & { json: ApiKey }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { key: string } } & { json: ApiKey }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { key: string } } & { json: ApiKey }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { key: string } }
            output: { deletedAt: DeletedAt }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string } }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: string } }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { key: string } }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { key: string } }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/keys/:key/restore': {
      $post:
        | {
            input: { param: { key: string } }
            output: AddApiKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string } }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: string } }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { key: string } }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { key: string } }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/indexes/:indexName/rules/:objectID': {
      $get:
        | {
            input: { param: { indexName: string; objectID: RuleID } }
            output: Rule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexName: string; objectID: RuleID } }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { indexName: string; objectID: RuleID } }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { indexName: string; objectID: RuleID } }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { indexName: string; objectID: RuleID } }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { indexName: string; objectID: RuleID } } & {
              query: { forwardToReplicas?: boolean | undefined }
            } & { json: Rule }
            output: UpdatedAtResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexName: string; objectID: RuleID } } & {
              query: { forwardToReplicas?: boolean | undefined }
            } & { json: Rule }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { indexName: string; objectID: RuleID } } & {
              query: { forwardToReplicas?: boolean | undefined }
            } & { json: Rule }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { indexName: string; objectID: RuleID } } & {
              query: { forwardToReplicas?: boolean | undefined }
            } & { json: Rule }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { indexName: string; objectID: RuleID } } & {
              query: { forwardToReplicas?: boolean | undefined }
            } & { json: Rule }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { indexName: string; objectID: RuleID } } & {
              query: { forwardToReplicas?: boolean | undefined }
            }
            output: UpdatedAtResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexName: string; objectID: RuleID } } & {
              query: { forwardToReplicas?: boolean | undefined }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { indexName: string; objectID: RuleID } } & {
              query: { forwardToReplicas?: boolean | undefined }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { indexName: string; objectID: RuleID } } & {
              query: { forwardToReplicas?: boolean | undefined }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { indexName: string; objectID: RuleID } } & {
              query: { forwardToReplicas?: boolean | undefined }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/indexes/:indexName/rules/batch': {
      $post:
        | {
            input: { param: { indexName: string } } & {
              query: {
                forwardToReplicas?: boolean | undefined
                clearExistingRules?: boolean | undefined
              }
            } & { json: Rule[] }
            output: UpdatedAtResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexName: string } } & {
              query: {
                forwardToReplicas?: boolean | undefined
                clearExistingRules?: boolean | undefined
              }
            } & { json: Rule[] }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { indexName: string } } & {
              query: {
                forwardToReplicas?: boolean | undefined
                clearExistingRules?: boolean | undefined
              }
            } & { json: Rule[] }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { indexName: string } } & {
              query: {
                forwardToReplicas?: boolean | undefined
                clearExistingRules?: boolean | undefined
              }
            } & { json: Rule[] }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { indexName: string } } & {
              query: {
                forwardToReplicas?: boolean | undefined
                clearExistingRules?: boolean | undefined
              }
            } & { json: Rule[] }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/indexes/:indexName/rules/clear': {
      $post:
        | {
            input: { param: { indexName: string } } & {
              query: { forwardToReplicas?: boolean | undefined }
            }
            output: UpdatedAtResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexName: string } } & {
              query: { forwardToReplicas?: boolean | undefined }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { indexName: string } } & {
              query: { forwardToReplicas?: boolean | undefined }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { indexName: string } } & {
              query: { forwardToReplicas?: boolean | undefined }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { indexName: string } } & {
              query: { forwardToReplicas?: boolean | undefined }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/indexes/:indexName/rules/search': {
      $post:
        | {
            input: { param: { indexName: string } } & {
              json: {
                query?: ParametersQuery | undefined
                anchoring?: Anchoring | undefined
                context?: string | undefined
                page?: ParametersPage | undefined
                hitsPerPage?: ParametersHitsPerPage | undefined
                enabled?: boolean | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: { hits: Rule[]; nbHits: number; page: number; nbPages: number }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexName: string } } & {
              json: {
                query?: ParametersQuery | undefined
                anchoring?: Anchoring | undefined
                context?: string | undefined
                page?: ParametersPage | undefined
                hitsPerPage?: ParametersHitsPerPage | undefined
                enabled?: boolean | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { indexName: string } } & {
              json: {
                query?: ParametersQuery | undefined
                anchoring?: Anchoring | undefined
                context?: string | undefined
                page?: ParametersPage | undefined
                hitsPerPage?: ParametersHitsPerPage | undefined
                enabled?: boolean | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { indexName: string } } & {
              json: {
                query?: ParametersQuery | undefined
                anchoring?: Anchoring | undefined
                context?: string | undefined
                page?: ParametersPage | undefined
                hitsPerPage?: ParametersHitsPerPage | undefined
                enabled?: boolean | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { indexName: string } } & {
              json: {
                query?: ParametersQuery | undefined
                anchoring?: Anchoring | undefined
                context?: string | undefined
                page?: ParametersPage | undefined
                hitsPerPage?: ParametersHitsPerPage | undefined
                enabled?: boolean | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/dictionaries/:dictionaryName/batch': {
      $post:
        | {
            input: { param: { dictionaryName: DictionaryType } } & {
              json: {
                clearExistingDictionaryEntries?: boolean | undefined
                requests: { action: DictionaryAction; body: DictionaryEntry }[]
              }
            }
            output: UpdatedAtResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dictionaryName: DictionaryType } } & {
              json: {
                clearExistingDictionaryEntries?: boolean | undefined
                requests: { action: DictionaryAction; body: DictionaryEntry }[]
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dictionaryName: DictionaryType } } & {
              json: {
                clearExistingDictionaryEntries?: boolean | undefined
                requests: { action: DictionaryAction; body: DictionaryEntry }[]
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { dictionaryName: DictionaryType } } & {
              json: {
                clearExistingDictionaryEntries?: boolean | undefined
                requests: { action: DictionaryAction; body: DictionaryEntry }[]
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dictionaryName: DictionaryType } } & {
              json: {
                clearExistingDictionaryEntries?: boolean | undefined
                requests: { action: DictionaryAction; body: DictionaryEntry }[]
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/dictionaries/:dictionaryName/search': {
      $post:
        | {
            input: { param: { dictionaryName: DictionaryType } } & {
              json: {
                query: Query
                page?: Page | undefined
                hitsPerPage?: HitsPerPage | undefined
                language?: SupportedLanguage | undefined
              }
            }
            output: SearchDictionaryEntriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dictionaryName: DictionaryType } } & {
              json: {
                query: Query
                page?: Page | undefined
                hitsPerPage?: HitsPerPage | undefined
                language?: SupportedLanguage | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dictionaryName: DictionaryType } } & {
              json: {
                query: Query
                page?: Page | undefined
                hitsPerPage?: HitsPerPage | undefined
                language?: SupportedLanguage | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { dictionaryName: DictionaryType } } & {
              json: {
                query: Query
                page?: Page | undefined
                hitsPerPage?: HitsPerPage | undefined
                language?: SupportedLanguage | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dictionaryName: DictionaryType } } & {
              json: {
                query: Query
                page?: Page | undefined
                hitsPerPage?: HitsPerPage | undefined
                language?: SupportedLanguage | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/dictionaries/*/settings': {
      $get:
        | {
            input: {}
            output: { disableStandardEntries: StandardEntries }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorBase; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorBase; outputFormat: 'json'; status: 402 }
        | { input: {}; output: ErrorBase; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorBase; outputFormat: 'json'; status: 404 }
      $put:
        | {
            input: { json: { disableStandardEntries: StandardEntries } }
            output: UpdatedAtResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { disableStandardEntries: StandardEntries } }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { disableStandardEntries: StandardEntries } }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: { disableStandardEntries: StandardEntries } }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { disableStandardEntries: StandardEntries } }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/dictionaries/*/languages': {
      $get:
        | { input: {}; output: { [x: string]: Languages }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorBase; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorBase; outputFormat: 'json'; status: 402 }
        | { input: {}; output: ErrorBase; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorBase; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/1/clusters/mapping': {
      $post:
        | {
            input: { header: { 'X-Algolia-User-ID': UserID } } & { json: { cluster: ClusterName } }
            output: { createdAt: CreatedAt }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Algolia-User-ID': UserID } } & { json: { cluster: ClusterName } }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Algolia-User-ID': UserID } } & { json: { cluster: ClusterName } }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { header: { 'X-Algolia-User-ID': UserID } } & { json: { cluster: ClusterName } }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Algolia-User-ID': UserID } } & { json: { cluster: ClusterName } }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: {
              query: {
                page?: number | ({ [x: string]: unknown } | null) | undefined
                hitsPerPage?: number | undefined
              }
            }
            output: { userIDs: UserId[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | ({ [x: string]: unknown } | null) | undefined
                hitsPerPage?: number | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page?: number | ({ [x: string]: unknown } | null) | undefined
                hitsPerPage?: number | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                page?: number | ({ [x: string]: unknown } | null) | undefined
                hitsPerPage?: number | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | ({ [x: string]: unknown } | null) | undefined
                hitsPerPage?: number | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/clusters/mapping/batch': {
      $post:
        | {
            input: { header: { 'X-Algolia-User-ID': UserID } } & {
              json: { cluster: ClusterName; users: string[] }
            }
            output: { createdAt: CreatedAt }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Algolia-User-ID': UserID } } & {
              json: { cluster: ClusterName; users: string[] }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Algolia-User-ID': UserID } } & {
              json: { cluster: ClusterName; users: string[] }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { header: { 'X-Algolia-User-ID': UserID } } & {
              json: { cluster: ClusterName; users: string[] }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Algolia-User-ID': UserID } } & {
              json: { cluster: ClusterName; users: string[] }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/clusters/mapping/top': {
      $get:
        | {
            input: {}
            output: { topUsers: { [x: string]: UserId[] }[] }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorBase; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorBase; outputFormat: 'json'; status: 402 }
        | { input: {}; output: ErrorBase; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorBase; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/1/clusters/mapping/:userID': {
      $get:
        | {
            input: { param: { userID: UserID } }
            output: UserId
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: UserID } }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userID: UserID } }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { userID: UserID } }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userID: UserID } }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { userID: UserID } }
            output: { deletedAt: DeletedAt }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: UserID } }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userID: UserID } }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { userID: UserID } }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userID: UserID } }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/clusters': {
      $get:
        | { input: {}; output: { topUsers: ClusterName[] }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorBase; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorBase; outputFormat: 'json'; status: 402 }
        | { input: {}; output: ErrorBase; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorBase; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/1/clusters/mapping/search': {
      $post:
        | {
            input: {
              json: {
                query: string
                clusterName?: ClusterName | undefined
                page?: Page | undefined
                hitsPerPage?: HitsPerPage | undefined
              }
            }
            output: {
              hits: {
                userID: UserID
                clusterName: ClusterName
                nbRecords: NbRecords
                dataSize: DataSize
                objectID: string
                _highlightResult: { userID: HighlightResult; clusterName: HighlightResult }
              }[]
              nbHits: NbHits
              page: Page
              hitsPerPage: ParametersHitsPerPage
              updatedAt: UpdatedAt
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                query: string
                clusterName?: ClusterName | undefined
                page?: Page | undefined
                hitsPerPage?: HitsPerPage | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                query: string
                clusterName?: ClusterName | undefined
                page?: Page | undefined
                hitsPerPage?: HitsPerPage | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              json: {
                query: string
                clusterName?: ClusterName | undefined
                page?: Page | undefined
                hitsPerPage?: HitsPerPage | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                query: string
                clusterName?: ClusterName | undefined
                page?: Page | undefined
                hitsPerPage?: HitsPerPage | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/clusters/mapping/pending': {
      $get:
        | {
            input: { query: { getClusters?: boolean | undefined } }
            output: { pending: boolean; clusters?: { [x: string]: string[] } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { getClusters?: boolean | undefined } }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { getClusters?: boolean | undefined } }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { query: { getClusters?: boolean | undefined } }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { getClusters?: boolean | undefined } }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/security/sources': {
      $get:
        | { input: {}; output: Sources; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorBase; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorBase; outputFormat: 'json'; status: 402 }
        | { input: {}; output: ErrorBase; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorBase; outputFormat: 'json'; status: 404 }
      $put:
        | {
            input: { json: Sources }
            output: { updatedAt: UpdatedAt }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: Sources }; output: ErrorBase; outputFormat: 'json'; status: 400 }
        | { input: { json: Sources }; output: ErrorBase; outputFormat: 'json'; status: 402 }
        | { input: { json: Sources }; output: ErrorBase; outputFormat: 'json'; status: 403 }
        | { input: { json: Sources }; output: ErrorBase; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/1/security/sources/append': {
      $post:
        | {
            input: { json: Source }
            output: { createdAt: CreatedAt }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: Source }; output: ErrorBase; outputFormat: 'json'; status: 400 }
        | { input: { json: Source }; output: ErrorBase; outputFormat: 'json'; status: 402 }
        | { input: { json: Source }; output: ErrorBase; outputFormat: 'json'; status: 403 }
        | { input: { json: Source }; output: ErrorBase; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/1/security/sources/:source': {
      $delete:
        | {
            input: { param: { source: string } }
            output: { deletedAt: DeletedAt }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { source: string } }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { source: string } }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { source: string } }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { source: string } }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/logs': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                length?: number | undefined
                indexName?: string | ({ [x: string]: unknown } | null) | undefined
                type?: LogType | undefined
              }
            }
            output: {
              logs: {
                cid?: string | undefined
                timestamp: string
                method: string
                answer_code: string
                query_body: string
                answer: string
                url: string
                ip: string
                query_headers: string
                sha1: string
                nb_api_calls?: string | undefined
                processing_time_ms: string
                index?: string | undefined
                query_params?: string | undefined
                query_nb_hits?: string | undefined
                inner_queries?:
                  | {
                      index_name?: string | undefined
                      user_token?: string | undefined
                      query_id?: string | undefined
                    }[]
                  | undefined
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                length?: number | undefined
                indexName?: string | ({ [x: string]: unknown } | null) | undefined
                type?: LogType | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                length?: number | undefined
                indexName?: string | ({ [x: string]: unknown } | null) | undefined
                type?: LogType | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                length?: number | undefined
                indexName?: string | ({ [x: string]: unknown } | null) | undefined
                type?: LogType | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                length?: number | undefined
                indexName?: string | ({ [x: string]: unknown } | null) | undefined
                type?: LogType | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/task/:taskID': {
      $get:
        | {
            input: { param: { taskID: bigint } }
            output: GetTaskResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taskID: bigint } }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { taskID: bigint } }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { taskID: bigint } }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/1/indexes/:indexName/task/:taskID': {
      $get:
        | {
            input: { param: { indexName: string; taskID: bigint } }
            output: GetTaskResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexName: string; taskID: bigint } }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { indexName: string; taskID: bigint } }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { indexName: string; taskID: bigint } }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { indexName: string; taskID: bigint } }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/indexes/:indexName/operation': {
      $post:
        | {
            input: { param: { indexName: string } } & {
              json: {
                operation: OperationType
                destination: IndexName
                scope?: ScopeType[] | undefined
              }
            }
            output: UpdatedAtResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexName: string } } & {
              json: {
                operation: OperationType
                destination: IndexName
                scope?: ScopeType[] | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { indexName: string } } & {
              json: {
                operation: OperationType
                destination: IndexName
                scope?: ScopeType[] | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { indexName: string } } & {
              json: {
                operation: OperationType
                destination: IndexName
                scope?: ScopeType[] | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { indexName: string } } & {
              json: {
                operation: OperationType
                destination: IndexName
                scope?: ScopeType[] | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/1/indexes': {
      $get:
        | {
            input: {
              query: {
                page?: number | ({ [x: string]: unknown } | null) | undefined
                hitsPerPage?: number | undefined
              }
            }
            output: ListIndicesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | ({ [x: string]: unknown } | null) | undefined
                hitsPerPage?: number | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page?: number | ({ [x: string]: unknown } | null) | undefined
                hitsPerPage?: number | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                page?: number | ({ [x: string]: unknown } | null) | undefined
                hitsPerPage?: number | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | ({ [x: string]: unknown } | null) | undefined
                hitsPerPage?: number | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/waitForApiKey': {
      $get:
        | {
            input: {
              query: { key: string; operation: ApiKeyOperation; apiKey?: ApiKey | undefined }
            }
            output: GetApiKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { key: string; operation: ApiKeyOperation; apiKey?: ApiKey | undefined }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/waitForTask': {
      $get:
        | {
            input: { query: { indexName: string; taskID: bigint } }
            output: GetTaskResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { indexName: string; taskID: bigint } }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/waitForAppTask': {
      $get:
        | {
            input: { query: { taskID: bigint } }
            output: GetTaskResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { taskID: bigint } }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/browseObjects': {
      $get:
        | {
            input: { query: { indexName: string; browseParams: BrowseParamsObject } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { indexName: string; browseParams: BrowseParamsObject } }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/generateSecuredApiKey': {
      $get:
        | {
            input: { query: { parentApiKey: string; restrictions: SecuredApiKeyRestrictions } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { parentApiKey: string; restrictions: SecuredApiKeyRestrictions } }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/accountCopyIndex': {
      $get:
        | {
            input: {
              query: {
                sourceIndexName: string
                destinationAppID: string
                destinationApiKey: string
                destinationIndexName: string
                batchSize?: number | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                sourceIndexName: string
                destinationAppID: string
                destinationApiKey: string
                destinationIndexName: string
                batchSize?: number | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                sourceIndexName: string
                destinationAppID: string
                destinationApiKey: string
                destinationIndexName: string
                batchSize?: number | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/replaceAllObjects': {
      $get:
        | {
            input: {
              query: {
                indexName: string
                objects: { [x: string]: unknown }[]
                batchSize?: number | undefined
                scopes?: ScopeType[] | undefined
              }
            }
            output: ReplaceAllObjectsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                indexName: string
                objects: { [x: string]: unknown }[]
                batchSize?: number | undefined
                scopes?: ScopeType[] | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/replaceAllObjectsWithTransformation': {
      $get:
        | {
            input: {
              query: {
                indexName: string
                objects: { [x: string]: unknown }[]
                batchSize?: number | undefined
                scopes?: ScopeType[] | undefined
              }
            }
            output: ReplaceAllObjectsWithTransformationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                indexName: string
                objects: { [x: string]: unknown }[]
                batchSize?: number | undefined
                scopes?: ScopeType[] | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/chunkedBatch': {
      $get:
        | {
            input: {
              query: {
                indexName: string
                objects: { [x: string]: unknown }[]
                action?: Action | undefined
                waitForTasks?: boolean | undefined
                batchSize?: number | undefined
              }
            }
            output: BatchResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                indexName: string
                objects: { [x: string]: unknown }[]
                action?: Action | undefined
                waitForTasks?: boolean | undefined
                batchSize?: number | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/saveObjects': {
      $get:
        | {
            input: {
              query: {
                indexName: string
                objects: { [x: string]: unknown }[]
                waitForTasks?: boolean | undefined
                batchSize?: number | undefined
                requestOptions?: { [x: string]: unknown } | undefined
              }
            }
            output: BatchResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                indexName: string
                objects: { [x: string]: unknown }[]
                waitForTasks?: boolean | undefined
                batchSize?: number | undefined
                requestOptions?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/saveObjectsWithTransformation': {
      $get:
        | {
            input: {
              query: {
                indexName: string
                objects: { [x: string]: unknown }[]
                waitForTasks?: boolean | undefined
                batchSize?: number | undefined
                requestOptions?: { [x: string]: unknown } | undefined
              }
            }
            output: WatchResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                indexName: string
                objects: { [x: string]: unknown }[]
                waitForTasks?: boolean | undefined
                batchSize?: number | undefined
                requestOptions?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/deleteObjects': {
      $post:
        | {
            input: {
              query: {
                indexName: string
                objectIDs: string[]
                waitForTasks?: boolean | undefined
                batchSize?: number | undefined
                requestOptions?: { [x: string]: unknown } | undefined
              }
            }
            output: BatchResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                indexName: string
                objectIDs: string[]
                waitForTasks?: boolean | undefined
                batchSize?: number | undefined
                requestOptions?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/partialUpdateObjects': {
      $post:
        | {
            input: {
              query: {
                indexName: string
                objects: { [x: string]: unknown }[]
                createIfNotExists?: boolean | undefined
                waitForTasks?: boolean | undefined
                batchSize?: number | undefined
                requestOptions?: { [x: string]: unknown } | undefined
              }
            }
            output: BatchResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                indexName: string
                objects: { [x: string]: unknown }[]
                createIfNotExists?: boolean | undefined
                waitForTasks?: boolean | undefined
                batchSize?: number | undefined
                requestOptions?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/partialUpdateObjectsWithTransformation': {
      $post:
        | {
            input: {
              query: {
                indexName: string
                objects: { [x: string]: unknown }[]
                createIfNotExists?: boolean | undefined
                waitForTasks?: boolean | undefined
                batchSize?: number | undefined
                requestOptions?: { [x: string]: unknown } | undefined
              }
            }
            output: WatchResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                indexName: string
                objects: { [x: string]: unknown }[]
                createIfNotExists?: boolean | undefined
                waitForTasks?: boolean | undefined
                batchSize?: number | undefined
                requestOptions?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorBase
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/indexExists': {
      $get: {
        input: { query: { indexName: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setClientApiKey': {
      $get: { input: { query: { apiKey: string } }; output: {}; outputFormat: string; status: 204 }
    }
  },
  '/'
>
export default routes
