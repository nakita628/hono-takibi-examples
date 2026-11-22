type FieldName = string
type FieldNameList = FieldName[]
type BuildSuggestersResponse = { FieldNames?: FieldNameList | undefined }
type BaseException = { [x: string]: unknown }
type InternalException = { [x: string]: unknown }
type ResourceNotFoundException = { [x: string]: unknown }
type ValidationException = { [x: string]: unknown }
type DomainName = string
type BuildSuggestersRequest = { DomainName: DomainName }
type DomainId = string
type ARN = string
type ServiceUrl = string
type MaximumReplicationCount = number
type MaximumPartitionCount = number
type Limits = {
  MaximumReplicationCount: MaximumReplicationCount
  MaximumPartitionCount: MaximumPartitionCount
}
type DomainStatus = {
  DomainId: DomainId
  DomainName: DomainName
  ARN?: ARN | undefined
  Created?: {} | undefined
  Deleted?: {} | undefined
  DocService?: { Endpoint?: ServiceUrl | undefined } | undefined
  SearchService?: { Endpoint?: ServiceUrl | undefined } | undefined
  RequiresIndexDocuments: {}
  Processing?: {} | undefined
  SearchInstanceType?: {} | undefined
  SearchPartitionCount?: {} | undefined
  SearchInstanceCount?: {} | undefined
  Limits?: Limits | undefined
}
type CreateDomainResponse = { DomainStatus?: DomainStatus | undefined }
type LimitExceededException = { [x: string]: unknown }
type ResourceAlreadyExistsException = { [x: string]: unknown }
type CreateDomainRequest = { DomainName: {} }
type StandardName = string
type AnalysisSchemeLanguage =
  | 'ar'
  | 'bg'
  | 'ca'
  | 'cs'
  | 'da'
  | 'de'
  | 'el'
  | 'en'
  | 'es'
  | 'eu'
  | 'fa'
  | 'fi'
  | 'fr'
  | 'ga'
  | 'gl'
  | 'he'
  | 'hi'
  | 'hu'
  | 'hy'
  | 'id'
  | 'it'
  | 'ja'
  | 'ko'
  | 'lv'
  | 'mul'
  | 'nl'
  | 'no'
  | 'pt'
  | 'ro'
  | 'ru'
  | 'sv'
  | 'th'
  | 'tr'
  | 'zh-Hans'
  | 'zh-Hant'
type AnalysisOptions = {
  Synonyms?: {} | undefined
  Stopwords?: {} | undefined
  StemmingDictionary?: {} | undefined
  JapaneseTokenizationDictionary?: {} | undefined
  AlgorithmicStemming?: {} | undefined
}
type AnalysisScheme = {
  AnalysisSchemeName: StandardName
  AnalysisSchemeLanguage: AnalysisSchemeLanguage
  AnalysisOptions?: AnalysisOptions | undefined
}
type OptionStatus = {
  CreationDate: {}
  UpdateDate: {}
  UpdateVersion?: {} | undefined
  State: {}
  PendingDeletion?: {} | undefined
}
type AnalysisSchemeStatus = { Options: AnalysisScheme; Status: OptionStatus }
type DefineAnalysisSchemeResponse = { AnalysisScheme: AnalysisSchemeStatus }
type InvalidTypeException = { [x: string]: unknown }
type DefineAnalysisSchemeRequest = { DomainName: DomainName; AnalysisScheme: AnalysisScheme }
type ExpressionValue = string
type ExpressionStatus = {
  Options: { ExpressionName: StandardName; ExpressionValue: ExpressionValue }
  Status: OptionStatus
}
type DefineExpressionResponse = { Expression: ExpressionStatus }
type Expression = { ExpressionName: StandardName; ExpressionValue: ExpressionValue }
type DefineExpressionRequest = { DomainName: DomainName; Expression: Expression }
type IndexFieldType =
  | 'int'
  | 'double'
  | 'literal'
  | 'text'
  | 'date'
  | 'latlon'
  | 'int-array'
  | 'double-array'
  | 'literal-array'
  | 'text-array'
  | 'date-array'
type IntOptions = {
  DefaultValue?: {} | undefined
  SourceField?: {} | undefined
  FacetEnabled?: {} | undefined
  SearchEnabled?: {} | undefined
  ReturnEnabled?: {} | undefined
  SortEnabled?: {} | undefined
}
type DoubleOptions = {
  DefaultValue?: {} | undefined
  SourceField?: {} | undefined
  FacetEnabled?: {} | undefined
  SearchEnabled?: {} | undefined
  ReturnEnabled?: {} | undefined
  SortEnabled?: {} | undefined
}
type LiteralOptions = {
  DefaultValue?: {} | undefined
  SourceField?: FieldName | undefined
  FacetEnabled?: {} | undefined
  SearchEnabled?: {} | undefined
  ReturnEnabled?: {} | undefined
  SortEnabled?: {} | undefined
}
type TextOptions = {
  DefaultValue?: {} | undefined
  SourceField?: FieldName | undefined
  ReturnEnabled?: {} | undefined
  SortEnabled?: {} | undefined
  HighlightEnabled?: {} | undefined
  AnalysisScheme?: {} | undefined
}
type DateOptions = {
  DefaultValue?: {} | undefined
  SourceField?: FieldName | undefined
  FacetEnabled?: {} | undefined
  SearchEnabled?: {} | undefined
  ReturnEnabled?: {} | undefined
  SortEnabled?: {} | undefined
}
type LatLonOptions = {
  DefaultValue?: {} | undefined
  SourceField?: FieldName | undefined
  FacetEnabled?: {} | undefined
  SearchEnabled?: {} | undefined
  ReturnEnabled?: {} | undefined
  SortEnabled?: {} | undefined
}
type IntArrayOptions = {
  DefaultValue?: {} | undefined
  SourceFields?: {} | undefined
  FacetEnabled?: {} | undefined
  SearchEnabled?: {} | undefined
  ReturnEnabled?: {} | undefined
}
type DoubleArrayOptions = {
  DefaultValue?: {} | undefined
  SourceFields?: {} | undefined
  FacetEnabled?: {} | undefined
  SearchEnabled?: {} | undefined
  ReturnEnabled?: {} | undefined
}
type LiteralArrayOptions = {
  DefaultValue?: {} | undefined
  SourceFields?: {} | undefined
  FacetEnabled?: {} | undefined
  SearchEnabled?: {} | undefined
  ReturnEnabled?: {} | undefined
}
type TextArrayOptions = {
  DefaultValue?: {} | undefined
  SourceFields?: {} | undefined
  ReturnEnabled?: {} | undefined
  HighlightEnabled?: {} | undefined
  AnalysisScheme?: {} | undefined
}
type DateArrayOptions = {
  DefaultValue?: {} | undefined
  SourceFields?: {} | undefined
  FacetEnabled?: {} | undefined
  SearchEnabled?: {} | undefined
  ReturnEnabled?: {} | undefined
}
type IndexField = {
  IndexFieldName: {}
  IndexFieldType: IndexFieldType
  IntOptions?: IntOptions | undefined
  DoubleOptions?: DoubleOptions | undefined
  LiteralOptions?: LiteralOptions | undefined
  TextOptions?: TextOptions | undefined
  DateOptions?: DateOptions | undefined
  LatLonOptions?: LatLonOptions | undefined
  IntArrayOptions?: IntArrayOptions | undefined
  DoubleArrayOptions?: DoubleArrayOptions | undefined
  LiteralArrayOptions?: LiteralArrayOptions | undefined
  TextArrayOptions?: TextArrayOptions | undefined
  DateArrayOptions?: DateArrayOptions | undefined
}
type IndexFieldStatus = { Options: IndexField; Status: OptionStatus }
type DefineIndexFieldResponse = { IndexField: IndexFieldStatus }
type DefineIndexFieldRequest = {
  DomainName: DomainName
  IndexField: {
    IndexFieldName: {}
    IndexFieldType: IndexFieldType
    IntOptions?: IntOptions | undefined
    DoubleOptions?: DoubleOptions | undefined
    LiteralOptions?: LiteralOptions | undefined
    TextOptions?: TextOptions | undefined
    DateOptions?: DateOptions | undefined
    LatLonOptions?: LatLonOptions | undefined
    IntArrayOptions?: IntArrayOptions | undefined
    DoubleArrayOptions?: DoubleArrayOptions | undefined
    LiteralArrayOptions?: LiteralArrayOptions | undefined
    TextArrayOptions?: TextArrayOptions | undefined
    DateArrayOptions?: DateArrayOptions | undefined
  }
}
type DocumentSuggesterOptions = {
  SourceField: {}
  FuzzyMatching?: {} | undefined
  SortExpression?: {} | undefined
}
type Suggester = { SuggesterName: StandardName; DocumentSuggesterOptions: DocumentSuggesterOptions }
type SuggesterStatus = { Options: Suggester; Status: OptionStatus }
type DefineSuggesterResponse = { Suggester: SuggesterStatus }
type DefineSuggesterRequest = { DomainName: DomainName; Suggester: Suggester }
type DeleteAnalysisSchemeResponse = {
  AnalysisScheme: { Options: AnalysisScheme; Status: OptionStatus }
}
type DeleteAnalysisSchemeRequest = { DomainName: DomainName; AnalysisSchemeName: {} }
type DeleteDomainResponse = { DomainStatus?: DomainStatus | undefined }
type DeleteDomainRequest = { DomainName: {} }
type DeleteExpressionResponse = {
  Expression: {
    Options: { ExpressionName: StandardName; ExpressionValue: ExpressionValue }
    Status: OptionStatus
  }
}
type DeleteExpressionRequest = { DomainName: DomainName; ExpressionName: {} }
type DeleteIndexFieldResponse = { IndexField: { Options: IndexField; Status: OptionStatus } }
type DeleteIndexFieldRequest = { DomainName: DomainName; IndexFieldName: {} }
type DeleteSuggesterResponse = { Suggester: { Options: Suggester; Status: OptionStatus } }
type DeleteSuggesterRequest = { DomainName: DomainName; SuggesterName: {} }
type DescribeAnalysisSchemesResponse = { AnalysisSchemes: {} }
type DescribeAnalysisSchemesRequest = {
  DomainName: {}
  AnalysisSchemeNames?: {} | undefined
  Deployed?: {} | undefined
}
type DescribeAvailabilityOptionsResponse = {
  AvailabilityOptions?: { Options: {}; Status: OptionStatus } | undefined
}
type DisabledOperationException = { [x: string]: unknown }
type DescribeAvailabilityOptionsRequest = { DomainName: {}; Deployed?: {} | undefined }
type DescribeDomainEndpointOptionsResponse = {
  DomainEndpointOptions?:
    | {
        Options: { EnforceHTTPS?: {} | undefined; TLSSecurityPolicy?: {} | undefined }
        Status: {
          CreationDate: {}
          UpdateDate: {}
          UpdateVersion?: {} | undefined
          State: {}
          PendingDeletion?: {} | undefined
        }
      }
    | undefined
}
type DescribeDomainEndpointOptionsRequest = { DomainName: {}; Deployed?: {} | undefined }
type DomainStatusList = DomainStatus[]
type DescribeDomainsResponse = { DomainStatusList: DomainStatusList }
type DescribeDomainsRequest = { DomainNames?: {} | undefined }
type DescribeExpressionsResponse = { Expressions: {} }
type DescribeExpressionsRequest = {
  DomainName: {}
  ExpressionNames?: {} | undefined
  Deployed?: {} | undefined
}
type DynamicFieldName = string
type DescribeIndexFieldsResponse = { IndexFields: {} }
type DescribeIndexFieldsRequest = {
  DomainName: {}
  FieldNames?: {} | undefined
  Deployed?: {} | undefined
}
type ScalingParameters = {
  DesiredInstanceType?: {} | undefined
  DesiredReplicationCount?: {} | undefined
  DesiredPartitionCount?: {} | undefined
}
type ScalingParametersStatus = { Options: ScalingParameters; Status: OptionStatus }
type DescribeScalingParametersResponse = { ScalingParameters: ScalingParametersStatus }
type DescribeScalingParametersRequest = { DomainName: DomainName }
type PolicyDocument = string
type DescribeServiceAccessPoliciesResponse = {
  AccessPolicies: { Options: PolicyDocument; Status: OptionStatus }
}
type DescribeServiceAccessPoliciesRequest = { DomainName: {}; Deployed?: {} | undefined }
type DescribeSuggestersResponse = { Suggesters: {} }
type DescribeSuggestersRequest = {
  DomainName: {}
  SuggesterNames?: {} | undefined
  Deployed?: {} | undefined
}
type IndexDocumentsResponse = { FieldNames?: {} | undefined }
type IndexDocumentsRequest = { DomainName: DomainName }
type ListDomainNamesResponse = { DomainNames?: {} | undefined }
type UpdateAvailabilityOptionsResponse = {
  AvailabilityOptions?: { Options: {}; Status: OptionStatus } | undefined
}
type UpdateAvailabilityOptionsRequest = { DomainName: DomainName; MultiAZ: {} }
type UpdateDomainEndpointOptionsResponse = {
  DomainEndpointOptions?:
    | {
        Options: { EnforceHTTPS?: {} | undefined; TLSSecurityPolicy?: {} | undefined }
        Status: {
          CreationDate: {}
          UpdateDate: {}
          UpdateVersion?: {} | undefined
          State: {}
          PendingDeletion?: {} | undefined
        }
      }
    | undefined
}
type UpdateDomainEndpointOptionsRequest = {
  DomainName: {}
  DomainEndpointOptions: { EnforceHTTPS?: {} | undefined; TLSSecurityPolicy?: {} | undefined }
}
type UpdateScalingParametersResponse = { ScalingParameters: ScalingParametersStatus }
type UpdateScalingParametersRequest = {
  DomainName: DomainName
  ScalingParameters: ScalingParameters
}
type UpdateServiceAccessPoliciesResponse = {
  AccessPolicies: { Options: PolicyDocument; Status: OptionStatus }
}
type UpdateServiceAccessPoliciesRequest = { DomainName: DomainName; AccessPolicies: {} }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#Action=BuildSuggesters': {
      $get:
        | {
            input: {
              query: { DomainName: string; Action: 'BuildSuggesters'; Version: '2013-01-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BuildSuggestersResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { DomainName: string; Action: 'BuildSuggesters'; Version: '2013-01-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { DomainName: string; Action: 'BuildSuggesters'; Version: '2013-01-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: { DomainName: string; Action: 'BuildSuggesters'; Version: '2013-01-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: { DomainName: string; Action: 'BuildSuggesters'; Version: '2013-01-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'text'
            status: 483
          }
      $post:
        | {
            input: { query: { Action: 'BuildSuggesters'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BuildSuggestersRequest }
            output: BuildSuggestersResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'BuildSuggesters'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BuildSuggestersRequest }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'BuildSuggesters'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BuildSuggestersRequest }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'BuildSuggesters'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BuildSuggestersRequest }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'BuildSuggesters'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BuildSuggestersRequest }
            output: ValidationException
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/#Action=CreateDomain': {
      $get:
        | {
            input: {
              query: { DomainName: string; Action: 'CreateDomain'; Version: '2013-01-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CreateDomainResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { DomainName: string; Action: 'CreateDomain'; Version: '2013-01-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { DomainName: string; Action: 'CreateDomain'; Version: '2013-01-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: { DomainName: string; Action: 'CreateDomain'; Version: '2013-01-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: { DomainName: string; Action: 'CreateDomain'; Version: '2013-01-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceAlreadyExistsException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: { DomainName: string; Action: 'CreateDomain'; Version: '2013-01-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: { query: { Action: 'CreateDomain'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDomainRequest }
            output: CreateDomainResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateDomain'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDomainRequest }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreateDomain'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDomainRequest }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CreateDomain'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDomainRequest }
            output: LimitExceededException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'CreateDomain'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDomainRequest }
            output: ResourceAlreadyExistsException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'CreateDomain'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDomainRequest }
            output: ValidationException
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=DefineAnalysisScheme': {
      $get:
        | {
            input: {
              query: {
                DomainName: string
                AnalysisScheme: {
                  AnalysisSchemeName: StandardName
                  AnalysisSchemeLanguage: AnalysisSchemeLanguage
                  AnalysisOptions?: AnalysisOptions | undefined
                }
                Action: 'DefineAnalysisScheme'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DefineAnalysisSchemeResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DomainName: string
                AnalysisScheme: {
                  AnalysisSchemeName: StandardName
                  AnalysisSchemeLanguage: AnalysisSchemeLanguage
                  AnalysisOptions?: AnalysisOptions | undefined
                }
                Action: 'DefineAnalysisScheme'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DomainName: string
                AnalysisScheme: {
                  AnalysisSchemeName: StandardName
                  AnalysisSchemeLanguage: AnalysisSchemeLanguage
                  AnalysisOptions?: AnalysisOptions | undefined
                }
                Action: 'DefineAnalysisScheme'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DomainName: string
                AnalysisScheme: {
                  AnalysisSchemeName: StandardName
                  AnalysisSchemeLanguage: AnalysisSchemeLanguage
                  AnalysisOptions?: AnalysisOptions | undefined
                }
                Action: 'DefineAnalysisScheme'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                DomainName: string
                AnalysisScheme: {
                  AnalysisSchemeName: StandardName
                  AnalysisSchemeLanguage: AnalysisSchemeLanguage
                  AnalysisOptions?: AnalysisOptions | undefined
                }
                Action: 'DefineAnalysisScheme'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidTypeException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                DomainName: string
                AnalysisScheme: {
                  AnalysisSchemeName: StandardName
                  AnalysisSchemeLanguage: AnalysisSchemeLanguage
                  AnalysisOptions?: AnalysisOptions | undefined
                }
                Action: 'DefineAnalysisScheme'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                DomainName: string
                AnalysisScheme: {
                  AnalysisSchemeName: StandardName
                  AnalysisSchemeLanguage: AnalysisSchemeLanguage
                  AnalysisOptions?: AnalysisOptions | undefined
                }
                Action: 'DefineAnalysisScheme'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'text'
            status: 485
          }
      $post:
        | {
            input: { query: { Action: 'DefineAnalysisScheme'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DefineAnalysisSchemeRequest }
            output: DefineAnalysisSchemeResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DefineAnalysisScheme'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DefineAnalysisSchemeRequest }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DefineAnalysisScheme'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DefineAnalysisSchemeRequest }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'DefineAnalysisScheme'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DefineAnalysisSchemeRequest }
            output: LimitExceededException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'DefineAnalysisScheme'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DefineAnalysisSchemeRequest }
            output: InvalidTypeException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'DefineAnalysisScheme'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DefineAnalysisSchemeRequest }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'DefineAnalysisScheme'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DefineAnalysisSchemeRequest }
            output: ValidationException
            outputFormat: 'text'
            status: 485
          }
    }
  } & {
    '/#Action=DefineExpression': {
      $get:
        | {
            input: {
              query: {
                DomainName: string
                Expression: { ExpressionName: StandardName; ExpressionValue: ExpressionValue }
                Action: 'DefineExpression'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DefineExpressionResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DomainName: string
                Expression: { ExpressionName: StandardName; ExpressionValue: ExpressionValue }
                Action: 'DefineExpression'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DomainName: string
                Expression: { ExpressionName: StandardName; ExpressionValue: ExpressionValue }
                Action: 'DefineExpression'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DomainName: string
                Expression: { ExpressionName: StandardName; ExpressionValue: ExpressionValue }
                Action: 'DefineExpression'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                DomainName: string
                Expression: { ExpressionName: StandardName; ExpressionValue: ExpressionValue }
                Action: 'DefineExpression'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidTypeException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                DomainName: string
                Expression: { ExpressionName: StandardName; ExpressionValue: ExpressionValue }
                Action: 'DefineExpression'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                DomainName: string
                Expression: { ExpressionName: StandardName; ExpressionValue: ExpressionValue }
                Action: 'DefineExpression'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'text'
            status: 485
          }
      $post:
        | {
            input: { query: { Action: 'DefineExpression'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DefineExpressionRequest }
            output: DefineExpressionResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DefineExpression'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DefineExpressionRequest }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DefineExpression'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DefineExpressionRequest }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'DefineExpression'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DefineExpressionRequest }
            output: LimitExceededException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'DefineExpression'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DefineExpressionRequest }
            output: InvalidTypeException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'DefineExpression'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DefineExpressionRequest }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'DefineExpression'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DefineExpressionRequest }
            output: ValidationException
            outputFormat: 'text'
            status: 485
          }
    }
  } & {
    '/#Action=DefineIndexField': {
      $get:
        | {
            input: {
              query: {
                DomainName: string
                IndexField: {
                  IndexFieldName: {}
                  IndexFieldType: IndexFieldType
                  IntOptions?: IntOptions | undefined
                  DoubleOptions?: DoubleOptions | undefined
                  LiteralOptions?: LiteralOptions | undefined
                  TextOptions?: TextOptions | undefined
                  DateOptions?: DateOptions | undefined
                  LatLonOptions?: LatLonOptions | undefined
                  IntArrayOptions?: IntArrayOptions | undefined
                  DoubleArrayOptions?: DoubleArrayOptions | undefined
                  LiteralArrayOptions?: LiteralArrayOptions | undefined
                  TextArrayOptions?: TextArrayOptions | undefined
                  DateArrayOptions?: DateArrayOptions | undefined
                }
                Action: 'DefineIndexField'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DefineIndexFieldResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DomainName: string
                IndexField: {
                  IndexFieldName: {}
                  IndexFieldType: IndexFieldType
                  IntOptions?: IntOptions | undefined
                  DoubleOptions?: DoubleOptions | undefined
                  LiteralOptions?: LiteralOptions | undefined
                  TextOptions?: TextOptions | undefined
                  DateOptions?: DateOptions | undefined
                  LatLonOptions?: LatLonOptions | undefined
                  IntArrayOptions?: IntArrayOptions | undefined
                  DoubleArrayOptions?: DoubleArrayOptions | undefined
                  LiteralArrayOptions?: LiteralArrayOptions | undefined
                  TextArrayOptions?: TextArrayOptions | undefined
                  DateArrayOptions?: DateArrayOptions | undefined
                }
                Action: 'DefineIndexField'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DomainName: string
                IndexField: {
                  IndexFieldName: {}
                  IndexFieldType: IndexFieldType
                  IntOptions?: IntOptions | undefined
                  DoubleOptions?: DoubleOptions | undefined
                  LiteralOptions?: LiteralOptions | undefined
                  TextOptions?: TextOptions | undefined
                  DateOptions?: DateOptions | undefined
                  LatLonOptions?: LatLonOptions | undefined
                  IntArrayOptions?: IntArrayOptions | undefined
                  DoubleArrayOptions?: DoubleArrayOptions | undefined
                  LiteralArrayOptions?: LiteralArrayOptions | undefined
                  TextArrayOptions?: TextArrayOptions | undefined
                  DateArrayOptions?: DateArrayOptions | undefined
                }
                Action: 'DefineIndexField'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DomainName: string
                IndexField: {
                  IndexFieldName: {}
                  IndexFieldType: IndexFieldType
                  IntOptions?: IntOptions | undefined
                  DoubleOptions?: DoubleOptions | undefined
                  LiteralOptions?: LiteralOptions | undefined
                  TextOptions?: TextOptions | undefined
                  DateOptions?: DateOptions | undefined
                  LatLonOptions?: LatLonOptions | undefined
                  IntArrayOptions?: IntArrayOptions | undefined
                  DoubleArrayOptions?: DoubleArrayOptions | undefined
                  LiteralArrayOptions?: LiteralArrayOptions | undefined
                  TextArrayOptions?: TextArrayOptions | undefined
                  DateArrayOptions?: DateArrayOptions | undefined
                }
                Action: 'DefineIndexField'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                DomainName: string
                IndexField: {
                  IndexFieldName: {}
                  IndexFieldType: IndexFieldType
                  IntOptions?: IntOptions | undefined
                  DoubleOptions?: DoubleOptions | undefined
                  LiteralOptions?: LiteralOptions | undefined
                  TextOptions?: TextOptions | undefined
                  DateOptions?: DateOptions | undefined
                  LatLonOptions?: LatLonOptions | undefined
                  IntArrayOptions?: IntArrayOptions | undefined
                  DoubleArrayOptions?: DoubleArrayOptions | undefined
                  LiteralArrayOptions?: LiteralArrayOptions | undefined
                  TextArrayOptions?: TextArrayOptions | undefined
                  DateArrayOptions?: DateArrayOptions | undefined
                }
                Action: 'DefineIndexField'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidTypeException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                DomainName: string
                IndexField: {
                  IndexFieldName: {}
                  IndexFieldType: IndexFieldType
                  IntOptions?: IntOptions | undefined
                  DoubleOptions?: DoubleOptions | undefined
                  LiteralOptions?: LiteralOptions | undefined
                  TextOptions?: TextOptions | undefined
                  DateOptions?: DateOptions | undefined
                  LatLonOptions?: LatLonOptions | undefined
                  IntArrayOptions?: IntArrayOptions | undefined
                  DoubleArrayOptions?: DoubleArrayOptions | undefined
                  LiteralArrayOptions?: LiteralArrayOptions | undefined
                  TextArrayOptions?: TextArrayOptions | undefined
                  DateArrayOptions?: DateArrayOptions | undefined
                }
                Action: 'DefineIndexField'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                DomainName: string
                IndexField: {
                  IndexFieldName: {}
                  IndexFieldType: IndexFieldType
                  IntOptions?: IntOptions | undefined
                  DoubleOptions?: DoubleOptions | undefined
                  LiteralOptions?: LiteralOptions | undefined
                  TextOptions?: TextOptions | undefined
                  DateOptions?: DateOptions | undefined
                  LatLonOptions?: LatLonOptions | undefined
                  IntArrayOptions?: IntArrayOptions | undefined
                  DoubleArrayOptions?: DoubleArrayOptions | undefined
                  LiteralArrayOptions?: LiteralArrayOptions | undefined
                  TextArrayOptions?: TextArrayOptions | undefined
                  DateArrayOptions?: DateArrayOptions | undefined
                }
                Action: 'DefineIndexField'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'text'
            status: 485
          }
      $post:
        | {
            input: { query: { Action: 'DefineIndexField'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DefineIndexFieldRequest }
            output: DefineIndexFieldResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DefineIndexField'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DefineIndexFieldRequest }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DefineIndexField'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DefineIndexFieldRequest }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'DefineIndexField'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DefineIndexFieldRequest }
            output: LimitExceededException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'DefineIndexField'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DefineIndexFieldRequest }
            output: InvalidTypeException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'DefineIndexField'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DefineIndexFieldRequest }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'DefineIndexField'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DefineIndexFieldRequest }
            output: ValidationException
            outputFormat: 'text'
            status: 485
          }
    }
  } & {
    '/#Action=DefineSuggester': {
      $get:
        | {
            input: {
              query: {
                DomainName: string
                Suggester: {
                  SuggesterName: StandardName
                  DocumentSuggesterOptions: DocumentSuggesterOptions
                }
                Action: 'DefineSuggester'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DefineSuggesterResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DomainName: string
                Suggester: {
                  SuggesterName: StandardName
                  DocumentSuggesterOptions: DocumentSuggesterOptions
                }
                Action: 'DefineSuggester'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DomainName: string
                Suggester: {
                  SuggesterName: StandardName
                  DocumentSuggesterOptions: DocumentSuggesterOptions
                }
                Action: 'DefineSuggester'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DomainName: string
                Suggester: {
                  SuggesterName: StandardName
                  DocumentSuggesterOptions: DocumentSuggesterOptions
                }
                Action: 'DefineSuggester'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                DomainName: string
                Suggester: {
                  SuggesterName: StandardName
                  DocumentSuggesterOptions: DocumentSuggesterOptions
                }
                Action: 'DefineSuggester'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidTypeException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                DomainName: string
                Suggester: {
                  SuggesterName: StandardName
                  DocumentSuggesterOptions: DocumentSuggesterOptions
                }
                Action: 'DefineSuggester'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                DomainName: string
                Suggester: {
                  SuggesterName: StandardName
                  DocumentSuggesterOptions: DocumentSuggesterOptions
                }
                Action: 'DefineSuggester'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'text'
            status: 485
          }
      $post:
        | {
            input: { query: { Action: 'DefineSuggester'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DefineSuggesterRequest }
            output: DefineSuggesterResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DefineSuggester'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DefineSuggesterRequest }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DefineSuggester'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DefineSuggesterRequest }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'DefineSuggester'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DefineSuggesterRequest }
            output: LimitExceededException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'DefineSuggester'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DefineSuggesterRequest }
            output: InvalidTypeException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'DefineSuggester'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DefineSuggesterRequest }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'DefineSuggester'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DefineSuggesterRequest }
            output: ValidationException
            outputFormat: 'text'
            status: 485
          }
    }
  } & {
    '/#Action=DeleteAnalysisScheme': {
      $get:
        | {
            input: {
              query: {
                DomainName: string
                AnalysisSchemeName: string
                Action: 'DeleteAnalysisScheme'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteAnalysisSchemeResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DomainName: string
                AnalysisSchemeName: string
                Action: 'DeleteAnalysisScheme'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DomainName: string
                AnalysisSchemeName: string
                Action: 'DeleteAnalysisScheme'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DomainName: string
                AnalysisSchemeName: string
                Action: 'DeleteAnalysisScheme'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidTypeException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                DomainName: string
                AnalysisSchemeName: string
                Action: 'DeleteAnalysisScheme'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                DomainName: string
                AnalysisSchemeName: string
                Action: 'DeleteAnalysisScheme'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: { query: { Action: 'DeleteAnalysisScheme'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAnalysisSchemeRequest }
            output: DeleteAnalysisSchemeResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DeleteAnalysisScheme'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAnalysisSchemeRequest }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DeleteAnalysisScheme'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAnalysisSchemeRequest }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'DeleteAnalysisScheme'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAnalysisSchemeRequest }
            output: InvalidTypeException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'DeleteAnalysisScheme'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAnalysisSchemeRequest }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'DeleteAnalysisScheme'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAnalysisSchemeRequest }
            output: ValidationException
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=DeleteDomain': {
      $get:
        | {
            input: {
              query: { DomainName: string; Action: 'DeleteDomain'; Version: '2013-01-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteDomainResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { DomainName: string; Action: 'DeleteDomain'; Version: '2013-01-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { DomainName: string; Action: 'DeleteDomain'; Version: '2013-01-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'DeleteDomain'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDomainRequest }
            output: DeleteDomainResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DeleteDomain'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDomainRequest }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DeleteDomain'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDomainRequest }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=DeleteExpression': {
      $get:
        | {
            input: {
              query: {
                DomainName: string
                ExpressionName: string
                Action: 'DeleteExpression'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteExpressionResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DomainName: string
                ExpressionName: string
                Action: 'DeleteExpression'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DomainName: string
                ExpressionName: string
                Action: 'DeleteExpression'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DomainName: string
                ExpressionName: string
                Action: 'DeleteExpression'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidTypeException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                DomainName: string
                ExpressionName: string
                Action: 'DeleteExpression'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                DomainName: string
                ExpressionName: string
                Action: 'DeleteExpression'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: { query: { Action: 'DeleteExpression'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteExpressionRequest }
            output: DeleteExpressionResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DeleteExpression'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteExpressionRequest }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DeleteExpression'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteExpressionRequest }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'DeleteExpression'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteExpressionRequest }
            output: InvalidTypeException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'DeleteExpression'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteExpressionRequest }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'DeleteExpression'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteExpressionRequest }
            output: ValidationException
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=DeleteIndexField': {
      $get:
        | {
            input: {
              query: {
                DomainName: string
                IndexFieldName: string
                Action: 'DeleteIndexField'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteIndexFieldResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DomainName: string
                IndexFieldName: string
                Action: 'DeleteIndexField'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DomainName: string
                IndexFieldName: string
                Action: 'DeleteIndexField'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DomainName: string
                IndexFieldName: string
                Action: 'DeleteIndexField'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidTypeException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                DomainName: string
                IndexFieldName: string
                Action: 'DeleteIndexField'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                DomainName: string
                IndexFieldName: string
                Action: 'DeleteIndexField'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: { query: { Action: 'DeleteIndexField'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteIndexFieldRequest }
            output: DeleteIndexFieldResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DeleteIndexField'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteIndexFieldRequest }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DeleteIndexField'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteIndexFieldRequest }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'DeleteIndexField'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteIndexFieldRequest }
            output: InvalidTypeException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'DeleteIndexField'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteIndexFieldRequest }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'DeleteIndexField'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteIndexFieldRequest }
            output: ValidationException
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=DeleteSuggester': {
      $get:
        | {
            input: {
              query: {
                DomainName: string
                SuggesterName: string
                Action: 'DeleteSuggester'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteSuggesterResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DomainName: string
                SuggesterName: string
                Action: 'DeleteSuggester'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DomainName: string
                SuggesterName: string
                Action: 'DeleteSuggester'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DomainName: string
                SuggesterName: string
                Action: 'DeleteSuggester'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidTypeException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                DomainName: string
                SuggesterName: string
                Action: 'DeleteSuggester'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                DomainName: string
                SuggesterName: string
                Action: 'DeleteSuggester'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: { query: { Action: 'DeleteSuggester'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteSuggesterRequest }
            output: DeleteSuggesterResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DeleteSuggester'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteSuggesterRequest }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DeleteSuggester'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteSuggesterRequest }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'DeleteSuggester'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteSuggesterRequest }
            output: InvalidTypeException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'DeleteSuggester'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteSuggesterRequest }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'DeleteSuggester'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteSuggesterRequest }
            output: ValidationException
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=DescribeAnalysisSchemes': {
      $get:
        | {
            input: {
              query: {
                DomainName: string
                AnalysisSchemeNames?: StandardName[] | undefined
                Deployed?: boolean | undefined
                Action: 'DescribeAnalysisSchemes'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeAnalysisSchemesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DomainName: string
                AnalysisSchemeNames?: StandardName[] | undefined
                Deployed?: boolean | undefined
                Action: 'DescribeAnalysisSchemes'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DomainName: string
                AnalysisSchemeNames?: StandardName[] | undefined
                Deployed?: boolean | undefined
                Action: 'DescribeAnalysisSchemes'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DomainName: string
                AnalysisSchemeNames?: StandardName[] | undefined
                Deployed?: boolean | undefined
                Action: 'DescribeAnalysisSchemes'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'DescribeAnalysisSchemes'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAnalysisSchemesRequest }
            output: DescribeAnalysisSchemesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DescribeAnalysisSchemes'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAnalysisSchemesRequest }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DescribeAnalysisSchemes'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAnalysisSchemesRequest }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'DescribeAnalysisSchemes'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAnalysisSchemesRequest }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=DescribeAvailabilityOptions': {
      $get:
        | {
            input: {
              query: {
                DomainName: string
                Deployed?: boolean | undefined
                Action: 'DescribeAvailabilityOptions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeAvailabilityOptionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DomainName: string
                Deployed?: boolean | undefined
                Action: 'DescribeAvailabilityOptions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DomainName: string
                Deployed?: boolean | undefined
                Action: 'DescribeAvailabilityOptions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DomainName: string
                Deployed?: boolean | undefined
                Action: 'DescribeAvailabilityOptions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidTypeException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                DomainName: string
                Deployed?: boolean | undefined
                Action: 'DescribeAvailabilityOptions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                DomainName: string
                Deployed?: boolean | undefined
                Action: 'DescribeAvailabilityOptions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                DomainName: string
                Deployed?: boolean | undefined
                Action: 'DescribeAvailabilityOptions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DisabledOperationException
            outputFormat: 'text'
            status: 485
          }
      $post:
        | {
            input: { query: { Action: 'DescribeAvailabilityOptions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAvailabilityOptionsRequest }
            output: DescribeAvailabilityOptionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DescribeAvailabilityOptions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAvailabilityOptionsRequest }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DescribeAvailabilityOptions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAvailabilityOptionsRequest }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'DescribeAvailabilityOptions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAvailabilityOptionsRequest }
            output: InvalidTypeException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'DescribeAvailabilityOptions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAvailabilityOptionsRequest }
            output: LimitExceededException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'DescribeAvailabilityOptions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAvailabilityOptionsRequest }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'DescribeAvailabilityOptions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAvailabilityOptionsRequest }
            output: DisabledOperationException
            outputFormat: 'text'
            status: 485
          }
    }
  } & {
    '/#Action=DescribeDomainEndpointOptions': {
      $get:
        | {
            input: {
              query: {
                DomainName: string
                Deployed?: boolean | undefined
                Action: 'DescribeDomainEndpointOptions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeDomainEndpointOptionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DomainName: string
                Deployed?: boolean | undefined
                Action: 'DescribeDomainEndpointOptions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DomainName: string
                Deployed?: boolean | undefined
                Action: 'DescribeDomainEndpointOptions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DomainName: string
                Deployed?: boolean | undefined
                Action: 'DescribeDomainEndpointOptions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                DomainName: string
                Deployed?: boolean | undefined
                Action: 'DescribeDomainEndpointOptions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                DomainName: string
                Deployed?: boolean | undefined
                Action: 'DescribeDomainEndpointOptions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DisabledOperationException
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: { query: { Action: 'DescribeDomainEndpointOptions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDomainEndpointOptionsRequest }
            output: DescribeDomainEndpointOptionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DescribeDomainEndpointOptions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDomainEndpointOptionsRequest }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DescribeDomainEndpointOptions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDomainEndpointOptionsRequest }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'DescribeDomainEndpointOptions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDomainEndpointOptionsRequest }
            output: LimitExceededException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'DescribeDomainEndpointOptions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDomainEndpointOptionsRequest }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'DescribeDomainEndpointOptions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDomainEndpointOptionsRequest }
            output: DisabledOperationException
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=DescribeDomains': {
      $get:
        | {
            input: {
              query: {
                DomainNames?: DomainName[] | undefined
                Action: 'DescribeDomains'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeDomainsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DomainNames?: DomainName[] | undefined
                Action: 'DescribeDomains'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DomainNames?: DomainName[] | undefined
                Action: 'DescribeDomains'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'DescribeDomains'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDomainsRequest }
            output: DescribeDomainsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DescribeDomains'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDomainsRequest }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DescribeDomains'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDomainsRequest }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=DescribeExpressions': {
      $get:
        | {
            input: {
              query: {
                DomainName: string
                ExpressionNames?: StandardName[] | undefined
                Deployed?: boolean | undefined
                Action: 'DescribeExpressions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeExpressionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DomainName: string
                ExpressionNames?: StandardName[] | undefined
                Deployed?: boolean | undefined
                Action: 'DescribeExpressions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DomainName: string
                ExpressionNames?: StandardName[] | undefined
                Deployed?: boolean | undefined
                Action: 'DescribeExpressions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DomainName: string
                ExpressionNames?: StandardName[] | undefined
                Deployed?: boolean | undefined
                Action: 'DescribeExpressions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'DescribeExpressions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeExpressionsRequest }
            output: DescribeExpressionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DescribeExpressions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeExpressionsRequest }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DescribeExpressions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeExpressionsRequest }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'DescribeExpressions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeExpressionsRequest }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=DescribeIndexFields': {
      $get:
        | {
            input: {
              query: {
                DomainName: string
                FieldNames?: DynamicFieldName[] | undefined
                Deployed?: boolean | undefined
                Action: 'DescribeIndexFields'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeIndexFieldsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DomainName: string
                FieldNames?: DynamicFieldName[] | undefined
                Deployed?: boolean | undefined
                Action: 'DescribeIndexFields'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DomainName: string
                FieldNames?: DynamicFieldName[] | undefined
                Deployed?: boolean | undefined
                Action: 'DescribeIndexFields'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DomainName: string
                FieldNames?: DynamicFieldName[] | undefined
                Deployed?: boolean | undefined
                Action: 'DescribeIndexFields'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'DescribeIndexFields'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeIndexFieldsRequest }
            output: DescribeIndexFieldsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DescribeIndexFields'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeIndexFieldsRequest }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DescribeIndexFields'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeIndexFieldsRequest }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'DescribeIndexFields'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeIndexFieldsRequest }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=DescribeScalingParameters': {
      $get:
        | {
            input: {
              query: {
                DomainName: string
                Action: 'DescribeScalingParameters'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeScalingParametersResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DomainName: string
                Action: 'DescribeScalingParameters'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DomainName: string
                Action: 'DescribeScalingParameters'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DomainName: string
                Action: 'DescribeScalingParameters'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'DescribeScalingParameters'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeScalingParametersRequest }
            output: DescribeScalingParametersResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DescribeScalingParameters'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeScalingParametersRequest }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DescribeScalingParameters'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeScalingParametersRequest }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'DescribeScalingParameters'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeScalingParametersRequest }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=DescribeServiceAccessPolicies': {
      $get:
        | {
            input: {
              query: {
                DomainName: string
                Deployed?: boolean | undefined
                Action: 'DescribeServiceAccessPolicies'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeServiceAccessPoliciesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DomainName: string
                Deployed?: boolean | undefined
                Action: 'DescribeServiceAccessPolicies'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DomainName: string
                Deployed?: boolean | undefined
                Action: 'DescribeServiceAccessPolicies'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DomainName: string
                Deployed?: boolean | undefined
                Action: 'DescribeServiceAccessPolicies'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'DescribeServiceAccessPolicies'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeServiceAccessPoliciesRequest }
            output: DescribeServiceAccessPoliciesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DescribeServiceAccessPolicies'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeServiceAccessPoliciesRequest }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DescribeServiceAccessPolicies'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeServiceAccessPoliciesRequest }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'DescribeServiceAccessPolicies'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeServiceAccessPoliciesRequest }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=DescribeSuggesters': {
      $get:
        | {
            input: {
              query: {
                DomainName: string
                SuggesterNames?: StandardName[] | undefined
                Deployed?: boolean | undefined
                Action: 'DescribeSuggesters'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeSuggestersResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DomainName: string
                SuggesterNames?: StandardName[] | undefined
                Deployed?: boolean | undefined
                Action: 'DescribeSuggesters'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DomainName: string
                SuggesterNames?: StandardName[] | undefined
                Deployed?: boolean | undefined
                Action: 'DescribeSuggesters'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DomainName: string
                SuggesterNames?: StandardName[] | undefined
                Deployed?: boolean | undefined
                Action: 'DescribeSuggesters'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'DescribeSuggesters'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeSuggestersRequest }
            output: DescribeSuggestersResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DescribeSuggesters'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeSuggestersRequest }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DescribeSuggesters'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeSuggestersRequest }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'DescribeSuggesters'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeSuggestersRequest }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=IndexDocuments': {
      $get:
        | {
            input: {
              query: { DomainName: string; Action: 'IndexDocuments'; Version: '2013-01-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: IndexDocumentsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { DomainName: string; Action: 'IndexDocuments'; Version: '2013-01-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { DomainName: string; Action: 'IndexDocuments'; Version: '2013-01-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: { DomainName: string; Action: 'IndexDocuments'; Version: '2013-01-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: { DomainName: string; Action: 'IndexDocuments'; Version: '2013-01-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'text'
            status: 483
          }
      $post:
        | {
            input: { query: { Action: 'IndexDocuments'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: IndexDocumentsRequest }
            output: IndexDocumentsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'IndexDocuments'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: IndexDocumentsRequest }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'IndexDocuments'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: IndexDocumentsRequest }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'IndexDocuments'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: IndexDocumentsRequest }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'IndexDocuments'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: IndexDocumentsRequest }
            output: ValidationException
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/#Action=ListDomainNames': {
      $get:
        | {
            input: { query: { Action: 'ListDomainNames'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListDomainNamesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'ListDomainNames'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'ListDomainNames'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListDomainNamesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'ListDomainNames'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=UpdateAvailabilityOptions': {
      $get:
        | {
            input: {
              query: {
                DomainName: string
                MultiAZ: boolean
                Action: 'UpdateAvailabilityOptions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UpdateAvailabilityOptionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DomainName: string
                MultiAZ: boolean
                Action: 'UpdateAvailabilityOptions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DomainName: string
                MultiAZ: boolean
                Action: 'UpdateAvailabilityOptions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DomainName: string
                MultiAZ: boolean
                Action: 'UpdateAvailabilityOptions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidTypeException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                DomainName: string
                MultiAZ: boolean
                Action: 'UpdateAvailabilityOptions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                DomainName: string
                MultiAZ: boolean
                Action: 'UpdateAvailabilityOptions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                DomainName: string
                MultiAZ: boolean
                Action: 'UpdateAvailabilityOptions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DisabledOperationException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: {
              query: {
                DomainName: string
                MultiAZ: boolean
                Action: 'UpdateAvailabilityOptions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'text'
            status: 486
          }
      $post:
        | {
            input: { query: { Action: 'UpdateAvailabilityOptions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateAvailabilityOptionsRequest }
            output: UpdateAvailabilityOptionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'UpdateAvailabilityOptions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateAvailabilityOptionsRequest }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'UpdateAvailabilityOptions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateAvailabilityOptionsRequest }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'UpdateAvailabilityOptions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateAvailabilityOptionsRequest }
            output: InvalidTypeException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'UpdateAvailabilityOptions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateAvailabilityOptionsRequest }
            output: LimitExceededException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'UpdateAvailabilityOptions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateAvailabilityOptionsRequest }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'UpdateAvailabilityOptions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateAvailabilityOptionsRequest }
            output: DisabledOperationException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: { query: { Action: 'UpdateAvailabilityOptions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateAvailabilityOptionsRequest }
            output: ValidationException
            outputFormat: 'text'
            status: 486
          }
    }
  } & {
    '/#Action=UpdateDomainEndpointOptions': {
      $get:
        | {
            input: {
              query: {
                DomainName: string
                DomainEndpointOptions: {
                  EnforceHTTPS?: {} | undefined
                  TLSSecurityPolicy?: {} | undefined
                }
                Action: 'UpdateDomainEndpointOptions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UpdateDomainEndpointOptionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DomainName: string
                DomainEndpointOptions: {
                  EnforceHTTPS?: {} | undefined
                  TLSSecurityPolicy?: {} | undefined
                }
                Action: 'UpdateDomainEndpointOptions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DomainName: string
                DomainEndpointOptions: {
                  EnforceHTTPS?: {} | undefined
                  TLSSecurityPolicy?: {} | undefined
                }
                Action: 'UpdateDomainEndpointOptions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DomainName: string
                DomainEndpointOptions: {
                  EnforceHTTPS?: {} | undefined
                  TLSSecurityPolicy?: {} | undefined
                }
                Action: 'UpdateDomainEndpointOptions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidTypeException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                DomainName: string
                DomainEndpointOptions: {
                  EnforceHTTPS?: {} | undefined
                  TLSSecurityPolicy?: {} | undefined
                }
                Action: 'UpdateDomainEndpointOptions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                DomainName: string
                DomainEndpointOptions: {
                  EnforceHTTPS?: {} | undefined
                  TLSSecurityPolicy?: {} | undefined
                }
                Action: 'UpdateDomainEndpointOptions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                DomainName: string
                DomainEndpointOptions: {
                  EnforceHTTPS?: {} | undefined
                  TLSSecurityPolicy?: {} | undefined
                }
                Action: 'UpdateDomainEndpointOptions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DisabledOperationException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: {
              query: {
                DomainName: string
                DomainEndpointOptions: {
                  EnforceHTTPS?: {} | undefined
                  TLSSecurityPolicy?: {} | undefined
                }
                Action: 'UpdateDomainEndpointOptions'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'text'
            status: 486
          }
      $post:
        | {
            input: { query: { Action: 'UpdateDomainEndpointOptions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDomainEndpointOptionsRequest }
            output: UpdateDomainEndpointOptionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'UpdateDomainEndpointOptions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDomainEndpointOptionsRequest }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'UpdateDomainEndpointOptions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDomainEndpointOptionsRequest }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'UpdateDomainEndpointOptions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDomainEndpointOptionsRequest }
            output: InvalidTypeException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'UpdateDomainEndpointOptions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDomainEndpointOptionsRequest }
            output: LimitExceededException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'UpdateDomainEndpointOptions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDomainEndpointOptionsRequest }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'UpdateDomainEndpointOptions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDomainEndpointOptionsRequest }
            output: DisabledOperationException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: { query: { Action: 'UpdateDomainEndpointOptions'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDomainEndpointOptionsRequest }
            output: ValidationException
            outputFormat: 'text'
            status: 486
          }
    }
  } & {
    '/#Action=UpdateScalingParameters': {
      $get:
        | {
            input: {
              query: {
                DomainName: string
                ScalingParameters: {
                  DesiredInstanceType?: {} | undefined
                  DesiredReplicationCount?: {} | undefined
                  DesiredPartitionCount?: {} | undefined
                }
                Action: 'UpdateScalingParameters'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UpdateScalingParametersResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DomainName: string
                ScalingParameters: {
                  DesiredInstanceType?: {} | undefined
                  DesiredReplicationCount?: {} | undefined
                  DesiredPartitionCount?: {} | undefined
                }
                Action: 'UpdateScalingParameters'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DomainName: string
                ScalingParameters: {
                  DesiredInstanceType?: {} | undefined
                  DesiredReplicationCount?: {} | undefined
                  DesiredPartitionCount?: {} | undefined
                }
                Action: 'UpdateScalingParameters'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DomainName: string
                ScalingParameters: {
                  DesiredInstanceType?: {} | undefined
                  DesiredReplicationCount?: {} | undefined
                  DesiredPartitionCount?: {} | undefined
                }
                Action: 'UpdateScalingParameters'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                DomainName: string
                ScalingParameters: {
                  DesiredInstanceType?: {} | undefined
                  DesiredReplicationCount?: {} | undefined
                  DesiredPartitionCount?: {} | undefined
                }
                Action: 'UpdateScalingParameters'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                DomainName: string
                ScalingParameters: {
                  DesiredInstanceType?: {} | undefined
                  DesiredReplicationCount?: {} | undefined
                  DesiredPartitionCount?: {} | undefined
                }
                Action: 'UpdateScalingParameters'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidTypeException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                DomainName: string
                ScalingParameters: {
                  DesiredInstanceType?: {} | undefined
                  DesiredReplicationCount?: {} | undefined
                  DesiredPartitionCount?: {} | undefined
                }
                Action: 'UpdateScalingParameters'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'text'
            status: 485
          }
      $post:
        | {
            input: { query: { Action: 'UpdateScalingParameters'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateScalingParametersRequest }
            output: UpdateScalingParametersResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'UpdateScalingParameters'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateScalingParametersRequest }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'UpdateScalingParameters'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateScalingParametersRequest }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'UpdateScalingParameters'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateScalingParametersRequest }
            output: LimitExceededException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'UpdateScalingParameters'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateScalingParametersRequest }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'UpdateScalingParameters'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateScalingParametersRequest }
            output: InvalidTypeException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'UpdateScalingParameters'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateScalingParametersRequest }
            output: ValidationException
            outputFormat: 'text'
            status: 485
          }
    }
  } & {
    '/#Action=UpdateServiceAccessPolicies': {
      $get:
        | {
            input: {
              query: {
                DomainName: string
                AccessPolicies: string
                Action: 'UpdateServiceAccessPolicies'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UpdateServiceAccessPoliciesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DomainName: string
                AccessPolicies: string
                Action: 'UpdateServiceAccessPolicies'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DomainName: string
                AccessPolicies: string
                Action: 'UpdateServiceAccessPolicies'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DomainName: string
                AccessPolicies: string
                Action: 'UpdateServiceAccessPolicies'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                DomainName: string
                AccessPolicies: string
                Action: 'UpdateServiceAccessPolicies'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                DomainName: string
                AccessPolicies: string
                Action: 'UpdateServiceAccessPolicies'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidTypeException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                DomainName: string
                AccessPolicies: string
                Action: 'UpdateServiceAccessPolicies'
                Version: '2013-01-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'text'
            status: 485
          }
      $post:
        | {
            input: { query: { Action: 'UpdateServiceAccessPolicies'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServiceAccessPoliciesRequest }
            output: UpdateServiceAccessPoliciesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'UpdateServiceAccessPolicies'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServiceAccessPoliciesRequest }
            output: BaseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'UpdateServiceAccessPolicies'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServiceAccessPoliciesRequest }
            output: InternalException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'UpdateServiceAccessPolicies'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServiceAccessPoliciesRequest }
            output: LimitExceededException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'UpdateServiceAccessPolicies'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServiceAccessPoliciesRequest }
            output: ResourceNotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'UpdateServiceAccessPolicies'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServiceAccessPoliciesRequest }
            output: InvalidTypeException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'UpdateServiceAccessPolicies'; Version: '2013-01-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServiceAccessPoliciesRequest }
            output: ValidationException
            outputFormat: 'text'
            status: 485
          }
    }
  },
  '/'
>
export default routes
